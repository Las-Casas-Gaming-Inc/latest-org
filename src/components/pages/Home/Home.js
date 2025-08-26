import React from 'react';
import '../../../App.css'
import HeroSection from '../../HeroSection';
import Footer from '../Footer/Footer';
import Team from '../Team/Team';
import Card from '../Cards/Cards';


function Home() {
  return (
    <>
      <HeroSection />
      <Team />
      <Card />
      <Footer />
    </>
  );
}

export default Home;
