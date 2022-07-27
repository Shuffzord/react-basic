import React from 'react';
import { useTranslation } from 'react-i18next'
import TeamMember from './TeamMember';
//TODO: Add images, move into components
const Team = () => {
  const icons = {
    managemenet: require('../images/Kadra.jpg'),
    team: require('../images/projektanci.jpg'),
  };
  const team = [
    {
      'name': 'Marek Cywiński',
      'role': 'Prezes Zarządu',
      'contact': 'mcywinski@blueaxes.pl',
      'photo': icons.managemenet,
      'filter': 'management'
    },
    {
      'name': 'Beata Cywińska',
      'role': 'Członek Zarządu',
      'contact': 'bcywinska@blueaxes.pl',
      'photo': icons.managemenet,
      'filter': 'management'
    },
    {
      'name': 'Tomasz Grochowski',
      'role': 'Członek Zarządu',
      'contact': 'tgrochowski@blueaxes.pl',
      'photo': icons.managemenet,
      'filter': 'management'
    },
    {
      'name': 'Piotr Karlicki',
      'role': 'architect',
      'contact': 'pkarlicki@blueaxes.pl',
      'photo': icons.team,
    },
    {
      'name': 'Marcin Nowak',
      'role': 'architect',
      'contact': 'mnowak@blueaxes.pl',
      'photo': icons.team,
    },
    {
      'name': 'Agnieszka Nowik',
      'role': 'architect',
      'contact': 'anowik@blueaxes.pl',
      'photo': icons.team,
    },
    {
      'name': 'Marta Małachowska',
      'role': 'coordinator',
      'contact': 'mmalachowska@blueaxes.pl',
      'photo': icons.team,
    },
    {
      'name': 'Mateusz Stępowski',
      'role': 'architect',
      'contact': 'mstepkowski@blueaxes.pl',
      'photo': icons.team,
    },
    {
      'name': 'Andrzej Olejniczak',
      'role': 'architect',
      'contact': 'aolejniczak@blueaxes.pl',
      'photo': icons.team,
    },
    {
      'name': 'Alicja Kozioł',
      'role': 'architect',
      'contact': 'akoziol@blueaxes.pl',
      'photo': icons.team,
    },
    {
      'name': 'Ada Orczyk',
      'role': 'architect',
      'contact': 'aorczyk@blueaxes.pl',
      'photo': icons.team,
    },
    {
      'name': '',
      'role': 'mystery',
      'contact': '',
      'photo': icons.team,
    },
  ]

  return (
    <section id="Team" className="testimony-section">
      <div className="contact-section pt-5">
        <div className="row d-flex contact-info justify-content-center">
          <div className="">
            <div className="row">
              <div className="text-center mt-4">
                <h2>Kadra Kierownicza</h2>
              </div>
            </div>
            <div className="row">
              {team.filter(x => x.filter === "management").map((member) => {
                return (
                  <div className="col-md-4 text-center">
                    <TeamMember key={member.name} member={member} />
                  </div>
                )
              })}
              <div className="text-center mt-4">
                <h2>Zespół</h2>
              </div>
              {team.filter(x => x.filter !== "management")
                .map((member, index) => {
                  if (index + 1 % 3 === 0) {
                    return (
                      <div className="row">
                        <div className="col-md-4 text-center">
                          <TeamMember key={member.name} member={member} />
                        </div>
                      </div>
                    )
                  }
                  return (
                    <div className="col-md-4 text-center">
                      <TeamMember key={member.name} member={member} />
                    </div>
                  )
                })}
            </div>

          </div >
        </div >
      </div >
      {/* <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center heading-section ">
            <span className="subheading">{t('team.header')}</span>
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
      </div> */}
    </section>
  );
}

export default Team;
