'use client'
import React from 'react'
import MainImage from '@/components/MainImage/MainImage'

import styles from './uphresiaPage.module.scss'
import WdLink from '@/components/UI/WdLink'
import Image from 'next/image'

const YphresiaPageClient = ({service}) => {

    console.log('service: ', service?.data?.[0]?.attributes?.field_second_body?.value);

    const ul = service?.data?.[0]?.attributes?.field_second_body?.value
    

    return (
        <>

            {/* main image */}
            <MainImage title={'Μελέτη Φωτοβολταϊκων'} />

            <section>
                <div className="container">
                    <div className="row my-5 py5">

                        {/* first column */}
                        <div className="col-12 col-lg-4 order-1 order-lg-0">

                            {/* τύπος υπηρεσίας */}
                            <div className={`${styles.servicesContainer}`}>

                                <div className={styles.servicesTitle}>Τύπος υπηρεσίας</div>

                                <div className={`${styles.servicesLink} ${styles.active}`}>
                                    <WdLink href={`/`}>
                                        τύπος_1
                                    </WdLink>
                                </div>

                                <div className={`${styles.servicesLink}`}>
                                    <WdLink href={`/`}>
                                        τύπος_2
                                    </WdLink>
                                </div>

                                <div className={`${styles.servicesLink}`}>
                                    <WdLink href={`/`}>
                                        τύπος_3
                                    </WdLink>
                                </div>

                                <div className={`${styles.servicesLink}`}>
                                    <WdLink href={`/`}>
                                        τύπος_4
                                    </WdLink>
                                </div>

                                <div className={`${styles.servicesLink}`}>
                                    <WdLink href={`/`}>
                                        τύπος_5
                                    </WdLink>
                                </div>



                            </div>

                            {/* Φόρμα Επικοινωνίας */}
                            <div className={`${styles.contactFormContainer} mt-5`}>
                                <div className='text-white fw-bold'>
                                    Επενδύστε στο μέλλον & μειώστε το κόστς των λογαριασμών σας!

                                    <form>

                                        <div className={``}>
                                            <input type="text" placeholder="Όνομα" className={`${styles.formInput}`} />
                                        </div>

                                        <div className={``}>
                                            <input type="text" placeholder="Τηλέφωνο - email" className={`${styles.formInput}`} />
                                        </div>

                                        <div className={``}>
                                            <input type="text" placeholder="Θέμα" className={`${styles.formInput}`} />
                                        </div>

                                        <div className={``}>
                                            <textarea placeholder="Κείμενο" className={`${styles.formInput}`} />
                                        </div>

                                        <div className='d-flex justify-content-center align-items-center mt-3'>
                                            <button type='submit' className="btn btn-secondary text-white fw-bold py-3 px-4">
                                                ΡΩΤΗΣΤΕ ΜΑΣ
                                            </button>
                                        </div>

                                    </form>
                                </div>
                            </div>

                        </div>

                        {/* second column */}
                        <div className="col-12 col-lg-8 order-0 order-lg-1">
                            <div className={styles.imageContainer}>
                                <Image
                                    src="/images/homePage/upsoun-main-image.jpg"
                                    alt="Contact page image"
                                    style={{ objectFit: "cover" }}
                                    fill={true}
                                />
                            </div>

                            <p className='text-muted mt-1'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione deserunt eveniet iste dolorem quia natus nostrum, illum molestias maiores harum aspernatur vel, temporibus voluptas. Iusto at dignissimos minima minus quibusdam.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione deserunt eveniet iste dolorem quia natus nostrum, illum molestias maiores harum aspernatur vel, temporibus voluptas. Iusto at dignissimos minima minus quibusdam.
                            </p>

                            <div className="row my-5">
                                {/* επισκόπηση υπηρεσίας */}
                                <div className="col-12 col-md-6 pb-2 pb-md-5">
                                    <p className='fw-bold fs-5'>
                                        Επισκόπηση Υπηρεσίας
                                    </p>

                                    <div 
                                        className='ulWithSvg'
                                        dangerouslySetInnerHTML={{__html: ul}}
                                    />

                                    {/* <ul className='ulWithSvg'>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                                                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                                                <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                                            </svg>
                                            <span className="text-muted ms-2">
                                                dfasfsdaf
                                            </span>
                                        </li>

                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                                                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                                                <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                                            </svg>
                                            <span className="text-muted ms-2">
                                                dfasfsdaf
                                            </span>
                                        </li>

                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                                                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                                                <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                                            </svg>
                                            <span className="text-muted ms-2">
                                                dfasfsdaf
                                            </span>
                                        </li>

                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                                                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                                                <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                                            </svg>
                                            <span className="text-muted ms-2">
                                                dfasfsdaf
                                            </span>
                                        </li>

                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                                                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                                                <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                                            </svg>
                                            <span className="text-muted ms-2">
                                                dfasfsdaf
                                            </span>
                                        </li>
                                    </ul> */}

                                </div>


                                <div className="col-12 col-md-6">
                                    <div style={{ width: '100%', height: '100%', position: 'relative', minHeight: '300px' }}>
                                        <Image
                                            src="/images/homePage/upsoun-main-image.jpg"
                                            alt="Contact page image"
                                            style={{ objectFit: "cover" }}
                                            fill={true}
                                        />
                                    </div>
                                </div>
                            </div>


                            <p className="text-muted">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, atque labore officiis reiciendis, quibusdam autem placeat, rerum veritatis aspernatur molestiae eligendi! Porro inventore soluta magnam in at ipsum ullam. Autem.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, atque labore officiis reiciendis, quibusdam autem placeat, rerum veritatis aspernatur molestiae eligendi! Porro inventore soluta magnam in at ipsum ullam. Autem.
                            </p>

                            <p className="text-muted">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, atque labore officiis reiciendis, quibusdam autem placeat, rerum veritatis aspernatur molestiae eligendi! Porro inventore soluta magnam in at ipsum ullam. Autem.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, atque labore officiis reiciendis, quibusdam autem placeat, rerum veritatis aspernatur molestiae eligendi! Porro inventore soluta magnam in at ipsum ullam. Autem.
                            </p>


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