import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            colors: {
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring) / <alpha-value>)',
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                primary: {
                    DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
                    foreground: 'oklch(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    foreground: 'oklch(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
                    foreground: 'oklch(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
                    foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
                    foreground: 'oklch(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover))',
                    foreground: 'oklch(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'oklch(var(--card))',
                    foreground: 'oklch(var(--card-foreground))'
                },
                chart: {
                    1: 'oklch(var(--chart-1))',
                    2: 'oklch(var(--chart-2))',
                    3: 'oklch(var(--chart-3))',
                    4: 'oklch(var(--chart-4))',
                    5: 'oklch(var(--chart-5))'
                },
                // Modern Minecraft-inspired color palette
                cyan: {
                    DEFAULT: 'oklch(0.75 0.20 195)',
                    light: 'oklch(0.85 0.15 195)',
                    dark: 'oklch(0.65 0.25 195)'
                },
                purple: {
                    DEFAULT: 'oklch(0.65 0.20 290)',
                    light: 'oklch(0.75 0.15 290)',
                    dark: 'oklch(0.55 0.25 290)'
                },
                'icy-blue': {
                    DEFAULT: 'oklch(0.80 0.10 220)',
                    light: 'oklch(0.90 0.08 220)',
                    dark: 'oklch(0.70 0.12 220)'
                },
                'medium-blue': 'oklch(0.55 0.15 240)',
                'light-sky-blue': 'oklch(0.75 0.10 220)'
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 4px)',
                sm: 'calc(var(--radius) - 8px)',
                xl: 'calc(var(--radius) + 4px)',
                '2xl': 'calc(var(--radius) + 8px)',
                '3xl': 'calc(var(--radius) + 12px)'
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
                'glass': '0 8px 32px 0 rgba(0, 100, 200, 0.2)',
                'glow': '0 0 20px rgba(0, 255, 255, 0.4), 0 0 40px rgba(0, 255, 255, 0.2)',
                'glow-lg': '0 0 30px rgba(0, 255, 255, 0.5), 0 0 60px rgba(0, 255, 255, 0.3)',
                'glow-purple': '0 0 20px rgba(168, 85, 247, 0.4), 0 0 40px rgba(168, 85, 247, 0.2)'
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Orbitron', 'Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'Courier New', 'monospace']
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'clouds-scroll': {
                    '0%': { transform: 'translate(0, 0)' },
                    '25%': { transform: 'translate(480px, -8px)' },
                    '50%': { transform: 'translate(960px, 0)' },
                    '75%': { transform: 'translate(1440px, 8px)' },
                    '100%': { transform: 'translate(1920px, 0)' }
                },
                'clouds-scroll-delayed': {
                    '0%': { transform: 'translate(0, 0)' },
                    '25%': { transform: 'translate(360px, 8px)' },
                    '50%': { transform: 'translate(720px, 0)' },
                    '75%': { transform: 'translate(1080px, -8px)' },
                    '100%': { transform: 'translate(1440px, 0)' }
                },
                'clouds-scroll-slow': {
                    '0%': { transform: 'translate(0, 0)' },
                    '25%': { transform: 'translate(240px, 8px)' },
                    '50%': { transform: 'translate(480px, 0)' },
                    '75%': { transform: 'translate(720px, -8px)' },
                    '100%': { transform: 'translate(960px, 0)' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'clouds-scroll': 'clouds-scroll 60s linear infinite',
                'clouds-scroll-delayed': 'clouds-scroll-delayed 75s linear infinite',
                'clouds-scroll-slow': 'clouds-scroll-slow 90s linear infinite'
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};
