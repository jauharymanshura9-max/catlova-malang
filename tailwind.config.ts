import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        neutral: "var(--color-neutral)",
        "on-primary": "var(--color-on-primary)",
        "on-tertiary": "var(--color-on-tertiary)",
        biscuit: "var(--color-biscuit)",
        honey: "var(--color-honey)",
        warmgray: "var(--color-warmgray)",
        coral: "var(--color-coral)",
        softwhite: "var(--color-softwhite)",
        muted: "var(--color-muted)",
      },
      fontFamily: {
        display: "var(--font-display)",
        body: "var(--font-body)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        full: "var(--radius-full)",
      },
      spacing: {
        xs: "var(--space-xs)",
        sm: "var(--space-sm)",
        md: "var(--space-md)",
        lg: "var(--space-lg)",
        xl: "var(--space-xl)",
        "2xl": "var(--space-2xl)",
      },
    },
  },
  plugins: [],
};

export default config;
