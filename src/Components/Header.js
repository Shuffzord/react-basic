import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="Home">BlueAxes</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu</button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active"><a href="#Home" className="nav-link">Blue Axes</a></li>
              <li className="nav-item"><a href="About" className="nav-link">O nas</a></li>
              <li className="nav-item"><a href="Mission" className="nav-link">Misja</a></li>
              <li className="nav-item"><a href="Projects" className="nav-link">Nasze projekty</a></li>
              <li className="nav-item"><a href="Clients" className="nav-link">Nasi Klienci</a></li>
              <li className="nav-item"><a href="Contact" className="nav-link">Kontakt</a></li>
              <li className="nav-item"><a href="Offer" className="nav-link">Oferta</a></li>
              <li className="nav-item"><a href="Team" className="nav-link">Nasz zespół</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Header;
