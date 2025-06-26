# amjur.org SPA — TODO

## Immediate Tasks
- [x] Set up Svelte + TailwindCSS4 SPA boilerplate.
- [x] Research and document Svelte 5, TailwindCSS4, authentication, and integration best practices (June 2025). **(Research complete and findings incorporated into ISSUE.md, PLAN.md, and DESIGN.md)**
- [ ] Integrate Supabase client and environment configuration.
- [ ] Implement Supabase Auth (password, magic link, SSO, MFA).
- [ ] Create Svelte stores for auth, user, and notifications.
- [ ] Scaffold modular components: Profile, Education, Experience, Skills, BlogPosts, Documents, Forum, Membership, Collaborations, Amendments.
- [ ] Implement onboarding and profile completion flows.
- [ ] Enforce RLS and privacy controls in UI.
- [ ] Add real-time subscriptions for forum, documents, collaborations.
- [ ] Implement role-based dashboards and navigation.
- [ ] Add accessibility features (WCAG 2.1 AA compliance).
- [ ] Integrate audit logs and document verification UI.
- [ ] Write unit and end-to-end tests for all major flows.

---

## Best Practices Summary (June 2025)

### Svelte 5 & SvelteKit
- Use explicit runes (`$state`, `$derived`, `$props`, `$effect`) for reactivity.
- Snippets replace slots; use callback props for component events.
- SvelteKit is the recommended meta-framework for routing, SSR, and Vite integration.

### TailwindCSS4 Integration
- Use the official TailwindCSS plugin for Vite/SvelteKit.
- No breaking changes for Svelte 5 + TailwindCSS4 integration as of June 2025.
- Configure Tailwind in `tailwind.config.js` and import styles in `src/app.css`.
- Use utility classes directly in Svelte components; leverage new Tailwind v4 features (improved JIT, new color system).
- Ensure `svelte-preprocess` or equivalent is set up for advanced CSS.

### Authentication
- Use Supabase Auth for password, magic link, SSO, and MFA.
- For SvelteKit: use `@supabase/ssr` for server-side session management.
- Store session in cookies; use hooks for SSR and client hydration.
- Implement onboarding/profile completion after signup.
- Enforce RLS and privacy controls in UI and backend.
- Use Svelte stores for auth/user state; subscribe to Supabase channels for real-time updates.

### Vite Integration
- Use Vite as the build tool; SvelteKit provides seamless Vite integration.
- Configure plugins in `vite.config.ts` (SvelteKit, Tailwind, Paraglide for i18n).
- Use Vite’s dev server and test runner for fast feedback.

### Breaking Changes & Updates Since 2024
- Svelte 5: explicit runes, snippets, new event/callback model.
- TailwindCSS4: improved JIT, new color system, better performance.
- Supabase: SSR support for SvelteKit, improved SSO/MFA flows.
- No major breaking changes for Svelte+Tailwind integration; follow official docs for updates.

### Project Recommendations
- Modular, profile-centric SPA with Supabase backend.
- Prioritize accessibility (WCAG 2.1 AA), privacy, and audit logging.
- Use Svelte stores for global state, enforce RLS, and implement onboarding/profile flows.
- See DESIGN.md, PLAN.md, and TODO.md for architecture and next steps.

**See DESIGN.md and PLAN.md for details.**