import React from 'react'

const Loader = ({ isLoading, message = "Loading financial insights..." }) => {
  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      {/* Background overlay with blur effect */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      
      {/* Loader content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
        {/* Main loading animation */}
        <div className="relative">
          {/* Outer spinning ring */}
          <div className="w-24 h-24 border-4 border-white/20 border-t-cyan-400 rounded-full animate-spin"></div>
          
          {/* Inner pulsing circle */}
          <div className="absolute inset-3 w-18 h-18 bg-cyan-400/30 rounded-full animate-pulse"></div>
          
          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-cyan-400 text-2xl animate-bounce">
              ✨
            </div>
          </div>
        </div>
        
        {/* Loading text */}
        <div className="text-center space-y-2">
          <h3 className="text-white text-xl font-semibold">{message}</h3>
          <div className="flex items-center justify-center space-x-1">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
        
        {/* Progress indicator */}
        <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-cyan-400 rounded-full animate-progressbar"></div>
        </div>
      </div>
    </div>
  )
}

export default Loader
