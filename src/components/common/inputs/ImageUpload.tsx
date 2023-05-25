"use client"
import React from "react";
import { Button } from "@mui/material";
import { ImageType, useNewImageMutation } from "@/graphql/codegen/generated"
import { DragAndDrop, FullCircularProgress, ImageUploadPreview, TimedAlert } from "@/components/common";

interface ImageUploadProps {
    onSuccess?: (image: ImageType) => void;
}

export default function ImageUpload(props: ImageUploadProps) {
    const { onSuccess } = props;
    const [{ fetching, data }, mutate] = useNewImageMutation()
    const [imageFile, setImageFile] = React.useState<File>()
    const [description, setDescription] = React.useState<string>();

    const getDropedImage = (file: File) => setImageFile(file)

    const handleUpload: React.FormEventHandler = (e) => {
        e.preventDefault()
        if (imageFile) {
            mutate({ input: { file: imageFile, description }})
        }
    }

    const handleSuccess = () => {
        if (data?.newImage.data && onSuccess) {
            onSuccess(data.newImage.data);
        }
    }

    const handleSetDescription = (text: string) => setDescription(text);

    return (
        <form onSubmit={handleUpload} className="relative flex p-3 flex-col gap-3">
            <div className="bg-white/60 rounded-lg gap-2 flex flex-col items-center text-black p-10">
                <p className="text-xl font-medium">Accepts PNG, JPG, WEBP and SVG</p>
                <DragAndDrop getFile={getDropedImage} fileType="image" extensions={["png", "jpg", "webp", "svg"]} />
            </div>
            <div className="rounded flex">
                {imageFile && (<ImageUploadPreview getText={handleSetDescription} imageUrl={URL.createObjectURL(imageFile)}/>)}
            </div>
            <Button className="bg-violet-500 hover:bg-violet-700 active:bg-violet-700"
                onClick={handleUpload} type="button" variant="contained">Upload</Button>
            {data?.newImage.success && <TimedAlert after={handleSuccess}>Image Uploaded</TimedAlert>}
            <FullCircularProgress show={fetching}/>
        </form>
    )
}
