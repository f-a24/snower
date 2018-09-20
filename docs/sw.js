/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "favicon.ico",
    "revision": "46139912c095c58e084eaf8a4cd0b717"
  },
  {
    "url": "img/snower-144.png",
    "revision": "f09a850d0dfdf7f1e3028d35551b5636"
  },
  {
    "url": "img/snower-192.png",
    "revision": "35ba872d60260e894bc5c2ccfab60bac"
  },
  {
    "url": "img/snower-36.png",
    "revision": "61b2bba44edea2fcdda00425c1418110"
  },
  {
    "url": "img/snower-48.png",
    "revision": "9bd95d5d6ac51fdf176bee25c284c83c"
  },
  {
    "url": "img/snower-72.png",
    "revision": "7b4f39b925a369b1859f2b9b3e15783e"
  },
  {
    "url": "img/snower-96.png",
    "revision": "1b57e5adf9fb823f415331a57da851cf"
  },
  {
    "url": "index.html",
    "revision": "640e57abf1707f13f7c26139a2eff1e0"
  },
  {
    "url": "index.js",
    "revision": "31141117e09866509191c6c881be8264"
  },
  {
    "url": "manifest.json",
    "revision": "52bc10ff785afbc71b7f032e58792af6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
