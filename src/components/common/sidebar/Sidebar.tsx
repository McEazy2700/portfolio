"use client";

import { RoundLogo, SidebarDiv, SidebarLink } from "@/components/common";
import { FiHome } from "react-icons/fi";
import { BsFolder } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { selectSidebar, toggleVissible } from "@redux/Features/sidebar/sidebarSlice";

export default function Sidebar() {
    const sideBar = useAppSelector(selectSidebar);
    const dispatch = useAppDispatch();

    const handleSideBarVisibility = () => dispatch(toggleVissible(!sideBar.vissible))
    return (
        <div className="fixed flex items-center gap-2 flex-col top-24 left-5">
            <button type="button" onClick={handleSideBarVisibility}>
                <RoundLogo />
            </button>
            <SidebarDiv open={sideBar.vissible}
                className={`
                    shadow-md overflow-hidden p-0.5 shadow-white/10 dark:border-white/10
                    rounded-[2.6rem] bg-black/5 dark:bg-white/10 border border-black/10`}>
                <SidebarLink title="Home" icon={FiHome} href="/"/>
                <SidebarLink title="Projects" icon={BsFolder} href="/projects"/>
            </SidebarDiv>
        </div>
    );
}
