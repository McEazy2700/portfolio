import { RootState } from "@/GlobalRedux/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
    user: {
        __typename?: 'UserType',
        id: number,
        email: string,
        profile: {
            __typename?: 'ProfileType',
            id: number,
            firstName?: string | null,
            lastName?: string | null,
            bio?: string | null,
            image?: {
                __typename?: 'ImageType',
                url: string,
                description: string,
                id: string
            } | null
        }
    } | undefined
}

interface AdminState {
    navOpen: boolean;
    user?: UserState,
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
        setUser: (state, action: PayloadAction<UserState>) => {
            return { ...state, user: action.payload }
        }
    }
})

export const { toggleNav, setUser } = adminSlcie.actions;
export const selectAdmin = (state: RootState) => state.admin;
export default adminSlcie.reducer;
