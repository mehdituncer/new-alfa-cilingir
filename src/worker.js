// Static site worker. Static files are served by the assets binding; this only enforces one canonical address:
// www -> apex and http -> https (301). Hashed assets and images skip the worker (see run_worker_first in wrangler.jsonc).
const CANONICAL_HOST = 'alfacilingir.com';
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let redirect = false;
    if (url.hostname === 'www.' + CANONICAL_HOST) { url.hostname = CANONICAL_HOST; redirect = true; }
    if (url.protocol === 'http:' && url.hostname === CANONICAL_HOST) { url.protocol = 'https:'; redirect = true; }
    if (redirect) return Response.redirect(url.toString(), 301);
    return env.ASSETS.fetch(request);
  },
};
