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
      black: {
        100: '#000',
        opacity: {
          40: '#00000040',
        },
      },
      gray: {
        50: '#BCBCBC',
        100: '#595959',
        opacity: {
          10: '#59595910',
          50: '#59595950',
        },
      },
      secondary: {
        100: '#4086E0',
        200: '#0d7bcd',
        opacity: {
          20: '#4086E020',
        },
      },
      negative: '#E92A40',
      online: '#07A23B',
    },
    extend: {
      backgroundColor: {
        none: 'none',
        transparent: 'transparent',
      },
      borderWidth: {
        '1/2': '0.5px',
      },
      borderRadius: {
        full: '50%',
      },
      height: {},
      minWidth: {
        16: '1.5rem',
        menu: '14rem',
        'screen-sm': '640px',
      },
      maxWidth: {
        menu: '14rem',
      },
      minHeight: {
        menu: 'calc(100vh - 64px)',
      },
      boxShadow: {
        neo: '0 2px 2px 0 rgba(0, 0, 0, 0.20), inset 0 -2px 2px 0 rgba(0, 0, 0, 0.20)',
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
