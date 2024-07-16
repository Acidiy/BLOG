/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sliderPic0': "url('/src/assets/afro.png')",
        'sliderPic1': "url('/src/assets/biden.png')",
        'sliderPic2': "url('/src/assets/trump.png')",
      },
    },
    plugins: [],
  }
}