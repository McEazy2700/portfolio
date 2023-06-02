export const metadata = {
    title: "Sign In",
    description: "Identify yourself"
}

interface AuthLayoutProps {
    children?: React.ReactNode;
}

export default function AuthLayout(props: AuthLayoutProps) {
    const { children } = props
    return (
        <>
            {children}
        </>
    )
}
