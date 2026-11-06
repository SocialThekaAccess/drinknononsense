import { Helmet } from 'react-helmet-async'
import './Home.css'

function Home() {
  const handleScrollToStory = (e) => {
    e.preventDefault()
    const storySection = document.getElementById('story')
    if (storySection) {
      storySection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      // Prevent hash from appearing in URL
      if (window.history.pushState) {
        window.history.pushState(null, null, window.location.pathname)
      }
    }
  }

  return (
    <>
      <Helmet>
        <title>No Nonsense | Caffeinated Protein Drink</title>
        <meta name="description" content="Zero sugar, protein-infused energy drinks with bold flavours. Built for those who refuse to compromise." />
      </Helmet>
      
      <section className="hero" id="home">
        {/* Video background */}
        <video
          className="hero-video"
          src="/3inOne.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark overlay for better text visibility */}
        <div className="hero-shade hero-shade-top" />
        <div className="hero-shade hero-shade-bottom" />

        {/* Top: headline */}
        <div className="hero-top">
          <span className="hero-eyebrow">Zero Nonsense</span>
          <h1 className="hero-headline">
            Protein-Infused <em>Energy</em>
          </h1>
        </div>

        {/* Bottom row: tagline + CTA | specs */}
        <div className="hero-bottom">
          <div className="hero-left">
            <p className="hero-tagline">
              Caffeinated protein drinks with zero sugar. Built for those who refuse to compromise.
            </p>
            <button className="hero-cta" onClick={handleScrollToStory}>
              Discover Flavours
              <span className="hero-cta-arrow">→</span>
            </button>
          </div>
          <div className="hero-specs">
            <span className="hero-pill">Zero Sugar</span>
            <span className="hero-pill">Protein Infused</span>
            <span className="hero-pill">250ml</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home