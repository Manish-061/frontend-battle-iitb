import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: 'general',
    budget: '',
    timeline: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [openFaq, setOpenFaq] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  const contactMethods = [
    {
      title: 'Email Support',
      description: 'Get assistance with technical issues, account management, and billing questions.',
      icon: '📧',
      primary: 'support@findash.com',
      secondary: 'Response time: 24-48 hours',
      color: 'bg-blue-400/20',
      link: 'mailto:support@findash.com'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our customer success team for personalized help.',
      icon: '📞',
      primary: '+1 (555) 123-4567',
      secondary: 'Available Mon-Fri, 9am-6pm ET',
      color: 'bg-green-400/20',
      link: 'tel:+15551234567'
    },
    {
      title: 'Live Chat',
      description: 'Get immediate help with quick questions and platform guidance.',
      icon: '💬',
      primary: 'Live Chat on Dashboard',
      secondary: 'Available 24/7 for Professional & Enterprise',
      color: 'bg-purple-400/20',
      link: '#chat'
    },
    {
      title: 'Visit Our Offices',
      description: 'Schedule an in-person meeting with our team.',
      icon: '🏢',
      primary: 'Book an Appointment',
      secondary: 'New York, San Francisco, London',
      color: 'bg-yellow-400/20',
      link: '#visit'
    }
  ]

  const offices = [
    {
      location: 'New York (HQ)',
      address: ['350 Fifth Avenue', 'Suite 4500', 'New York, NY 10118'],
      phone: '+1 (555) 123-4567',
      email: 'newyork@findash.com',
      hours: 'Mon-Fri: 9am-6pm ET'
    },
    {
      location: 'San Francisco',
      address: ['525 Market Street', 'Suite 2300', 'San Francisco, CA 94105'],
      phone: '+1 (555) 987-6543',
      email: 'sanfrancisco@findash.com',
      hours: 'Mon-Fri: 9am-6pm PT'
    },
    {
      location: 'London',
      address: ['30 St Mary Axe', 'Suite 2800', 'London EC3A 8BF, UK'],
      phone: '+44 (0) 20 7123 4567',
      email: 'london@findash.com',
      hours: 'Mon-Fri: 9am-6pm GMT'
    }
  ]

  const faqs = [
    {
      question: 'How do I get started with FinDash?',
      answer: 'Getting started is easy! Simply sign up for a 14-day free trial on our website. No credit card required. Our onboarding team will help you set up your account, configure your dashboard, and connect your financial data sources.'
    },
    {
      question: 'Which accounting systems integrate with FinDash?',
      answer: 'FinDash integrates seamlessly with all major accounting and financial systems, including QuickBooks, Xero, Sage, NetSuite, FreshBooks, Wave, and more. We also support custom integrations for enterprise clients.'
    },
    {
      question: 'How do I migrate my existing financial data?',
      answer: 'Our data migration process is straightforward. You can import data directly from your existing systems or upload CSV files. For Enterprise clients, we offer a white-glove migration service where our team handles the entire process for you.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Have questions or ready to get started? Our team is here to help you transform your financial operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Form */}
          <div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Send Us a Message
              </h2>
              
              {isSubmitted ? (
                <div className="py-12 px-4 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-400/20 text-green-400 text-2xl mb-4">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/70 mb-6">
                    Thank you for reaching out. One of our team members will get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-white font-medium mb-2">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-white font-medium mb-2">Phone (Optional)</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-white font-medium mb-2">What can we help you with?</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="sales">Sales Question</option>
                      <option value="demo">Request a Demo</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="budget" className="block text-white font-medium mb-2">Budget Range (Optional)</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      >
                        <option value="">Select Budget</option>
                        <option value="less_5k">Less than $5K</option>
                        <option value="5k_10k">$5K - $10K</option>
                        <option value="10k_25k">$10K - $25K</option>
                        <option value="25k_50k">$25K - $50K</option>
                        <option value="50k_plus">$50K+</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-white font-medium mb-2">Timeline (Optional)</label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      >
                        <option value="">Select Timeline</option>
                        <option value="immediate">Immediate</option>
                        <option value="1_month">Within 1 month</option>
                        <option value="3_months">Within 3 months</option>
                        <option value="6_months">Within 6 months</option>
                        <option value="exploring">Just exploring</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    ></textarea>
                  </div>

                  {errorMessage && (
                    <div className="mb-6 p-4 bg-red-400/20 text-red-400 rounded-lg">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-cyan-400 hover:bg-cyan-300 text-blue-900 font-semibold px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Methods */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  className="block bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors duration-200"
                >
                  <div className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center text-2xl mb-4`}>
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-white/70 text-sm mb-4">{method.description}</p>
                  <div className="text-cyan-400 font-medium">{method.primary}</div>
                  <div className="text-white/50 text-sm">{method.secondary}</div>
                </a>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <button className="bg-white/10 hover:bg-white/15 text-white p-4 rounded-xl flex flex-col items-center justify-center transition-colors duration-200">
                <span className="text-2xl mb-2">📅</span>
                <span className="text-sm text-center">Schedule Demo</span>
              </button>
              <button className="bg-white/10 hover:bg-white/15 text-white p-4 rounded-xl flex flex-col items-center justify-center transition-colors duration-200">
                <span className="text-2xl mb-2">💬</span>
                <span className="text-sm text-center">Live Chat</span>
              </button>
              <button className="bg-white/10 hover:bg-white/15 text-white p-4 rounded-xl flex flex-col items-center justify-center transition-colors duration-200">
                <span className="text-2xl mb-2">📚</span>
                <span className="text-sm text-center">Documentation</span>
              </button>
            </div>

            {/* Office Locations */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Our Offices</h3>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className={index < offices.length - 1 ? 'pb-6 border-b border-white/10' : ''}>
                    <h4 className="text-cyan-400 font-medium mb-2">{office.location}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      <div>
                        <div className="text-white">
                          {office.address.map((line, lineIndex) => (
                            <div key={lineIndex}>{line}</div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-white/70">
                          <div>{office.phone}</div>
                          <div>{office.email}</div>
                          <div>{office.hours}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 text-white/70 text-sm">
                <div className="font-medium text-white mb-1">Enterprise Support</div>
                <div>Enterprise clients receive 24/7 dedicated support.</div>
                <div>Emergency contact: +1 (555) 911-0123</div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center text-white hover:bg-white/5 transition-colors"
                >
                  <span className="font-medium">{faq.question}</span>
                  <span className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-white/70">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Map or CTA */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Financial Operations?
            </h3>
            <p className="text-white/70 mb-6">
              Start your 14-day free trial today. No credit card required.
            </p>
            <button className="bg-cyan-400 hover:bg-cyan-300 text-blue-900 font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
