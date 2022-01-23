const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	mode: 'jit',

	purge: ['./src/**/*.svelte'],

	theme: {
		extend: {
			fontFamily: {
				header: [`'Raleway'`, ...defaultTheme.fontFamily.sans,]
			},
			scale: {
				'101': '1.005',
			},
			transitionTimingFunction: {
				'ease-bounce': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: null,
					},
				},
			},
		},
	},

	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui'),
	],

	variants: {
		textColor: ['responsive', 'hover', 'focus', 'group-hover'],
		borderColor: ['group-hover'],
	},

	// daisyui config
	daisyui: {
		themes: [
		  {'dark': {
			"primary": "#17ffc4", // 
			"primary-focus": "#00AF83", // 
			"primary-content": "#000000", //
			"secondary": "#14D6FA", //  
			"secondary-focus": "#46A1FB", // 
			"secondary-content": "#ffffff", // 
			"accent": "#37cdbe", 
			"accent-focus": "#2aa79b", 
			"accent-content": "#000000", //
			"neutral": "#C5C9D3", // Serves as lighter text
			"neutral-focus": "#16181d",
			"neutral-content": "#000000", // 
			"base-100": "#41435c", //
			"base-200": "#393d57", //
			"base-300": "#2a2c45", // 
			"base-content": "#ebecf0",
			"info": "#66c6ff",
			"success": "#87d039",
			"warning": "#e2d562",
			"error": "#ff6f6f",
			"--rounded-box": "1rem",
			"--rounded-btn": "0.4rem",
			"--rounded-badge": "2rem",
			"--animation-btn": "0.25s",
			"--animation-input": ".2s",
			"--btn-text-case": "capitalize",
			"--btn-focus-scale": "0.95",
			"--navbar-padding": ".5rem",
			"--border-btn": "1px",
			"--tab-border": "1px",
			"--tab-radius": "0.5rem",
		  }},
		  {'light': {
			"primary": "#ff006e", // 
			"primary-focus": "#DB005F",
			"primary-content": "#000000", // 
			"secondary-focus": "#0466c8", // 
			"secondary": "#1387FA", // 
			"secondary-content": "#000000", // 
			"accent-focus": "#00ECC9", // 
			"accent": "#6fffe9", // 
			"accent-content": "#000000", // 
			"neutral": "#787878", // Serves as darker text
			"neutral-focus": "#E4E4DF", // 
			"neutral-content": "#000000", // 
			"base-100": "#f3f3f1", //
			"base-200": "#e8e8e3", //
			"base-300": "#D9D9D1", //
			"base-content": "#292929", // 
			"info": "#53c0f3",
			"success": "#71ead2",
			"warning": "#f3cc30",
			"error": "#e24056",
			"--rounded-box": "1rem",
			"--rounded-btn": "0.4rem",
			"--rounded-badge": "2rem",
			"--animation-btn": "0.25s",
			"--animation-input": ".2s",
			"--btn-text-case": "capitalize",
			"--btn-focus-scale": "0.95",
			"--navbar-padding": ".5rem",
			"--border-btn": "1px",
			"--tab-border": "1px",
			"--tab-radius": "0.5rem",
		  }},
		]
	}
};

	// Body: #00FF76
	// Laptop; 0046FF
	// Legs: F400FF
	// Shoes: 00BAAB
	// Head: FFE044
	// Hair: 000000

module.exports = config;
