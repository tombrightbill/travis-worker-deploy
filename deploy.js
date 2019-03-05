const fs = require('fs')
const fetch = require('node-fetch')
const worker = fs.readFileSync('./worker.js', "utf8")


const deployToCF = async () => {
  const headers = {
  	'X-Auth-Key': process.env.CLOUDFLARE_AUTH_KEY,
  	'X-Auth-Email': process.env.CLOUDFLARE_AUTH_EMAIL,
  	'Content-Type': 'application/javascript'
  }

  const url = `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/workers/scripts/deployed-from-travis`
  // NOTE: this is the Enterprise URL, if you are using a self service account the endpoint is:
  // client/v4/zones/:zone_id/workers/script
  // An Enterprise account can have multiple scripts, each with a unique name (in this case 'deployed-from-travis')
  try { 
	  let data = await fetch(url, {method: 'PUT', headers: headers, body: worker})
	  let json = await data.json()

	  if(data.status === 200) {
	  	console.log('Success')
	  } else {
	  	throw new Error(`Deployment Failure, Status ${data.status}`)
	  }
  } catch(e) {
 	console.log(e)

  }
}

deployToCF();