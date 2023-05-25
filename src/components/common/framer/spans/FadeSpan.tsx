"use client"
import { AnimatePresence, motion } from "framer-motion";

interface FadeSpanProps {
    className?: string
    children?: React.ReactNode
    open: boolean
}

export default function FadeSpan(props: FadeSpanProps) {
    const { open, children, className } = props;
    return (
        <AnimatePresence>
            {open && (
                <motion.span
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`${className}`}>
                    {children}
                </motion.span>
            )}
        </AnimatePresence>
    )
}
