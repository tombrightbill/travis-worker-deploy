addEventListener('fetch', event => {
  event.respondWith(new Response('simon is from swiss!'))
})