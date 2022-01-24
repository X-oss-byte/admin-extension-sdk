"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5226],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},A=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),A=p(n),m=a,s=A["".concat(u,".").concat(m)]||A[m]||d[m]||i;return n?r.createElement(s,o(o({ref:t},c),{},{components:n})):r.createElement(s,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=A;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}A.displayName="MDXCreateElement"},786:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return A}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},u="Component Section",p={unversionedId:"guide/api-reference/ui/component-section",id:"guide/api-reference/ui/component-section",isDocsHomePage:!1,title:"Component Section",description:"Add",source:"@site/docs/guide/2_api-reference/ui/component-section.md",sourceDirName:"guide/2_api-reference/ui",slug:"/guide/api-reference/ui/component-section",permalink:"/admin-extension-sdk/docs/guide/api-reference/ui/component-section",tags:[],version:"current",frontMatter:{},sidebar:"Guide",previous:{title:"Action button",permalink:"/admin-extension-sdk/docs/guide/api-reference/ui/actionButton"},next:{title:"Main module",permalink:"/admin-extension-sdk/docs/guide/api-reference/ui/mainModule"}},c=[{value:"Add",id:"add",children:[{value:"General usage",id:"general-usage",children:[{value:"Usage:",id:"usage",children:[],level:4},{value:"Parameters",id:"parameters",children:[],level:4},{value:"Return value:",id:"return-value",children:[],level:4}],level:3}],level:2},{value:"Available components",id:"available-components",children:[{value:"Card",id:"card",children:[{value:"Properties:",id:"properties",children:[],level:4},{value:"Usage:",id:"usage-1",children:[],level:4},{value:"Example",id:"example",children:[],level:4}],level:3}],level:2}],d={toc:c};function A(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"component-section"},"Component Section"),(0,i.kt)("h2",{id:"add"},"Add"),(0,i.kt)("p",null,"Add a new component to a component section."),(0,i.kt)("h3",{id:"general-usage"},"General usage"),(0,i.kt)("h4",{id:"usage"},"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"sw.ui.componentSection.add({\n    component: 'the-component', // Choose the component which you want to render at the componet section\n    positionId: 'the-position-id-of-the-component-section', // Select the positionId where you want to render the component\n    props: {\n        ... // The properties are depending on the component\n    }\n})\n")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"component")),(0,i.kt)("td",{parentName:"tr",align:"left"},"true"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Choose the component which you want to render.")))),(0,i.kt)("h4",{id:"return-value"},"Return value:"),(0,i.kt)("p",null,"This method does not have a return value."),(0,i.kt)("h2",{id:"available-components"},"Available components"),(0,i.kt)("h3",{id:"card"},"Card"),(0,i.kt)("h4",{id:"properties"},"Properties:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"title")),(0,i.kt)("td",{parentName:"tr",align:"left"},"false"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"The main title of the card")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"subtitle")),(0,i.kt)("td",{parentName:"tr",align:"left"},"false"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"The subtitle of the card")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"locationId")),(0,i.kt)("td",{parentName:"tr",align:"left"},"true"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"The locationId for the custom view")))),(0,i.kt)("h4",{id:"usage-1"},"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"ui.componentSection.add({\n    component: 'card',\n    positionId: 'sw-product-properties__before',\n    props: {\n        title: 'Hello from plugin',\n        subtitle: 'I am before the properties card',\n        locationId: 'my-awesome-app-card-before'\n    }\n})\n")),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Card component example",src:n(5121).Z})))}A.isMDXComponent=!0},5121:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABK4AAAEZCAMAAACJs50nAAAB4FBMVEX5+vvy9Pbf4+jS2uDQ2eDr7vH9/f7////m6ezx8vR7ipmIlaLN1NpVaX3X3eHS2N53hpZRZnpre43j5+qgqrW5wsm2v8d3h5iFk6DL0deJl6Nzg5Pn6u3q7e+xu8T3+fpbboGjrrnd4eb29/iut8DIztVygpPDytLK0Nd5iJhuf5Dg5OhneIrR1tz2+Pna3+NoeYuOm6evuMHW2+CcprJjdYdwgZG8xMxdcIOToKz09fe/x8/U2d7Fy9Pu8PODkZ9XbH9ld4mAkJ3V2t++xc2osrzP1duVoa2ps71Yan6wucKGlKH09viLmaVtfo/o6+5idIaap7KrtL9gc4V9jZzy8/VfcYR8jJumsLvk6OtSZ3t1hZWjrLhmdoi7wsqQnqmQnqvi5enr7vChrLfv8fTY3uTs7/La4OadqLSZpLDByNCzvMURgf+Yoq4Le/EKYsEJUJ0LXLYNcuAGOnEAAAAHPXgEGC0JU6QEMWIEJUoKWrEEIkMIV6wCGzICChcKRIkMeO0NdOMJUqECGzUEK1UDHjoGa9ECEycELlwKS5UCBg0CDyEGVqgMduYCDh0LbNUGRIQNfvoKaM0KcNsNgP0KZccGTpkGQoEJbtgGNWkJX7sEJ04HSI4LfPUGN20GQH0oXW1bAAAP4klEQVR4AezBMQICIQwAsEKB6v8/7O7hbIck0QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIyZC3jIOYJWRu5TD8DZOaIT5q4rYM/ohDx1BZyMb7ze8TerfgDWh1076kljW6A4vtrExCIgewRQBWYKojDAVLUogAKKClRAFUAQPZ6q1bbn3u//ehkQnFDM1ZLmNHX9nszadGc//ROseLVMU4DZYsWQaZuQXnzPCDP2SeaKiLl6KYfopsMpjAVxzQJzwooh8wtuD15Av2cUr3D8wlwRMVfMlay8h27sXMk+mbn6hYi5Yq78YnH8XPUxV0TjYK4CNmVpGcZcBUOKuihDFzaJiC2q2T54V1Yhr6mKKwBgPfTmY2xjE46FeCKJroQj5VJCWw/3bNvSADJrAKZD2R2bzYR121v9U9O7ykbuJ3JFRMzVnmX/IG8JGnK1KRKBQjEBneeTOPTOlES54o0iUSwEEmJT/9hGwrFQTLgcq+ITulyK6kwtFGd69zjFEYDjEyCcLVu9lnyqd7WrIi2eViWZuXouIuYqttMRF5N4U90HcFh7zFW9Wu6mLPf4ZbAk4kdATjgBrDbqmNMjtS52S0BjFl2uhSQwUTwZztW+JQ0cnuEhV5IHaIoWc/VcRMxVwduxKiaxJXIej6dw/JiraWEGULLsG3PVBFA4TwIwi2gvPSXLewCZtvE3VibTcK4uLgHYl/q50j8VEDnm6sWI+GXwL2HRKYNcdZYwOi6vjLlaBPB3DB2fhaOXHmT1XM0vGHM1VRnOVe58GdcRuzFXB2KLuXoxIuZqTkSH/mdwTuTQkb0ZztVFUQaQE8Gnc2Xb7edq8iFXmLeoSjnJXI2LiLnyWK6GcnVtuYH+0/JwrrZFEMCFxfNkrlqW972flkUAcGdPAGsj/WECYK6IxsVc4aLofHe7ZwVmQzKsIqgvjvRBJCQP50oO7ZjTjuINRuYqu+i2tuPp3j0z57tfAmr8BEgVg0cTGnNFND7mSitkhZCCgPPcDk06r0NrFsX5/ASGc4W7+XNRbGqjc+XKCCFZ0bsHF0JEDjInQFISQmRDAeaKiLkanxb2QHd0BMj3GgC/7x1Gqvv8GM11iOsWBvfg7jO6PoU8n8MHJknmX7UTMVe/B9csRpJOu9HK+pkrIubq987VYXX7+m4zvg/mioi5+j3YCxgpnT8+b5iWwVwRMVe/PxkAc0XEXP0xmCsi5oq5ImKuiLkiYq6IuSJirpgrIuaKmCsi5oq5IiLmirkiYq6IuSJirpgrImKumCsi5oqYKyLmirkiYq6IuSJiroi5ImKumCsi5oqYKyLmipgrIuaKuSJiroi5ImKuiLkiYq7SJeaKiLn6t9R9eFIqBCP5MPYVT1MD+Hme/B2eJ7TJXBG9zlxFG3jSXhtGWzENo/nsAKSfzVVqD2hl3Hie9l/MFdH/wVw5z/CEgGmcXH1t4gVszBXR687VXqhRvgcy5lrj28T88ddSd1y6ia04AO0isnMK805WDU+UG5ITuK6ZpQukpOO/6wCWI1l1H5IzU/1Wx2BFc60cX8oBmZzJhC8mpR193CbK1Uqwd3QRr6rBazXZ3wrHO4kkOny1+IZ58DL9EmtbmVJfd66ImCvvB+10FpDa9zlLe9pXjXZzlXW+CVp82M/Uw5Vg8jQ06T9L1O8vv8Nd3H1bj67MpMs3AOqntsk0pA3r20gAgxX5iDm5HytBkg7epRuO0rLSGmy1pmyOT/SODj9OJt2i/rD5FLc/gI6748Xk+tvBy/RPxteSB43XnSsi5gq4TikapADQ9gJThcGXwUwB1TDQPIGzBl/xHfDJBLe4B+adwMEGOpz9L4NXdsOatwOasgXJC/zjAjDV7G++mAycbXePUG4CnVw9bK3stgzdP20YX+YFnAv83RURczXnypyI225ydr1Awj7IVeLkVlRUtdLN1fYKgGBMrwuwFOnMLmOu8DVvWPU0YWW7e/AxAeCm3N+2i6qqSin9aJCr/hZcWukW6ePV8Mvsq68+V0TMlUfx4Wh0rs7WZGUOOmcNVkUDHO1erjI30A3l6nHV05QsWrsHi7sAruz9zZq9hc6Yq/4GRONRAIu14Zd9V39Jrv7zRyH603MVVupw/piryxbMxRkkakfw+PVc+SunuN1Y6+VqL3aP5B06vse0fq4Maz5TR7OidQ8+Z7fgU6z9zV+xJ+F+yNV/y91cPWytdaDyHUC4OIfbe+PLbi0BfIi/6lwRMVdYjalN5YdchVySsgfczls2JJ+eK/g2VuLftF6u0CxWIil0vJNi+X6uHte8S4qsfHlo0vJxpeF43HwLcTVU6h2tK5JTv7C3banqZaaEjlRDqjqNL0PhfKdWe6W5ImKu+u78GMXdm+tu9B29wYC/paFLayV/XPN2bRIDsr4aNs8d+pIzsnG7nnj8J0MvS3owjLmisTFXlLc/bxsfc0XEXI3lpvC8jbmi/7F3d0vJ62wYx0/4miJ4IVBKKSjlGwwUULR6qu/cvUONVHDjnVkz+OS3Q1bbp83O+k+CTv13+Vx5PldB7a7egPe3+Fz5XN2z1MQDSy1806boOIMLQp7cocmTLhBR9HBNTNHHSULVwMmAhSGuaDxSPAXw/hKfK5+rRjRioVNvIG2NWZjUE3yTdrQ65eCSZDqjmC+WaAxXFHG0BpKwR45quKY+J8lnnJjNHcX260gr1hReNpiTvcaTNNX7W3yu/GZwSREbiA1FL8O5nVaqHFy2pzhAvFC8onAkG7iu7+RKdd1cieZvuXoj2TcSzQDen+Jz5XOFmbO9MxRtVAy0UuXgsoDiDYWOjOcoLHjALxaVXD2d52r/W65mcl4mMTPw/hafK5+r2MlVRvH6/+QKE4rA9kesbXnW/0GuGnr+fRbf4SrP58rzuQopFuXYBijnGP9Brur2vDH4d3g+Vz5XWSOcRoMruUpq0/0ux3dmRpJPEG8UDzKMeLB3fYn6YSODWBYMkE7XZ7kyu2k9v5irJNpvDE6S47SVojDU89UJ5kuRAMEi0iNm3ZJHeD5Xt8/nat2j+Mgu5CqYsNA0+Oa13A0uqbbOXrAeU4w3X+fD3Vxu4+ZKhzz8nKvPLkVkm6Tz6CZAuipaOVuttucT/NBymmJ2SwChXnoHz+fq1vlcSTBa5pN8zX7MVTonu43GmBwN4KqVLelzSvFe7gWze5KLXA7vgaw2LnIyowicXB1kpIcruRJa0n5R1Zh8zetkLzjlipKrswkmz0Ul27TPkImkeZdswfO58m4pVw9HZXNlu9QDApKHn3KVz0mmQF1j58hiuxvM5rN8IuNRuRcc6hk8ktwBeGYh1iqVudrIoJ0Hh59zFa8RrOyZTG6VFHfsZs5msDJB4zyqXRxtAkeSR3g+V94N5cqluZLO3AOYk7OskisNzRzaM4ZwNSly1PiBOsXA7gWTGcmFvaRnbF24S8ZFG8tcdeyOLev9mKt32GsnwJ3E1m5B106uqhPUipopyXo+14MDzafnc+XdTq7ipipzlctgCmBEMq3mypRbyFh74dhQRJhwY794n9q9YJ8kN7BVCe3nA5Dsh/lXrl7k8+36TwbXFAYje+mnzrfMVXWCsX1mrZ/iaCeSs6ix53Pl3fB3V6kMnobD4UoyUM3Vuvx90gfNhmte/OOEvdNX3F27F5yc6hPK4GDr0oQqcxXq0au5yqmnZhKj4XDYkUc6uapOMJbPAIVp8fzhsLg8hedz5d1wriI6Pqu5ik4XYiSjNVwHij73AHYUI23CWMYNAEc6demf52qqn1dzpfM+LukYObmqTFD/AdQ9HUd4PlfeDefqTgaTrQqqudqXi5eujOpwvVAFcssVxRhidspVTQaPl3LVlM/367nSCh2LR622aunkqjpBN1eT4glbZeD5XHk3nKtQs2RVcxVeW12hR9F2lloHlKurwa+rq6b9/D1XjYTCQDm5Cn9fXT3D87ny/sp3V7PsYq5ern13hXeKnbPUSlH97ur5Uq7ufv/uyqbPYKZ3r+SqOkE3V1Oby9vn+Vz5XOUUdYjNsporU/7wblV97Z5eNc6+llpz4NtPBlt69wu5qmlMrubKUJ87KtOGQerkqjpBN1fHosYDiFqOW+b5XPkXyHRkFAcA6vyo5ErLMwYQlFlzdUm+OyuZTxQSeVgE3e49ZnYd9XyeqzyWmCT2Vz2ZnudqKg2VQagLOU3gdjW2udrjpwnGzjIwiMuafTLC7fB8rvzr+Wbu6/keMgANivlh3+E40PVODHwNzFhDcrT/27s0Q0uopVOcll02jWxiPnU1Zz1rLG2U7k3+RPGcubmylzTtc81DMf+P4YRM5bDGsTrBgGIAFVGMpv0HTnADPJ8rn6vt8JGFt0UDm+mYhUmUAENaqxesuxSHoBwA6zHZ3W7H5GiJc4lWSXU4h5VJTlrB1L7lJVxR3G2dlx/PWhlMRyNKtTrLFcNAujcq2rOZ0YqQR7HeIsX5BBsfFG+nrV+bVjeH53Pl3dqflhiz1AKQaskmCdCmqpcDALn9j0+DqjcecdLiJ0rHmGKcatTUCCKmCgDTlEE8vCdH7cPezVU7CDVQffPtjQyjNbDhSXY+wXtaNahQy/Zs4PlceTf/h7uyRrjYGFyW7/bD9OcLdoev48Fh+/2u0+MSv0mOrXWGzc7gm7WE0qSL6MV8u7YW/DbBCrOOom2G/7VT30YIAEEQwN5f/x2T43aIcFIR4t+7+la6Al2hK9AVugJd6Qp0ha5AV+gqQ1foCnSFrkBXugJdoSvQFboCXekKdIWuQFfoCnSlK9AVugJdoasMXaEr0BW6Al3pCnSFrkBX6Ap0pSvQFboCXaEr0JWuQFfoCnSFrgh0ha5AV+gKdKUr0BW6Al2hK9CVrkBX6Ap0ha5AV7oCXaEr0BW6ItAVugJdoSvQla5AV+gKdIWuQFe6Al2hK9AVugJd6Qp0ha5AV+iKQFfoCnSFrkBXugJdoSvQFboCXekKdIWuQFfoCnSlK9AVugJdoSsCXaEr0BW6Al3pCnSFrkBX6Ap0pSvQFboCXaEr0JWuQFfoCnSFroh0ha5AV+gKdKUr0BW6Al2hK9CVrkBX6Ap0ha5AV7oCXaEr0JWuAF3pCnSFrkBXia5AV+gKdIWuQFe6Al2hK9AVugJd6Qp0ha5AV7oCdKUr0BW6Al3pCtCVrkBX6Ap0pSvQFboCXaEr0JWuQFfoCnSFrkBXugJdoSvQFboCXekKdIWuQFe6AnSlK9AVugJd6QrQla5AV+gKdKUr0BW6Al2hq5eArnQFukJXoCtdAbrSFegKXYGudAW6QlegK3QFutIV6Apdga7QFehKV6ArdAW6QlegK12BrtAV6Ip56i7gzPZJGLvuAvZon4Q+96kbwNmzt49CH3PdAOb4h60AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuADhQ2Sqz6AbLAAAAABJRU5ErkJggg=="}}]);