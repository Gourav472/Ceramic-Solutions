import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Hero from './components/Hero';
// import WhatWeDo from './components/WhatWeDo';
import Choose from './components/Choose';
import Customers from './components/Customers';
import ItWork from './components/ItWork';
import InTouch from './components/InTouch';
function App() {
  return (
    <>
      {/* <Hero />
      <WhatWeDo /> */}
      <Choose/>
      <Customers/>
      <ItWork/>
      <InTouch/>
    </>
  );
}

export default App; 
