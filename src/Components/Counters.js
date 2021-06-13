import React from 'react';
import Counter from './Counter';
import { useTranslation } from 'react-i18next'

const Counters = () => {
    const { t } = useTranslation();
    return (
        <div>
            <span>Counters</span>
            <section class="ftco-counter img" id="section-counter">
                <div class="container">
                    <div class="row pt-md-5">
                        <div class="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
                            <div class="block-18 py-md-5 mb-md-4">
                                <Counter title={t('counters.projects-done')} start={0} end={1000} />
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
                            <div class="block-18 py-md-5 mb-md-4">
                                <Counter title={t('counters.projects-done')} start={0} end={3200} />
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
                            <div class="block-18 py-md-5 mb-md-4">
                            <Counter title={t('counters.projects-done')} start={0} end={33200}/>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
                            <div class="block-18 py-md-5 mb-md-4">
                            <Counter title={t('counters.projects-done')} start={0} end={312200}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Counters;
