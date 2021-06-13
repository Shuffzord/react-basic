import React from 'react';

const Counters = () => {
    return (
        <div>
            <span>Counters</span>
            <section class="ftco-counter img" id="section-counter">
                <div class="container">
                    <div class="row pt-md-5">
                        <div class="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
                            <div class="block-18 py-md-5 mb-md-4">
                                <div class="text text-border d-flex align-items-center">
                                    <strong class="number" data-number="1000">0</strong>
                                    <span>Years of Experienced</span>             </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
                            <div class="block-18 py-md-5 mb-md-4">
                                <div class="text text-border d-flex align-items-center">
                                    <strong class="number" data-number="2500">0</strong>
                                    <span>Project Done</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
                            <div class="block-18 py-md-5 mb-md-4">
                                <div class="text text-border d-flex align-items-center">
                                    <strong class="number" data-number="500">0</strong>
                                    <span>Licensed Architect</span>              </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
                            <div class="block-18 py-md-5 mb-md-4">
                                <div class="text d-flex align-items-center">
                                    <strong class="number" data-number="67">0</strong>
                                    <span>Happy Customers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Counters;
