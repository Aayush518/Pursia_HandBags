import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, ChevronDown, LogIn } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(2);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { 
      name: 'Shop',
      subItems: [
        { name: 'New In', path: '/new-in' },
        { name: 'Bestsellers', path: '/bestsellers' },
        { name: 'Trending', path: '/trending' },
        { name: 'Sale', path: '/sale' },
        { name: 'All Products', path: '/all-products' }
      ]
    },
    { 
      name: 'Collections',
      subItems: [
        { name: 'Summer 2024', path: '/collections/summer' },
        { name: 'Winter Essentials', path: '/collections/winter' },
        { name: 'Limited Edition', path: '/collections/limited' }
      ]
    },
    { 
      name: 'New Arrivals',
      path: '/new-in'
    },
    { 
      name: 'Sale',
      path: '/sale'
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-soft' : 'bg-transparent'
    }`}>
      <div className="flex items-center justify-between px-4 sm:px-8 lg:px-16 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300 cursor-pointer group">
            <div className="w-6 h-[2px] bg-white group-hover:w-4 transition-all duration-300"></div>
          </div>
          <Link to="/" className="text-2xl tracking-wide font-light hover:text-primary transition-colors duration-300" style={{ fontFamily: 'Helvetica Neue' }}>
            Pursia
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigationItems.map((item) => (
            <div key={item.name} className="group relative">
              {item.subItems ? (
                <button className="flex items-center gap-1 hover:text-primary transition-colors">
                  {item.name}
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>
              ) : (
                <Link 
                  to={item.path || '/'} 
                  className={`hover:text-primary transition-colors ${
                    location.pathname === item.path ? 'text-primary' : ''
                  }`}
                >
                  {item.name}
                </Link>
              )}
              
              {item.subItems && (
                <div className="absolute top-full left-0 w-48 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  <div className="bg-white rounded-xl shadow-medium p-4 space-y-2">
                    {item.subItems.map((subItem) => (
                      <Link 
                        key={subItem.name} 
                        to={subItem.path}
                        className={`block px-3 py-2 rounded-lg hover:bg-primary-50 transition-colors ${
                          location.pathname === subItem.path 
                            ? 'text-primary bg-primary-50' 
                            : 'text-gray-600 hover:text-primary'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="relative group">
            <Search className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors cursor-pointer" />
            <div className="absolute top-full right-0 w-72 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
              <div className="bg-white rounded-xl shadow-medium p-4">
                <input 
                  type="search" 
                  placeholder="Search products..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
            </div>
          </div>
          <Link to="/cart" className="relative group">
            <ShoppingCart className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full animate-scale-in">
              {cartCount}
            </span>
          </Link>
          <div className="relative group">
            <User className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors cursor-pointer" />
            <div className="absolute top-full right-0 w-48 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
              <div className="bg-white rounded-xl shadow-medium p-4 space-y-2">
                <Link to="/profile" className="block px-3 py-2 rounded-lg hover:bg-primary-50 text-gray-600 hover:text-primary transition-colors">
                  Profile
                </Link>
                <Link to="/wishlist" className="block px-3 py-2 rounded-lg hover:bg-primary-50 text-gray-600 hover:text-primary transition-colors">
                  Wishlist
                </Link>
                <Link to="/profile" className="block px-3 py-2 rounded-lg hover:bg-primary-50 text-gray-600 hover:text-primary transition-colors">
                  Orders
                </Link>
                <Link to="/profile" className="block px-3 py-2 rounded-lg hover:bg-primary-50 text-gray-600 hover:text-primary transition-colors">
                  Settings
                </Link>
                <Link to="/login" className="block px-3 py-2 rounded-lg hover:bg-primary-50 text-gray-600 hover:text-primary transition-colors">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden z-50 w-10 h-10 flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-primary transition-all duration-300" />
          ) : (
            <Menu className="w-6 h-6 hover:text-primary transition-all duration-300" />
          )}
        </button>

        {/* Mobile Navigation */}
        <div className={`fixed inset-0 bg-white/95 backdrop-blur-lg transform transition-all duration-500 ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } lg:hidden z-40`}>
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navigationItems.map((item, index) => (
              <Link 
                key={item.name} 
                to={item.path || '/'}
                className="text-2xl font-light hover:text-primary transition-colors"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: isMenuOpen ? 'fadeIn 0.6s ease-out forwards' : 'none',
                  opacity: 0
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-6 mt-8">
              <Search className="w-6 h-6 hover:text-primary transition-colors" />
              <Link to="/cart" className="relative" onClick={() => setIsMenuOpen(false)}>
                <ShoppingCart className="w-6 h-6 hover:text-primary transition-colors" />
                <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              </Link>
              <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
                <User className="w-6 h-6 hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;