"use client";
import { Page, PageLink, ProjectList } from "@/components/common";

export default function Projects() {
    return (
        <Page>
            <ProjectList />
            <PageLink name="Home" href="/" left/>
        </Page>
    );
}
