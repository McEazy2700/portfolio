"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";

interface DivProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    open: boolean
}

export default function SidebarDiv(props: DivProps) {
    const { open, children, className } = props;
    const isLarge = useMediaQuery("(min-width: 1024px)")
    return (
        <AnimatePresence>
            {open && (
                <motion.div className={className}
                    initial={{ height: isLarge ? 0 : "unset", opacity: 0, width: isLarge ? "unset" : 0 }}
                    animate={{ height: "unset", opacity: 1, flexDirection: isLarge ? "column" : "row", width: "unset" }}
                    exit={{ height: isLarge ? 0 : "unset", opacity: 0, width: isLarge ? "unset" : 0 }}
                    key={Math.random()}>
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}
