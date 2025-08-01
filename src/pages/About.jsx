import React from 'react';
import { ArrowUpRight, CheckCircle, Globe, Truck, Clock, Users, ChevronRight, Anchor, Ship, Warehouse, Package, Shield } from 'lucide-react';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-screen max-h-[800px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1661962532309-07c1e2270ada?q=80&w=1676&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat opacity-60 parallax"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="inline-block mb-6">
            <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">Core Fleet Solutions</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-100">Navigating Your</span> <span className="text-orange-400">Cargo Future</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Pioneering maritime and land logistics solutions since 2005
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg hover:shadow-orange-500/30">
              Our Fleet
              <ArrowUpRight size={20} />
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 backdrop-blur-sm">
              Contact Team
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

      {/* Our Story Section */}
      <div className="py-20 relative overflow-hidden bg-white">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-slow"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-slow animation-delay-2000"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2" data-aos="fade-right" data-aos-duration="800">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] group">
                <img
                  src="https://images.unsplash.com/photo-1530890448995-4d82724f702c?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Our fleet"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white transform translate-y-0 group-hover:translate-y-2 transition-transform duration-500">
                  <h3 className="text-xl font-bold mb-2 drop-shadow-lg">Our First Vessel - 2005</h3>
                  <p className="text-slate-300 drop-shadow-md">Beginning of our maritime journey</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
              <span className="text-orange-500 text-sm font-semibold tracking-wider uppercase inline-block mb-2 bg-orange-50 px-3 py-1 rounded-full">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6 relative">
                From Humble Beginnings to Global Reach
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Founded in 2005 with a single cargo vessel, we've grown into a global fleet and logistics provider serving 120+ countries. Our commitment to innovation and reliability has made us a trusted partner for maritime and land cargo solutions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div
                  className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:border-orange-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div className="text-orange-500 mb-3 relative">
                    <Ship size={32} className="relative z-10" />
                    <div className="absolute -left-2 -top-2 w-10 h-10 rounded-full bg-orange-100 z-0"></div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">150+ Vessels</h3>
                  <p className="text-slate-600">Modern fleet with advanced tracking</p>
                </div>
                <div
                  className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:border-orange-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <div className="text-orange-500 mb-3 relative">
                    <Globe size={32} className="relative z-10" />
                    <div className="absolute -left-2 -top-2 w-10 h-10 rounded-full bg-orange-100 z-0"></div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Global Network</h3>
                  <p className="text-slate-600">Ports in 120+ countries</p>
                </div>
              </div>

              <button
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-orange-500/30 transform hover:scale-105"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Read Our Full Story
                <ArrowUpRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="py-20 relative overflow-hidden bg-white">
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-slow"></div>
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-slow animation-delay-2000"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-500 text-sm font-semibold tracking-wider uppercase inline-block bg-orange-50 px-4 py-1 rounded-full mb-4">Our Foundation</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Core Values That Guide Our Voyage</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Principles that steer every decision in our logistics operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Safety First",
                description: "Rigorous safety protocols for crew and cargo",
                color: "text-orange-500"
              },
              {
                icon: Clock,
                title: "Reliability",
                description: "99.7% on-time delivery across all routes",
                color: "text-blue-500"
              },
              {
                icon: Globe,
                title: "Sustainability",
                description: "Eco-friendly fleet with reduced emissions",
                color: "text-green-500"
              },
              {
                icon: Users,
                title: "Partnership",
                description: "Collaborative approach with clients",
                color: "text-purple-500"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className={`${item.color} mb-4 relative`}>
                  <div className="absolute -left-2 -top-2 w-12 h-12 rounded-full bg-current opacity-10"></div>
                  <item.icon size={40} className="relative z-10" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-orange-500 transition-colors">{item.title}</h3>
                <p className="text-slate-600 mb-4">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fleet Capabilities Section */}
      <div className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="text-orange-400 text-sm font-semibold tracking-wider uppercase">Our Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Global Fleet & Cargo Solutions</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Comprehensive assets and expertise for all your logistics needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Ship,
                title: "Maritime Fleet",
                description: [
                  "150+ modern vessels",
                  "Container ships & bulk carriers",
                  "Refrigerated cargo options",
                  "Hazardous material certified"
                ],
                stats: "2M+ TEU capacity"
              },
              {
                icon: Truck,
                title: "Land Transport",
                description: [
                  "500+ trucks & trailers",
                  "Temperature-controlled units",
                  "Heavy-lift capabilities",
                  "Cross-border expertise"
                ],
                stats: "98% on-time delivery"
              },
              {
                icon: Warehouse,
                title: "Port Facilities",
                description: [
                  "12 global port terminals",
                  "Bonded warehousing",
                  "Customs clearance",
                  "Cargo consolidation"
                ],
                stats: "24/7 operations"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-orange-400/50 transition-all duration-300 h-full hover:shadow-lg hover:shadow-orange-500/10"
              >
                <div className="text-orange-400 mb-6">
                  <item.icon size={40} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>

                <ul className="space-y-3 mb-6">
                  {item.description.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-orange-400 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-slate-300">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4 border-t border-slate-700">
                  <div className="text-sm font-medium text-orange-400">{item.stats}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Team Section */}
      <div className="py-20 bg-white relative overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-slow"></div>
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-slow animation-delay-2000"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-500 text-sm font-semibold tracking-wider uppercase inline-block bg-orange-50 px-4 py-1 rounded-full mb-4">Our Crew</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Meet The Leadership Team</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Seasoned professionals guiding our fleet to new horizons
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Captain James Wilson",
                position: "Founder & CEO",
                bio: "30+ years maritime experience, former commercial shipping captain",
                image: "https://plus.unsplash.com/premium_vector-1749476966910-2d4d591d8b51?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              {
                name: "Sarah Chen",
                position: "COO",
                bio: "Logistics operations expert with 20 years in cargo management",
                image: "https://plus.unsplash.com/premium_vector-1749475101105-9102ccf2739a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              {
                name: "Michael Rodriguez",
                position: "CFO",
                bio: "Financial strategist specializing in transportation economics",
                image: "https://plus.unsplash.com/premium_vector-1749476966824-369c001cfbc0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              {
                name: "Emma Johnson",
                position: "CTO",
                bio: "Fleet technology innovator and digital transformation leader",
                image: "https://plus.unsplash.com/premium_vector-1749476966527-abb77d7f3e98?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            ].map((person, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="h-64 relative overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-orange-500 transition-colors mb-1">
                    {person.name}
                  </h3>
                  <p className="text-orange-500 font-medium mb-3">{person.position}</p>
                  <p className="text-slate-600 mb-4">{person.bio}</p>

                  <button className="text-sm font-medium flex items-center gap-1 text-slate-700 hover:text-orange-500 transition-colors">
                    View profile <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 overflow-hidden relative py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>

        <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/5 rounded-full filter blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to chart your cargo's course?
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-10">
              Our logistics experts are standing by to optimize your supply chain.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white hover:bg-slate-100 text-orange-600 font-bold py-4 px-10 rounded-full text-lg transition duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-2">
                Get a Quote
                <ArrowUpRight size={20} />
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 backdrop-blur-sm inline-flex items-center gap-2">
                +1 (800) 555-FLEET
              </button>
            </div>
          </div>
        </div>
      </section>

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

export default About;