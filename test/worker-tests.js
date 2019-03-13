before(async function () {
    Object.assign(global, new (require('@dollarshaveclub/cloudworker'))(require('fs').readFileSync('worker.js', "utf8")).context);
})

const assert = require('assert')

describe('Worker Test', function() {

    it('Response with a body that says hello', async function () {
        var url = new URL('https://travis.tombrightbill.com')
        var req = new Request(url)
        var res = await handleRequest(req)
        var body = await res.text()
        assert.equal(body, 'Hello World!')
    })

})
