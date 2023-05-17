"use client"

import { useState, PropsWithChildren } from "react"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ThemeProvider, useTheme } from "next-themes"
import { ToastContainer } from "react-toastify"

const Providers = ({ children }: PropsWithChildren) => {
    const [client] = useState(
        new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } })
    )

    const { theme } = useTheme()

    return (
        <QueryClientProvider client={client}>
            <ThemeProvider attribute="class">{children}</ThemeProvider>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme={theme === "dark" ? "dark" : "light"}
            />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default Providers
