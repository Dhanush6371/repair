import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, ShoppingCart, Eye } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  brand: string;
  image: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  rating: number;
  reviews: number;
  features: string[];
  specifications: Record<string, string>;
  description: string;
  inStock: boolean;
  category: string;
}

interface ProductCarouselProps {
  type: 'mobile' | 'laptop';
  title: string;
  onProductClick: (product: Product) => void;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ type, title, onProductClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);

  // Expanded mobile products with real Pexels images
  const mobileProducts: Product[] = [
    {
      id: 'iphone-15-pro-max',
      name: 'iPhone 15 Pro Max',
      brand: 'Apple',
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: '1 479€',
      originalPrice: '1 579€',
      discount: '-100€',
      rating: 4.8,
      reviews: 2847,
      features: ['256GB', 'Titane Naturel', 'ProRAW', 'Action Button'],
      specifications: {
        'Écran': '6.7" Super Retina XDR',
        'Processeur': 'A17 Pro',
        'Stockage': '256GB',
        'Caméra': '48MP + 12MP + 12MP',
        'Batterie': 'Jusqu\'à 29h vidéo'
      },
      description: 'Le iPhone 15 Pro Max redéfinit ce qu\'un smartphone peut faire avec le processeur A17 Pro révolutionnaire et un système de caméra professionnel avancé.',
      inStock: true,
      category: 'Premium'
    },
    {
      id: 'samsung-s24-ultra',
      name: 'Samsung Galaxy S24 Ultra',
      brand: 'Samsung',
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: '1 299€',
      originalPrice: '1 399€',
      discount: '-100€',
      rating: 4.7,
      reviews: 1923,
      features: ['512GB', 'Noir Titane', 'S Pen', 'AI Photo'],
      specifications: {
        'Écran': '6.8" Dynamic AMOLED 2X',
        'Processeur': 'Snapdragon 8 Gen 3',
        'Stockage': '512GB',
        'Caméra': '200MP + 50MP + 12MP + 10MP',
        'Batterie': '5000mAh'
      },
      description: 'Galaxy S24 Ultra avec S Pen intégré, caméra 200MP et intelligence artificielle avancée pour une productivité sans limites.',
      inStock: true,
      category: 'Premium'
    },
    {
      id: 'xiaomi-14-ultra',
      name: 'Xiaomi 14 Ultra',
      brand: 'Xiaomi',
      image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: '1 199€',
      originalPrice: '1 299€',
      discount: '-100€',
      rating: 4.6,
      reviews: 1456,
      features: ['512GB', 'Blanc Céramique', 'Leica Camera', 'Charge 90W'],
      specifications: {
        'Écran': '6.73" LTPO AMOLED',
        'Processeur': 'Snapdragon 8 Gen 3',
        'Stockage': '512GB',
        'Caméra': '50MP Leica Quad Camera',
        'Batterie': '5300mAh'
      },
      description: 'Xiaomi 14 Ultra avec système de caméra Leica professionnel et charge ultra-rapide 90W.',
      inStock: true,
      category: 'Premium'
    },
    {
      id: 'google-pixel-8-pro',
      name: 'Google Pixel 8 Pro',
      brand: 'Google',
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: '1 099€',
      originalPrice: '1 199€',
      discount: '-100€',
      rating: 4.5,
      reviews: 987,
      features: ['256GB', 'Bleu Baie', 'Magic Eraser', 'Titan M3'],
      specifications: {
        'Écran': '6.7" LTPO OLED',
        'Processeur': 'Google Tensor G3',
        'Stockage': '256GB',
        'Caméra': '50MP + 48MP + 48MP',
        'Batterie': '5050mAh'
      },
      description: 'Pixel 8 Pro avec IA Google avancée, photographie computationnelle et sécurité Titan M3.',
      inStock: true,
      category: 'Premium'
    },
    {
      id: 'oneplus-12',
      name: 'OnePlus 12',
      brand: 'OnePlus',
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: '899€',
      originalPrice: '999€',
      discount: '-100€',
      rating: 4.4,
      reviews: 756,
      features: ['256GB', 'Vert Flowy', 'Hasselblad', 'Charge 100W'],
      specifications: {
        'Écran': '6.82" LTPO3 AMOLED',
        'Processeur': 'Snapdragon 8 Gen 3',
        'Stockage': '256GB',
        'Caméra': '50MP Hasselblad Triple',
        'Batterie': '5400mAh'
      },
      description: 'OnePlus 12 avec caméra Hasselblad, charge SuperVOOC 100W et écran ProXDR.',
      inStock: true,
      category: 'Performance'
    },
    {
      id: 'iphone-14-pro',
      name: 'iPhone 14 Pro',
      brand: 'Apple',
      image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: '1 109€',
      originalPrice: '1 209€',
      discount: '-100€',
      rating: 4.7,
      reviews: 3421,
      features: ['128GB', 'Violet Profond', 'Dynamic Island', 'ProRAW'],
      specifications: {
        'Écran': '6.1" Super Retina XDR',
        'Processeur': 'A16 Bionic',
        'Stockage': '128GB',
        'Caméra': '48MP + 12MP + 12MP',
        'Batterie': 'Jusqu\'à 23h vidéo'
      },
      description: 'iPhone 14 Pro avec Dynamic Island révolutionnaire et système de caméra Pro avancé.',
      inStock: true,
      category: 'Premium'
    },
    {
      id: 'samsung-s23-fe',
      name: 'Samsung Galaxy S23 FE',
      brand: 'Samsung',
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: '629€',
      originalPrice: '699€',
      discount: '-70€',
      rating: 4.3,
      reviews: 1234,
      features: ['128GB', 'Menthe', 'Triple Camera', 'Wireless PowerShare'],
      specifications: {
        'Écran': '6.4" Dynamic AMOLED 2X',
        'Processeur': 'Exynos 2200',
        'Stockage': '128GB',
        'Caméra': '50MP + 12MP + 8MP',
        'Batterie': '4500mAh'
      },
      description: 'Galaxy S23 FE offre l\'expérience Galaxy premium à un prix accessible avec des fonctionnalités phares.',
      inStock: true,
      category: 'Milieu de gamme'
    },
    {
      id: 'nothing-phone-2',
      name: 'Nothing Phone (2)',
      brand: 'Nothing',
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: '679€',
      originalPrice: '749€',
      discount: '-70€',
      rating: 4.2,
      reviews: 543,
      features: ['256GB', 'Transparent', 'Glyph Interface', 'Nothing OS'],
      specifications: {
        'Écran': '6.7" LTPO OLED',
        'Processeur': 'Snapdragon 8+ Gen 1',
        'Stockage': '256GB',
        'Caméra': '50MP + 50MP',
        'Batterie': '4700mAh'
      },
      description: 'Nothing Phone (2) avec design transparent unique, Glyph Interface et Nothing OS épuré.',
      inStock: true,
      category: 'Innovation'
    }
  ];

  // Expanded laptop products with real Pexels images
  const laptopProducts: Product[] = [
    {
      id: 'macbook-pro-16-m3-max',
      name: 'MacBook Pro 16" M3 Max',
      brand: 'Apple',
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: '4 299€',
      originalPrice: '4 599€',
      discount: '-300€',
      rating: 4.9,
      reviews: 1876,
      features: ['1TB SSD', '36GB RAM', 'M3 Max', 'Liquid Retina XDR'],
      specifications: {
        'Processeur': 'Apple M3 Max 16-core',
        'Mémoire': '36GB RAM unifiée',
        'Stockage': '1TB SSD',
        'Écran': '16.2" Liquid Retina XDR',
        'Autonomie': 'Jusqu\'à 22h'
      },
      description: 'MacBook Pro 16" avec puce M3 Max révolutionnaire pour les professionnels créatifs les plus exigeants.',
      inStock: true,
      category: 'Workstation'
    },
    {
      id: 'dell-xps-17-9730',
      name: 'Dell XPS 17 (9730)',
      brand: 'Dell',
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
      price: '2 899€',
      originalPrice: '3 199€',
      discount: '-300€',
      rating: 4.6,
      reviews: 1234,
      features: ['1TB SSD', '32GB RAM', 'RTX 4070', '4K+ Touch'],
      specifications: {
        'Processeur': 'Intel Core i7-13700H',
        'Mémoire': '32GB DDR5',
        'Stockage': '1TB NVMe SSD',
        'Écran': '17" 4K+ InfinityEdge Touch',
        'GPU': 'NVIDIA RTX 4070 8GB'
      },
      description: 'Dell XPS 17 avec écran 4K+ tactile, RTX 4070 et design premium pour créateurs et développeurs.',
      inStock: true,
      category: 'Créatif'
    },
    {
      id: 'hp-spectre-x360-16',
      name: 'HP Spectre x360 16"',
      brand: 'HP',
      image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: '2 199€',
      originalPrice: '2 499€',
      discount: '-300€',
      rating: 4.5,
      reviews: 987,
      features: ['1TB SSD', '16GB RAM', 'OLED 4K', '360° Convertible'],
      specifications: {
        'Processeur': 'Intel Core i7-1355U',
        'Mémoire': '16GB LPDDR5',
        'Stockage': '1TB PCIe SSD',
        'Écran': '16" OLED 4K Tactile',
        'Autonomie': 'Jusqu\'à 17h'
      },
      description: 'HP Spectre x360 16" convertible avec écran OLED 4K et design premium ultra-fin.',
      inStock: true,
      category: 'Convertible'
    },
    {
      id: 'lenovo-thinkpad-x1-carbon-gen11',
      name: 'ThinkPad X1 Carbon Gen 11',
      brand: 'Lenovo',
      image: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: '2 599€',
      originalPrice: '2 899€',
      discount: '-300€',
      rating: 4.7,
      reviews: 1543,
      features: ['1TB SSD', '32GB RAM', 'vPro', 'Carbon Fiber'],
      specifications: {
        'Processeur': 'Intel Core i7-1365U vPro',
        'Mémoire': '32GB LPDDR5',
        'Stockage': '1TB PCIe SSD',
        'Écran': '14" WUXGA IPS',
        'Poids': '1.12kg'
      },
      description: 'ThinkPad X1 Carbon Gen 11 ultra-léger avec sécurité vPro et construction en fibre de carbone.',
      inStock: true,
      category: 'Business'
    },
    {
      id: 'asus-rog-zephyrus-g16',
      name: 'ASUS ROG Zephyrus G16',
      brand: 'ASUS',
      image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: '2 799€',
      originalPrice: '3 099€',
      discount: '-300€',
      rating: 4.8,
      reviews: 876,
      features: ['1TB SSD', '32GB RAM', 'RTX 4080', '240Hz OLED'],
      specifications: {
        'Processeur': 'AMD Ryzen 9 7940HS',
        'Mémoire': '32GB DDR5',
        'Stockage': '1TB PCIe 4.0 SSD',
        'Écran': '16" OLED 240Hz',
        'GPU': 'NVIDIA RTX 4080 12GB'
      },
      description: 'ASUS ROG Zephyrus G16 gaming laptop avec écran OLED 240Hz et RTX 4080 pour les gamers exigeants.',
      inStock: true,
      category: 'Gaming'
    },
    {
      id: 'microsoft-surface-laptop-5',
      name: 'Microsoft Surface Laptop 5',
      brand: 'Microsoft',
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: '1 699€',
      originalPrice: '1 899€',
      discount: '-200€',
      rating: 4.4,
      reviews: 1098,
      features: ['512GB SSD', '16GB RAM', 'PixelSense', 'Alcantara'],
      specifications: {
        'Processeur': 'Intel Core i7-1255U',
        'Mémoire': '16GB LPDDR5x',
        'Stockage': '512GB SSD',
        'Écran': '13.5" PixelSense Touch',
        'Autonomie': 'Jusqu\'à 18h'
      },
      description: 'Surface Laptop 5 avec écran PixelSense tactile et clavier Alcantara premium.',
      inStock: true,
      category: 'Premium'
    },
    {
      id: 'acer-swift-x-14',
      name: 'Acer Swift X 14',
      brand: 'Acer',
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
      price: '1 299€',
      originalPrice: '1 499€',
      discount: '-200€',
      rating: 4.2,
      reviews: 654,
      features: ['512GB SSD', '16GB RAM', 'RTX 4050', 'OLED 2.8K'],
      specifications: {
        'Processeur': 'Intel Core i7-13700H',
        'Mémoire': '16GB LPDDR5',
        'Stockage': '512GB PCIe SSD',
        'Écran': '14.5" OLED 2.8K',
        'GPU': 'NVIDIA RTX 4050 6GB'
      },
      description: 'Acer Swift X 14 avec écran OLED 2.8K et RTX 4050 pour créateurs et étudiants.',
      inStock: true,
      category: 'Créatif'
    },
    {
      id: 'framework-laptop-13',
      name: 'Framework Laptop 13',
      brand: 'Framework',
      image: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: '1 599€',
      originalPrice: '1 799€',
      discount: '-200€',
      rating: 4.6,
      reviews: 432,
      features: ['1TB SSD', '32GB RAM', 'Modulaire', 'Réparable'],
      specifications: {
        'Processeur': 'Intel Core i7-1370P',
        'Mémoire': '32GB DDR4',
        'Stockage': '1TB NVMe SSD',
        'Écran': '13.5" 3:2 2256x1504',
        'Ports': 'Modulaires échangeables'
      },
      description: 'Framework Laptop 13 entièrement modulaire et réparable pour un avenir durable.',
      inStock: true,
      category: 'Durable'
    }
  ];

  const products = type === 'mobile' ? mobileProducts : laptopProducts;
  const itemsToShow = 4; // Show 4 items at once on desktop

  // Advanced auto-play with smooth transitions
  useEffect(() => {
    if (!isAutoPlaying || isTransitioning) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex + 1 >= products.length ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 150);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isTransitioning, products.length]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex + 1 >= products.length ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 150);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? products.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 150);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 150);
  };

  const toggleFavorite = (productId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-3 w-3 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} 
      />
    ));
  };

  return (
    <div 
      className="relative bg-gradient-to-br from-gray-800/60 via-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-700/50 shadow-2xl"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Header with enhanced styling */}
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
            {title}
          </h3>
          <p className="text-gray-400 text-sm">
            {products.length} produits disponibles • Livraison gratuite
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-400">
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-500'}`}></div>
            <span>{isAutoPlaying ? 'Auto' : 'Manuel'}</span>
          </div>
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="p-2 sm:p-3 bg-gray-700/80 hover:bg-gray-600 disabled:opacity-50 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="Produit précédent"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
          </button>
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="p-2 sm:p-3 bg-gray-700/80 hover:bg-gray-600 disabled:opacity-50 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="Produit suivant"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
          </button>
        </div>
      </div>

      {/* Enhanced Carousel with 3D effect */}
      <div className="overflow-hidden rounded-xl">
        <div 
          className={`flex transition-all duration-700 ease-in-out ${isTransitioning ? 'scale-95 opacity-80' : 'scale-100 opacity-100'}`}
          style={{ 
            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%) translateZ(0)`,
          }}
        >
          {products.map((product, index) => {
            const isActive = index >= currentIndex && index < currentIndex + itemsToShow;
            const isFavorite = favorites.includes(product.id);
            
            return (
              <div
                key={product.id}
                className={`w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-2 transition-all duration-500 ${
                  isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-70'
                }`}
              >
                <div 
                  className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-xl p-4 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl group cursor-pointer backdrop-blur-sm"
                  onClick={() => onProductClick(product)}
                >
                  {/* Product Image with overlay */}
                  <div className="relative mb-4 overflow-hidden rounded-lg group">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    
                    {/* Overlay with actions */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onProductClick(product);
                        }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Eye className="h-4 w-4 text-white" />
                      </button>
                      <button
                        onClick={(e) => toggleFavorite(product.id, e)}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Heart className={`h-4 w-4 ${isFavorite ? 'text-red-400 fill-current' : 'text-white'}`} />
                      </button>
                      <button
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <ShoppingCart className="h-4 w-4 text-white" />
                      </button>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-2 left-2 flex flex-col space-y-1">
                      {product.discount && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold shadow-lg">
                          {product.discount}
                        </span>
                      )}
                      {!product.inStock && (
                        <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                          Rupture
                        </span>
                      )}
                    </div>

                    <div className="absolute top-2 right-2">
                      <span className="bg-yellow-400/90 text-gray-900 text-xs px-2 py-1 rounded-full font-semibold">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div>
                    <div className="mb-2">
                      <p className="text-gray-400 text-xs font-medium">{product.brand}</p>
                      <h4 className="text-sm sm:text-base font-semibold text-white line-clamp-2 group-hover:text-yellow-400 transition-colors">
                        {product.name}
                      </h4>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center space-x-1">
                        {renderStars(product.rating)}
                      </div>
                      <span className="text-xs text-gray-400">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    {/* Features */}
                    <div className="mb-3 space-y-1">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <span
                          key={index}
                          className="inline-block bg-gray-800/80 text-gray-300 text-xs px-2 py-1 rounded mr-1 mb-1 border border-gray-700/50"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg sm:text-xl font-bold text-yellow-400">
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Button */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        onProductClick(product);
                      }}
                      className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-semibold py-2 px-3 rounded-lg transition-all duration-300 text-sm hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      Voir les détails
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Enhanced Dots Indicator */}
      <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
        {Array.from({ length: Math.ceil(products.length / itemsToShow) }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index * itemsToShow)}
            disabled={isTransitioning}
            className={`transition-all duration-300 ${
              Math.floor(currentIndex / itemsToShow) === index
                ? 'w-8 h-3 bg-yellow-400 rounded-full'
                : 'w-3 h-3 bg-gray-600 hover:bg-gray-500 rounded-full'
            }`}
            aria-label={`Aller à la page ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-4 w-full bg-gray-700 rounded-full h-1 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-700 ease-out"
          style={{ 
            width: `${((currentIndex + itemsToShow) / products.length) * 100}%` 
          }}
        />
      </div>
    </div>
  );
};

export default ProductCarousel;