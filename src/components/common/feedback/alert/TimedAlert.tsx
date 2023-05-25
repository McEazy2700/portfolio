"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Alert, AlertTitle } from "@mui/material";

export enum AlertVariants {
    SUCCESS = "success",
    WARNING = "warning",
    ERROR = "error",
    INFO = "info"
}

interface AlertProps {
    variant?: AlertVariants;
    children?: React.ReactNode;
    duration?: number,
    after?: () => void;
}

export default function TimedAlert(props: AlertProps) {
    const { variant, children, duration, after } = props;
    const [showing, setShowing] = React.useState(true);
    const alert = matchVariant(variant ?? AlertVariants.SUCCESS);

    React.useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowing(false)
            after?.();
        }, duration ?? 3000);
        return () => clearTimeout(timeoutId);
    }, [duration, after])
    return (
        <AnimatePresence>
            {showing && (
                <motion.div
                    transition={{ duration: 0.4 }}
                    initial={{ opacity: 0, translateY: -10 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    exit={{ opacity: 0, translateY: -10 }}
                    key={Math.random()}
                    className="fixed h-11 top-3 w-[97vw]">
                    <Alert severity={alert.severtity}>
                        <AlertTitle>{alert.title}</AlertTitle>
                        {children}
                    </Alert>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

type AlertVals = {
    title: string
    severtity: "success" | "warning" | "error" | "info"
}

function matchVariant(variant: AlertVariants): AlertVals {
    switch (variant) {
        case AlertVariants.WARNING: return { title: "Warning", severtity: "warning" }
        case AlertVariants.ERROR: return { title: "Error", severtity: "error" }
        case AlertVariants.INFO: return { title: "Info", severtity: "info" }
        default: return { title: "Success", severtity: "success" }
    }
}
