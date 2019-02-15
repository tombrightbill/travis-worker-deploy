addEventListener('fetch', event => {
  event.respondWith(new Response('auto deploy from travis success build!'))
})