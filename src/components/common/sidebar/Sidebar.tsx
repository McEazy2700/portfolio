"use client";
import { motion } from "framer-motion";
import { RoundLogo, SidebarDiv, SidebarLink } from "@/components/common";
import { FiHome } from "react-icons/fi";
import { BsFolder, BsInfoLg } from "react-icons/bs";
import { TbMessage } from "react-icons/tb";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { selectSidebar, toggleVissible } from "@redux/Features/sidebar/sidebarSlice";
import { useMediaQuery } from "@mui/material";

export default function Sidebar() {
    const sideBar = useAppSelector(selectSidebar);
    const dispatch = useAppDispatch();
    const isLarge = useMediaQuery("(min-width: 1024px)")

    const handleSideBarVisibility = () => dispatch(toggleVissible(!sideBar.vissible))
    return (
        <motion.nav
            animate={{top: isLarge? "18%" : "85%", flexDirection: isLarge ? "column": "row"}}
            className="fixed flex z-[100000] items-center gap-2 left-8">
            <button type="button" className="w-[3.4rem] dark:bg-zinc-900 bg-white rounded-full aspect-square" onClick={handleSideBarVisibility}>
                <RoundLogo />
            </button>
            <SidebarDiv open={sideBar.vissible}
                className={`
                    shadow-md overflow-hidden p-0.5 flex shadow-white/10 dark:border-white/10
                    rounded-[2.6rem] bg-gray-100 dark:bg-zinc-800 border border-black/10`}>
                <SidebarLink title="Home" icon={FiHome} href="/"/>
                <SidebarLink title="About" icon={BsInfoLg} href="/about"/>
                <SidebarLink title="Projects" icon={BsFolder} href="/projects"/>
                <SidebarLink title="Contact" icon={TbMessage} href="/contact" />
            </SidebarDiv>
        </motion.nav>
    );
}
