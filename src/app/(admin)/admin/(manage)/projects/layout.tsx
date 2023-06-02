export const metadata = {
    title: "Admin - Projects",
    description: "Manage projects"
}

export default function AdminProjectLayout(props: { children: React.ReactNode }) {
    const { children } = props;
    return (
        <div>
            { children }
        </div>
    );
}
