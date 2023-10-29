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
                text: {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                },
            },
            animation: {
                waving: "wave 0.2s ease-out",
                text: "text 5s ease infinite",
            },
        },
    },
    plugins: [],
};
