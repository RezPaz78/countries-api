"use client"

import { ArrowLeft } from "iconsax-react"
import { useRouter } from "next/navigation"
import React from "react"

const BackButton = () => {
    const router = useRouter()

    return (
        <button
            className="mb-14 flex items-center justify-between rounded-md bg-white px-7 py-2 shadow-sm shadow-black dark:bg-dark-blue"
            onClick={() => router.push("/")}
        >
            <ArrowLeft size={15} />
            <span className="ml-2 text-sm">Back</span>
        </button>
    )
}

export default BackButton
