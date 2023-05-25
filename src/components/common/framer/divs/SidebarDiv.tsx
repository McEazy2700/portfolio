"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface DivProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    open: boolean
}

export default function SidebarDiv(props: DivProps) {
    const { open, children, className } = props;
    return (
        <AnimatePresence>
            {open && (
                <motion.div className={className}
                    initial={{height: 0, opacity: 0}}
                    animate={{height: "unset", opacity: 1}}
                    exit={{ height: 0, opacity: 0 }}
                    key={Math.random()}>
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}
