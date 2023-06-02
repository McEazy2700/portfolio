import '@/app/globals.css';
import QueryProvider from '@/graphql/config';
import ReduxProvider from "@redux/provider";
import { DarkThemeProvider } from "@/components/themes";
import { Inter } from 'next/font/google';

const font = Inter({ weight: ["900", "700", "400", "300"], subsets: ["latin"] })

export default function BaseLayout(props: { children?: React.ReactNode }) {
    const { children } = props;
    return (
        <html lang="en">
            <QueryProvider>
                <ReduxProvider>
                    <body className={`relative font-normal ${font.className}`}>
                        <div className="absolute min-h-screen inset-0 bg-heroPattern bg-cover z-[-1000] bg-no-repeat opacity-20" />
                        <DarkThemeProvider>
                            {children}
                        </DarkThemeProvider>
                    </body>
                </ReduxProvider>
            </QueryProvider>
        </html>
    )
}
