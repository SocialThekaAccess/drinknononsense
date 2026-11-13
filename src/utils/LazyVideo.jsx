import { useState, useEffect, useRef } from 'react'
import './LazyComponents.css'

/**
 * LazyVideo - Lazy loads videos only when visible
 * @param {string} src - Video source URL
 * @param {boolean} autoPlay - Auto play when loaded
 * @param {boolean} loop - Loop video
 * @param {boolean} muted - Muted audio
 * @param {string} className - CSS classes
 */
function LazyVideo({ 
  src, 
  autoPlay = false, 
  loop = false, 
  muted = true, 
  playsInline = true,
  className = '', 
  style = {},
  preload = 'metadata',
  ...props 
}) {
  const [isInView, setIsInView] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '100px', // Load 100px before visible
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
  }, [])

  useEffect(() => {
    if (isInView && isLoaded && autoPlay && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Auto-play failed, silently catch error
      })
    }
  }, [isInView, isLoaded, autoPlay])

  return (
    <video
      ref={videoRef}
      className={`${className} ${isLoaded ? 'is-loaded' : 'is-loading'}`}
      style={style}
      autoPlay={false} // We'll handle autoPlay manually
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload={preload}
      onLoadedData={() => setIsLoaded(true)}
      {...props}
    >
      {isInView && <source src={src} type="video/mp4" />}
    </video>
  )
}

export default LazyVideo
