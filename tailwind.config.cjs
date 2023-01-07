const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
			  poppins: "Poppins",
			  sans: ["Poppins", ...defaultTheme.fontFamily.sans],
			},
		  },
	},
	plugins: [require('tailwind-scrollbar')],
	variants: {
        scrollbar: ['rounded']
    }
}
