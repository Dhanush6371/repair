import React from 'react';
import { Smartphone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4 md:mb-6">
              <div className="bg-yellow-400 p-2 rounded-lg">
                <Smartphone className="h-6 w-6 text-gray-900" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">TechFix Pro</h3>
            </div>
            <p className="text-gray-300 mb-4 md:mb-6 max-w-md text-sm md:text-base">
              Vos experts technologiques locaux de confiance fournissant des services de réparation 
              de qualité et des solutions numériques depuis 2013. Nous le réparons correctement du premier coup.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-yellow-400 hover:text-gray-900 p-2 md:p-3 rounded-lg transition-colors">
                <Facebook className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-yellow-400 hover:text-gray-900 p-2 md:p-3 rounded-lg transition-colors">
                <Twitter className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-yellow-400 hover:text-gray-900 p-2 md:p-3 rounded-lg transition-colors">
                <Instagram className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-yellow-400 hover:text-gray-900 p-2 md:p-3 rounded-lg transition-colors">
                <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 md:mb-6 text-yellow-400">Liens Rapides</h4>
            <div className="space-y-2 md:space-y-3">
              <a href="#home" className="block text-gray-300 hover:text-yellow-400 transition-colors text-sm md:text-base">Accueil</a>
              <a href="#services" className="block text-gray-300 hover:text-yellow-400 transition-colors text-sm md:text-base">Services</a>
              <a href="#about" className="block text-gray-300 hover:text-yellow-400 transition-colors text-sm md:text-base">À propos</a>
              <a href="#contact" className="block text-gray-300 hover:text-yellow-400 transition-colors text-sm md:text-base">Contact</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 md:mb-6 text-yellow-400">Nos Services</h4>
            <div className="space-y-2 md:space-y-3">
              <a href="#" className="block text-gray-300 hover:text-yellow-400 transition-colors text-sm md:text-base">Réparation Mobile</a>
              <a href="#" className="block text-gray-300 hover:text-yellow-400 transition-colors text-sm md:text-base">Réparation Ordinateur Portable</a>
              <a href="#" className="block text-gray-300 hover:text-yellow-400 transition-colors text-sm md:text-base">Développement Web</a>
              <a href="#" className="block text-gray-300 hover:text-yellow-400 transition-colors text-sm md:text-base">Récupération de Données</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-xs md:text-sm">
              © 2024 TechFix Pro. Tous droits réservés.
            </p>
            <div className="flex space-x-4 md:space-x-6 text-xs md:text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Politique de Confidentialité</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Conditions de Service</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Politique des Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;