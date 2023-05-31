"use client"
import React from "react";
import { usePathname } from 'next/navigation';
import Sidebar from "@/components/common/sidebar/Sidebar";

interface SidebarLayoutProps {
    children?: React.ReactNode
}

export default function SidebarLayout(props: SidebarLayoutProps) {
    const { children } = props;
    const path = usePathname()
    return (
        <div>
            {path.split("/")[1] !== "admin" && <Sidebar />}
            {children}
        </div>
    )
}
