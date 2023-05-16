'use client';
import React from 'react'
import Image from 'next/image'
import WdLink from '../UI/WdLink';

import styles from './mainImage.module.scss'


const MainImage = ({ title }: { title: string }) => {
    return (
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
                        <h1 className={`${styles.title} mb-4`}>{title}</h1>
                    </div>
                </div>

                {/***  breadcrumbs ***/}
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
                                {title}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default MainImage