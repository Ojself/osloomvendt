/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 2s ease-in-out',
      },
      keyframes: {
        wiggle: {
          '10%': { transform: 'rotate(-3deg)' },
          '33%': { transform: 'rotate(3deg)' },
          '66%': { transform: 'rotate(-3deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      fontFamily: {
        anton: 'var(--font-anton)',
        'source-code-pro': 'var(--font-source-code-pro)',
        'source-sans': 'var(--font-source-sans)',
      },
      fontSize: {
        xxs: '0.5rem',
        '10xl': '12rem',
      },
      colors: {
        linkGray: '#2B3235',
        vippsOrange: '#FF5B24',
        // rgba(155,108,255,0)
        primary: '#9B6CFF',
        primaryLight: '#A57AFF',
        primaryDark: '#8B61E5',

        //rgba(134, 255, 107,0)
        secondary: '#86FF6B',
        secondaryLight: '#92ff79',
        secondaryDark: '#78e560',
        // rgb(255, 155, 108)
        tertiary: '#ff9b6c',
        tertiaryDark: '#e58b61',
        tertiaryLight: '#ffa57a',

        shopred: '#EF4444',
        shopredDark: '#d73d3d',

        whitish: '#F8FAFC',
        blackish: '#0F0A19',
        error: '#DC2626',
      },
    },
  },
  plugins: [],
};
