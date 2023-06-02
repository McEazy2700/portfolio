import '@/app/globals.css';
import Head from 'next/head';
import { SidebarLayout } from '@/components/layouts';


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
        <>
            <Head>
                <link rel="icon" href="/vice.svg" sizes="any" type="image/svg" />
            </Head>
            <SidebarLayout>
                <main className="relative font-normal px-5 p-10 lg:p-28 lg:px-32">
                    {children}
                </main>
            </SidebarLayout>
        </>
    )
}
