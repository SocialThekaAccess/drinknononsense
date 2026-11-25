import { useState, useEffect, useRef } from 'react'

/**
 * Lazy Loading 3D iframe
 * Loads 3D model only when it comes into view (Intersection Observer)
 */
function Lazy3DIframe({ src, title, className = '', sandbox = 'allow-scripts allow-same-origin', ...props }) {
  const [isInView, setIsInView] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const iframeRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          // Once loaded, disconnect observer
          if (iframeRef.current) {
            observer.unobserve(iframeRef.current)
          }
        }
      },
      {
        rootMargin: '100px', // Load 100px before coming into view
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
      className={`lazy-3d-wrapper ${className} ${isLoaded ? 'is-loaded' : 'is-loading'}`}
      style={{ position: 'relative', width: '100%', height: '100%' }}
    >
      {!isLoaded && (
        <div className="lazy-3d-placeholder" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(circle, rgba(196, 30, 30, 0.1) 0%, transparent 70%)',
          color: '#c41e1e',
          fontSize: '1rem',
          fontWeight: '600'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div className="loading-spinner" style={{
              width: '40px',
              height: '40px',
              border: '4px solid rgba(196, 30, 30, 0.1)',
              borderTop: '4px solid #c41e1e',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 10px'
            }} />
            Loading 3D Model...
          </div>
        </div>
      )}
      
      {isInView && (
        <iframe
          src={src}
          title={title}
          className={className}
          sandbox={sandbox}
          onLoad={() => setIsLoaded(true)}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease',
            width: '100%',
            height: '100%'
          }}
          {...props}
        />
      )}

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default Lazy3DIframe
