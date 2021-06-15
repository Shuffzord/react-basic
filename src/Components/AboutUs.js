import React, { } from 'react';
// import AboutBackground from '../images/bg_2.jpg'
// import { Parallax } from 'react-scroll-parallax';

const AboutUs = () => {
    const maps = {
        empty: require('../images/mapka1.jpg'),
        filled: require('../images/mapka2.jpg'),
        temp: require('../images/bg_1.jpg'),
        temp2: require('../images/bg_2.jpg'),
        temp3: require('../images/temp3.jpg'),
        temp4: require('../images/temp4.jpg')
    };
    return (
        <section id="About" className="hero-wrap image-opacity" style={{ backgroundImage: `url("${maps.temp4}")`, opacity: '0.5' }}>
            {/* <section id="About" className="hero-wrap"> */}
            <div className="container">
                {/* <div id="cf">
                    <img className="bottom" src={maps.m2} style={{ width: '100%'  }} alt="map" />
                    <img className="top" src={maps.m1} style={{ width: '100%' }} alt="map" />
                </div> */}
                {/* <div className="row">
                    <div className="col-lg-7 order-md-last d-md-flex align-items-stretch">

                        <div className="img mr-md-2"></div>
                        <div className="img  img-overlay ml-md-2 p-4" >
                            <div className="request-quote py-5">
                                <div className="py-2">
                                    <span className="subheading">Be Part of our Business</span>
                                    <h3>Request A Quote</h3>
                                </div>
                                <p>Domeną naszej pracowni są hale przemysłowe, hale magazynowe, centra logistyczne oraz obiekty biurowe wraz z cała towarzysząca infrastrukturą</p>
                            </div>
                        </div>
                    </div> */}
                {/* <div className="col-lg-5 ">
                            <div className="heading-section pr-md-5">
                                <p>Domeną naszej pracowni są hale przemysłowe, hale magazynowe, centra logistyczne oraz obiekty biurowe wraz z cała towarzysząca infrastrukturą</p>
                            </div>
                        </div> */}
                {/* </div> */}
            </div>
        </section>

    );
}

export default AboutUs;
