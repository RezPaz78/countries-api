export type Search = string

export type SearchActions = {
    type: "SET" | "UNSET"
    payload: Search
}
