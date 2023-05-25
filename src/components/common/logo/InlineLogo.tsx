import Image from "next/image";

export default function InlineLogo() {
    return (
        <span className="flex flex-1 aspect-square items-end">
            <Image width={731} height={575} src="/vice.svg" alt="vice logo"
                className="w-full pointer-events-none object-center aspect-square"  />
        </span>
    )
}
