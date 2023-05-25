"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ImageType } from "@/graphql/codegen/generated";
import Image from "next/image";
import React from "react";

interface ImagePickerItemProps {
    image: ImageType;
    onSelect: (image: ImageType) => void;
}

export default function ImagePickerItem(props: ImagePickerItemProps) {
    const { image, onSelect } = props;
    const [showPreview, setShowPreview] = React.useState(false);

    const handlePreview: React.MouseEventHandler = (e) => {
        if (e.type === "mouseover")  {
            setShowPreview(true)
        } else if (e.type === "mouseleave") {
            setShowPreview(false)
        }
    }

    const handleFocus: React.FocusEventHandler = (e) => {
        console.log(e.type)
    }

    const handleSelect = () => onSelect(image);

    return (
        <div onKeyDown={handleSelect} onClick={handleSelect} onMouseOver={handlePreview} onMouseLeave={handlePreview} onFocus={handleFocus}
            className="flex h-full w-full flex-col cursor-pointer rounded overflow-hidden">
            <Image className="h-full object-cover aspect-square pointer-events-none" width="400" height="400" alt={image.description} src={image.url} />
            <FloatingImagePreview show={showPreview} image={image} />
        </div>
    )
}

function FloatingImagePreview(props: { image: ImageType, show: boolean }) {
    const { image, show } = props;
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ backgroundImage: `url(${image.url})`, backgroundSize: "cover" }}
                    className="aspect-video w-screen translate-x-1 text-white/70 translate-y-1 rounded overflow-hidden max-w-sm shadow-lg z-40 absolute pointer-events-none">
                    <div className="bg-gradient-to-b p-2 font-medium w-full h-full flex from-transparent to-black">
                        <p className="self-end">{image.description}</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
