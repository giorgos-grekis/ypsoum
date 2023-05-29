'use client'
import { useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './header.module.scss';
import WdLink from '@/components/UI/WdLink';

const Header = () => {
  // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  useEffect(() => {

    const header = document.getElementById('navbar')!;

    const scrollYFc = () => window.screenY;
    const widthFc = () => window.innerWidth;


    let lastScrollTop = 0;

    const menuOnScroll = () => {

      const scrollY = scrollYFc();
      const width = widthFc();

      let st = window.pageYOffset || document.documentElement.scrollTop;

      if(st >= 200){
        header.classList.add('bg-white')
      } else {
        header.classList.remove('bg-white')
      }
      // console.log('menuOnScroll: ', {scrollY, width, st});

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

          <Navbar.Brand className={styles.logoContainer}>
            <WdLink href="/">
              Logo
            </WdLink>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">

              {/* ΑΡΧΙΚΗ */}
              <NavDropdown title=" ΑΡΧΙΚΗ" id="nav-dropdown-ΑΡΧΙΚΗ" className={`${styles.link}`}>
                <NavDropdown.Item className={`${styles.link_dropdown_container}`}>
                  <WdLink href={`/`} className={`${styles.link}`}>
                    ΑΡΧΙΚΗ
                  </WdLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <WdLink href={`/`} className={`${styles.link}`}>
                    ΑΡΧΙΚΗ
                  </WdLink>
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">
                  <WdLink href={`/`} className={`${styles.link}`}>
                    ΑΡΧΙΚΗ
                  </WdLink>
                </NavDropdown.Item>
                {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item> */}
              </NavDropdown>

              {/* ΥΠΗΡΕΣΙΕΣ */}
              <NavDropdown title="ΥΠΗΡΕΣΙΕΣ" id="nav-dropdown-ΥΠΗΡΕΣΙΕΣ" className={`${styles.link}`}>
                <NavDropdown.Item className={`${styles.link_dropdown_container}`}>
                  <WdLink href={`/`} className={`${styles.link}`}>
                    ΥΠΗΡΕΣΙΕΣ
                  </WdLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <WdLink href={`/`} className={`${styles.link}`}>
                    ΥΠΗΡΕΣΙΕΣ
                  </WdLink>
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">
                  <WdLink href={`/`} className={`${styles.link}`}>
                    ΥΠΗΡΕΣΙΕΣ
                  </WdLink>
                </NavDropdown.Item>
              </NavDropdown>

              {/*  ΤΑ ΕΡΓΑ ΜΑΣ */}
              <NavDropdown title="ΤΑ ΕΡΓΑ ΜΑΣ" id="nav-dropdown-ΤΑ-ΕΡΓΑ-ΜΑΣ" className={`${styles.link}`}>
                <NavDropdown.Item className={`${styles.link_dropdown_container}`}>
                  <WdLink href={`/`} className={`${styles.link}`}>
                    ΤΑ ΕΡΓΑ ΜΑΣ
                  </WdLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <WdLink href={`/`} className={`${styles.link}`}>
                    ΤΑ ΕΡΓΑ ΜΑΣ
                  </WdLink>
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">
                  <WdLink href={`/`} className={`${styles.link}`}>
                    ΤΑ ΕΡΓΑ ΜΑΣ
                  </WdLink>
                </NavDropdown.Item>
              </NavDropdown>

              {/* Η ΕΤΑΙΡΕΙΑ */}
              <NavDropdown title="Η ΕΤΑΙΡΕΙΑ " id="nav-dropdown-Η-ΕΤΑΙΡΕΙΑ " className={`${styles.link}`}>
                <NavDropdown.Item className={`${styles.link_dropdown_container}`}>
                  <WdLink href={`/`} className={`${styles.link}`}>
                    Η ΕΤΑΙΡΕΙΑ
                  </WdLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <WdLink href={`/`} className={`${styles.link}`}>
                    Η ΕΤΑΙΡΕΙΑ
                  </WdLink>
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">
                  <WdLink href={`/`} className={`${styles.link}`}>
                    Η ΕΤΑΙΡΕΙΑ
                  </WdLink>
                </NavDropdown.Item>
              </NavDropdown>

              {/* ΕΠΙΚΟΙΝΩΝΙΑ */}
              <NavDropdown title="ΕΠΙΚΟΙΝΩΝΙΑ " id="nav-dropdown-ΕΠΙΚΟΙΝΩΝΙΑ " className={`${styles.link}`}>
                <NavDropdown.Item className={`${styles.link_dropdown_container}`}>
                  <WdLink href={`/`} className={`${styles.link}`}>
                    ΕΠΙΚΟΙΝΩΝΙΑ
                  </WdLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <WdLink href={`/`} className={`${styles.link}`}>
                    ΕΠΙΚΟΙΝΩΝΙΑ
                  </WdLink>
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">
                  <WdLink href={`/`} className={`${styles.link}`}>
                    ΕΠΙΚΟΙΝΩΝΙΑ
                  </WdLink>
                </NavDropdown.Item>
              </NavDropdown>


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