"use client"
import { LinkType } from "@/app/(admin)/links";
import Link from "next/link";

export default function AdminNavBarLink(props: LinkType) {
    const { name, url, icon: Icon } = props
    return (
        <Link className={`
            flex rounded transition overflow-hidden items-center gap-3
            bg-violet-100/10 hover:bg-violet-500 group
        `} href={url}>
            <span className="bg-violet-700 text-white p-3 rounded"><Icon size={25} /></span>
            <span className="pr-3 font-medium group-hover:text-white transition">{name}</span>
        </Link>
    )
}
