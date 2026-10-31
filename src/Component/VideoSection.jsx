import './VideoSection.css'

function VideoSection({ videoSrc }) {
  return (
    <section className="video-section">
      <video 
        className="fullscreen-video"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        loading="lazy"
      />
    </section>
  )
}

export default VideoSection
