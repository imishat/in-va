module.exports = {
  plugins: {
    "postcss-import": {},
    tailwindcss: {},
    autoprefixer: {},
    "tailwindcss/nesting": {},
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
        "custom-properties": false,
        "nesting-rules": false,
      },
      stage: 3,
      features: { "nesting-rules": false },
    },
    "postcss-flexbugs-fixes": {},
  },
};
