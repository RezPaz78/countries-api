import { Search, SearchActions } from "@/types/search"
import { Dispatch, createContext, useContext } from "react"

export const searchInitialState: Search = ""

export const SearchContext = createContext<[Search, Dispatch<SearchActions>]>([
    searchInitialState,
    () => {},
])
export const useSearch = () => useContext(SearchContext)
