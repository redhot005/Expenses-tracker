var CN='expenses-v12';
var AS=['./', './index.html', './manifest.json'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(CN).then(function(c){return c.addAll(AS)}));self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==CN}).map(function(k){return caches.delete(k)}))}));self.clients.claim()});
self.addEventListener('fetch',function(e){e.respondWith(fetch(e.request).then(function(r){var cl=r.clone();caches.open(CN).then(function(c){c.put(e.request,cl)});return r}).catch(function(){return caches.match(e.request)}))});
