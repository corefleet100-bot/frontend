import { useState, useEffect } from "react"
import {
    X,
    Globe,
    ChevronDown,
    Search,
    Menu,
    Home,
    Info,
    Settings,
    Truck,
    Package,
    FileText,
    Phone,
} from "lucide-react"
import logo from "../assets/logo.png"
import { page_lang } from "../constant"

const ModernSidebar = ({ isOpen, onClose, handleNavigation, activeTab }) => {
    const [isLanguageOpen, setIsLanguageOpen] = useState(false)
    const [selectedLanguage, setSelectedLanguage] = useState("English")
    const [searchQuery, setSearchQuery] = useState("")

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                onClose()
            }
        }
        if (isOpen) {
            document.addEventListener("keydown", handleEscape)
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.removeEventListener("keydown", handleEscape)
            document.body.style.overflow = "unset"
        }
    }, [isOpen, onClose])

    const navigationItems = [
        { name: "Home", href: "/", badge: null, icon: Home },
        { name: "About Us", href: "/about", badge: null, icon: Info },
        { name: "Services", href: "/services", badge: "New", icon: Settings },
        { name: "Shipping", href: "/shipping", badge: null, icon: Truck },
        { name: "Fulfillment", href: "/fulfillment", badge: null, icon: Package },
        { name: "Quote", href: "/quote", badge: "Popular", icon: FileText },
        { name: "Contact Us", href: "/contact", badge: null, icon: Phone },
    ]

    const filteredItems = navigationItems.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))

    const clearSearch = () => {
        setSearchQuery("")
    }

    return (
        <>
            {/* Enhanced Backdrop */}
            <div
                className={`fixed inset-0 bg-gradient-to-br from-black/20 via-black/40 to-black/60 backdrop-blur-xs z-50 transition-all duration-500 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => {
                    onClose()
                    setIsLanguageOpen(false)
                    document.body.style.overflow = "unset"
                }}
            />

            {/* Enhanced Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-[420px] bg-white/98 backdrop-blur-2xl shadow-2xl z-50 transform transition-all duration-500 ease-out border-l border-orange-100/80 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                style={{
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                }}
            >
                {/* Enhanced Header */}
                <div className="relative overflow-hidden h-full max-h-[80px] border-b border-rose-200/60">
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-100 via-rose-50 to-white opacity-80"></div>
                    <div className="relative flex items-center justify-between p-6 py-5 border-b border-rose-100/60">
                        <div className="flex items-center gap-4">
                            <div className="relative w-full h-full">
                                <img src={logo} alt="logo" className="w-40 object-contain cursor-pointer" onClick={() => navigate("/")} />
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                setIsLanguageOpen(false)
                                onClose()
                                document.body.style.overflow = "unset"
                            }}
                            className="group relative h-11 w-11 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-all duration-300 flex items-center justify-center border-none bg-transparent text-gray-500 hover:shadow-sm hover:scale-105"
                        >
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-orange-600/10 transition-all duration-300"></div>
                            <X size={20} className="relative z-10" />
                        </button>
                    </div>
                </div>

                {/* Enhanced Content */}
                <div className="flex flex-col h-full">
                    <div className="flex-1 p-6 space-y-6 overflow-y-auto" style={{ paddingBottom: "140px" }}>

                        {/* Enhanced Navigation Items */}
                        <nav className="space-y-2">
                            <h3 className="text-sm font-bold text-gray-700 mb-6 uppercase tracking-wider flex items-center gap-2">
                                <div className="w-1 h-4 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></div>
                                Menu Items
                            </h3>
                            <div className="space-y-2">
                                {filteredItems.map((item, index) => {
                                    const Icon = item.icon
                                    const isActive = activeTab === item.href
                                    return (
                                        <div key={item.name} className="relative group" style={{ animationDelay: `${index * 50}ms` }}>
                                            {isActive && (
                                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-xl blur-sm"></div>
                                            )}
                                            <button
                                                onClick={() => {
                                                    handleNavigation(item.href)
                                                    onClose()
                                                }}
                                                className={`relative w-full flex items-center justify-between px-5 py-2 text-left rounded-xl group border-2 transition-all duration-300 ease-out transform hover:scale-[1.02] ${isActive
                                                        ? "bg-gradient-to-r from-orange-50 to-orange-25 border-orange-200 text-orange-700 shadow-sm shadow-orange-500/20"
                                                        : "text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-white hover:text-orange-600 hover:border-orange-300 hover:shadow-sm hover:shadow-orange-500/10 bg-white/60 border-gray-100"
                                                    }`}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div
                                                        className={`p-2 rounded-lg transition-all duration-300 ${isActive
                                                                ? "bg-orange-500 text-white shadow-md"
                                                                : "bg-gray-100 text-gray-600 group-hover:bg-orange-100 group-hover:text-orange-600"
                                                            }`}
                                                    >
                                                        <Icon size={18} />
                                                    </div>
                                                    <span className="font-semibold tracking-wide">{item.name}</span>
                                                </div>
                                                {item.badge && (
                                                    <span
                                                        className={`px-3 py-1.5 text-xs font-bold rounded-full shadow-sm border transition-all duration-300 ${item.badge === "New"
                                                                ? "bg-gradient-to-r from-orange-100 to-orange-50 text-orange-800 border-orange-200"
                                                                : "bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 border-gray-200"
                                                            }`}
                                                    >
                                                        {item.badge}
                                                    </span>
                                                )}
                                            </button>
                                        </div>
                                    )
                                })}
                            </div>
                            {filteredItems.length === 0 && (
                                <div className="text-center py-12 text-gray-500">
                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16 bg-orange-100 rounded-full opacity-50"></div>
                                        </div>
                                        <Search size={40} className="relative mx-auto mb-4 text-gray-400" />
                                    </div>
                                    <p className="font-semibold text-lg">No results found</p>
                                    <p className="text-sm mt-1">Try adjusting your search terms</p>
                                </div>
                            )}
                        </nav>
                    </div>

                    {/* Enhanced Language Selection */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-rose-200/60 bg-gradient-to-r from-rose-50/80 via-rose-25/80 to-white/80 backdrop-blur-xl">
                        <div className="space-y-3">
                            <label className="text-sm font-semibold text-gray-700 tracking-wide flex items-center gap-2">
                                <Globe size={16} className="text-orange-500" />
                                Language Preference
                            </label>
                            <div className="relative">
                                <button
                                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                                    className="w-full flex items-center justify-between px-5 py-2 border-2 border-gray-200 rounded-xl hover:border-orange-300 focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-sm group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg group-hover:from-orange-200 group-hover:to-orange-100 transition-all duration-300">
                                            <Globe size={18} className="text-orange-600" />
                                        </div>
                                        <span className="text-gray-700 font-semibold tracking-wide">{selectedLanguage}</span>
                                    </div>
                                    <ChevronDown
                                        size={18}
                                        className={`text-gray-500 transition-all duration-300 group-hover:text-orange-500 ${isLanguageOpen ? "rotate-180 text-orange-500" : ""
                                            }`}
                                    />
                                </button>
                                {isLanguageOpen && (
                                    <div className="absolute bottom-full left-0 right-0 mb-3 bg-white/95 backdrop-blur-xl border-2 border-gray-100 rounded-xl shadow-2xl z-20 overflow-hidden animate-in slide-in-from-bottom-2 duration-300">
                                        <div className="max-h-48 overflow-y-auto">
                                            {page_lang.map((lang, index) => (
                                                <button
                                                    key={lang.code}
                                                    className="block w-full text-left px-5 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-25 hover:text-orange-700 transition-all duration-200 border-b border-gray-50 last:border-b-0 bg-transparent group"
                                                    onClick={() => {
                                                        setSelectedLanguage(lang.name)
                                                        setIsLanguageOpen(false)
                                                    }}
                                                    style={{ animationDelay: `${index * 30}ms` }}
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-3 h-3 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full shadow-sm group-hover:scale-110 transition-transform duration-200"></div>
                                                        <span className="font-semibold tracking-wide">{lang.name}</span>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModernSidebar
