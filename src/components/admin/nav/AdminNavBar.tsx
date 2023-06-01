"use client"
import { AnimatePresence, motion } from "framer-motion";
import { selectAdmin, toggleNav } from "@/GlobalRedux/Features/admin/adminSlice";
import { useAppDispatch, useAppSelector } from "@/GlobalRedux/hooks";
import adminLinks from "@/app/(admin)/links";
import { InlineLogo, RoundLogo } from "@/components/common";
import { Modal } from "@mui/material";
import { AdminNavBarLink } from "@/components/admin";

export default function AdminNavBar() {
    const admin = useAppSelector(selectAdmin);
    const dispatch = useAppDispatch()

    const toggleNavBar = () => {
        dispatch(toggleNav(!admin.navOpen));
    }

    return (
        <nav className="fixed z-0 bottom-2 left-2">
            <div className="relative z-10">
                <button onClick={toggleNavBar} className="w-16 aspect-square" type="button">
                    <RoundLogo />
                </button>
            </div>
            <Modal onClose={toggleNavBar} open={admin.navOpen}>
                <AnimatePresence>
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        key={Math.random()}
                        className="absolute bottom-20 bg-white dark:bg-zinc-900 p-3 flex flex-col rounded gap-3 left-3">
                        <div className="flex max-w-[9rem] items-end bg-violet-500/5 self-center w-full p-2 rounded">
                            <InlineLogo />
                            <span className={`
                                bg-clip-text text-transparent text-5xl
                                bg-gradient-to-r from-violet-500 via-blue-400
                                to-pink-500 font-semibold
                            `}>ice</span>
                        </div>
                        <motion.ul className="flex flex-col gap-1">
                            {adminLinks.map(link => <AdminNavBarLink {...link} key={link.url} />)}
                        </motion.ul>
                    </motion.div>
                </AnimatePresence>
            </Modal>
        </nav>
    )
}
