'use client'
import React from 'react'
import MainImage from '@/components/MainImage/MainImage'
import Image from 'next/image'
import Testimoials from '@/components/Testimonials/Testimoials'
import { find_img_alt } from '@/functions/find_img_alt'

const AboutUsPageClient = ({ about_props, reviews_props }) => {


    const about = about_props.status === 'fulfilled' && about_props.value || []
    const reviews = reviews_props.status === 'fulfilled' && reviews_props.value || []




    const title = about?.data?.[0]?.attributes?.title
    const body = about?.data?.[0]?.attributes?.body.value

    const body_2 = about?.data?.[0]?.attributes?.field_second_body.value

    
    
    const img_1 = `${process.env.NEXT_PUBLIC_DRUPAL_URL}${about?.data?.[0]?.relationships?.field_second_image?.data?.[0]?.attributes?.uri?.url}`
    const alt_img_1 = find_img_alt(about?.fileMeta, about?.data?.[0]?.relationships?.field_second_image?.data?.[0]?.id, title)
    
    const img_2 =`${process.env.NEXT_PUBLIC_DRUPAL_URL}${about?.data?.[0]?.relationships?.field_image?.data?.[1]?.attributes?.uri?.url}`
    const alt_img_2 = find_img_alt(about?.fileMeta, about?.data?.[0]?.relationships?.field_image?.data?.[1]?.id, title)

    const img_3 =`${process.env.NEXT_PUBLIC_DRUPAL_URL}${about?.data?.[0]?.relationships?.field_image?.data?.[0]?.attributes?.uri?.url}`
    const alt_img_3 = find_img_alt(about?.fileMeta, about?.data?.[0]?.relationships?.field_image?.data?.[0]?.id, title)





    

    return (
        <>
            {/* main image */}
            <MainImage title={title} />

            {/* h css einai sto global.scss */}
            <div className="container overflow-hidden">
                <div className="row about-cotainer">

                <div className="col-12 col-lg-6 px-2"   dangerouslySetInnerHTML={{ __html: body }} />
    

                    <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center mt-5 mt-lg-0">
                        <Image
                            src={img_1}
                            width={500}
                            height={400} // 373
                            style={{ objectFit: 'cover' }}
                            alt={alt_img_1}
                        />
                    </div>
                </div>
            </div>
            {/* h css einai sto global.scss */}


            {/* swste xrhmata */}
            <section className='my-5 position-relative py-5' style={{backgroundColor: 'rgba(0,0,0,0.4)'}}>
                <Image
                    src={img_2}
                    alt={alt_img_2}
                    style={{ objectFit: "cover", zIndex: '-1', top: '0', left: '0', bottom: '0', right: '0',  }}
                    fill={true}
                />

                <div className="container">
                    <div className="row my-5">


                        <div className="col-12 col-lg-6"dangerouslySetInnerHTML={{ __html: body_2 }} />


                            {/* <p className="text-primary h5 fw-bold">Σωστε χρηματα, σωστε το περιβάλλον</p>
                            <p className="text-white h1 fw-bold">Επενδύστε στο μέλλον και μειώστε το κόστος των λογαριασμών σας!</p>
                            <p className='text-white'>Κάντε το πρώτο βήμα ζητήστε προσφορά για το δικό σας φωτοβολταϊκό σύστημα!</p> */}
                        {/* </div> */}


                        <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center mt-5 mt-lg-0">
                            <div className="row">
                                {/*  Περιβαλλοντική ευαισθησία */}
                                <div className="col-12 col-md-4 d-flex align-items-center justify-content-center flex-column">
                                    <div className="about-image-section-svg">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                                        </svg>
                                    </div>

                                    <div className='text-white text-center fw-bold mt-3'>
                                        Περιβαλλοντική ευαισθησία
                                    </div>
                                </div>

                                {/*  Εξατομικευμένες Λύσεις */}
                                <div className="col-12 col-md-4 d-flex align-items-center justify-content-center flex-column mt-4 mt-md-0">
                                    <div className="about-image-section-svg">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                        </svg>

                                    </div>
                                    <div className='text-white text-center fw-bold mt-3'>
                                        Εξατομικευμένες Λύσεις
                                    </div>
                                </div>

                                {/* Μέτρα απόδοσης */}
                                <div className="col-12 col-md-4 d-flex align-items-center justify-content-center flex-column mt-4 mt-md-0">
                                    <div className="about-image-section-svg">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                                        </svg>

                                    </div>
                                    <div className='text-white text-center fw-bold mt-3'>
                                        Μέτρα απόδοσης
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="row">
                        {/* contact */}
                        <div className="col-12 col-lg-5">
                            {/* email */}
                            <div className='d-flex mb-4'>
                                <div className='about-image-section-svg-small me-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </div>

                                <a href="mailto:ypsoun@gmail.com" className="text-white">
                                    ypsoun@gmail.com
                                </a>
                            </div>


                            {/* phone */}
                            <div className='d-flex mb-4'>
                                <div className='about-image-section-svg-small me-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                    </svg>
                                </div>

                                <a href="tel:+306941471277" className={`text-white`}>
                                    6941471277
                                </a>
                            </div>

                            {/* location */}
                            <div className="d-flex mb-4">
                                <div className='about-image-section-svg-small me-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                    </svg>
                                </div>

                                <p className={`text-white mb-0`}>
                                    Παπαγιαννη 46, Μανδρα
                                </p>
                            </div>

                        </div>

                        {/* image */}
                        <div className="col-12 col-lg-7 d-none d-lg-block position-relative">
                            <div className='about-image-postion-absolute overflow-hidden'>
                                <Image
                                    src={img_3}
                                    alt={alt_img_3}
                                    style={{ objectFit: "cover" }}
                                    width={750}
                                    height={350}
                                />
                            </div>
                        </div>
                    </div>

                </div>



            </section>

            <Testimoials 
                reviews={reviews}
            />

        </>
    )
}

export default AboutUsPageClient


// {/* <div className="col-12 col-lg-6">



// <div className='about-tile'>Ποιοι Ειμάστε</div>

// <div className='about-subtitlte'>Πίσω από τις Υπηρεσίες Φωτοβολταϊκης Ενέργειας</div>

// {/* H Αποστολή μας */}
// <div className='d-flex my-5'>
//     <div className='about-svg mx-3'>
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
//         </svg>

//         <div className='about_first_svg'></div>

//     </div>

//     <div>
//         <p className="fw-bold h5">Η Αποστολή μας</p>
//         <p className="text-muted mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore alias optio expedita recusandae placeat dolores maxime</p>
//     </div>
// </div>



// {/* Το όρομά μας */}
// <div className='d-flex my-5'>
//     <div className='about-svg mx-3'>
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
//             <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//         </svg>

//     </div>

//     <div>
//         <p className="fw-bold h5">Το όρομά μας</p>
//         <p className="text-muted mb-0 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore alias optio expedita recusandae placeat dolores maxime</p>
//     </div>
// </div>

// {/* <button > */}
// <WdLink href="/contact" className="btn btn-primary fw-bold text-white px-4 py-3">
//     ΖΗΤΗΣΤΕ ΠΡΟΣΦΟΡΑ
// </WdLink>
// {/* </button> */}

// </div> */}