import { useState, useEffect, useRef } from 'react'
import './LazyComponents.css'

/**
 * LazyImage - Lazy loads images only when they come into viewport
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text
 * @param {string} className - CSS classes
 * @param {object} style - Inline styles
 */
function LazyImage({ src, alt = '', className = '', style = {}, ...props }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '50px', // Load 50px before visible
        threshold: 0.01
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current)
      }
    }
  }, [])

  return (
    <img
      ref={imgRef}
      src={isInView ? src : ''}
      alt={alt}
      className={`${className} ${isLoaded ? 'is-loaded' : 'is-loading'}`}
      style={style}
      onLoad={() => setIsLoaded(true)}
      loading="lazy"
      {...props}
    />
  )
}

export default LazyImage
