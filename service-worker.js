if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const t=e=>n(e,c),u={module:{uri:c},exports:r,require:t};i[c]=Promise.all(o.map((e=>u[e]||t(e)))).then((e=>(s(...e),r)))}}define(["./workbox-a02082c8"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"1133bce678c810262ed02d65b0c8671c"},{url:"css/index.css",revision:"9312cc30937e0c8ac2dda584cc536855"},{url:"/",revision:"index-20241123072524392"},{url:"music/",revision:"music-20241123072524392"},{url:"about/",revision:"about-20241123072524392"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
