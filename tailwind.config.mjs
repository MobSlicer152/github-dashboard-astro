/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors() {
                return {
                    dark: "#111729",
					accent: "#1D1848",
					accenthover: "#3D1868",
					main: "#CDD5E0",
					description: "#4A5567",
					back: "#20293A",
					info: "#364153",
					searchborder: "#3662E3"
                };
            },
        },
        fontFamily: {
            "sans": "Be Vietnam Pro"
        }
    },
    plugins: [],
};
