import React, { } from 'react';
// import AboutBackground from '../images/bg_2.jpg'
// import { Parallax } from 'react-scroll-parallax';

const AboutUs = () => {
    return (
        <div>
            {/* Breadcrumbs */}
            {/* <section data-stellar-background-ratio="0.5" > 
                <Parallax classNameName="hero-wrap hero-wrap-2" >
                    <img className="hero-wrap hero-wrap-2" src={AboutBackground} alt="" />
                </Parallax>

                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-end">
                        <div className="col-md-9 ftco-animate pb-5">
                            <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="fa fa-chevron-right"></i></a></span> <span>About us <i className="fa fa-chevron-right"></i></span></p>
                            <h1 className="mb-3 bread">About Us</h1>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="ftco-section ftco-no-pb ftco-no-pt">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 order-md-last d-md-flex align-items-stretch">
                            {/* <div className="img w-100 img-2 mr-md-2" style="background-image: url(images/about.jpg);"></div> */}
                            <div className="img mr-md-2"></div>
                            {/* <div className="img w-100 img-2 img-overlay ml-md-2 p-4" style="background-image: url(images/about-2.jpg);"> */}
                            <div className="img  img-overlay ml-md-2 p-4" >
                                <div className="request-quote py-5">
                                    <div className="py-2">
                                        <span className="subheading">Be Part of our Business</span>
                                        <h3>Request A Quote</h3>
                                    </div>
                                    <p>Domeną naszej pracowni są hale przemysłowe, hale magazynowe, centra logistyczne oraz obiekty biurowe wraz z cała towarzysząca infrastrukturą</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-5 ">
                            <div className="heading-section pr-md-5">
                                <p>Domeną naszej pracowni są hale przemysłowe, hale magazynowe, centra logistyczne oraz obiekty biurowe wraz z cała towarzysząca infrastrukturą</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

        </div>
    );
}

export default AboutUs;
