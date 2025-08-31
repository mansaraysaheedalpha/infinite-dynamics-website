// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  // Replace your 'content' array with this one
  content: [
    // This single line is all we need for a `src`-based project
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your brand colors here
        "brand-primary": "#0D253F", // A deep, professional blue
        "brand-secondary": "#163A5F", // A slightly lighter blue
        "brand-yellow": "#FFC700", // The vibrant brand yellow
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;