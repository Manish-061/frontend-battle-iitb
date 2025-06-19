import React from 'react'

const Hero = ({ onNavigate }) => {
  return (
    <div className="lg:col-span-6 text-center lg:text-left">
      <div className="space-y-8">
        <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
          Create reports, forecasts,
          <br />
          dashboards & consolidations
        </h1>
        
        <div className="flex items-center justify-center lg:justify-start gap-3 text-white/90 text-xl">
          <span className="text-2xl">✨</span>
          <span className="font-medium">Now with AI-insights</span>
        </div>
        
        <div className="space-y-4">
          <button 
            onClick={() => onNavigate && onNavigate('pricing')}
            className="bg-cyan-400 hover:bg-cyan-300 text-blue-900 font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 inline-flex items-center gap-2"
          >
            Start 14-day free trial
            <span>→</span>
          </button>
          
          <div className="flex items-center justify-center lg:justify-start">
            <button 
              onClick={() => onNavigate && onNavigate('showcase')}
              className="text-white/80 hover:text-white font-medium text-base underline decoration-dotted underline-offset-4 inline-flex items-center gap-2"
            >
              📅 See what we do
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
