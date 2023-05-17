import { SearchNormal1 } from "iconsax-react"
import React from "react"

const Searchbox = () => {
    return (
        <span className="mb-5 flex w-full basis-full items-center justify-start rounded-md bg-white py-3 pl-7 shadow dark:bg-dark-blue sm:mb-0 sm:basis-1/3 md:w-auto">
            <SearchNormal1
                size={17}
                className="mr-5 text-black dark:text-white"
            />
            <input
                type="text"
                className="bg-white font-light text-black placeholder:text-sm focus:outline-none dark:bg-dark-blue dark:text-white"
                placeholder="Search for a country..."
            />
        </span>
    )
}

export default Searchbox
