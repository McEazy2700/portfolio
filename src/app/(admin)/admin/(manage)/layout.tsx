import { AdminNavLayout, EnsureAuth } from "@/components/admin";

export const metadata = {
    title: "Admin - DashBoard",
    description: "Vice admin, sign in"
}

interface AdminLayoutProps {
    children?: React.ReactNode;
}

export default function AdminLayout(props: AdminLayoutProps) {
    const { children } = props;
    return (
        <AdminNavLayout>
            <EnsureAuth>
                {children}
            </EnsureAuth>
        </AdminNavLayout>
    );
}
