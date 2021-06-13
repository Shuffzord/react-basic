import React from 'react';
import Counters from './Components/Counters';
import Header from './Components/Header';
import AboutUs from './Pages/AboutUs'
import './scss/style.scss'

function App() {
  return (
    <div>
      <Header />
      <AboutUs />
      <Counters/>
    </div>
  );
}

export default App;
