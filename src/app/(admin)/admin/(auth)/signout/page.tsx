"use client"
import { FullLoadingLogo } from "@/components/common";
import { clearTokens } from "@/graphql/utils";
import { useRouter } from "next/navigation";
import React from "react";

export default function SignoutPage() {
    const router = useRouter()

    React.useEffect(() => {
        clearTokens()
        router.replace("/")
    }, [router])

    return (
        <FullLoadingLogo show />
    )
}
