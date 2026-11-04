/* Acervo: guarda os arquivos do app para abrir sem internet.
   Busca e capas (Discogs, MusicBrainz, iTunes, TMDb, OMDb) vão direto para a rede. */
const CACHE = 'acervo-v6';
const SHELL = [
  './',
  'index.html',
  'manifest.json',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/apple-touch-icon.png',
  'icons/favicon-32.png',
  'fonts/archivo-latin.woff2',
  'fonts/archivo-latin-ext.woff2',
  'fonts/courier-prime-400.woff2',
  'fonts/courier-prime-ext-400.woff2',
  'fonts/courier-prime-700.woff2',
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('acervo-') && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // APIs e capas de outros sites: sempre pela rede

  if (req.mode === 'navigate') {
    // Página: rede primeiro (para pegar atualizações), cópia guardada se estiver offline.
    event.respondWith(
      fetch(req)
        .then(res => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then(cache => cache.put('index.html', copy));
          }
          return res;
        })
        .catch(() => caches.match('index.html').then(hit => hit || caches.match('./')))
    );
    return;
  }

  // Ícones e fontes: cópia guardada primeiro.
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(res => {
      if (res.ok) {
        const copy = res.clone();
        caches.open(CACHE).then(cache => cache.put(req, copy));
      }
      return res;
    }))
  );
});
