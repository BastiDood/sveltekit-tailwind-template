import globals from 'globals';

import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';
import ts from 'typescript-eslint';

import svelteConfig from './svelte.config.js';

export default ts.config(
    { ignores: ['.svelte-kit/**/*', 'build/**/*', 'node_modules/**/*'] },
    js.configs.recommended,
    ...ts.configs.strict,
    ...ts.configs.stylistic,
    ...svelte.configs.recommended,
    prettier,
    ...svelte.configs.prettier,
    { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
    {
        files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
        ignores: ['eslint.config.js', 'svelte.config.js'],
        languageOptions: {
            parserOptions: {
                projectService: true,
                extraFileExtensions: ['.svelte'],
                parser: ts.parser,
                svelteConfig,
            },
        },
    },
    {
        rules: {
            '@typescript-eslint/class-methods-use-this': 'error',
            '@typescript-eslint/default-param-last': 'error',
            '@typescript-eslint/init-declarations': 'error',
            '@typescript-eslint/method-signature-style': 'error',
            '@typescript-eslint/no-import-type-side-effects': 'error',
            '@typescript-eslint/no-loop-func': 'error',
            '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
            '@typescript-eslint/no-use-before-define': 'error',
            '@typescript-eslint/no-useless-empty-export': 'error',
            '@typescript-eslint/parameter-properties': ['error', { prefer: 'parameter-property' }],
            '@typescript-eslint/prefer-enum-initializers': 'error',
            'array-callback-return': ['error', { checkForEach: true }],
            'block-scoped-var': 'error',
            'class-methods-use-this': 'off',
            'consistent-this': ['error', 'self'],
            curly: ['error', 'multi'],
            'default-case': 'error',
            'default-param-last': 'off',
            'dot-notation': 'error',
            eqeqeq: 'error',
            'func-style': ['error', 'declaration'],
            'grouped-accessor-pairs': ['error', 'getBeforeSet'],
            'guard-for-in': 'error',
            'init-declarations': 'off',
            'logical-assignment-operators': 'error',
            'new-cap': 'error',
            'no-alert': 'warn',
            'no-array-constructor': 'error',
            'no-caller': 'error',
            'no-console': 'warn',
            'no-constructor-return': 'error',
            'no-div-regex': 'error',
            'no-duplicate-imports': 'error',
            'no-else-return': 'error',
            'no-empty-function': 'error',
            'no-empty-static-block': 'error',
            'no-eq-null': 'error',
            'no-eval': 'error',
            'no-extra-bind': 'error',
            'no-extra-label': 'error',
            'no-extend-native': 'error',
            'no-implicit-coercion': 'error',
            'no-implicit-globals': 'error',
            'no-implied-eval': 'error',
            'no-invalid-this': 'off',
            'no-iterator': 'error',
            'no-label-var': 'error',
            'no-lone-blocks': 'error',
            'no-lonely-if': 'error',
            'no-loop-func': 'off',
            'no-multi-assign': 'error',
            'no-negated-condition': 'error',
            'no-nested-ternary': 'warn',
            'no-new': 'error',
            'no-new-func': 'error',
            'no-new-wrappers': 'error',
            'no-octal-escape': 'error',
            'no-param-reassign': 'error',
            'no-promise-executor-return': 'error',
            'no-proto': 'error',
            'no-return-assign': 'error',
            'no-script-url': 'error',
            'no-sequences': 'error',
            'no-throw-literal': 'error',
            'no-undef-init': 'error',
            'no-undefined': 'error',
            'no-underscore-dangle': 'error',
            'no-unmodified-loop-condition': 'error',
            'no-unneeded-ternary': 'error',
            'no-unused-expressions': 'error',
            'no-useless-assignment': 'error',
            'no-useless-call': 'error',
            'no-useless-computed-key': 'error',
            'no-useless-concat': 'error',
            'no-useless-constructor': 'error',
            'no-useless-rename': 'error',
            'no-useless-return': 'error',
            'no-self-compare': 'error',
            'no-template-curly-in-string': 'error',
            'no-unreachable-loop': 'error',
            'no-use-before-define': 'off',
            'no-var': 'error',
            'object-shorthand': ['error', 'always', { avoidExplicitReturnArrows: true }],
            'one-var': ['error', 'never'],
            'operator-assignment': 'error',
            'prefer-arrow-callback': 'error',
            'prefer-const': 'error',
            'prefer-destructuring': 'error',
            'prefer-exponentiation-operator': 'error',
            'prefer-named-capture-group': 'error',
            'prefer-numeric-literals': 'error',
            'prefer-object-has-own': 'error',
            'prefer-object-spread': 'error',
            'prefer-promise-reject-errors': 'error',
            'prefer-regex-literals': 'error',
            'prefer-rest-params': 'error',
            'prefer-spread': 'error',
            'prefer-template': 'error',
            radix: 'error',
            'require-atomic-updates': 'error',
            'require-await': 'error',
            'require-unicode-regexp': 'error',
            'sort-imports': ['error', { allowSeparatedGroups: true }],
            'symbol-description': 'error',
            yoda: ['warn', 'never', { exceptRange: true }],
        },
    },
);
