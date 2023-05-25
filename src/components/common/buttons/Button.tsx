import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {};

export default function Button(props: ButtonProps) {
    const { className, children, ...rest } = props;
    return (
        <button {...rest}
            className={`
                bg-violet-400 text-black/80 p-1 px-2 rounded font-medium
                hover:bg-violet-600 hover:text-white/80 transition`}>{ children }</button>
    )
}
