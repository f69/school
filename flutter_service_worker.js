'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "00ecf16947efea821dfe6d78939d909f",
"/": "00ecf16947efea821dfe6d78939d909f",
"main.dart.js": "e4ea6c0edbc0ac0d0568df89159403c9",
"favicon.png": "fd8df1e83c5ea706afd17885f3212bcf",
"icons/Icon-192.png": "6db157ed5ebd8c53db233bed66cad532",
"icons/Icon-512.png": "44409c8d8a15cce8c4ddd493d77449cb",
"manifest.json": "18ee79c1321c4f3aef2097439c7f7e6c",
"assets/LICENSE": "6de9b494cc12d438fd132a9203a29ebc",
"assets/AssetManifest.json": "6f7702d0f60f3f6253915c3e94b13cba",
"assets/FontManifest.json": "b65b0fce804616d5cf7134199441ba17",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "e7dec9c5e1bd830c084f2d2fb94fa1e7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/line_awesome_flutter/lib/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/screen_daybook_card_a.png": "fe0dfa34a37d7bf29394c121bb519a89",
"assets/assets/images/screen_subj_charts_a.png": "c2f37369b48dba287b39ea9fb95d4789",
"assets/assets/images/screen_progress_sum_i_b.png": "fdc2311ababad394f91e2a9055d64f27",
"assets/assets/images/screen_main_a.png": "a12312b52e3ccaf11dd6bba912ca93ce",
"assets/assets/images/screen_schedule_a.png": "16aa084206784892da56ad50d425cdf0",
"assets/assets/images/screen_subject_i.png": "ad6d382511980e48cab0c0d93a48f0e7",
"assets/assets/images/screen_daybook_wg_a.png": "f6d211a20d5056b8b1788b5e69e12810",
"assets/assets/images/screen_daybook_tiles_a.png": "009a4d17b4d7f51fddb33638aac7fb3c",
"assets/assets/images/screen_schedule_i.png": "41bf81d60ea8f716fc579b353e5802a1",
"assets/assets/images/screen_settings_i.png": "a5066cc9464da51a3972a8a1097c91ff",
"assets/assets/images/board.jpg": "4eeb8d9ca126d0ae2a1bfb82f0b159a9",
"assets/assets/images/screen_progress_cur_i.png": "9436e35751e9a04c3c2a33e7951cc464",
"assets/assets/images/screen_homework_a.png": "461ce89117f1a98083175c09569d0114",
"assets/assets/images/screen_start.png": "06b730611b2ab4c5da66b800b21772b1",
"assets/assets/images/google-play-badge.svg": "0918ed6f7b85fdb8073783b5a323f1f7",
"assets/assets/images/screen_subject_charts_a.png": "ce2f87c637807c3151cd2cc452d820f5",
"assets/assets/images/appstore_badge.svg": "d0558d91063038236b60e3ef71fdc1fd",
"assets/assets/icon/icon.png": "3ca1bf1d33631930835e99a240f6a917",
"assets/assets/fonts/SamsungSans-Regular.ttf": "c5de1e4ff3008e2173147dcaaa45bc9b",
"assets/assets/fonts/Chalk-cyrillic-freehand.ttf": "edf8b6542fb063c4dab0a39d543f6cad",
"assets/assets/fonts/Pacifico-Regular.ttf": "9b94499ccea3bd82b24cb210733c4b5e",
"assets/assets/fonts/ProductSans-Regular.ttf": "b61c0ab33a818a0162f3e868babcef4b"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
