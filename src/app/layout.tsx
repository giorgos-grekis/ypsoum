import { ReactNode } from 'react'

import { Inter } from 'next/font/google'

import Header from '@/components/Layout/Header/Header'
import Footer from '@/components/Layout/Footer/Footer'


import './globals.scss'
import include from '@/functions/jsonapi/include'


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
      },
      next: { revalidate: 1 }
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
      },
      next: { revalidate: 1 }
    }
  )

  // Recommendation: handle errors
  if (!res.ok) {
    throw new Error('Failed to fetch data getAllServicesData');
  }

  const data = await res.json();

  return data;
}



export default async function RootLayout({ children }: { children: ReactNode }) {

  const all_services_promise = getAllServicesData()
  const all_project_promise = getAllProjectData()

  const [services_props, project_props] = await Promise.allSettled([all_services_promise, all_project_promise])



  return (
    <html lang="el">

      <body>
        <Header
          services_props={services_props}
          project_props={project_props}
        />
        {children}
        <Footer />
      </body>

    </html>
  )
}
