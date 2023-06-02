"use client"
import { AnimatePresence, motion } from "framer-motion";
import { LoadingLogo } from "@/components/common";
import { Modal } from "@mui/material";

interface FullLoadingLogoProps {
    show: boolean
}

export default function FullLoadingLogo(props: FullLoadingLogoProps) {
    const { show } = props;
    return (
        <AnimatePresence>
            {show && (
                <Modal className="flex itmes-center justify-center" open={show}>
                    <motion.div
                        key={Math.random()}
                        exit={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="fixed inset-0 flex items-center justify-center dark:bg-white/20 bg-black/20">
                        <LoadingLogo />
                    </motion.div>
                </Modal>
            )}
        </AnimatePresence>
    )
}
