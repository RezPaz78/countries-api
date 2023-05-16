"use client"

import ThemeButton from "./ThemeButton"

const Navbar = () => {
    return (
        <nav className="px-14 py-5 shadow fixed top-0 z-50 w-full flex justify-between items-center">
            <span className="font-semibold tracking-wider text-lg">
                Where in the world?
            </span>
            <ThemeButton />
        </nav>
    )
}

export default Navbar
