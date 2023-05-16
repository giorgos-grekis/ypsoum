'use client'
import React from 'react'

import MainImage from '@/components/MainImage/MainImage';
import ContactForm from '@/components/ContactForm/ContactForm';


import styles from './contactPage.module.scss'



const ContactPageClient = () => {
    return (
        <>
            {/* main image */}
            <MainImage  title='Επικοινωνία'/>

            {/* card section */}
            <section className="container">
                <div className={`row ${styles.cardSectionContainer}`}>

                    {/* Τηλεφωνο */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className={`${styles.card}`}>
                            <div className={`${styles.svg}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                                </svg>
                            </div>

                            <p className={`${styles.cardTitle}`}>Τηλεφωνο</p>

                            <a href="tel:+306941471277" className={`${styles.cardText} text-muted`}>
                                6941471277
                            </a>
                        </div>
                    </div>

                    {/* Διεύθυνση */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className={`${styles.card}`}>
                            <div className={`${styles.svg}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                                </svg>
                            </div>

                            <p className={`${styles.cardTitle}`}>Διεύθυνση</p>

                            <p className={`${styles.cardText} text-muted mb-0`}>
                                Παπαγιαννη 46, Μανδρα
                            </p>
                        </div>
                    </div>

                    {/* email */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className={`${styles.card}`}>
                            <div className={`${styles.svg}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                                </svg>
                            </div>

                            <p className={`${styles.cardTitle}`}>Email</p>

                            <a href="mailto:ypsoun@gmail.com" className="text-muted">
                                ypsoun@gmail.com
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            {/* form */}
            <ContactForm />
        </>
    )
}

export default ContactPageClient