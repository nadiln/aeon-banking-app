/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#C8102E", // AEON brand red
        primaryDark: "#8B0000", // Darker red for headers/buttons
        background: "#F5F5F5", // Light grey page background
        cardBg: "#FFFFFF", // White cards
        textPrimary: "#1A1A1A", // Near black
        textSecondary: "#666666", // Muted labels
        credit: "#16A34A", // Green for incoming
        debit: "#DC2626", // Red for outgoing/negative
        border: "#E5E7EB", // Light border color
      },
    },
  },
  plugins: [],
};
