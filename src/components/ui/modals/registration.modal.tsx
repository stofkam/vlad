"use client"

import CastomModal from '@/components/common/modal'
import RegistrationForm from '@/forms/registration.form'
import React from 'react'

interface IProps {
    isOpen: boolean
    onClose: () => void
}

const RegistartionModal = ({ isOpen, onClose }: IProps) => {
    return (
        <CastomModal isOpen={isOpen} onClose={onClose} title='Create acaunt'>
            <RegistrationForm onClose={onClose} />
        </CastomModal>
    )
}

export default RegistartionModal