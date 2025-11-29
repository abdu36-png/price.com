<section className="relative mt-4 mx-4 md:mt-0 md:mx-5">
      {/* Container Height:
        - Mobile: min-h-[200px] (Very compact)
        - Tablet: min-h-[340px] (Medium)
        - Desktop: min-h-[550px] (Large)
      */}
      <div className={`relative overflow-hidden bg-[#f5f8f3] rounded-3xl transition-colors duration-700 ease-in-out   min-h-[200px] md:min-h-[340px] lg:h-[500px]`}>
        
        {/* Layout Grid: Block on Mobile (with absolute image), Grid on Tablet+ */}
        <div className="h-full lg:grid lg:grid-cols-2">
          
          {/* Text Content */}
          {/* Mobile: Padded relative container, max-width limited to prevent overlap with background image */}
          <div className="relative z-10 h-full flex flex-col  items-start p-6 md:p-10 lg:px-9 lg:py-0 max-w-[60%] md:max-w-none">
            <div key={slide.id} className="animate-fade-in-up max-w-[65%] md:max-w-[60%] lg:max-w-full">
              <span className={`inline-block py-1 px-3 rounded-2xl text-[10px] md:text-xs font-bold uppercase tracking-wider mb-2 md:mb-4 lg:mt-10 lg:px-5 lg:py-2 bg-white/100 backdrop-blur-sm ${slide.accentColor}`}>
                {slide.tag}
              </span>
              
              <h1 className="font-sora text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.1] mb-2 md:mb-4">
                {slide.title}
              </h1>
              
              {/* Description hidden on very small mobile screens for compactness, shown on tablet+ */}
              <div className="hidden sm:block text-xs md:text-base lg:flex flex-row lg:text-lg text-gray-600 mb-3 md:mb-8 max-w-md leading-relaxed">
                <p className="text-5xl">01 <ArrowRight size={100} strokeWidth={1}/></p>           
                <p>clear thimgff</p>
              </div>
              
              <div className="flex flex-wrap gap-3 md:gap-4 mt-1 md:mt-0">
                <button className={`px-4 py-2 md:px-8 md:py-4 rounded-full text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition transform flex items-center gap-2 ${slide.buttonColor} text-[10px] md:text-base`}>
                  {slide.buttonText}
                  <ArrowRight className="h-3 w-3 md:h-5 md:w-5" />
                </button>
                {/* View Collection button removed as requested */}
              </div>
            </div>
          </div>

          {/* Image Content */}
          {/* Mobile: Absolute positioned to the right (Background-like). Tablet+: Static grid item */}
          <div className="absolute inset-0 z-0 lg:static md:w-auto md:h-auto md:flex items-center justify-center p-0 md:p-0 pointer-events-none md:pointer-events-auto">
            
            {/* Background Blob - Desktop Only */}
            <div className={`hidden md:block absolute top-1/2 left-1/2 overflow-hidden -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-96 md:h-96 bg-white opacity-40 rounded-full blur-3xl mix-blend-overlay animate-pulse`} />
            
            <img
              key={`img-${slide.id}`}
              src={r}
              alt={slide.title}
              /* Mobile: object-contain aligned right-bottom to look like a background */
              className="w-full h-full object-cover  lg:object-cover lg:object-bottom-right lg:w-[50%] drop-shadow-2xl animate-fade-in-right transform md:hover:scale-105 transition duration-700 opacity-80 lg:opacity-100"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x600/transparent/3730A3?text=Product"; }}
            />
          </div>
        </div>

        {/* Navigation Dots - Repositioned for mobile */}
        <div className="absolute bottom-3 left-6 md:bottom-10 md:left-16 flex items-center gap-4 z-20">
          <div className="flex gap-2">
            {SLIDES_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentSlide 
                    ? `w-4 h-1.5 md:w-8 md:h-2 ${slide.buttonColor}` 
                    : 'w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Arrow Controls - Desktop Only */}
        <div className="hidden md:flex absolute bottom-8 right-8 gap-2 z-20">
          <button onClick={prevSlide} className="p-3 rounded-full bg-white/40 hover:bg-white/80 backdrop-blur-sm transition text-gray-800">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button onClick={nextSlide} className="p-3 rounded-full bg-white/40 hover:bg-white/80 backdrop-blur-sm transition text-gray-800">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

      </div>

      <style jsx="true">{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-right {
          0% { opacity: 0; transform: translateX(10px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in-right { animation: fade-in-right 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </section>
  );
};


  

    
