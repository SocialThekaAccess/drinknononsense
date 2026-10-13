import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-top-bar">
        <div className="header-logo">
          <video
            className="logo-video"
            src="/LogoVideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
        </div>
      </div>
    </header>
  )
}

export default Header
