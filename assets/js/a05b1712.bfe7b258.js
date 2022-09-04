"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[18796],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(y,i(i({ref:t},c),{},{components:r})):a.createElement(y,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70517:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(83117),n=(r(67294),r(3905));const o={},i="Redis Key-Value Store example",s={unversionedId:"interviewPrep/system_design/storage/databases/13Key-ValueStores/redisExample/readme",id:"interviewPrep/system_design/storage/databases/13Key-ValueStores/redisExample/readme",title:"Redis Key-Value Store example",description:"How to run",source:"@site/docs/interviewPrep/system_design/storage/databases/13Key-ValueStores/redisExample/readme.md",sourceDirName:"interviewPrep/system_design/storage/databases/13Key-ValueStores/redisExample",slug:"/interviewPrep/system_design/storage/databases/13Key-ValueStores/redisExample/",permalink:"/docs/interviewPrep/system_design/storage/databases/13Key-ValueStores/redisExample/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/system_design/storage/databases/13Key-ValueStores/redisExample/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Key-Value Stores",permalink:"/docs/interviewPrep/system_design/storage/databases/13Key-ValueStores/"},next:{title:"Replication and Sharding",permalink:"/docs/interviewPrep/system_design/storage/databases/15ReplicationAndSharding/"}},l={},p=[{value:"How to run",id:"how-to-run",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"redis-key-value-store-example"},"Redis Key-Value Store example"),(0,n.kt)("h2",{id:"how-to-run"},"How to run"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"install redis",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"brew install redis"))),(0,n.kt)("li",{parentName:"ul"},"run redis service",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"brew services start redis"))),(0,n.kt)("li",{parentName:"ul"},"install all dependencies",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"npm i"))),(0,n.kt)("li",{parentName:"ul"},"run server",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"node server.js"))),(0,n.kt)("li",{parentName:"ul"},"paste link to browser",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"http://localhost:3001/nocache/index.html"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"this will always take 3 seconds to load as there is no cache\nhttp://localhost:3001/withcache/index.html"),(0,n.kt)("li",{parentName:"ul"},"this will take 3 seconds to load initially"),(0,n.kt)("li",{parentName:"ul"},"subsequent refresh will load instantaneously"),(0,n.kt)("li",{parentName:"ul"},"however, this will expire in 10 seconds and will then take 3 seconds to load again"))))))}u.isMDXComponent=!0}}]);