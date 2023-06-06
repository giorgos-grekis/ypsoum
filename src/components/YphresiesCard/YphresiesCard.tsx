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