/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/application/**/*.{vue,js,jsx,tsx}'],
	darkMode: 'Media',
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1280px',
			xl: '1420px',
			'2xl': '1536px'
		},
		extend: {
			colors: {
				light: '#FFFFFF',
				dark: '#000000'
			}
		},
		fontFamily: {
			sans: ['Manrope', 'sans-serif']
		}
	},
	plugins: [],
}
