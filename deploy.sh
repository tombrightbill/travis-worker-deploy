curl -H "X-Auth-Key: `$(CLOUDFLARE_AUTH_KEY)`" \
	 -H "X-Auth-Email: `$(CLOUDFLARE_AUTH_EMAIL)`" \
	 -H "Content-Type: application/javascript" \
	 "https://api.cloudflare.com/client/v4/accounts/`${CLOUDFLARE_ACCOUNT_ID}`/workers/scripts/deployed-from-travis" \
	 --data-binary "@worker.js"

