"use client"

import { getCountries } from "@/app/api/countries"
import { useQuery } from "@tanstack/react-query"
import React, { useEffect } from "react"
import Country from "./Country"

export default function ListCountries() {
    const { data } = useQuery({
        queryKey: ["hydrate-countries"],
        queryFn: () => getCountries(),
    })

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <div className="xl:gap-17 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Country />
            <Country />
            <Country />
            <Country />
            <Country />
        </div>
    )
}
