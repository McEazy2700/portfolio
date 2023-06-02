"use client";
import React from "react";
import { FullLoadingLogo, TimedAlert } from "@/components/common";
import { AlertVariants } from "@/components/common/feedback/alert/TimedAlert";
import { useLoginMutation } from "@/graphql/codegen/generated";
import { Button, TextField } from "@mui/material";
import Image from "next/image";
import { useAppDispatch } from "@/GlobalRedux/hooks";
import { setUser } from "@/GlobalRedux/Features/admin/adminSlice";
import { useRouter } from "next/navigation";
import { setTokens } from "@/graphql/utils";

export default function SignInForm() {
    const [{ data, fetching, error }, login] = useLoginMutation()
    const emailRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const passWdRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const dispatch = useAppDispatch()
    const router = useRouter()

    const handleLogin: React.FormEventHandler = (e) => {
        e.preventDefault()
        console.log("email", emailRef.current.value)
        console.log("password", passWdRef.current.value)
        login({
            input: {
                email: emailRef.current.value,
                password: passWdRef.current.value,
            }
        }).then(res => {
            if (res.data?.login.success) {
                dispatch(setUser({ user: res.data.login.data.user }))
                setTokens(res.data.login.data.token, res.data.login.data.refreshToken)
            }
        })
    }

    const redirect = () => {
        router.replace("/admin")
    }

    return (
        <form onSubmit={handleLogin} className="w-full p-7 min-h-screen flex items-center justify-center">
            <div className="shadow-lg relative bg-white/70 dark:bg-black/60 shadow-black/20 dark:shadow-white/10 transition p-3 rounded">
                <Image src="/zenitsu.png" width={450} height={560}
                    alt="an anime guy emiting lightnen while drawing his sworld" />
                <h1 className={`
                    absolute bg-violet-600 items-center flex 
                    flex-col text-white p-2 px-5 justify-center font-medium text-lg
                    top-2/4 right-8 border border-blue-600/60 rounded-r-2xl
                    rounded-bl-3xl shadow-lg shadow-black/40 dark:shadow-white/10
                `}>Identify <br /> yourself</h1>
                <div className="flex bg-white/60 p-1 dark:bg-black/60 border border-violet-600/10 rounded flex-col gap-2 w-full items-start">
                    <TextField type="email" size="small" inputRef={emailRef} required label="Email" fullWidth placeholder="dev@chad.com" />
                    <TextField type="password" size="small" inputRef={passWdRef} required label="Password" fullWidth placeholder="*******" />
                    <Button type="submit" fullWidth className="bg-violet-500" variant="contained">Confirm</Button>
                </div>
            </div>
            {error && <TimedAlert duration={10000} variant={AlertVariants.ERROR}>{error.message}</TimedAlert>}
            {data?.login.success && <TimedAlert after={redirect}>Welcome; Let&apos;s do this</TimedAlert>}
            <FullLoadingLogo show={fetching} />
        </form>
    )
}
