"use client";
import React from "react";
import { ThemeOptions, ThemeProvider, createTheme } from '@mui/material/styles';
import { Button, CssBaseline, PaletteMode } from "@mui/material";
import { MdBrightness7, MdBrightness4 } from "react-icons/md";


export const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: '#a261ef',
            light: '#d3b8f1',
            dark: '#5a2192',
        },
        secondary: {
            main: '#4500e6',
            light: '#8080fb',
            dark: '#2c077f',
        },
        divider: 'rgba(0,0,0,0.09)',
    },
};

interface ThemeProps {
    children?: React.ReactNode
}

function getTheme(current: string | null): PaletteMode {
    if (current) {
        if (current === "light") {
            return "light"
        } else if (current === "dark") {
            return "dark"
        }
    }
    return "dark"
}

export default function DarkThemeProvider(props: ThemeProps) {
    const { children } = props;
    const currentTheme = typeof window !== "undefined" ? localStorage.getItem("theme") : "dark";
    const [mode, setMode] = React.useState<PaletteMode>(() => getTheme(currentTheme))
    const theme = React.useMemo(() => createTheme({ palette: { mode, ...themeOptions.palette } }), [mode])
    const toggleMode = () => {
        setMode(curr => {
            const newMode = curr === "light" ? "dark" : "light"
            localStorage.setItem("theme", newMode);
            return newMode
        })
    }

    return (
        <ThemeProvider theme={theme}>
            <html className={mode} lang="en">
                <CssBaseline />
                <body className="text-black dark:text-white z-0 min-h-screen relative">
                    {children}
                    <ToggleThemeButton mode={mode} toggle={toggleMode} />
                </body>
            </html>
        </ThemeProvider>
    )
}

interface ToggleThemeButtonProps {
    mode: "light" | "dark"
    toggle: () => void;
}

function ToggleThemeButton(props: ToggleThemeButtonProps) {
    const { mode, toggle } = props;
    return (
        <div className="fixed bg-white rounded dark:bg-zinc-800 transition-all top-3 right-3 z=[10000]">
            <Button color="secondary" variant="outlined" className="flex items-center gap-2" onClick={toggle}>
                {mode}
                {mode === "light" ? <MdBrightness7 /> : <MdBrightness4 />}
            </Button>
        </div>
    )
}
