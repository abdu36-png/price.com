import React, { useState } from 'react';
import { Home, Wallet, ShoppingCart, User, Tag, Search, Heart, MapPin, Menu, SlidersHorizontal } from 'lucide-react';

// Data for the navigation items
const navItems = [
  { name: 'Home', icon: Home, path: '/home' },
  { name: 'Wallet', icon: Wallet, path: '/wallet' },
  { name: 'Cart', icon: ShoppingCart, path: '/cart' },
  { name: 'Profile', icon: User, path: '/profile' },
  { name: 'Deals', icon: Tag, path: '/deals' },
];

// --- Desktop / Tablet Navbar Component ---
export function DesktopNavbar() {
  return (
    // The outer container handles the margin (top/sides) and only shows on desktop
    <header className="hidden md:flex p-6 pt-5 z-50">
  <nav className="flex items-center justify-between w-full max-w-344 mx-auto bg-slate-100 rounded-4xl p-2">

    {/* LEFT SIDE: Logo + Search */}
    <div className="flex items-center space-x-6">
      
      {/* Logo */}
      <div className="flex items-center bg-[#e4ebed] p-1 rounded-3xl px-4">
        <span className="text-2xl font-black text-neutral-900 tracking-tight">
          price.
        </span>
      </div>

      {/* Smaller Search Bar */}
      <div className="w-64">
        <div className="relative flex items-center bg-white rounded-full p-1 border-0 border-gray-200 shadow-inner">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none px-4"
          />
          <button className="p-2 bg-neutral-900 text-white rounded-full transition-colors hover:bg-gray-700">
            <Search size={15} />
          </button>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE: Buttons + Profile */}
    <div className="flex items-center space-x-4">
      <button className="p-2.5 text-gray-600 rounded-full bg-white transition-colors border border-gray-200">
        <Heart size={20} />
      </button>

      <button className="p-2.5 text-gray-600 rounded-full bg-white transition-colors border border-gray-200">
        <ShoppingCart size={20} />
      </button>
      
      <div className="flex items-center space-x-2 bg-white rounded-full p-1 border border-gray-200 cursor-pointer hover:shadow-md transition-shadow">
        <span className="text-sm font-medium text-gray-700 px-1">
          Ryman Alex
        </span>
        <div className="w-8 h-8 bg-pink-300 rounded-full flex items-center justify-center text-white font-bold text-xs">
          RA
        </div>
      </div>
    </div>

  </nav>
</header>

  );
};


// --- Mobile Navbar Component (Bottom) ---
export  function MobileNavbar() {
  // State to track the currently active item
  const [activeItem, setActiveItem] = useState('Home');
  
  // Custom icons used in the mobile view from the first image
  const mobileNavItems = [
    { name: 'Home', icon: Home, path: '/home' },
    { name: 'Cart', icon: ShoppingCart, path: '/cart' },
    { name: 'Deals', icon: Tag, path: '/deals' },
    { name: 'Profile', icon: User, path: '/profile' },
    { name: 'Menu', icon: Menu, path: '/menu' },
  ];

  return (
    // Fixed container at the bottom, hidden on md (tablet) screens and up
    <nav className="fixed bottom-0 left-0 right-0 z-50 p-4 backdrop-blur-sm bg-white/90 shadow-2xl shadow-gray-400/50 md:hidden">
      
      {/* The inner navigation bar, centered and responsive width */}
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto bg-gray-100 rounded-3xl p-1">
        
        {mobileNavItems.map((item) => {
          const isActive = activeItem === item.name;
          const IconComponent = item.icon;

          return (
            <button
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`
                flex items-center justify-center h-14 transition-all duration-300 ease-in-out
                ${
                  isActive 
                    ? 'grow px-3 bg-neutral-900 text-white rounded-2xl shadow-lg' 
                    : 'flex-1 text-gray-500 hover:text-neutral-900'
                }
                
                ${
                  // Ensure inactive icons are visually clean
                  !isActive && 'w-14'
                }
              `}
              aria-label={item.name}
            >
              <IconComponent size={24} strokeWidth={isActive ? 2.5 : 2} />
              
              {/* Only show text for the active item */}
              {isActive && (
                <span className="ml-2 text-sm font-semibold whitespace-nowrap">
                  {item.name}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

// --- Mobile Header (Top) Component ---
export function MobileHeader() {
  return (
    <header className="md:hidden relative top-0 z-40 p-4 bg-white shadow-sm border-b border-gray-100">
      <div className="flex justify-between items-center mb-4">
        {/* Menu and Location */}
        <button className="p-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
          <Menu size={24} />
        </button>
        <div className="flex items-center text-sm font-medium text-gray-600">
          <MapPin size={18} className="mr-1 text-gray-500" />
          <span>Paris</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="sticky flex items-center space-x-3">
        <div className="relative grow">
          <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900/50"
          />
        </div>
        <button className="p-3 text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
          <SlidersHorizontal size={24} />
        </button>
      </div>
    </header>
  );
};
