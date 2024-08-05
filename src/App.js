import './App.css';
import Hero from './components/Hero';
// import WhatWeDo from './components/WhatWeDo';
import Blog from './components/Blog';
import Faq from './components/Faq';
import Services from './components/Services';
// import Choose from './components/Choose';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Hero />
      {/* <WhatWeDo /> */}
      {/* <Choose /> */}
      <Blog />
      <Faq />
      <Services />
      <Footer />
    </>
  );
}

export default App;
