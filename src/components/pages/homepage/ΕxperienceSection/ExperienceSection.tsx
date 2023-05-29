import Image from 'next/image'
import React from 'react'

import styles from './experienceSection.module.scss'

const ExperienceSection = ({ field_section_keypoints2 }) => {
    return (
        <div className="container-fuild overflow-hidden h-100 my-5">
            <div className="row h-100 g-0">

                {/* image */}
                <div className="col-0 col-lg-6 d-none d-lg-flex">
                    <div className="position-relative h-100 w-100">
                        <Image
                            src="/images/homePage/upsoun-main-image.jpg"
                            // width={500}
                            // height={500}
                            alt="Picture of the author"
                            style={{ objectFit: "cover", top: '3rem', left: 0, bottom: 0, right: 0, position: 'absolute', height: '100%' }}
                            fill={true}
                            sizes="100vw"
                            priority={true}
                        />
                    </div>
                </div>

                {/* text */}
                <div className="col-12 col-lg-6">
                    <div className='bg-primary'>
                        <div className={`${styles.sthrizoumeInnerContainer}`}>

                            <div dangerouslySetInnerHTML={{ __html: field_section_keypoints2 }} />

                            {/* 
                                <p className='about-tile text-white'>
                                    30 Χρόνια Εμπειρία
                                </p>
                                <p className='about-subtitlte text-white'>Στηρίζουμε την ανάπτυξη ενός βιώσιμου μέλλοντος</p>

                                <p className='text-white lh-lg'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptates, cumque ratione molestiae corrupti ipsa repellendus doloribus error in doloremque suscipit blanditiis adipisci totam, sed quidem explicabo deleniti natus eum!
                                </p> 
                            */}

                            <div className="row mt-5">
                                {/*  Ολοκληρωμένες Υπηρεσίες */}
                                <div className="col-12 col-lg-6 col-xxl-3">
                                    <div className='d-flex flex-column align-items-lg-start justify-content-center'>
                                        <div className={`${styles.strhrizoumeSvg} mb-2`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                                            </svg>
                                        </div>

                                        <p className="text-white fw-bold lh-1">
                                            Ολοκληρωμένες Υπηρεσίες
                                        </p>
                                    </div>
                                </div>

                                {/*  Προσαρμοσμένος Σχεδιασμός */}
                                <div className="col-12 col-lg-6 col-xl-3">
                                    <div className='d-flex flex-column align-items-lg-start justify-content-center'>
                                        <div className={`${styles.strhrizoumeSvg} mb-2`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                                            </svg>
                                        </div>

                                        <p className="text-white fw-bold lh-1">
                                            Προσαρμοσμένος Σχεδιασμός
                                        </p>
                                    </div>
                                </div>

                                {/*  Ποιοτικά Προϊόντα */}
                                <div className="col-12 col-lg-6 col-xxl-3">
                                    <div className='d-flex flex-column align-items-lg-start justify-content-center'>
                                        <div className={`${styles.strhrizoumeSvg} mb-2`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                            </svg>
                                        </div>

                                        <p className="text-white fw-bold lh-1">
                                            Ποιοτικά Προϊόντα
                                        </p>
                                    </div>
                                </div>

                                {/*  Γρήγορη Εγκατάσταση */}
                                <div className="col-12 col-lg-6 col-xxl-3">
                                    <div className='d-flex flex-column align-items-lg-start justify-content-center'>
                                        <div className={`${styles.strhrizoumeSvg} mb-2`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                            </svg>
                                        </div>

                                        <p className="text-white fw-bold lh-1">
                                            Γρήγορη Εγκατάσταση
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ExperienceSection