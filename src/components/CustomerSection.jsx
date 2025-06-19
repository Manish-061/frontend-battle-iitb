import React from 'react'

const CustomerSection = () => {
  const aiPlatforms = [
    {
      name: 'OpenAI',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/512px-OpenAI_Logo.svg.png',
      alt: 'OpenAI Logo'
    },
    {
      name: 'Google AI',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png',
      alt: 'Google AI Logo'
    },
    {
      name: 'Microsoft AI',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/512px-Microsoft_logo_%282012%29.svg.png',
      alt: 'Microsoft AI Logo'
    },
    {
      name: 'Amazon AWS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png',
      alt: 'AWS AI Logo'
    },
    {
      name: 'IBM Watson',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/512px-IBM_logo.svg.png',
      alt: 'IBM Watson Logo'
    },
    {
      name: 'Hugging Face',
      logo: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
      alt: 'Hugging Face Logo'
    }
  ]

  return (
    <section className="py-16 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Trusted by Leading AI Platforms
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Our financial intelligence platform integrates seamlessly with the world's most advanced AI systems
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 items-center">
          {aiPlatforms.map((platform, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <div className="text-center">
                <div className="h-16 w-20 flex items-center justify-center mb-3">
                  <img 
                    src={platform.logo} 
                    alt={platform.alt}
                    className="max-h-12 max-w-full object-contain filter brightness-0 invert opacity-70 group-hover:filter-none group-hover:opacity-100 transition-all duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="hidden h-12 w-16 bg-white/20 rounded-lg items-center justify-center text-white font-bold text-xs"
                    style={{ display: 'none' }}
                  >
                    {platform.name.split(' ')[0]}
                  </div>
                </div>
                <span className="text-white/60 text-xs font-medium group-hover:text-white transition-colors duration-300 block">
                  {platform.name}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-white/50 text-sm">
            + 500 more AI platforms and integrations available
          </p>
        </div>
      </div>
    </section>
  )
}

export default CustomerSection
