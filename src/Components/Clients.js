import React from 'react';
import { useTranslation } from 'react-i18next'
import Client from './Client';
//TODO: Add images, move into components
const Clients = () => {
  const { t } = useTranslation();
  const clients = ['pannatoni', 'menard', 'exeter', 'caimmo', 'dlinvestgroup', 'gerda']

  return (
    <section className="ftco-section testimony-section bg-light">
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
              {clients.map((client) => {
                return <Client key={client} client={client} />
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
