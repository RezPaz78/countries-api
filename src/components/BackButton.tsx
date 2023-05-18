"use client"

import { useSearch } from "@/context/searchContext"
import { ArrowLeft } from "iconsax-react"
import { useRouter } from "next/navigation"
import React from "react"

const BackButton = () => {
    const router = useRouter()
    const [, dispatch] = useSearch()

    return (
        <button
            className="mb-14 flex items-center justify-between rounded-md bg-white px-7 py-2 shadow-sm shadow-black dark:bg-dark-blue"
            onClick={() => {
                dispatch({ type: "UNSET", payload: "" })
                router.push("/")
            }}
        >
            <ArrowLeft size={15} />
            <span className="ml-2 text-sm">Back</span>
        </button>
    )
}

export default BackButton
