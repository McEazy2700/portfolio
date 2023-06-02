"use client";
import { setUser } from "@/GlobalRedux/Features/admin/adminSlice";
import { useAppDispatch } from "@/GlobalRedux/hooks";
import { useRefreshTokenMutation } from "@/graphql/codegen/generated";
import { getTokens, setTokens } from "@/graphql/utils";
import { Button, Modal } from "@mui/material";
import React from "react";

export default function EnsureAuth(props: { children?: React.ReactNode }) {
    const { children } = props;
    const [{ error }, mutate] = useRefreshTokenMutation();
    const [tokenError, setTokenError] = React.useState(false);
    const dispatch = useAppDispatch();

    const refreshToken = React.useCallback(() => {
        const refreshToken = getTokens().refreshToken
        if (refreshToken) {
            mutate({ refreshToken }).then(res => {
                const refresh = res.data?.refreshToken.data.refreshToken
                const token = res.data?.refreshToken.data.token
                if (refresh && token) {
                    setTokens(token, refresh)
                }
                dispatch(setUser({ user: res.data?.refreshToken.data.user }))
            })
            if (error) {
                setTokenError(true)
            }
        } else {
            setTokenError(true)
        }
    }, [mutate, error, dispatch])

    React.useEffect(() => {
        const intervalId = setInterval(refreshToken, 299900);
        refreshToken()

        return () => clearInterval(intervalId);
    }, [refreshToken])

    return (
        <>
            {children}
            {tokenError && (
                <Modal className="flex items-center justify-center" open>
                    <div className={`
                        bg-white/70 flex-col flex gap-4 border-1 outline-none
                        border-violet-600/10 rounded p-3 dark:bg-zinc-900/70
                    `}>
                        <h1 className="text-violet-600 font-medium text-xl">Signature expired</h1>
                        <div className="flex gap-3">
                            <Button color="success" variant="contained" href="/admin/signin">Login</Button>
                            <Button color="warning" variant="contained" href="/admin/signout">Logout</Button>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    )
}
