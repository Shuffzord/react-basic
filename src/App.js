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
import ScriptTag from 'react-script-tag';

function App() {

  return (
    <div>
      <ScriptTag type="text/javascript" src="./js/owl.carousel.min" />
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
