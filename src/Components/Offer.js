import React from 'react';
import { useTranslation } from 'react-i18next'


const Offer = () => {
  const { t } = useTranslation();

    return (
      <section className="ftco-section ftco-no-pb ftco-no-pt bg-primary">
      <div className="container">
        <div className="row d-flex no-gutters">
          <div className="col-md-3 d-flex align-items-stretch ftco-animate">
            <div className="media block-6 services services-bg d-block text-center px-4 py-5">
            	<div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-system"></span></div>
              <div className="media-body py-md-4">
                <h3>Design Process</h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>      
          </div>
          <div className="col-md-3 d-flex align-items-stretch ftco-animate">
            <div className="media block-6 services services-bg services-darken d-block text-center px-4 py-5">
            	<div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-supervised"></span></div>
              <div className="media-body py-md-4">
                <h3>Supervision</h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>      
          </div>
          <div className="col-md-3 d-flex align-items-stretch ftco-animate">
            <div className="media block-6 services services-bg services-lighten d-block text-center px-4 py-5">
            	<div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-accounting"></span></div>
              <div className="media-body py-md-4">
                <h3>Budget Planning</h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>      
          </div>
          <div className="col-md-3 d-flex align-items-stretch ftco-animate">
            <div className="media block-6 services services-bg d-block text-center px-4 py-5">
            	<div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-blueprint"></span></div>
              <div className="media-body py-md-4">
                <h3>Build a Home For You</h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>      
          </div>
        </div>
      </div>
    </section>
    );
}

export default Offer;
