/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "very-light-gray": "#fafafa",
                "dark-blue": "#2b3945",
                "very-dark-blue": "#202c37",
            },
        },
        fontFamily: {
            Nunito: ["Nunito"],
        },
    },
    plugins: [],
    darkMode: "class",
}
