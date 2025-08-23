"use client"

import React, { ReactNode } from 'react'
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@heroui/react";

interface Iprops {
    isOpen: boolean
    onClose: () => void
    title: string
    children: ReactNode
    size?: "xs" | "sm" | "md" | "lg" | "xl"
}

const CastomModal = ({
    isOpen,
    onClose,
    title,
    children,
    size = "xs"
}: Iprops) => {

    // const { isOpen, onOpen, onClose } = useDisclosure();
    // const [size, setSize] = React.useState("md");
    return (
        <Modal isOpen={isOpen} size={size} onClose={onClose}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 border-b">
                            <h3 className=' text-xl text-background font-semibold'>{title}</h3>
                        </ModalHeader>
                        <ModalBody className=' space-y-4 py-6'>

                            {children}

                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Close
                            </Button>
                            <Button color="primary" onPress={onClose}>
                                Action
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

export default CastomModal