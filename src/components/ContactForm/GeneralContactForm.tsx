
import { Button, Form } from 'react-bootstrap'
import styles from './contactForm.module.scss'
import Image from 'next/image'




const GeneralContactForm = ({ handleSubmit, onSubmit, register, errors }) => {
    return (
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

                                {errors?.name && <div className="form-error-general">
                                    {errors.name.message}
                                </div>}
                            </div>


                            {/* email */}
                            <div className="col-12 col-md-6">
                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label className="text-muted">Το email σας</Form.Label>
                                    <Form.Control type="email" placeholder="Το email σας" {...register("email")} />
                                </Form.Group>
                                {errors?.email && <div className="form-error-general">
                                    {errors.email.message}
                                </div>}

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
                                {errors?.phone && <div className="form-error-general">
                                    {errors.phone.message}
                                </div>}

                            </div>

                            {/* phone */}
                            <div className="col-12 col-md-6">
                                <Form.Group className="mb-3" controlId="formPhone">
                                    <Form.Label className="text-muted">Τηλέφωνο Επικοινωνίας</Form.Label>
                                    <Form.Control type="text" placeholder="Τηλέφωνο Επικοινωνίας" {...register('phone')} />
                                </Form.Group>
                                {errors?.phone && <div className="form-error-general">
                                    {errors.phone.message}
                                </div>}
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
                                {errors?.message && <div className="form-error-general">
                                    {errors.message.message}
                                </div>}
                            </div>
                        </div>

                        {/* submit */}
                        <div className='d-flex justify-content-center mt-2'>
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

    )
}

export default GeneralContactForm