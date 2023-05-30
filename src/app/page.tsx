import Image from 'next/image'
import styles from './page.module.scss'
import HomePage from '@/components/pages/homepage/HomePage'

import include from '../functions/jsonapi/include'


const home_page_props = async () => {

  // const url = 'https://admin.steges.gr/jsonapi/node/homepage'
  const url = `${process.env.NEXT_PUBLIC_DRUPAL_URL}/jsonapi/node/homepage`

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
    throw new Error('Failed to fetch data homepage');
  }

  return res.json();

}

const sliders_props = async () => {
  const url = `${process.env.NEXT_PUBLIC_DRUPAL_URL}/jsonapi/node/slider?include=field_image`

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
    throw new Error('Failed to fetch data slider');
  }

  const data = await res.json();

  return include(data);

}

const strengths_props = async () => {
  const url = `${process.env.NEXT_PUBLIC_DRUPAL_URL}/jsonapi/node/strengths?page[limit]=3&page[offset]=0`

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

  return res.json();

}

const project_props = async () => {
  const url = `${process.env.NEXT_PUBLIC_DRUPAL_URL}/jsonapi/node/project?include=field_image`

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

const service_props = async () => {
  const url = `${process.env.NEXT_PUBLIC_DRUPAL_URL}/jsonapi/node/service?include=field_image&page[limit]=4&page[offset]=0`

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

export async function generateMetadata() {



  const homePagePromise = home_page_props()
  const sliderPromise = sliders_props()


  const [data_props_res, slider_props_res] = await Promise.allSettled([homePagePromise, sliderPromise])


  const data_props = data_props_res.status === 'fulfilled' && data_props_res.value || []
  const slider_props = slider_props_res.status === 'fulfilled' && slider_props_res.value || []


  const title = data_props?.data?.[0]?.attributes?.title
  let string = data_props?.data[0]?.attributes?.body?.value.replace(/<(.|\n)*?>/g, "").trim().substring(0, 150) || ''
  const body = string?.substring(0, Math.min(string.length, string.lastIndexOf(" "))) || title;
  const canonical = ``
  const main_img = `${process.env.NEXT_PUBLIC_DRUPAL_URL}${slider_props?.data?.[0]?.relationships?.field_image?.data?.[0]?.attributes?.uri?.url}` || ''


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



export default async function Home() {


  const homePagePromise = home_page_props()
  const sliderPromise = sliders_props()
  const strengthsPromise = strengths_props()
  const projectPromise = project_props()
  const servicePromise = service_props()


  const [homePageProps, strengthsProps, sliderProps, projectProps, serviceProps] = await Promise.allSettled([homePagePromise, strengthsPromise, sliderPromise, projectPromise, servicePromise])




  return (
    <main className={''}>
      <HomePage
        homePageProps={homePageProps}
        sliderProps={sliderProps}
        strengthsProps={strengthsProps}
        projectProps={projectProps}
        serviceProps={serviceProps}
      />
    </main>
  )
}


// export async function getStaticProps() {
//   const urlHomepage = `${process.env.NEXT_PUBLIC_DRUPAL_URL}/jsonapi/node/homepage?include=field_image`;
// }