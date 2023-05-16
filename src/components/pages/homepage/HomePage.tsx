import React from 'react'



import Image from 'next/image';

import styles from './homePage.module.scss';

const HomePage = () => {




    return (
        <div style={{ height: '100vh' }}>

            {/* hero image */}
            <div className={`${styles.mainImageContainer}`}>
                <Image
                    src="/images/homePage/upsoun-main-image.jpg"
                    // width={500}
                    // height={500}
                    alt="Picture of the author"
                    style={{ objectFit: "cover" }}
                    fill={true}
                    priority={true}
                />
                {/* title */}
                <div className={`${styles.titleContainer}`}>

                    <div className={`${styles.text}`}>
                        Ανανεώσιμη . Φιλική . Αποδοτική
                    </div>

                    <h1>
                        Φωτοβολταϊλα: Ο οικονομικός τρόπος για ένα πιο πράσινο μέλλον!
                    </h1>
                </div>
            </div>





        </div>
    )
}

export default HomePage