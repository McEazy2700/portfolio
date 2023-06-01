"use client"
import { PreviewImage } from "@/components/common";
import { TextField } from "@mui/material";
import React from "react";

interface ImageUploadPreviewProps {
    imageUrl: string;
    getText?: (text: string) => void;
}

export default function ImageUploadPreview(props: ImageUploadPreviewProps) {
    const { imageUrl, getText } = props;

    const handleTextChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (getText) { getText(e.target.value)}
    }

    return (
        <div className="relative">
            <PreviewImage src={imageUrl}/>
            <TextField onChange={handleTextChange} label="Description" variant="outlined"
                className="absolute bottom-2 w-[95%] left-1/2 -translate-x-1/2"/>
        </div>
    );
}
