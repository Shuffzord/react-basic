import React from 'react';
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="contact-section pt-5" id="Contact">
      <div className="row d-flex contact-info justify-content-center">
        <div className="col-md-8">
          <div className="row">
            <div className="text-center col-md-12 mt-4">
              <h2>{t('contact.companyInfo')}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="icon">
                <span className="fa fa-map"></span>
              </div>
              <p><span>{t('contact.address')}:</span> ul.Łosia 1, 05-807 Podkowa Leśna</p>

            </div>
            <div className="col-md-4 text-center border-height">
              <div className="icon">
                <span className="fa fa-chevron-right"></span>
              </div>
              <div>
                <span>NIP:</span> 118-060-31-42 </div>
              <div><span>REGON:</span> 010492372</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex contact-info justify-content-center">
        <div className="col-md-8">
          <div className="row">
            <div className="text-center col-md-12 mt-4">
              <h2>{t('contact.contact')}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="icon">
                <span className="fa fa-map"></span>
              </div>
              <p><span>{t('contact.address')}:</span> ul.Kasprowicza 47
              01-836 Warszawa</p>

            </div>
            <div className="col-md-4 text-center border-height ">
              <div className="icon">
                <span className="fa fa-phone"></span>
              </div>
              <div><span>{t('contact.phone')}:</span> <a href="tel://+48228648118">+48 22 864 81 18 </a></div>
              <div><span>{t('contact.mobile')}:</span> <a href="tel://+48607053162">+48 607 053 162</a></div>
            </div>
            <div className="col-md-4 text-center ">
              <div className="icon">
                <span className="fa fa-paper-plane"></span>
              </div>
              <p><span>Email:</span> <a href="mailto: blueaxes@blueaxes.pl"> blueaxes@blueaxes.pl</a></p>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center py-5">
        <iframe title="map" style={{ width: '80%', height: 450, border: 0, marginBottom: 50 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.949286228127!2d20.94846001611786!3d52.28062266169361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecbcdc2e5e197%3A0x606b5ee1ea8bc387!2sKasprowicza+45%2F47%2C+Warszawa!5e0!3m2!1spl!2spl!4v1515524006115"></iframe>
      </div>
    </div>
  );
}
export default Contact;
