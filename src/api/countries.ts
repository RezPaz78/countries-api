import { CountryDetails } from "@/types"
import axios from "@/utils/axios"

export async function getCountries() {
    const res = await axios.get("/all")
    const countries = (await res.data) as CountryDetails[]
    return countries
}
