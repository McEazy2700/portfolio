"use client";

interface Tokens {
    token: string | null,
    refreshToken: string | null
}

export function getTokens(): Tokens {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null
    const refreshToken = typeof window !== "undefined" ? localStorage.getItem("refreshToken") : null
    return { token, refreshToken }
}


export function setTokens(token: string, refreshToken: string) {
    if (typeof window !== "undefined") {
        localStorage.setItem("token", token)
        localStorage.setItem("refreshToken", refreshToken)
    }
}
