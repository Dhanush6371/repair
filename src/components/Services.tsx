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
      title: "Website Development",
      description: "Custom websites and e-commerce solutions for your business"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Applications",
      description: "Dynamic web apps with modern frameworks and technologies"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile application development"
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Digital Solutions",
      description: "Complete digital transformation and system integration"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security Services",
      description: "Cybersecurity audits and protection implementation"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimization",
      description: "Speed optimization and performance enhancement services"
    }
  ];

  const projectTypes = [
    'Website Development',
    'E-commerce Platform',
    'Mobile Application',
    'Web Application',
    'Digital Marketing',
    'System Integration',
    'Cybersecurity',
    'Other'
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000',
    'To be discussed'
  ];

  const timelineOptions = [
    'ASAP',
    '1-2 weeks',
    '1-2 months',
    '3-6 months',
    '6+ months',
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
    alert('Thank you! Your project inquiry has been submitted. We\'ll get back to you within 24 hours.');
  };

  return (
    <section id="services" className="py-12 md:py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-yellow-400">Digital Services</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Beyond hardware repairs, we offer comprehensive digital solutions 
            to help your business thrive in the digital world.
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
              Ready to Start Your <span className="text-yellow-400">Project</span>?
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
              Let's discuss your digital project and create something amazing together. 
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
            
            {!showForm ? (
              <button 
                onClick={() => setShowForm(true)}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Discuss Your Project</span>
              </button>
            ) : (
              <button 
                onClick={() => setShowForm(false)}
                className="text-gray-400 hover:text-white transition-colors inline-flex items-center space-x-2"
              >
                <span>Hide Form</span>
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
                      Full Name <span className="text-red-500">*</span>
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
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Email Address <span className="text-red-500">*</span>
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
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Company/Organization
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Project Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors appearance-none"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors appearance-none"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Timeline
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors appearance-none"
                      >
                        <option value="">Select timeline</option>
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
                    Project Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors resize-vertical"
                    placeholder="Please describe your project in detail. Include your goals, requirements, features you need, target audience, and any specific technologies or platforms you prefer..."
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
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Project Inquiry</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Additional Info */}
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mt-6">
                  <h4 className="text-white font-semibold mb-2">What happens next?</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• We'll review your project requirements within 24 hours</li>
                    <li>• Our team will prepare a detailed proposal and timeline</li>
                    <li>• We'll schedule a consultation call to discuss your project</li>
                    <li>• You'll receive a comprehensive quote with no hidden fees</li>
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