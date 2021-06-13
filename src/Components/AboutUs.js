import React from 'react';
const AboutUs = () => {
    return (
        <div>
            {/* <section class="hero-wrap hero-wrap-2" style="background-image: url('images/bg_2.jpg');" data-stellar-background-ratio="0.5"> */}
            <section class="hero-wrap hero-wrap-2" data-stellar-background-ratio="0.5">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row no-gutters slider-text js-fullheight align-items-end">
                        <div class="col-md-9 ftco-animate pb-5">
                            <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home <i class="fa fa-chevron-right"></i></a></span> <span>About us <i class="fa fa-chevron-right"></i></span></p>
                            <h1 class="mb-3 bread">About Us</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section class="ftco-section ftco-no-pb ftco-no-pt">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7 order-md-last d-md-flex align-items-stretch">
                            {/* <div class="img w-100 img-2 mr-md-2" style="background-image: url(images/about.jpg);"></div> */}
                            <div class="img mr-md-2"></div>
                            {/* <div class="img w-100 img-2 img-overlay ml-md-2 p-4" style="background-image: url(images/about-2.jpg);"> */}
                            <div class="img  img-overlay ml-md-2 p-4" >
                                <div class="request-quote py-5">
                                    <div class="py-2">
                                        <span class="subheading">Be Part of our Business</span>
                                        <h3>Request A Quote</h3>
                                    </div>
                                    <p>Domeną naszej pracowni są hale przemysłowe, hale magazynowe, centra logistyczne oraz obiekty biurowe wraz z cała towarzysząca infrastrukturą</p>
                                </div>
                            </div>
                        </div>
                        {/* <div class="col-lg-5 ">
                            <div class="heading-section pr-md-5">
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
