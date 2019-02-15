// const cf = require('cloudflare')({
//   email: 'tombrightbill@berkeley.edu',
//   key: 'c9c0a36103bf85d2f2dc0fb8ab026ae5ec505'
// })

// const fs = require('fs')
// const worker = fs.readFileSync('../worker.js', "utf8")

// cf.ZoneWorkersScript.read('32fc4108517d20341422b768ab90be38').then((res) => {
// 	console.log(res.result.status)
// })

const cloudflare = require('../../cloudflare-workers-toolkit')

const fs = require('fs')
const worker = fs.readFileSync('../worker.js', "utf8")


//cloudflare.setAccountId('390226513f11a1cb8815f2009cbc5576')
cloudflare.setZoneId('32fc4108517d20341422b768ab90be38')

accountId = '390226513f11a1cb8815f2009cbc5576'

// const script = "addEventListener('fetch', event => {\n  event.respondWith(new Response('test success'))\n})"

cloudflare.workers.deploy({
	script: worker
}).then((res) => {
	console.log(JSON.stringify(res, undefined, 2))
}).catch((e) => {
	console.log(e.message)
})

// cloudflare.workers.getSettings({
// }).then((res) => {
// 	console.log(JSON.stringify(res, undefined, 2))
// })

