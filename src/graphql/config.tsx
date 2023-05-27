"use client";
import { Client, Provider, cacheExchange, fetchExchange } from "urql";
import { getTokens } from "@/graphql/utils";

const client = new Client({
    url: String(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT),
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: () => {
        const tokens = getTokens()
        return {
            headers: { authorization: tokens.token ? `Bearer ${tokens.token}` : ""}
        };
    }
});

interface AdminClientProps {
    children?: React.ReactNode;
}

export default function QueryProvider(props: AdminClientProps) {
    const { children } = props;
    return (
        <Provider value={client}>
            { children }
        </Provider>
    )
}
