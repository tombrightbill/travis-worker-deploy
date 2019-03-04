// addEventListener('fetch', event => {
//   event.respondWith(handleRequest(event.request))
// })

// async function handleRequest(req){
//   return(new Response('Simon is from Swiss',
//     {headers: {
//       'x-response-header': 'response header data'
//     }},
//     {status: 200}
//   )
//   )}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Fetch and log a request
 * @param {Request} request
 */
async function handleRequest(request) {
  const body = `Hello and welcome to this simple Worker`
  if (request.headers.get('x-test-header'){
  	return response.Redirect(302, 'https://subdomain.example.com')
  })

  return new Response(body, {
  	
  })
}