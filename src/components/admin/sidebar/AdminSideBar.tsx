"use client";
import { motion } from "framer-motion";
import adminLinks from "@/app/(admin)/links";
import { RoundLogo } from "@/components/common";
import AdminSidebarLink from "./AdminSidebarLink";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/GlobalRedux/hooks";
import { selectAdmin, toggleNav } from "@/GlobalRedux/Features/admin/adminSlice";

export default function AdminSideBar() {
    const disptach = useAppDispatch();
    const admin = useAppSelector(selectAdmin);

    const toggleNavOpen = () => {
        disptach(toggleNav(!admin.navOpen))
    }

    return (
        <motion.div
            animate={{ width: admin.navOpen ? 240: 80, borderRadius: admin.navOpen ? "2rem": "4rem"}}
            className={`
            fixed flex flex-col gap-4 h-[93vh] bg-black/10 border z-10
            border-black/5 dark:border-white/5 p-0.5 top-5 left-5`}>
            <div className="flex justify-center items-end relative w-full">
                <div className="max-w-[5rem] w-full">
                    <RoundLogo />
                </div>
                {admin.navOpen && (
                    <motion.span
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl text-transparent py-3 bg-clip-text bg-gradient-to-r from-violet-500 via-blue-400 to-pink-500 font-semibold">ice</motion.span>
                )}
                <button onClick={toggleNavOpen} type="button" className={`
                    absolute top-1/2 left-full bg-violet-600 hover:bg-violet-700
                    transition -translate-y-[10%] text-white px-1.5 p-1 rounded-r-full
                    cursor-pointer
                `}>
                    <FaAngleDoubleRight size={20}/>
                </button>
            </div>
            <motion.ul
                animate={{borderRadius: admin.navOpen ? "2rem" : "4rem"}}
                className={`
                flex flex-col items-center bg-black/5 dark:bg-white/5 border
                dark:border-white/5 border-black/5 w-full overflow-hidden`}>
                {adminLinks.map(link => <AdminSidebarLink {...link} key={link.url} />)}
            </motion.ul>
        </motion.div>
    );
}
