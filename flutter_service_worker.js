'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2f3f6ed26d82d43178c97d7abc2339d7",
"index.html": "f3ed04217aa328eea7b2bdfe2b78cf4b",
"/": "f3ed04217aa328eea7b2bdfe2b78cf4b",
"main.dart.js": "bff3116d5c5fb93f05636f24f013e3cb",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "97b50d7d7e405a627c8ed242ae672ad6",
"assets/AssetManifest.json": "f108b456480881173c8f97f85e44b243",
"assets/NOTICES": "0d528a0a2a27f3bb269a2ab31b074230",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/timezone/data/latest_all.tzf": "871b8008607c14f36bae2388a95fdc8c",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "f025885322ea49fa8f6aa65bc9eb39df",
"assets/fonts/MaterialIcons-Regular.otf": "d9b76853c3f05ec0baa2dc3f93c8970c",
"assets/assets/images/course_preview.png": "54a4acc900906897988dd7b375aa1992",
"assets/assets/images/teacher1.png": "e6774e70b44c9175f6cb5f2fe24f93e9",
"assets/assets/images/call_to_action_bg.png": "e90754144855954d129f599e189b7739",
"assets/assets/images/sex_education_teacher.jpg": "1845eb933e1d9713967357456cc1da64",
"assets/assets/images/left_to_right_2.png": "26e35151fabb16841b4f2335fd967dd3",
"assets/assets/images/left_to_right_1.png": "36297532520ca775d7e2df01cdf7ba7c",
"assets/assets/images/course_bg_hero.png": "6564f9f2299a527b2fd6120e233d9128",
"assets/assets/images/statistics_bg.png": "ec8adc6ba7fe28d88febb91910b51230",
"assets/assets/images/math_icon.png": "1ef890070e8c69b5bda90ec5a24cef95",
"assets/assets/images/hero_image_desktop.png": "d1a2af70fbf28c0c3b57fca9a0c06bec",
"assets/assets/icons/book_icon.svg": "1a9f1e2899e6eb2d002d69c7d2ae8d93",
"assets/assets/icons/play_circle_line.svg": "cea9fcb6028eac424ac4044314544dfc",
"assets/assets/icons/arrow_right_up_line.svg": "eab1c0567f9d24b0928591b99e8a6790",
"assets/assets/icons/search_eye_line.svg": "a5a8fb2ef9b244d084b333c27a63a582",
"assets/assets/icons/mail_line.svg": "cd683c5d8d2d062cbcd0f832f87b1a7c",
"assets/assets/icons/play_button_line.svg": "dc28b808b358e6c19e780fdea18747c6",
"assets/assets/icons/page_decoration_arrow_down.svg": "f4404da1d51fa1f5d6eb2f598c2672b6",
"assets/assets/icons/time_line.svg": "6788750cf2698da982681be197641ae0",
"assets/assets/icons/person_line.svg": "9f6a15541be91c530380a9612189a42e",
"assets/assets/icons/filter_3_line.svg": "d8d2a4021d8ef97c62a0009799acf66d",
"assets/assets/icons/thumb_up_line.svg": "282d9ff43fdf02d93e0a3dfa9996a772",
"assets/assets/icons/lock_line.svg": "996542d37db72465dfa3bdb097c4f073",
"assets/assets/icons/logo.png": "59a2fa64ab169d2bbc0cd3709a68118b",
"assets/assets/icons/gateway.png": "00efa5a3b6a663b560dd0ff80870ca80",
"assets/assets/icons/page_decoration_star.svg": "f52a5ea4dfc9a19b7d1660ba145f7645",
"assets/assets/icons/line_chart_line.svg": "9b9a915eda3ffc0cc750ed9b77439314",
"assets/assets/icons/page_decoration_half_snowflake.svg": "2da54f80dd5bf82e3012f6f375faad93",
"assets/assets/icons/emotion_sad_line.svg": "b2456952d62941d336a39dcfefc9e838",
"assets/assets/icons/premium_badge.svg": "5ed254f4a47bb136a4de55d16636fc29",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
