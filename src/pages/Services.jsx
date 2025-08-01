import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle, Truck, Clock, Users, ChevronRight, Package, Ship } from 'lucide-react';
import { services } from '../constant';
import Footer from '../components/Footer';

const serviceCategories = [
  { id: 'all', name: 'All Services' },
  { id: 'air', name: 'Air Freight' },
  { id: 'ocean', name: 'Ocean Freight & Vessel Charter' },
  { id: 'land', name: 'Land Transport & Fleet Management' },
  { id: 'warehousing', name: 'Cargo Warehousing & Handling' },
  { id: 'customs', name: 'Customs Brokerage & Compliance' },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredService, setHoveredService] = useState(null);

  // Filter services by selected category
  const filteredServices =
    activeTab === 'all'
      ? services
      : services.filter((service) => service.category === activeTab);

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-screen max-h-[800px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center bg-no-repeat opacity-60 parallax"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="inline-block mb-6">
            <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">
              Fleet & Cargo Logistics
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-100">
              Core Fleet
            </span>{' '}
            <span className="text-orange-400">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Smart fleet and cargo logistics solutions for efficient vessel and
            transport management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg hover:shadow-orange-500/30">
              Get a Quote for Your Fleet
              <ArrowUpRight size={20} />
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 backdrop-blur-sm">
              Explore Vessel Solutions
            </button>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce-slow flex flex-col items-center">
            <span className="text-xs text-white/80 mb-2">Scroll to explore</span>
            <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll-indicator"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Showcase with Tabs */}
      <div className="py-16 bg-slate-50 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-slow"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-slow animation-delay-2000"></div>
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-500 text-sm font-semibold tracking-wider uppercase inline-block bg-orange-50 px-4 py-1 rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Comprehensive fleet and cargo logistics solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Tailored services to optimize your fleet operations and vessel cargo management
            </p>
          </div>

          {/* Service category tabs */}
          <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
            <div className="flex space-x-2 mx-auto">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all relative overflow-hidden ${activeTab === category.id
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                >
                  {activeTab === category.id && (
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-80 animate-pulse-slow"></span>
                  )}
                  <span className="relative z-10">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                style={{
                  transform:
                    hoveredService === service.id ? 'translateY(-5px)' : 'none',
                  boxShadow:
                    hoveredService === service.id
                      ? '0 20px 40px -10px rgba(0,0,0,0.1)'
                      : '0 5px 15px -5px rgba(0,0,0,0.05)',
                }}
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} - Cargo and Fleet Service`}
                    className={`w-full h-full object-cover transition-transform duration-700 ${hoveredService === service.id ? 'scale-110' : 'scale-100'
                      }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
                  <span className="absolute top-4 right-4 bg-white text-orange-600 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {service.category.toUpperCase()}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-orange-500 transition-colors">
                      {service.title}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
                      {/* Use ship icon for ocean, truck for land, package for others */}
                      {service.category === 'ocean' ? (
                        <Ship size={20} />
                      ) : service.category === 'land' ? (
                        <Truck size={20} />
                      ) : (
                        <Package size={20} />
                      )}
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4">{service.description}</p>

                  <div className="mb-5">
                    <h4 className="text-sm font-semibold text-slate-500 uppercase mb-2">
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-orange-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-orange-50 hover:bg-orange-100 text-orange-600 font-medium py-2 px-4 rounded-lg transition duration-300 inline-flex items-center justify-center gap-2 group-hover:text-orange-700 group-hover:bg-orange-100">
                    Explore Service
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-slate-500">
                No services found in this category
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Process Visualization */}
      <div className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="text-orange-400 text-sm font-semibold tracking-wider uppercase">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Seamless Fleet and Vessel Logistics Execution
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              A data-driven methodology for optimal fleet and cargo performance
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-700 z-0">
              <div className="absolute top-0 left-0 h-full bg-orange-500 w-full timeline-animate"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  id: 1,
                  title: 'Needs Assessment',
                  description:
                    'Detailed analysis of your fleet and shipping needs.',
                  icon: Users,
                },
                {
                  id: 2,
                  title: 'Solution Design',
                  description:
                    'Custom vessel routing and cargo optimization blueprint.',
                  icon: Clock,
                },
                {
                  id: 3,
                  title: 'Implementation',
                  description:
                    'Seamless integration with your fleet operations and cargo systems.',
                  icon: Truck,
                },
                {
                  id: 4,
                  title: 'Continuous Optimization',
                  description:
                    'Ongoing fleet performance and vessel route monitoring.',
                  icon: CheckCircle,
                },
              ].map((step) => (
                <div key={step.id} className="relative group">
                  <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-orange-400/50 transition-all duration-300 h-full flex flex-col items-center text-center hover:shadow-lg hover:shadow-orange-500/10">
                    <div
                      className={`w-16 h-16 rounded-full bg-orange-500/10 border border-orange-400/30 flex items-center justify-center text-orange-400 text-xl font-bold mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors relative`}
                    >
                      <step.icon size={24} />
                      <span className="absolute -right-2 -top-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {step.id}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="text-slate-300">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Client Testimonials */}
      <div className="py-20 bg-white relative overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-slow"></div>
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-slow animation-delay-2000"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="text-orange-500 text-sm font-semibold tracking-wider uppercase inline-block bg-orange-50 px-4 py-1 rounded-full mb-4">
              Client Success
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2 mb-4">
              Trusted by Global Fleet and Cargo Leaders
            </h2>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto">
              Organizations that transformed their logistics with our fleet and vessel solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {[
              {
                id: 1,
                name: 'Emma Rodriguez',
                position: 'VP Supply Chain',
                company: 'Fortune 500 Retailer',
                testimonial:
                  'Core Fleet reduced our logistics costs by 28% while improving vessel scheduling. Their technology integration was seamless.',
                impact: '$4.2M annual savings',
                rating: 5,
                icon: Users,
              },
              {
                id: 2,
                name: 'James Chen',
                position: 'Logistics Director',
                company: 'Global Manufacturer',
                testimonial:
                  'The predictive analytics prevented vessel delays and optimized cargo loads. Their team operates as an extension of ours.',
                impact: '99.6% on-time rate',
                rating: 5,
                icon: Clock,
              },
              {
                id: 3,
                name: 'Sarah Johnson',
                position: 'Operations Lead',
                company: 'E-commerce Platform',
                testimonial:
                  'Scaled our fleet operations to handle 300% holiday volume increase without added complexity. Exceptional partnership.',
                impact: '5x fleet capacity growth',
                rating: 5,
                icon: Truck,
              },
            ].map((testimonial) => (
              <div key={testimonial.id} className="relative group">
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-gray-200 hover:border-orange-400 transition-all duration-300 h-full flex flex-col hover:shadow-lg hover:shadow-orange-500/10">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{testimonial.position}</p>
                      <p className="text-xs text-gray-500 mt-1">{testimonial.company}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                          } group-hover:${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-400'
                          } transition-colors duration-300`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-gray-600 italic mb-6 flex-1">
                    "{testimonial.testimonial}"
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-200 group-hover:border-orange-400 transition-colors duration-300">
                    <div className="text-sm font-medium text-orange-500 group-hover:text-orange-600 transition-colors duration-300">
                      {testimonial.impact}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 overflow-hidden relative py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>

        <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/5 rounded-full filter blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to transform your fleet operations?
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-10">
              Our experts will design a custom solution to optimize your fleet
              and vessel logistics efficiency and reduce costs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white hover:bg-slate-100 text-orange-600 font-bold py-4 px-10 rounded-full text-lg transition duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-2">
                Get a Free Fleet Assessment
                <ArrowUpRight size={20} />
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 backdrop-blur-sm inline-flex items-center gap-2">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Styles including animations */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes scroll-indicator {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(10px);
            opacity: 0;
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.8;
          }
          50% {
            opacity: 0.4;
          }
        }
        @keyframes timeline-animate {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animate-scroll-indicator {
          animation: scroll-indicator 1.5s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .timeline-animate {
          animation: timeline-animate 2s ease-out forwards;
        }
        .parallax {
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        /* Hide scrollbar on webkit */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </>
  );
};

export default Services;