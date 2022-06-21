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
              <h2>{t('contact.contact')}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center border-height">
              <p><span>BLUE AXES Marek Cywiński Pracownia Projektowa</span></p>
              <div>ul.Łosia 1, 05-807 Podkowa Leśna</div>
              <div>
                <span style={{ fontWeight: 'bold' }}>NIP:</span> 118-060-31-42
              </div>
              <div><span style={{ fontWeight: 'bold' }}>REGON:</span> 010492372</div>
              <div><span style={{ fontWeight: 'bold' }}>KRS:</span> 0000960847</div>
            </div>
            <div className="col-md-4 text-center">
              <div className="icon">
                <span className="fa fa-map"></span>
              </div>
              <p><span>{t('contact.studioAddress')}:</span></p>
              Bielany Business Center<br />
              Aleja Zjednoczenia 36<br />
              01-836 Warszawa<br />
              Wejście A, Piętro 3
              <div className="icon">
                <span className="fa fa-phone"></span>
              </div>
              <div><span>{t('contact.phone')}:</span> <a href="tel://+48228648118">+48 22 121 81 18 </a></div>
            </div>
            <div className="col-md-4 text-center ">
              <div className="icon">
                <span className="fa fa-paper-plane"></span>
              </div>
              <p><span>Email:</span> <a href="mailto: blueaxes@blueaxes.pl"> blueaxes@blueaxes.pl</a></p>
              <p><span>{t('contact.invoices')}:</span> <a href="mailto: faktury@blueaxes.pl"> faktury@blueaxes.pl</a></p>
            </div>
          </div>
        </div >
      </div >

      <div className="row justify-content-center py-5">
        <iframe title="map" style={{ width: '80%', height: 450, border: 0, marginBottom: 50 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.9663012728333!2d20.948453516094855!3d52.280313761716535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecbcddb85955d%3A0x44641c7ffdd3873c!2sBielany%20Business%20Center%2C%20Aleja%20Zjednoczenia%2036%2C%2001-830%20Warszawa!5e0!3m2!1spl!2spl!4v1650897387290!5m2!1spl!2spl"
          loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div >
  );
}
export default Contact;
