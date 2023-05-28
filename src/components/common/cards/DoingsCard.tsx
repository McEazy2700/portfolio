"use client";
import { motion } from "framer-motion";
import { DoingType, ImageItemType } from "@/constants/doings";
import { Tilt } from "react-tilt";
import { fadeIn } from "@/utils/motions";
import Image from "next/image";

interface DoingCardProps {
    doing: DoingType,
    index: number
}

export default function DoingsCard(props: DoingCardProps) {
    const { index, doing } = props;
    return (
        <Tilt options={{ max: 45, scale: 1, speed: 450 }}
            className={`
                relative w-full aspect-square lg:max-w-[15rem]
                bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-violet-500/10
                border border-blue-500/10 rounded
            `}>
            <motion.div variants={fadeIn("left", "spring", 0.5 * index, 0.74)}
                className="w-full aspect-square py-28 flex-col h-full flex items-center justify-center p-[1px] rounded-[20px] shadow-card">
                <ul className="flex flex-wrap justify-center gap-1 items-center">
                    {doing.tools.map((tool, index) => <DoingTool key={tool.name} name={tool.name} alt={tool.alt} url={tool.url} index={index} />)}
                </ul>
                <div className="absolute text-xs bottom-1 sm:text-base text-black/80 dark:text-white/80">{doing.title}</div>
            </motion.div>
        </Tilt>
    );
}

function DoingTool(props: ImageItemType & {index: number}) {
    const { name, alt, url } = props;
    return (
        <motion.div
            className={`
            flex items-center shadow shadow-black/30 max-w-[3rem] overflow-hidden
            dark:shadow-white/20 justify-center flex-col gap-1 bg-gradient-to-br
            from-violet-500/20 to-blue-500/20 via-purple-500/70
            border border-blue-500/20 rounded p-1`}>
            <Image className="w-8 aspect-square" src={url} alt={alt ?? name} width="100" height="100" />
            <span className="text-xs text-black/70 dark:text-white/70">{name}</span>
        </motion.div>
    );
}
