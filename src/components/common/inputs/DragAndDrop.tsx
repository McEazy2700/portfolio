"use client";
import React from "react";
import { motion } from "framer-motion";

interface DragAndDropProps {
    fileType: "image" | "file",
    extensions: string[],
    getFile: (file: File) => void
}

export default function DragAndDrop(props: DragAndDropProps) {
    const { fileType, extensions, getFile } = props;
    const [dragActive, setDragActive] = React.useState(false);
    const [err, setErr] = React.useState<string>();

    const handleDrag: React.DragEventHandler = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.type === "dragover") {
            setDragActive(true)
        } else if (e.type === "dragleave") {
            setDragActive(false)
        }
    }

    const handleDrop: React.DragEventHandler = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.dataTransfer?.files[0]) {
            const validation = validateFile(e.dataTransfer.files[0], extensions)
            if (validation.isValid) {
                getFile(e.dataTransfer.files[0]);
                setErr(undefined);
            } else {
                setErr(`${validation.extension} files are not accepted`)
            }
        }
        setDragActive(false)
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        e.preventDefault();
        if (e.target?.files?.[0]) {
            getFile(e.target.files[0])
        }
    }

    return (
        <motion.div
            animate={{ scale: dragActive ? 1.1 : 1}}
            onDragOver={handleDrag}
            className="relative bg-black/30 w-full flex items-center flex-col justify-center border-spacing-20 rounded-lg border-2 border-dashed">
            { err && <FileError>{ err }</FileError>}
            <label htmlFor="dragAndDrop" className="p-28 w-full flex items-center justify-center text-lg font-medium cursor-pointer">
                Drag and drop or <span className="text-violet-400">click</span> to select files
            </label>
            <input id="dragAndDrop" onChange={handleChange} accept={`${fileType}/*`} className="hidden" type="file"/>
            {dragActive && <div onDrop={handleDrop} onDragEnter={handleDrag} onDragOver={handleDrag} onDragLeave={handleDrag} className="absolute inset-0"/>}
        </motion.div>
    );
}

type FileErrorProps = { children?: React.ReactNode }

function FileError({ children }: FileErrorProps) {
    return (
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-4 bg-red-100 border border-red-400 p-3 rounded text-red-500">{ children }</motion.p>
    );
}

interface ValidationResult {
    isValid: boolean
    extension: string
}

function validateFile(file: File, extenstions: string[]): ValidationResult {
    const extension = String(file.name.trim().split(".").pop())
    if (extenstions.includes(extension)) {
        return { isValid: true, extension }
    }
    return { isValid: false, extension }
}
