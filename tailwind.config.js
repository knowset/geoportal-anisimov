// @ts-expect-error
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            transitionProperty: {
                ...defaultTheme.transitionProperty,
                width: "width",
            },
            keyframes: {
                wave: {
                    "0%": { transform: "rotate(-45deg)" },
                    "100%": { transform: "rotate(0.0deg)" },
                },
            },
            animation: {
                waving: "wave 0.2s ease-out",
            },
        },
    },
    plugins: [],
};
