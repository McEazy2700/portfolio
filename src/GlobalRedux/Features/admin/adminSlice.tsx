import { RootState } from "@/GlobalRedux/store";
import { UserType } from "@/graphql/codegen/generated";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AdminState {
    navOpen: boolean;
    user?: UserType,
}

const initialState: AdminState = {
    navOpen: false,
    user: undefined
}

const adminSlcie = createSlice({
    name: "admin",
    initialState,
    reducers: {
        toggleNav: (state, action: PayloadAction<boolean>) => {
            return { ...state, navOpen: action.payload }
        },
        setUser: (state, action: PayloadAction<UserType>) => {
            return { ...state, user: action.payload }
        }
    }
})

export const { toggleNav, setUser } = adminSlcie.actions;
export const selectAdmin = (state: RootState) => state.admin;
export default adminSlcie.reducer;
