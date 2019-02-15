addEventListener('fetch', event => {
  event.respondWith(new Response('built again with skip_cleanup: true!'))
})