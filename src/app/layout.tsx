import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import Header from '@/components/Layout/Header/Header'
import Footer from '@/components/Layout/Footer/Footer'

import './globals.scss'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Αρχική',
  description: 'Αρχική',
}

async function getAllServicesData() {
  const url = `${process.env.NEXT_PUBLIC_DRUPAL_URL}/jsonapi/node/service/?fields[node--service]=drupal_internal__nid,title,path`

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
    throw new Error('Failed to fetch data getAllServicesData');
  }

  const data = await res.json();

  return data;
}


async function getAllProjectData() {
  const url = `${process.env.NEXT_PUBLIC_DRUPAL_URL}/jsonapi/node/project/?fields[node--project]=drupal_internal__nid,title,path`

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
    throw new Error('Failed to fetch data getAllServicesData');
  }

  const data = await res.json();

  return data;
}


async function getContactData() {
  const url = `${process.env.NEXT_PUBLIC_DRUPAL_URL}/jsonapi/node/contact?fields[node--contact]=field_email,field_location,field_phone`

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
    throw new Error('Failed to fetch data cotact data footer');
  }

  const data = await res.json();

  return data;
}


export default async function RootLayout({ children }: { children: ReactNode }) {

  const all_services_promise = getAllServicesData()
  const all_project_promise = getAllProjectData()
  const footer_cotact_promise = getContactData()

  const [services_props, project_props, contact_props] = await Promise.allSettled([all_services_promise, all_project_promise, footer_cotact_promise])


  


  return (
    <html lang="el">

      <body>
        <Header
          services_props={services_props}
          project_props={project_props}
        />
        {children}
        <Footer
          contact_props={contact_props}
        />
      </body>

    </html>
  )
}
