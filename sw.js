const CACHE_NAME = 'banggo-cache-v4';

// DAFTAR SEMUA ASET YANG WAJIB DISEDOT KE MEMORI HP PEMAIN
const urlsToCache = [
  './index.html',
  './manifest.json',
  
  // Aset Gambar UI & Background
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/sky.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/mountain.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/forest.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/cloud.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/banggo_hunter_logo.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/title_background.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/studio_logo.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/star.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/daily_login_modal.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/daily_slot_1.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/daily_slot_2.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/item_coin.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/icon_feather.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/button_close.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/modal_draw_screen.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/button_setting.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/button_exit.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/modal_detail.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/modal_leaderboard.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/button_prev.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/button_next.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/place_name.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/character_screen_background.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/gameover_background.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/modal_timer.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/modal_score.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/button_pause.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/splash_screen_logo.png',
  
  // Icon Gameplay Baru
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/icon_frenzyrush.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/icon_sniperelite.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/icon_suddendeath.png',
  
  // Aset Gameplay
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/bangau_fly.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/bangau_down.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/bangau_emas_fly.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/bangau_emas_down.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/shot.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/crosshair.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/scope.png',
  
  // Card & Karakter
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/normal_card_banggo.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/normal_card_eab.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/normal_card_edy.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/rare_card_risa.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/superrare_card_lyra.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/supersuperrare_card_jack.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/ultrarare_card_silas.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/superrare_card_elena.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/rare_card_remi.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/normal_card_ikra.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/character_banggo.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/character_eab.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/character_edy.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/character_risa.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/character_lyra.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/character_jack.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/character_silas.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/character_elena.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/character_remi.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/character_ikra.png',
  
  // Tombol Tembak & Skill
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/button_shot_lower.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/button_shot_reload.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/button_shot_banggo.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/button_shot_eab.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/button_shot_edy.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/button_shot_risa.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/button_shot_lyra.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/button_shot_jack.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/button_shot_silas.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/button_shot_elena.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/button_shot_remi.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/button_shot_ikra.png',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/button_skill.png',
  
  // Audio & SFX
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/Gun%20shot.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/Hit.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/button.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/Title%20screen%20bgm.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/Ambience.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/doubleshot.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/trippleshot.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/sky_reaper.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/feather_frenzy.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/banggo_slayer.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/gold_banggo_down.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/timesup.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/1_star.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/2_star.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/3_star.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/no_star.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/share.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/countdown.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/combo_frenzy.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/draw.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/reward.mp3',
  
  // Audio Voice Lines Tiap Karakter
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/banggo_voice_character.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/banggo_voice_equipped.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/banggo_voice_gameplay.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/eab_voice_character.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/eab_voice_equipped.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/eab_voice_gameplay.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/edy_voice_character.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/edy_voice_equipped.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/edy_voice_gameplay.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/ikra_voice_character.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/ikra_voice_equipped.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/ikra_voice_gameplay.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/risa_voice_character.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/risa_voice_equipped.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/risa_voice_gameplay.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/remi_voice_character.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/remi_voice_equipped.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/remi_voice_gameplay.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/lyra_voice_character.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/lyra_voice_equipped.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/lyra_voice_gameplay.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/elena_voice_character.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/elena_voice_equipped.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/elena_voice_gameplay.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/jack_voice_character.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/jack_voice_equipped.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/jack_voice_gameplay.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/silas_voice_character.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/silas_voice_equipped.mp3',
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/silas_voice_gameplay.mp3',
  
  // Video
  'https://udankkeramat.github.io/Banggo-Hunter-Asset/combo_vfx.mp4'
];

// 1. Install Service Worker & Simpan Cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Sera lagi nyedot aset buat Bos...');
      return cache.addAll(urlsToCache);
    })
  );
});

// 2. Aktifkan Service Worker & Hapus Cache Lama
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// 3. Ambil data dari Cache duluan, kalau gak ada baru ke Internet
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response; // Dapet dari memori HP!
      }
      return fetch(event.request); // Harus ke internet!
    })
  );
});
