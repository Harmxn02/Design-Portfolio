/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				dm: ["DM Serif Display", "sans", "Georgia"],
			},

			colors: {
				main: "#212421",
				main_2: "#2b2e2b",
				accent: "#ea8f10",
				tan: "#fef6e6",
				greenish: "#7e9080",
			},
		},
	},
	plugins: [],
};
