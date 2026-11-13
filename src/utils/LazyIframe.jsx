import { useState, useEffect, useRef } from 'react'
import './LazyComponents.css'

/**
 * LazyIframe - Lazy loads iframes (3D models) only when visible
 * Heavy 3D iframes ko tab tak load nahi karta jab tak scroll karke dikhe nahi
 */
function LazyIframe({ 
  src, 
  title = '', 
  className = '', 
  style = {},
  sandbox = 'allow-scripts allow-same-origin',
  ...props 
}) {
  const [isInView, setIsInView] = useState(false)
  const iframeRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          // Keep observing for iframes (might need reload on visibility change)
        }
      },
      {
        rootMargin: '200px', // Load 200px before visible (3D models take time)
        threshold: 0.01
      }
    )

    if (iframeRef.current) {
      observer.observe(iframeRef.current)
    }

    return () => {
      if (iframeRef.current) {
        observer.unobserve(iframeRef.current)
      }
    }
  }, [])

  return (
    <div 
      ref={iframeRef}
      className={`lazy-iframe-wrapper ${className}`}
      style={style}
    >
      {isInView ? (
        <iframe
          src={src}
          title={title}
          sandbox={sandbox}
          loading="lazy"
          className="lazy-iframe-loaded"
          {...props}
        />
      ) : (
        <div className="lazy-iframe-placeholder">
          <div className="lazy-spinner"></div>
        </div>
      )}
    </div>
  )
}

export default LazyIframe
