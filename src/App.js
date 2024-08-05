import './App.css';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PreLoader from './components/PreLoader';

function App() {
  return (
    <div className=' overflow-hidden max-w-[1920px] mx-auto'>
      <Hero />
      <WhatWeDo />
      <PreLoader />
    </div>
  );
}

export default App;
