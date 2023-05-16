"use client"

import { getCountries } from "@/app/api/countries"
import { useQuery } from "@tanstack/react-query"
import React, { useEffect } from "react"

export default function ListCountries() {
    const { data } = useQuery({
        queryKey: ["hydrate-countries"],
        queryFn: () => getCountries(),
    })

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <>
            {/* {error ? (
                <p>Oh no, there was an error</p>
            ) : isLoading || isFetching ? (
                <p>Loading...</p>
            ) : data ? (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr 1fr",
                        gap: 20,
                    }}
                >
                    {data.map(user => (
                        <div
                            key={user.id}
                            style={{
                                border: "1px solid #ccc",
                                textAlign: "center",
                            }}
                        >
                            <Image
                                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                                alt={user.name}
                                height={180}
                                width={180}
                            />
                            <h3>{user.name}</h3>
                        </div>
                    ))}
                </div>
            ) : null} */}
        </>
    )
}
