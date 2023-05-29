import React from 'react'
import YphresiaPageClient from '@/components/pages/yphresiaPage/YphresiaPage'
import include from '@/functions/jsonapi/include'


async function getServiceData(service) {

    const path = service.join('/')

    const get_drupal_type_res = await fetch(`${process.env.NEXT_PUBLIC_DRUPAL_URL}/wdapi/path`, {
        method: "POST",
        cache: "no-cache",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ path: path })
    })

    const get_drupal_type = await get_drupal_type_res.json()

    const uuid = get_drupal_type?.entity?.uuid?.value

    const url = `${process.env.NEXT_PUBLIC_DRUPAL_URL}/jsonapi/node/service/${uuid}?include=field_image`

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
        throw new Error('Failed to fetch data strengths');
    }

    const data = await res.json();

    return include(data);


}

const YphresiaPage = async ({ params: {yphresia} }) => {

    const data = await getServiceData(yphresia)

    return (
        <>
            <YphresiaPageClient service={data}/>
        </>
    )
}

export default YphresiaPage