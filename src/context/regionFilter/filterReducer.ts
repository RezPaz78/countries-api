import { FilterAction, Region } from "@/types/regionFilter"
import React from "react"

const FilterReducer: React.Reducer<Region | null, FilterAction> = (
    state = null,
    action
): Region | null => {
    switch (action.type) {
        case "RESET":
            return null
        case "FILTER":
            return action.payload
        default:
            return null
    }
}

export default FilterReducer
