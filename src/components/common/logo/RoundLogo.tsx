import Image from "next/image";


export default function RoundLogo() {
    return (
        <div className={`
            flex items-center justify-center w-full p-3 transition aspect-square
            shadow-md border shadow-black/10 dark:shadow-white/10 hover:shadow-black/20 dark:hover:shadow-white/20
            hover:bg-black/20 dark:hover:bg-white/20 bg-black/10 dark:bg-white/10
            border-black/10 dark:border-white/10 rounded-full outline-none `}>
            <Image width={731} height={575} src="/vice.svg" alt="vice logo"
                className="w-full max-w-[4rem] pointer-events-none object-center aspect-square" />
        </div>
    );
}
