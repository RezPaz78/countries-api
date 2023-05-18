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
        <div className="grid h-80 w-full grid-cols-1 md:grid-cols-2 md:gap-20">
            {error ? (
                <p>There was an error fetching country details!!!</p>
            ) : isLoading || isFetching ? (
                <p>Loading...</p>
            ) : data ? (
                <>
                    <div className="mb-10 w-full rounded-md md:relative md:mb-0">
                        <Image
                            src={data.flag}
                            alt={data.name}
                            width={4000}
                            height={3000}
                            className="h-full w-full rounded-md object-cover md:absolute md:left-0 md:top-0"
                            loading="lazy"
                        />
                    </div>
                    <div className="flex flex-col justify-center pb-10 md:pb-0">
                        <h2 className="mb-7 text-2xl font-extrabold">
                            {data.name}
                        </h2>
                        <div className="mb-14 grid grid-cols-1 md:grid-cols-2">
                            <ul className="mb-10 [&>*]:mb-1 [&>li>span]:font-semibold">
                                <li>
                                    <span>Native Name:</span> {data.nativeName}
                                </li>
                                <li>
                                    <span>Population:</span>{" "}
                                    {data.population.toLocaleString("en-US")}
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
                                    {data.topLevelDomain.map(tld => (
                                        <span key={tld}>{tld}, </span>
                                    ))}
                                </li>
                                <li>
                                    <span>Currencies:</span>{" "}
                                    {data.currencies[0].name}
                                </li>
                                <li>
                                    <span>Languages:</span>{" "}
                                    {data.languages[0].name}
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center">
                            <span className="font-semibold">
                                Border Countries: &nbsp;
                            </span>
                            <div className="flex flex-wrap items-center justify-around text-xs">
                                {data.borders ? (
                                    data.borders.map(border => (
                                        <span
                                            key={border}
                                            className="mx-2 my-2 rounded-sm bg-white px-5 py-1 shadow-md dark:bg-dark-blue"
                                        >
                                            {border}
                                        </span>
                                    ))
                                ) : (
                                    <span>
                                        This country has no border neighbours.
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    )
}

export default CountryDetails
