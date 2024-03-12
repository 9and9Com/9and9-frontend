import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				border: '#FFFFFF26',
				header: '#1f2132',
				blue: '#2984EF',
				purple: '#7331FF',
				pink: '#A142E8',
				grey: '#16181D',
				gray: '#2C303A',
				footer: '#B4BCD0',
			},
			fontFamily: {
				grotesk: ['Linear Grotesk', 'san-serif'],
			},
		},
	},
	plugins: [],
};
export default config;
