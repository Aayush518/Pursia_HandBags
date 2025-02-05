import React from 'react';
import Hero from '../components/Hero';
import FeaturedProduct from '../components/FeaturedProduct';
import PopularProducts from '../components/PopularProducts';
import VideoSection from '../components/VideoSection';
import ModelSection from '../components/ModelSection';
import DesignedSection from '../components/DesignedSection';
import Brands from '../components/Brands';
import Social from '../components/Social';
import NewArrivals from '../components/NewArrivals';
import FixedNav from '../components/FixedNav';

const Home = () => {
  return (
    <main className="max-w-[1440px] mx-auto">
      <Hero />
      <FeaturedProduct />
      <PopularProducts />
      <VideoSection />
      <div id="models">
        <ModelSection />
      </div>
      <NewArrivals />
      <DesignedSection />
      <Brands />
      <Social />
      <FixedNav />
    </main>
  );
};

export default Home;