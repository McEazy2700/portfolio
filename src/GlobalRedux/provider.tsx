"use client";
import { Provider } from "react-redux";
import { store } from "@redux/store";
import React from "react";

interface ReduxProviderProps {
    children?: React.ReactNode;
}

export default function ReduxProvider(props: ReduxProviderProps){
    const { children } = props;
    return (
        <Provider store={store}>
            { children }
        </Provider>
    )
}
