import Link from "next/link";
import { IconType } from "react-icons";

interface IconLinkProps {
    href: string;
    icon: IconType;
    title?: string
}

export default function IconLink(props: IconLinkProps) {
    const { href, icon: Icon, title } = props;
    return (
        <Link className="text-white/30 transition hover:text-violet-500" title={title} href={href}><Icon size={33}/></Link>
    )
}
