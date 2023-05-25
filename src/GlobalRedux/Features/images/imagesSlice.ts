import { RootState } from "@/GlobalRedux/store";
import { ImageType, ImagesQuery } from "@/graphql/codegen/generated";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ImagesState {
    count: number;
    images: Array<ImageType>;
}

const initialState: ImagesState = {
    count: 0,
    images: []
}

const imagesSlice = createSlice({
    name: "images",
    initialState,
    reducers: {
        addImages: (state, action: PayloadAction<ImagesQuery>) => {
            const images = [...state.images, ...action.payload.images.data] as Array<ImageType>;
            const count = state.count + action.payload.images.count;
            return { count, images }
        }
    }
})

export const { addImages } = imagesSlice.actions;
export const selectImages = (state: RootState) => state.images;

export default imagesSlice.reducer;
