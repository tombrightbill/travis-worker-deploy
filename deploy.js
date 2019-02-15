

const cloudflare = require('cloudflare-workers-toolkit')

const fs = require('fs')
const worker = fs.readFileSync('./worker.js', "utf8")

cloudflare.setZoneId('32fc4108517d20341422b768ab90be38')

accountId = '390226513f11a1cb8815f2009cbc5576'

cloudflare.workers.deploy({
	script: worker
}).then((res) => {
	console.log(JSON.stringify(res, undefined, 2))
}).catch((e) => {
	console.log(e.message)
})


