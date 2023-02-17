/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "toastify-color-progress-success":
          "var(--toastify-color-progress-success)",
        "toastify-color-progress-error": "var(--toastify-color-progress-error)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
