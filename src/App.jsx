import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

// Only critical components load immediately
import Header from './Component/Header'
import Home from './Component/Home'

// EVERYTHING ELSE is lazy loaded - Maximum performance boost! 🚀
const Scanner = lazy(() => import('./Component/Scanner'))
const OurFlavours = lazy(() => import('./Component/OurFlavours'))
const CTASection = lazy(() => import('./Component/CTASection'))
const Footer = lazy(() => import('./Component/Footer'))
const TermsConditions = lazy(() => import('./Component/TermsConditions'))
const PrivacyPolicy = lazy(() => import('./Component/PrivacyPolicy'))
const ReturnPolicy = lazy(() => import('./Component/ReturnPolicy'))

// Enhanced loading component with skeleton
function LoadingFallback() {
  return (
    <div className="loading" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '50vh',
      fontSize: '1.2rem',
      color: '#fff',
      gap: '1rem'
    }}>
      <div className="loading-spinner" style={{
        width: '40px',
        height: '40px',
        border: '4px solid rgba(196, 30, 30, 0.2)',
        borderTop: '4px solid #c41e1e',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>
      <span>Loading...</span>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
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
              </Suspense>
              <Suspense fallback={<LoadingFallback />}>
                <CTASection />
              </Suspense>
              <Suspense fallback={<LoadingFallback />}>
                <Footer />
              </Suspense>
            </>
          } 
        />
        <Route 
          path="/scan" 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Scanner />
            </Suspense>
          } 
        />
        <Route 
          path="/terms-conditions" 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <TermsConditions />
            </Suspense>
          } 
        />
        <Route 
          path="/privacy-policy" 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <PrivacyPolicy />
            </Suspense>
          } 
        />
        <Route 
          path="/return-policy" 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <ReturnPolicy />
            </Suspense>
          } 
        />
      </Routes>
    </div>
  )
}

export default App
