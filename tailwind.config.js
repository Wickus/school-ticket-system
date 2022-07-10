/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "fairy-godmother": ['"Fairy Godmother"', "Helvetica", "Arial", "sans-serif"],
                "happy-day": ['"Happy Day"', "Helvetica", "Arial", "sans-serif"],
            },
        },
    },
    plugins: [],
};
