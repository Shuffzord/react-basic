import React from 'react';
import { useTranslation } from 'react-i18next'

const Mission = () => {
    const { t } = useTranslation();
    const images = {
        handshake: require('../images/mission/handshake.JPG'),

    };
    return (
        <section id="Mission" className="ftco-section ftco-no-pb ftco-no-pt">
            <div className="container">
                <div className="row">
                    {/* <div className="col-lg-7 order-md-last d-md-flex align-items-stretch">
                    </div> */}
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-7 text-center heading-section ">
                            <span className="subheading">{t('mission.header')}</span>
                            <h2 >JESTEŚMY GOTOWI
                                NA NOWE WYZWANIA</h2>
                        </div>
                    </div>
                    <div className="col-lg-12 wrap-about py-md-5 ftco-animate">
                        <div className="heading-section pr-md-5">

                            <div className="row">
                                <div className="col-lg-4">
                                    <p><img src={images.handshake} style={{ width: 100, height: 100 }} alt="handshake" /> Naszą misją jest budowanie
                                        partnerskich, opartych na zaufaniu
                                        relacji z inwestorem i jego klientami.
                                    </p>
                                    <p>
                                        Chcemy, aby wszyscy uczestnicy
                                        procesu inwestycyjnego mieli
                                        przekonanie, że mogą liczyć na nasze
                                        pełne i profesjonalne wsparcie w
                                        realizacji inwestycji.
                                    </p>
                                </div>
                                <div className="col-lg-4">
                                    <p>
                                        Drogą do tego celu jest osiąganie
                                        najlepszych możliwych rezultatów w
                                        realizacji projektów, niezależnie od
                                        złożoności i wielkości obiektu.
                                    </p>
                                    <p>
                                        Dzięki temu, że do pracy
                                        podchodzimy z zaangażowaniem i
                                        pasją, nasi klienci i współpracownicy
                                        wiedzą, że mogą na nas polegać.
                                    </p>
                                    <p>
                                        W ostatnich latach zaprojektowaliśmy
                                        obiekty architektury przemysłowej o
                                        łącznej powierzchni zabudowy ponad
                                        1 000 000 m2.
                                    </p>

                                </div>
                                <div className="col-lg-4">
                                    <p>
                                        Przeprojektowaliśmy ponad 150 000
                                        m2 powierzchni użytkowej na potrzeby
                                        najemców oraz prawie 10 000 m2
                                        powierzchni użytkowej pomieszczeń
                                        administracyjno - socjalnych.
                                    </p>
                                    <p>
                                        Wciąż się doskonalimy i
                                        dostosowujemy naszą pracę do
                                        wzrastających potrzeb klientów i
                                        wymagań rynku.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Mission;
