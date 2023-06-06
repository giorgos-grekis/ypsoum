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

// icon
import SolarPanel from '@/components/UI/svgsComponents/SolarPanel';
import Writing from '@/components/UI/svgsComponents/Writing';
import Profit from '@/components/UI/svgsComponents/Profit';
import Blueprint from '@/components/UI/svgsComponents/Blueprint';
import { WdImage } from '@/components/UI/WdImage';



function find_services_icon(id) {
    // Μελέτη φωτοβολταϊκών
    if (id === '3d5879dc-d37c-47d8-b59e-e3fb97103cee') {
        return <SolarPanel />
    }

    // Αδειοδότηση
    if (id === '7e328016-c07e-4394-8006-5322959b2aa8') {
        return <Writing />
    }

    // Εγκατάσταση Φωτοβολταϊκών
    if (id === '8a9556b3-429e-4baa-9cc4-f1f82198456f') {
        return <Profit />
    }

    //Εξοικονομώ
    if (id === '2a46eb12-c4ca-429f-92ba-1af33c03b6e1') {
        return <Blueprint />
    }
}



const HomePage = ({ homePageProps, sliderProps, strengthsProps, projectProps, serviceProps,params }) => {


    const homePage = homePageProps.status === 'fulfilled' && homePageProps.value || []
    const slider = sliderProps.status === 'fulfilled' && sliderProps.value || []
    const strengths = strengthsProps.status === 'fulfilled' && strengthsProps.value || []
    const projects = projectProps.status === 'fulfilled' && projectProps.value || []
    const services = serviceProps.status === 'fulfilled' && serviceProps.value || []

    const field_section_about2 = homePage?.data?.[0]?.attributes?.field_section_about2?.value || ''
    const field_section_keypoints2 = homePage?.data?.[0]?.attributes?.field_section_keypoints2?.value || ''
    



    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
    };





    return (
        <>

            <section >
                <div
                    style={{ overflow: 'hidden' }}
                >
                    <Slider {...settings}>
                        {slider.data.map((item, index) => {

                            const field_h2 = item?.attributes?.field_h2
                            const field_header_1 = item?.attributes?.field_header_1
                            const img = item?.relationships?.field_image?.data?.[0]?.attributes?.uri?.url
                            const img_id = item?.relationships?.field_image?.data?.[0]?.id
                            const img_path = `${process.env.NEXT_PUBLIC_DRUPAL_URL}${img}`
                            const alt = slider?.fileMeta?.[img_id]?.alt ?? field_h2



                            return (<div className={`${styles.mainSliderImageContainer}`} key={index} style={{ overflow: 'hidden' }}>



                                <WdImage
                                    src={img_path}
                                    width={1920}
                                    height={950}
                                    alt={alt}
                                    priority={index === 0 ? true : false}
                                />

                                {/* <Image
                                    src={img_path}
                                    width={1920}
                                    height={950}
                                    alt={alt}
                                    style={{ objectFit: "cover", maxWidth: '100%', height: 'auto', maxHeight: '950px' }}
                                    priority={index === 0 ? true : false}
                                /> */}

                                <div className={`${styles.mainSliderTextContainer}`}>
                                    <div className={`${styles.text}`}>
                                        {field_h2}
                                    </div>
                                    {(index === 0)
                                        ? (<h1 className={`h1 ${styles.sliderH1}`}>
                                            {field_header_1}
                                        </h1>)
                                        : (<div className={`h1 ${styles.sliderH1}`}>
                                            {field_header_1}
                                        </div>)
                                    }

                                </div>

                                {/* <div className={`${styles.overlay}`} /> */}

                            </div>)
                        })}

                    </Slider>
                </div>
            </section>





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
                                        {index === 0 && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                                        </svg>)}

                                        {index === 1 && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
                                        </svg>)}

                                        {index === 2 && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>)}

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

                            <WdLink href={'/about-us'} className="btn btn-secondary text-white py-3 px-4  fw-bold">
                                ΠΕΡΙΣΣΟΤΕΡΑ
                            </WdLink>

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

                            const icon = find_services_icon(service.id)

                            return (
                                <WdLink href={`${link}`} key={index} className="col-12 col-md-6 col-lg-3 mb-3 mb-md-4 mb-lg-5 px-2" >

                                    <YphresiesCard
                                        title={title}
                                        img={img}
                                        body={body}
                                        icon={icon}
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
                 
                    <div className="container my-5">
                        <div className="row">
                            <div className="text-center">
                                <p className="about-tile">
                                    Πρόσφατα
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
