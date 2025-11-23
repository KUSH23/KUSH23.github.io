'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c4c86dd97363cb07de890eff6b3ea713",
"version.json": "1d5839df9d79bfe35947e3e9f777b7eb",
"index.html": "10b0ca51959ed0520aa18e0f1530228a",
"/": "10b0ca51959ed0520aa18e0f1530228a",
"main.dart.js": "1cbfdc48e15148aadad676685c1c31ec",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1db1f1133efc23ebb5629de20f80d0d4",
".git/config": "f87a30568885c3fb12c8081750b86f2b",
".git/objects/95/3a527e0ae348ade88f8ed9f1edfec4fb4f84fd": "fc2d17b4af461e7849a9103afee05259",
".git/objects/92/eab450609b7dc5d076ddf6c8416de8209373e0": "9b3d4cb7f5916a87f36a18b466ea7ac4",
".git/objects/50/6c01be572efbd430d9e9147b9eed10618a8cf0": "37aa7d8fccddf2057f01921d5f817a4a",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/34/27be90c6eeb9df43357df25fd399639f75a51e": "6e5d1e65bade61e78dd9c3e479671eb1",
".git/objects/a3/e2b3c608c8010e75a763214af15bdfa680934a": "675490f9f0d69affb9a47fa97349e250",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/ad/dee6b55166988e5c8175f0d1c82544fb99d19d": "4688597642a09fa1cb61e903fdcfae45",
".git/objects/a2/3e6d3f2b08c3cd77c351a9bbf7e5beed242d27": "19b9a11a819f22aa4f74415bfceb3609",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/2547cd8ec93f9e9b06120f1fd2e9e49b3849a5": "b99185c2bf2f28e58865bbe9e8140556",
".git/objects/ab/5cdea61652f8834443d366f0d8d30f967540bf": "da23554228e8761bba81abb25e6e6968",
".git/objects/e5/23830ccd0eee0919ca4996fb46255290f8055c": "616dedb20517ca81970272b9639ffde1",
".git/objects/e2/daa3ae2e757b1c69403e1b078101b1befc667c": "4f8b30163b1cc5f631d49d9cc05ec73f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e3/8dffe95fe1278b040119ee2015620d693c6b6d": "37c1160efc0fb7dbae1f7e478bc5b548",
".git/objects/cf/d4c52de451587b32431b631da55dabb8c6f624": "a2bf3e2d674be2e3d3b904c42454b463",
".git/objects/11/92d49c1ed269254b757971c13efe77d153ce3e": "cebf575d1a8ce02e63ff60a8cc90a80b",
".git/objects/1a/e198d12328f891587d002e48236204d0ec8f59": "63f24fe061b55f76bd2fca933f990677",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/47566c54cbb09f4176185e4fadd5ae2744146d": "a72046ddc7f7bffd01da6b7942a0bf22",
".git/objects/62/dc2ce3ded837b135be24efbe9a391bd308e68d": "56e7335f5d6ce4cfd9cb4b27d21a18df",
".git/objects/54/8d1f5db71a877e28abd67b880d048d77bf90f2": "16df6c972ef5f227ba1eb3832094dedc",
".git/objects/37/4f45c7850d7cf2c0bdf2447f952551564bc829": "ba528d597c8a1544fdc04b89c8a5d9a0",
".git/objects/64/e0fcab4df7dd60c70cd8190e8f4d9ebd3416cc": "a7aad57776641bc38a1c6c7e4cba3a8e",
".git/objects/90/981418e2de29f0c71659cb6e20162376a52166": "12527fdc84dc966d4f1c880befa5c2d4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a0/87e23cf00ffe0380c176e27d9b78541e197514": "2bae57df90d7833b8455125ec87a0c25",
".git/objects/b1/dfbe2416bc0023111c8378d5962abea8be641c": "6846a28eeafcc3fc705375271ce04477",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a6/e227744b4a29894f61eb8f3ac9931ca9556880": "27cec4b2b0b5ecf172a3fc02309d479c",
".git/objects/a6/c84983b8aaf8969777d8cd1945f1b1f4a39a1d": "1c495574e4bf286649eca0f7615a94e4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e6/ab18b59159b5a1137acc96344074938042aaf3": "84208ebd16709f14eb3dc707605a7db0",
".git/objects/ce/2560ede1400efc5eb3c2b4c20a772bfdf15959": "cfe2c5d0547b7dde2559185fd814e3c7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/e4be06a842a310d266b733232f116428b19c03": "d8ab07f483e5a1f181f3f9688a455c89",
".git/objects/12/7bf0fb64614ad9ddcdab7edaa81d3ca2ff3bbf": "76eb4f078cb5a651c56e1034e90287d1",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/82/8d164e6c1980a2967033c4c6b4514d0d5f6bc2": "b786a0d7e703fd82b7cfff720e4d2665",
".git/objects/82/dfaad5c0da01f70d0a60f4d082c5c63043311f": "52e86c9ca292ee6b079f0a84f6de54ca",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c4189c74f60ef348044d2bdaad34b94c",
".git/logs/refs/heads/main": "c4189c74f60ef348044d2bdaad34b94c",
".git/logs/refs/remotes/origin/main": "0c6419e0649e20303472443bcb94bdb9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "4fe662e39ea1139655f97725b856d87e",
".git/refs/remotes/origin/main": "4fe662e39ea1139655f97725b856d87e",
".git/index": "c04f3ad90553d4a897c69fd99c8175c1",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "76ad514158b0df4865d797eaa972f515",
"assets/NOTICES": "040e32343b05d0e7e061f15d627cea56",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "794536c7ea453719f22d9e674439168b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "119f12a59d25732165e8f5abe38e4210",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/myCV/kushalsaini.pdf": "52492d6b83d210999482d5289ae85a43",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "d3b3cc22385d4ac873dd2157360155e0",
"canvaskit/canvaskit.js.symbols": "175bd411bd217d6be2b81e6814ba040e",
"canvaskit/skwasm.wasm": "bba3d030323fb4f2e2262a0e90390dd1",
"canvaskit/chromium/canvaskit.js.symbols": "226d130dfe086da9114583db7ab8dca5",
"canvaskit/chromium/canvaskit.js": "9dc7a140b1f0755e6321e9c61b9bd4d9",
"canvaskit/chromium/canvaskit.wasm": "109a9f1f6d0fcc6b8b17b3cc9cc06b4b",
"canvaskit/skwasm_st.js.symbols": "66594078c390ce22386607adb437f8eb",
"canvaskit/canvaskit.js": "8cf6e87eff144e2453a9640bfa1a4ad0",
"canvaskit/canvaskit.wasm": "9c1d5989342561acfecba39e516f1d73",
"canvaskit/skwasm_st.wasm": "eba51262a05b87a26d420a55481799d3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
