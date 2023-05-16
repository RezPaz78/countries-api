"use client"

import Navbar from "@/components/Navbar"
import Providers from "@/utils/provider"
import "../styles/globals.scss"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    )
}
