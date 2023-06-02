export const metadata = {
    title: "Vice - Projects",
    description: "Vice's projects and works"
}

export default function ProjectLayout(props: { children: React.ReactNode }) {
    const { children } = props;
    return (
        <>
            { children }
        </>
    )
}
