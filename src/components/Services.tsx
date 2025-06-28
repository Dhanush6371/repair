import React, { useState } from 'react';
import { Globe, Code, Smartphone, Monitor, Shield, Zap, Send, User, Mail, Phone, MessageSquare, Briefcase, Calendar } from 'lucide-react';

const Services = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const webServices = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Développement de Sites Web",
      description: "Sites web personnalisés et solutions e-commerce pour votre entreprise"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Applications Web",
      description: "Applications web dynamiques avec des frameworks et technologies modernes"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Applications Mobiles",
      description: "Développement d'applications mobiles natives et multiplateformes"
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Solutions Numériques",
      description: "Transformation numérique complète et intégration de systèmes"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Services de Sécurité",
      description: "Audits de cybersécurité et mise en œuvre de protection"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Optimisation des Performances",
      description: "Services d'optimisation de vitesse et d'amélioration des performances"
    }
  ];

  const projectTypes = [
    'Développement de Site Web',
    'Plateforme E-commerce',
    'Application Mobile',
    'Application Web',
    'Marketing Numérique',
    'Intégration de Système',
    'Cybersécurité',
    'Autre'
  ];

  const budgetRanges = [
    'Moins de 5 000€',
    '5 000€ - 15 000€',
    '15 000€ - 50 000€',
    '50 000€ - 100 000€',
    'Plus de 100 000€',
    'À discuter'
  ];

  const timelineOptions = [
    'Dès que possible',
    '1-2 semaines',
    '1-2 mois',
    '3-6 mois',
    '6+ mois',
    'Flexible'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form and show success message
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      budget: '',
      timeline: '',
      message: ''
    });
    setIsSubmitting(false);
    setShowForm(false);
    
    // You could show a success toast here
    alert('Merci ! Votre demande de projet a été soumise. Nous vous recontacterons dans les 24 heures.');
  };

  return (
    <section id="services" className="py-12 md:py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nos <span className="text-yellow-400">Services Numériques</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Au-delà des réparations matérielles, nous offrons des solutions numériques complètes 
            pour aider votre entreprise à prospérer dans le monde numérique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {webServices.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-900 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-yellow-400 hover:bg-gray-800"
            >
              <div className="text-yellow-400 mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Project Discussion Section */}
        <div className="bg-gray-900 rounded-2xl p-6 md:p-8 lg:p-12 border border-gray-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Prêt à Commencer Votre <span className="text-yellow-400">Projet</span> ?
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
              Discutons de votre projet numérique et créons quelque chose d'extraordinaire ensemble. 
              Remplissez le formulaire ci-dessous et nous vous recontacterons dans les 24 heures.
            </p>
            
            {!showForm ? (
              <button 
                onClick={() => setShowForm(true)}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Discuter de Votre Projet</span>
              </button>
            ) : (
              <button 
                onClick={() => setShowForm(false)}
                className="text-gray-400 hover:text-white transition-colors inline-flex items-center space-x-2"
              >
                <span>Masquer le Formulaire</span>
              </button>
            )}
          </div>

          {/* Project Discussion Form */}
          {showForm && (
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Nom Complet <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors"
                        placeholder="Entrez votre nom complet"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Adresse Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors"
                        placeholder="votre.email@exemple.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Numéro de Téléphone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors"
                        placeholder="+33 1 23 45 67 89"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Entreprise/Organisation
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Type de Projet <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors appearance-none"
                    >
                      <option value="">Sélectionner le type de projet</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Fourchette de Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors appearance-none"
                    >
                      <option value="">Sélectionner la fourchette de budget</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Délai
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors appearance-none"
                      >
                        <option value="">Sélectionner le délai</option>
                        {timelineOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Description du Projet <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors resize-vertical"
                    placeholder="Veuillez décrire votre projet en détail. Incluez vos objectifs, exigences, fonctionnalités nécessaires, public cible, et toute technologie ou plateforme spécifique que vous préférez..."
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Envoyer la Demande de Projet</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Additional Info */}
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mt-6">
                  <h4 className="text-white font-semibold mb-2">Que se passe-t-il ensuite ?</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Nous examinerons vos exigences de projet dans les 24 heures</li>
                    <li>• Notre équipe préparera une proposition détaillée et un calendrier</li>
                    <li>• Nous programmerons un appel de consultation pour discuter de votre projet</li>
                    <li>• Vous recevrez un devis complet sans frais cachés</li>
                  </ul>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;