addEventListener('fetch', event => {
  event.respondWith(new Response('local branch!'))
})