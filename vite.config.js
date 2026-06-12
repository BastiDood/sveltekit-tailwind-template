import adapter from '@sveltejs/adapter-static';
import tailwind from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [tailwind(), sveltekit({ adapter: adapter({ fallback: '404.html' }) })],
});
