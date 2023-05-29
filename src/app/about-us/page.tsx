import React from 'react'
import include from '@/functions/jsonapi/include'
import normalizer from '@/functions/jsonapi/normalizer'


import AboutUsPageClient from '@/components/pages/aboutUsPage/AboutUsPage'


async function getAboutData() {
    const url = `${process.env.NEXT_PUBLIC_DRUPAL_URL}/jsonapi/node/about?include=field_image,field_second_image`

    const res = await fetch(url,
        {
            method: "GET",
            cache: "no-cache",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            next: { revalidate: 1 }
        }
    )

    // Recommendation: handle errors
    if (!res.ok) {
        throw new Error('Failed to fetch data about');
    }

    const data = await res.json();

    return include(data);
}


async function getReviewsData() {

    const url = `${process.env.NEXT_PUBLIC_DRUPAL_URL}/jsonapi/node/reviews`

    const res = await fetch(url,
        {
            method: "GET",
            cache: "no-cache",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            next: { revalidate: 1 }

        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data reviews');
    }

    const data = await res.json();

    return include(data);

}

const AboutUsPage = async () => {

    const aboutPromise = getAboutData()
    const reviewsPromise = getReviewsData()

    const [about_props, reviews_props] = await Promise.allSettled([aboutPromise, reviewsPromise])


    return (
        <>
            <AboutUsPageClient 
                about_props={about_props} 
                reviews_props={reviews_props}    
            />
        </>
    )
}

export default AboutUsPage