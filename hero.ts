import { heroui } from "@heroui/react";

export default heroui({
  themes: {
    light: {
      colors: {
        primary: {
          DEFAULT: "#7e42ff", 
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#223971", 
          foreground: "#ffffff",
        },

      },
    },
    dark: {
      colors: {
        primary: {
          DEFAULT: "#F87171",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#6C8AE4",
          foreground: "#ffffff",
        },
      },
    },
  },
});
