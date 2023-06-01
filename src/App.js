
import './App.css';

import About from './components/About';
// import Script from './components/Script'
import Client from './components/Client';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Info from './components/Info';
import Nav from './components/Nav';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import SlideHello from './components/SlideHello';
import WhatIDo from './components/WhatIDo'; 
 
function App() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/assets/owl.carousel.min.css" />
      <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Poppins:400,700|Roboto:400,700&display=swap" rel="stylesheet" />
      <link href="css/style.css" rel="stylesheet" />
      <link href="css/responsive.css" rel="stylesheet" />

      <div className="hero_area">
        <Header />
        <SlideHello />
      </div>

      <Nav />
      <About />
      <WhatIDo />
      <Portfolio />
      <Skills />
      <Client />
      <Contact />
      <Info />
      <Footer />
      {/* <Script /> */}
    </>
  ); 
}

export default App;
