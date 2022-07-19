"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[3235],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>p});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=i.createContext({}),m=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=m(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=m(r),p=a,h=d["".concat(l,".").concat(p)]||d[p]||u[p]||n;return r?i.createElement(h,s(s({ref:t},c),{},{components:r})):i.createElement(h,s({ref:t},c))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var m=2;m<n;m++)s[m]=r[m];return i.createElement.apply(null,s)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36085:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>m});var i=r(87462),a=(r(67294),r(3905));const n={},s="Rate Limiting",o={unversionedId:"interviewPrep/system_design/20RateLimiting/readme",id:"interviewPrep/system_design/20RateLimiting/readme",title:"Rate Limiting",description:"- the act of limiting the number of requests sent to or from a system",source:"@site/docs/interviewPrep/system_design/20RateLimiting/readme.md",sourceDirName:"interviewPrep/system_design/20RateLimiting",slug:"/interviewPrep/system_design/20RateLimiting/",permalink:"/docs/interviewPrep/system_design/20RateLimiting/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/system_design/20RateLimiting/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Static Configuration Example",permalink:"/docs/interviewPrep/system_design/19Configuration/staticExample/"},next:{title:"Rate Limiting Example",permalink:"/docs/interviewPrep/system_design/20RateLimiting/example/"}},l={},m=[{value:"Issues when storing accesses in memory at the server",id:"issues-when-storing-accesses-in-memory-at-the-server",level:2},{value:"Therefore for large scale distribute system, handle rate limiting in separated service or database",id:"therefore-for-large-scale-distribute-system-handle-rate-limiting-in-separated-service-or-database",level:3},{value:"Terms Used",id:"terms-used",level:2},{value:"DoS Attack (Denial-of-Service Attack)",id:"dos-attack-denial-of-service-attack",level:3},{value:"DDoS Attack (Distributed Denial-of-Service Attack)",id:"ddos-attack-distributed-denial-of-service-attack",level:3}],c={toc:m};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rate-limiting"},"Rate Limiting"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the act of limiting the number of requests sent to or from a system"),(0,a.kt)("li",{parentName:"ul"},"is most often used to limit the number of incoming requests in order to prevent DoS attacks and can be enforced at the IP=address level, at the user-account level, or at the region level",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"when a user sends over the limit, the server will just return errors"))),(0,a.kt)("li",{parentName:"ul"},"rate limiting can also be implemented in tiers but will make the rate limiting more complex",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"e.g.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"the 1st limit could be every request could only be made every 0.5 seconds"),(0,a.kt)("li",{parentName:"ul"},"then then 2nd limit could be only max 3 batch of 0.5 seconds requests could be made at every 10 seconds or per minute"))))),(0,a.kt)("li",{parentName:"ul"},"it is very important for system design as it has a lot of ramifications (security and performance)"),(0,a.kt)("li",{parentName:"ul"},"although rate limiting is very important and effective, it isn't the ultimate way to protect the system from attacks",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"rate limiting can protect against simple DoS attacks, but is unable to protect against DDoS attack",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"even to this day, companies like Wikipedia and Blizzard Entertainment still get their servers brought down by DDoS attacks")))))),(0,a.kt)("h2",{id:"issues-when-storing-accesses-in-memory-at-the-server"},"Issues when storing accesses in memory at the server"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"when we have a large scale distributed system with a lot of servers, storing accesses in memory at the server will fall apart",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"because unless we have very rigorous load balancing that specifically rerouting requests of a single user to the same server every time (to make sure that we had that user's access's in memory in the server that the user's requests were being routed to) this rate limiting would fall apart"))),(0,a.kt)("li",{parentName:"ul"},"if the client is rerouted to a different server that does not have the accesses stored, the server would not know to return an error to the client")),(0,a.kt)("h3",{id:"therefore-for-large-scale-distribute-system-handle-rate-limiting-in-separated-service-or-database"},"Therefore for large scale distribute system, handle rate limiting in separated service or database"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"can use Redis (an in-memory key value database) for this case"),(0,a.kt)("li",{parentName:"ul"},"when using this, server will first check the database regarding the rate limiting",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"if the database determines that user made requests over the limit, it will instruct the server to return an error")))),(0,a.kt)("h2",{id:"terms-used"},"Terms Used"),(0,a.kt)("h3",{id:"dos-attack-denial-of-service-attack"},"DoS Attack (Denial-of-Service Attack)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"is an attack in which a malicious user tries to bring down or damage a system in order to render it unavailable to users"),(0,a.kt)("li",{parentName:"ul"},"most of the time it consists of flooding the server with traffic, causing the server to not have enough throughput to handle the situation"),(0,a.kt)("li",{parentName:"ul"},"some DoS attacks are easily preventable with rate limiting",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"while others can be trickier to defend against")))),(0,a.kt)("h3",{id:"ddos-attack-distributed-denial-of-service-attack"},"DDoS Attack (Distributed Denial-of-Service Attack)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"is a DoS attack in which the traffic flooding the target system comes from many different sources (like thousands of machines), making it much harder to defend against")))}u.isMDXComponent=!0}}]);