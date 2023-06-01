"use client"
import { FullCircularProgress, ImagePicker, TimedAlert } from "@/components/common";
import { AlertVariants } from "@/components/common/feedback/alert/TimedAlert";
import { ImageType, ProjectType, useCreateUpdateProjectMutation } from "@/graphql/codegen/generated";
import { Box, Button, ImageList, ImageListItem, Modal, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";


interface ProjectFormProps {
    defaultProject?: ProjectType
}

export default function ProjectForm(props: ProjectFormProps) {
    const { defaultProject } = props
    const [{ data, fetching, error }, mutate] = useCreateUpdateProjectMutation();
    const [images, setImages] = React.useState<Set<ImageType>>(new Set(defaultProject?.images));
    const [showImagePicker, setShowImagePicker] = React.useState(false);
    const titleRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const descRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const githubRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const urlRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const router = useRouter();


    const toggleImagePicker = () => setShowImagePicker(curr => !curr);

    const handleImageSelect = (image: ImageType) => {
        setImages(curr => curr.add(image));
        toggleImagePicker();
    }

    const handleSubmit: React.FormEventHandler = (e) => {
        e.preventDefault()
        mutate({
            input: {
                title: titleRef.current.value,
                description: descRef.current.value,
                imageIds: Array.from(images).map(image => parseInt(image.id)),
                github: githubRef.current.value,
                liveUrl: githubRef.current.value,
                id: defaultProject?.id ? defaultProject.id : null
            }
        })
    }

    const onSuccess = () => router.replace("/admin/projects");
    return (
        <Box onSubmit={handleSubmit} className="relative p-4" component="form">
            {data?.project.success && <TimedAlert after={onSuccess}>Project Saved</TimedAlert>}
            {error && <TimedAlert duration={8000} variant={AlertVariants.ERROR}>{error.message}</TimedAlert>}
            <fieldset className="flex bg-gray-500/5 rounded border dark:border-gray-600/5 border-black/5 flex-col gap-3 p-4">
                <legend className="text-violet-500 font-semibold text-xl bg-white p-1 px-2 dark:bg-zinc-900 rounded border dark:border-gray-400/5 border-black/5">New Project</legend>
                <TextField
                    required
                    fullWidth
                    size="small"
                    inputRef={titleRef}
                    defaultValue={defaultProject?.title}
                    variant="filled"
                    label="Project title"
                    placeholder="My new project" />
                <section className="border border-white/10 rounded p-1">
                    <Typography gutterBottom className="p-1 px-2 text-violet-400" component="h2">Images</Typography>
                    <ImageList cols={3} rowHeight={250}>
                        {images && Array.from(images).map(image => (
                            <ImageListItem key={image.id}>
                                <Image
                                    width="500" height="400"
                                    alt={image.description} src={image.url}
                                    className="h-full aspect-square object-cover rounded" />
                            </ImageListItem>
                        ))}
                        <ImageListItem className="p-1">
                            <Button onClick={toggleImagePicker}
                                className="w-full h-full !text-black dark:!text-white hover:!bg-gray-300 !bg-gray-200 dark:hover:!bg-zinc-900 dark:!bg-zinc-800 self-end"
                                variant="contained">Add Image +</Button>
                        </ImageListItem>
                    </ImageList>
                </section>
                <section className="border flex-col flex gap-1 border-black/5 dark:border-white/10 rounded p-1">
                    <Typography gutterBottom className="p-1 px-2 text-violet-400" component="h2">URLs</Typography>
                    <div className="flex gap-1">
                        <TextField defaultValue={defaultProject?.github} inputRef={githubRef} variant="filled" label="Github" fullWidth type="url" />
                        <TextField defaultValue={defaultProject?.liveUrl} inputRef={urlRef} variant="filled" label="Live URL" fullWidth type="url" />
                    </div>
                </section>
                <TextField
                    rows={5}
                    required
                    multiline
                    fullWidth
                    type="text"
                    inputRef={descRef}
                    variant="outlined"
                    label="Description"
                    defaultValue={defaultProject?.description}
                    placeholder="Project description" />
                <Button variant="contained" type="submit">Submit</Button>
            </fieldset>
            <Modal aria-labelledby="Image picker" aria-describedby="select image"
                className="p-4 py-7 max-h-[95vh] overflow-auto md:p-10 md:px-20" open={showImagePicker} onClose={toggleImagePicker}>
                <div className="flex bg-white rounded flex-col outline-none p-5 dark:bg-zinc-800">
                    <Typography className="text-violet-400 font-medium !text-2xl" gutterBottom component="h1">Image Picker</Typography>
                    <ImagePicker onSelect={handleImageSelect} />
                </div>
            </Modal>
            <FullCircularProgress show={fetching} />
        </Box>
    )
}
