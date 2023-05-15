import React, { PropsWithChildren } from "react"

const CountryLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="p-30 text-yellow-500">
            <p>Custom Country Layout</p>
            {children}
        </div>
    )
}

export default CountryLayout
