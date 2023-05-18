import React from 'react'



import Image from 'next/image';

import styles from './homePage.module.scss';
import WdLink from '@/components/UI/WdLink';
import YphresiesCard from '@/components/YphresiesCard/YphresiesCard';
import ContactForm from '@/components/ContactForm/ContactForm';

const HomePage = () => {




    return (
        <>

            {/* hero image */}
            <section style={{ height: '100vh' }}>

                {/* hero image */}
                <div className={`${styles.mainImageContainer}`}>
                    <Image
                        src="/images/homePage/upsoun-main-image.jpg"
                        // width={500}
                        // height={500}
                        alt="Picture of the author"
                        style={{ objectFit: "cover", top: 0, left: 0, bottom: 0, right: 0 }}
                        fill={true}
                        priority={true}
                    />
                    {/* title */}
                    <div className={`${styles.titleContainer}`}>

                        <div className={`${styles.text}`}>
                            Ανανεώσιμη . Φιλική . Αποδοτική
                        </div>

                        <h1>
                            Φωτοβολταϊλα: Ο οικονομικός τρόπος για ένα πιο πράσινο μέλλον!
                        </h1>
                    </div>

                </div>
            </section>


            {/* icons card */}
            <section>
                <div className="container">
                    <div className={`${styles.iconContainer} row`}>

                        {/* Εγγύση Απόδοσης */}
                        <div className="col-12 col-lg-4">
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
                                    <p className="fw-bold h5">Εγγύηση Απόδοσης</p>
                                    <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>

                        {/* Προσαρμοσμένενες Λύσεις */}
                        <div className="col-12 col-lg-4">
                            <div className={`${styles.iconItem}`}>
                                {/* icon */}
                                <div className={`${styles.iconSvg}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
                                    </svg>

                                </div>

                                {/* text */}
                                <div>
                                    <p className="fw-bold h5">Προσαρμοσμένενες Λύσεις</p>
                                    <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>

                        {/* Γρήγορα & Οικονομικά */}
                        <div className="col-12 col-lg-4">
                            <div className={`${styles.iconItem}`}>
                                {/* icon */}
                                <div className={`${styles.iconSvg}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>

                                {/* text */}
                                <div>
                                    <p className="fw-bold h5">Γρήγορα & Οικονομικά</p>
                                    <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </section>

            {/* 2 image one text */}
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
                        {/*  */}
                        <div className="col-12 col-lg-6">
                            <p className='about-tile'>Ποιοι Είμαστε</p>
                            <p className='about-subtitlte mb-4'>Η Ομάδα Ειδικών στην Εγκτατάσταση Φωτοβολταϊκών</p>
                            <p className="text-muted mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis ratione possimus a quo necessitatibus, aperiam voluptatem </p>

                            <button className="btn btn-secondary text-white py-3 px-4  fw-bold">
                                ΠΕΡΙΣΣΟΤΕΡΑ
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Υπηρεσίες section Image */}
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

            {/* Υπηρεσίες section Cards */}
            <section>
                <div className="container">
                    <div className={`row ${styles.yphreseisCardSectionAllCards}`}>

                        <div className="col-12 col-md-6 col-lg-3 mb-3 mb-md-4 mb-lg-5">
                            <YphresiesCard />
                        </div>


                        <div className="col-12 col-md-6 col-lg-3 mb-3 mb-md-4 mb-lg-5">
                            <YphresiesCard />
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 mb-3 mb-md-4 mb-lg-5">
                            <YphresiesCard />
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 mb-3 mb-md-4 mb-lg-5">
                            <YphresiesCard />
                        </div>

                    </div>
                </div>

            </section>


            {/* στηρίζουμε την ανάπτυξη */}
            <section>
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
                                    priority={true}
                                />
                            </div>
                        </div>

                        {/* text */}
                        <div className="col-12 col-lg-6">
                            <div className='bg-primary'>
                                <div className={`${styles.sthrizoumeInnerContainer}`}>
                                    <p className='about-tile text-white'>
                                        30 Χρόνια Εμπειρία
                                    </p>
                                    <p className='about-subtitlte text-white'>Στηρίζουμε την ανάπτυξη ενός βιώσιμου μέλλοντος</p>

                                    <p className='text-white lh-lg'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptates, cumque ratione molestiae corrupti ipsa repellendus doloribus error in doloremque suscipit blanditiis adipisci totam, sed quidem explicabo deleniti natus eum!
                                    </p>

                                    <div className="row mt-5">
                                        {/*  Ολοκληρωμένες Υπηρεσίες */}
                                        <div className="col-12 col-lg-6 col-xxl-3">
                                            <div className='d-flex flex-column align-items-lg-start justify-content-center'>
                                                <div className={`${styles.strhrizoumeSvg} mb-2`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>

                                                <p className="text-white fw-bold lh-1">
                                                    Ολοκληρωμένες Υπηρεσίες
                                                </p>
                                            </div>
                                        </div>

                                        {/*  Ολοκληρωμένες Υπηρεσίες */}
                                        <div className="col-12 col-lg-6 col-xl-3">
                                            <div className='d-flex flex-column align-items-lg-start justify-content-center'>
                                                <div className={`${styles.strhrizoumeSvg} mb-2`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>

                                                <p className="text-white fw-bold lh-1">
                                                    Ολοκληρωμένες Υπηρεσίες
                                                </p>
                                            </div>
                                        </div>

                                        {/*  Ολοκληρωμένες Υπηρεσίες */}
                                        <div className="col-12 col-lg-6 col-xxl-3">
                                            <div className='d-flex flex-column align-items-lg-start justify-content-center'>
                                                <div className={`${styles.strhrizoumeSvg} mb-2`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>

                                                <p className="text-white fw-bold lh-1">
                                                    Ολοκληρωμένες Υπηρεσίες
                                                </p>
                                            </div>
                                        </div>

                                        {/*  Ολοκληρωμένες Υπηρεσίες */}
                                        <div className="col-12 col-lg-6 col-xxl-3">
                                            <div className='d-flex flex-column align-items-lg-start justify-content-center'>
                                                <div className={`${styles.strhrizoumeSvg} mb-2`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>

                                                <p className="text-white fw-bold lh-1">
                                                    Ολοκληρωμένες Υπηρεσίες
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Προσφατα έργα */}
            <section>
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
                        {/* first image */}
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className={`${styles.prosfataImage}`}>
                                <Image
                                    src="/images/homePage/upsoun-main-image.jpg"
                                    alt="Picture of the author"
                                    style={{ objectFit: "cover", top: 0, left: 0, bottom: 0, right: 0 }}
                                    fill={true}
                                    priority={true}
                                />
                            </div>
                        </div>

                        {/* second image */}
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className={`${styles.prosfataImage}`}>
                                <Image
                                    src="/images/homePage/upsoun-main-image.jpg"
                                    alt="Picture of the author"
                                    style={{ objectFit: "cover", top: 0, left: 0, bottom: 0, right: 0 }}
                                    fill={true}
                                    priority={true}
                                />
                            </div>
                        </div>

                        {/* third image */}
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className={`${styles.prosfataImage}`}>
                                <Image
                                    src="/images/homePage/upsoun-main-image.jpg"
                                    alt="Picture of the author"
                                    style={{ objectFit: "cover", top: 0, left: 0, bottom: 0, right: 0 }}
                                    fill={true}
                                    priority={true}
                                />
                            </div>
                        </div>

                        {/* fourth image */}
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className={`${styles.prosfataImage}`}>
                                <Image
                                    src="/images/homePage/upsoun-main-image.jpg"
                                    alt="Picture of the author"
                                    style={{ objectFit: "cover", top: 0, left: 0, bottom: 0, right: 0 }}
                                    fill={true}
                                    priority={true}
                                />
                            </div>
                        </div>
                      
                    </div>
                </div>

            </section>

            {/* Φόρμα επικοινωνίας */}
            <ContactForm />
        </>
    )
}

export default HomePage