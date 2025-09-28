/* eslint-disable @typescript-eslint/no-require-imports */
import { type Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,scss}',
  ],
  theme: {
    screens: {
      sm: '376px',
      md: '768px',
      lg: '1280px',
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config
