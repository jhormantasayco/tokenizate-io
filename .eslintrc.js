module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
    },
    extends: ['@nuxtjs', 'prettier', 'plugin:prettier/recommended'],
    plugins: ['prettier'],
    rules: {
        camelcase: 'off',
        'vue/no-v-html': 0,
        'prettier/prettier': [
        'error',
        {
            endOfLine: 'auto',
        },
        ],
        'vue/valid-v-slot': 'off',
        'vue/no-reserved-component-names': 'off',
        'vue/multi-word-component-names': 'off',
    },
}
