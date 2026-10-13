import './ComingSoon.css'

function ComingSoon() {
  // No timers - page stays visible with pulsing animation

  return (
    <div className="coming-soon-overlay">
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
