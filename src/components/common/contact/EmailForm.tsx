"use client"
import React from "react";
import emailjs from "@emailjs/browser";
import { Button, TextField } from "@mui/material";
import TimedAlert, { AlertVariants } from "../feedback/alert/TimedAlert";
import FullLoadingLogo from "../feedback/loading/FullLoadingLogo";

export default function EmailForm() {
    const formRef = React.useRef() as React.MutableRefObject<HTMLFormElement>;
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string>();
    const [success, setSuccess] = React.useState(false);

    const sendEmail: React.FormEventHandler = (e) => {
        e.preventDefault()
        setLoading(true)
        emailjs.sendForm(
            String(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID),
            String(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID),
            formRef.current, String(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY))
            .then(() => {
                formRef.current.reset()
                setLoading(false)
                setSuccess(true)
            }, (error) => {
                formRef.current.reset()
                setLoading(false)
                setError(error)
            })
    }

    return (
        <form onSubmit={sendEmail} ref={formRef} className="flex flex-col gap-3">
            <FullLoadingLogo show={loading}/>
            {success && <TimedAlert>Email Sent</TimedAlert>}
            {error && <TimedAlert duration={7000} variant={AlertVariants.ERROR}>{error}</TimedAlert>}
            <legend className="font-semibold text-violet-600 text-2xl">Say Hi</legend>
            <fieldset className="flex gap-2">
                <TextField color="primary" required type="text" placeholder="Sender name" variant="filled" fullWidth label="Name" name="name" />
                <TextField color="primary" required type="email" placeholder="Sender email" variant="filled" fullWidth label="Email" name="email" />
            </fieldset>
            <TextField multiline rows={7} type="text" placeholder="Message contents" required color="primary" variant="filled" fullWidth label="Content" name="message" />
            <Button type="submit" variant="contained">Send</Button>
        </form>
    );
}
