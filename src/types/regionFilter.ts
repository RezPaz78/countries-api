export type Region = "Asia" | "Africa" | "America" | "Oceania" | "Europe"

export type FilterAction = {
    type: "FILTER" | "RESET"
    payload: Region
}
