import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin, ArrowUpToLine } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-white text-[#021d49] py-16 relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Social Section */}
                <div className="border-b border-[#021d49]/20 pb-12 mb-10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-40">
                        <div className="text-center md:text-left">
                            <h3 className="text-3xl md:text-4xl font-medium">
                                <span className="text-[#021d49]/80 whitespace-nowrap">Follow us</span>
                                <span className="text-orange-500 font-bold ml-2 md:ml-4 whitespace-nowrap">#COREFLEET</span>
                            </h3>
                            <p className="mt-2 text-[#021d49]/80">Join our growing community</p>
                        </div>

                        <div className="flex gap-3 md:gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                                <a
                                    href="#"
                                    key={index}
                                    className="text-white hover:bg-orange-500 transition-all duration-300 bg-[#021d49] p-3 md:p-4 rounded-full hover:scale-105"
                                    aria-label={`Social media link ${index}`}
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Links Section */}
                <div className=" text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:flex justify-between gap-4 md:gap-6 text-sm md:text-base">
                    {[
                        "Privacy policy",
                        "Terms & Conditions",
                        "Responsible disclosure",
                        "Human Rights Statements & Policies",
                        "FAQ",
                        "Sitemap",
                        "Glossary",
                        "Accessibility: Partially compliant"
                    ].map((item, index) => (
                        <a
                            key={index}
                            className="text-[#021d49]/80 hover:text-orange-500 hover:underline cursor-pointer transition-colors duration-200 whitespace-nowrap"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-6  border-[#021d49]/10 text-center text-[#021d49]/60 text-sm">
                    <p>© {new Date().getFullYear()} CoreFleet. All rights reserved.</p>
                </div>
            </div>

            {/* Scroll to top button - fixed position */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="absolute bottom-6 right-6 h-12 w-12 bg-[#021d49] rounded-full text-white flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
                aria-label="Scroll to top"
            >
                <ArrowUpToLine size={20} />
            </button>
        </footer>
    )
}

export default Footer