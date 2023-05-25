"use client";

interface Tokens {
    token: string | null,
    refreshToken: string | null
}

export function getTokens(): Tokens {
    const token = localStorage.getItem("token")
    const refreshToken = localStorage.getItem("refresh")
    return { token, refreshToken }
}
