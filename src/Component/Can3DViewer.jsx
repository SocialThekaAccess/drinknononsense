import { useEffect, useRef } from 'react'
import './Can3DViewer.css'

/**
 * 3D Can Viewer Component
 * Loads 3D HTML models in an iframe
 * 
 * @param {string} src - Path to the 3D HTML file
 * @param {string} title - Alt text / title
 * @param {string} flavour - Flavour name (for styling)
 */
function Can3DViewer({ src, title, flavour = 'mango' }) {
  const iframeRef = useRef(null)

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    // Make iframe responsive
    const handleResize = () => {
      if (iframe.contentWindow) {
        iframe.style.height = `${iframe.offsetWidth * 1.2}px`
      }
    }

    iframe.addEventListener('load', handleResize)
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      iframe.removeEventListener('load', handleResize)
      window.removeEventListener('resize', handleResize)
    }
  }, [src])

  return (
    <div className={`can-3d-wrapper can-3d-${flavour}`}>
      <iframe
        ref={iframeRef}
        src={src}
        title={title}
        className="can-3d-iframe"
        loading="lazy"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  )
}

export default Can3DViewer
