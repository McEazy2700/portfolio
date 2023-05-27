"use client"
import { motion, AnimatePresence } from "framer-motion";
import { BsGithub, BsGlobe2 } from "react-icons/bs";
import { ProjectType } from "@/graphql/codegen/generated";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard(props: { project: ProjectType }) {
    const { project } = props;
    return (
        <motion.div
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`
                flex max-w-lg overflow-hidden gap-2 border relative
                border-purple-500/30 rounded`} key={project.id}>
            <AnimatePresence>
                {(project.images && project.images.length > 0) ? project.images.map(image => (
                    <motion.div
                        exit={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="max-h-[12rem]" key={image.id}>
                        <Image className="aspect-square h-full object-cover" height="140" width="200" src={image.url} alt={image.description} />
                    </motion.div>
                )) : (
                    <motion.div
                        exit={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }} >
                        <Image height="140" width="200" src="/chillCodder.svg" alt="chill codder" />
                    </motion.div>
                )}
            </AnimatePresence>
            <section className="flex flex-col justify-end bg-violet-500/5 overflow-hidden w-full p-2">
                <h3 className="font-semibold text-lg md:text-xl w-full whitespace-nowrap text-ellipsis overflow-hidden flex items-end flex-1 text-violet-500">{project.title}</h3>
                <div className="w-full h-[1px] dark:bg-white/5 bg-black/5" />
                <span className="flex-1 flex text-xs md:text-base items-end line-clamp-3 font-medium dark:text-white/60 italic">{project.description}</span>
            </section>
            <section className="absolute flex gap-1 top-1 w-fit p-0.1 right-1">
                {project.github && (
                    <Link title="Github" className={`
                                    bg-blue-500/10 border flex items-center
                                    aspect-square border-blue-300/10 p-1 rounded text-blue-500
                            `} href={project.github}><BsGithub size={20} /></Link>)}
                {project.liveUrl && (
                    <Link title="Live URL" className={`
                                    bg-blue-500/10 border flex items-center
                                    aspect-square border-blue-300/10 p-1 rounded text-blue-500
                            `} href={project.liveUrl}><BsGlobe2 size={20} /></Link>)}
            </section>
        </motion.div>
    );
}
