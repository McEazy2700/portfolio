import './globals.css';
import { Inter } from 'next/font/google';
import ReduxProvider from "@redux/provider";
import Sidebar from "@/components/common/sidebar/Sidebar";
import { DarkThemeProvider } from '@/components/themes';
import QueryProvider from '@/graphql/config';
import Head from 'next/head';

const font = Inter({ weight: ["900", "700", "400", "300"], subsets: ["latin"] })

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
            <Head>
                <link rel="icon" href="/vice.svg" sizes="any" type="image/svg" />
            </Head>
            <QueryProvider>
                <ReduxProvider>
                    <body className={font.className}>
                        <DarkThemeProvider>
                            <Sidebar />
                            <main className={`relative font-normal p-10 lg:p-28 lg:px-32 ${font.className}`}>
                                <div className="absolute inset-0 bg-heroPattern bg-cover z-[-1000] bg-no-repeat opacity-20"/>
                                {children}
                            </main>
                        </DarkThemeProvider>
                    </body>
                </ReduxProvider>
            </QueryProvider>
        </html>
    )
}
