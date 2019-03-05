addEventListener('fetch', event => {
  event.respondWith(new Response('hello', {status: 200}))
})

//comments