"use client";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "@/utils/motions";
import { DoingsCard, Page, PageLink } from "@/components/common";
import doings from "@/constants/doings";

export default function About() {

    return (
        <Page>
            <div className="gap-3 flex flex-col lg:flex-row">
                <motion.div className="flex flex-col gap-5 flex-1" variants={textVariant()}>
                    <h1 className="text-4xl font-extrabold">About Me</h1>
                    <motion.div className={`
                        flex flex-col bg-violet-500/5 p-3 rounded
                        border border-blue-500/5 gap-2`} variants={fadeIn("", "", 0.1, 1)}>
                        <h2 className="font-semibold text-lg text-violet-600">
                            My name is Victor Ezekiel
                        </h2>
                        <p>
                            I&apos;m a passionate developer with experience in Python,
                            JavaScript and TypeScript (and a bit of Rust), and expertise in frameworks like
                            Django, FastAPI, React and Next.js. I&apos;m also a happy Vim and Linux user
                            (I don&apos;t use Arch by the way).
                        </p>
                    </motion.div>
                    <div className="bg-violet-500/5 p-3 gap-1 flex flex-col rounded border border-blue-500/5">
                        <h2 className="font-semibold text-violet-600 text-lg">A short story</h2>
                        <p>
                            I consider 2021 to be the year I &quot;seriously started programming&quot;
                            as universities in my country had an 8 months strike that year.
                            I spent all that time ferosiously codding, as I wanted to
                            build a website for renting houses (This was before I knew about Airbnb).
                        </p>
                        <p>
                            I have learnt a lot since then, and perhaps more imporantly,
                            I now have something I&apos;m really passionate about and will want
                            to spend the rest of my life doing.
                        </p>
                        <p className="text-xs text-right">
                            The Airbnb rival is still in development as it actually takes more than
                            just building a website to pull of.
                        </p>
                    </div>
                </motion.div>
                <div className="flex-1 h-full flex w-full flex-wrap gap-3 justify-center lg:pt-[3.7rem]">
                    {doings.map((doing, index) => <DoingsCard key={doing.title} index={index} doing={doing} />)}
                </div>
            </div>
            <PageLink href="/"  name="Home" left/>
            <PageLink href="/projects" name="Projects" />
        </Page>
    );
}


