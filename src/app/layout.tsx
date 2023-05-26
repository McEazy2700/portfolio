import './globals.css';
import { Inter } from 'next/font/google';
import ReduxProvider from "@redux/provider";
import Sidebar from "@/components/common/sidebar/Sidebar";
import { DarkThemeProvider } from '@/components/themes';
import QueryProvider from '@/graphql/config';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: "Vice",
    description: "I build cool things with code",
}

interface RootLayoutType {
    children: React.ReactNode
}

export default function RootLayout(props: RootLayoutType) {
    const { children } = props;
    return (
        <html lang="en">
            <QueryProvider>
                <ReduxProvider>
                    <body className={inter.className}>
                        <DarkThemeProvider>
                            <Sidebar />
                            <main className="lg:p-28 lg:px-32">
                                {children}
                            </main>
                        </DarkThemeProvider>
                    </body>
                </ReduxProvider>
            </QueryProvider>
        </html>
    )
}
