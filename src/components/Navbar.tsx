"use client"

import Link from "next/link"
import ThemeButton from "./ThemeButton"

const Navbar = () => {
    return (
        <nav className="fixed top-0 z-50 flex w-full items-center justify-between px-5 py-7 shadow md:px-14 md:py-5">
            <Link
                href="/"
                className="text-sm font-semibold tracking-wider md:text-lg"
            >
                Where in the world?
            </Link>
            <ThemeButton />
        </nav>
    )
}

export default Navbar
