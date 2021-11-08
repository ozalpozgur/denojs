import { listenAndServe } from "https://deno.land/std@0.111.0/http/server.ts";

async function handler(req) {
	const res = await fetch('https://www.turkishairlines.com/com.thy.web.online.ibs/ibs/booking/location/suggest', {
		headers: {
			'accept-language': 'tr',
			country: 'tr',
			page: 'https://www.turkishairlines.com/tr-tr/',
		},
	});
  return new Response();
}

console.log("Listening on http://localhost:8000");
await listenAndServe(":8000", handler);
