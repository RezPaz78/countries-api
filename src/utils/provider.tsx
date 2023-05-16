"use client"

import { useState, PropsWithChildren } from "react"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ThemeProvider } from "next-themes"

const Providers = ({ children }: PropsWithChildren) => {
    const [client] = useState(
        new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } })
    )

    return (
        <QueryClientProvider client={client}>
            <ThemeProvider attribute="class">{children}</ThemeProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default Providers
