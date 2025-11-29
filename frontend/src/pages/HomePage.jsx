import { DesktopNavbar,MobileHeader,MobileNavbar } from "../components/Navbar.jsx";
import { HeroSection } from "../components/Hero.jsx";
import { StoreCategories } from "../components/Catagories.jsx";
import ProductSection from "../components/ProductCard.jsx";
import { Footer } from "../components/Footer.jsx";

const PRODUCTS_DATA = {
  trending: [
    { id: 101, name: "Apple AirPods 4", tag: "Black Week -11%", price: 79.95, oldPrice: 89.95, rating: 4.8, stores: 9, image: "https://placehold.co/400x500/F3F4F6/9CA3AF?text=AirPods", installment: "Or 3 payments of £26.65*", unique: true },
    { id: 102, name: "Samsung QE55QN90F", tag: "Black Week -10%", price: 899.00, oldPrice: 999.00, rating: 4.5, stores: 9, image: "https://placehold.co/400x500/F3F4F6/9CA3AF?text=TV+QLED", installment: "Or 3 payments of £299.66*" },
    { id: 103, name: "DJI Mini 5 Pro Fly Combo RC2", tag: "Black Week -24%", price: 699.00, oldPrice: 921.20, rating: 4.9, stores: 9, image: "https://placehold.co/400x500/F3F4F6/9CA3AF?text=Drone+Mini", installment: "Or 3 payments of £233.00*" },
    { id: 104, name: "Sony WH-1000XM6", tag: "Hot Deal -15%", price: 299.00, oldPrice: 359.00, rating: 4.7, stores: 12, image: "https://placehold.co/400x500/F3F4F6/9CA3AF?text=Headphones", installment: "Or 6 payments of £49.83*" },
  ],
  sponsored: [
    { id: 201, name: "Luxury Perfume Set", tag: "New Sponsor", price: 149.00, oldPrice: 179.00, rating: 4.3, stores: 5, image: "https://placehold.co/400x500/F3F4F6/9CA3AF?text=Perfume", installment: "Pay in 4 installments" },
    { id: 202, name: "Gourmet Coffee Machine", tag: "Limited Stock", price: 349.99, oldPrice: 400.00, rating: 4.6, stores: 7, image: "https://placehold.co/400x500/F3F4F6/9CA3AF?text=Coffee+Maker", installment: "Or 10 payments of £34.99*" },
  ],
  popular: [
    { id: 301, name: "Best-Selling Yoga Mat", tag: "Top Rated", price: 25.50, oldPrice: 30.00, rating: 4.9, stores: 15, image: "https://placehold.co/400x500/F3F4F6/9CA3AF?text=Yoga+Mat", installment: "Buy now, pay later" },
    { id: 302, name: "Ergonomic Desk Chair", tag: "Popular Choice", price: 199.99, oldPrice: 249.99, rating: 4.4, stores: 10, image: "https://placehold.co/400x500/F3F4F6/9CA3AF?text=Desk+Chair", installment: "Or 3 payments of £66.66*" },
    { id: 303, name: "The Next Great Novel", tag: "Bestseller", price: 15.00, oldPrice: 18.00, rating: 4.8, stores: 20, image: "https://placehold.co/400x500/F3F4F6/9CA3AF?text=Book+Cover", installment: "Or 2 payments of £7.50*" },
  ]
};
const App = () => {
  return (
    // Set font to Inter (using a common utility class or global style)
    <div className="min-h-screen bg-[#e5e8e8] font-sans">
      
      {/* 1. Desktop Navbar (Visible on tablet/desktop: md:flex) */}
      <DesktopNavbar />
      
      {/* 2. Mobile Header (Visible only on mobile: md:hidden) */}
      <MobileHeader />
      
      <main className="max-w-350 mx-auto pb-12">

        <HeroSection />

        <StoreCategories />
       
          
        <ProductSection 
            title="Trending Now"
            subtitle="Handpicked daily just for you"
            products={PRODUCTS_DATA.trending}
        />

        {/* 2. SPONSORED SECTION */}
        <ProductSection 
            title="Sponsored"
            subtitle="Products recommended by our partners"
            products={PRODUCTS_DATA.sponsored}
        />
        
        {/* 3. POPULAR SECTION */}
        <ProductSection 
            title="Popular Products"
            subtitle="Our community's favorite items"
            products={PRODUCTS_DATA.popular}
        />
        <Footer />
      </main>

      {/* 3. Mobile Navbar (Visible only on mobile: md:hidden) */}
      <MobileNavbar />
    </div>
  );
};

export default App;


