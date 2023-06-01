"use client";
import { selectAdmin } from "@/GlobalRedux/Features/admin/adminSlice";
import { useAppSelector } from "@/GlobalRedux/hooks";
import { AdminNavBar, AdminSideBar } from "@/components/admin";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

interface AdminLayoutProps {
    children?: React.ReactNode;
}

export default function AdminNavLayout(props: AdminLayoutProps) {
    const { children } = props;
    const isLarge = useMediaQuery("(min-width: 768px)")
    const admin = useAppSelector(selectAdmin);
    return (
        <div className="z-0">
            {isLarge ? <AdminSideBar /> : <AdminNavBar />}
            <motion.div className="z-0"
                animate={{ marginLeft: (isLarge && admin.navOpen) ? 270 : isLarge && !admin.navOpen ? 100 : "auto"}}
            >{children}</motion.div>
        </div>
    );
}
