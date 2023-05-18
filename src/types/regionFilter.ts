export type Region = "Asia" | "Africa" | "Americas" | "Oceania" | "Europe"

export type FilterAction = {
    type: "FILTER" | "RESET"
    payload: Region
}
