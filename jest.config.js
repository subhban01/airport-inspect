// import from 'identity-obj-proxy';

const jestConfig = {
    verbose: true,
    testURL: 'http://localhost/',
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    testMatch: ['**/__tests__/*.js?(x)'],
    moduleNameMapper: {
        '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
};

module.exports = jestConfig;
