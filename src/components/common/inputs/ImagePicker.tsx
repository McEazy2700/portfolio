"use client";
import React from "react";
import { addImages, selectImages } from "@/GlobalRedux/Features/images/imagesSlice";
import { useAppDispatch, useAppSelector } from "@/GlobalRedux/hooks";
import { ImageType, useImagesQuery } from "@/graphql/codegen/generated";
import { Button, ImageList, ImageListItem, TextField } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import FullCircularProgress from "../feedback/loading/FullCircularProgress";
import ImagePickerItem from "./ImagePickerItem";

const QUERY_LIMIT = 20

interface ImagePickerProps {
    onSelect: (image: ImageType) => void
}

export default function ImagePicker(props: ImagePickerProps) {
    const { onSelect } = props;
    const images = useAppSelector(selectImages);
    const [{ fetching, data, error }, refetch] = useImagesQuery({ variables: { options: { offset: images.count, limit: QUERY_LIMIT } } })

    const dispatch = useAppDispatch();

    React.useEffect(() => {
        if (data?.images.data) {
            dispatch(addImages(data))
        }
    }, [dispatch, data])

    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-1">
                <TextField size="small" fullWidth label="Filter" placeholder="Image description"/>
                <Button className="w-fit" title="Filter" variant="contained" color="secondary"><FaFilter size={20}/></Button>
            </div>
            <ImageList variant="quilted" className="relative h-fit min-h-[70vh] rounded w-full bg-gray-300/20" cols={4} rowHeight={200}>
                {images.images.map(image => (
                    <ImageListItem className="h-full p-1" key={image.id}>
                        <ImagePickerItem onSelect={onSelect} image={image}/>
                    </ImageListItem>
                ))}
                <FullCircularProgress show={fetching} />
            </ImageList>
        </div>
    )
}
