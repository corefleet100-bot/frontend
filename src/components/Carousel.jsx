import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, Play, Pause, ArrowRight } from "lucide-react"
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const CustomPrevButton = ({ isVisible = true }) => {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slidePrev()}
      className={`absolute z-50 left-4 top-1/2 -translate-y-1/2 bg-white/50 backdrop-blur-sm hover:bg-white hover:border-white text-black p-3 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group pointer-events-auto ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
        }`}
    >
      <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform text-black" />
    </button>
  );
};

const CustomNextButton = ({ isVisible = true }) => {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slideNext()}
      className={`absolute z-50 right-4 top-1/2 -translate-y-1/2 bg-white/50 backdrop-blur-sm hover:bg-white hover:border-white text-black p-3 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group pointer-events-auto ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        }`}
    >
      <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform text-black" />
    </button>
  );
};

const Carousel = ({
  slides = [],
  autoPlay = true,
  autoPlayInterval = 4000,
  showDots = true,
  showArrows = true,
  showPlayPause = true,
  animationType = "slide",
  className = "",
}) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const swiperRef = useRef(null);

  const CustomPlayPause = () => {
    const swiper = useSwiper();
    return (
      <button
        onClick={() => {
          if (isPlaying) {
            swiper.autoplay.stop();
          } else {
            swiper.autoplay.start();
          }
          setIsPlaying(!isPlaying);
        }}
        className="absolute top-4 right-4 bg-white/50 backdrop-blur-sm hover:bg-white/30 text-black p-2 rounded-full transition-all duration-300 hover:scale-110 z-10"
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
    );
  };

  const CustomPagination = () => {
    const swiper = useSwiper();
    return (
      <div className="flex justify-center items-center space-x-2 py-6 bg-gray-50">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => swiper.slideTo(index)}
            className={`transition-all duration-300 rounded-full ${swiper.activeIndex === index ? "w-8 h-3 bg-orange-500" : "w-3 h-3 bg-gray-300 hover:bg-gray-400"}`}
          />
        ))}
      </div>
    );
  };

  if (!slides.length) return null;

  return (
    <div className={`relative w-full bg-white shadow-2xl overflow-hidden ${className}`}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={isPlaying ? {
          delay: autoPlayInterval,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        } : false}
        effect={animationType === "fade" ? "fade" : undefined}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          if (!autoPlay) swiper.autoplay.stop();
        }}
        className="h-[800px]"
      >
        {/* Custom controls */}
        {showArrows && slides.length > 1 && (
          <>
            <CustomNextButton />
          </>
        )}

        {showPlayPause && autoPlay && slides.length > 1 && <CustomPlayPause />}

        {/* Slides */}
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <img
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/30 to-transparent" />
              <div className="absolute inset-y-0 left-0 flex items-center justify-start p-8 md:p-16 w-full md:w-2/3 mb-15 lg:mb-0">
                <div className="text-white max-w-3xl">
                  <h3 className="text-2xl md:text-4xl lg:text-6xl leading-relaxed font-bold mb-6 drop-shadow-lg">
                    {slide.title}
                  </h3>
                  <p className="text-lg lg:text-xl opacity-90 leading-relaxed mb-8">
                    {slide.description}
                  </p>
                  <button className="flex items-center gap-3 border-2 border-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-500 hover:border-orange-500 transition duration-300 ease-in-out">
                    <span className="font-semibold">Learn More</span>
                    <ArrowRight size={22} />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Dot Indicators */}
        {showDots && slides.length > 1 && <CustomPagination />}
      </Swiper>
    </div>
  );
};

const InfiniteCarousel = ({
  slides = [],
  autoPlay = true,
  autoPlayInterval = 4000,
  showArrows = true,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeDot, setActiveDot] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const slideWidth = 300;
  const slideMargin = 16;

  const slidesToShow = slides.length ? slides : [];

  if (!slidesToShow.length) return null;

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={slideMargin}
        slidesPerView={'auto'}
        centeredSlides={false}
        loop={true}
        autoplay={
          autoPlay
            ? {
              delay: autoPlayInterval,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true,
            }
            : false
        }
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}" style="background-color: #f97316; width: 10px; height: 10px;"></span>`;
          },
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            centeredSlides: true,
          },
          640: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
          1536: {
            slidesPerView: 5,
          },
        }}
        className="pb-12"
      >

        {showArrows && (
          <div className="absolute inset-0 pointer-events-none z-20">
            <div className="relative h-full w-full">
              <CustomPrevButton isVisible={isHovered} />
              <CustomNextButton isVisible={isHovered} />
            </div>
          </div>
        )}

        {slidesToShow.map((slide, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: `${slideWidth}px`,
              backgroundColor: "#fff",
              height: `400px`,
              marginRight: `${slideMargin}px`,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative group h-[350px] overflow-hidden bg-white rounded-lg shadow-md">
              <img
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                className={`w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105`}
              />

              <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-all duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-80'}`} />

              <div className={`absolute inset-0 p-4 flex flex-col justify-end transition-all duration-500 ${hoveredIndex === index ? 'translate-y-0' : 'translate-y-10'}`}>
                <h3 className="text-2xl font-bold text-white mb-3">{slide.title}</h3>
                <div className={`w-12 h-1 bg-orange-500 ${hoveredIndex === index ? 'mb-5' : 'mb-10'} transition-all duration-500`}></div>

                <div className={`overflow-hidden transition-all duration-500 ${hoveredIndex === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-white text-base mb-2">{slide.description || "No description available"}</p>
                  {slide && (
                    <button className="mt-3 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md text-sm font-medium transition-colors duration-300">
                      Learn More
                    </button>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom pagination styling */}
      <style jsx>{`
        .swiper-pagination {
          bottom: 10px !important;
          text-align: center;
        }
        
        .swiper-pagination-bullet {
          transition: all 0.3s ease !important;
        }
        
        .swiper-pagination-bullet:hover {
          transform: scale(1.2) !important;
        }
      `}</style>
    </div>
  );
};

export {
  InfiniteCarousel,
  Carousel
}