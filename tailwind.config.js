/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/App.vue","./src/components/**/*.vue", "./src/views/**/*.vue", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

