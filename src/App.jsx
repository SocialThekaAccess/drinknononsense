import { useEffect, lazy, Suspense } from 'react'
import './App.css'
import Header from './Component/Header'
import Home from './Component/Home'

// Lazy load heavy components
const OurFlavours = lazy(() => import('./Component/OurFlavours'))
const CTASection = lazy(() => import('./Component/CTASection'))
const Footer = lazy(() => import('./Component/Footer'))

// Loading fallback component
function LoadingSpinner() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '50vh',
      color: '#f5e6d3'
    }}>
      <div style={{
        width: '50px',
        height: '50px',
        border: '4px solid rgba(196, 30, 30, 0.2)',
        borderTop: '4px solid #c41e1e',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>
    </div>
  )
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <Header />
      <Home />
      <Suspense fallback={<LoadingSpinner />}>
        <OurFlavours />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <CTASection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
