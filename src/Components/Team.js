import React from 'react';
import { useTranslation } from 'react-i18next'
import Slider from "react-slick";
import TeamMember from './TeamMember';
//TODO: Add images, move into components
const Team = () => {
  const { t } = useTranslation();
  const photos = {
    mc: require('../images/person_1.jpg'),
    mc2: require('../images/person_2.jpg'),
    mc3: require('../images/team-4.jpg'),
    mc4: require('../images/person_4.jpg'),
    mc5: require('../images/team-1.jpg'),
  };
  const team = [
    {
      'name': 'Marek Cywiński',
      'role': 'architect',
      'contact': 'mcywinski@blueaxes.pl',
      'photo': photos.mc,
    },
    {
      'name': 'Tomasz Grochowski',
      'role': 'architect',
      'contact': 'tgrochowski@blueaxes.pl',
      'photo': photos.mc2,
    },
    {
      'name': 'Agnieszka Nowik',
      'role': 'architect',
      'contact': 'anowik@blueaxes.p',
      'photo': photos.mc3,
    },
    {
      'name': 'Marcin Nowak',
      'role': 'architect',
      'contact': 'mnowak@blueaxes.pl',
      'photo': photos.mc4,
    },
    {
      'name': 'Piotr Karlicki',
      'role': 'architect',
      'contact': 'pkarlicki@blueaxes.pl',
      'photo': photos.mc5,
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
    <section id="Team" className="testimony-section bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center heading-section ">
            <span className="subheading">{t('team.header')}</span>
            {/* <h2 className="mb-3">{t('team.header')}</h2> */}
          </div>
        </div>
        <div className="row ftco-animate">
          <div className="col-md-12">
            <div className="">
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
