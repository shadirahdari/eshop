export default {
  useTabs: false,
  bracketSameLine: true,
  singleQuote: true,
  printWidth: 80,
  //spaceBeforeFunctionParen: true,
  endOfLine: 'lf',
  bracketSpacing: true,
  overrides: [
    {
      files: ['*.js, *.jsx'],
      options: {
        tabWidth: 2,
        endOfLine: 'auto',
        trailingComma: 'all',
      },
    },
    {
      files: ['*.html', '*.htm'],
      options: {
        tabWidth: 2,
      },
    },
  ],
};
