import React, { useState } from 'react'

const ShowcaseWork = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Projects', count: 12 },
    { id: 'dashboards', name: 'Dashboards', count: 5 },
    { id: 'reports', name: 'Reports', count: 4 },
    { id: 'forecasting', name: 'Forecasting', count: 3 }
  ]

  const showcaseItems = [
    {
      id: 1,
      category: 'dashboards',
      title: 'Executive Financial Dashboard',
      description: 'Real-time financial metrics and KPIs for C-suite executives with AI-powered insights and predictive analytics.',
      metrics: { roi: '340%', time_saved: '25hrs/week', accuracy: '99.2%' },
      tags: ['Real-time', 'AI Insights', 'Executive'],
      client: 'Fortune 500 Tech Company'
    },
    {
      id: 2,
      category: 'reports',
      title: 'Automated Monthly P&L Reports',
      description: 'Fully automated profit & loss reporting system with multi-currency support and variance analysis.',
      metrics: { roi: '280%', time_saved: '40hrs/month', accuracy: '98.8%' },
      tags: ['Automation', 'Multi-currency', 'P&L'],
      client: 'Global Manufacturing Corp'
    },
    {
      id: 3,
      category: 'forecasting',
      title: 'AI-Powered Revenue Forecasting',
      description: 'Machine learning models predicting revenue trends with 95% accuracy using historical data and market indicators.',
      metrics: { roi: '420%', time_saved: '60hrs/quarter', accuracy: '95.4%' },
      tags: ['AI/ML', 'Predictive', 'Revenue'],
      client: 'SaaS Startup (Series B)'
    },
    {
      id: 4,
      category: 'dashboards',
      title: 'Cash Flow Management System',
      description: 'Comprehensive cash flow tracking and management with automated alerts and scenario planning.',
      metrics: { roi: '190%', time_saved: '15hrs/week', accuracy: '97.6%' },
      tags: ['Cash Flow', 'Alerts', 'Planning'],
      client: 'Mid-Market Retail Chain'
    },
    {
      id: 5,
      category: 'reports',
      title: 'Regulatory Compliance Reporting',
      description: 'Automated compliance reports for SOX, GAAP, and IFRS standards with audit trail functionality.',
      metrics: { roi: '260%', time_saved: '80hrs/quarter', accuracy: '99.9%' },
      tags: ['Compliance', 'SOX', 'Audit Trail'],
      client: 'Public Financial Services'
    },
    {
      id: 6,
      category: 'forecasting',
      title: 'Budget Planning & Variance Analysis',
      description: 'Advanced budgeting tools with scenario modeling and real-time variance tracking against actuals.',
      metrics: { roi: '320%', time_saved: '35hrs/month', accuracy: '96.8%' },
      tags: ['Budgeting', 'Scenarios', 'Variance'],
      client: 'Healthcare Organization'
    }
  ]

  const filteredItems = activeCategory === 'all' 
    ? showcaseItems 
    : showcaseItems.filter(item => item.category === activeCategory)

  return (
    <section className="py-20 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Work in Action
          </h2>
          <p className="text-white/70 text-xl max-w-3xl mx-auto mb-8">
            Discover how we've transformed financial operations for businesses across industries with our AI-powered platform
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-cyan-400 text-blue-900 shadow-lg shadow-cyan-400/25'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.name} <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/10"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">📊</div>
                    <div className="text-sm font-medium">{item.title}</div>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium">
                    {categories.find(cat => cat.id === item.category)?.name}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Client */}
                <div className="text-cyan-400 text-xs font-medium mb-4">
                  {item.client}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center bg-white/5 rounded-lg p-2">
                    <div className="text-green-400 font-bold text-sm">{item.metrics.roi}</div>
                    <div className="text-white/60 text-xs">ROI</div>
                  </div>
                  <div className="text-center bg-white/5 rounded-lg p-2">
                    <div className="text-cyan-400 font-bold text-sm">{item.metrics.time_saved}</div>
                    <div className="text-white/60 text-xs">Time Saved</div>
                  </div>
                  <div className="text-center bg-white/5 rounded-lg p-2">
                    <div className="text-yellow-400 font-bold text-sm">{item.metrics.accuracy}</div>
                    <div className="text-white/60 text-xs">Accuracy</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-white/10 text-white/70 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Financial Operations?
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies that have already revolutionized their financial reporting and forecasting with our AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-400 hover:bg-cyan-300 text-blue-900 font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 inline-flex items-center justify-center gap-2">
                Start Your Free Trial
                <span>→</span>
              </button>
              <button className="border border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 inline-flex items-center justify-center gap-2">
                Schedule Demo
                <span>📅</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseWork
