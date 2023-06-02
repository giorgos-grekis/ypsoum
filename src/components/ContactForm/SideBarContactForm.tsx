
import styles from './contactForm.module.scss'

const SideBarContactForm = ({handleSubmit, onSubmit, register, errors}) => {
  return (
    <div className={`${styles.contactFormContainer} mt-5`}>
    <div className='text-white fw-bold'>
        Επενδύστε στο μέλλον & μειώστε το κόστς των λογαριασμών σας!

        <form onSubmit={handleSubmit((data) => onSubmit(data))}>

            <div className={``}>
                <input type="text" placeholder="Όνομα" className={`${styles.formInput} ${errors?.name ? 'border-danger' : ''}`} {...register("name")} />
            </div>

            {errors?.name && <div className="form-error">
                {errors.name.message}
            </div>}


            <div className={``}>
                <input type="text" placeholder="Τηλέφωνο" className={`${styles.formInput}`}  {...register('phone')} />
            </div>

            {errors?.phone && <div className="form-error">
                {errors.phone.message}
            </div>}

            <div className={``}>
                <input type="email" placeholder="email" className={`${styles.formInput}`}  {...register('email')} />
            </div>

            {errors?.email && <div className="form-error">
                {errors.email.message}
            </div>}

            <div className={``}>
                <input type="text" placeholder="Θέμα" className={`${styles.formInput}`} {...register('subject')} />
            </div>

            {errors?.subject && <div className="form-error">
                {errors.subject.message}
            </div>}

            <div className={``}>
                <textarea placeholder="Κείμενο" className={`${styles.formInput}`}  {...register('message')} />
            </div>

            {errors?.message && <div className="form-error">
                {errors.message.message}
            </div>}

            <div className='d-flex justify-content-center align-items-center mt-3'>
                <button type='submit' className="btn btn-secondary text-white fw-bold py-3 px-4">
                    ΡΩΤΗΣΤΕ ΜΑΣ
                </button>
            </div>

        </form>
    </div>
</div>
  )
}

export default SideBarContactForm