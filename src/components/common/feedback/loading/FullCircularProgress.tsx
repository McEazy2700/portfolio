"use client";
import { AnimatePresence, motion } from "framer-motion";
import { CircularProgress } from "@mui/material";

interface LoaderProps {
    show: boolean
}

export default function FullCircularProgress(props: LoaderProps) {
    const { show } = props;
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={Math.random()}
                    className="bg-white/50 absolute inset-0 flex items-center justify-center">
                    <CircularProgress />
                </motion.div>

            )}
        </AnimatePresence>
    );
}
