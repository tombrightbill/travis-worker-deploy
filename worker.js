addEventListener('fetch', event => {
  event.respondWith(new Response('master branch!'))
})