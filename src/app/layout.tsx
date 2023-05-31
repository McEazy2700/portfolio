import './globals.css';
import { Inter } from 'next/font/google';
import ReduxProvider from "@redux/provider";
import { DarkThemeProvider } from '@/components/themes';
import QueryProvider from '@/graphql/config';
import Head from 'next/head';
import { SidebarLayout } from '@/components/layouts';

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
                            <SidebarLayout>
                                <main className={`relative font-normal px-5 p-10 lg:p-28 lg:px-32 ${font.className}`}>
                                    <div className="absolute min-h-screen inset-0 bg-heroPattern bg-cover z-[-1000] bg-no-repeat opacity-20" />
                                    {children}
                                </main>
                            </SidebarLayout>
                        </DarkThemeProvider>
                    </body>
                </ReduxProvider>
            </QueryProvider>
        </html>
    )
}
