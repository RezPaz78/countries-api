import "../styles/globals.scss"
import Providers from "@/utils/provider"

export const metadata = {
    title: "Countries",
    description: "This is a test task for Alibaba",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="">
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
