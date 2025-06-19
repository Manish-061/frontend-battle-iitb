import React from 'react'

const Header = () => {
  const ratings = [
    { platform: 'Capterra', rating: '4.8', type: 'rating' },
    { platform: 'G2', rating: '4.8', type: 'rating' },
    { platform: 'Xero', reviews: '350+', type: 'reviews' },
    { platform: 'Smart QuickBooks', reviews: '550+', type: 'reviews' }
  ]

  return (
    <header className="w-full py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-white/80 text-sm">
          {ratings.map((item, index) => (
            <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span>⭐</span>
              <span>
                {item.type === 'rating' 
                  ? `${item.rating} rating on ${item.platform}`
                  : `${item.reviews} reviews on ${item.platform}`
                }
              </span>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
