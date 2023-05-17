"use client"

import { getCountries } from "@/api/countries"
import { useQuery } from "@tanstack/react-query"
import Country from "./Country"
import { regionFilter } from "@/api/regionFilter"
import { useEffect } from "react"
import { useFilter } from "@/context/regionFilter/filterContext"

export default function ListCountries() {
    const [filter] = useFilter()

    const { data, isLoading, isFetching, error } = useQuery({
        queryKey: ["hydrate-countries"],
        queryFn: () => getCountries(),
    })

    const {
        data: filteredData,
        isLoading: filteredLoading,
        isFetched: filteredFetched,
        error: filteredError,
    } = useQuery({
        queryKey: ["region-filter", filter],
        queryFn: () => regionFilter(filter),
    })

    useEffect(() => {
        console.log(
            `%c filteredData =>`,
            "background: #2ecc71;border-radius: 0.5em;color: white;font-weight: bold;padding: 2px 0.5e",
            filteredData
        )
    }, [filteredData])

    return (
        <div className="grid grid-cols-1 gap-10 pb-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-20">
            {filteredData ? (
                filteredData.map(country => {
                    return (
                        <Country
                            key={country.name.common}
                            name={country.name}
                            population={country.population}
                            region={country.region}
                            capital={country.capital}
                            flags={country.flags}
                        />
                    )
                })
            ) : error ? (
                <p>There was an error fetching countries!!!</p>
            ) : isLoading || isFetching ? (
                <p>Loading...</p>
            ) : data ? (
                data.map(country => {
                    return (
                        <Country
                            key={country.name.common}
                            name={country.name}
                            population={country.population}
                            region={country.region}
                            capital={country.capital}
                            flags={country.flags}
                        />
                    )
                })
            ) : null}
        </div>
    )
}
