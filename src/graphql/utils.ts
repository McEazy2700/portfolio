"use client";

interface Tokens {
    token: string | null,
    refreshToken: string | null
}

const tokenName = "token"
const refreshTokenName = "refreshToken"

export function getTokens(): Tokens {
    const token = typeof window !== "undefined" ? localStorage.getItem(tokenName) : null
    const refreshToken = typeof window !== "undefined" ? localStorage.getItem(refreshTokenName) : null
    return { token, refreshToken }
}


export function setTokens(token: string, refreshToken: string) {
    if (typeof window !== "undefined") {
        localStorage.setItem(tokenName, token)
        localStorage.setItem(refreshTokenName, refreshToken)
    }
}

export function clearTokens() {
    if (typeof window !== "undefined") {
        localStorage.removeItem(tokenName)
        localStorage.removeItem(refreshTokenName)
    }
}
