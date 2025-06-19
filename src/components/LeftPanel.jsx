import React from 'react'

const LeftPanel = () => {
  const expenseData = [
    { name: 'Insurance', color: 'bg-blue-300', percentage: 25 },
    { name: 'Wages', color: 'bg-green-400', percentage: 35 },
    { name: 'Rent', color: 'bg-yellow-400', percentage: 20 },
    { name: 'Legal Expenses', color: 'bg-red-400', percentage: 15 },
    { name: 'Other', color: 'bg-purple-400', percentage: 5 }
  ]

  return (
    <div className="lg:col-span-3 space-y-6">
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Expenses</h3>
          <span className="text-2xl font-bold">$56.2K</span>
        </div>
        
        <div className="w-32 h-32 mx-auto relative mb-4">
          <div className="w-full h-full rounded-full border-8 border-blue-300 border-t-yellow-400 border-r-green-400 border-b-red-400"></div>
        </div>
        
        <div className="space-y-2 text-sm">
          {expenseData.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 ${item.color} rounded-full`}></div>
                <span>{item.name}</span>
              </div>
              <span className="text-white/70">{item.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LeftPanel
