'use client';
import ContactForm from '@/components/ContactForm/ContactForm';
import MainImage from '@/components/MainImage/MainImage';
import React from 'react'

const ErgoPageClient = () => {
  return (
    <>
     <MainImage title={'Το Έργο μου'} />

     {/* form */}
     <ContactForm />
    </>
  )
}

export default ErgoPageClient