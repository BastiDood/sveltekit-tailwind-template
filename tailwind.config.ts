import type { Config } from 'tailwindcss';
export default {
    experimental: { optimizeUniversalDefaults: true },
    content: ['./src/**/*.{css,html,js,svelte,ts}'],
} satisfies Config;
