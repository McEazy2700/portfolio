import Image from "next/image";
import React from "react";

type PreviewImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {}

export default function PreviewImage(props: PreviewImageProps) {
    const { src, alt, className } = props;
    return (
        <div className="rounded-lg overflow-hidden w-full">
            <Image width="0" height="0" sizes="100vw" src={String(src)} alt={String(alt)}
                className={`aspect-video w-full object-cover ${className}`} />
        </div>
    );
}
