import React, { useState } from 'react'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [dateFilter, setDateFilter] = useState('30days')

  const tabs = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'revenue', name: 'Revenue', icon: '💰' },
    { id: 'expenses', name: 'Expenses', icon: '📉' },
    { id: 'forecasting', name: 'Forecasting', icon: '🔮' },
    { id: 'reports', name: 'Reports', icon: '📋' }
  ]

  const metrics = [
    { title: 'Total Revenue', value: '$2.4M', change: '+12.5%', trend: 'up', color: 'text-green-400' },
    { title: 'Total Expenses', value: '$1.8M', change: '-3.2%', trend: 'down', color: 'text-red-400' },
    { title: 'Net Profit', value: '$600K', change: '+18.7%', trend: 'up', color: 'text-green-400' },
    { title: 'Cash Flow', value: '$450K', change: '+8.9%', trend: 'up', color: 'text-green-400' }
  ]

  const revenueData = [
    { month: 'Jan', amount: 180000 },
    { month: 'Feb', amount: 195000 },
    { month: 'Mar', amount: 210000 },
    { month: 'Apr', amount: 185000 },
    { month: 'May', amount: 225000 },
    { month: 'Jun', amount: 240000 },
    { month: 'Jul', amount: 235000 },
    { month: 'Aug', amount: 250000 },
    { month: 'Sep', amount: 265000 },
    { month: 'Oct', amount: 270000 },
    { month: 'Nov', amount: 285000 },
    { month: 'Dec', amount: 300000 }
  ]

  const expenses = [
    { category: 'Salaries', amount: 125000, percentage: 45, color: 'bg-blue-400' },
    { category: 'Operations', amount: 65000, percentage: 23, color: 'bg-green-400' },
    { category: 'Marketing', amount: 35000, percentage: 13, color: 'bg-yellow-400' },
    { category: 'Technology', amount: 28000, percentage: 10, color: 'bg-purple-400' },
    { category: 'Other', amount: 22000, percentage: 9, color: 'bg-gray-400' }
  ]

  const transactions = [
    { id: 1, date: '2024-12-15', description: 'Software License Payment', amount: -2500, category: 'Technology' },
    { id: 2, date: '2024-12-14', description: 'Client Payment - TechCorp', amount: 45000, category: 'Revenue' },
    { id: 3, date: '2024-12-13', description: 'Office Rent', amount: -8500, category: 'Operations' },
    { id: 4, date: '2024-12-12', description: 'Marketing Campaign', amount: -12000, category: 'Marketing' },
    { id: 5, date: '2024-12-11', description: 'Consulting Revenue', amount: 18500, category: 'Revenue' }
  ]

  const insights = [
    {
      type: 'opportunity',
      title: 'Cost Optimization Opportunity',
      description: 'Marketing spend efficiency has decreased by 15%. Consider reallocating budget to digital channels.',
      impact: '$8,500 potential monthly savings'
    },
    {
      type: 'trend',
      title: 'Revenue Growth Trend',
      description: 'Q4 revenue is trending 18% above forecast. Consider increasing inventory and staffing.',
      impact: '+$125K projected additional revenue'
    },
    {
      type: 'alert',
      title: 'Cash Flow Alert',
      description: 'Large payment due next week may impact working capital. Consider short-term financing.',
      impact: 'Monitor $85K payment on Dec 22'
    }
  ]

  const maxAmount = Math.max(...revenueData.map(item => item.amount))

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 pt-24">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Financial Dashboard</h1>
            <p className="text-white/70">Real-time insights into your financial performance</p>
          </div>
          
          <div className="flex items-center gap-4 mt-4 lg:mt-0">
            <select 
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="bg-white/10 text-white border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <option value="7days">Last 7 days</option>
              <option value="30days">Last 30 days</option>
              <option value="90days">Last 90 days</option>
              <option value="1year">Last year</option>
            </select>
            
            <button className="bg-cyan-400 hover:bg-cyan-300 text-blue-900 font-semibold px-6 py-2 rounded-lg transition-colors duration-200">
              Export Data
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'bg-cyan-400 text-blue-900'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span>{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-white/70 text-sm font-medium mb-2">{metric.title}</h3>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-white">{metric.value}</span>
                <div className={`flex items-center gap-1 text-sm ${metric.color}`}>
                  <span>{metric.trend === 'up' ? '↗️' : '↘️'}</span>
                  <span>{metric.change}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Revenue Chart */}
          <div className="lg:col-span-2 bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-6">Revenue Trend</h3>
            <div className="h-64 flex items-end justify-between gap-2">
              {revenueData.map((item, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div
                    className="bg-cyan-400 rounded-t w-full min-h-4 hover:bg-cyan-300 transition-colors cursor-pointer"
                    style={{ height: `${(item.amount / maxAmount) * 200}px` }}
                    title={`${item.month}: $${item.amount.toLocaleString()}`}
                  ></div>
                  <span className="text-white/70 text-xs mt-2">{item.month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Expense Breakdown */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-6">Expense Breakdown</h3>
            <div className="space-y-4">
              {expenses.map((expense, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white text-sm">{expense.category}</span>
                    <span className="text-white/70 text-sm">${expense.amount.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className={`${expense.color} h-2 rounded-full`}
                      style={{ width: `${expense.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Recent Transactions */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-6">Recent Transactions</h3>
            <div className="space-y-3">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex justify-between items-center py-3 border-b border-white/10 last:border-b-0">
                  <div>
                    <div className="text-white font-medium">{transaction.description}</div>
                    <div className="text-white/60 text-sm">{transaction.date}</div>
                  </div>
                  <div className="text-right">
                    <div className={`font-bold ${transaction.amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {transaction.amount > 0 ? '+' : ''}${transaction.amount.toLocaleString()}
                    </div>
                    <div className="text-white/60 text-sm">{transaction.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insights */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-6">AI Insights</h3>
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      insight.type === 'opportunity' ? 'bg-green-400/20 text-green-400' :
                      insight.type === 'trend' ? 'bg-blue-400/20 text-blue-400' :
                      'bg-yellow-400/20 text-yellow-400'
                    }`}>
                      {insight.type === 'opportunity' ? '💡' : insight.type === 'trend' ? '📈' : '⚠️'}
                      {insight.type.charAt(0).toUpperCase() + insight.type.slice(1)}
                    </span>
                  </div>
                  <h4 className="text-white font-medium mb-1">{insight.title}</h4>
                  <p className="text-white/70 text-sm mb-2">{insight.description}</p>
                  <p className="text-cyan-400 text-sm font-medium">{insight.impact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
