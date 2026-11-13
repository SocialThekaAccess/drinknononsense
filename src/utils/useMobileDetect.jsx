import { useState, useEffect } from 'react'

/**
 * Mobile detection hook - Detects mobile devices and connection speed
 * @param {number} breakpoint - Screen width breakpoint (default: 768px)
 */
export function useMobileDetect(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)
  const [isSlowConnection, setIsSlowConnection] = useState(false)

  useEffect(() => {
    // Check screen width
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= breakpoint)
    }

    // Check connection speed
    const checkConnection = () => {
      if ('connection' in navigator) {
        const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection
        if (conn) {
          // Slow connections: 2g, slow-2g, 3g
          const slowTypes = ['slow-2g', '2g', '3g']
          setIsSlowConnection(
            slowTypes.includes(conn.effectiveType) || 
            conn.saveData === true ||
            (conn.downlink && conn.downlink < 1.5) // Less than 1.5 Mbps
          )
        }
      }
    }

    checkMobile()
    checkConnection()

    window.addEventListener('resize', checkMobile)
    
    if ('connection' in navigator) {
      const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection
      if (conn) {
        conn.addEventListener('change', checkConnection)
      }
    }

    return () => {
      window.removeEventListener('resize', checkMobile)
      if ('connection' in navigator) {
        const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection
        if (conn) {
          conn.removeEventListener('change', checkConnection)
        }
      }
    }
  }, [breakpoint])

  return { isMobile, isSlowConnection }
}

/**
 * Detect if user prefers reduced data usage
 */
export function useDataSaverMode() {
  const [dataSaver, setDataSaver] = useState(false)

  useEffect(() => {
    if ('connection' in navigator) {
      const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection
      if (conn && conn.saveData) {
        setDataSaver(true)
      }
    }
  }, [])

  return dataSaver
}

/**
 * Get device pixel ratio for image optimization
 */
export function useDevicePixelRatio() {
  const [dpr, setDpr] = useState(1)

  useEffect(() => {
    setDpr(window.devicePixelRatio || 1)
  }, [])

  return dpr
}
