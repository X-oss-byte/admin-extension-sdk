"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6117],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),k=i,c=m["".concat(d,".").concat(k)]||m[k]||u[k]||r;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={id:"location",title:"Module: location",sidebar_label:"location",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"api/modules/location",id:"api/modules/location",title:"Module: location",description:"Functions",source:"@site/docs/api/modules/location.md",sourceDirName:"api/modules",slug:"/api/modules/location",permalink:"/admin-extension-sdk/docs/api/modules/location",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"location",title:"Module: location",sidebar_label:"location",sidebar_position:0,custom_edit_url:null},sidebar:"API",previous:{title:"_internals/validator",permalink:"/admin-extension-sdk/docs/api/modules/internals_validator"},next:{title:"notification",permalink:"/admin-extension-sdk/docs/api/modules/notification"}},d={},p=[{value:"Functions",id:"functions",level:2},{value:"is",id:"is",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"get",id:"get",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"isIframe",id:"isiframe",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"updateHeight",id:"updateheight",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"startAutoResizer",id:"startautoresizer",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"stopAutoResizer",id:"stopautoresizer",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"Variables",id:"variables",level:2},{value:"MAIN_HIDDEN",id:"main_hidden",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"Type Aliases",id:"type-aliases",level:2},{value:"locationUpdateHeight",id:"locationupdateheight",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in-7",level:4}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"is"},"is"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"is"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"location"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"location")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shopware/admin-extension-sdk/blob/7a82810/src/location/index.ts#L5"},"src/location/index.ts:5")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"get"},"get"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"get"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shopware/admin-extension-sdk/blob/7a82810/src/location/index.ts#L9"},"src/location/index.ts:9")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isiframe"},"isIframe"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isIframe"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shopware/admin-extension-sdk/blob/7a82810/src/location/index.ts#L13"},"src/location/index.ts:13")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"updateheight"},"updateHeight"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"updateHeight"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"height?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"height?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shopware/admin-extension-sdk/blob/7a82810/src/location/index.ts#L17"},"src/location/index.ts:17")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"startautoresizer"},"startAutoResizer"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"startAutoResizer"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shopware/admin-extension-sdk/blob/7a82810/src/location/index.ts#L36"},"src/location/index.ts:36")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stopautoresizer"},"stopAutoResizer"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"stopAutoResizer"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shopware/admin-extension-sdk/blob/7a82810/src/location/index.ts#L46"},"src/location/index.ts:46")),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"main_hidden"},"MAIN","_","HIDDEN"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"MAIN","_","HIDDEN"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"sw-main-hidden"')),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shopware/admin-extension-sdk/blob/7a82810/src/location/index.ts#L53"},"src/location/index.ts:53")),(0,i.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,i.kt)("h3",{id:"locationupdateheight"},"locationUpdateHeight"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"locationUpdateHeight"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"responseType")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"void")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"height")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The height of the iFrame")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"locationId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The locationID of the current element")))),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shopware/admin-extension-sdk/blob/7a82810/src/location/index.ts#L55"},"src/location/index.ts:55")))}u.isMDXComponent=!0}}]);