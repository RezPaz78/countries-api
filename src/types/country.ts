export type CountryDetails = CountryItem & {
    nativeName: string
    subregion: string
    topLevelDomain: string[]
    currencies: { name: string }[]
    languages: {
        name: string
    }[]
    borders?: string[]
}

export type CountryItem = {
    name: string
    population: number
    capital: string
    region: string
    flag: string
}
