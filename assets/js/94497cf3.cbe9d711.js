"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8890],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),u=i,m=c["".concat(l,".").concat(u)]||c[u]||h[u]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const o={},r="How it works",s={unversionedId:"guide/internals/how-it-works",id:"guide/internals/how-it-works",title:"How it works",description:"The Admin Extension SDK provides wrapper methods for a better development experience. It abstracts and hides the more",source:"@site/docs/guide/5_internals/how-it-works.md",sourceDirName:"guide/5_internals",slug:"/guide/internals/how-it-works",permalink:"/admin-extension-sdk/docs/guide/internals/how-it-works",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"Guide",previous:{title:"Datahandling",permalink:"/admin-extension-sdk/docs/guide/internals/datahandling"},next:{title:"FAQ",permalink:"/admin-extension-sdk/docs/guide/faq/"}},l={},d=[{value:"Admin communication",id:"admin-communication",level:2},{value:"Example workflow",id:"example-workflow",level:3},{value:"Sending methods",id:"sending-methods",level:2}],p={toc:d};function h(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,"The Admin Extension SDK provides wrapper methods for a better development experience. It abstracts and hides the more\ncomplex logic behind a simple API. This makes it easier for app and plugin developers to create their solutions and focus\non their business instead of caring about the technical details."),(0,i.kt)("h2",{id:"admin-communication"},"Admin communication"),(0,i.kt)("p",null,"Technically speaking, apps and plugins are communicating with the Administration via the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage"},"postMessage API"),". It is a secure communication channel between different windows. In most cases it will be used to communicate\nfrom an iFrame to the main window or the other way around."),(0,i.kt)("p",null,"The Extension SDK works in the same way, but it uses a hybrid approach. Every method is callable within an iFrame and also\nfrom the same window. This allows apps (within iFrames) and plugins (in the same window) to use the same API."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"postMessage communication",src:n(5283).Z,width:"2082",height:"722"})),(0,i.kt)("p",null,"Normally the postMessage API is very limited and not easy to use. You merely can send string values from one window to\nanother. This isn't very handy during the development process. To provide a smoother experience, we wrote some helper methods that\nmake working with the postMessage API a breeze."),(0,i.kt)("p",null,"The helper methods can be found in the ",(0,i.kt)("inlineCode",{parentName:"p"},"channel")," file. It holds different methods for easier communication. The most important ones are ",(0,i.kt)("inlineCode",{parentName:"p"},"send")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"handle"),". They are responsible for sending and handling data."),(0,i.kt)("p",null,"Here is an example to give you a better understanding of how that works."),(0,i.kt)("h3",{id:"example-workflow"},"Example workflow"),(0,i.kt)("p",null,"Let's imagine that an app or plugin calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"context.getLanguage")," method from the Extension SDK:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// from app/plugin\nconst language = await sw.context.getLanguage();\n")),(0,i.kt)("p",null,"But what is happening in the background? The method is a wrapper for the ",(0,i.kt)("inlineCode",{parentName:"p"},"send")," method in the ",(0,i.kt)("inlineCode",{parentName:"p"},"channel"),". When you use it, it will call ",(0,i.kt)("inlineCode",{parentName:"p"},"send")," with a predefined type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// from app/plugin\nsend('contextLanguage', {});\n")),(0,i.kt)("p",null,"Each message has a unique type. The types are hidden from plugin and app developers and are only responsible for the underlying handling. Knowing the unique type we can tell what type of request there is in the Administration and what response it expects."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"send")," method is producing magic in the background now. It creates a data object with following properties:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  _type: 'contextLanguage',\n  _data: {},\n  _callbackId: 'aRand0mGeneratedUniqueId'\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"_type")," property is there to recognize the request type. The ",(0,i.kt)("inlineCode",{parentName:"p"},"_data")," property is custom data that will be added by the app or plugin. E.g. the title, message or any more information available for a notification. The ",(0,i.kt)("inlineCode",{parentName:"p"},"_callbackId")," is needed for the Administration to send back the data including an ID, so that the sender is able to recognize it and use the included data."),(0,i.kt)("p",null,"This object will be sent as a stringified JSON object to the Administration window via the postMessage API."),(0,i.kt)("p",null,"Now let's have a look at what needs to happen on the side of the Administration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// at Administration\nhandle('contextLanguage', () => {\n    return {\n        languageId: Shopware.Context.api.languageId,\n        systemLanguageId: Shopware.Context.api.systemLanguageId,\n    };\n});\n")),(0,i.kt)("p",null,"It uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"handle")," method, which is also a helper method of the ",(0,i.kt)("inlineCode",{parentName:"p"},"channel"),". You see now, that the type matches the sender type. And in the second argument it provides a method that returns the data."),(0,i.kt)("p",null,"This method reacts to every ",(0,i.kt)("inlineCode",{parentName:"p"},"contextLanguage")," request and sends the data values back to the source of the request. It also creates an object that includes meta information which in turn are needed for the original ",(0,i.kt)("inlineCode",{parentName:"p"},"send")," window:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  _type: 'contextLanguage',\n  _response: { languageId: '1a2b3c...', systemLanguageId: '9f8g7h...', },\n  _callbackId: 'aRand0mGeneratedUniqueId'\n}\n")),(0,i.kt)("p",null,"The source that will send the request is adding a new event listener before sending the message. This event listener listens to all incoming messages and if any of these messages matches the type and the callback ID of the message sent, it will handle the data."),(0,i.kt)("p",null,"In our case it will in return get a stringified object that includes the language information. These will be parsed and returned to the first method call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// from app/plugin\nconst language = await sw.context.getLanguage();\n\n// language = { languageId: '1a2b3c...', systemLanguageId: '9f8g7h...', }\n")),(0,i.kt)("p",null,"And this is basically it! The app or plugin has now got the data from the Administration. It all just looks like a simple call, but there is a lot going on in the background."),(0,i.kt)("h2",{id:"sending-methods"},"Sending methods"),(0,i.kt)("p",null,"In normal cases you can't add methods to JSON objects which will get stringified. But in our case we are convinced it would make the many developers' lives much easier if they can also use their own methods in the calls."),(0,i.kt)("p",null,"To handle these edge-cases we are converting the methods to information objects like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  __type__: '__function__',\n  id: 'theUniqueFunctionId' // will be generated uniquely\n}\n")),(0,i.kt)("p",null,"The method will be saved in a ",(0,i.kt)("inlineCode",{parentName:"p"},"methodRegistry")," where the unique ID can be used as an identifier."),(0,i.kt)("p",null,"The receiver of the object converts this object back to a method that triggers the original method. This can't be done directly, because we do not have direct access to the method. To solve this problem, we send a special postMessage call to the original source. This call contains all arguments of the method called and its unique ID:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"send('__function__', {\n  args: args,\n  id: id,\n})\n")),(0,i.kt)("p",null,"The sender gets the message back and executes the method with the matching ID and the given arguments. The return value will then be sent back to the converted method in the receiver."),(0,i.kt)("p",null,"This complex logic is also abstracted. To use it, just add methods to\nthe data. They will then be converted and handled automatically."))}h.isMDXComponent=!0},5283:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/post-message-communication-5f4077de47c2eab8350eb1a00f63ffd0.png"}}]);