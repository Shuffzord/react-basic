import React from 'react';
import { useTranslation } from 'react-i18next'

const AboutUs = () => {
    const { t } = useTranslation();
    const images = {
        main: require('../images/MainPage.jpg'),
        main2: require('../images/MainPage2.jpg'),
        main3: require('../images/MainPage3.jpg'),
    };
    return (
        <section id="About" className="hero-wrap" style={{ backgroundImage: `url("${images.main2}")` }}>
            <div className="container">
                {/* <div id="cf">
                    <img className="bottom" src={maps.m2} style={{ width: '100%' }} alt="map" />
                    <img className="top" src={maps.m1} style={{ width: '100%' }} alt="map" />
                </div> */}
                <div className="row no-gutters slider-text align-items-center">
                    <div className="col-md-10 col-lg-7 ftco-animate d-flex align-items-end">
                        <div className="text">
                            <h1 className="mb-4">{t('aboutUs.header')}</h1>
                            <p>Ładny chwytliwy opis - kilka zdań
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default AboutUs;
