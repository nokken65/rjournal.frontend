module.exports = {
  content: ['./index.html', './src/**/*.{jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: {
        100: '#fff',
        opacity: {
          80: '#ffffff80',
        },
        bg: '#f2f2f2',
      },
      primary: {
        50: '#fff4e2',
        100: '#e5a040',
        opacity: {
          70: '#e5a04070',
        },
      },
      black: { 100: '#000' },
      gray: {
        100: '#595959',
        opacity: {
          10: '#59595910',
          50: '#59595950',
        },
      },
      secondary: { 100: '#4086E0', 200: '#0d7bcd' },
      negative: '#E92A40',
      online: '#07A23B',
    },
    extend: {
      borderRadius: {
        full: '50%',
      },
      height: {},
      minWidth: {
        16: '1.5rem',
        menu: '14rem',
      },
      maxWidth: {
        menu: '14rem',
      },
      minHeight: {
        menu: 'calc(100vh - 64px)',
      },
      boxShadow: {
        outline: '0 0 0.1rem 0.1rem rgba(0, 0, 0, 0.3)',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(0)', opacity: '0.2' },
          '33%': { transform: 'translateX(100%)', opacity: '1' },
          '50%': { transform: 'translateX(0)', opacity: '0.2' },
          '66%': { transform: 'translateX(-100%)', opacity: '1' },
          '100%': { transform: 'translateX(0)', opacity: '0.2' },
        },
      },
      animation: {
        wave: 'wave 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
