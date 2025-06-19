import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Dashboard', href: '#dashboard' },
        { name: 'Reports', href: '#reports' },
        { name: 'Forecasting', href: '#forecasting' },
        { name: 'Consolidation', href: '#consolidation' },
        { name: 'AI Insights', href: '#ai-insights' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#docs' },
        { name: 'API Reference', href: '#api' },
        { name: 'Knowledge Base', href: '#kb' },
        { name: 'Video Tutorials', href: '#tutorials' },
        { name: 'Webinars', href: '#webinars' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Careers', href: '#careers' },
        { name: 'Press', href: '#press' },
        { name: 'Partners', href: '#partners' },
        { name: 'Contact', href: '#contact' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms of Service', href: '#terms' },
        { name: 'Privacy Policy', href: '#privacy' },
        { name: 'Cookie Policy', href: '#cookies' },
        { name: 'GDPR Compliance', href: '#gdpr' },
        { name: 'Security', href: '#security' },
      ]
    },
  ]
  
  const socialLinks = [
    { name: 'Twitter', href: '#twitter', icon: '𝕏' },
    { name: 'LinkedIn', href: '#linkedin', icon: 'in' },
    { name: 'Facebook', href: '#facebook', icon: 'f' },
    { name: 'Instagram', href: '#instagram', icon: '📷' },
    { name: 'YouTube', href: '#youtube', icon: '▶️' },
  ]

  return (
    <footer className="bg-blue-900/90 backdrop-blur-lg border-t border-white/10">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Newsletter Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Get Financial Insights Delivered
              </h3>
              <p className="text-white/70 mb-4">
                Join 20,000+ finance professionals who receive our weekly newsletter with industry trends, tips, and insights.
              </p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-white/10 text-white placeholder-white/50 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <button 
                  type="submit"
                  className="bg-cyan-400 hover:bg-cyan-300 text-blue-900 font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-white/50 text-xs mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
        
        {/* Main Footer Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-white/70 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo and Copyright */}
            <div className="flex items-center space-x-2">
              <div className="text-white text-xl font-bold flex items-center">
                <span className="text-cyan-400">Fin</span>Dash
                <span className="text-cyan-400 text-lg ml-1">✨</span>
              </div>
              <div className="text-white/50 text-sm ml-4">
                © {currentYear} FinDash Inc. All rights reserved.
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-cyan-400/20 hover:text-cyan-400 transition-all duration-200"
                >
                  <span>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
