if(!self.define){let e,i={};const c=(c,n)=>(c=new URL(c+".js",n).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,o)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let r={};const t=e=>c(e,s),u={module:{uri:s},exports:r,require:t};i[s]=Promise.all(n.map((e=>u[e]||t(e)))).then((e=>(o(...e),r)))}}define(["./workbox-a02082c8"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"c13a791deb8703d6a17a721c1e1c94cc"},{url:"css/index.css",revision:"9312cc30937e0c8ac2dda584cc536855"},{url:"/",revision:"index-20241112063704090"},{url:"music/",revision:"music-20241112063704090"},{url:"about/",revision:"about-20241112063704090"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
