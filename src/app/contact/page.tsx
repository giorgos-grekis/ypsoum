import React from 'react'
import ContactPageClient from '@/components/pages/contactPage/ContactPage'
import include from '@/functions/jsonapi/include';

async function getContactData() {
  const url = `${process.env.NEXT_PUBLIC_DRUPAL_URL}/jsonapi/node/contact`

  const res = await fetch(url,
    {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      }
    }
  )

  // Recommendation: handle errors
  if (!res.ok) {
    throw new Error('Failed to fetch data contact');
  }

  const data = await res.json();

  return include(data);
}

export async function generateMetadata() {

  const data_props = await getContactData()


  const title =  data_props?.data?.[0]?.attributes?.title
  let string = data_props?.data[0]?.attributes?.body?.value.replace(/<(.|\n)*?>/g, "").trim().substring(0, 150) || ''
  const body = string?.substring(0, Math.min(string.length, string.lastIndexOf(" "))) || title;
  const canonical = `contact`
  const main_img = `${process.env.NEXT_PUBLIC_DRUPAL_URL}${data_props?.data?.[0]?.relationships?.field_image?.data?.[0]?.attributes?.uri?.url}` || ''


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

const ContactPage = async ({params}) => {


  
  const data_props = await getContactData()
  return (
    <ContactPageClient 
      contact_props={data_props}
      params={params}
    />
  )
}



export default ContactPage