import WdLink from '@/components/UI/WdLink'
import React from 'react'

export default function NotFound() {
    return (
        <div style={{ minHeight: '80vh' }} className="d-flex justify-content-center align-items-center">
            <div className='text-center'>
                <h1>Η σελίδα που ζητάτε δεν βρέθηκε</h1>
                <WdLink href="/" className="btn btn-primary text-white">
                    Επιστροφή στην  Αρχική
                </WdLink>
            </div>
        </div>
    )
}

