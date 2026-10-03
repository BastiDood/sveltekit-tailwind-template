import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwind from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    tailwind(),
    sveltekit({
      adapter: adapter({ fallback: '404.html' }),
    }),
  ],
});
