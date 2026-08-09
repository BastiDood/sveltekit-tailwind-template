import adapter from '@sveltejs/adapter-static';
import tailwind from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [
    tailwind(),
    sveltekit({
      adapter: adapter({ fallback: '404.html' }),
      typescript: {
        config({ include }) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
          include.push('../drizzle.config.js', '../eslint.config.js');
        },
      },
    }),
  ],
});
