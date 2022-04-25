import React from 'react';
import { useTranslation } from 'react-i18next'

const Carreer = () => {
    const { t } = useTranslation();
    const images = {
        main: require('../images/MainPage.jpg'),
        main2: require('../images/MainPage2.jpg'),
        main3: require('../images/MainPage3.jpg'),
    };
    return (
        <section id="About" className="hero-wrap" style={{ backgroundImage: `url("${images.main2}")` }}>
            <div className="container ">
                <div className="row align-items-top pt-5">
                    <p className=''>{t('career.main')}</p>
                </div>
                <div className="row align-items-top pt-2">
                    <p className=''>{t('career.extra')}</p>
                </div>
            </div>
        </section>
    );
}

export default Carreer;
