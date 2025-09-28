module.exports = {
  content: [
    "storyblok/**/*.{vue,js}",
    "components/**/*.{vue,js}",
    "pages/**/*.vue",
  ],
  theme: {
    fontFamily: {
      sans: "Roboto, sans-serif",
      mono: ["IBM Plex Mono", "monospace"],
    },
    extend: {
      colors: {
        primary: "#e5ded5",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    base: false,
    darkTheme: false,
    styled: true,
    utils: true,
    logs: false,
  },
};
