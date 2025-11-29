import React,{useRef,useEffect,useState} from "react";
import {
  Menu, Search, MapPin, User, Wallet, ShoppingCart, Tag, ChevronLeft, ChevronRight, Filter, ChevronDown, Bell, MessageSquare, Heart, ArrowRight, Eye, X,
  
  Monitor, Shirt, Home, ShoppingBasket, Sparkles, Dumbbell, Car, BookOpen, Gift, Flower, Gem, Activity 
} from 'lucide-react';

const STORE_DATA = [
  { name: "Electronics", icon: Monitor, color: "text-black" },
  { name: "Apparel", icon: Shirt, color: "text-black" },
  { name: "Home Goods", icon: Home, color: "text-black" },
  { name: "Groceries", icon: ShoppingBasket, color: "text-black" },
  { name: "Beauty", icon: Sparkles, color: "text-black" },
  { name: "Sports", icon: Dumbbell, color: "text-black" },
  { name: "Automotive", icon: Car, color: "text-black" },
  { name: "Books", icon: BookOpen, color: "text-black" },
  { name: "Kids & Toys", icon: Gift, color: "text-black" },
  { name: "Gardening", icon: Flower, color: "text-black" },
  { name: "Jewelry", icon: Gem, color: "text-black" },
  { name: "Fitness", icon: Activity, color: "text-black" },
];
const VISIBLE_COUNT = 5; 

export const StoreCategories = () => {
  const scrollContainerRef = React.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Function to check scroll boundaries and update button state
  const checkScrollBoundary = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      
      // Check if we are scrolled past the start (or close to it)
      setCanScrollLeft(scrollLeft > 10); // 10px tolerance

      // Check if the scroll position plus visible width is less than total scrollable width
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10); // 10px tolerance
    }
  };

  useEffect(() => {
    // Initial check and set up listener for user scrolling
    checkScrollBoundary();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollBoundary);
      // Clean up the listener when component unmounts
      return () => container.removeEventListener('scroll', checkScrollBoundary);
    }
  }, []);

  // Function to smoothly scroll the container by one viewport width
  const scrollHorizontally = (direction) => {
    if (scrollContainerRef.current) {
      // Scroll by the visible width of the container
      const offset = scrollContainerRef.current.clientWidth;
      const scrollAmount = direction === 'next' ? offset : -offset;
      
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
      
      // Update boundaries immediately (though 'scroll' event will fire too)
      setTimeout(checkScrollBoundary, 500); // Give time for smooth scroll to finish
    }
  };

  return (
    <section id="categories-section" className="mt-6 md:mt-5 px-4 md:px-8">
      {/* Header and Controls */}
      

      {/* Categories Horizontal Scroll Layout (Always horizontal) */}
      <div 
        ref={scrollContainerRef}
        // Removed flex-wrap and forced flex-nowrap with overflow-x-auto
        className="flex overflow-x-auto overflow-y-hidden flex-nowrap gap-1 py-2 md:gap-4 lg:gap-0 scrollbar-hide"
        style={{ scrollbarWidth: 'none' }} // Hide scrollbar in Firefox
      >
        {STORE_DATA.map((category, index) => {
          // Dynamically get the Lucide Icon component
          const IconComponent = category.icon;

          return (
            <div 
              key={index} 
              // Changed base width to w-16 (very small) but keeps md:w-28 (larger for desktop)
              className="shrink-0 w-16 md:w-28 flex flex-col items-center cursor-pointer group"
            >
              {/* Circular Logo Background (Now holds the Lucide icon) */}
              {/* Changed base size to w-12 h-12 and padding to p-1 */}
              <div className="w-12 h-12 md:w-12 md:h-12 bg-gray-200 rounded-full flex items-center justify-center p-1 shadow-md group-hover:shadow-lg transition-all duration-300 hover:scale-105 group-hover:bg-indigo-50/50">
                {/* Changed base icon size to w-6 h-6 */}
                <IconComponent className={`w-6 h-6 md:w-8 md:h-8 ${category.color}`} strokeWidth={1.3} />
              </div>
              {/* Category Name */}
              {/* Changed base font size to text-xs (very small) */}
              <span className="mt-2 text-xs md:text-sm font-semibold text-gray-700 group-hover:text-indigo-600 transition-colors truncate w-full text-center">
                {category.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Style for scrollbar hiding in WebKit */}
      <style jsx="true">{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};