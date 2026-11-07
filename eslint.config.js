import { compose } from '@bastidood/eslint-config';
import { SVELTE } from '@bastidood/eslint-config-svelte';
import { CORE } from '@bastidood/eslint-config/core';
import css from '@eslint/css';
import html from '@html-eslint/eslint-plugin';
import htmlSvelte from '@html-eslint/eslint-plugin-svelte';
import { defineConfig } from 'eslint/config';
import { tailwind4 } from 'tailwind-csstree';

export default defineConfig(
	{ ignores: ['.svelte-kit/**/*', 'build/**/*', 'node_modules/**/*'] },
	{
		...html.configs['flat/recommended'],
		files: ['**/*.html'],
		rules: {
			...html.configs['flat/recommended'].rules,
			'@html-eslint/indent': 'off',
			'@html-eslint/no-duplicate-class': 'error',
			'@html-eslint/no-extra-spacing-tags': [
				'error',
				{
					enforceBeforeSelfClose: true,
					disallowMissing: true,
					disallowTabs: true,
					disallowInAssignment: true,
				},
			],
			'@html-eslint/no-extra-spacing-text': 'error',
			'@html-eslint/no-inline-styles': 'error',
			'@html-eslint/no-nested-interactive': 'error',
			'@html-eslint/no-script-style-type': 'error',
			'@html-eslint/no-target-blank': 'error',
			'@html-eslint/prefer-https': 'error',
			'@html-eslint/require-button-type': 'error',
			'@html-eslint/require-closing-tags': 'off',
			'@html-eslint/require-explicit-size': 'error',
			'@html-eslint/require-meta-charset': 'error',
			'@html-eslint/no-abstract-roles': 'error',
			'@html-eslint/no-accesskey-attrs': 'error',
			'@html-eslint/no-aria-hidden-body': 'error',
			'@html-eslint/no-heading-inside-button': 'error',
			'@html-eslint/no-invalid-role': 'error',
			'@html-eslint/no-non-scalable-viewport': 'error',
			'@html-eslint/no-positive-tabindex': 'error',
			'@html-eslint/no-skip-heading-levels': 'error',
			'@html-eslint/require-form-method': 'error',
			'@html-eslint/require-frame-title': 'error',
			'@html-eslint/require-input-label': 'error',
			'@html-eslint/require-meta-viewport': 'error',
			'@html-eslint/require-title': 'off',
		},
	},
	{
		files: ['**/*.css'],
		plugins: { css },
		language: 'css/css',
		languageOptions: { customSyntax: tailwind4 },
		rules: {
			...css.configs.recommended.rules,
			'css/prefer-logical-properties': 'error',
			'css/no-invalid-at-rules': 'off',
		},
	},
	{
		files: ['src/**/*.{{j,t}s,svelte}', '*.{j,t}s'],
		extends: [compose(CORE, SVELTE)],
	},
	{
		files: ['src/**/*.svelte'],
		extends: [htmlSvelte.configs.recommended],
	},
	{
		// TODO: Remove this once there's a way for type-aware lints to detect the `.svelte-kit/` types.
		files: ['src/hooks{,.{client,server}}.{j,t}s', 'src/routes/**/+*.{{j,t}s,svelte}'],
		rules: {
			'@typescript-eslint/no-unsafe-argument': 'off',
			'@typescript-eslint/no-unsafe-assignment': 'off',
			'@typescript-eslint/no-unsafe-call': 'off',
			'@typescript-eslint/no-unsafe-member-access': 'off',
			'@typescript-eslint/no-unsafe-return': 'off',
		},
	},
);
