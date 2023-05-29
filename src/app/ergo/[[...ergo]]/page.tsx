import React from 'react'

import ErgoPageClient from '@/components/pages/ergoPage/ergoPage'


async function getErgoDate(ergo) {

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

  return get_drupal_type

}


const EgoPage = async ({ params: { ergo } }) => {


  const data = await getErgoDate(ergo)

  console.log('data: ', data);
  

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