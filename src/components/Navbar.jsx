import React, { useState, useEffect } from 'react'

const Navbar = ({ currentPage, onNavigate, onScrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navLinks = [
    { name: 'Home', action: () => onNavigate('home') },
    { name: 'Dashboard', action: () => onNavigate('dashboard') },
    { name: 'Customers', action: () => onScrollToSection('customers') },
    { name: 'Showcase', action: () => onScrollToSection('showcase') },
    { name: 'Testimonials', action: () => onScrollToSection('testimonials') },
    { name: 'Pricing', action: () => onNavigate('pricing') },
    { name: 'Contact', action: () => onNavigate('contact') }
  ]

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (link) => {
    link.action()
    setMobileMenuOpen(false)
  }

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-blue-900/90 backdrop-blur-md py-3 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')} 
            className="flex items-center"
          >
            <div className="text-white text-2xl font-bold flex items-center gap-2">
              <span className="text-cyan-400">Fin</span>Dash
              <span className="text-cyan-400 text-xl">✨</span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => handleLinkClick(link)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  (currentPage === 'home' && link.name === 'Home') ||
                  (currentPage === 'dashboard' && link.name === 'Dashboard') ||
                  (currentPage === 'pricing' && link.name === 'Pricing') ||
                  (currentPage === 'contact' && link.name === 'Contact')
                    ? 'text-cyan-400 bg-white/10'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => onNavigate('pricing')}
              className="bg-cyan-400 hover:bg-cyan-300 text-blue-900 font-semibold px-6 py-2 rounded-lg text-sm transition-colors duration-200 inline-flex items-center gap-2"
            >
              Start Free Trial
              <span>→</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen 
              ? 'max-h-screen opacity-100 mt-4 bg-blue-800/90 backdrop-blur-md rounded-xl'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => handleLinkClick(link)}
                className="block w-full text-left px-4 py-3 text-white/80 hover:text-white font-medium hover:bg-white/10 rounded-lg transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-2 pb-4">
              <button
                onClick={() => {
                  onNavigate('pricing')
                  setMobileMenuOpen(false)
                }}
                className="block w-full bg-cyan-400 hover:bg-cyan-300 text-blue-900 font-semibold px-4 py-3 rounded-lg text-center transition-colors duration-200"
              >
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
