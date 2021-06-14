import React from 'react';
import { useTranslation } from 'react-i18next'
import Client from './Client';
//TODO: Add images, move into components
const Clients = () => {
  const { t } = useTranslation();
  const clients = ['pannatoni', 'menard', 'exeter', 'caimmo', 'dlinvestgroup', 'gerda']

  return (
    <section class="ftco-section testimony-section bg-light">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-7 text-center heading-section ">
            <span class="subheading">{t('clients.testimonials')}</span>
            <h2 class="mb-3">{t('clients.header')}</h2>
          </div>
        </div>
        <div class="row ftco-animate">
          <div class="col-md-12">
            <div class="carousel-testimony owl-carousel">
              {clients.map((client) => {
                return <Client client={client} />
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
