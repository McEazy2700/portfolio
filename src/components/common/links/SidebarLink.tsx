import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface SideBarLinkProps {
    href: string
    className?: string
    children?: React.ReactNode
    icon: IconType
    title?: string
}

export default function SidebarLink(props: SideBarLinkProps) {
    const { children, title, icon: Icon, href, className } = props;
    return (
        <Link title={title} className={`
            flex items-center p-[0.8rem] rounded-full border border-transparent transition
            hover:border-black/10 hover:text-white dark:hover:border-white/10 hover:bg-black/20 dark:hover:bg-white/20 ${className}`} href={href}>
            <span className="flex text-violet-400 aspect-square"><Icon size={25}/></span>
            { children }
        </Link>
    );
}
