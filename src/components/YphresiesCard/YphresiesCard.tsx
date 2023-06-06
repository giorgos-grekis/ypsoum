import React from 'react'
import styles from './yphresiesCard.module.scss'
import WdLink from '../UI/WdLink'
import Image from 'next/image'


const YphresiesCard = ({ title, img, body, icon }) => {
    return (
        <>
            <div className={`${styles.yphresiesCardContainer}`}>
                {/* images -svg */}
                <div>
                    <div className={`${styles.yphresiesImageCard}`}>
                        <Image
                            // src="/images/homePage/upsoun-main-image.jpg"
                            src={img}
                            alt={title}
                            style={{ objectFit: "cover", top: '0', left: '0', right: '0', bottom: '0' }}
                            fill={true}
                        />
                        <div className={styles.onhoverLayout}/>
                    </div>
                    <div className={`d-flex justify-content-center`}>

                        <div className={`${styles.yphresiesSvgCardContainer} overflow-hidden`}>
                            <div className={`${styles.yphresiesSvgCard}`}>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg> */}
                                {icon}

                            </div>
                        </div>


                    </div>
                </div>

                {/* text & link */}
                <div className='text-center '>

                    {/* title */}
                    <p className='fw-bold h5 mt-4 text-black'>
                        {title}
                    </p>

        
                    <div className={`text-muted ${styles.body}`} style={title.length > 20 ? { ['--lines-to-show' as string]: '2' } : {}} dangerouslySetInnerHTML={{ __html: body }} />

                    <WdLink href='/'>
                        <div className={`${styles.arrowLink} mt-3`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </WdLink>
                </div>

            </div>
        </>
    )
}

export default YphresiesCard