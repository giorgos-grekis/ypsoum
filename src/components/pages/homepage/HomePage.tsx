'use client'
import React from 'react'
import Image from 'next/image';


import styles from './homePage.module.scss';
import WdLink from '@/components/UI/WdLink';
import YphresiesCard from '@/components/YphresiesCard/YphresiesCard';
import ContactForm from '@/components/ContactForm/ContactForm';
import { find_link } from '@/functions/find_link';
import ExperienceSection from './ΕxperienceSection/ExperienceSection';
import ProjectCardItem from './ProjectCardItem/ProjectCardItem';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import { Swiper, SwiperSlide } from 'swiper/react';



const HomePage = ({ homePageProps, sliderProps, strengthsProps, projectProps, serviceProps }) => {


    const homePage = homePageProps.status === 'fulfilled' && homePageProps.value || []
    const slider = sliderProps.status === 'fulfilled' && sliderProps.value || []
    const strengths = strengthsProps.status === 'fulfilled' && strengthsProps.value || []
    const projects = projectProps.status === 'fulfilled' && projectProps.value || []
    const services = serviceProps.status === 'fulfilled' && serviceProps.value || []

    const field_section_about2 = homePage?.data?.[0]?.attributes?.field_section_about2?.value || ''
    const field_section_keypoints2 = homePage?.data?.[0]?.attributes?.field_section_keypoints2?.value || ''



    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    console.log('homePage: ', { homePage, slider: slider?.data?.[0]?.relationships?.field_image?.data?.[0]?.attributes?.uri?.url });




    return (
        <>

            <section >
                <div style={{ height: '100vh', width: '100%', overflow: 'hidden' }}>
                    <Slider {...settings}>
                        
                        <div>
                            <Image
                                src="/images/homePage/upsoun-main-image.jpg"
                                width={1920}
                                height={950}
                                alt="Picture of the author"
                                // style={{ objectFit: "cover" ,top: 0, left: 0, bottom: 0, right: 0}}
                                // fill={true}
                                priority={true}
                            />

                            <div className={`${styles.titleContainer}`}>

                                <div className={`${styles.text}`}>
                                    Ανανεώσιμη . Φιλική . Αποδοτική
                                </div>

                                <h1>
                                    Φωτοβολταϊλα: Ο οικονομικός τρόπος για ένα πιο πράσινο μέλλον!
                                </h1>
                            </div>
                        </div>


                        <div>
                            <Image
                                src="/images/homePage/upsoun-main-image.jpg"
                                width={1920}
                                height={950}
                                alt="Picture of the author"
                                style={{ objectFit: "cover", top: 0, left: 0, bottom: 0, right: 0 }}
                            // fill={true}
                            // priority={true}
                            />

                            <div className={`${styles.titleContainer}`}>

                                <div className={`${styles.text}`}>
                                    Ανανεώσιμη . Φιλική . Αποδοτική
                                </div>

                                <h1>
                                    Φωτοβολταϊλα: Ο οικονομικός τρόπος για ένα πιο πράσινο μέλλον!
                                </h1>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>

            {/*** hero image ***/}
            {/* <section>
                <div className={`${styles.mainImageContainer}`}
                //  style={{ height: '100vh', width: '100%', overflow: 'hidden' }}
                 >

                    <Image
                        src="/images/homePage/upsoun-main-image.jpg"
                        // width={1920}
                        // height={950}
                        alt="Picture of the author"
                        style={{ objectFit: "cover", top: 0, left: 0, bottom: 0, right: 0 }}
                        fill={true}
                        priority={true}
                    />

                    <div className={`${styles.titleContainer}`}>

                        <div className={`${styles.text}`}>
                            Ανανεώσιμη . Φιλική . Αποδοτική
                        </div>

                        <h1>
                            Φωτοβολταϊλα: Ο οικονομικός τρόπος για ένα πιο πράσινο μέλλον!
                        </h1>
                    </div>

                </div>

            </section> */}



            {/*** icons card ***/}
            <section>
                <div className="container">
                    <div className={`${styles.iconContainer} row`}>

                        {strengths?.data?.map((strength, index) => {

                            const title = strength?.attributes?.title
                            const body = strength?.attributes?.body?.value

                            return (<div className="col-12 col-lg-4" key={index}>
                                <div className={`${styles.iconItem}`}>
                                    {/* icon */}
                                    <div className={`${styles.iconSvg}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                                        </svg>
                                    </div>

                                    {/* text */}
                                    <div>
                                        <p className="fw-bold h5">
                                            {title}
                                        </p>

                                        <div className='text-muted' dangerouslySetInnerHTML={{ __html: body }} />

                                    </div>
                                </div>
                            </div>)
                        })}




                    </div>

                </div>
            </section>



            {/*** About -- field_section_about2 -- Ποιοι είμαστε  ***/}
            <section>
                <div className="container">
                    <div className="row my-5 py-5">
                        {/* images */}
                        <div className="col-12 col-lg-6">

                            <div className="row h-100">

                                {/* image_1 */}
                                <div className={`col-12 col-lg-4 d-none d-lg-block position-relative h-100`}>
                                    <div className={`${styles.image_1}`}>
                                        <Image
                                            src="/images/homePage/upsoun-main-image.jpg"
                                            width={200}
                                            height={250}
                                            alt="Picture of the author"
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>
                                </div>

                                {/* text-images */}
                                <div className={`col-12 col-lg-4 mb-5 mb-lg-0 position-relative h-100`}>
                                    <div className={`${styles.text_image}`}>
                                        <div className={`${styles.text_image_inner}`}>
                                            30 χρόνια εμπειρίας στις ανανεώσιμες πηγές ενέργειας
                                        </div>
                                    </div>
                                </div>

                                {/* image_2 */}
                                <div className={`col-12 col-lg-4 d-none d-lg-block position-relative`}>
                                    <div className={`${styles.image_2}`}>
                                        <Image
                                            src="/images/joshua-hoehne-WeSWsnVQYqU-unsplash.jpg"
                                            width={250}
                                            height={350}
                                            alt="Picture of the author"
                                            style={{ objectFit: "cover", top: 0, left: 0, bottom: 0, right: 0 }}
                                        />
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="col-12 col-lg-6">

                            {/* drupal body */}
                            <div dangerouslySetInnerHTML={{ __html: field_section_about2 }} />

                            <button className="btn btn-secondary text-white py-3 px-4  fw-bold">
                                ΠΕΡΙΣΣΟΤΕΡΑ
                            </button>

                        </div>

                    </div>
                </div>
            </section>



            {/*** Υπηρεσίες section Image ***/}
            <section>
                <div className={`${styles.yphresiesSectionImage}`}>
                    <Image
                        src="/images/homePage/upsoun-main-image.jpg"
                        alt="Contact page image"
                        style={{ objectFit: "cover" }}
                        fill={true}
                    />

                    <div className={`${styles.titleContainer}`}>
                        <div className={`container`}>
                            <p className={`about-tile text-white mb-4`}>
                                Υπηρεσίες
                            </p>
                            <p className={`about-subtitlte text-white mb-4`}>
                                Από Μελέτη έως Συνήτηση Φωτοβολταϊκών
                            </p>
                        </div>
                    </div>


                </div>
            </section>



            {/*** Υπηρεσίες section Cards -- Ιmage title ***/}
            <section>

                <div className="container">
                    <div className={`row ${styles.yphreseisCardSectionAllCards}`}>

                        {services?.data.map((service, index) => {

                            const title = service?.attributes?.title
                            const img = `${process.env.NEXT_PUBLIC_DRUPAL_URL}${service?.relationships?.field_image?.data?.[0]?.attributes?.uri.url}`
                            const body = service?.attributes?.body?.value


                            const link = find_link(service, 'yphresia')

                            return (
                                <WdLink href={`${link}`} key={index} className="col-12 col-md-6 col-lg-3 mb-3 mb-md-4 mb-lg-5 px-2" >

                                    <YphresiesCard
                                        title={title}
                                        img={img}
                                        body={body}
                                    />

                                </WdLink>
                            )

                        })}

                    </div>
                </div>

            </section>



            {/***  30 χρόνια εμπειρία -- field_section_keypoints2 ***/}
            <section>
                <ExperienceSection field_section_keypoints2={field_section_keypoints2} />
            </section>



            {/*** Προσφατα έργα ***/}
            {projects?.data && (
                <section>
                    {/* {console.log('projects: ',projects)} */}
                    <div className="container my-5">
                        <div className="row">
                            <div className="text-center">
                                <p className="about-tile">
                                    Πράσφατα
                                </p>

                                <p className="about-subtitlte">
                                    Πρόσφατα Έργα Μας
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="container-fuild my-5">
                        <div className="row g-0">

                            {projects?.data.map((project, index) => {

                                const title = project?.attributes?.title
                                const category = project?.attributes?.field_category
                                const img = `${process.env.NEXT_PUBLIC_DRUPAL_URL}${project?.relationships?.field_image?.data?.[0]?.attributes?.uri?.url}`
                                const link = `${find_link(project, 'ergo')}`

                                return (<div className="col-12 col-md-6 col-lg-3" key={index}>
                                    <ProjectCardItem
                                        title={title}
                                        category={category}
                                        img={img}
                                        link={link}
                                    />
                                </div>)
                            })}

                        </div>
                    </div>

                </section>

            )}


            {/*** Φόρμα επικοινωνίας ***/}
            <ContactForm />


        </>
    )
}

export default HomePage
