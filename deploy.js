const fs = require('fs')
const fetch = require('node-fetch')
const worker = fs.readFileSync('./worker.js', "utf8")


async function deployToCF()
{
  const headers = {
  	'X-Auth-Key': process.env.CLOUDFLARE_AUTH_EMAIL,
  	'X-Auth-Email': process.env.CLOUDFLARE_AUTH_KEY,
  	'Content-Type': 'application/javascript'
  }

  const url = `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/workers/scripts/deployed-from-travis`
  // NOTE: this is the Enterprise URL, if you are using a self service account the endpoint is:
  // client/v4/zones/:zone_id/workers/script
  // An Enterprise account can have multiple scripts, each with a unique name (in this case 'deployed-from-travis')
  let data = await fetch(url, {method: 'PUT', headers: headers, body: worker})
  let main = await data.json();
  console.log(main);
}

deployToCF();