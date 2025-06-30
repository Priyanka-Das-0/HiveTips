// postcss.config.js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // ✅ REQUIRED for Tailwind v4+
    autoprefixer: {},
  },
};
