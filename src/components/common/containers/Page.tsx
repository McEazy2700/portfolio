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
                exit={{ opacity: 0,  y: -5 }}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex text-black/80 dark:text-white/80 gap-2 relative min-h-[65vh]">
                { children }
            </motion.div>
        </AnimatePresence>
    );
}
