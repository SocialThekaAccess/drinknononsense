import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Scanner from './Component/Scanner'

// Main website components
import Header from './Component/Header'
import Home from './Component/Home'

// Lazy load heavy components for better performance
const OurFlavours = lazy(() => import('./Component/OurFlavours'))
const CTASection = lazy(() => import('./Component/CTASection'))
const Footer = lazy(() => import('./Component/Footer'))

// Simple loading component
function LoadingFallback() {
  return (
    <div className="loading" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '50vh',
      fontSize: '1.2rem',
      color: '#fff'
    }}>
      Loading...
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <Home />
              <Suspense fallback={<LoadingFallback />}>
                <OurFlavours />
                <CTASection />
                <Footer />
              </Suspense>
            </>
          } 
        />
        <Route path="/scan" element={<Scanner />} />
      </Routes>
    </div>
  )
}

export default App
