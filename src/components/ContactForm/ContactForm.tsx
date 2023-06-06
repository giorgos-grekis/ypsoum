'use client';
import React, { useState } from 'react'
// import Image from 'next/image'
// import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form'
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import GeneralContactForm from './GeneralContactForm';
import SideBarContactForm from './SideBarContactForm';
import styles from './contactForm.module.scss'



interface ContactFormComponent {
    sidebar?: boolean
}
interface FormInputs {
    name: string
    phone: string
    email: string
    subject: string
    message: string
}



const ContactForm = ({ sidebar }: ContactFormComponent) => {

    const [show, setShow] = useState({ message: '' });

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
        reset
    } = useForm<FormInputs>({
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

            setShow({ message: 'Το μύνημά σας στάλθηκε' })
            reset()

        } catch (error) {
            console.error(error)
            setShow({ message: 'Κάτι πήγε στράβα' })
            reset()
        }

    }


    return (
        <>

            {!sidebar
                ? (<GeneralContactForm
                    handleSubmit={handleSubmit}
                    onSubmit={onSubmit}
                    register={register}
                    errors={errors}
                />)
                : (<SideBarContactForm
                    handleSubmit={handleSubmit}
                    onSubmit={onSubmit}
                    register={register}
                    errors={errors}
                />
                )
            }






            <Modal show={!!show.message} onHide={() => setShow({ message: "" })}>
                <Modal.Header closeButton>
                    <Modal.Title>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {show.message}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary text-white" onClick={() => setShow({ message: "" })}>
                        Κλείσιμο
                    </Button>

                </Modal.Footer>
            </Modal>

        </>

    )
}

export default ContactForm


