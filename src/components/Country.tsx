"use client"

import React from "react"
import { CountryItem } from "@/types"
import Image from "next/image"
import { useRouter } from "next/navigation"

const Country = ({ name, population, capital, region, flag }: CountryItem) => {
    const router = useRouter()

    return (
        <div
            className="flex h-[350px] cursor-pointer flex-col justify-between rounded-md bg-white dark:bg-dark-blue"
            onClick={() => router.push(`/${name}`)}
        >
            <div className="relative h-40 w-full rounded-md">
                <Image
                    alt={name}
                    src={flag}
                    width={4000}
                    height={3000}
                    className="absolute left-0 top-0 h-full w-full rounded-t-md object-cover"
                    loading="lazy"
                />
            </div>
            <div className="px-7 pb-7">
                <h2 className="mb-5 overflow-hidden text-ellipsis whitespace-nowrap text-xl font-extrabold">
                    {name}
                </h2>
                <div className="mb-1">
                    <span className="font-semibold">Population: </span>
                    <span className="font-light">{population}</span>
                </div>
                <div className="mb-1">
                    <span className="font-semibold">Region: </span>
                    <span className="font-light">{region}</span>
                </div>
                <div>
                    <span className="font-semibold">Capital: </span>
                    <span className="font-light">{capital}</span>
                </div>
            </div>
        </div>
    )
}

export default Country
