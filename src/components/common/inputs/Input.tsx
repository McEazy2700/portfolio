"use client";
import React from "react";
import { TextField, TextFieldProps } from "@mui/material";

type InputProps = TextFieldProps;

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { label, className, ...rest } = props;
    return (
        <div className="w-full h-fit flex items-center relative gap-3">
            <div className={`${className}`}>
                <TextField className="w-full border border-violet-400" ref={ref} {...rest}/>
            </div>
        </div>
    )
})

Input.displayName = "Input";

export default Input;
