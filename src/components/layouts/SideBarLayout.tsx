"use client"
import React from "react";
import Sidebar from "@/components/common/sidebar/Sidebar";

interface SidebarLayoutProps {
    children?: React.ReactNode
}

export default function SidebarLayout(props: SidebarLayoutProps) {
    const { children } = props;
    return (
        <div>
            <Sidebar />
            {children}
        </div>
    )
}
