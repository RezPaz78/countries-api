import { Search, SearchActions } from "@/types/search"
import React from "react"

export const SearchReducer: React.Reducer<Search, SearchActions> = (
    state,
    action
): Search => {
    switch (action.type) {
        case "UNSET":
            return ""
        case "SET":
            return action.payload
        default:
            return ""
    }
}
