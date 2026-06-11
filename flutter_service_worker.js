'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5e1991ec6d66ae50500285a0deefcb90",
"version.json": "1d5839df9d79bfe35947e3e9f777b7eb",
"index.html": "10b0ca51959ed0520aa18e0f1530228a",
"/": "10b0ca51959ed0520aa18e0f1530228a",
"main.dart.js": "1de46db226b91a6af8a19f99d6062e76",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1db1f1133efc23ebb5629de20f80d0d4",
".git/ORIG_HEAD": "9a1105ea2cca8f3b7f754858ab0b38be",
".git/config": "f87a30568885c3fb12c8081750b86f2b",
".git/objects/0d/b993e86e6e1ce58a27e7cdd011dbad7c6b64cb": "fa75b4ced38546822325fc119fb81452",
".git/objects/95/3a527e0ae348ade88f8ed9f1edfec4fb4f84fd": "fc2d17b4af461e7849a9103afee05259",
".git/objects/92/eab450609b7dc5d076ddf6c8416de8209373e0": "9b3d4cb7f5916a87f36a18b466ea7ac4",
".git/objects/50/6c01be572efbd430d9e9147b9eed10618a8cf0": "37aa7d8fccddf2057f01921d5f817a4a",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/bc092e4e9ad1ea6ecc714c5b1c510a2c04d31b": "a024dd0b4afc42cbcf5ba2dd469af4ad",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9e/e1919dc230d3433cce79d137c37081c974034a": "7918dcf5b15c1ac607255918935ca48a",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "adfbc6c173c4e9b037c82eb43ea9b9d0",
".git/objects/34/27be90c6eeb9df43357df25fd399639f75a51e": "6e5d1e65bade61e78dd9c3e479671eb1",
".git/objects/5a/6bfa466bf05f68d16cdc8162660a7ca964f0f2": "e37ce8566e3fcee5fb4a07e1308f8fca",
".git/objects/a3/e2b3c608c8010e75a763214af15bdfa680934a": "675490f9f0d69affb9a47fa97349e250",
".git/objects/ad/92ead9a1ef056eaf04253ec71e32afd1fdfc40": "f06fa267b62c157230912e99940e222c",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/ad/dee6b55166988e5c8175f0d1c82544fb99d19d": "4688597642a09fa1cb61e903fdcfae45",
".git/objects/a2/3e6d3f2b08c3cd77c351a9bbf7e5beed242d27": "19b9a11a819f22aa4f74415bfceb3609",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/2547cd8ec93f9e9b06120f1fd2e9e49b3849a5": "b99185c2bf2f28e58865bbe9e8140556",
".git/objects/ab/5cdea61652f8834443d366f0d8d30f967540bf": "da23554228e8761bba81abb25e6e6968",
".git/objects/e5/23830ccd0eee0919ca4996fb46255290f8055c": "616dedb20517ca81970272b9639ffde1",
".git/objects/e2/daa3ae2e757b1c69403e1b078101b1befc667c": "4f8b30163b1cc5f631d49d9cc05ec73f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/469e0119806dd92f5211ff0c01f79fdba30ed8": "718d1fc1ba71aec318045c9b01ec9664",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "db30ba7b07ab1aaa8d98491333de54a7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e3/8dffe95fe1278b040119ee2015620d693c6b6d": "37c1160efc0fb7dbae1f7e478bc5b548",
".git/objects/cf/d4c52de451587b32431b631da55dabb8c6f624": "a2bf3e2d674be2e3d3b904c42454b463",
".git/objects/fe/b17f85ffec397d2a5fff333baa9644dd947125": "06e718ddd1e7a609d693f49ad4d181b8",
".git/objects/4e/587e391e9f0245b0d810610e6fedc99f9d41c1": "bf8de257902cc2a5fe39825a86f9ccc1",
".git/objects/27/1ee7c2051d92b3c46644de490cb9247d356926": "696b54ab98637e818ca77b7b35a57c31",
".git/objects/4b/e4e9d26a9142eb593dfe5bfca777405406743d": "97b7f7ade84c5104d4c4dec4589645ec",
".git/objects/11/92d49c1ed269254b757971c13efe77d153ce3e": "cebf575d1a8ce02e63ff60a8cc90a80b",
".git/objects/1a/e198d12328f891587d002e48236204d0ec8f59": "63f24fe061b55f76bd2fca933f990677",
".git/objects/7b/b0a657cdef8723de77933f42451e32eb27a707": "6972856e30010396323230fd281a14c7",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/38900b222fe67373849af7b31315fd6995d309": "46bf4377c05dd6c002ae71d93b1c06f4",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "b0486f433d29368a047e2605d1a4d154",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "efc2c4346f61190dfbaa3b3cf7556de8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/47566c54cbb09f4176185e4fadd5ae2744146d": "a72046ddc7f7bffd01da6b7942a0bf22",
".git/objects/07/294988a88b924b276f921339e867435ec40990": "94f82ad0dfb6273e7a640f181c7e20dc",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "62e5b19dc0e38064163a0f5de7638115",
".git/objects/62/dc2ce3ded837b135be24efbe9a391bd308e68d": "56e7335f5d6ce4cfd9cb4b27d21a18df",
".git/objects/54/8d1f5db71a877e28abd67b880d048d77bf90f2": "16df6c972ef5f227ba1eb3832094dedc",
".git/objects/37/4f45c7850d7cf2c0bdf2447f952551564bc829": "ba528d597c8a1544fdc04b89c8a5d9a0",
".git/objects/06/b4a3a601d01f8fc4b5cf2d78845554dc624eaf": "05fee42938a64e162d4257de500e4e86",
".git/objects/6c/42770a5b0397f55752902c8c47631922739f23": "9d6bfca2359f0ccb96af929a93739012",
".git/objects/0f/82a8360517d2c8b7d16e85434d40c6fb735954": "6a607eaa588a4312c03292ddbe569cfa",
".git/objects/64/e0fcab4df7dd60c70cd8190e8f4d9ebd3416cc": "a7aad57776641bc38a1c6c7e4cba3a8e",
".git/objects/90/9f85ab6930f703ef73ece37b3559d8ef56b73f": "ed43d1a730160ea42f0688eafef6a9fd",
".git/objects/90/981418e2de29f0c71659cb6e20162376a52166": "12527fdc84dc966d4f1c880befa5c2d4",
".git/objects/90/59ae24faf3b5d7ff50d051813866330370763d": "4f9184d246be694da93e6f8ee3c2c1d0",
".git/objects/90/8811612498fc69838698300f3985b2eae0e6af": "68d6cc095aee05520e355a30c0f024ba",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/6c60c5c13f335cc011ae6b7d0e2c4ba9521f28": "5055b9984bc2d6d2c5d9e20346648708",
".git/objects/a0/87e23cf00ffe0380c176e27d9b78541e197514": "2bae57df90d7833b8455125ec87a0c25",
".git/objects/a0/1e09270e23605e046470a3bf8647f008011def": "22d4a9b16917273edf1f3512d9783899",
".git/objects/b1/dfbe2416bc0023111c8378d5962abea8be641c": "6846a28eeafcc3fc705375271ce04477",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/aa360526e5937439fa4832ad63f17507fca465": "718c0ee626090d81538dea14849bf4ab",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b0/5ed5d79c39e745ee6ec876b5e01a351e8f6b70": "06fd9556571d8d549c9eb5bd13876cb1",
".git/objects/a6/e227744b4a29894f61eb8f3ac9931ca9556880": "27cec4b2b0b5ecf172a3fc02309d479c",
".git/objects/a6/c84983b8aaf8969777d8cd1945f1b1f4a39a1d": "1c495574e4bf286649eca0f7615a94e4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ea/e9ebee126bd48dda58f267000544f7b6692c4b": "238ff69bdcaa37aa97951a0b801dfeff",
".git/objects/e1/7ccb1c34e1455bf615294dc0509afa05983386": "74294090e31c4b5f6ab96a70dd123c91",
".git/objects/e6/ab18b59159b5a1137acc96344074938042aaf3": "84208ebd16709f14eb3dc707605a7db0",
".git/objects/f7/af83c022d9df6ce5f79a25c80e28d90df76a2f": "737468d7dfb858cbcd1b43635cb33ba8",
".git/objects/ff/3babc594f5f715d25ec6ab41fe54a661c12f50": "a3520f593f7b2956edd3c082887ff831",
".git/objects/f1/b35ac47db76133458bc303c3b4398bd708d3c1": "39d3911737f55a0cb0821943950b9cc9",
".git/objects/ce/2560ede1400efc5eb3c2b4c20a772bfdf15959": "cfe2c5d0547b7dde2559185fd814e3c7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/a66a5a0f6a463d7bb3bd2f4a6acc8b14e8ffef": "79c4130de4b18490778606a01a5e787d",
".git/objects/2d/7e62726c5e7f726ca139d5cfd378aa041b6c14": "5b680b6506f9a6195fc34543ba0ab9f0",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/e4be06a842a310d266b733232f116428b19c03": "d8ab07f483e5a1f181f3f9688a455c89",
".git/objects/77/6961384d33f5861d01c45150fd525e6cdedc64": "e3a7e59f817049db7273121289e348de",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "54ab11d80a5332cf91fd2999264849ea",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/fefc202ae7e6111bdf1d3079fac08321b0f498": "1a22f922c974ffc1d49475afa37cb4ca",
".git/objects/23/edc6983eb8e4690e0a4c463f4dfccd30bea2fa": "def90cdf5710b0a1d4790fa66f1becc9",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/12/7bf0fb64614ad9ddcdab7edaa81d3ca2ff3bbf": "76eb4f078cb5a651c56e1034e90287d1",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/1c/10972eceaea5bc6ddf055d7e4caa75e01e6f8e": "0185c67dad999f49755704755e660c16",
".git/objects/82/8d164e6c1980a2967033c4c6b4514d0d5f6bc2": "b786a0d7e703fd82b7cfff720e4d2665",
".git/objects/82/dfaad5c0da01f70d0a60f4d082c5c63043311f": "52e86c9ca292ee6b079f0a84f6de54ca",
".git/objects/49/fe0ede01bfc2543ea24bfef6ed7ad168cc4233": "8fc10df6f86799c795a0cabd5cef5835",
".git/objects/2e/27bdfd651ef4cf1b094a230a527cdd58bc38ce": "ed85e571e70593774f1d891a0f674bab",
".git/objects/47/c0e6ce88a5a3a7338deb1ac2fc9425fde2a099": "ab506b339ca443be7afb2690696d9761",
".git/objects/13/9081863e6ddbed701b2a9005690641eacb175d": "98a8235c9778ddcb86dc1c6632946e0a",
".git/objects/7f/9c2381aefbe3385c5f55f7f420772c0ce83dd5": "b4bb14afb4fe682ac5d29873e7a68b98",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a82b22c87e45b3b2d5d13c27e10f895d",
".git/logs/refs/heads/main": "a82b22c87e45b3b2d5d13c27e10f895d",
".git/logs/refs/remotes/origin/main": "783d9bacdc8523764e7fe0a19ff42294",
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
".git/refs/heads/main": "9a1105ea2cca8f3b7f754858ab0b38be",
".git/refs/remotes/origin/main": "9a1105ea2cca8f3b7f754858ab0b38be",
".git/index": "421fadd4482cb6a29bf7ff58bdbdde8e",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/FETCH_HEAD": "db2bc70e85897c5cfeb9b6b34b4d657d",
"assets/AssetManifest.json": "e752ca2d0faee344c5bed5ed30a50bf4",
"assets/NOTICES": "1eff8ca092661cd26a6889a250a689b6",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "14db067687058bc12f17de0b6731f31f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "269f971cec0d5dc864fe9ae080b19e23",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "15d54d142da2f2d6f2e90ed1d55121af",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "847d300052598aceb697ddbc70307ab4",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/myCV/kushalsaini.pdf": "6238f9283e1faf9f0a442009b7e9bb44",
"assets/assets/myCV/kushalsainicv.pdf": "a3f194ef1866b4454a69278360695fd1",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm_st.js.symbols": "66594078c390ce22386607adb437f8eb",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
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
