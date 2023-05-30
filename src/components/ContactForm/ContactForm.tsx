'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import Form from 'react-bootstrap/Form';


import { useForm } from 'react-hook-form'
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



import styles from './contactForm.module.scss'

const ContactForm = () => {

    const [show, setShow] = useState({ show: false, message: '' });

    const formSchema = z.object({
        name: z.string().min(3, "Το όνομα πρέπει να έχει το ελάχιστο 3 χαρακτήρες"),
        phone: z.string().optional(),
        email: z.string().email('To email που δώσατε δεν είναι σωστό'),
        subject: z.string().min(3, "Το Θέμα πρέπει να έχει το ελάχιστο 3 χαρακτήρες"),
        message: z.string().min(3, 'Το μύνημα πρέπει να έχει το ελάχιστο 3 χαρακτήρες'),
    }).refine(data => !!data.phone || !!data.email,
        { message: 'Τηλέφωνο ή Email', path: ['phone'] }
    )

    const {
        register,
        handleSubmit,
        formState: { errors },

    } = useForm({
        resolver: zodResolver(formSchema),
    });


    const onSubmit = async (data_form) => {


        const body = {
            email: data_form.email,
            name: data_form.name,
            message: data_form.message,
            phone: data_form.phone,
            subject: data_form.subject
        };

        try {

            void await fetch(`${process.env.NEXT_PUBLIC_NEXT_URL}/api/form`, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body)
            })

            setShow({ show: true, message: 'Το μύνημά σας στάλθηκε' })

        } catch (error) {
            console.error(error)
            setShow({ show: true, message: 'Κάτι πήγε στράβα' })
        }

    }


    return (
        <>
            <section className="container-fuild position-relative">

                <div className="container" style={{ maxWidth: '750px' }}>
                    <div className="row my-5">
                        <p className={`${styles.text}`}>
                            Επενδύστε στο μέλλον και μειώστε το κόστος των λογαριασμών σας!
                        </p>

                        <p className={`${styles.ctaMsg}`}>Κάντε το πρώτο βήμα και ζητήστε προσφορά για το δικό σας φωτοβολταϊκο σύστημα!</p>

                        <Form onSubmit={handleSubmit((data) => onSubmit(data))}>
                            {/* name -- email */}
                            <div className="row">
                                {/* name */}
                                <div className="col-12 col-md-6">
                                    <Form.Group className="mb-3" controlId="formName">
                                        <Form.Label className="text-muted">Το όνομά σας</Form.Label>
                                        <Form.Control type="text" placeholder="Το όνομά σας" {...register("name")} />
                                    </Form.Group>
                                </div>

                                {/* email */}
                                <div className="col-12 col-md-6">
                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Label className="text-muted">Το email σας</Form.Label>
                                        <Form.Control type="email" placeholder="Το email σας" {...register("email")} />
                                    </Form.Group>
                                </div>
                            </div>

                            {/*  thema -- phone */}
                            <div className="row">
                                {/* thema */}
                                <div className="col-12 col-md-6">
                                    <Form.Group className="mb-3" controlId="formΤhema">
                                        <Form.Label className="text-muted">Το Θέμα</Form.Label>
                                        <Form.Control type="text" placeholder="Το Θέμα"   {...register("subject")} />
                                    </Form.Group>
                                </div>

                                {/* phone */}
                                <div className="col-12 col-md-6">
                                    <Form.Group className="mb-3" controlId="formPhone">
                                        <Form.Label className="text-muted">Τηλέφωνο Επικοινωνίας</Form.Label>
                                        <Form.Control type="text" placeholder="Τηλέφωνο Επικοινωνίας" {...register('phone')} />
                                    </Form.Group>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="row">
                                {/* thema */}
                                <div className="col-12">
                                    <Form.Group className="mb-3" controlId="formMessage">
                                        <Form.Label className="text-muted">Το μύνημά σας</Form.Label>
                                        <Form.Control as="textarea" rows={5} {...register('message')} />
                                    </Form.Group>
                                </div>
                            </div>

                            {/* submit */}
                            <div className='d-flex justify-content-center'>
                                <Button variant="primary" type="submit" className={`${styles.submitButton}`}>
                                    ΖΗΤΗΣΤΕ ΠΡΟΣΦΟΡΑ
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>

                <div className={`${styles.ImageContainerForm}`}>
                    <Image
                        src={'/images/contact-fom_image.png'}
                        width={421}
                        height={373}
                        alt={'an image'}
                    />
                </div>




            </section>


            <Modal show={show.show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {/* Modal heading */}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {show.message}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Κλείσιμο
                    </Button>
                    {/* <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button> */}
                </Modal.Footer>
            </Modal>``

        </>

    )
}

export default ContactForm