import React from 'react';
import { Globe, Code, Smartphone, Monitor, Shield, Zap } from 'lucide-react';

const Services = () => {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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

        <div className="text-center mt-8 md:mt-12">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 md:px-8 rounded-lg transition-colors">
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;