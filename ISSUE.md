# amjur.org SPA — Current Issues & Next Steps

## Current State
- Supabase backend is fully mapped: "api" schema (profiles, education, experience, skills, blog_posts, membership, collaborations, documents, forum, amendments, etc.) and "auth" schema (users, SSO, MFA, sessions, tokens, audit logs).
- Relationships and constraints are documented in DESIGN.md.
- Authentication supports password, magic link, SSO, MFA, and RLS.

## Issues / Gaps
- UI/UX and Svelte SPA implementation not started.
- No user onboarding or profile completion flows implemented.
- Role-based dashboards and RLS enforcement need to be built into the frontend.
- Real-time collaboration and notifications not yet implemented.
- Accessibility and privacy controls need to be enforced in UI.

## Next Steps
- Implement Svelte SPA structure as outlined in DESIGN.md.
- Build onboarding and profile flows.
- Integrate Supabase Auth (SSO, MFA, session management).
- Enforce RLS and privacy controls in UI.
- Add real-time features for forum, documents, and collaborations.
- Prioritize accessibility and professional branding.