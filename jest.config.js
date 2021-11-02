module.exports = {
  collectCoverage: true,
  coverageThreshold: {
    global: { statements: 80 },
  },
  moduleFileExtensions: ["js", "vue", "jsx"],

  transform: {
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.js$": "babel-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!variables/.*)"],
  moduleDirectories: [".", "src", "src/utils", "node_modules"],
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js",
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@pages/(.*)$": "<rootDir>/src/ui/pages/$1",
  },
};
