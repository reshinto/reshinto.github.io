"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[478],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=i,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},94353:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={},o="Service Worker",l={unversionedId:"Technologies/frontend/progressiveWebApp/serviceWorker/readme",id:"Technologies/frontend/progressiveWebApp/serviceWorker/readme",title:"Service Worker",description:"Definition",source:"@site/docs/Technologies/frontend/progressiveWebApp/serviceWorker/readme.md",sourceDirName:"Technologies/frontend/progressiveWebApp/serviceWorker",slug:"/Technologies/frontend/progressiveWebApp/serviceWorker/",permalink:"/docs/Technologies/frontend/progressiveWebApp/serviceWorker/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/Technologies/frontend/progressiveWebApp/serviceWorker/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Send a one time request from a content script or popup script to the background page",permalink:"/docs/Technologies/frontend/chromeExtension/"},next:{title:"React js",permalink:"/docs/Technologies/frontend/react/"}},s={},c=[{value:"Definition",id:"definition",level:2},{value:"Normal request / response",id:"normal-request--response",level:3},{value:"With Service Worker",id:"with-service-worker",level:3},{value:"Use Cases",id:"use-cases",level:2},{value:"Service Worker Lifecycle &amp; Events",id:"service-worker-lifecycle--events",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"service-worker"},"Service Worker"),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A JS script that gets registered with the browser"),(0,i.kt)("li",{parentName:"ul"},"stays registered with the browser even when offline"),(0,i.kt)("li",{parentName:"ul"},"data can still be used despite internet being disconnected"),(0,i.kt)("li",{parentName:"ul"},"can load content even with no connection"),(0,i.kt)("li",{parentName:"ul"},"they cannot directly access the DOM",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"instead, it communicate with the pages it controls",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"by responding to messages sent by the post message interface"),(0,i.kt)("li",{parentName:"ul"},"these pages can manipulate the DOM if needed"))))),(0,i.kt)("li",{parentName:"ul"},"it is a programmable network proxy",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"allows you to control how network requests from your page are handled"))),(0,i.kt)("li",{parentName:"ul"},"it gets terminated when not being used",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"and gets restarted when they are needed again"))),(0,i.kt)("li",{parentName:"ul"},"makes use of ES6 promises"),(0,i.kt)("li",{parentName:"ul"},"requires HTTPS unless on localhost")),(0,i.kt)("h3",{id:"normal-request--response"},"Normal request / response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"web browser > remote server")),(0,i.kt)("li",{parentName:"ul"},"browser fetches data, remote server returns data")),(0,i.kt)("h3",{id:"with-service-worker"},"With Service Worker"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"web browser > service worker > remote server")),(0,i.kt)("li",{parentName:"ul"},"service worker acts as a middleman and can intercept request",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"it will then decide what should happend after intercepting the request",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"such as decide whether to show the remote version or offline version")))))),(0,i.kt)("h2",{id:"use-cases"},"Use Cases"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"most commonly used for offline browsing & caching assets & API calls"),(0,i.kt)("li",{parentName:"ul"},"push notifications (Push & Notification API) are also a big part of service workers",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"these are notifcations that will pop up on your desktop or mobile device",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"good for marketing and advertising"))))),(0,i.kt)("li",{parentName:"ul"},"background data sync / preload",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"isn't yet fully supported for all browsers"),(0,i.kt)("li",{parentName:"ul"},"a new API that lets you defer actions until the user has a stable connection",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g.: a user likes a post on a social network,",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"in this case, a request needs to be sent to a server, which isn't possible due to the unstable connection"),(0,i.kt)("li",{parentName:"ul"},"by using this browser sync API, it allows such action to be deferred or put on hold in the cache until connectivity is restored",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"then the post will get liked"))))))))),(0,i.kt)("li",{parentName:"ul"},"used in Progressive Web Apps")),(0,i.kt)("h3",{id:"service-worker-lifecycle--events"},"Service Worker Lifecycle & Events"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Register -> Install -> Activate"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"1st step is to register the worker"),(0,i.kt)("li",{parentName:"ul"},"2nd install it by triggering the install event"),(0,i.kt)("li",{parentName:"ul"},"3rd activate it by triggering the activate event"),(0,i.kt)("li",{parentName:"ul"},"then it can receive message events and functional events",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g.: fetch (events), push (notifications), sync (background sync API)")))))))}u.isMDXComponent=!0}}]);