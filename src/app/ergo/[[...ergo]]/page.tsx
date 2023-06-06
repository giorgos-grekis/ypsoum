import React from 'react'

import ErgoPageClient from '@/components/pages/ergoPage/ergoPage'
import include from '@/functions/jsonapi/include'


async function getErgoData(ergo) {

  const path = ergo.join('/')

  const get_drupal_type_res = await fetch(`${process.env.NEXT_PUBLIC_DRUPAL_URL}/wdapi/path`, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({path:path})
  })

  const get_drupal_type = await get_drupal_type_res.json()

  const uuid  = get_drupal_type?.entity?.uuid?.value  

  const url = `${process.env.NEXT_PUBLIC_DRUPAL_URL}/jsonapi/node/project/${uuid}?include=field_image`

  const res = await fetch(url,
    {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    }
  )

  // Recommendation: handle errors
  if (!res.ok) {
    throw new Error('Failed to fetch data strengths');
  }

  const data = await res.json();

  return include(data);


}


export async function generateMetadata({ params: { ergo } }) {

  const data_props = await getErgoData(ergo)


  const title = data_props?.data?.[0]?.attributes?.title
  let string = data_props?.data[0]?.attributes?.body?.value.replace(/<(.|\n)*?>/g, "").trim().substring(0, 150) || ''
  const body = string?.substring(0, Math.min(string.length, string.lastIndexOf(" "))) || title;
  const canonical = `ergo/${ergo.join('/')}`
  const main_img = `${process.env.NEXT_PUBLIC_DRUPAL_URL}${data_props?.data?.[0]?.relationships?.field_image?.data?.[0]?.attributes?.uri?.url}`


  return {
      title: `${`${title} | ${process.env.NEXT_PUBLIC_SITE_NAME}`}`,
      description: body,
      alternates: {
          canonical: `${process.env.NEXT_PUBLIC_NEXT_URL}/${canonical}`,
      },
      openGraph: {
          title: `${`${title} | ${process.env.NEXT_PUBLIC_SITE_NAME}`}`,
          description: body,
          url: `${process.env.NEXT_PUBLIC_NEXT_URL}/${canonical}`,
          siteName: `${process.env.NEXT_PUBLIC_SITE_NAME}`,
          images: [
              {
                  url: main_img,
                  width: 800,
                  height: 600,
                  alt: title,
              },
          ],
          type: 'website',
      },
  }
}


const EgoPage = async ({ params: { ergo } }) => {


  const data = await getErgoData(ergo)  

  // url -> https://dipsum.webdimension.gr/wdapi/path 
  // method -> post
  // body  ->  "path": "/node/13"


  return (
    <>
      <ErgoPageClient ergo={data}/>
    </>
  )
}

export default EgoPage