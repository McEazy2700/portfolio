export const metadata = {
    title: "Contact - Vice",
    description: "Find or Contact me"
}

export default function ContactLayout(props: { children: React.ReactNode }) {
    const { children } = props;
    return (
        <>
            {children}
        </>
    )
}
