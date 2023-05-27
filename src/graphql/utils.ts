"use client";

interface Tokens {
    token: string | null,
    refreshToken: string | null
}

export function getTokens(): Tokens {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null
    const refreshToken = typeof window !== "undefined" ? localStorage.getItem("refresh") : null
    return { token, refreshToken }
}
