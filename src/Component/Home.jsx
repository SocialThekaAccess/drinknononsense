import './Home.css'
import posterImage from '../assets/Nonsense Neon Monster Energy Poster.png'

function Home() {
  return (
    <section className="hero" id="home">
      {/* Blurred background: sirf side ki khaali jagah bharta hai */}
      <img className="hero-bg" src={posterImage} alt="" aria-hidden="true" loading="eager" />

      {/* Main image: poori dikhegi, logo aur cans cut nahi honge */}
      <img
        className="hero-image"
        src={posterImage}
        alt="No Nonsense Energy Drinks"
        loading="eager"
        fetchPriority="high"
      />
    </section>
  )
}

export default Home