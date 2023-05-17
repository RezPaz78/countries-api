import { Metadata } from "next"
import React, { PropsWithChildren } from "react"

type Props = {
    params: { country: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const country = params.country.replaceAll(/%2./g, " ")

    return {
        title: `Countries | ${country}`,
    }
}

const Layout = ({ children }: PropsWithChildren) => {
    return <main>{children}</main>
}

export default Layout
