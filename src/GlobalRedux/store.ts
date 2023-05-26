"use client";

import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "@redux/Features/sidebar/sidebarSlice";
import imagesReducer from "@redux/Features/images/imagesSlice";
import adminReducer from "@redux/Features/admin/adminSlice";


export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        images: imagesReducer,
        admin: adminReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
