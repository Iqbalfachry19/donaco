if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),d={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/1734.a25d993d945e858a.js",revision:"a25d993d945e858a"},{url:"/_next/static/chunks/197.5769a1bc1c3297da.js",revision:"5769a1bc1c3297da"},{url:"/_next/static/chunks/2083.9ae5d1143e12e544.js",revision:"9ae5d1143e12e544"},{url:"/_next/static/chunks/2114.445788cc40c53888.js",revision:"445788cc40c53888"},{url:"/_next/static/chunks/2162.07819929f60eb6f4.js",revision:"07819929f60eb6f4"},{url:"/_next/static/chunks/2610.2e65ec5350162a08.js",revision:"2e65ec5350162a08"},{url:"/_next/static/chunks/2741.be6ea0583b58c352.js",revision:"be6ea0583b58c352"},{url:"/_next/static/chunks/2898.ba523f385e27cdc6.js",revision:"ba523f385e27cdc6"},{url:"/_next/static/chunks/2928.316f30ad50dbf336.js",revision:"316f30ad50dbf336"},{url:"/_next/static/chunks/3028.db170fc65390a955.js",revision:"db170fc65390a955"},{url:"/_next/static/chunks/3089.550a3ffe3abffd4c.js",revision:"550a3ffe3abffd4c"},{url:"/_next/static/chunks/3199.d3467393a78bec8f.js",revision:"d3467393a78bec8f"},{url:"/_next/static/chunks/3817.9234f59d287ae746.js",revision:"9234f59d287ae746"},{url:"/_next/static/chunks/3893.30533c7a8534b1cc.js",revision:"30533c7a8534b1cc"},{url:"/_next/static/chunks/4247.7d35980f7523a5de.js",revision:"7d35980f7523a5de"},{url:"/_next/static/chunks/4339.2d4fe7ad3bb9fd2e.js",revision:"2d4fe7ad3bb9fd2e"},{url:"/_next/static/chunks/44.788f26404622cf89.js",revision:"788f26404622cf89"},{url:"/_next/static/chunks/4482.5037f2a351e762a8.js",revision:"5037f2a351e762a8"},{url:"/_next/static/chunks/4506.7ac6cbcf788ab300.js",revision:"7ac6cbcf788ab300"},{url:"/_next/static/chunks/4701.4a528516297a7aef.js",revision:"4a528516297a7aef"},{url:"/_next/static/chunks/5001.4185405c4e3fa567.js",revision:"4185405c4e3fa567"},{url:"/_next/static/chunks/5236.c25872676aa89183.js",revision:"c25872676aa89183"},{url:"/_next/static/chunks/5345-d3ac9fb3bfaca168.js",revision:"d3ac9fb3bfaca168"},{url:"/_next/static/chunks/5490.6aeb3459e0f89200.js",revision:"6aeb3459e0f89200"},{url:"/_next/static/chunks/5581.8afd6456ef6d5076.js",revision:"8afd6456ef6d5076"},{url:"/_next/static/chunks/5632.0e55d58485e6eb9c.js",revision:"0e55d58485e6eb9c"},{url:"/_next/static/chunks/5799.cdd1af3109c95e25.js",revision:"cdd1af3109c95e25"},{url:"/_next/static/chunks/6164.9bb2dbe41f3b1f0a.js",revision:"9bb2dbe41f3b1f0a"},{url:"/_next/static/chunks/627.d9c21101a0f3d6a7.js",revision:"d9c21101a0f3d6a7"},{url:"/_next/static/chunks/7611-c3ee25b85f546d41.js",revision:"c3ee25b85f546d41"},{url:"/_next/static/chunks/7613.a04a4570891e5ae7.js",revision:"a04a4570891e5ae7"},{url:"/_next/static/chunks/7891.aa90c8c31da35f8d.js",revision:"aa90c8c31da35f8d"},{url:"/_next/static/chunks/8110.8e6c383e33544327.js",revision:"8e6c383e33544327"},{url:"/_next/static/chunks/8370.c8080a41dba64d88.js",revision:"c8080a41dba64d88"},{url:"/_next/static/chunks/847.c333eddad89fbada.js",revision:"c333eddad89fbada"},{url:"/_next/static/chunks/8777.fef2c2d0cde04992.js",revision:"fef2c2d0cde04992"},{url:"/_next/static/chunks/9190.4d234463fe9e4d9c.js",revision:"4d234463fe9e4d9c"},{url:"/_next/static/chunks/9519.02f27ed6833ac56f.js",revision:"02f27ed6833ac56f"},{url:"/_next/static/chunks/9651.65422321abb4e080.js",revision:"65422321abb4e080"},{url:"/_next/static/chunks/9695.741e4445d516fae1.js",revision:"741e4445d516fae1"},{url:"/_next/static/chunks/framework-3236775a9ca336a2.js",revision:"3236775a9ca336a2"},{url:"/_next/static/chunks/main-0d3192c0256e21f8.js",revision:"0d3192c0256e21f8"},{url:"/_next/static/chunks/pages/_error-be7b44e9372d482e.js",revision:"be7b44e9372d482e"},{url:"/_next/static/chunks/pages/about-1755c2f5a6fa223f.js",revision:"1755c2f5a6fa223f"},{url:"/_next/static/chunks/pages/dashboard-9830405b0b1677c4.js",revision:"9830405b0b1677c4"},{url:"/_next/static/chunks/pages/donasi-954fcb7aa79db006.js",revision:"954fcb7aa79db006"},{url:"/_next/static/chunks/pages/donasi/%5Bid%5D-5495fc0a00e45110.js",revision:"5495fc0a00e45110"},{url:"/_next/static/chunks/pages/inbox-94fe1105e7efefc6.js",revision:"94fe1105e7efefc6"},{url:"/_next/static/chunks/pages/index-a4142d22db28c341.js",revision:"a4142d22db28c341"},{url:"/_next/static/chunks/pages/log-in-9bf4d45c00f72670.js",revision:"9bf4d45c00f72670"},{url:"/_next/static/chunks/pages/sign-up-937938d14ab79bcc.js",revision:"937938d14ab79bcc"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-0c73a0da924b8d2c.js",revision:"0c73a0da924b8d2c"},{url:"/_next/static/css/4df78f2cd73d6b26.css",revision:"4df78f2cd73d6b26"},{url:"/_next/static/css/7e9f974fdc5226a0.css",revision:"7e9f974fdc5226a0"},{url:"/_next/static/eusnqNF4l7pUFnViCUB5p/_buildManifest.js",revision:"ed3bdae99ced11cac1efc8a1c958e8ca"},{url:"/_next/static/eusnqNF4l7pUFnViCUB5p/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/ajax-loader.0b80f665.gif",revision:"0b80f665"},{url:"/_next/static/media/slick.25572f22.eot",revision:"25572f22"},{url:"/_next/static/media/slick.653a4cbb.woff",revision:"653a4cbb"},{url:"/_next/static/media/slick.6aa1ee46.ttf",revision:"6aa1ee46"},{url:"/_next/static/media/slick.f895cfdf.svg",revision:"f895cfdf"},{url:"/favicon.ico",revision:"63c033a654e77ecf35d5060be9410f1b"},{url:"/image/Angin.jpg",revision:"fde79517aa217614c0cf8c938d622062"},{url:"/image/Longsor.jpg",revision:"a7f31e35e0b382ee495f7cb11857fd59"},{url:"/image/Screenshot_1.png",revision:"fc422f11d1008318c1ee6c6335cbccad"},{url:"/image/Screenshot_2.png",revision:"bedbd61079041f2ec270d9a1fae50cf1"},{url:"/image/Screenshot_3.png",revision:"f5d1b2bbc24bb78702858ffa2b018516"},{url:"/image/background.jpg",revision:"dc118d9257f01fb3f80efce212e452d8"},{url:"/image/banjir.jpeg",revision:"e6f6566961b290bb52cd8458c09f48ca"},{url:"/image/hero.png",revision:"9664d5413b1646c3bcd8b72f41d4b075"},{url:"/image/ilustration.png",revision:"b5aaa5cdeb572f749512e3a683d0dc49"},{url:"/image/komunitas.png",revision:"a7807eca1fa6d6e00aae14ba77099645"},{url:"/image/logo.png",revision:"01d3d0ba0586528ad31cefb46a29faeb"},{url:"/logo-192.png",revision:"fb82c2c5a9cbbc57f786532b19e177e6"},{url:"/logo-256.png",revision:"dac8abfd53306c0b83000c3470a34d7d"},{url:"/logo-384.png",revision:"6793355d616edd8fd8c17fd7e76629d7"},{url:"/logo-512.png",revision:"6b21a34285a95d988dbcc1af5b420a64"},{url:"/manifest.json",revision:"b48b7de496b39d3d3968fc4f57a2c833"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
