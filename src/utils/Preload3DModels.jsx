import { useEffect } from 'react'

/**
 * Preload 3D model iframes in background for instant loading
 * Creates hidden iframes that start loading immediately
 */
function Preload3DModels() {
  useEffect(() => {
    // Only preload on mobile
    const isMobile = window.innerWidth <= 900

    if (!isMobile) return

    const models = [
      '/Can3DMango.html',
      '/3DCanCoffeecola.html',
      '/3DCanClassicWildBerry.html'
    ]

    // Create hidden iframes to preload 3D models
    const iframes = models.map((src) => {
      const iframe = document.createElement('iframe')
      iframe.src = src
      iframe.style.cssText = `
        position: fixed;
        top: -9999px;
        left: -9999px;
        width: 1px;
        height: 1px;
        opacity: 0;
        pointer-events: none;
        z-index: -1;
      `
      iframe.sandbox = 'allow-scripts allow-same-origin'
      document.body.appendChild(iframe)
      return iframe
    })

    // Cleanup on unmount
    return () => {
      iframes.forEach((iframe) => {
        if (iframe.parentNode) {
          iframe.parentNode.removeChild(iframe)
        }
      })
    }
  }, [])

  return null // This component doesn't render anything
}

export default Preload3DModels
