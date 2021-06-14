import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n/config'
import { ParallaxProvider } from 'react-scroll-parallax';
import './jqueryloader'
ReactDOM.render(<ParallaxProvider><App /></ParallaxProvider>, document.getElementById('root'));


