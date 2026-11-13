// Service Worker for No Nonsense Website
// Provides offline caching and performance boost

const CACHE_VERSION = 'no-nonsense-v1'
const STATIC_CACHE = 'static-v1'
const DYNAMIC_CACHE = 'dynamic-v1'

// Files to cache immediately on install
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/favicon.svg',
  '/logo.png',
  '/manifest.json'
]

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing Service Worker...')
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      console.log('[SW] Caching static assets')
      return cache.addAll(STATIC_ASSETS)
    })
  )
  self.skipWaiting() // Activate immediately
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating Service Worker...')
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== STATIC_CACHE && name !== DYNAMIC_CACHE)
          .map((name) => caches.delete(name))
      )
    })
  )
  return self.clients.claim()
})

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') return

  // Skip chrome-extension and other protocols
  if (!url.protocol.startsWith('http')) return

  // Network-first strategy for HTML (always get fresh content)
  if (request.headers.get('accept').includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Clone and cache the response
          const responseClone = response.clone()
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(request, responseClone)
          })
          return response
        })
        .catch(() => {
          // If network fails, try cache
          return caches.match(request)
        })
    )
    return
  }

  // Cache-first strategy for everything else (CSS, JS, images, videos)
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached version
        return cachedResponse
      }

      // If not in cache, fetch from network
      return fetch(request)
        .then((response) => {
          // Don't cache if not a valid response
          if (!response || response.status !== 200 || response.type === 'error') {
            return response
          }

          // Clone response (can only be consumed once)
          const responseClone = response.clone()

          // Cache for future use
          caches.open(DYNAMIC_CACHE).then((cache) => {
            // Only cache GET requests
            if (request.method === 'GET') {
              cache.put(request, responseClone)
            }
          })

          return response
        })
        .catch(() => {
          // Network failed and not in cache
          // Could return a custom offline page here
          return new Response('Offline - Please check your connection', {
            status: 503,
            statusText: 'Service Unavailable'
          })
        })
    })
  )
})

// Background sync for future enhancements
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync:', event.tag)
  // Can implement background sync features here
})

// Push notifications (future feature)
self.addEventListener('push', (event) => {
  console.log('[SW] Push notification received')
  // Can implement push notifications here
})
