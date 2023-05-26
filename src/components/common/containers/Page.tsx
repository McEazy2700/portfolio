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
                className="flex bg-cover bg-no-repeat flex-col lg:flex-row gap-5 relative min-h-[65vh]">
                { children }
            </motion.div>
        </AnimatePresence>
    );
}
