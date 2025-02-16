import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import nextPlugin from '@next/eslint-plugin-next';
import stylisticPlugin from '@stylistic/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import interfaceToTypePlugin from 'eslint-plugin-interface-to-type';
import tailwindcssPlugin from 'eslint-plugin-tailwindcss';

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
    {
        ignores: ['node_modules', 'dist', '**/.next/**'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                __dirname: 'readonly',
                __filename: 'readonly',
                exports: 'readonly',
                module: 'readonly',
                require: 'readonly',
                process: 'readonly',

                window: 'readonly',
                document: 'readonly',
                console: 'readonly',
            },
        },
    },

    js.configs.recommended,

    {
        plugins: {
            '@next/next': nextPlugin
        }
    },

    {
        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
        },
        rules: {
            ...reactPlugin.configs.recommended.rules,
            ...reactHooksPlugin.configs.recommended.rules,
        },
    },

    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: process.cwd(),
            },
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
        },
    },

    {
        ignores: ['.next'],
        plugins: {
            stylistic: stylisticPlugin,
        },
        rules: {
            ...stylisticPlugin.configs.recommended,
        },
    },

    {
        ignores: ['.next'],
        rules: {
            'stylistic/quotes': ['error', 'single', { avoidEscape: true }],
        },
    },

    {
        plugins: {
            'interface-to-type': interfaceToTypePlugin,
        },
        rules: {
            'interface-to-type/prefer-type-over-interface': 'error',
        },
    },

    {
        plugins: {
            tailwindcss: tailwindcssPlugin,
        },
        rules: {
            ...tailwindcssPlugin.configs.recommended.rules,
        },
    },
];
