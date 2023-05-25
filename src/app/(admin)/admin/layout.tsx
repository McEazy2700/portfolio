import { DarkThemeProvider } from "@/components/themes";
import { AdminQueryProvider } from "@/graphql/admin";

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
        <AdminQueryProvider>
            <DarkThemeProvider>
                { children }
            </DarkThemeProvider>
        </AdminQueryProvider>
    );
}
