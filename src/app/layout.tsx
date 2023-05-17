import Navbar from "@/components/Navbar"
import Providers from "@/utils/Provider"
import { Metadata } from "next"
import "../styles/globals.scss"

export const metadata: Metadata = {
    title: "Countries",
    description: "A NextJS app for searching among countries.",
}

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
