"use client"

import { getCountries } from "@/api/countries"
import { useQuery } from "@tanstack/react-query"
import Country from "./Country"
import { useSearchParams } from "next/navigation"
import FilteredCountries from "./FilteredCountries"
import { useSearch } from "@/context/searchContext"
import { useEffect, useState } from "react"
import { CountryDetails } from "@/types"

export default function ListCountries() {
    const searchParams = useSearchParams()
    const filter = searchParams.get("filter")

    const [search, dispatch] = useSearch()
    const [searchResults, setSearchResults] = useState<CountryDetails[] | []>(
        []
    )

    const { data, isLoading, isFetching, error } = useQuery({
        queryKey: ["hydrate-countries"],
        queryFn: async () => {
            const result = await getCountries()
            const sortedCountries = result.sort((c1, c2) =>
                c1.name < c2.name ? 1 : c1.name > c2.name ? -1 : 0
            )
            return sortedCountries
        },
    })

    useEffect(() => {
        const searchResults =
            data && search.length > 0
                ? data.filter(
                      country =>
                          country.name.toLowerCase().search(search) !== -1
                  )
                : []
        const sortedCountries = searchResults.sort((c1, c2) =>
            c1.name < c2.name ? 1 : c1.name > c2.name ? -1 : 0
        )
        setSearchResults(sortedCountries.reverse())
    }, [search, data, dispatch])

    return (
        <div className="grid grid-cols-1 gap-10 pb-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-20">
            {searchResults.length > 0 ? (
                searchResults.map(country => {
                    return (
                        <Country
                            key={country.name}
                            name={country.name}
                            population={country.population}
                            region={country.region}
                            capital={country.capital}
                            flag={country.flag}
                        />
                    )
                })
            ) : filter ? (
                <FilteredCountries />
            ) : error ? (
                <p>There was an error fetching countries!!!</p>
            ) : isLoading || isFetching ? (
                <p>Loading...</p>
            ) : data ? (
                data.map(country => {
                    return (
                        <Country
                            key={country.name}
                            name={country.name}
                            population={country.population}
                            region={country.region}
                            capital={country.capital}
                            flag={country.flag}
                        />
                    )
                })
            ) : null}
        </div>
    )
}
