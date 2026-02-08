import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-color-1": "var(--light-color-1)",
        "light-color-2": "var(--light-color-2)",
        "dark-color-1": "var(--dark-color-1)",
        "dark-color-2": "var(--dark-color-2)",
        "contrast-color": "var(--contrast-color)",
        "text-color": "var(--text-color)",
      },
    },
  },
};

export default config;
