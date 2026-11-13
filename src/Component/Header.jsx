import MobileOptimizedVideo from '../utils/MobileOptimizedVideo'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-top-bar">
        <div className="header-logo">
          <MobileOptimizedVideo
            className="logo-video"
            src="/LogoVideo.mp4"
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
            forceLoad={false}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
