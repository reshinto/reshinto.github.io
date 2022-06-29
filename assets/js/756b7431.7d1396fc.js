"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[3590],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),h=a,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},366:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={},l="Threads",o={unversionedId:"basics/threads",id:"basics/threads",title:"Threads",description:"Synchronous",source:"@site/docs/basics/threads.md",sourceDirName:"basics",slug:"/basics/threads",permalink:"/docs/basics/threads",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/basics/threads.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Memory Leaks",permalink:"/docs/basics/memoryLeaks"},next:{title:"Django database setting",permalink:"/docs/database/SQL/djangoDatabaseSettings"}},s={},u=[{value:"Synchronous",id:"synchronous",level:2},{value:"Single Threaded",id:"single-threaded",level:3},{value:"Multi-Threaded",id:"multi-threaded",level:3},{value:"Asynchronous",id:"asynchronous",level:2},{value:"Single Threaded",id:"single-threaded-1",level:3},{value:"Multi-Threaded",id:"multi-threaded-1",level:3},{value:"Concurrency",id:"concurrency",level:2},{value:"Parallelism",id:"parallelism",level:2}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"threads"},"Threads"),(0,a.kt)("h2",{id:"synchronous"},"Synchronous"),(0,a.kt)("h3",{id:"single-threaded"},"Single Threaded"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"each task gets executed 1 after another"),(0,a.kt)("li",{parentName:"ul"},"each task waits for its previous task to be completed before getting executed")),(0,a.kt)("h3",{id:"multi-threaded"},"Multi-Threaded"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"tasks get executed in different threads",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"but waits for other executing tasks on other threads to be completed before getting executed")))),(0,a.kt)("h2",{id:"asynchronous"},"Asynchronous"),(0,a.kt)("h3",{id:"single-threaded-1"},"Single Threaded"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"tasks start executing without waiting for a different task to finish"),(0,a.kt)("li",{parentName:"ul"},"at a given time, a single task gets executed")),(0,a.kt)("h3",{id:"multi-threaded-1"},"Multi-Threaded"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"tasks get executed in different threads without waiting for any tasks and independently finish off their executions")),(0,a.kt)("h2",{id:"concurrency"},"Concurrency"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"execution of tasks in a single core environment"),(0,a.kt)("li",{parentName:"ul"},"tasks are context switched betwen one another")),(0,a.kt)("h2",{id:"parallelism"},"Parallelism"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2 tasks are being performed simultaneously over the same time period")))}d.isMDXComponent=!0}}]);