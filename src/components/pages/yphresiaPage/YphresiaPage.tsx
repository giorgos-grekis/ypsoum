'use client'
import React from 'react'
import MainImage from '@/components/MainImage/MainImage'

import { usePathname } from 'next/navigation';

import styles from './uphresiaPage.module.scss'
import WdLink from '@/components/UI/WdLink'
import Image from 'next/image'
import { find_img_alt } from '@/functions/find_img_alt'
import { find_link } from '@/functions/find_link'

import ContactForm from '@/components/ContactForm/ContactForm';




const YphresiaPageClient = ({ service_props, all_services_props }) => {


    const pathname = usePathname()

    const service = service_props.status === 'fulfilled' && service_props.value || []
    const all_services = all_services_props.status === 'fulfilled' && all_services_props.value || []


    const title = service?.data?.[0]?.attributes?.title
    const ul = service?.data?.[0]?.attributes?.field_second_body?.value

    const main_img = `${process.env.NEXT_PUBLIC_DRUPAL_URL}${service?.data?.[0]?.relationships?.field_image?.data?.[0]?.attributes?.uri?.url}`
    const alt_main_img = find_img_alt(service.fileMeta, service?.data?.[0]?.relationships?.field_image?.data?.[0].id, title)
    const body_1 = service?.data?.[0]?.attributes?.body?.value

    const secondary_img = `${process.env.NEXT_PUBLIC_DRUPAL_URL}${service?.data?.[0]?.relationships?.field_second_image?.data?.[0]?.attributes?.uri?.url}`
    const alt_secondary_img = find_img_alt(service.fileMeta, service?.data?.[0]?.relationships?.field_second_image?.data?.[0].id, title)

    const body_2 = service?.data?.[0]?.attributes?.field_third_body?.value


    return (
        <>

            {/* main image */}
            <MainImage title={title} />

            <section>
                <div className="container">
                    <div className="row my-5 py5">

                        {/* first column */}
                        <div className="col-12 col-lg-4 order-1 order-lg-0">

                            {/* τύπος υπηρεσίας */}
                            <div className={`${styles.servicesContainer}`}>

                                <div className={styles.servicesTitle}>Τύπος υπηρεσίας</div>

                                {all_services?.data.map((service, index) => {

                                    const title = service?.attributes?.title
                                    const link = find_link(service, 'yphresia')

                                    return (<WdLink href={link} className={`${styles.servicesLink} ${link === pathname ? styles.active : ''}`} key={index}>
                                        {title}
                                    </WdLink>)
                                })}

                            </div>


                            {/* Φόρμα Επικοινωνίας sidebar={true} to show sidebar form */}
                            <ContactForm
                                sidebar={true}
                            />

                        </div>

                        {/* second column */}
                        <div className="col-12 col-lg-8 order-0 order-lg-1">
                            <div className={styles.imageContainer}>
                                <Image
                                    src={main_img}
                                    alt={alt_main_img}
                                    style={{ objectFit: "cover" }}
                                    fill={true}
                                />
                            </div>

                            <div
                                className='text-muted mt-3'
                                dangerouslySetInnerHTML={{ __html: body_1 }}
                            />


                            <div className="row my-5">
                                {/* επισκόπηση υπηρεσίας */}
                                <div className="col-12 col-md-6 pb-2 pb-md-5">
                                    <p className='fw-bold fs-5'>
                                        Επισκόπηση Υπηρεσίας
                                    </p>

                                    <div
                                        className='ulWithSvg'
                                        dangerouslySetInnerHTML={{ __html: ul }}
                                    />


                                </div>


                                <div className="col-12 col-md-6">
                                    <div style={{ width: '100%', height: '100%', position: 'relative', minHeight: '300px' }}>
                                        <Image
                                            src={secondary_img}
                                            alt={alt_secondary_img}
                                            style={{ objectFit: "cover" }}
                                            fill={true}
                                        />
                                    </div>
                                </div>
                            </div>


                            <div
                                className="text-muted"
                                dangerouslySetInnerHTML={{ __html: body_2 }}
                            />




                            {/* icons */}

                            <div className="row my-5">

                                {/* Λύσεις Ενεργειακής Απόδοσης */}
                                <div className="col-6 col-md-3">
                                    <div className="d-flex flex-column align-items-start justify-content-cetner">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} fill="var(--secondary-color)" className="bi bi-plugin" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M1 8a7 7 0 1 1 2.898 5.673c-.167-.121-.216-.406-.002-.62l1.8-1.8a3.5 3.5 0 0 0 4.572-.328l1.414-1.415a.5.5 0 0 0 0-.707l-.707-.707 1.559-1.563a.5.5 0 1 0-.708-.706l-1.559 1.562-1.414-1.414 1.56-1.562a.5.5 0 1 0-.707-.706l-1.56 1.56-.707-.706a.5.5 0 0 0-.707 0L5.318 5.975a3.5 3.5 0 0 0-.328 4.571l-1.8 1.8c-.58.58-.62 1.6.121 2.137A8 8 0 1 0 0 8a.5.5 0 0 0 1 0Z" />
                                            </svg>
                                        </div>

                                        <p className="fw-bold lh-1 mt-3">
                                            Λύσεις Ενεργειακής Απόδοσης
                                        </p>
                                    </div>
                                </div>

                                {/* Θέση Σε Λειτουργία Ηλιακού Πάνελ */}
                                <div className="col-6 col-md-3">
                                    <div className="d-flex flex-column align-items-start justify-content-cetner">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} fill="var(--secondary-color)" className="bi bi-building" viewBox="0 0 16 16">
                                                <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
                                                <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z" />
                                            </svg>
                                        </div>

                                        <p className="fw-bold lh-1 mt-3">
                                            Θέση Σε Λειτουργία Ηλιακού Πάνελ
                                        </p>
                                    </div>
                                </div>


                                {/* Γεννήτρια Εφεδρικών Μπαταριών */}
                                <div className="col-6 col-md-3">
                                    <div className="d-flex flex-column align-items-start justify-content-cetner">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} fill="var(--secondary-color)" className="bi bi-battery-charging" viewBox="0 0 16 16">
                                                <path d="M9.585 2.568a.5.5 0 0 1 .226.58L8.677 6.832h1.99a.5.5 0 0 1 .364.843l-5.334 5.667a.5.5 0 0 1-.842-.49L5.99 9.167H4a.5.5 0 0 1-.364-.843l5.333-5.667a.5.5 0 0 1 .616-.09z" />
                                                <path d="M2 4h4.332l-.94 1H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.38l-.308 1H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                                                <path d="M2 6h2.45L2.908 7.639A1.5 1.5 0 0 0 3.313 10H2V6zm8.595-2-.308 1H12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9.276l-.942 1H12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.405z" />
                                                <path d="M12 10h-1.783l1.542-1.639c.097-.103.178-.218.241-.34V10zm0-3.354V6h-.646a1.5 1.5 0 0 1 .646.646zM16 8a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z" />
                                            </svg>
                                        </div>

                                        <p className="fw-bold lh-1 mt-3">
                                            Γεννήτρια Εφεδρικών Μπαταριών
                                        </p>
                                    </div>
                                </div>


                                {/* Προστασία Από Υπερτάσεις Ολόκληρου Του Σπιτιού */}
                                <div className="col-6 col-md-3">
                                    <div className="d-flex flex-column align-items-start justify-content-cetner">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} fill="var(--secondary-color)" className="bi bi-house-door" viewBox="0 0 16 16">
                                                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
                                            </svg>
                                        </div>

                                        <p className="fw-bold lh-1 mt-3">
                                            Προστασία Από Υπερτάσεις Ολόκληρου Του Σπιτιού
                                        </p>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default YphresiaPageClient