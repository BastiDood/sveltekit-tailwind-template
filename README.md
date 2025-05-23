# Checklist

- [ ] Update the project `name` in the [`package.json`](./package.json).

# Development

## Running the Web Server

```bash
# Install the dependencies.
pnpm install

# Synchronize auto-generated files from SvelteKit.
pnpm prepare

# Start the development server with live reloading + hot module replacement.
pnpm dev

# Compile the production build (i.e., with optimizations).
pnpm build

# Start the production preview server.
pnpm preview
```

## Linting the Codebase

```bash
# Check Formatting
pnpm fmt # prettier

# Apply Formatting Auto-fix
pnpm fmt:fix # prettier --write

# Check Linting Rules
pnpm lint:eslint # eslint
pnpm lint:svelte # svelte-check

# Check All Lints in Parallel
pnpm lint
```
