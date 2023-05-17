"use client"

import React from "react"
import { Menu } from "@headlessui/react"
import { ArrowDown2 } from "iconsax-react"
import { useFilter } from "@/context/regionFilter/filterContext"
import { Region } from "@/types/regionFilter"

const regions: { name: Region }[] = [
    { name: "Asia" },
    { name: "Africa" },
    { name: "America" },
    { name: "Europe" },
    { name: "Oceania" },
]

const Dropdown = () => {
    const [filter, dispatch] = useFilter()

    const filterHandler = (region: Region) => {
        dispatch({ type: "FILTER", payload: region })
    }

    return (
        <div className="relative w-48 rounded-md bg-white py-3 shadow-md dark:bg-dark-blue">
            <Menu>
                <Menu.Button className="flex w-full items-center justify-between rounded-md px-4 text-xs font-medium">
                    {filter ? (
                        <span>{filter}</span>
                    ) : (
                        <span>Filter By Region</span>
                    )}
                    <ArrowDown2 size={20} />
                </Menu.Button>
                <Menu.Items className="absolute top-12 z-50 rounded-md bg-white py-2 text-xs font-medium dark:bg-dark-blue">
                    <Menu.Item>
                        {({ active }) => (
                            <button
                                onClick={() =>
                                    dispatch({ type: "RESET", payload: "Asia" })
                                }
                                className={`w-full px-5 py-2 text-left ${
                                    active ? "bg-blue-500" : ""
                                }`}
                            >
                                Reset Filter
                            </button>
                        )}
                    </Menu.Item>
                    {regions.map(region => (
                        <Menu.Item key={region.name}>
                            {({ active }) => (
                                <button
                                    onClick={() => filterHandler(region.name)}
                                    className={`w-full px-5 py-2 text-left ${
                                        active ? "bg-blue-500" : ""
                                    }`}
                                >
                                    {region.name}
                                </button>
                            )}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Menu>
        </div>
    )
}

export default Dropdown
