const CACHE_NAME = 'junior-astronaut-v1';
const CORE = ['./', './index.html', './manifest.webmanifest', './icon.svg'];
self.addEventListener('install', (event) => { event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE))); self.skipWaiting(); });
self.addEventListener('activate', (event) => { event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))); self.clients.claim(); });
self.addEventListener('fetch', (event) => { const url = new URL(event.request.url); if (event.request.method !== 'GET' || url.origin !== self.location.origin) return; event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => { if (response.ok) { const clone = response.clone(); void caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone)); } return response; }).catch(() => caches.match('./index.html')))); });
