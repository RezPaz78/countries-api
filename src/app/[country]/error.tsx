"use client"

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
    return (
        <main className="flex h-screen flex-col items-center justify-center">
            <h2 className="mb-2">Something went wrong!!</h2>
            <p className="mb-5">{error.message}</p>
            <button
                className="rounded-sm bg-black px-5 py-2 text-white dark:bg-dark-blue"
                onClick={() => reset()}
            >
                Try Again
            </button>
        </main>
    )
}

export default Error
