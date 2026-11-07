import { compose } from '@bastidood/oxfmt-config';
import { CORE } from '@bastidood/oxfmt-config/core';
import { SVELTE } from '@bastidood/oxfmt-config/svelte';
import { defineConfig } from 'oxfmt';

export default defineConfig(
	compose(CORE, SVELTE, {
		sortPackageJson: false,
		sortTailwindcss: { stylesheet: './src/routes/app.css' },
	}),
);
