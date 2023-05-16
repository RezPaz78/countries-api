import { Moon, Sun1 } from "iconsax-react"
import React from "react"
import { useTheme } from "next-themes"

const ThemeButton = () => {
    const { theme, setTheme } = useTheme()

    const changeThemeHandler = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark")
    }

    return (
        <button
            onClick={changeThemeHandler}
            className="flex items-center justify-between"
        >
            {theme === "dark" ? (
                <Sun1 size={15} className="mr-2 text-white" />
            ) : (
                <Moon size={15} className="mr-2 text-black" />
            )}
            <span className="text-xs font-semibold tracking-wider">
                {theme === "dark" ? "Light" : "Dark"} Mode
            </span>
        </button>
    )
}

export default ThemeButton
