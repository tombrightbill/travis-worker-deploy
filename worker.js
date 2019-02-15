addEventListener('fetch', event => {
  event.respondWith(new Response('deploy from travis!'))
})