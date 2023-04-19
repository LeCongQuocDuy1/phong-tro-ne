/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "./public/index.html"],
    theme: {
        extend: {
            width: {
                1100: "1100px",
            },
            colors: {
                primary: "#333",
                second: "#65676b",
                success: "#54B435",
                bg1: "#1266dd",
                bg2: "#f73859",
            },
            backgroundColor: {
                primary: "#1266dd",
                second: "#f73859",
                bg: "#f5f5f5",
                inputBg: "#e8f0fe",
                overlay: "rgba(0, 0, 0, 0.3)",
            },
        },
    },
    plugins: [],
};
