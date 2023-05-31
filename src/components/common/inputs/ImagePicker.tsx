"use client";
import React from "react";
import { addImages, selectImages } from "@/GlobalRedux/Features/images/imagesSlice";
import { useAppDispatch, useAppSelector } from "@/GlobalRedux/hooks";
import { ImageType, useImagesQuery } from "@/graphql/codegen/generated";
import { Button, ImageList, ImageListItem, Modal, TextField, Typography } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import FullCircularProgress from "../feedback/loading/FullCircularProgress";
import { ImagePickerItem, ImageUpload, TimedAlert } from "@/components/common";
import { AlertVariants } from "../feedback/alert/TimedAlert";

const QUERY_LIMIT = 20

interface ImagePickerProps {
    onSelect: (image: ImageType) => void
}

export default function ImagePicker(props: ImagePickerProps) {
    const { onSelect } = props;
    const images = useAppSelector(selectImages);
    const [showImageUpload, setShowImageUpload] = React.useState(false)
    const [description, setDescription] = React.useState<string>();
    const dispatch = useAppDispatch();
    const [{ fetching, data, error }, refetch] = useImagesQuery({
        variables: {
            options: {
                offset: images.count, limit: QUERY_LIMIT, filter: {
                    description
                }
            }
        }
    })

    const toggleImageUpload = () => setShowImageUpload(curr => !curr);

    const filteredImages = React.useMemo(() => (
        images.images.filter(image => image.description.includes(description ?? ""))
    ), [images, description])

    const handleDescriptionChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setDescription(e.target.value)
    }

    const handleRefetch = () => {
        refetch({ requestPolicy: "network-only" })
    }

    React.useEffect(() => {
        if (data?.images.data) {
            dispatch(addImages(data))
        }
    }, [dispatch, data])

    return (
        <div className="flex flex-col gap-2">
            {error && <TimedAlert variant={AlertVariants.ERROR} duration={8000}>{error.message}</TimedAlert>}
            <div className="flex gap-1">
                <TextField onChange={handleDescriptionChange}
                    size="small" fullWidth label="Filter" placeholder="Image description" />
                <Button
                    type="button"
                    title="Filter"
                    className="w-fit"
                    onClick={handleRefetch}
                    variant="contained" color="secondary">
                    <FaFilter size={20} />
                </Button>
                <Button
                    type="button"
                    title="Add new image"
                    className="w-fit"
                    onClick={toggleImageUpload}
                    variant="outlined" color="secondary">
                    + New Image
                </Button>
            </div>
            <ImageList variant="quilted" className="relative border !border-black/5 h-fit min-h-[70vh] rounded w-full bg-gray-300/20" cols={3} rowHeight={200}>
                {filteredImages.map(image => (
                    <ImageListItem className="h-full p-1" key={image.id}>
                        <ImagePickerItem onSelect={onSelect} image={image} />
                    </ImageListItem>
                ))}
                <FullCircularProgress show={fetching} />
            </ImageList>
            <Modal onClose={toggleImageUpload} open={showImageUpload}
                className="p-4 py-7 max-h-[95vh] overflow-auto md:p-10 md:px-32" >
                <div className="flex bg-white rounded flex-col outline-none p-5 dark:bg-zinc-800">
                    <Typography className="text-violet-400 font-medium !text-2xl" gutterBottom component="h1">Image Upload</Typography>
                    <ImageUpload onSuccess={handleRefetch} />
                </div>
            </Modal>
        </div>
    )
}
