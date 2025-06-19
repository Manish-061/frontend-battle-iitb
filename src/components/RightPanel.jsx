import React from 'react'

const RightPanel = () => {
  const integrations = [
    { name: 'Word', icon: '📄' },
    { name: 'Slack', icon: '💬' },
    { name: 'Excel', icon: '📊' },
    { name: 'Teams', icon: '👥' },
    { name: 'Email', icon: '📧' },
    { name: 'Shared URL', icon: '🔗' }
  ]

  const revenueData = [40, 65, 45, 80, 35, 70, 90, 60, 85, 45, 75, 55]

  return (
    <div className="lg:col-span-3 space-y-6">
      {/* Chat Interface */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
            M
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm">Mark Bosman</div>
            <div className="text-xs text-white/70 mt-1">
              @Megan let's talk about a strategy to improve these metrics.
            </div>
            <button className="text-xs text-cyan-400 mt-2">Reply</button>
          </div>
        </div>
      </div>

      {/* Integrations Grid */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
        <h4 className="text-white text-sm font-medium mb-3">Send to</h4>
        <div className="grid grid-cols-2 gap-3">
          {integrations.map((integration, index) => (
            <div key={index} className="bg-white/10 rounded-lg p-3 text-center text-white hover:bg-white/20 transition-colors cursor-pointer">
              <div className="text-2xl mb-2">{integration.icon}</div>
              <div className="text-sm font-medium">{integration.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Financial Health Score */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold text-green-400">90%</div>
            <div className="text-sm text-white/70">Financial Health Score</div>
          </div>
          <div className="w-16 h-16 relative">
            <div className="w-full h-full rounded-full border-4 border-white/20">
              <div className="absolute inset-0 rounded-full border-4 border-green-400 border-r-transparent transform rotate-45"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
        <div className="text-sm font-medium mb-4">Total Revenue - $8.5M</div>
        <div className="h-20 flex items-end justify-between gap-1">
          {revenueData.map((height, index) => (
            <div 
              key={index} 
              className="bg-cyan-400 rounded-t" 
              style={{ height: `${height}%`, width: '6px' }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RightPanel
