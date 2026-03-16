// Nama cache baru, Sera kasih tanggal hari ini biar satpam browser langsung sadar ada update!
const CACHE_NAME = 'banggo-hunter-v2-20260317';

// File kerangka utama yang WAJIB disimpan pertama kali
const CORE_ASSETS = [
    './',
    './index.html',
    './manifest.json'
];

// Event Install: Memaksa service worker baru langsung bekerja
self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('[Service Worker] Caching Core Assets');
                return cache.addAll(CORE_ASSETS);
            })
    );
});

// Event Activate: Membersihkan sampah memori/cache versi lama
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[Service Worker] Menghapus cache lama:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Event Fetch: Dynamic Caching (Otomatis simpan aset baru yang dipanggil)
self.addEventListener('fetch', event => {
    // Hanya proses request dengan metode GET (Abaikan POST untuk upload score Leaderboard)
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            // 1. Cek di Cache. Kalau ada, langsung kasih (Biar cepat & bisa offline)
            if (cachedResponse) {
                return cachedResponse;
            }

            // 2. Kalau nggak ada di Cache, ambil dari Internet (Network)
            return fetch(event.request).then(networkResponse => {
                // Pastikan responsnya valid sebelum disimpan
                if (!networkResponse || networkResponse.status !== 200 || (networkResponse.type !== 'basic' && networkResponse.type !== 'cors')) {
                    return networkResponse;
                }

                // 3. Simpan salinan ke Cache buat dipakai offline nanti
                const responseToCache = networkResponse.clone();
                caches.open(CACHE_NAME).then(cache => {
                    // Jangan cache request ke API Google Apps Script untuk hindari data basi
                    if (!event.request.url.includes('script.google.com')) {
                        cache.put(event.request, responseToCache);
                    }
                });

                return networkResponse;
            }).catch(() => {
                // Logika tambahan jika offline total dan gagal fetch
                console.log('[Service Worker] Koneksi terputus dan aset tidak ada di cache.');
            });
        })
    );
});
