import { useState, useEffect, useRef } from 'react'
import { useMobileDetect, useDataSaverMode } from './useMobileDetect'
import './LazyComponents.css'

/**
 * Mobile-Optimized Lazy Video
 * - Detects mobile devices
 * - Detects slow connections
 * - Respects data saver mode
 * - Reduces quality on mobile if needed
 * - Auto-pauses when not in view (mobile battery saver)
 */
function MobileOptimizedVideo({ 
  src, 
  mobileSrc = null, // Optional lower quality version for mobile
  poster = null, // Poster image instead of video on slow connections
  autoPlay = false, 
  loop = false, 
  muted = true, 
  playsInline = true,
  className = '', 
  style = {},
  forceLoad = false, // Force load even on slow connection
  ...props 
}) {
  const { isMobile, isSlowConnection } = useMobileDetect()
  const dataSaver = useDataSaverMode()
  const [isInView, setIsInView] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [shouldPlayVideo, setShouldPlayVideo] = useState(true)
  const videoRef = useRef(null)

  // Decide if we should show video or just poster
  useEffect(() => {
    // Show poster instead of video if:
    // 1. User has data saver enabled, OR
    // 2. Slow connection AND mobile AND not forced
    if (dataSaver || (isSlowConnection && isMobile && !forceLoad)) {
      setShouldPlayVideo(false)
    } else {
      setShouldPlayVideo(true)
    }
  }, [dataSaver, isSlowConnection, isMobile, forceLoad])

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
        if (!entry.isIntersecting && videoRef.current && !videoRef.current.paused) {
          // Pause video when out of view (mobile battery saver)
          videoRef.current.pause()
        }
      },
      {
        rootMargin: isMobile ? '50px' : '100px', // Smaller margin on mobile
        threshold: 0.01
      }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current)
      }
    }
  }, [isMobile])

  // Handle autoplay when loaded and in view
  useEffect(() => {
    if (isInView && isLoaded && autoPlay && shouldPlayVideo && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay failed, silently catch
      })
    }
  }, [isInView, isLoaded, autoPlay, shouldPlayVideo])

  // Choose video source: mobile version if available and on mobile
  const videoSource = isMobile && mobileSrc ? mobileSrc : src

  // If we shouldn't play video, show poster image or placeholder
  if (!shouldPlayVideo && poster) {
    return (
      <div 
        className={`mobile-video-poster ${className}`}
        style={{
          ...style,
          backgroundImage: `url(${poster})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        {...props}
      >
        <div className="data-saver-badge">
          📱 Data Saver Mode
        </div>
      </div>
    )
  }

  return (
    <video
      ref={videoRef}
      className={`${className} ${isLoaded ? 'is-loaded' : 'is-loading'} ${isMobile ? 'mobile-video' : ''}`}
      style={style}
      autoPlay={false} // We handle autoplay manually
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload={isSlowConnection ? 'none' : 'metadata'} // 'none' on slow connections
      onLoadedData={() => setIsLoaded(true)}
      poster={poster}
      {...props}
    >
      {isInView && shouldPlayVideo && <source src={videoSource} type="video/mp4" />}
    </video>
  )
}

export default MobileOptimizedVideo
