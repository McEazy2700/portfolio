import { Input, PreviewImage } from "@/components/common";
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
            <Input onChange={handleTextChange} label="Description" variant="outlined"
                className="absolute bottom-2 w-[95%] left-1/2 -translate-x-1/2"/>
        </div>
    );
}
