import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import PreLoader from './components/PreLoader';
import Choose from './components/Choose'
import Customers from './components/Customers'
import ItWork from './components/ItWork'
import InTouch from './components/InTouch'
import Blog from './components/Blog'
import Faq from './components/Faq'
import Services from './components/Services'
import Footer from './components/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';

function App() {
  return (
    <div className=' overflow-hidden max-w-[1920px] mx-auto'>
      <Hero />
      <WhatWeDo />
      <PreLoader />
      <Choose />
      <Customers />
      <ItWork />
      <InTouch />
      <Blog />
      <Faq />
      <Services />
      <Footer />
    </div>
  );
}

export default App; 
