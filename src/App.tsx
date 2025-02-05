import React, { useEffect, useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollProgress from './components/ScrollProgress';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import Profile from './pages/Profile';
import Home from './pages/Home';
import NewIn from './pages/NewIn';
import Bestsellers from './pages/Bestsellers';
import Trending from './pages/Trending';
import Sale from './pages/Sale';
import AllProducts from './pages/AllProducts';
import Summer from './pages/collections/Summer';
import Winter from './pages/collections/Winter';
import Limited from './pages/collections/Limited';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add smooth scroll class to html element
    document.documentElement.classList.add('smooth-scroll');
    
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <ScrollProgress />
        <Suspense fallback={<LoadingSpinner />}>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<div className="page-content"><Cart /></div>} />
              <Route path="/checkout" element={<div className="page-content"><Checkout /></div>} />
              <Route path="/wishlist" element={<div className="page-content"><Wishlist /></div>} />
              <Route path="/profile" element={<div className="page-content"><Profile /></div>} />
              <Route path="/new-in" element={<div className="page-content"><NewIn /></div>} />
              <Route path="/bestsellers" element={<div className="page-content"><Bestsellers /></div>} />
              <Route path="/trending" element={<div className="page-content"><Trending /></div>} />
              <Route path="/sale" element={<div className="page-content"><Sale /></div>} />
              <Route path="/all-products" element={<div className="page-content"><AllProducts /></div>} />
              <Route path="/collections/summer" element={<div className="page-content"><Summer /></div>} />
              <Route path="/collections/winter" element={<div className="page-content"><Winter /></div>} />
              <Route path="/collections/limited" element={<div className="page-content"><Limited /></div>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;