"use client"

import Navbar from "@/components/Navbar"
import Providers from "@/utils/Provider"
import "../styles/globals.scss"
import "react-toastify/dist/ReactToastify.css"

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
