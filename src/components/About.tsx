import React from 'react';
import { Users, Award, Clock, ThumbsUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "5000+", label: "Happy Customers" },
    { icon: <Award className="h-8 w-8" />, number: "10+", label: "Years Experience" },
    { icon: <Clock className="h-8 w-8" />, number: "24/7", label: "Support Available" },
    { icon: <ThumbsUp className="h-8 w-8" />, number: "98%", label: "Success Rate" }
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose <span className="text-yellow-400">TechFix Pro</span>?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Your trusted local technology experts with over 10 years of experience 
            in mobile and laptop repairs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-yellow-400 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <img 
              src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Tech repair workspace" 
              className="rounded-2xl shadow-xl w-full"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 to-transparent rounded-2xl"></div>
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">
              Professional Repair Services You Can Trust
            </h3>
            <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed">
              We are your trusted local technology experts, providing top-quality repair services 
              for mobile devices and laptops since 2013. Our certified technicians combine 
              years of experience with the latest tools and genuine parts.
            </p>
            <p className="text-gray-300 mb-6 md:mb-8 leading-relaxed">
              From simple screen replacements to complex motherboard repairs, we handle 
              every job with precision and care. We also offer comprehensive web development 
              services to help businesses establish their digital presence.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="bg-yellow-400 text-gray-900 px-3 md:px-4 py-2 rounded-lg font-semibold text-xs md:text-sm">
                Certified Technicians
              </div>
              <div className="bg-yellow-400 text-gray-900 px-3 md:px-4 py-2 rounded-lg font-semibold text-xs md:text-sm">
                Genuine Parts
              </div>
              <div className="bg-yellow-400 text-gray-900 px-3 md:px-4 py-2 rounded-lg font-semibold text-xs md:text-sm">
                Warranty Included
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;