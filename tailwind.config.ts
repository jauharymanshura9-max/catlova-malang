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
      fontSize: {
        h1: ["var(--text-h1)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h2: ["var(--text-h2)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        h3: ["var(--text-h3)", { lineHeight: "1.3" }],
        "body-lg": ["var(--text-body-lg)", { lineHeight: "1.65" }],
        "body-md": ["var(--text-body-md)", { lineHeight: "1.65" }],
        "body-sm": ["var(--text-body-sm)", { lineHeight: "1.5" }],
        "label-caps": ["var(--text-label-caps)", { lineHeight: "1.4", letterSpacing: "0.08em" }],
        button: ["var(--text-button)", { lineHeight: "1" }],
      },
    },
  },
  plugins: [],
};

export default config;
