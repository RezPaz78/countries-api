"use client"

import React from "react"
import Country from "./Country"
import { useQuery } from "@tanstack/react-query"
import { regionFilter } from "@/api/regionFilter"
import { useSearchParams } from "next/navigation"

const FilteredCountries = () => {
    const searchParams = useSearchParams()
    const filter = searchParams.get("filter")

    const { data, isLoading, isFetching, error } = useQuery({
        queryKey: ["region-filter", filter],
        queryFn: () => regionFilter(filter),
    })

    return (
        <>
            {error ? (
                <p>There was an error fetching filtered countries!!!</p>
            ) : isLoading || isFetching ? (
                <p>Loading filtered countries...</p>
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
        </>
    )
}

export default FilteredCountries
