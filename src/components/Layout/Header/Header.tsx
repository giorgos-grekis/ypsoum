'use client'
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './header.module.scss';
import WdLink from '@/components/UI/WdLink';
import { find_link } from '@/functions/find_link';
import Image from 'next/image';

const Header = ({ services_props, project_props }) => {


  const pathname = usePathname()!

  const services = services_props.status === 'fulfilled' && services_props.value || []
  const projects = project_props.status === 'fulfilled' && project_props.value || []



  // add scroll event listener
  useEffect(() => {

    const header = document.getElementById('navbar')!;
    const desktop_mobile = document.getElementById('logo-desktop')!;
    const logo_mobile = document.getElementById('logo-mobile')!;


    const menuOnScroll = () => {

      let st = window.pageYOffset || document.documentElement.scrollTop;

      if (st >= 200) {
        header.classList.add(`${styles.headerScroll}`)
        // if scroll remove bootstap class breakpoints to show right logo
        desktop_mobile.classList.remove('d-lg-block')
        logo_mobile.classList.remove('d-lg-none')
      } else {
        header.classList.remove(`${styles.headerScroll}`)
        // if scroll add bootstap class breakpoints to show right logo
        desktop_mobile.classList.add('d-lg-block')
        logo_mobile.classList.add('d-lg-none')
      }

    }

    document.addEventListener('scroll', menuOnScroll);

    return () => {
      document.removeEventListener('scroll', menuOnScroll);
    }

  })


  return (
    <header className={`${styles.headerContainer}`} id='navbar'>
      <Navbar bg="light" expand="lg">
        <div className="container-fluid">

          {/* image ration *3.12 */}
          <Navbar.Brand className={styles.logoContainer}>
            <WdLink href="/">
              {/* Logo */}
              <>
                <div className="d-none d-lg-block" id='logo-desktop'>
                  <Image
                    src='/images/YPSOUN.png'
                    alt='YPSOUN Logo Image'
                    width={128} // 256
                    height={41}  // 82 
                  />
                </div>

                <div className='d-block d-lg-none' id='logo-mobile'>
                  <Image
                    src='/images/logo-moblie.png'
                    alt='YPSOUN Logo Image mobile'
                    width={27.6} // 60
                    height={30}  // 65 
                  />
                </div>
              </>
            </WdLink>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">

              {/* ΑΡΧΙΚΗ */}
              <Nav.Item className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}>
                <WdLink href={`/`} className={`${styles.link} nav-link`}>
                  ΑΡΧΙΚΗ
                </WdLink>
              </Nav.Item>

              {/* ΥΠΗΡΕΣΙΕΣ */}
              <NavDropdown title="ΥΠΗΡΕΣΙΕΣ" id="nav-dropdown-ΥΠΗΡΕΣΙΕΣ" className={`${styles.link} ${pathname.startsWith('/yphresia') ? styles.active : ''}`}>

                {services.data.map((service, index) => {

                  const title = service?.attributes?.title
                  const link = find_link(service, 'yphresia')

                  return (<WdLink href={link} className={`${styles.simpleLink} dropdown-item`} key={index}>
                    {title}
                  </WdLink>)

                })}

              </NavDropdown>

              {/*  ΤΑ ΕΡΓΑ ΜΑΣ */}
              <NavDropdown title="ΤΑ ΕΡΓΑ ΜΑΣ" id="nav-dropdown-ΤΑ-ΕΡΓΑ-ΜΑΣ" className={`${styles.link} ${pathname.startsWith('/erg') ? styles.active : ''}`}>


                <WdLink href={`/erga`} className={`${styles.simpleLink} dropdown-item`}>
                  Όλα τα έργα μας
                </WdLink>


                {projects.data.map((project, index) => {

                  const title = project?.attributes?.title
                  const link = find_link(project, 'ergo')

                  return (<WdLink href={link} className={`${styles.simpleLink} dropdown-item`} key={index}>
                    {title}
                  </WdLink>)
                })}

              </NavDropdown>


              {/* Η ΕΤΑΙΡΕΙΑ */}
              <Nav.Item className={`${styles.link} ${pathname === '/about-us' ? styles.active : ''}`}>
                <WdLink href={`/about-us`} className={`${styles.link} nav-link`}>
                  Η ΕΤΑΙΡΕΙΑ
                </WdLink>
              </Nav.Item>



              {/* ΕΠΙΚΟΙΝΩΝΙΑ */}
              <Nav.Item className={`${styles.link} ${pathname === '/contact' ? styles.active : ''}`}>
                <WdLink href={`/contact`} className={`${styles.link} nav-link`}>
                  ΕΠΙΚΟΙΝΩΝΙΑ
                </WdLink>
              </Nav.Item>


            </Nav>
          </Navbar.Collapse>


          <div className={`d-none d-lg-flex  ${styles.searchContainer}`}>

            {/* <div className={styles.searchIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-1 h-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div> */}

            <WdLink href={'/contact'}>
              <button className="btn btn-secondary text-white p-3 fw-bold">
                ΖΗΤΗΣΤΕ ΠΡΟΣΦΟΡΑ
              </button>
            </WdLink>
          </div>

        </div>
      </Navbar>

    </header>
  );
}

export default Header;