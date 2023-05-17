export type CountryDetails = CountryItem & {
    subregion: string
    tld: string[]
    currencies: {
        [key: string]: {
            name: string
            symbol: string
        }
    }
    languages: {
        [key: string]: string
    }
}

export type CountryItem = {
    name: {
        common: string
        nativeName: {
            [key: string]: {
                official: string
                common: string
            }
        }
    }
    population: number
    capital: string
    region: string
    flags: {
        png: string
    }
}
