### Just like you can rewrite paths like /\* to /index.html, you can also set up rules to let parts of your site proxy to external services. Let’s say you need to communicate from a single-page app with an API on https://api.example.com that doesn’t support CORS requests. The following rule will let you use /api/ from your JavaScript client:

### /api/\* https://api.example.com/:splat 200

### Now all requests to /api/... will be proxied through to https://api.example.com straight from our CDN servers without an additional connection from the browser. If the API supports standard HTTP caching mechanisms like ETags or Last-Modified headers, the responses will even get cached by our CDN nodes.

https://docs.netlify.com/routing/redirects/rewrites-proxies/#proxy-to-another-service

https://github.com/Shahzayb/mern-google-login

https://github.com/MeghalBisht/Gamergram
