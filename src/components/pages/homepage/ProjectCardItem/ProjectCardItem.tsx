import React from 'react'
import Image from 'next/image'

import styles from './projectCardItem.module.scss'
import WdLink from '@/components/UI/WdLink'

const ProjectCardItem = ({ title, category, img, link }) => {
    return (
        <div className={`${styles.prosfataImage}`}>
            <WdLink href={link}>
                <Image
                    src={img}
                    alt={title}
                    style={{ objectFit: "cover", top: 0, left: 0, bottom: 0, right: 0 }}
                    fill={true}
                    priority={true}
                />
            </WdLink>

            <div className={`${styles.titleContainer}`}>
                <div className={`${styles.leftLine}`}>
                    <WdLink href={link}>
                        <>
                            <p className="mb-1 fs-6 text-muted">{category}</p>
                            <p className='mb-1 h3 fw-bold'>{title}</p>
                        </>
                    </WdLink>
                </div>
            </div>
        </div>
    )
}

export default ProjectCardItem