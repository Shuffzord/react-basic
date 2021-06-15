import React from 'react';
import Counters from './Components/Counters';
import Header from './Components/Header';
import AboutUs from './Components/AboutUs'
import './scss/style.scss'
import './css/animate.css'
import './css/flaticon.css'
import Mission from './Components/Mission';
import Projects from './Components/Projects';
import Clients from './Components/Clients';
import Offer from './Components/Offer';
import Team from './Components/Team';
import Contact from './Components/Contact';
import { Route } from 'react-router-dom'
import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css'

function App() {
  return (
    <div>
      <Header />
      <Route path="/" >
        <AboutUs />        
        <Offer />
        <Counters />
        <Mission />
        <Projects />
        <Clients />
        <Team />
        <Contact />
      </Route>
    </div>
  );
}

export default App;
