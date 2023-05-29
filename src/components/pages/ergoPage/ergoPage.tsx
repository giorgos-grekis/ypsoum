'use client';
import React from 'react'
import ContactForm from '@/components/ContactForm/ContactForm';
import MainImage from '@/components/MainImage/MainImage';
import Image from 'next/image';

import styles from './ergo.module.scss';

const ErgoPageClient = ({ ergo }) => {


  const title = ergo?.data?.[0]?.attributes?.title

  const body = ergo?.data?.[0]?.attributes?.body?.value

  const img_drupal_part = ergo?.data?.[0]?.relationships?.field_image?.data?.[0]?.attributes?.uri?.url
  const img = `${process.env.NEXT_PUBLIC_DRUPAL_URL}${img_drupal_part}`

  const category = ergo?.data?.[0]?.attributes?.field_category
  const client = ergo?.data?.[0]?.attributes?.field_client
  const date = ergo?.data?.[0]?.attributes?.field_date
  const cost = ergo?.data?.[0]?.attributes?.field_cost

  const challenges = ergo?.data?.[0]?.attributes?.field_challenges
  const solutions = ergo?.data?.[0]?.attributes?.field_solutions





  return (
    <>
      {/* main image */}
      <MainImage title={title} />


      {/* main contect */}
      <section>
        <div className="container">
          {/* image */}
          <div className={`row ${styles.imageContainer} mx-0 mx-md-5`}>
            <Image
              src={img}
              width={421}
              height={400} // 373
              style={{ objectFit: 'cover' }}
              alt={title}
            />
          </div>

          {/* details summary */}
          <div className={`row ${styles.detailsContainer} mx-0 mx-md-5`}>

            {/* tag */}
            <div className="col-12 col-md-6 col-lg-3 d-flex align-items-center justify-content-center">
              <div className={`${styles.svg}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                </svg>
              </div>

              <div>
                <p className={`${styles.detailsTitle}`}>Κατηγορία:</p>
                <p className={`${styles.detailsCategory}`}>
                  {category}
                </p>
              </div>
            </div>


            {/* Client */}
            <div className="col-12 col-md-6 col-lg-3 d-flex align-items-center justify-content-center">
              <div className={`${styles.svg}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>

              <div>
                <p className={`${styles.detailsTitle}`}>Πελάτης:</p>
                <p className={`${styles.detailsCategory}`}>
                  {client}
                </p>
              </div>
            </div>


            {/* Date */}
            <div className="col-12 col-md-6 col-lg-3 d-flex align-items-center justify-content-center">
              <div className={`${styles.svg}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

              </div>

              <div>
                <p className={`${styles.detailsTitle}`}>Ημερομηνία:</p>
                <p className={`${styles.detailsCategory}`}>
                  {date}
                </p>
              </div>
            </div>


            {/* Cost */}
            <div className="col-12 col-md-6 col-lg-3 d-flex align-items-center justify-content-center">
              <div className={`${styles.svg}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

              </div>

              <div>
                <p className={`${styles.detailsTitle}`}>Κόστος:</p>
                <p className={`${styles.detailsCategory}`}>
                  {cost}€
                </p>
              </div>
            </div>

          </div>

          {/* details */}
          <div className="row my-5 mx-0 mx-md-5">
            <div className="col-12">
              <h2 className={`${styles.projectSummaryTitle} mb-4`}>Περίληψη Έργου</h2>


              <div
                className={`${styles.projectSummaryBody} mb-4 text-muted`}
                dangerouslySetInnerHTML={{ __html: body }}
              />


            </div>
          </div>


          {/* Προκλήσεις -- Λύσεις */}
          <div className="row mx-0 mx-md-5 h-100">
            {/* Προκλήσεις */}
            <div className="col-12 col-md-6 mb-4 mb-md-0 d-flex">
              <div className={`${styles.detailsCardContainer} w-100`}>
                <h3 className={`${styles.detailsCardTitle}`}>Προκλήσεις</h3>

           
                <div className={`ulWithSvg `}>
                  <ul>
                    {challenges.map((challenge, index) => <li key={index} dangerouslySetInnerHTML={{ __html: challenge.value }} />)}
                  </ul>
                </div>

              </div>
            </div>

            {/* Λύσεις */}
            <div className="col-12 col-md-6 d-flex">
              <div className={`${styles.detailsCardContainer} w-100`}>
                <h3 className={`${styles.detailsCardTitle}`}>Λύσεις</h3>

                 <div className={`ulWithSvg `}>
                  <ul>
                    {solutions.map((solution, index) => <li key={index} dangerouslySetInnerHTML={{ __html: solution.value }} />)}
                  </ul>
                </div>

              </div>
            </div>

          </div>

          {/* last Row */}
          <div className={`row mt-5 ${styles.lastRow}`}>
            <div className="col-12 d-flex justify-content-end">

              <div className="d-flex justify-content-center align-items-center">

                <div className="me-2">
                  <p className="mb-0 fw-bold">
                    Κάντο να Συμβεί!
                  </p>
                  <p className="mb-0 text-muted">
                    {date}
                  </p>
                </div>

                <div>
                  <Image
                    src={img}
                    width={80}
                    height={80} // 373
                    style={{ objectFit: 'cover' }}
                    alt={title}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* form */}
      <ContactForm />
    </>
  )
}

export default ErgoPageClient