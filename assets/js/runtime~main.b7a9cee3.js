!function(){"use strict";var e,t,n,c,r,f={},a={};function d(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={id:e,loaded:!1,exports:{}};return f[e].call(n.exports,n,n.exports,d),n.loaded=!0,n.exports}d.m=f,d.c=a,e=[],d.O=function(t,n,c,r){if(!n){var f=1/0;for(u=0;u<e.length;u++){n=e[u][0],c=e[u][1],r=e[u][2];for(var a=!0,o=0;o<n.length;o++)(!1&r||f>=r)&&Object.keys(d.O).every((function(e){return d.O[e](n[o])}))?n.splice(o--,1):(a=!1,r<f&&(f=r));if(a){e.splice(u--,1);var b=c();void 0!==b&&(t=b)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,c,r]},d.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},d.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var r=Object.create(null);d.r(r);var f={};t=t||[null,n({}),n([]),n(n)];for(var a=2&c&&e;"object"==typeof a&&!~t.indexOf(a);a=n(a))Object.getOwnPropertyNames(a).forEach((function(t){f[t]=function(){return e[t]}}));return f.default=function(){return e},d.d(r,f),r},d.d=function(e,t){for(var n in t)d.o(t,n)&&!d.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},d.f={},d.e=function(e){return Promise.all(Object.keys(d.f).reduce((function(t,n){return d.f[n](e,t),t}),[]))},d.u=function(e){return"assets/js/"+({53:"935f2afb",221:"1118254d",1e3:"634778bd",1042:"374dd15c",1079:"62ba1bd5",1164:"77f43622",1432:"03a023ba",1450:"195a4dcf",1637:"05cdc805",1719:"99549367",1933:"16cbaa12",2140:"66e25cb1",2479:"d79abb65",3084:"7c1ad0b2",3085:"1f391b9e",3237:"1df93b7f",3608:"9e4087bc",3714:"a431b7f5",4113:"663594ab",4160:"6510662c",4830:"b67c444c",5163:"e038f7eb",5226:"cd83b0e8",5590:"244a52c9",5596:"54745b18",5653:"6b59046d",5915:"8db66fe1",6077:"69d873b7",6078:"0890e415",6117:"f1ec0b36",6414:"b750ca8e",6482:"31817efb",6576:"05259bfe",6967:"8721f1f3",7e3:"e1706efe",7235:"52d9029a",7258:"c0bf22de",7414:"393be207",7597:"5e8c322a",7753:"55b1949e",7918:"17896441",8035:"d51098a2",8395:"6cb40a9c",8647:"f02cd462",8890:"94497cf3",8993:"cd69fbfe",9011:"6957a724",9514:"1be78505",9524:"bebd6fa2",9707:"6de27822",9797:"7d4685ea",9891:"f9933da6"}[e]||e)+"."+{53:"29c6d87b",221:"3b803a83",831:"d113c30c",1e3:"c5b9ea9b",1042:"4e1ef688",1079:"4f54b507",1164:"6be2c51f",1287:"516c4115",1432:"7f57d6ae",1450:"928af37d",1637:"0fe44077",1719:"765b7c1d",1933:"85365fe8",2140:"c382e0a2",2479:"fca6fadc",3084:"2b03893f",3085:"7fd6fd1d",3237:"5eba47b9",3608:"c37ec6e3",3714:"65955027",3829:"1b727270",4113:"f3ab4b48",4160:"ec3db03c",4608:"955def62",4830:"693bd0ac",5163:"c0da01c1",5226:"c34c0366",5256:"fa5bc819",5590:"83938a6b",5596:"e0e50114",5653:"4dc68efc",5915:"7192ca34",6077:"eceae61c",6078:"65bb189c",6117:"40764027",6414:"83ca788c",6482:"b3797bf0",6576:"3b4ea935",6667:"8611dc6a",6945:"7e7c6451",6967:"5cbed2d8",7e3:"3fa40ada",7235:"395697a9",7258:"21354d57",7414:"c145cc29",7597:"be7f562f",7753:"d12a680e",7918:"7ae08616",8035:"10f9f0d1",8395:"2d161c7d",8647:"dd64fef9",8890:"42cd15bb",8993:"7d9b1f23",9011:"0656bb7e",9514:"6d141b41",9524:"eeedc90a",9707:"0c784ace",9797:"c0270de4",9891:"e7352c83"}[e]+".js"},d.miniCssF=function(e){return"assets/css/styles.90da3867.css"},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c={},r="docs:",d.l=function(e,t,n,f){if(c[e])c[e].push(t);else{var a,o;if(void 0!==n)for(var b=document.getElementsByTagName("script"),u=0;u<b.length;u++){var i=b[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==r+n){a=i;break}}a||(o=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,d.nc&&a.setAttribute("nonce",d.nc),a.setAttribute("data-webpack",r+n),a.src=e),c[e]=[t];var s=function(t,n){a.onerror=a.onload=null,clearTimeout(l);var r=c[e];if(delete c[e],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(n)})),t)return t(n)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),o&&document.head.appendChild(a)}},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/admin-extension-sdk/",d.gca=function(e){return e={17896441:"7918",99549367:"1719","935f2afb":"53","1118254d":"221","634778bd":"1000","374dd15c":"1042","62ba1bd5":"1079","77f43622":"1164","03a023ba":"1432","195a4dcf":"1450","05cdc805":"1637","16cbaa12":"1933","66e25cb1":"2140",d79abb65:"2479","7c1ad0b2":"3084","1f391b9e":"3085","1df93b7f":"3237","9e4087bc":"3608",a431b7f5:"3714","663594ab":"4113","6510662c":"4160",b67c444c:"4830",e038f7eb:"5163",cd83b0e8:"5226","244a52c9":"5590","54745b18":"5596","6b59046d":"5653","8db66fe1":"5915","69d873b7":"6077","0890e415":"6078",f1ec0b36:"6117",b750ca8e:"6414","31817efb":"6482","05259bfe":"6576","8721f1f3":"6967",e1706efe:"7000","52d9029a":"7235",c0bf22de:"7258","393be207":"7414","5e8c322a":"7597","55b1949e":"7753",d51098a2:"8035","6cb40a9c":"8395",f02cd462:"8647","94497cf3":"8890",cd69fbfe:"8993","6957a724":"9011","1be78505":"9514",bebd6fa2:"9524","6de27822":"9707","7d4685ea":"9797",f9933da6:"9891"}[e]||e,d.p+d.u(e)},function(){var e={1303:0,532:0};d.f.j=function(t,n){var c=d.o(e,t)?e[t]:void 0;if(0!==c)if(c)n.push(c[2]);else if(/^(1303|532)$/.test(t))e[t]=0;else{var r=new Promise((function(n,r){c=e[t]=[n,r]}));n.push(c[2]=r);var f=d.p+d.u(t),a=new Error;d.l(f,(function(n){if(d.o(e,t)&&(0!==(c=e[t])&&(e[t]=void 0),c)){var r=n&&("load"===n.type?"missing":n.type),f=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+r+": "+f+")",a.name="ChunkLoadError",a.type=r,a.request=f,c[1](a)}}),"chunk-"+t,t)}},d.O.j=function(t){return 0===e[t]};var t=function(t,n){var c,r,f=n[0],a=n[1],o=n[2],b=0;if(f.some((function(t){return 0!==e[t]}))){for(c in a)d.o(a,c)&&(d.m[c]=a[c]);if(o)var u=o(d)}for(t&&t(n);b<f.length;b++)r=f[b],d.o(e,r)&&e[r]&&e[r][0](),e[f[b]]=0;return d.O(u)},n=self.webpackChunkdocs=self.webpackChunkdocs||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();