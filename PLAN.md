### Resolve Tailwind CSS 4 and PostCSS Integration Error

**Objective:** Resolve the PostCSS error preventing the development server from starting by correctly configuring Tailwind CSS v4.

**Steps:**

1.  **Remove old PostCSS dependencies:**
    *   Remove `postcss` and `autoprefixer` from `package.json`'s `devDependencies`.

2.  **Update and install new Tailwind libraries:**
    *   Run `bun install` to update existing packages.
    *   Run `bun install tailwindcss @tailwindcss/vite` to install the new Tailwind libraries.

3.  **Update `vite.config.ts`:**
    *   Modify `vite.config.ts` to import `defineConfig` from `vite` and add `tailwindcss()` plugin.

4.  **Update `src/app.css`:**
    *   Change `@import "tailwindcss/preflight";` and `@tailwind utilities;` to `@import "tailwindcss";`.

5.  **Remove PostCSS configuration file:**
    *   Delete `postcss.config.js` as it's no longer needed.

6.  **Remove PostCSS language tags:**
    *   Search for and remove any `<style lang="postcss">` tags in Svelte components (e.g., `src/routes/+layout.svelte`).

7.  **Verify Fix:**
    *   Attempt to start the development server (`bun run dev -- --open`) to confirm the error is resolved.

8.  **Update Documentation:**
    *   Update `ISSUE.md`, `PLAN.md`, and `TODO.md` to reflect the completed task.