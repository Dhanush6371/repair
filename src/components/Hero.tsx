import React from 'react';
import { Smartphone, Laptop, MapPin, Clock } from 'lucide-react';

const Hero = () => {
  const handleGetQuote = () => {
    // This will be connected to the booking flow
    window.location.hash = '#booking';
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center py-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Bubbles */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-yellow-400/5 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-yellow-400/15 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-60 left-1/3 w-24 h-24 bg-yellow-400/8 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-yellow-400/6 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Geometric Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FDE047" stopOpacity="0.1"/>
                <stop offset="100%" stopColor="#FDE047" stopOpacity="0.3"/>
              </linearGradient>
            </defs>
            
            {/* Diagonal Lines */}
            <line x1="0" y1="0" x2="200" y2="200" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse"/>
            <line x1="100" y1="0" x2="300" y2="200" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1s' }}/>
            <line x1="200" y1="0" x2="400" y2="200" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '2s' }}/>
            
            {/* Circuit-like patterns */}
            <path d="M50 100 L150 100 L150 200 L250 200" stroke="#FDE047" strokeWidth="1" fill="none" opacity="0.2" className="animate-pulse" style={{ animationDelay: '0.5s' }}/>
            <path d="M300 50 L400 50 L400 150 L500 150" stroke="#FDE047" strokeWidth="1" fill="none" opacity="0.15" className="animate-pulse" style={{ animationDelay: '1.5s' }}/>
            
            {/* Tech-inspired dots */}
            <circle cx="150" cy="100" r="2" fill="#FDE047" opacity="0.4" className="animate-ping" style={{ animationDelay: '1s' }}/>
            <circle cx="250" cy="200" r="2" fill="#FDE047" opacity="0.4" className="animate-ping" style={{ animationDelay: '2s' }}/>
            <circle cx="400" cy="50" r="2" fill="#FDE047" opacity="0.4" className="animate-ping" style={{ animationDelay: '3s' }}/>
            <circle cx="500" cy="150" r="2" fill="#FDE047" opacity="0.4" className="animate-ping" style={{ animationDelay: '0.5s' }}/>
          </svg>
        </div>
        
        {/* Floating Tech Icons */}
        <div className="absolute top-32 right-32 text-yellow-400/20 animate-bounce" style={{ animationDuration: '6s' }}>
          <Smartphone className="h-8 w-8" />
        </div>
        <div className="absolute bottom-32 left-32 text-yellow-400/20 animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}>
          <Laptop className="h-10 w-10" />
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-yellow-400/5 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-gradient-to-l from-yellow-400/8 to-transparent rounded-full blur-lg animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Expert <span className="text-yellow-400">Tech Repair</span> Services
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Professional mobile and laptop repair with same-day solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Mobile Repair Card */}
          <div className="bg-white text-gray-900 rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
            <div className="relative h-40 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Mobile phone repair" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute top-3 right-3 bg-yellow-400 p-2 rounded-full">
                <Smartphone className="h-5 w-5 text-gray-900" />
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Mobile Repair Shop</h3>
              <p className="text-gray-600 text-sm mb-4">
                Screen replacement, battery issues, water damage recovery
              </p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-xs text-gray-700">
                  <MapPin className="h-3 w-3 text-yellow-500 mr-2" />
                  <span>123 Tech Street, Downtown Plaza</span>
                </div>
                <div className="flex items-center text-xs text-gray-700">
                  <Clock className="h-3 w-3 text-yellow-500 mr-2" />
                  <span>Same-day repairs available</span>
                </div>
              </div>

              <button 
                onClick={handleGetQuote}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
              >
                Get Quote
              </button>
            </div>
          </div>

          {/* Laptop Repair Card */}
          <div className="bg-white text-gray-900 rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
            <div className="relative h-40 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/5582596/pexels-photo-5582596.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Laptop repair service" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute top-3 right-3 bg-yellow-400 p-2 rounded-full">
                <Laptop className="h-5 w-5 text-gray-900" />
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Laptop Repair Center</h3>
              <p className="text-gray-600 text-sm mb-4">
                Hardware upgrades, virus removal, data recovery
              </p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-xs text-gray-700">
                  <MapPin className="h-3 w-3 text-yellow-500 mr-2" />
                  <span>456 Computer Ave, Tech District</span>
                </div>
                <div className="flex items-center text-xs text-gray-700">
                  <Clock className="h-3 w-3 text-yellow-500 mr-2" />
                  <span>24-48 hour turnaround</span>
                </div>
              </div>

              <button 
                onClick={handleGetQuote}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;