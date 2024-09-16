export default {
  content: [
    './src/components/**/*.jsx',
    './src/pages/**/*.jsx',  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'main': '#4E0174',
        'secondary-dark': '#29003E',
        'secondary-bright': '#6D02A3',
        'secondary-light': '#E4B6FB',
        'success': '#02562B',
        'error': '#980233',
        'border-success': '#018842',
        'border-error': '#E4175C',
        'dropdown-menu': '#868685',
        'dropdown-menu-border': '#585757',
      },
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
