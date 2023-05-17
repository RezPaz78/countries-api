import { FilterAction, Region } from "@/types/regionFilter"
import { Dispatch, createContext, useContext } from "react"

export const filterInitialState: Region | null = null

export const FilterContext = createContext<
    [Region | null, Dispatch<FilterAction>]
>([filterInitialState, () => {}])
export const useFilter = () => useContext(FilterContext)
