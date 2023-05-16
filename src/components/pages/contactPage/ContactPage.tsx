'use client'
import React from 'react'
import Image from 'next/image'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import styles from './contactPage.module.scss'
import WdLink from '@/components/UI/WdLink'


const ContactPageClient = () => {
    return (
        <>
            {/* main image */}
            <section>
                <div style={{ position: 'relative', top: '0', left: '0', bottom: '0', right: '0', width: '100%', height: '350px' }}>
                    <Image
                        src="/images/homePage/upsoun-main-image.jpg"
                        alt="Contact page image"
                        style={{ objectFit: "cover" }}
                        fill={true}
                    />

                    <div className={`${styles.titleContainer}`}>
                        <div className={`container`}>
                            <h1 className={`${styles.title} mb-4`}>Επικοινωνία</h1>
                        </div>
                    </div>


                    <div className={`${styles.breadcrumbsContainer}`}>
                        <div className={`container`}>
                            <ul className={`${styles.breadcrumbsUl}`}>
                                <li className={`${styles.breadcrumbs}`}>
                                    <WdLink href='/' className={`${styles.link}`}>
                                        Αρχική
                                    </WdLink>
                                </li>
                                <li className={`sec-title me-3 ms-2 mb-0`}></li>
                                <li className={`${styles.breadcrumbs} ${styles.active}`}>
                                    Επικοινωνία
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

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
            <section className="container-fuild position-relative">

                <div className="container" style={{ maxWidth: '750px' }}>
                    <div className="row my-5">
                        <p className={`${styles.text}`}>
                            Επενδύστε στο μέλλον και μειώστε το κόστος των λογαριασμών σας!
                        </p>

                        <p className={`${styles.ctaMsg}`}>Κάντε το πρώτο βήμα και ζητήστε προσφορά για το δικό σας φωτοβολταϊκο σύστημα!</p>

                        <Form>
                            {/* name -- email */}
                            <div className="row">
                                {/* name */}
                                <div className="col-12 col-md-6">
                                    <Form.Group className="mb-3" controlId="formName">
                                        <Form.Label className="text-muted">Το όνομά σας</Form.Label>
                                        <Form.Control type="text" placeholder="Το όνομά σας" />
                                    </Form.Group>
                                </div>

                                {/* email */}
                                <div className="col-12 col-md-6">
                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Label className="text-muted">Το email σας</Form.Label>
                                        <Form.Control type="email" placeholder="Το email σας" />
                                    </Form.Group>
                                </div>
                            </div>

                            {/*  thema -- phone */}
                            <div className="row">
                                {/* thema */}
                                <div className="col-12 col-md-6">
                                    <Form.Group className="mb-3" controlId="formΤhema">
                                        <Form.Label className="text-muted">Το Θέμα</Form.Label>
                                        <Form.Control type="text" placeholder="Το Θέμα" />
                                    </Form.Group>
                                </div>

                                {/* phone */}
                                <div className="col-12 col-md-6">
                                    <Form.Group className="mb-3" controlId="formPhone">
                                        <Form.Label className="text-muted">Τηλέφωνο Επικοινωνίας</Form.Label>
                                        <Form.Control type="text" placeholder="Τηλέφωνο Επικοινωνίας" />
                                    </Form.Group>
                                </div>
                            </div>

                            {/* thema */}
                            <div className="row">
                                {/* thema */}
                                <div className="col-12">
                                    <Form.Group className="mb-3" controlId="formMessage">
                                        <Form.Label className="text-muted">Το μύνημά σας</Form.Label>
                                        <Form.Control as="textarea" rows={5} />
                                    </Form.Group>
                                </div>
                            </div>

                            {/* submit */}
                            <div className='d-flex justify-content-center'>
                                <Button variant="primary" type="submit" className={`${styles.submitButton}`}>
                                    ΖΗΤΗΣΤΕ ΠΡΟΣΦΟΡΑ
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>

                <div className={`${styles.ImageContainerForm}`}>
                    <Image
                        src={'/images/contact-fom_image.png'}
                        width={421}
                        height={373}
                        alt={'an image'}
                    />
                </div>
            </section>
        </>
    )
}

export default ContactPageClient