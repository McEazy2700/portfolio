"use client";

import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "@redux/Features/sidebar/sidebarSlice";
import imagesReducer from "@redux/Features/images/imagesSlice";


export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        images: imagesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
