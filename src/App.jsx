import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Hero from './components/Hero'
import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPanel'
import CustomerSection from './components/CustomerSection'
import TestimonialSection from './components/TestimonialSection'
import ShowcaseWork from './components/ShowcaseWork'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Dashboard from './components/Dashboard'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function App() {
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState('home')
  
  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])

  // Handle page navigation
  const navigateToPage = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Handle section scrolling for home page
  const scrollToSection = (sectionId) => {
    if (currentPage !== 'home') {
      setCurrentPage('home')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  // Render different pages based on current page state
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />
      case 'pricing':
        return <Pricing onNavigate={navigateToPage} />
      case 'contact':
        return <Contact />
      default:
        return (
          <>
            {/* Home Page Content */}
            <div id="home" className="pt-24">
              <Header />
            </div>
            
            {/* Hero Section with Dashboard Panels */}
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-screen">
                <LeftPanel />
                <Hero onNavigate={navigateToPage} />
                <RightPanel />
              </div>
            </div>
            
            {/* Additional Sections */}
            <div id="customers">
              <CustomerSection />
            </div>
            
            <div id="showcase">
              <ShowcaseWork />
            </div>
            
            <div id="testimonials">
              <TestimonialSection />
            </div>
            
            {/* Footer Component */}
            <Footer />
          </>
        )
    }
  }
  
  return (
    <>
      {/* Loader Component */}
      <Loader isLoading={loading} />
    
      {/* Main Application */}
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="relative overflow-hidden">
          {/* Navbar */}
          <Navbar 
            currentPage={currentPage} 
            onNavigate={navigateToPage}
            onScrollToSection={scrollToSection}
          />
          
          {/* Render current page content */}
          {renderPage()}
        </div>
      </div>
    </>
  )
}

export default App
