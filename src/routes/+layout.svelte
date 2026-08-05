<script>
  import './app.css';
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- SvelteKit's LSP supplies the generated `LayoutProps` type.
  const { children } = $props();
</script>

<!-- eslint-disable-next-line @typescript-eslint/no-unsafe-call -- SvelteKit's LSP infers children as a `Snippet`. -->
{@render children()}
