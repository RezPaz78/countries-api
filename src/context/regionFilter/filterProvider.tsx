"use client"

import React, { PropsWithChildren, useReducer } from "react"
import { FilterContext, filterInitialState } from "./filterContext"
import FilterReducer from "./filterReducer"

const FilterProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(FilterReducer, filterInitialState)

    return (
        <FilterContext.Provider value={[state, dispatch]}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterProvider
