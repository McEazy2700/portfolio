"use client";
import { selectAdmin } from "@/GlobalRedux/Features/admin/adminSlice";
import { useAppSelector } from "@/GlobalRedux/hooks";
import { AdminSideBar } from "@/components/admin";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

interface AdminLayoutProps {
    children?: React.ReactNode;
}

export default function AdminSidebarLayout(props: AdminLayoutProps) {
    const { children } = props;
    const isLarge = useMediaQuery("(min-width: 768px)")
    const admin = useAppSelector(selectAdmin);
    return (
        <div className="z-0">
            <AdminSideBar />
            <motion.div className="z-0"
                animate={{ marginLeft: isLarge && admin.navOpen  ? 270 : 100}}
                >{ children }</motion.div>
        </div>
    );
}
