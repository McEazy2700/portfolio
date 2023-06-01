"use client"
import { ProjectForm } from "@/components/admin";
import { FullLoadingLogo, TimedAlert } from "@/components/common";
import { useProjectQuery } from "@/graphql/codegen/generated"
import { usePathname } from "next/navigation";


export default function EditProject() {
    const path = usePathname().split("/").pop()?.split("-")[0];
    const [{ data, fetching, error }] = useProjectQuery({ variables: { id: parseInt(path ?? "")}});
    console.log({data})
    return (
        <div>
            {error && <TimedAlert duration={7000}>{error.message}</TimedAlert>}
            <ProjectForm defaultProject={data?.project}/>
            <FullLoadingLogo show={fetching}/>
        </div>
    )
}
