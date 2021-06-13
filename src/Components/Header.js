import React from 'react';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">BlueAxes</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="oi oi-menu"></span> Menu</button>
          <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active"><a href="index.html" class="nav-link">Blue Axes</a></li>
              <li class="nav-item"><a href="#" class="nav-link">O nas</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Misja</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Nasze projekty</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Nasi Klienci</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Kontakt</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Oferta</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Nasz zespół</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Header;
