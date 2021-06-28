import React from 'react';
import { useTranslation } from 'react-i18next'
import Client from './Client';
import Slider from "react-slick";

//TODO: Add images, move into components
const Clients = () => {
  const { t } = useTranslation();
  const clients = ['pannatoni', 'menard', 'exeter', 'caimmo', 'dlinvestgroup', 'gerda']
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section id="Clients" className="ftco-section testimony-section bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center heading-section ">
            <span className="subheading">{t('clients.testimonials')}</span>
            <h2 className="mb-3">{t('clients.header')}</h2>
          </div>
        </div>
        <div className="row ftco-animate">
          <div className="col-md-12">
            <div className="carousel-testimony owl-carousel">
              <Slider {...settings}>
                {clients.map((client) => {
                  return <Client key={client} client={client} />
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
