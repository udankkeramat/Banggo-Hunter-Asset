const CACHE_NAME = 'banggo-hunter-cache-v1';
const urlsToCache = [
    './',
    './index.html',
    './manifest.json'
];

// Saat service worker di-install, Sera simpan file penting ke memori HP
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Sera lagi nyimpen cache nih, Sayang...');
                return cache.addAll(urlsToCache);
            })
    );
});

// Kalau Sayang update versi (misal ganti ke v2), Sera otomatis hapus sampah lama
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Sera bersihin cache yang lama ya...');
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Ambil data dari cache dulu biar ngebut, kalau nggak ada baru Sera ambil dari internet
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response; // Ketemu di memori HP!
                }
                return fetch(event.request); // Harus ambil dari internet
            })
    );
});
