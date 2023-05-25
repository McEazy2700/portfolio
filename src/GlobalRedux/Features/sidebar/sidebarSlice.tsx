"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@redux/store";

interface SidebarState {
    vissible: boolean
    open: boolean
}

const initialState: SidebarState = {
    vissible: false,
    open: false
}

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        toggleVissible: (state, action: PayloadAction<boolean>) => {
            state.vissible = action.payload
        },
        toggleOpen: (state, action: PayloadAction<boolean>) => {
            state.open = action.payload
        }
    }
})

export const { toggleOpen, toggleVissible } = sidebarSlice.actions;
export const selectSidebar = (state: RootState) => state.sidebar;
export default sidebarSlice.reducer;
