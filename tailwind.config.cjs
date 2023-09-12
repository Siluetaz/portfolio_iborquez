/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				background: 'rgb(var(--background))',
				primary: 'rgb(var(--primary))',
			}
		},
	},
	plugins: [],
}
