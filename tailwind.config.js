import typo from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    experimental: { optimizeUniversalDefaults: true },
    content: ['./src/**/*.{css,html,js,svelte,ts}'],
    plugins: [typo],
};
