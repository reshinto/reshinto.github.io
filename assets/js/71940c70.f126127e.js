"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[2768],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return t?r.createElement(g,a(a({ref:n},p),{},{components:t})):r.createElement(g,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},53689:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const s={},a="Multi-Threading",i={unversionedId:"languageSpecific/javascript/multithread/readme",id:"languageSpecific/javascript/multithread/readme",title:"Multi-Threading",description:"Single Threaded",source:"@site/docs/languageSpecific/javascript/multithread/readme.md",sourceDirName:"languageSpecific/javascript/multithread",slug:"/languageSpecific/javascript/multithread/",permalink:"/docs/languageSpecific/javascript/multithread/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/languageSpecific/javascript/multithread/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Run Java Apps In Docker",permalink:"/docs/languageSpecific/java/runJavaAppsInDocker/"},next:{title:"NodeJS",permalink:"/docs/languageSpecific/javascript/nodejs"}},c={},l=[{value:"Single Threaded",id:"single-threaded",level:2},{value:"Asynchronous blocking",id:"asynchronous-blocking",level:3},{value:"Asynchronous Non-blocking",id:"asynchronous-non-blocking",level:3}],p={toc:l};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"multi-threading"},"Multi-Threading"),(0,o.kt)("h2",{id:"single-threaded"},"Single Threaded"),(0,o.kt)("h3",{id:"asynchronous-blocking"},"Asynchronous blocking"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"can be slow and be fast, but will not be faster than non-blocking code")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const fetch = require("node-fetch");\n\nconst url = "https://jsonplaceholder.typicode.com/posts/";\nconst postIds = [\n  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,\n  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,\n  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,\n  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,\n  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,\n  99, 100,\n];\nconst results = [];\n\nasync function runTasks() {\n  for (const postId of postIds) {\n    console.log(`Working on post id ${postId}`);\n    const response = await fetch(`${url}${postId}`);\n    results.push(await response.json());\n  }\n}\n\nasync function main() {\n  console.log("Timer started...");\n  const startHrTime = process.hrtime();\n\n  await runTasks();\n\n  console.log(results);\n\n  const elapsedHrTime = process.hrtime(startHrTime);\n  const elapsedTimeInMs = elapsedHrTime[0] + "." + elapsedHrTime[1];\n  console.log(\n    `It took ${elapsedTimeInMs} ms to make ${postIds.length} API calls`\n  );\n}\n\nmain();\n')),(0,o.kt)("h3",{id:"asynchronous-non-blocking"},"Asynchronous Non-blocking"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"almost as fast as parallel programming in other languages")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const fetch = require("node-fetch");\n\nconst url = "https://jsonplaceholder.typicode.com/posts/";\nconst postIds = [\n  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,\n  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,\n  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,\n  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,\n  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,\n  99, 100,\n];\nconst results = [];\n\nasync function runTasks() {\n  for (const postId of postIds) {\n    console.log(`Working on post id ${postId}`);\n    results.push(fetch(`${url}${postId}`));\n  }\n}\n\nasync function main() {\n  console.log("Timer started...");\n  const startHrTime = process.hrtime();\n\n  await runTasks();\n\n  for (const result of results) {\n    const response = await result;\n    console.log(await response.json());\n  }\n\n  const elapsedHrTime = process.hrtime(startHrTime);\n  const elapsedTimeInMs = elapsedHrTime[0] + "." + elapsedHrTime[1];\n  console.log(\n    `It took ${elapsedTimeInMs} ms to make ${postIds.length} API calls`\n  );\n}\n\nmain();\n')))}u.isMDXComponent=!0}}]);