import { useState, useEffect, useRef } from "react";
import { Search, Menu, ChevronDown, Globe, LocateFixed, TextQuote } from "lucide-react";
import Sidebar from "./Sidebar";
import { useNavigate, useLocation } from "react-router-dom";
import { page_lang } from "../constant";
import logo from "../assets/logo.png";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.pathname);
    const searchRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSearch(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mousedown", handleClickOutside);

        // Update active tab on location change
        setActiveTab(location.pathname);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [location.pathname]);

    const handleNavigation = (href) => {
        navigate(href);
        setIsSidebarOpen(false);
        setActiveTab(href);
    };

    return (
        <>
            <header className={`fixed top-0 left-0 shadow-xl h-20 w-full right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
                <div className="mx-auto px-4 h-full">   
                    <div className="flex items-center justify-between h-full">
                        <div className="flex items-center gap-20 h-full">
                            <img
                                src={logo}
                                alt="logo"
                                className="w-30 cursor-pointer"
                                onClick={() => navigate("/")}
                            />
                            <nav className="hidden lg:flex items-center gap-8 h-full">
                                {[
                                    { name: "About Us", path: "/about" },
                                    { name: "Services", path: "/services" },
                                    { name: "Contact Us", path: "/contact" },
                                ].map((tab) => (
                                    <p
                                        key={tab.path}
                                        onClick={() => handleNavigation(tab.path)}
                                        className={`cursor-pointer font-medium transition-colors relative group h-full flex items-center ${activeTab === tab.path
                                                ? "text-orange-500"
                                                : "text-gray-800 hover:text-orange-500"
                                            }`}
                                    >
                                        {tab.name}
                                        <span
                                            className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all group-hover:w-full ${activeTab === tab.path ? "w-full" : "w-0"
                                                }`}
                                        ></span>
                                    </p>
                                ))}
                            </nav>
                        </div>

                        {/* Right side elements */}
                        <div className="flex items-center gap-6 h-full">

                            {/* Navigation Tabs */}
                            <nav className="hidden md:flex items-center gap-6 h-full">
                                {[
                                    { name: "Track & Trace", path: "/track", icon: <LocateFixed size={16} color="#4B5563" /> }, // gray-600
                                    { name: "Get a Quote", path: "/quote", icon: <TextQuote size={16} color="#4B5563" /> },
                                ].map((tab) => (
                                    <p
                                        key={tab.path}
                                        onClick={() => handleNavigation(tab.path)}
                                        className={`cursor-pointer font-medium transition-colors relative group h-full flex items-center ${activeTab === tab.path
                                                ? "text-orange-500"
                                                : "text-gray-800 hover:text-orange-500"
                                            }`}
                                    >
                                        <span className="flex items-center gap-2">
                                            {tab.icon}
                                            {tab.name}
                                        </span>
                                        <span
                                            className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all group-hover:w-full ${activeTab === tab.path ? "w-full" : "w-0"
                                                }`}
                                        ></span>
                                    </p>
                                ))}
                            </nav>

                            <div className="relative h-full flex items-center" ref={searchRef}>
                                {showSearch ? (
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                            className="pl-10 pr-4 py-2 rounded-md bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all w-64"
                                            autoFocus
                                        />
                                        <Search
                                            size={16}
                                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                        />
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => setShowSearch(true)}
                                        className="p-2 text-gray-600 hover:text-orange-500 transition-colors"
                                    >
                                        <Search size={20} />
                                    </button>
                                )}
                            </div>

                            {/* Menu Icon */}
                            <button
                                onClick={() => setIsSidebarOpen(true)}
                                className="p-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white transition-colors"
                            >
                                <Menu size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Sidebar */}
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                handleNavigation={handleNavigation}
                activeTab={activeTab}
            />
        </>
    );
};

export default Header;