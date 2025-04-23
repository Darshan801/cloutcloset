import React from 'react';
import Hero from '../components/Hero';
import LatestCollection from '../components/Latestcollection';
import BestSeller from '../components/BestSeller';
import Policy from '../components/Policy';
import NewsLatterBox from '../components/NewsLatterBox';

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <Policy/>
      <NewsLatterBox/>
    </div>
  );
};

export default Home;
