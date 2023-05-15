import "./globals.css";
import Providers from "@/utils/provider";
import React from "react";

export const metadata = {
    title: "Countries",
    description: "This is a test task for Alibaba",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="text-red-800">
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
