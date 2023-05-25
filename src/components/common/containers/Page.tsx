"use client"
import { AnimatePresence, motion } from "framer-motion";

interface PageProps {
    children?: React.ReactNode;
}

export default function Page(props: PageProps) {
    const { children } = props;
    return (
        <AnimatePresence>
            <motion.div
                key={Math.random()}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-2 relative min-h-[65vh]">
                { children }
            </motion.div>
        </AnimatePresence>
    );
}
