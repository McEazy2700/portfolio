"use client";
import { LinkType } from "@/app/(admin)/links";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function AdminSidebarLink(props: LinkType) {
    const { name, url, icon: Icon } = props;
    const path = usePathname();
    const highlight = path.split("/")[2] === url.split("/")[2];
    return (
        <Link className={`${highlight ? "dark:bg-white/20 bg-black/20": ""}
            hover:bg-black/10 dark:hover:bg-white/10 transition
            flex relative w-full shadow overflow-hidden items-center`} href={url}>
            <span className="w-full max-w-[4.3rem] rounded-full flex items-center justify-center aspect-square">
                <Icon size={25}/>
            </span>
                <span className="text-lg absolute left-20" >
                    {name}
                </span>
        </Link>
    )
}
