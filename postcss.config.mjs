// postcss.config.mjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {}, // This is the correct syntax for v3
    autoprefixer: {},
  },
};

export default config;