import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n/config'
// import { ParallaxProvider } from 'react-scroll-parallax';
import './jqueryloader'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));


