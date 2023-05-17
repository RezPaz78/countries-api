"use client"

import { getCountry } from "@/api/country"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { usePathname } from "next/navigation"
import React from "react"

const CountryDetails = () => {
    const pathname = usePathname()
    const countryName = pathname.substring(1)
    const { data, isLoading, isFetching, error } = useQuery({
        queryKey: ["hydrate-country", countryName],
        queryFn: async () => {
            const country = await getCountry(countryName)
            return country[0]
        },
    })

    return (
        <div className="h-80 w-full md:grid md:grid-cols-2 md:gap-20">
            {error ? (
                <p>There was an error fetching country details!!!</p>
            ) : isLoading || isFetching ? (
                <p>Loading...</p>
            ) : data ? (
                <>
                    <div className="relative mb-10 w-full rounded-md md:mb-0">
                        <Image
                            src={data.flags.png}
                            alt={data.name.common}
                            width={4000}
                            height={3000}
                            className="absolute left-0 top-0 h-full w-full rounded-md object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center pb-10 md:pb-0">
                        <h2 className="mb-7 text-2xl font-extrabold">
                            {data.name.common}
                        </h2>
                        <div className="mb-14 md:grid md:grid-cols-2">
                            <ul className="mb-10 [&>*]:mb-1 [&>li>span]:font-semibold">
                                <li>
                                    <span>Native Name:</span>{" "}
                                    {
                                        data.name.nativeName[
                                            Object.keys(data.name.nativeName)[0]
                                        ].common
                                    }
                                </li>
                                <li>
                                    <span>Population:</span> {data.population}
                                </li>
                                <li>
                                    <span>Region:</span> {data.region}
                                </li>
                                <li>
                                    <span>Sub Region:</span> {data.subregion}
                                </li>
                                <li>
                                    <span>Capital:</span> {data.capital}
                                </li>
                            </ul>
                            <ul className="[&>*]:mb-1 [&>li>span]:font-semibold">
                                <li>
                                    <span>Top Level Domain:</span>{" "}
                                    {data.tld.map(tld => (
                                        <span key={tld}>{tld}, </span>
                                    ))}
                                </li>
                                <li>
                                    <span>Currencies:</span>{" "}
                                    {
                                        data.currencies[
                                            Object.keys(data.currencies)[0]
                                        ].name
                                    }
                                </li>
                                <li>
                                    <span>Languages:</span>{" "}
                                    {
                                        data.languages[
                                            Object.keys(data.languages)[0]
                                        ]
                                    }
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center">
                            <span className="font-semibold">
                                Border Countries:
                            </span>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    )
}

export default CountryDetails
