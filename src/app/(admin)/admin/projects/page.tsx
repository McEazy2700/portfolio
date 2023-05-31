import { ProjectList } from "@/components/common";
import Link from "next/link";

export default function Projects() {
    return (
        <div className="p-3">
            <ProjectList />
            <Link href="/admin/projects/new" className={`
                bg-violet-600 text-white p-3 rounded absolute bottom-5 right-5
                hover:bg-violet-900 active:bg-violet-900 transition
            `}>+ New Project</Link>
        </div>
    )
}
