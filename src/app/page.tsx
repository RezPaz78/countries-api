import Hydrate from "@/utils/ClientHydrate"
import getQueryClient from "@/utils/getQueryClient"
import { dehydrate } from "@tanstack/query-core"
import Searchbox from "@/components/Searchbox"
import ListCountries from "@/components/ListCountries"
import { getCountries } from "../api/countries"

export default async function Home() {
    const queryClient = getQueryClient()
    await queryClient.prefetchQuery(["hydrate-countries"], getCountries)
    const dehydratedState = dehydrate(queryClient)

    return (
        <main>
            <div className="mb-14 flex w-full items-center justify-between">
                <Searchbox />
            </div>
            <Hydrate state={dehydratedState}>
                <ListCountries />
            </Hydrate>
        </main>
    )
}
