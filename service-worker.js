const CACHE_NAME = 'apm-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/apple-touch-icon.png',
  '/activate-play-mode-icon.png',
  '/icons/1.png',
  '/icons/2.png',
  '/icons/3.png',
  '/icons/4.png',
  '/icons/5.png',
  '/icons/6.png',
  '/icons/7.png',
  '/icons/8.png',
  '/icons/9.png',
  '/icons/10.png',
  '/icons/11.png',
  '/videos/1 - Personification.mp4',
  '/videos/2 - Mechanical Play.mp4',
  '/videos/3 - Playing the Opposite.mp4',
  '/videos/4 - Challenges and Gamifying.mp4',
  '/videos/5 - Mystery Magic and Confusion.mp4',
  '/videos/6 - Make it a Musical.mp4',
  '/videos/7 - Characters and Role Play.mp4',
  '/videos/8 - Storytelling.mp4',
  '/videos/9 - Romanticizing the Mundane.mp4',
  '/videos/10 - Body and Breath.mp4',
  '/videos/11 - General Nonsense.mp4'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
