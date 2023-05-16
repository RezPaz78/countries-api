import React from "react"

const Country = () => {
    return (
        <div className="rounded-md bg-white dark:bg-dark-blue">
            <div className="px-10 pb-10 pt-5">
                <h2 className="mb-5 text-xl font-extrabold">Germany</h2>
                <div className="mb-1">
                    <span className="font-semibold">Poplation: </span>
                    <span className="font-light">81,770,900</span>
                </div>
                <div className="mb-1">
                    <span className="font-semibold">Region: </span>
                    <span className="font-light">Europe</span>
                </div>
                <div>
                    <span className="font-semibold">Capital: </span>
                    <span className="font-light">Berlin</span>
                </div>
            </div>
        </div>
    )
}

export default Country
