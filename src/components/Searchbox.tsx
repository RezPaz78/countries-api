"use client"

import { useSearch } from "@/context/searchContext"
import { SearchNormal1 } from "iconsax-react"
import React from "react"

const Searchbox = () => {
    const [, dispatch] = useSearch()

    return (
        <span className="mb-5 flex w-full basis-full items-center justify-start rounded-md bg-white px-7 py-3 shadow dark:bg-dark-blue sm:mb-0 sm:basis-1/3 md:w-auto">
            <SearchNormal1
                size={17}
                className="mr-5 text-black dark:text-white"
            />
            <input
                type="text"
                className="w-full bg-white font-light text-black placeholder:text-sm focus:outline-none dark:bg-dark-blue dark:text-white"
                placeholder="Search for a country..."
                onChange={event =>
                    dispatch({ type: "SET", payload: event.target.value })
                }
            />
        </span>
    )
}

export default Searchbox
