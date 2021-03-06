module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"main-grey": "#201F1F",
				white: "#D2D2D2",
				black: "#131313",
				gold: "#FEEE97",
			},
			fontFamily: {
				sofia: ["Sofia-Regular", "sans-serif"],
				draxel: ["Draxel", "serif"],
			},
		},
	},
	plugins: [],
};
