import React from 'react'
import ErgaPageClient from '@/components/pages/ergaPage/ergaPage'
import include from '@/functions/jsonapi/include'


const project_props = async ()=> {
  const url = `${process.env.NEXT_PUBLIC_DRUPAL_URL}/jsonapi/node/project?include=field_image`

  const res = await fetch(url,
    {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 }
    }
  )

  // Recommendation: handle errors
  if (!res.ok) {
    throw new Error('Failed to fetch data strengths');
  }

  const data = await res.json();

  return include(data);

}


const ErgaPage = async () => {

  const getErgaData =  await project_props()

  return (
    <ErgaPageClient erga={getErgaData} />
  )
}

export default ErgaPage