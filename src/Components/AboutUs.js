import React from 'react';
import { useTranslation } from 'react-i18next'
import { NavHashLink } from 'react-router-hash-link';

const AboutUs = () => {
    const { t } = useTranslation();
    const images = {
        main2: require('../images/MainPage2.png'),
        button: require('../images/MainButton.png'),
    };
    return (
        <section id="About" className="hero-wrap" style={{ backgroundImage: `url("${images.main2}")` }}>
            <div className="container">
                <NavHashLink className="nav-link lato-bold" to="/#Offer">{t('navigation.offer')}</NavHashLink>
                <div className="row no-gutters slider-text align-items-center">
                    <div className="col-md-10 col-lg-7 ftco-animate d-flex align-items-end">
                        <div className='d-flex align-items-end'>
                            <div className="arial-narrow ">{t('aboutUs.header')}</div>
                            {/* <p>{t('aboutUs.details')}
                            </p> */}
                        </div>
                    </div>
                    <div>
                        <p className='aboutus-number lato-regular'>1.61803398874989484820458</p>
                    </div>
                </div>

            </div>
        </section >

    );
}

export default AboutUs;
