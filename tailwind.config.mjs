export default {
  content: [
    './src/components/**/*.jsx',
    './src/pages/**/*.jsx',  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        main: '#4E0174',
        'secondary-dark': '#29003E',
        'secondary-bright': '#6D02A3',
        'secondary-light': '#E4B6FB',
        success: '#02562B',
        error: '#980233',
        'border-success': '#018842',
        'border-error': '#E4175C',
        'dropdown-md': '#868685',
        'dropdown-header': '#464847',
        'dropdown-border': '#585757',
        'dropdown-gradient-1': '#7A7A7A',
        'dropdown-gradient-2': '#4A4A4A',
        'dropdown-option-selected': '#707071',
      },
    },
    fontFamily: {
      popup: [
        'Helvetica Neue Light',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Arial',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
      ],
      main: [
        'Helvetica Neue',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Arial',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
      ],
      bold: [
        'Helvetica Neue Bold',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Arial',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
    ]
    },
  },
  plugins: [],
};
