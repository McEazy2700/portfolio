import { LoadingLogo } from "@/components/common";

export default function Loading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white/30">
            <LoadingLogo />
        </div>
    );
}
