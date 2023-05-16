'use client'
import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Link from 'next/link';
import WdLink from '@/components/UI/WdLink';

import styles from './header.module.scss';


const Header = () => {

  // return (<>lala</>)

  return (
    <>
      <div className={`${styles.headerContainer }`}>

        <nav className={` ${styles.navContainer} mx-2`}>
          <div className={`${styles.logoContainer} bg-primary`}>
            logo
          </div>

          <div className={`${styles.linksContaier}`}>
            <WdLink href={`/`} className={`${styles.link}`}>
              ΑΡΧΙΚΗ
            </WdLink>

            <WdLink href={`/`} className={`${styles.link}`}>
              ΥΠΗΡΕΣΙΕΣ
            </WdLink>

            <WdLink href={`/`} className={`${styles.link}`}>
              ΤΑ ΕΡΓΑ ΜΑΣ
            </WdLink>

            <WdLink href={`/`} className={`${styles.link}`}>
              Η ΕΤΑΙΡΕΙΑ
            </WdLink>

            <WdLink href={`/`} className={`${styles.link}`}>
              ΕΠΙΚΟΙΝΩΝΙΑ
            </WdLink>
          </div>

          <div className={`${styles.searchContainer}`}>
            <div className={styles.searchIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-1 h-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>

            <button className="btn btn-secondary text-white">
              ΖΗΤΗΣΤΕ ΠΡΟΣΦΟΡΑ
            </button>
          </div>

        </nav>

        {/* <div className={styles.borderBottom}></div> */}
      </div>


      {/* <Navbar bg="light" expand="lg" className={`${styles.headerContainer} `}>
        <Container fluid>
          <Navbar.Brand href="/" className="text-white">logo</Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" className="text-white" color='white' />

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className={`mx-auto my-2 my-lg-0 ${styles.linksContaier}`}
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

              <Nav.Link href="/" className={`${styles.link}`}>
                ΑΡΧΙΚΗ
              </Nav.Link>

              <Nav.Link href="/" className={`${styles.link}`}>
                ΥΠΗΡΕΣΙΕΣ
              </Nav.Link>

              <Nav.Link href="/" className={`${styles.link}`}>
                ΤΑ ΕΡΓΑ ΜΑΣ
              </Nav.Link>

              <Nav.Link href="/" className={`${styles.link}`}>
                ΕΠΙΚΟΙΝΩΝΙΑ
              </Nav.Link>

            </Nav>


            <div className={`${styles.searchContainer}`}>
              <div className={styles.searchIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-1 h-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>

              <button className="btn btn-secondary text-white">
                ΖΗΤΗΣΤΕ ΠΡΟΣΦΟΡΑ
              </button>
            </div>


          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      {/* <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form> */}

    </>

  )
}

export default Header