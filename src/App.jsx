import { useEffect, lazy, Suspense, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import ComingSoon from './Component/ComingSoon'
import Scanner from './Component/Scanner'

// Website components (currently disabled - will be enabled when product launches)
// import Header from './Component/Header'
// import Home from './Component/Home'
// const OurFlavours = lazy(() => import('./Component/OurFlavours'))
// const CTASection = lazy(() => import('./Component/CTASection'))
// const Footer = lazy(() => import('./Component/Footer'))

function App() {
  // Coming Soon mode - no timer, just static display
  // When product launches, remove ComingSoon and uncomment website components

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<ComingSoon onComplete={() => {}} />} />
        <Route path="/scan" element={<Scanner />} />
      </Routes>
    </div>
  )
}

export default App
