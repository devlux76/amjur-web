// src/lib/stores/auth.ts
import { writable, type Writable } from 'svelte/store';
import { supabase } from '../supabaseClient';
import type { Session, User } from '@supabase/supabase-js';

// Auth session store
export const session: Writable<Session | null> = writable(null);
// User profile store (extend as needed)
export const user: Writable<User | null> = writable(null);

// Subscribe to auth state changes
supabase.auth.onAuthStateChange((_event, newSession) => {
  session.set(newSession);
  user.set(newSession?.user ?? null);
});

// Initialize session on load
supabase.auth.getSession().then(({ data }) => {
  session.set(data.session);
  user.set(data.session?.user ?? null);
});