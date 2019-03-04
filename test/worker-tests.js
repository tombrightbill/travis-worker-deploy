const assert = require('assert')
const fs = require('fs')
const Cloudworker = require('@dollarshaveclub/cloudworker')


const simpleScript = `addEventListener('fetch', event => {
  event.respondWith(new Response('hello', {status: 200}))
})`




const getResponse = async (url) => {
  const script = fs.readFileSync('worker.js', "utf8")
  //const req = new Cloudworker.Request('https://spx.tombrightbill.com/')
  const req = new Cloudworker.Request(url)
  const cw = new Cloudworker(simpleScript)
  const response = await cw.dispatch(req)
  return response
}


describe('Worker', () => {
	it('returns a body that says hello', async () => {
    const res = await getResponse('https://spx.tombrightbill.com')
    const body = await res.text()
    console.log(body)
		assert.equal(body, 'hello', 'some error message')
	})
})

describe('Worker', () => {
  it('returns a body that says hello',() => {
    const req = new Cloudworker.Request('https://spx.tombrightbill.com')
    const cw = new Cloudworker(simpleScript)
    cw.dispatch(req).then((res) => {
      res.text().then((body) =>{
        assert.equal(body, 'hello', 'some error message')
      })
    })
  })
})



