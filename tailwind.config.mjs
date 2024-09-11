export default {
  content: [
    './src/**/*.jsx',
    /* "./public/index.html", */
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'main': '#4E0174',
        'secondary-dark': '#29003E',
        'secondary-bright': '#6D02A3',
        'secondary-light': '#E4B6FB',
        'text-success': '#02562B',
        'text-error': '#980233',
        'border-success': '#018842',
        'border-error': '#E4175C',
        'dropdown-menu': '#868685',
        'dropdown-menu-border': '#585757',
      },
      borderWidth: {
        DEFAULT: '1px',
      }

    },
    fontFamily: {
      sans: [
        'Helvetica Neue Thin',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Arial',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
      ],
    },
  },
  plugins: [],
};
