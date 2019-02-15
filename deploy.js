

const cloudflare = require('cloudflare-workers-toolkit')

const fs = require('fs')
const worker = fs.readFileSync('./worker.js', "utf8")

cloudflare.workers.deploy({
	script: worker
}).then((res) => {
	console.log(JSON.stringify(res, undefined, 2))
}).catch((e) => {
	console.log(e.message)
})


