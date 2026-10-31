import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Scanner from './Component/Scanner'

// Main website components
import Header from './Component/Header'
import Home from './Component/Home'
const OurFlavours = lazy(() => import('./Component/OurFlavours'))
const CTASection = lazy(() => import('./Component/CTASection'))
const Footer = lazy(() => import('./Component/Footer'))

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
              <Suspense fallback={<div className="loading">Loading...</div>}>
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
