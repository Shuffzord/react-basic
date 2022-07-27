import React from 'react';
import { useTranslation } from 'react-i18next'

const Carreer = () => {
    const { t } = useTranslation();
    const images = {
        main2: require('../images/MainPage2.png'),
    };
    return (
        <section id="About" className="hero-wrap" style={{ backgroundImage: `url("${images.main2}")` }}>
            <div className="container ">
                <div className='d-flex align-items-center justify-content-center'>
                    <h1>{t('career.header')}</h1>
                </div>

                <div className="row align-items-top pt-5">
                    <p className=''>{t('career.main')}</p>
                </div>
                <div className="row align-items-top pt-2">
                    <p className=''>{t('career.extra')}</p>
                </div>
                <div className="row d-flex contact-info justify-content-end">
                    <div className="col-md-4">
                        <div className="row">
                            <div className="text-center col-md-12">
                                <p className='col-md-12' style={{ fontWeight: 'bold' }}>{t('career.applications')}</p>
                            </div>
                            <div className="text-center col-md-12">
                                <a className='col-md-12' href="mailto: praca@blueaxes.pl"> praca@blueaxes.pl</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Carreer;
