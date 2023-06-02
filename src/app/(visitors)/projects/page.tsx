"use client";
import { motion } from "framer-motion";
import { Page, PageLink, ProjectList } from "@/components/common";
import { textVariant } from "@/utils/motions";

export default function Projects() {
    return (
        <Page>
            <motion.div className="flex flex-1 flex-col gap-4" variants={textVariant()}>
                <h1 className="text-4xl font-extrabold">Experience / Projects</h1>
                <ProjectList />
            </motion.div>
            <PageLink name="About" href="/about" left />
            <PageLink name="Contact" href="/contact" />
        </Page>
    );
}
