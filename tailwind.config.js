/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "border-spin": {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },

        "bounce-once": {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },

        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "border-spin": "border-spin 7s linear infinite",
        "loop-scroll": "loop-scroll 12s linear infinite",
        "bounce-once": "bounce-once 2s ease-out",
      },

      colors: {
        "custom-purple": "rgba(192, 132, 252, 0.4)",
        "custom-grey": "rgba(120, 120, 120, 0.8)",
        "custom-stone": "rgba(243, 244, 246)",
        "custom-grey-2": "rgba(20,20,20)",
        "custom-grey-3": "rgba(38,38,38)",
        "custom-white": "rgba(203 213 225),",
      },
      fontFamily: {
        custom: ["font-inter-regular", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        InterBold: ["Inter-Bold", "sans-serif"],
        Caveat: ["Caveat", "sans-serif"],
      },
      rotate: {
        160: "160deg",
        315: "315deg",
      },
      height: {
        128: "24rem",
      },
      screens: {
        phone: "300px", // Custom breakpoint
      },
    },
  },

  plugins: [],
};
