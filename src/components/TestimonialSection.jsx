import React, { useState, useEffect } from 'react'

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CFO",
      company: "TechCorp Inc.",
      rating: 5,
      text: "FinDash has completely transformed our financial reporting process. The AI-powered insights have helped us identify cost-saving opportunities worth over $2M annually. The real-time dashboards give our executive team the visibility they need to make informed decisions quickly.",
      avatar: "SJ"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Finance Director",
      company: "Growth Ventures",
      rating: 5,
      text: "The forecasting accuracy has been incredible. We've reduced our budget variance by 40% and can now predict cash flow needs with 95% accuracy. The platform's integration with our existing systems was seamless, and the support team is outstanding.",
      avatar: "MC"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "VP of Finance",
      company: "MedTech Solutions",
      rating: 5,
      text: "What sets FinDash apart is its intelligent automation. Tasks that used to take our team days now complete in hours. The compliance reporting features have made our audit process 60% faster, and we've eliminated manual errors completely.",
      avatar: "ER"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Controller",
      company: "Manufacturing Plus",
      rating: 5,
      text: "The consolidation features are game-changing for our multi-entity structure. We can now generate consolidated reports across 15 subsidiaries in minutes, not weeks. The drill-down capabilities give us the granular insights we need for strategic planning.",
      avatar: "DT"
    },
    {
      id: 5,
      name: "Lisa Park",
      position: "Financial Analyst",
      company: "RetailFlow",
      rating: 5,
      text: "The dashboard visualizations are intuitive and powerful. Our executive presentations have never looked better, and the interactive charts help stakeholders understand complex financial data at a glance. It's like having a financial analyst in every meeting.",
      avatar: "LP"
    },
    {
      id: 6,
      name: "Robert Martinez",
      position: "Senior Finance Manager",
      company: "ServiceFirst",
      rating: 5,
      text: "ROI tracking and project profitability analysis used to be our biggest pain points. FinDash's AI insights now flag underperforming projects automatically, and we've improved our project margins by 25% in just six months.",
      avatar: "RM"
    }
  ]

  // Auto-advance testimonials
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-400"}>
        ⭐
      </span>
    ))
  }

  return (
    <section className="py-20 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our Customers Say
          </h2>
          <p className="text-white/70 text-xl max-w-3xl mx-auto">
            Join thousands of finance professionals who trust FinDash to transform their financial operations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Testimonial Content */}
            <div className="px-16">
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
                <blockquote className="text-white text-lg lg:text-xl leading-relaxed mb-6">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center text-blue-900 font-bold text-lg">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div className="text-center">
                  <div className="text-white font-semibold text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-cyan-400 font-medium">
                    {testimonials[currentTestimonial].position}
                  </div>
                  <div className="text-white/70">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center space-x-2 mb-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentTestimonial ? 'bg-cyan-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Control */}
          <div className="text-center">
            <button
              onClick={toggleAutoPlay}
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg transition-colors duration-200 inline-flex items-center gap-2"
            >
              {isAutoPlaying ? (
                <>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                  </svg>
                  Pause
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Play
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
