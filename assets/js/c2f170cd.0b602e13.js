"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[3586],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return t?n.createElement(f,s(s({ref:r},l),{},{components:t})):n.createElement(f,s({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var p=2;p<a;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},42139:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=t(83117),o=(t(67294),t(3905));const a={},s="Send a one time request from a content script or popup script to the background page",c={unversionedId:"Technologies/frontend/chromeExtension/readme",id:"Technologies/frontend/chromeExtension/readme",title:"Send a one time request from a content script or popup script to the background page",description:"- can be responsed by callback or http request",source:"@site/docs/Technologies/frontend/chromeExtension/readme.md",sourceDirName:"Technologies/frontend/chromeExtension",slug:"/Technologies/frontend/chromeExtension/",permalink:"/docs/Technologies/frontend/chromeExtension/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/Technologies/frontend/chromeExtension/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flowchart Symbols",permalink:"/docs/Technologies/flowCharts/"},next:{title:"Service Worker",permalink:"/docs/Technologies/frontend/progressiveWebApp/serviceWorker/"}},i={},p=[],l={toc:p};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"send-a-one-time-request-from-a-content-script-or-popup-script-to-the-background-page"},"Send a one time request from a content script or popup script to the background page"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"can be responsed by callback or http request")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// Content Script or Popup\nchrome.runtime.sendMessage({greeting: "hello"}, (response) => {\n  console.log(response.farewell);\n});\n\n// Background Page\nchrome.runtime.onMessage.addListener((request, sender, sendResponse) => {\n  if (request.greeting === "hello") sendResponse({farewell: "goodbye"});\n});\n')),(0,o.kt)("h1",{id:"another-way-of-doing-is-similar-to-the-websocket-architectuure"},"Another way of doing is similar to the WebSocket architectuure"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Long-Lived Connection",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"does not allow you to get statues on how your messages went, but are very efficient"),(0,o.kt)("li",{parentName:"ul"},"thus can post messages back and forth between different components")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// Create a port\nconst port = chrome.runtime.connect({name: "knockknock"});\n\n// Post a message to port\nport.postMessage({joke: "Knock knock"});\n\n// Listen for messages\nport.onMessage.addListener((msg) => {\n  if (msg.question === "Who\'s there?") port.postMessage({answer: "Madame"});\n  else if (msg.question === "Madame who?")\n    port.postMessage({answer: "Madame... Bovary"});\n});\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use background page as your redux store")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import {wrapStore} from "react-chrome-redux";\n\n// the redux store\nimport store from "./store";\n\n// connect store with proxy stores in UI pages\nwrapStore(store, {\n  portName: "example-port",\n});\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"in Popup page, create a proxy store")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import {Store} from "react-chrome-redux";\nimport {Provider} from "react-redux";\n\n// create proxy store (same API as redux store)\nconst proxyStore = new Store({\n  portName: "example-port",\n});\n\n// use like normal redux store\nrender(<Provider store={proxyStore}></Provider>, appNode);\n')))}u.isMDXComponent=!0}}]);