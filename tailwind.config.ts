import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      // Custom animation delays for use with the animation classes
      animationDelay: {
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
      },
    },  },  plugins: [
    // Add custom animation delay utilities
    ({ addUtilities }) => {
      const animationDelays = {
        '.animation-delay-200': { animationDelay: '200ms' },
        '.animation-delay-300': { animationDelay: '300ms' },
        '.animation-delay-500': { animationDelay: '500ms' },
      };
      addUtilities(animationDelays);
    },
  ],
}

export default config;
