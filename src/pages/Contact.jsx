import React from 'react';
import { ArrowUpRight, MapPin, Phone, Mail, Clock, Truck, Ship, Globe } from 'lucide-react';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-screen max-h-[800px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center bg-no-repeat opacity-60 parallax"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="inline-block mb-6">
            <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">Core Fleet Support</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-100">Contact Our</span> <span className="text-orange-400">Support Team</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            24/7 support for all your cargo and vessel logistics needs
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce-slow flex flex-col items-center">
            <span className="text-xs text-white/80 mb-2">Scroll to explore</span>
            <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll-indicator"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Cards Section */}
      <div className="py-20 relative overflow-hidden bg-white">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-slow"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-slow animation-delay-2000"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center flex flex-col items-center mb-16" data-aos="fade-up">
            <span className="text-orange-500 text-sm font-semibold tracking-wider uppercase inline-block bg-orange-50 px-4 py-1 rounded-full mb-4">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 relative inline-block">
              Global Support Network
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Reach our logistics experts anytime, anywhere through our worldwide support channels
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Global Headquarters",
                description: "123 Maritime Plaza, Port City, PC 12345",
                details: "Located at the heart of the international shipping district",
                color: "text-orange-500",
                bg: "bg-orange-50"
              },
              {
                icon: Phone,
                title: "Emergency Dispatch",
                description: "+1 (800) 555-FLEET (35338)",
                details: "24/7 emergency support for active shipments",
                color: "text-blue-500",
                bg: "bg-blue-50"
              },
              {
                icon: Mail,
                title: "General Inquiries",
                description: "operations@corefleetlogistics.com",
                details: "Typically respond within 2 business hours",
                color: "text-purple-500",
                bg: "bg-purple-50"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Floating background element */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full ${item.bg} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>

                <div className={`${item.color} mb-6 relative z-10`}>
                  <div className={`${item.bg} w-16 h-16 rounded-lg flex items-center justify-center`}>
                    <item.icon size={32} className="group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 relative z-10 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-lg text-slate-700 font-medium mb-4 relative z-10">
                  {item.description}
                </p>
                <p className="text-slate-500 relative z-10">
                  {item.details}
                </p>

                {/* Hover effect border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-300 rounded-xl pointer-events-none transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* Additional CTA */}
          <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="300">
            <p className="text-slate-600 mb-6">
              Can't find what you're looking for? Our logistics specialists are standing by to assist you.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-orange-500/30 transform hover:scale-105">
              Contact Support Team
              <ArrowUpRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Regional Offices Section */}
      <div className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-400 text-sm font-semibold tracking-wider uppercase">Global Presence</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Our Regional Offices</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Strategic locations to serve your global logistics needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                location: "Americas",
                city: "Houston, USA",
                address: "500 Maritime Drive, Suite 1200, Houston, TX 77001",
                contact: "+1 (713) 555-7890",
                icon: <Ship size={32} className="text-orange-400" />
              },
              {
                location: "Europe",
                city: "Rotterdam, NL",
                address: "Havenstraat 34, 3011 DK Rotterdam, Netherlands",
                contact: "+31 10 555 7890",
                icon: <Truck size={32} className="text-orange-400" />
              },
              {
                location: "Asia-Pacific",
                city: "Singapore",
                address: "1 Harbourfront Ave, #12-03 Keppel Bay Tower, Singapore 098632",
                contact: "+65 6555 7890",
                icon: <Globe size={32} className="text-orange-400" />
              }
            ].map((office, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-orange-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    {office.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{office.location}</h3>
                    <p className="text-orange-400">{office.city}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin size={20} className="text-slate-400 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-slate-300">{office.address}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone size={20} className="text-slate-400 mr-3 flex-shrink-0" />
                    <p className="text-slate-300">{office.contact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form + Map Section */}
      <div className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-slow"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-slow animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 flex flex-col items-center" data-aos="fade-up">
            <span className="text-orange-500 text-sm font-semibold tracking-wider uppercase inline-block bg-orange-50 px-4 py-1 rounded-full mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 relative inline-block">
              Contact Our Logistics Team
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Have questions about our fleet services? Our experts are ready to assist you 24/7.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-1/2" data-aos="fade-right">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200/50">
                <h2 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <Mail className="text-orange-500" size={24} />
                  Send Us a Message
                </h2>
                <p className="text-slate-600 mb-6">Our logistics team will respond within 24 hours</p>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1 group-hover:text-orange-500 transition-colors">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 group-hover:border-orange-300"
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1 group-hover:text-orange-500 transition-colors">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 group-hover:border-orange-300"
                        placeholder="Acme Shipping Co."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1 group-hover:text-orange-500 transition-colors">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 group-hover:border-orange-300"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1 group-hover:text-orange-500 transition-colors">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 group-hover:border-orange-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1 group-hover:text-orange-500 transition-colors">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-slate-600 transition-all duration-300 group-hover:border-orange-300"
                    >
                      <option value="">Select a service</option>
                      <option value="vessel-charter">Vessel Charter</option>
                      <option value="cargo-shipping">Cargo Shipping</option>
                      <option value="port-services">Port Services</option>
                      <option value="customs-clearance">Customs Clearance</option>
                      <option value="emergency-support">Emergency Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1 group-hover:text-orange-500 transition-colors">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 group-hover:border-orange-300"
                      placeholder="Details about your logistics needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 mt-4 flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Send Message
                    <ArrowUpRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>

            {/* Map and Info Section */}
            <div className="lg:w-1/2" data-aos="fade-left" data-aos-delay="200">
              <div className="h-[390px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200/50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2s!4v1623862930232!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="min-h-[390px]"
                ></iframe>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-100 p-3 rounded-full mr-4">
                      <Clock size={24} className="text-orange-500" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">Office Hours</h3>
                  </div>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex justify-between">
                      <span>Monday-Friday</span>
                      <span className="font-medium">8:00 AM - 8:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Emergency Dispatch</span>
                      <span className="font-medium text-orange-500">24/7</span>
                    </li>
                  </ul>
                </div>

                <div
                  className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-100 p-3 rounded-full mr-4">
                      <Truck size={24} className="text-orange-500" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">Dispatch Centers</h3>
                  </div>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <MapPin size={16} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Port of New York</span>
                    </li>
                    <li className="flex items-start">
                      <MapPin size={16} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Port of Los Angeles</span>
                    </li>
                    <li className="flex items-start">
                      <MapPin size={16} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Rotterdam Terminal</span>
                    </li>
                    <li className="flex items-start">
                      <MapPin size={16} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Singapore Hub</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Emergency Support CTA */}
      <div className="py-16 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Need Immediate Assistance?</h2>
              <p className="text-lg text-orange-100">24/7 emergency support for active shipments</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+18005553535"
                className="bg-white hover:bg-slate-100 text-orange-600 font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                +1 (800) 555-FLEET
              </a>
              <a
                href="mailto:emergency@corefleetlogistics.com"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Emergency Email
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Global Styles for Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes scroll-indicator {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(10px); opacity: 0; }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animate-scroll-indicator {
          animation: scroll-indicator 1.5s ease-in-out infinite;
        }
        .parallax {
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
    </>
  );
}

export default Contact;