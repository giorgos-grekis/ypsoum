import React from 'react'
import Slider from 'react-slick';

import styles from './testimonials.module.scss'


const Testimoials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <section className="my-5 pb-5">
            <div className="container pt-5">
                <div className='about-tile text-center'>Σχόλια Πελατών</div>
                <div className='about-subtitlte text-center mt-1 mb-5'>Τι Είπαν για εμάς</div>
                {/* <div className="row"> */}
                <Slider {...settings}>
                    {/* first */}
                    <div className='d-flex flex-column align-items-center justify-content-center'>

                        <p className='text-secondary text-center h2'>
                            66
                        </p>
                        <p className='text-muted text-center w-75'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, exercitationem? Fugiat iure odit, id perferendis quae tenetur architecto harum mollitia laboriosam itaque unde labore ipsa illum ex, optio nemo tempore!
                        </p>

                        <div className='d-flex align-items-center justify-content-center mt-3'>
                            <div className='about-image-section-svg text-black me-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>

                            <div>
                                <p className="mb-0 fw-bold h5">Τζον Σνόου</p>
                                <p className="mb-0 text-muted fs-6">πελάτης της εταιρείας</p>
                            </div>

                        </div>
                    </div>


                    {/* second */}
                    <div className='d-flex flex-column align-items-center justify-content-center'>

                        <p className='text-secondary text-center h2'>
                            66
                        </p>
                        <p className='text-muted text-center w-75'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, exercitationem? Fugiat iure odit, id perferendis quae tenetur architecto harum mollitia laboriosam itaque unde labore ipsa illum ex, optio nemo tempore!
                        </p>

                        <div className='d-flex align-items-center justify-content-center mt-3'>
                            <div className='about-image-section-svg text-black me-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>

                            <div>
                                <p className="mb-0 fw-bold h5">Τζον Σνόου</p>
                                <p className="mb-0 text-muted fs-6">πελάτης της εταιρείας</p>
                            </div>

                        </div>
                    </div>

                </Slider>

            </div>
            {/* </div> */}
        </section>
    );
}

export default Testimoials