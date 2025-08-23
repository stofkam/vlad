"use client"

import React from 'react'
import { Form, Input, Button } from "@heroui/react";

interface IProps {
    onClose: () => void
}

const LoginForm = ({ onClose }: IProps) => {
    const [submitted, setSubmitted] = React.useState<any | null>(null);
    const [errors, setErrors] = React.useState({})

    const onSubmit = (e: any) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.currentTarget));
        if (!data.email) {
            setErrors({ email: "Email is required" });

            return;
        }
        if (!data.password) {
            setErrors({ password: "Password is required" });

            return;
        }


        setSubmitted(data)
        onClose()
    };
    return (
        <Form className="w-full max-w-xs" onSubmit={onSubmit} validationErrors={errors} validationBehavior="aria">
            <Input

                isRequired
                errorMessage="Please enter a valid email"
                label="Email"
                labelPlacement="outside"
                name="email"
                placeholder="Enter your email"
                type="email"

            />
            <Input
                isRequired
                errorMessage="Please enter a valid password"
                label="password"
                labelPlacement="outside"
                name="password"
                placeholder="Enter your password"
                type="password"
            />

            <div className=' flex w-[100%] gap-4 items-center pt-8 justify-end'>
                <Button type="submit" variant="bordered" onPress={onClose}>
                    Close
                </Button>
                <Button type="submit" variant="bordered">
                    Login
                </Button>
            </div>
            {submitted && (
                <div className="text-small text-default-500">
                    You submitted: <code>{JSON.stringify(submitted)}</code>
                </div>
            )}
        </Form>
    )
}

export default LoginForm