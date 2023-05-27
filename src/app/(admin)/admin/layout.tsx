import ReduxProvider from "@/GlobalRedux/provider";
import { AdminSidebarLayout } from "@/components/admin";
import { DarkThemeProvider } from "@/components/themes";
import { QueryProvider } from "@/graphql/admin";

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
        <QueryProvider>
            <ReduxProvider>
                <DarkThemeProvider>
                    <AdminSidebarLayout>
                        {children}
                    </AdminSidebarLayout>
                </DarkThemeProvider>
            </ReduxProvider>
        </QueryProvider>
    );
}
