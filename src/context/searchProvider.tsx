"use client"

import React, { PropsWithChildren, useReducer } from "react"
import { SearchContext, searchInitialState } from "./searchContext"
import { SearchReducer } from "./searchReducer"

const SearchProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(SearchReducer, searchInitialState)

    return (
        <SearchContext.Provider value={[state, dispatch]}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider
