"use client";

import Image from "next/image";
import { SidebarDiv, SidebarLink } from "@/components/common";
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
            <button onClick={handleSideBarVisibility} className={`
                flex items-center justify-center w-full p-3 transition
                shadow-md border shadow-white/10 hover:shadow-white/20 hover:bg-white/20
                border-white/10 rounded-full bg-white/10 outline-none`}>
                <Image className="w-full max-w-[4rem] pointer-events-none object-center aspect-square" width={731} height={575} src="/vice.svg" alt="vice logo" />
            </button>
            <SidebarDiv open={sideBar.vissible} className="shadow-md overflow-hidden p-0.5 shadow-white/10 rounded-[2.6rem] bg-white/10 border border-white/10">
                <SidebarLink title="Home" icon={FiHome} href="/"/>
                <SidebarLink title="Projects" icon={BsFolder} href="/projects"/>
            </SidebarDiv>
        </div>
    );
};
