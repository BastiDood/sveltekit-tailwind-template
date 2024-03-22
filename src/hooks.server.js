import { building } from '$app/environment';
import nano from 'htmlnano';

// https://kit.svelte.dev/docs/migrating#integrations-html-minifier
export function handle({ event, resolve }) {
    let page = '';
    return resolve(event, {
        async transformPageChunk({ html, done }) {
            page += html;
            if (!done) return;
            if (!building) return page;
            const { html: result } = await nano.process(
                page,
                { minifySvg: false, minifyCss: false },
                nano.presets.safe,
            );
            return result;
        },
    });
}
