import { useState } from "react"
import { Carousel, InfiniteCarousel } from "../components/Carousel"
import { ArrowRight, ArrowUpRight, ChevronDown, Quote, Search } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { homeSlides, newsArticles, ourSolutions, specialHighlights } from "../constant"
import Footer from "../components/Footer"

const Home = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("track")
  const [selectedOption, setSelectedOption] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const renderFormContent = () => {
    switch (activeTab) {
      case "track":
        return (
          <div className="space-y-6">
            <div className="relative group">
              <input
                type="text"
                placeholder="Enter your tracking number"
                className="w-full px-4 py-4 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 text-slate-700 placeholder-slate-400 bg-white shadow-sm"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 rounded-md hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <Search size={18} />
              </button>
            </div>
          </div>
        )
      case "quote":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                onClick={handleRedirectToQuote}
                className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 hover:border-orange-400 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-xl group transform hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="hidden w-12 h-12 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full md:flex items-center justify-center mx-auto mb-4 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                    <span className="text-white font-bold text-lg">I</span>
                  </div>
                  <h4 className="font-bold text-sm text-slate-600 mb-2 uppercase tracking-wide">I AM...</h4>
                  <p className="font-bold text-lg text-slate-800 mb-2">AN INDIVIDUAL</p>
                  <p className="text-sm text-slate-500">We only handle shipments for companies</p>
                </div>
              </div>
              <div
                onClick={handleRedirectToQuote}
                className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 hover:border-orange-400 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-xl group transform hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="hidden w-12 h-12 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full md:flex items-center justify-center mx-auto mb-4 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                    <span className="text-white font-bold text-lg">C</span>
                  </div>
                  <h4 className="font-bold text-sm text-slate-600 mb-2 uppercase tracking-wide">I AM...</h4>
                  <p className="font-bold text-lg text-slate-800 mb-2">A COMPANY</p>
                  <p className="text-sm text-slate-500">Get quotes or ask for information</p>
                </div>
              </div>
            </div>
          </div>
        )
      case "contact":
        return (
          <div className="space-y-6">
            <div className="space-y-6">
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full px-4 py-4 border border-slate-200 bg-white rounded-lg text-left flex items-center justify-between hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 shadow-sm"
                >
                  <span className={selectedOption ? "text-slate-800 font-medium" : "text-slate-400"}>
                    {selectedOption || "Select an option"}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 text-slate-400 ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-lg shadow-xl z-10 overflow-hidden">
                    <button
                      onClick={() => {
                        setSelectedOption("General Inquiry")
                        setIsDropdownOpen(false)
                      }}
                      className="block w-full text-left px-4 py-4 hover:bg-slate-50 transition-colors duration-200 font-medium text-slate-700 border-b border-slate-100 last:border-b-0"
                    >
                      General Inquiry
                    </button>
                    <button
                      onClick={() => {
                        setSelectedOption("Technical Support")
                        setIsDropdownOpen(false)
                      }}
                      className="block w-full text-left px-4 py-4 hover:bg-slate-50 transition-colors duration-200 font-medium text-slate-700"
                    >
                      Technical Support
                    </button>
                  </div>
                )}
              </div>
              <button
                onClick={handleRedirectToContact}
                disabled={!selectedOption}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-6 rounded-lg hover:from-orange-600 hover:to-orange-700 disabled:from-slate-300 disabled:to-slate-400 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none disabled:shadow-none"
              >
                Select
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  const handleRedirectToQuote = () => {
    navigate("/quote")
  }

  const handleRedirectToContact = () => {
    navigate("/contact")
  }

  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <div className="relative mb-16 md:mb-24">
        <Carousel
          slides={homeSlides}
          autoPlay={true}
          autoPlayInterval={4000}
          showDots={false}
          showArrows={true}
          showPlayPause={false}
          animationType="fade"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full px-4 sm:px-6 lg:px-8 max-w-4xl z-20">
          <div className="bg-white rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-3xl border border-slate-200">
            <div className="flex border-b border-slate-200 overflow-hidden rounded-t-2xl">
              <button
                onClick={() => {
                  setActiveTab("track")
                  setIsDropdownOpen(false)
                }}
                className={`flex-1 py-4 px-4 text-sm font-bold transition-all duration-300 relative overflow-hidden ${
                  activeTab === "track"
                    ? "bg-gradient-to-r from-slate-700 to-slate-800 text-white shadow-lg"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800"
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Search size={16} className={activeTab === "track" ? "text-orange-400" : "text-slate-500"} />
                  Track & Trace
                </span>
                {activeTab === "track" && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-500"></div>
                )}
              </button>
              <button
                onClick={() => {
                  setActiveTab("quote")
                  setIsDropdownOpen(false)
                }}
                className={`flex-1 py-4 px-4 text-sm font-bold transition-all duration-300 relative overflow-hidden ${
                  activeTab === "quote"
                    ? "bg-gradient-to-r from-slate-700 to-slate-800 text-white shadow-lg"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800"
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Quote size={16} className={activeTab === "quote" ? "text-orange-400" : "text-slate-500"} />
                  Get a Quote
                </span>
                {activeTab === "quote" && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-500"></div>
                )}
              </button>
              <button
                onClick={() => {
                  setActiveTab("contact")
                  setIsDropdownOpen(false)
                }}
                className={`flex-1 py-4 px-4 text-sm font-bold transition-all duration-300 relative overflow-hidden ${
                  activeTab === "contact"
                    ? "bg-gradient-to-r from-slate-700 to-slate-800 text-white shadow-lg"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800"
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={activeTab === "contact" ? "text-orange-400" : "text-slate-500"}
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Contact Us
                </span>
                {activeTab === "contact" && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-500"></div>
                )}
              </button>
            </div>
            <div className="p-6">{renderFormContent()}</div>
          </div>
        </div>
      </div>

      {/* Our Solutions Section */}
      <div className="w-full py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-block">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900 mb-4 md:mb-6 tracking-tight">
                Our Solutions
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-4 md:mb-6"></div>
            </div>
            <p className="text-lg md:text-xl lg:text-2xl font-medium text-slate-600 max-w-4xl mx-auto leading-relaxed">
              CEVA Logistics offers comprehensive, customized end-to-end logistics solutions worldwide.
            </p>
          </div>
          <div className="mt-12 h-auto">
            <InfiniteCarousel
              slides={ourSolutions}
              autoPlay={true}
              autoPlayInterval={2000}
              showArrows={true}
              showDots={true}
            />
          </div>
          <div className="text-center mt-12 md:mt-16">
            <button className="bg-gradient-to-r from-slate-700 to-slate-800 text-white py-3 px-8 md:py-4 md:px-10 rounded-xl hover:from-slate-800 hover:to-slate-900 transition-all duration-300 font-bold text-lg inline-flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105">
              Explore all solutions
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Special Highlights Section */}
      <div className="bg-gradient-to-br from-slate-100 to-slate-200 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-block">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900 mb-4 md:mb-6 tracking-tight">
                Special Highlights
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-4 md:mb-6"></div>
            </div>
            <p className="text-lg md:text-xl lg:text-2xl font-medium text-slate-600">
              Discover what makes CEVA Logistics different
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {specialHighlights.map((highlight, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 h-80 md:h-96 transform hover:-translate-y-2"
              >
                <img
                  src={highlight.image || "/placeholder.svg"}
                  alt={highlight.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-slate-200 text-sm md:text-base mb-4 md:mb-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {highlight.description}
                  </p>
                  <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mb-4 md:mb-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-100"></div>
                  <button className="text-white font-bold flex items-center gap-2 md:gap-3 group-hover:text-orange-300 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 delay-150 text-sm md:text-base">
                    Learn more
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsroom Section */}
      <div className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-block">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900 mb-4 md:mb-6 tracking-tight">
                CEVA Logistics Newsroom
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-4 md:mb-6"></div>
            </div>
            <p className="text-lg md:text-xl lg:text-2xl font-medium text-slate-600">
              Stay updated with our latest news and announcements
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-20">
            <div className="relative group overflow-hidden rounded-xl md:rounded-2xl h-[350px] md:h-[450px] shadow-lg md:shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="CEVA Logistics News"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
            </div>
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3 md:gap-4">
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wide">
                  Press release
                </span>
                <span className="text-slate-500 font-semibold text-base md:text-lg">April 25, 2025</span>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 md:mb-8 text-slate-800 leading-tight">
                CEVA Logistics signs deal to acquire Borusan Tedarik, expand in Turkey
              </h3>
              <p className="text-lg md:text-xl text-slate-600 mb-8 md:mb-10 leading-relaxed">
                CEVA agrees to share transfer agreement for 100% of Borusan Tedarik, strengthening our presence in the
                Turkish market and expanding our service offerings in the region.
              </p>
              <button className="bg-gradient-to-r from-slate-700 to-slate-800 text-white py-3 px-8 md:py-4 md:px-10 rounded-xl hover:from-slate-800 hover:to-slate-900 transition-all duration-300 font-bold text-lg inline-flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105">
                Read full story
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {newsArticles?.slice(0, 3)?.map((card) => (
              <div
                key={card.id}
                className="flex flex-col rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 bg-white transform hover:-translate-y-2"
              >
                <div className="h-48 md:h-56 overflow-hidden">
                  <img
                    src={card.img || "/placeholder.svg"}
                    alt="News cover"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <span
                      className={`${
                        card.type.toLowerCase() === "press release"
                          ? "bg-gradient-to-r from-orange-500 to-orange-600"
                          : "bg-gradient-to-r from-slate-600 to-slate-700"
                      } text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-bold uppercase tracking-wide`}
                    >
                      {card.type}
                    </span>
                    <span className="text-slate-500 text-xs md:text-sm font-semibold">{card.date}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 hover:text-orange-600 transition-colors duration-300 mb-4 md:mb-6 leading-snug">
                    {card.title}
                  </h3>
                  <div className="mt-auto">
                    <p className="text-orange-600 font-bold text-xs md:text-sm hover:text-orange-700 transition-colors duration-300 inline-flex items-center gap-2">
                      Read more <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 md:mt-20">
            <button className="border-2 uppercase border-slate-700 text-slate-700 py-3 px-8 md:py-4 md:px-10 rounded-xl hover:bg-slate-700 hover:text-white transition-all duration-300 font-bold text-lg inline-flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105">
              View all news
            </button>
          </div>
        </div>
      </div>

      {/* Join us Section */}
      <div>
        <div className="bg-gradient-to-br from-slate-100 to-slate-200 py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900 mb-6 md:mb-8 tracking-tight">
                Join us
              </h3>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quae culpa quidem unde omnis
                obcaecati dolorum possimus illum blanditiis fuga quia, voluptate neque quasi, in placeat. Quasi
                temporibus debitis ex aut cupiditate neque provident sint ipsum, hic tempora labore dolores, quis
                voluptas, libero cumque. Nesciunt doloremque praesentium placeat quia quae necessitatibus itaque dolores
                natus iste eos neque ab totam beatae aut repudiandae, consectetur, laborum nam corporis sequi provident
                cum eaque? Aut eos error fugiat officia, quaerat ex cum explicabo maiores.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 py-12 md:py-16 pt-20 md:pt-24 text-white">
          <div className="max-w-5xl mx-auto px-4">
            <div>
              <div className="relative flex flex-col items-center w-full">
                <Quote
                  size={80}
                  className="absolute -left-6 -top-6 md:-left-12 md:-top-12 text-white/5 -scale-x-100 z-0 pointer-events-none"
                />
                <Quote
                  size={80}
                  className="absolute -right-6 -bottom-6 md:-right-12 md:-bottom-12 text-white/5 z-0 pointer-events-none"
                />
                <div className="relative z-10 bg-white/10 rounded-xl md:rounded-2xl backdrop-blur-xl px-6 py-8 md:px-12 md:py-16 shadow-xl md:shadow-2xl border border-white/20 hover:border-white/30 transition-all duration-500 hover:bg-white/15">
                  <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed italic text-center">
                    "As a Team Leader, I have the opportunity to create an amazing team and achieve extraordinary
                    results every single day."
                  </p>
                </div>
              </div>
              <div className="mt-8 md:mt-12 text-center">
                <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">Lorem ipsum dolor</p>
                <p className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-300">Team Leader</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col gap-6 md:gap-8 items-center max-w-7xl text-center w-full py-16 md:py-20 lg:py-16 bg-gradient-to-br from-slate-600 to-slate-700 mx-auto px-4">
            <p className="text-3xl md:text-4xl lg:text-5xl font-black">Find a job</p>
            <p className="max-w-2xl text-base md:text-lg leading-relaxed text-slate-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nihil illum necessitatibus est dicta,
              voluptatibus maiores esse hic quibusdam delectus!
            </p>
            <button className="border-2 uppercase border-white text-white py-3 px-8 md:py-4 md:px-10 rounded-xl hover:border-orange-400 hover:bg-orange-500 hover:text-white transition-all duration-300 font-bold text-lg inline-flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105">
              Explore Opportunities
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="flex flex-col gap-6 md:gap-8 items-center max-w-7xl text-center w-full py-16 md:py-20 lg:py-16 bg-gradient-to-br from-orange-500 to-orange-600 mx-auto px-4">
            <p className="text-3xl md:text-4xl lg:text-5xl font-black">Discover Life</p>
            <p className="max-w-2xl text-base md:text-lg leading-relaxed text-orange-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nihil illum necessitatibus est dicta,
              voluptatibus maiores esse hic quibusdam delectus!
            </p>
            <button className="border-2 uppercase border-white text-white py-3 px-8 md:py-4 md:px-10 rounded-xl hover:border-slate-700 hover:bg-slate-700 hover:text-white transition-all duration-300 font-bold text-lg inline-flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105">
              Explore Life
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home