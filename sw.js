const CACHE_DYNAMIC_NAME = 'banggo-hunter-dynamic-v1';
const ASSET_CACHE_NAME = 'banggo-hunter-assets-v1';

// Memaksa Service Worker baru untuk langsung aktif tanpa menunggu
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// Langsung mengambil alih kontrol halaman dari Service Worker lama
self.addEventListener('activate', (event) => {
    event.waitUntil(
        clients.claim().then(() => {
            // Opsional: Membersihkan cache lama jika suatu saat kamu ganti nama CACHE_DYNAMIC_NAME
            return caches.keys().then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if (cacheName !== CACHE_DYNAMIC_NAME && cacheName !== ASSET_CACHE_NAME) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            });
        })
    );
});

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // 1. CACHE FIRST untuk Aset Statis (Gambar, Audio, Video)
    if (url.pathname.match(/\.(png|jpg|jpeg|gif|mp3|wav|mp4)$/i)) {
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                // Langsung berikan dari cache jika ada
                if (cachedResponse) {
                    return cachedResponse;
                }
                // Jika tidak ada di cache, download dari internet dan simpan
                return fetch(event.request).then((networkResponse) => {
                    return caches.open(ASSET_CACHE_NAME).then((cache) => {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    });
                }).catch(() => {
                    // Jika gagal download (misal offline dan aset belum ter-cache), biarkan fail senyap
                    return new Response('', { status: 404, statusText: 'Not Found' });
                });
            })
        );
    } 
    // 2. NETWORK FIRST untuk file HTML, CSS, JS (Agar update game langsung masuk)
    else {
        event.respondWith(
            fetch(event.request)
                .then((networkResponse) => {
                    // Jika online dan berhasil ditarik, simpan/perbarui ke cache dinamis
                    return caches.open(CACHE_DYNAMIC_NAME).then((cache) => {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    });
                })
                .catch(() => {
                    // Jika offline (gagal fetch), kembalikan versi terakhir yang ada di cache
                    return caches.match(event.request);
                })
        );
    }
});
