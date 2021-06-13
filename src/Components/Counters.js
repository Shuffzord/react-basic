import React from 'react';
import Counter from './Counter';
import { useTranslation } from 'react-i18next'

const Counters = () => {
    const { t } = useTranslation();
    return (
        <div>
            <section class="ftco-counter img" id="section-counter">
                <div class="container">
                    <div class="row pt-md-5">
                        <div class="col-md-6 col-lg-4 justify-content-center counter-wrap ftco-animate">
                            <div class="block-18 py-md-5 mb-md-4">
                                <Counter title={t('counters.experience')} start={0} end={20} />
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 justify-content-center counter-wrap ftco-animate">
                            <div class="block-18 py-md-5 mb-md-4">
                            <Counter title={t('counters.happy_customers')} start={0} end={300}/>
                            </div>
                        </div>                        
                        <div class="col-md-6 col-lg-4 justify-content-center counter-wrap ftco-animate">
                            <div class="block-18 py-md-5 mb-md-4">
                                <Counter title={t('counters.square_meters')} suffix="m²" start={0} end={150000} />
                            </div>
                        </div>
                        {/* <div class="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
                            <div class="block-18 py-md-5 mb-md-4">
                            <Counter title={t('counters.projects_done')} start={0} end={300}/>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Counters;
