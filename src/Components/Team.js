import React from 'react';
import { useTranslation } from 'react-i18next'
import Slider from "react-slick";
import TeamMember from './TeamMember';
//TODO: Add images, move into components
const Team = () => {
  const { t } = useTranslation();
  const photos = {
    mc: require('../images/person_1.jpg'),
    // a1: require('./logos/small_a1_logo.png'),
    // kc: require('./logos/small_kc_logo.png'),
    // nv: require('./logos/small_nv_logo.png'),
    // other: require('./logos/small_other_logo.png'),
  };
  const team = [
    {
      'name': 'Marek Cywiński',
      'role': 'architect',
      'contact': 'mcywinski@blueaxes.pl',
      'photo': photos.mc,
    },
    {
      'name': 'Marek Cywiński',
      'role': 'architect',
      'contact': 'mcywinski@blueaxes.pl',
      'photo': photos.mc,
    },
    {
      'name': 'Marek Cywiński',
      'role': 'architect',
      'contact': 'mcywinski@blueaxes.pl',
      'photo': photos.mc,
    },
    {
      'name': 'Marek Cywiński',
      'role': 'architect',
      'contact': 'mcywinski@blueaxes.pl',
      'photo': photos.mc,
    },
  ]
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 10,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },]
  };
  return (
    <section id="Team" className="testimony-section bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center heading-section ">
            {/* <span className="subheading"></span> */}
            <h2 className="mb-3">{t('team.header')}</h2>
          </div>
        </div>
        <div class="row ftco-animate">
          <div class="col-md-12">
            <div class="carousel-testimony owl-carousel">
              <Slider {...settings}>
                {team.map((member) => {
                  return <TeamMember key={member.name} member={member} />
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
