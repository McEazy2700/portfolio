import Link from "next/link";
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";

interface PageLinkProps {
    href: string;
    name: string;
    left?: boolean
}

export default function PageLink(props: PageLinkProps) {
    const { href, name, left } = props;
    return (
        <Link href={href}
            className={`
                bg-violet-400/10 p-1 rounded border border-black/5 dark:border-white/5 px-2
                absolute flex items-center group text-lg translate-y-6 backdrop-blur-sm
                transition hover:text-violet-400 bottom-0 ${left ? "left-0 flex-row-reverse" : "right-0"}`}>
            {name}
            {left ? (
                <span className="pr-1 pl-2 group-hover:pr-2 group-hover:pl-1 transition-all"><HiArrowSmLeft /></span>
            ): (
                <span className="pr-2 pl-1 group-hover:pr-1 group-hover:pl-2 transition-all"><HiArrowSmRight /></span>
            )}
        </Link>
    );
}
