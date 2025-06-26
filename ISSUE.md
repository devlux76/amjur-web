### Tailwind CSS 4 and PostCSS Integration Error

**Description:**
The development server is failing to start due to an incompatibility with how Tailwind CSS is integrated with PostCSS. The error indicates that `tailwindcss` is being used directly as a PostCSS plugin, which is no longer the correct approach for Tailwind CSS v4. The solution involves updating the project to use `@tailwindcss/vite` and removing direct PostCSS configuration for Tailwind.

**Error Message:**
```
[postcss] It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin. The PostCSS plugin has moved to a separate package, so to continue using Tailwind CSS with PostCSS you'll need to install `@tailwindcss/postcss` and update your PostCSS configuration.
```

**Impact:**
The application cannot be run in development mode, hindering further development and testing.

**Proposed Solution (based on Google search for "Setting Sveltekit 5 with Tailwind 4"):**
1. Remove `postcss` and `autoprefixer` dependencies from `package.json`.
2. Update existing packages and install new Tailwind libraries: `bun install` and `bun install tailwindcss @tailwindcss/vite`.
3. Update `vite.config.ts` to include `@tailwindcss/vite` plugin.
4. Update `src/app.css` to `@import "tailwindcss";`.
5. Remove any `<style lang="postcss">` tags in Svelte components.
6. Note that the `@apply` directive will no longer be supported.