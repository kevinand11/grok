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
				gray: '#777777',
				dark: '#000000',
				blue: '#A3D9F6',
				red: '#FF4040'
			}
		},
		fontFamily: {
			sans: ['Pacifica', 'sans-serif'],
			fahkwang: ['Fahkwang', 'sans-serif']
		}
	},
	plugins: [],
}
