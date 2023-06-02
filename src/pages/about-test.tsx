import Image from 'next/image'
import React from 'react'

const AboutTestPage = () => {

  return (
    <main className={''}>
      <Image
        src={'/images/joshua-hoehne-WeSWsnVQYqU-unsplash.jpg'}
        width={1920}
        height={400}
        alt={'alt'}
        style={{ objectFit: "cover", maxWidth: '100%', height: 'auto' }}

      />

    </main>
  )
}

export default AboutTestPage