import React from 'react'
import styles from './servicesSection.module.scss'
import Slider from 'react-slick'
import YphresiesCard from '@/components/YphresiesCard/YphresiesCard'

const ServicesSection = ({ services }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };


    return (
        <div className="container">
            <div className={`row ${styles.yphreseisCardSectionAllCards}`}>

                <Slider {...settings}>
                    {services?.data.map((service, index) => {
                        return <div className="col-12 col-md-6 col-lg-3 mb-3 mb-md-4 mb-lg-5 px-2" key={index}>
                            {/* <YphresiesCard /> */}
                        </div>

                    })}
                </Slider>




            </div>
        </div>
    )
}

export default ServicesSection