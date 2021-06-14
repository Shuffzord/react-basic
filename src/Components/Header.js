import React from 'react';
import { useTranslation } from 'react-i18next'
import PolandLogo from '../images/poland.svg'
import USALogo from '../images/united-states.svg'

const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="Home">BlueAxes</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="oi oi-menu"></span> Menu</button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active"><a href="#Home" className="nav-link">Blue Axes</a></li>
            <li className="nav-item"><a href="#About" className="nav-link">{t('navigation.aboutUs')}</a></li>
            <li className="nav-item"><a href="#Mission" className="nav-link">{t('navigation.mission')}</a></li>
            <li className="nav-item"><a href="#Projects" className="nav-link">{t('navigation.projects')}</a></li>
            <li className="nav-item"><a href="#Clients" className="nav-link">{t('navigation.clients')}</a></li>
            <li className="nav-item"><a href="#Contact" className="nav-link">{t('navigation.contact')}</a></li>
            <li className="nav-item"><a href="#Offer" className="nav-link">{t('navigation.offer')}</a></li>
            <li className="nav-item"><a href="#Team" className="nav-link">{t('navigation.team')}</a></li>
          </ul>
          <img src={PolandLogo} style={{ width: '25px', marginLeft: '5px', cursor: 'pointer' }} alt="Polski" onClick={() => changeLanguage('pl')} />
          <img src={USALogo} style={{ width: '25px', marginLeft: '5px', cursor: 'pointer' }} alt="English" onClick={() => changeLanguage('en')} />

        </div>
      </div>
    </nav>
  );
}

export default Header;
