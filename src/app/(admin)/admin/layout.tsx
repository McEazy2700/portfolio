import ReduxProvider from "@/GlobalRedux/provider";
import { AdminNavLayout } from "@/components/admin";
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
                    <AdminNavLayout>
                        {children}
                    </AdminNavLayout>
                </DarkThemeProvider>
            </ReduxProvider>
        </QueryProvider>
    );
}
