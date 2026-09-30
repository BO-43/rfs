// Simple Service Worker for PWA Builder compatibility
self.addEventListener('install', function(e) {
    self.skipWaiting();
});

self.addEventListener('activate', function(e) {
    e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(e) {
    // Simple fetch handler - just fetch from network
    e.respondWith(fetch(e.request));
});
