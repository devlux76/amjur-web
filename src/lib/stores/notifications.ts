// src/lib/stores/notifications.ts
import { writable, type Writable } from 'svelte/store';

export type Notification = {
  id: string;
  type: 'info' | 'success' | 'error' | 'warning';
  message: string;
  timestamp: number;
  read?: boolean;
};

export const notifications: Writable<Notification[]> = writable([]);

// Utility to add a notification
export function addNotification(notification: Omit<Notification, 'id' | 'timestamp'>) {
  notifications.update((n) => [
    ...n,
    {
      ...notification,
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      read: false
    }
  ]);
}

// Utility to mark a notification as read
export function markNotificationRead(id: string) {
  notifications.update((n) =>
    n.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
  );
}

// Utility to clear all notifications
export function clearNotifications() {
  notifications.set([]);
}