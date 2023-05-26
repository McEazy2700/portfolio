"use client"
import React from "react";
import { motion } from "framer-motion";
import { socials } from "@/constants/socials";
import { IconLink, Page, PageLink } from "@/components/common";

export default function Home() {

    return (
        <Page>
            <div className="flex-1 flex flex-col gap-5 justify-between">
                <div className="flex flex-col gap-4">
                    <motion.h1 className="group relative font-extrabold text-violet-500 text-6xl">
                        Ezekiel Victor
                    </motion.h1>
                    <h2 className="font-medium text-3xl">Software Developer</h2>
                    <p className="font-medium text-xl">
                        I build intuitive solutions to tackle everyday challenges.
                    </p>
                </div>
                <ul className="flex gap-5">
                    {socials.map(social => <IconLink key={social.name} title={social.name} href={social.link} icon={social.icon} />)}
                </ul>
            </div>
            <div className="bg-white/5 border h-fit flex flex-col gap-3 flex-1 p-4 border-black/5 rounded-lg dark:border-white/5">
                <h3 className="font-semibold italic text-violet-400 text-lg">Pointless information</h3>
                <p className="text-justify">
                    I consider 2021 to be the year I &quot;seriously started programming&quot;
                    as universities in my country had an 8 months strike that year.
                    I spent all that time ferosiously codding, as I wanted to
                    build a website for renting houses (This was before I knew about Airbnb).
                </p>
                <p className="text-justify">
                    I have learnt a lot since then, and perhaps more imporantly,
                    I now actualy have a bearing on what I want my future to look like.
                    The Airbnb rival is still in development as it actually takes more than
                    just building a website to pull of.
                </p>
            </div>
            <PageLink href="/projects" name="Projects"/>
        </Page>
    )
}
