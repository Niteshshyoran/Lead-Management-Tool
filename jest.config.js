module.exports = {
    transform: {
      '^.+\\.[t|j]sx?$': 'babel-jest', // This will ensure Babel processes JS and JSX files
    },
    transformIgnorePatterns: [
      '/node_modules/(?!axios)/', // This tells Jest to not ignore axios module
    ],
    testEnvironment: 'jsdom', // To simulate browser-like environment
  };
  

 
  