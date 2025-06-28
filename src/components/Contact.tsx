import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-8 md:py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In <span className="text-yellow-400">Touch</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to fix your device or discuss your next project? 
            Contact us today for a free consultation and quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Information */}
          <div className="space-y-4 md:space-y-6">
            <div className="bg-gray-800 p-4 md:p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Contact Information</h3>
              
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-yellow-400 p-2 rounded-lg">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm md:text-base">Main Location</h4>
                    <p className="text-gray-300 text-sm">123 Tech Street, Downtown Plaza<br />City, State 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-yellow-400 p-2 rounded-lg">
                    <Phone className="h-4 w-4 md:h-5 md:w-5 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm md:text-base">Phone Numbers</h4>
                    <p className="text-gray-300 text-sm">Main: (555) 123-4567<br />Mobile: (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-yellow-400 p-2 rounded-lg">
                    <Mail className="h-4 w-4 md:h-5 md:w-5 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm md:text-base">Email</h4>
                    <p className="text-gray-300 text-sm">info@techfixpro.com<br />support@techfixpro.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-yellow-400 p-2 rounded-lg">
                    <Clock className="h-4 w-4 md:h-5 md:w-5 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm md:text-base">Business Hours</h4>
                    <p className="text-gray-300 text-sm">Mon-Fri: 9:00 AM - 7:00 PM<br />Sat-Sun: 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-gray-800 p-4 md:p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Quick Contact</h3>
              <form className="space-y-3">
                <div className="grid md:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm text-white placeholder-gray-400"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm text-white placeholder-gray-400"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm text-white placeholder-gray-400"
                />
                <textarea
                  placeholder="How can we help you?"
                  rows={2}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm text-white placeholder-gray-400"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Google Map */}
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700">
            <div className="h-64 md:h-80 lg:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2449325806825!2d-73.98832368459421!3d40.75877727932539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1625067653985!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TechFix Pro Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;