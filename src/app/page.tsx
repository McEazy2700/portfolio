import React from "react";
import { socials } from "@/constants/socials";
import { IconLink, Page, PageLink } from "@/components/common";
import { ComputerCanvas } from "@/components/3d";

export default function Home() {

    return (
        <Page>
            <div className="flex-1 w-full flex flex-col gap-5 justify-between">
                <div className="flex flex-col gap-4">
                    <h1 className="group relative font-extrabold text-5xl">
                        Hi, I&apos;m <span className="text-violet-400">Vice</span>
                    </h1>
                    <h2 className="font-medium text-3xl">Software Developer</h2>
                    <p className="font-medium text-xl">
                        I build intuitive solutions to tackle everyday challenges.
                    </p>
                </div>
                <ul className="flex gap-5">
                    {socials.map(social => <IconLink key={social.name} title={social.name} href={social.link} icon={social.icon} />)}
                </ul>
            </div>
            <div className="flex-1 w-full">
                <ComputerCanvas />
            </div>
            <PageLink href="/projects" name="Projects"/>
        </Page>
    )
}
