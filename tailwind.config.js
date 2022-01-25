module.exports = {
  content: ['./index.html', './src/**/*.{jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',
      whitePale: '#ffffff50',
      accent: '#e5a040',
      headerBg: '#fff4e2',
      bg: '#f2f2f2',
      textMain: '#000',
      textGray: '#595959',
      textAccent: '#4086E0',
      textAccentHover: '#0d7bcd',
      textNegative: '#E92A40',
      online: '#07A23B',
    },
    extend: {
      borderRadius: {
        full: '50%',
      },
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
    },
  },
  plugins: [],
};
