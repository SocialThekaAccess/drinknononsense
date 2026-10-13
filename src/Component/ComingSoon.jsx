import { useEffect, useState } from 'react'
import './ComingSoon.css'

function ComingSoon({ onComplete }) {
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // After 3 seconds, start fade out
    const timer1 = setTimeout(() => {
      setFadeOut(true)
    }, 3000)

    // After fade out completes, call onComplete
    const timer2 = setTimeout(() => {
      onComplete()
    }, 3800)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [onComplete])

  return (
    <div className={`coming-soon-overlay ${fadeOut ? 'fade-out' : ''}`}>
      <div className="coming-soon-content">
        {/* Animated logo/brand */}
        <div className="cs-logo-container">
          <div className="cs-glow-effect"></div>
          <h1 className="cs-brand">NO NONSENSE</h1>
        </div>

        {/* Coming soon text */}
        <div className="cs-text-container">
          <p className="cs-subtitle">COMING SOON</p>
          <p className="cs-tagline">Big Energy • Zero Nonsense</p>
        </div>

        {/* Animated loader */}
        <div className="cs-loader">
          <div className="cs-loader-bar"></div>
        </div>

        {/* Decorative elements */}
        <div className="cs-decoration cs-decoration-1"></div>
        <div className="cs-decoration cs-decoration-2"></div>
        <div className="cs-decoration cs-decoration-3"></div>
      </div>
    </div>
  )
}

export default ComingSoon
