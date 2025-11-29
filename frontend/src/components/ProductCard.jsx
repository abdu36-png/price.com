import React from "react";
import { Heart,Star } from "lucide-react";
const ProductCard = ({ product }) => {
    // Unique styling for "Trending Now" item to demonstrate the feature
    const isUnique = product.unique;

    return (
        <div 
            key={product.id} 
            className="group bg-white rounded-2xl p-2 pb-3  shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border-gray-100 transform hover:-translate-y-0.5"
        >
            {/* Image Container with Tag and Heart */}
            <div className="w-full h-40  lg:aspect-3/4 bg-gray-100 rounded-xl mb-3 relative overflow-hidden">
                {/* Image */}
                <img 
                    src={product.image} 
                    className="w-full h-full object-cover" 
                    alt={product.name}
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x500/F3F4F6/9CA3AF?text=Product"; }}
                />

                {/* Top Left Tag/Badge */}
                <div className="absolute top-3 left-3 bg-black/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm">
                    {product.tag}
                </div>

                {/* Top Right Heart Icon */}
                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md text-gray-500 hover:text-red-500 transition-colors">
                    <Heart className="h-4 w-4" />
                </button>
            </div>

            {/* Product Details */}
            <div className='px-1'>
                <h3 className="font-semibold text-sm md:text-base text-gray-900 line-clamp-2">{product.name}</h3>

                {/* Rating and Store Count */}
                <div className="flex items-center justify-between mt-1">
                    <div className='flex items-center'>
                        <Star className="h-3 w-3 text-black fill-yellow-400 mr-1" />
                        <span className="text-xs font-medium text-gray-800 mr-2">{product.rating.toFixed(1)}</span>
                        
                        {/* Store Count Badge */}
                        <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                            {product.stores}+ stores
                        </span>
                    </div>
                    {/* Unique Feature Badge for Trending */}
                    {isUnique && (
                         <span className="text-xs font-bold text-red-600 border border-red-300 px-2 py-0.5 rounded-full hidden md:block">
                            🔥 Featured
                        </span>
                    )}
                </div>

                {/* Pricing and Installments */}
                <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-lg font-extrabold text-gray-900">£{product.price.toFixed(2)}</span>
                    <span className="text-xs text-gray-400 line-through font-medium">£{product.oldPrice.toFixed(2)}</span>
                </div>

                {/* Installment Text */}
                <p className="text-[10px] text-indigo-600 font-medium mt-1">{product.installment}</p>
            </div>
        </div>
    );
};


const ProductSection = ({ title, subtitle, products }) => (
    <div className="px-4 md:px-8 mt-12">
        <div className="flex justify-between items-end mb-6">
            <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
                <p className="text-gray-500 mt-1">{subtitle}</p>
            </div>
            <a href="#" className="hidden md:block text-indigo-600 font-semibold hover:text-indigo-700">View All</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </div>
);

export default ProductSection;
