import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  features: string[];
}

interface ProductCarouselProps {
  type: 'mobile' | 'laptop';
  title: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ type, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Sample products with real images from Pexels
  const mobileProducts: Product[] = [
    {
      id: 'iphone-15-pro',
      name: 'iPhone 15 Pro',
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '1 229€',
      originalPrice: '1 329€',
      discount: '-100€',
      features: ['128GB', 'Titane Naturel', 'Garantie 1 an']
    },
    {
      id: 'samsung-s24',
      name: 'Samsung Galaxy S24 Ultra',
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '1 199€',
      originalPrice: '1 299€',
      discount: '-100€',
      features: ['256GB', 'Noir Titane', 'S Pen inclus']
    },
    {
      id: 'xiaomi-13',
      name: 'Xiaomi 13 Pro',
      image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '899€',
      originalPrice: '999€',
      discount: '-100€',
      features: ['256GB', 'Blanc Céramique', 'Charge rapide 120W']
    },
    {
      id: 'iphone-14',
      name: 'iPhone 14',
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '909€',
      originalPrice: '1 009€',
      discount: '-100€',
      features: ['128GB', 'Bleu', 'Garantie 1 an']
    },
    {
      id: 'samsung-a54',
      name: 'Samsung Galaxy A54',
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '449€',
      originalPrice: '499€',
      discount: '-50€',
      features: ['128GB', 'Violet', 'Étanche IP67']
    }
  ];

  const laptopProducts: Product[] = [
    {
      id: 'macbook-pro-16',
      name: 'MacBook Pro 16"',
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '2 699€',
      originalPrice: '2 899€',
      discount: '-200€',
      features: ['M3 Pro', '18GB RAM', '512GB SSD']
    },
    {
      id: 'dell-xps-15',
      name: 'Dell XPS 15',
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
      price: '1 899€',
      originalPrice: '2 099€',
      discount: '-200€',
      features: ['Intel i7', '16GB RAM', '1TB SSD']
    },
    {
      id: 'hp-spectre',
      name: 'HP Spectre x360',
      image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '1 599€',
      originalPrice: '1 799€',
      discount: '-200€',
      features: ['Intel i7', '16GB RAM', 'Écran tactile']
    },
    {
      id: 'lenovo-thinkpad',
      name: 'Lenovo ThinkPad X1',
      image: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '2 199€',
      originalPrice: '2 399€',
      discount: '-200€',
      features: ['Intel i7', '32GB RAM', '1TB SSD']
    },
    {
      id: 'macbook-air',
      name: 'MacBook Air 15"',
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '1 699€',
      originalPrice: '1 899€',
      discount: '-200€',
      features: ['M2', '8GB RAM', '256GB SSD']
    }
  ];

  const products = type === 'mobile' ? mobileProducts : laptopProducts;
  const itemsToShow = 3; // Show 3 items at once on desktop, 1 on mobile

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex + itemsToShow >= products.length ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, products.length, itemsToShow]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsToShow >= products.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, products.length - itemsToShow) : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div 
      className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
          {title}
        </h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={prevSlide}
            className="p-1.5 sm:p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
            aria-label="Produit précédent"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="p-1.5 sm:p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
            aria-label="Produit suivant"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2"
            >
              <div className="bg-gray-900 rounded-lg p-3 sm:p-4 border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:scale-105 group">
                {/* Product Image */}
                <div className="relative mb-3 sm:mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-32 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  {product.discount && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      {product.discount}
                    </span>
                  )}
                </div>

                {/* Product Info */}
                <div className="text-center">
                  <h4 className="text-sm sm:text-base font-semibold text-white mb-2 line-clamp-2">
                    {product.name}
                  </h4>
                  
                  {/* Features */}
                  <div className="mb-3 space-y-1">
                    {product.features.map((feature, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded mr-1 mb-1"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="mb-3">
                    <div className="text-lg sm:text-xl font-bold text-yellow-400">
                      {product.price}
                    </div>
                    {product.originalPrice && (
                      <div className="text-xs sm:text-sm text-gray-400 line-through">
                        {product.originalPrice}
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-3 rounded-lg transition-colors text-xs sm:text-sm">
                    Voir les détails
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
        {Array.from({ length: Math.ceil(products.length / itemsToShow) }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
              Math.floor(currentIndex / itemsToShow) === index
                ? 'bg-yellow-400'
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`Aller à la page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;