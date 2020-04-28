'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "7e99dccb0330040903db11e5f99c7735",
"/": "7e99dccb0330040903db11e5f99c7735",
"main.dart.js": "6d71978ba5c8bd77d1aecf61a3e8ea4d",
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
"assets/assets/images/screen_daybook_card_a.png": "f5518711637ce7bd4527fba1eda2c73c",
"assets/assets/images/screen_subj_charts_a.png": "735050eada227415c029568276cd7c19",
"assets/assets/images/screen_progress_sum_i_b.png": "2197de1ccc2a67864d076577ae4b5834",
"assets/assets/images/screen_main_a.png": "f5ec386f5a4c9244196b270d93e77fdb",
"assets/assets/images/screen_schedule_a.png": "cb0c367300516ab5af034386f2594d88",
"assets/assets/images/screen_subject_i.png": "c3a84eb14652043ab1f493f93f7c3899",
"assets/assets/images/screen_daybook_wg_a.png": "9362e7df6ebe6f7be6380d337c5c48bd",
"assets/assets/images/screen_daybook_tiles_a.png": "e91cf020e926870a8cb5443caeee3110",
"assets/assets/images/screen_schedule_i.png": "55b17ff4606196d1a2d37988cdb9436c",
"assets/assets/images/screen_settings_i.png": "2b8507a559b1bc9caa915465c794cb8b",
"assets/assets/images/board.jpg": "5988a8b018ee067c95bd2415b47026fa",
"assets/assets/images/screen_progress_cur_i.png": "8310705113b0102ce586c68c88758f40",
"assets/assets/images/screen_homework_a.png": "c0a5a345229c2e31e8a8adb75b36d402",
"assets/assets/images/screen_start.png": "0c337719cf29bcf7df833d756754e042",
"assets/assets/images/google-play-badge.svg": "0918ed6f7b85fdb8073783b5a323f1f7",
"assets/assets/images/screen_subject_charts_a.png": "f96641a4bbbf843104f934044f12df6b",
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
