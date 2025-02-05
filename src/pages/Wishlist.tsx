import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, Trash2, Share2, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const wishlistItems = [
  {
    id: 1,
    name: 'Trendy Monogram Mini Purse',
    price: 225.00,
    oldPrice: 275.00,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80',
    rating: 4.8,
    reviews: 128,
    inStock: true,
    discount: '18% OFF',
    category: 'Handbags'
  },
  {
    id: 2,
    name: 'Vintage Leather Handbag',
    price: 345.00,
    oldPrice: 399.00,
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80',
    rating: 4.9,
    reviews: 89,
    inStock: true,
    discount: '14% OFF',
    category: 'Handbags'
  },
  {
    id: 3,
    name: 'Classic Red Big Bag',
    price: 399.00,
    oldPrice: 459.00,
    image: 'https://images.unsplash.com/photo-1614179689702-355944cd0918?auto=format&fit=crop&q=80',
    rating: 4.7,
    reviews: 156,
    inStock: false,
    category: 'Handbags'
  },
  {
    id: 4,
    name: 'Modern Minimalist Tote',
    price: 299.00,
    oldPrice: 349.00,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80',
    rating: 4.6,
    reviews: 92,
    inStock: true,
    discount: '15% OFF',
    category: 'Totes'
  }
];

const Wishlist = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [items, setItems] = useState(wishlistItems);

  const removeFromWishlist = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-light mb-2" style={{ fontFamily: 'Helvetica Neue' }}>My Wishlist</h1>
          <p className="text-gray-600">Save your favorite items for later</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <Heart className="w-5 h-5 text-primary" />
            <span className="font-medium">{items.length} items</span>
          </div>
          <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-primary transition-colors">
            Move All to Cart
          </button>
        </div>
      </div>

      {items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white rounded-2xl p-4 shadow-soft hover:shadow-medium transition-all duration-500"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative mb-4">
                <div className="aspect-square rounded-xl overflow-hidden bg-gray-50">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
                    hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute inset-0 flex items-center justify-center gap-3">
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center transform -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-primary hover:text-white shadow-lg">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-primary hover:text-white shadow-lg">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
                {item.discount && (
                  <div className="absolute top-2 left-2 px-3 py-1 bg-red-500 text-white text-sm rounded-full">
                    {item.discount}
                  </div>
                )}
                <button 
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 transition-colors group"
                >
                  <Trash2 className="w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors" />
                </button>
              </div>

              <div className="space-y-2">
                <div className="text-sm text-gray-500">{item.category}</div>
                <h3 className="font-medium leading-snug group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                
                <div className="flex items-center gap-2">
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm font-medium text-black">{item.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({item.reviews})</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold">${item.price.toFixed(2)}</span>
                  {item.oldPrice && (
                    <span className="text-sm text-gray-500 line-through">${item.oldPrice.toFixed(2)}</span>
                  )}
                </div>

                <div className="pt-4">
                  <button 
                    className={`w-full rounded-xl py-3 flex items-center justify-center gap-2 transition-colors ${
                      item.inStock 
                        ? 'bg-primary text-white hover:bg-primary-600' 
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={!item.inStock}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    {item.inStock ? 'Move to Cart' : 'Out of Stock'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl shadow-soft">
          <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-medium mb-2">Your wishlist is empty</h3>
          <p className="text-gray-600 mb-8">Browse our collection and add items you love to your wishlist.</p>
          <Link 
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-600 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      )}

      {items.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-light mb-6">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Add recommended products here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;