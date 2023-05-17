export type CountryDetails = CountryItem & {
    nativeName: string
    subRegion: string
    tld: string
    currencies: string[]
    languanges: string[]
}

export type CountryItem = {
    name: {
        common: string
    }
    population: number
    capital: string
    region: string
    flags: {
        png: string
    }
}
