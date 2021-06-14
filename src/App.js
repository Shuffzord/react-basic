import React from 'react';
import Counters from './Components/Counters';
import Header from './Components/Header';
import AboutUs from './Components/AboutUs'
import './scss/style.scss'
import './css/animate.css'
import Mission from './Components/Mission';
import Projects from './Components/Projects';
import Clients from './Components/Clients';
import Offer from './Components/Offer';
import Team from './Components/Team';
import Contact from './Components/Contact';

import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css'

function App() {
  return (
    <div>
      <Header />
      <AboutUs />
      <Counters />
      <Mission />
      <Projects />
      <Clients />
      <Contact />
      <Offer />
      <Team />
    </div>
  );
}

export default App;
