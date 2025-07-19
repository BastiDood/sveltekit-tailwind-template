/** @import { Config } from '@sveltejs/kit' */
import adapter from '@sveltejs/adapter-static';

/** @type {Config} */
export default { kit: { adapter: adapter({ fallback: '404.html' }) } };
