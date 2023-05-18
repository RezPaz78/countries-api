"use client"

import React from "react"
import { Menu } from "@headlessui/react"
import { ArrowDown2 } from "iconsax-react"
import { Region } from "@/types/regionFilter"
import { useRouter, useSearchParams } from "next/navigation"

const regions: { name: Region }[] = [
    { name: "Asia" },
    { name: "Africa" },
    { name: "Americas" },
    { name: "Europe" },
    { name: "Oceania" },
]

const Dropdown = () => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const filterHandler = (region: Region) => {
        router.replace(`/?filter=${region}`)
    }

    return (
        <div className="relative w-48 rounded-md bg-white py-3 shadow-md dark:bg-dark-blue">
            <Menu>
                <Menu.Button className="flex w-full items-center justify-between rounded-md px-4 text-xs font-medium">
                    {searchParams.get("filter") ? (
                        <span>{searchParams.get("filter")}</span>
                    ) : (
                        <span>Filter By Region</span>
                    )}
                    <ArrowDown2 size={20} />
                </Menu.Button>
                <Menu.Items className="absolute top-12 z-50 rounded-md bg-white py-2 text-xs font-medium dark:bg-dark-blue">
                    <Menu.Item>
                        {({ active }) => (
                            <button
                                onClick={() => {
                                    router.replace("/")
                                }}
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
