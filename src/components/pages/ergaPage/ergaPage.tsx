'use client'
import React from 'react'
import MainImage from '@/components/MainImage/MainImage'
import Image from 'next/image'

import styles from './ergoPage.module.scss'
import { find_link } from '@/functions/find_link'
import WdLink from '@/components/UI/WdLink'

const ErgaPageClient = ({ erga }) => {


    const projectArray = [
        {
            img: '/images/joshua-hoehne-WeSWsnVQYqU-unsplash.jpg',
            alt: 'Contact page image',
            category: 'κατηγορία',
            title: 'title_1'
        },
        {
            img: '/images/joshua-hoehne-WeSWsnVQYqU-unsplash.jpg',
            alt: 'Contact page image-2',
            category: 'κατηγορία',
            title: 'title_2'
        },
        {
            img: '/images/joshua-hoehne-WeSWsnVQYqU-unsplash.jpg',
            alt: 'Contact page image_3',
            category: 'κατηγορία',
            title: 'title_3'
        },
        {
            img: '/images/joshua-hoehne-WeSWsnVQYqU-unsplash.jpg',
            alt: 'Contact page image',
            category: 'κατηγορία',
            title: 'title_4'
        },
        {
            img: '/images/joshua-hoehne-WeSWsnVQYqU-unsplash.jpg',
            alt: 'Contact page image',
            category: 'κατηγορία',
            title: 'title_5'
        },
        {
            img: '/images/joshua-hoehne-WeSWsnVQYqU-unsplash.jpg',
            alt: 'Contact page image',
            category: 'κατηγορία',
            title: 'title_6'
        },

    ]

    return (
        <>
            {/* main image */}
            <MainImage title={'Πρόσφατα Έργα'} />


            <section>
                <div className="container">

                    {/*  className="position-relative" style={{minWidth: '200px', minHeight: '200px'}} */}
                    {/* <div className="row my-5 py-5">
                        {projectArray.map((project, index) => {
                            return (<div className="col-12 col-md-12 col-lg-6 col-xl-4 p-3 d-flex justify-content-center align-items-center" key={index}>
                                <div className="overflow-hidden position-relative">
                                    <Image
                                        src={project?.img}
                                        alt={project?.alt}
                                        style={{ objectFit: "cover" }}
                                        // fill={true}
                                        width={380}
                                        height={420}
                                    />

                                    <div className={`${styles.titleContainer}`}>
                                        <div className={`${styles.leftLine}`}>
                                            <p className="mb-1 fs-6 text-muted">{project?.category}</p>
                                            <p className='mb-1 h3 fw-bold'>{project?.title}</p>
                                        </div>
                                    </div>

                                </div>

                            </div>)
                        })}
                    </div> */}


                    <div className="row my-5 py-5">
                        {erga?.data?.map((ergo, index) => {


                            const title = ergo?.attributes?.title
                            const category = ergo?.attributes?.field_category
                            const img_path = ergo?.relationships?.field_image?.data?.[0]?.attributes?.uri?.url
                            const img = `${process.env.NEXT_PUBLIC_DRUPAL_URL}${img_path}`
                            const link = find_link(ergo, 'ergo')


                            return (<div className="col-12 col-md-12 col-lg-6 col-xl-4 p-3 d-flex justify-content-center align-items-center" key={index}>
                                <WdLink className={`overflow-hidden position-relative ${styles.imageContainer}`} href={link}>
                                    <>
                                        {/* <WdLink href={link}> */}
                                        <Image
                                            src={img}
                                            alt={title}
                                            style={{ objectFit: "cover" }}
                                            // fill={true}
                                            width={380}
                                            height={420}
                                        />
                                        {/* </WdLink> */}

                                        {/* <WdLink href={link}> */}
                                        <div className={`${styles.titleContainer}`}>
                                            <div className={`${styles.leftLine}`}>
                                                <p className="mb-1 fs-6 text-muted">{category}</p>
                                                <p className='mb-1 h3 fw-bold'>{title}</p>
                                            </div>
                                        </div>
                                        {/* </WdLink> */}
                                    </>

                                </WdLink>
                            </div>)
                        })}
                    </div>






                </div>
            </section>
        </>
    )
}

export default ErgaPageClient