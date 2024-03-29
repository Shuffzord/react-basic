import React from 'react';
import { useTranslation } from 'react-i18next'
import PolandLogo from '../images/poland.svg'
import USALogo from '../images/united-states.svg'
import { NavHashLink } from 'react-router-hash-link';

const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  const logo = require('../images/logo.png')
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div className="container-fluid">
        <a href="/"><img className="bottom" src={logo} style={{ height: '55px' }} alt="BlueAxes" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="oi oi-menu"></span> Menu</button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><NavHashLink className="nav-link lato-bold" smooth activeClassName="active" to="/" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>Start</NavHashLink></li>
            <li className="nav-item"><NavHashLink className="nav-link lato-bold" smooth activeClassName="active" to="/#About">{t('navigation.aboutUs')}</NavHashLink></li>
            <li className="nav-item"><NavHashLink className="nav-link lato-bold" smooth activeClassName="active" to="/#Offer">{t('navigation.offer')}</NavHashLink></li>
            <li className="nav-item"><NavHashLink className="nav-link lato-bold" smooth activeClassName="active" to="/#Mission">{t('navigation.mission')}</NavHashLink></li>
            <li className="nav-item"><NavHashLink className="nav-link lato-bold" smooth activeClassName="active" to="/#Projects">{t('navigation.projects')}</NavHashLink></li>
            <li className="nav-item"><NavHashLink className="nav-link lato-bold" smooth activeClassName="active" to="/#Clients">{t('navigation.clients')}</NavHashLink></li>
            <li className="nav-item"><NavHashLink className="nav-link lato-bold" smooth activeClassName="active" to="/#Team">{t('navigation.team')}</NavHashLink></li>
            <li className="nav-item"><NavHashLink className="nav-link lato-bold" smooth activeClassName="active" to="/#Contact">{t('navigation.contact')}</NavHashLink></li>
            <li className="nav-item"><NavHashLink className="nav-link lato-bold" smooth activeClassName="active" to="/Career">{t('navigation.career')}</NavHashLink></li>
          </ul>
          <img src={PolandLogo} style={{ width: '25px', marginLeft: '5px', cursor: 'pointer' }} alt="Polski" onClick={() => changeLanguage('pl')} />
          <img src={USALogo} style={{ width: '25px', marginLeft: '5px', cursor: 'pointer' }} alt="English" onClick={() => changeLanguage('en')} />

        </div>
      </div>
    </nav>
  );
}

export default Header;
