"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[9867],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var l=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,l,i=function(e,t){if(null==e)return{};var a,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=l.createContext({}),c=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=c(e.components);return l.createElement(o.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=i,d=p["".concat(o,".").concat(m)]||p[m]||h[m]||r;return a?l.createElement(d,n(n({ref:t},u),{},{components:a})):l.createElement(d,n({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,n=new Array(r);n[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,n[1]=s;for(var c=2;c<r;c++)n[c]=a[c];return l.createElement.apply(null,n)}return l.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3574:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var l=a(7462),i=(a(7294),a(3905));const r={},n="Caching",s={unversionedId:"interviewPrep/system_design/08Caching/readme",id:"interviewPrep/system_design/08Caching/readme",title:"Caching",description:"- improves speed and performance of application",source:"@site/docs/interviewPrep/system_design/08Caching/readme.md",sourceDirName:"interviewPrep/system_design/08Caching",slug:"/interviewPrep/system_design/08Caching/",permalink:"/docs/interviewPrep/system_design/08Caching/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/system_design/08Caching/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Availability",permalink:"/docs/interviewPrep/system_design/07Availability/"},next:{title:"Simple cache example with mock database",permalink:"/docs/interviewPrep/system_design/08Caching/example/"}},o={},c=[{value:"Definition",id:"definition",level:2},{value:"use cases",id:"use-cases",level:2},{value:"Times when caching will be helpful",id:"times-when-caching-will-be-helpful",level:2},{value:"Cache Invalidation",id:"cache-invalidation",level:2},{value:"Understanding the problem",id:"understanding-the-problem",level:3},{value:"First popular type: Write through cache",id:"first-popular-type-write-through-cache",level:3},{value:"Second popular type: Write back cache",id:"second-popular-type-write-back-cache",level:3},{value:"Write around cache",id:"write-around-cache",level:3},{value:"Eviction policies for stale cache data",id:"eviction-policies-for-stale-cache-data",level:2},{value:"TTL (Time to Live)",id:"ttl-time-to-live",level:3},{value:"FIFO (First In First Out) policy (most common)",id:"fifo-first-in-first-out-policy-most-common",level:3},{value:"LIFO (Last In First Out) policy",id:"lifo-last-in-first-out-policy",level:3},{value:"LRU (Least Recently Used) policy",id:"lru-least-recently-used-policy",level:3},{value:"MRU (Most Recently Used) Policy",id:"mru-most-recently-used-policy",level:3},{value:"LFU (Least Frequently Used) policy",id:"lfu-least-frequently-used-policy",level:3},{value:"RR (Random Replacement) Policy (least common)",id:"rr-random-replacement-policy-least-common",level:3},{value:"Caching layers",id:"caching-layers",level:2},{value:"DNS (Domain Name System) cache",id:"dns-domain-name-system-cache",level:3},{value:"CDN (Content Delivery Network)",id:"cdn-content-delivery-network",level:3},{value:"Application Server Cache",id:"application-server-cache",level:3},{value:"Database",id:"database",level:3},{value:"Terms used",id:"terms-used",level:2},{value:"Cache",id:"cache",level:3},{value:"Cache Hit",id:"cache-hit",level:3},{value:"Cache Miss",id:"cache-miss",level:3},{value:"Distributed Cache",id:"distributed-cache",level:2},{value:"Code example",id:"code-example",level:2},{value:"Caching retrieval",id:"caching-retrieval",level:3},{value:"Caching writing",id:"caching-writing",level:3}],u={toc:c};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"caching"},"Caching"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"improves speed and performance of application",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"reading from memory is faster than disk, 50 - 200 times faster"),(0,i.kt)("li",{parentName:"ul"},"can serve the same amount of traffic with fewer resources"),(0,i.kt)("li",{parentName:"ul"},"pre-calculate and cache data in advance"),(0,i.kt)("li",{parentName:"ul"},"most apps have far more reads than writes, perfect for caching"))),(0,i.kt)("li",{parentName:"ul"},"saves money long term")),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It is like short-term memory",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"has a limited amount of space"),(0,i.kt)("li",{parentName:"ul"},"but is typically faster than the original data source"),(0,i.kt)("li",{parentName:"ul"},"contains the most recently accessed items"))),(0,i.kt)("li",{parentName:"ul"},"caching enables",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"better use of already available resources"),(0,i.kt)("li",{parentName:"ul"},"unattainable product requirements feasible"))),(0,i.kt)("li",{parentName:"ul"},'take advantage of the locality of reference principle "recently requested data is likely to be requested again"'),(0,i.kt)("li",{parentName:"ul"},"used in almost every layer of computing",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g.: hardware, operating systems, web browsers, web applications, etc"))),(0,i.kt)("li",{parentName:"ul"},"can exist at all levels in architecture",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"but are often found at the level nearest to the front end",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"where they are implemented to return data quickly without taxing downstream levels")))))),(0,i.kt)("h2",{id:"use-cases"},"use cases"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"most likely will use caching in all, or almost all of the Systems Design interviews"),(0,i.kt)("li",{parentName:"ul"},"the reason for using caching is to avoid redoing the same operations, especially computationally complex operations that might take a lot of time for multiple times"),(0,i.kt)("li",{parentName:"ul"},"therefore, caching is used to speed up a system, to reduce or improve the latency of a system",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"caching is storing data in a location that's different from the 1 where the data originally is, such that it's faster to access this data from this new location"))),(0,i.kt)("li",{parentName:"ul"},"it can also be used in a bunch of places in a system",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"can cache at the client level so that it no longer requires to request data from the server"),(0,i.kt)("li",{parentName:"ul"},"can also cache at the server level",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"if a client always need to interact with the server"),(0,i.kt)("li",{parentName:"ul"},"but the server doesn't always need to go to the database to retrieve the data"),(0,i.kt)("li",{parentName:"ul"},"so the server will go to the database once and caches it at the server level"))),(0,i.kt)("li",{parentName:"ul"},"can also cache in between 2 components in a system",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g.: cache in between a server and a database"))),(0,i.kt)("li",{parentName:"ul"},"can also cache at the hardware level",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"there is a lot of caching going on at the hardware level in modern day computers",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g.: CPU caches: are caches that live at the CPU level",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"this makes it faster to retieve data from memory"))))))))),(0,i.kt)("li",{parentName:"ul"},"in summary: caching while it is great, has a lot of pitfalls, and we have to watch out for those pitfalls",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"in general, if the data that we are dealing with is static or immutable data then caching is good"),(0,i.kt)("li",{parentName:"ul"},"however, if data is mutable, then things will be trickier",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"because there will be 2 different locations where the data exists"),(0,i.kt)("li",{parentName:"ul"},"have to make sure these locations are in sync",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"else the data might become stale, depending on the use case this might not be good"))))),(0,i.kt)("li",{parentName:"ul"},"a rule of thumb: consider caching if only storing static or immutable data",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"consider caching if only have a single thing reading or writing that data"),(0,i.kt)("li",{parentName:"ul"},"consider caching is data consitency or staleness is not important")))))),(0,i.kt)("h2",{id:"times-when-caching-will-be-helpful"},"Times when caching will be helpful"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"when doing a lot of network requests and you want to avoid doing all of the network requests",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"taking the client -> server -> database model",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"requests from client to server, then to database"),(0,i.kt)("li",{parentName:"ul"},"response from the database to server, then to client"))),(0,i.kt)("li",{parentName:"ul"},"caching at the client level or server level will avoid unneccessary network requests"))),(0,i.kt)("li",{parentName:"ol"},"when doing very computationally long operation",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"caching at the logic location where it takes time to compute would help save time"))),(0,i.kt)("li",{parentName:"ol"},"when reading from the database multiple times is not desired",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"can either have a single cache at some detached componentwhere all servers to refer to",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"such as a ",(0,i.kt)("inlineCode",{parentName:"li"},"Redis")," a popular in-memory database which uses a key value store"))),(0,i.kt)("li",{parentName:"ul"},"or each server will have its own cache")))),(0,i.kt)("h2",{id:"cache-invalidation"},"Cache Invalidation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Caching requires maintenance for keeping cache coherent with the source of truth (e.g., database)"),(0,i.kt)("li",{parentName:"ul"},"If the data is modified in the database",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"it should be invalidated in the cache"),(0,i.kt)("li",{parentName:"ul"},"else can cause inconsistent application behavior"),(0,i.kt)("li",{parentName:"ul"},"This problem is solved via Cache Invalidation")))),(0,i.kt)("h3",{id:"understanding-the-problem"},"Understanding the problem"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"if we are designing a system or web app, where users can read, write, and edit posts",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"we have the client (browser) that the user is interacting with"),(0,i.kt)("li",{parentName:"ul"},"we have the server where a user who's writing a post makes a request to the server to write the post"),(0,i.kt)("li",{parentName:"ul"},"we have the database where the post are stored"),(0,i.kt)("li",{parentName:"ul"},"if we want to cache the posts at for example the server level",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"now we have 2 sources of truth",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"posts are now stored in the database and in the server"))),(0,i.kt)("li",{parentName:"ul"},"so if user edits a post",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"client makes a network request with the new post"),(0,i.kt)("li",{parentName:"ul"},"server make a network request to the database and stores the post in the database"),(0,i.kt)("li",{parentName:"ul"},"post is also stored at the server as cache when it got displayed in the browser"))),(0,i.kt)("li",{parentName:"ul"},"an issue arises: how to deal with these 2 sources of truth",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"how to know when to write to the cache and when to write to the database?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"do it at the same time? do not do that at the same time?")))))))))),(0,i.kt)("h3",{id:"first-popular-type-write-through-cache"},"First popular type: Write through cache"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"it is type of caching system where when you make an edit or write to a piece of data",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"the system will write that piece of data both in cache and in the main source of truth (in this case the database) at the same time / operation",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"cached data allows for fast retrieval"),(0,i.kt)("li",{parentName:"ul"},"same data gets written in the permanent storage",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"this will have complete data consistency between the cache and the storage"))),(0,i.kt)("li",{parentName:"ul"},"ensures that nothing will get lost in case of a crash, power failure, or other system disruptions\n| pros                                               | cons                                                                                                                         |\n| -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |\n| allows the cache and database to always be in sync | higher latency for write operations, because every write operation must be done twice before returning success to the client |\n| minimizes the risk of data loss                    | have to go to the database everytime the cache or database is overwritten, thus doing both things as the same time           |")))))),(0,i.kt)("h3",{id:"second-popular-type-write-back-cache"},"Second popular type: Write back cache"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"difference between this and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Write through cache")," is that the server update only the cache"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"cache will be out of sync with the database",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"the system will asynchronously update the database with the values that are stored in the cache",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"can be done in different ways",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"on certain intervals",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g.: every 5 seconds, 5 minutes, or every 5 hours"),(0,i.kt)("li",{parentName:"ul"},"or a different type of schedule e.g.: whenever cache gets filled up and requires eviction"))))))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"in summary: whenever a user makes a network request to the server to make any modifications, only the cache will be updated, and then later at a specific schedule, the database will be asynchronously updated"),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"pros"),(0,i.kt)("th",{parentName:"tr",align:null},"cons"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"write to the permanent storage is done after specified intervals or under certain conditions, results in low latency and high throughput for write-intensive applications"),(0,i.kt)("td",{parentName:"tr",align:null},"this speed comes with the risk of data loss in case of a crash or other adverse event, because the only copy of the written data is in the cache")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"if something ever happens to the cache, and the data is lost before the database has been asynchronously updated, then the data will be lost permanently")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"data inconsistency or staleness will occur, especially if there are multiple servers with their own cache, for this case, it would be better to have 1 component solely for caching so that all servers can retrieve the similar cache data")))))),(0,i.kt)("h3",{id:"write-around-cache"},"Write around cache"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"similar to write through cache"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"but data is written directly to permanent storage, bypassing the cache")),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"pros"),(0,i.kt)("th",{parentName:"tr",align:null},"cons"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"can reduce the cache being flooded with write operations that will not subsequently be re-read"),(0,i.kt)("td",{parentName:"tr",align:null},"a read request for recently written data will create a \u201ccache miss\u201d")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"must be read from slower back-end storage and experience higher latency")))))),(0,i.kt)("h2",{id:"eviction-policies-for-stale-cache-data"},"Eviction policies for stale cache data"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"determines how we get rid of stale data in caches",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"or what policy or rules we have to follow to get rid of data in caches"))),(0,i.kt)("li",{parentName:"ul"},"there are lots of ways to evict data from a cache",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"thus depends on the use case, the product, or system that you are building or designing"),(0,i.kt)("li",{parentName:"ul"},"therefore need to discuss with interviewer to figure out what things are valued"))),(0,i.kt)("li",{parentName:"ul"},"2 reasons for needing this",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"preventing stale data"),(0,i.kt)("li",{parentName:"ol"},"caching only most valuable data to save resources")))),(0,i.kt)("h3",{id:"ttl-time-to-live"},"TTL (Time to Live)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"set a time period before a cache entry is deleted automatically"),(0,i.kt)("li",{parentName:"ul"},"used to prevent stale data"),(0,i.kt)("li",{parentName:"ul"},"time set can depend on how essential it is for data to be fresh",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"example",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"blog post: very rarely it would be updated, so a longer cache time could be implemented"),(0,i.kt)("li",{parentName:"ul"},"tweet counts: this does not need to be immediately updated, so data can remain stale for few seconds or even a minute")))))),(0,i.kt)("h3",{id:"fifo-first-in-first-out-policy-most-common"},"FIFO (First In First Out) policy (most common)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"cache evicts the first block accessed first regardless of how often it was accessed before")),(0,i.kt)("h3",{id:"lifo-last-in-first-out-policy"},"LIFO (Last In First Out) policy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"cache evicts the block accessed most recently first regarless of how often it was accessed before")),(0,i.kt)("h3",{id:"lru-least-recently-used-policy"},"LRU (Least Recently Used) policy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"get rid of the least recently used pieces of data when cache is full",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"you have some way of tracking what pieces of data are the least recently used",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"usually based on assumption that a piece of data that was used least recently is the one that we least care about")))))),(0,i.kt)("h3",{id:"mru-most-recently-used-policy"},"MRU (Most Recently Used) Policy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Discards, in contrast to LRU, the most recently used items first")),(0,i.kt)("h3",{id:"lfu-least-frequently-used-policy"},"LFU (Least Frequently Used) policy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"get rids of the least frequently used of that data, not necessarily the least recently used",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"track number of times key is accessed"),(0,i.kt)("li",{parentName:"ul"},"drop lease used when cache is full")))),(0,i.kt)("h3",{id:"rr-random-replacement-policy-least-common"},"RR (Random Replacement) Policy (least common)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Randomly selects a candidate item and discards it to make space when necessary")),(0,i.kt)("h2",{id:"caching-layers"},"Caching layers"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/reshinto/Basic_technologies_revision/raw/master/interviewPrep/system_design/images/cachingLayers.png",alt:"alt text",title:"Caching Layers"})),(0,i.kt)("h3",{id:"dns-domain-name-system-cache"},"DNS (Domain Name System) cache"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"when typing a website address, you would go to an ip address first",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"before being able to retrieve the ip address, you would need to access it from a DNS server"))),(0,i.kt)("li",{parentName:"ul"},"by caching the request to the DNS server once and storing it at the client, the client can then go to the ip address directly")),(0,i.kt)("h3",{id:"cdn-content-delivery-network"},"CDN (Content Delivery Network)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"it is a 3rd party service that acts like a cache for your servers",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"for sites serving large amounts of static media"))),(0,i.kt)("li",{parentName:"ul"},"sometimes, web apps can be slow for users in a particular region if your servers are located only in another region"),(0,i.kt)("li",{parentName:"ul"},"a CDN has servers all around the world",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"this means that the latency to a CDN's servers will almost always be far better than the latency to your servers"))),(0,i.kt)("li",{parentName:"ul"},"a CDN's servers are often referred to as PoPs (Points of Presence)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"2 of the most popular CDNs are ",(0,i.kt)("inlineCode",{parentName:"li"},"Cloudflare")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Google Cloud CDN")))),(0,i.kt)("li",{parentName:"ul"},"In a typical CDN setup",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"a request will first ask the CDN for a piece of static media"),(0,i.kt)("li",{parentName:"ul"},"the CDN will serve that content if it has it locally available"),(0,i.kt)("li",{parentName:"ul"},"If it isn\u2019t available",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"the CDN will query the back-end servers for the file"),(0,i.kt)("li",{parentName:"ul"},"cache it locally"),(0,i.kt)("li",{parentName:"ul"},"serve it to the requesting user"))))),(0,i.kt)("li",{parentName:"ul"},"If the system we are building isn\u2019t yet large enough to have its own CDN",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"can ease future transition",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"by serving the static media off a separate subdomain (e.g. static.yourservice.com)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"using a lightweight HTTP server (e.g. Nginx)"))),(0,i.kt)("li",{parentName:"ul"},"cut-over the DNS from your servers to a CDN later")))))),(0,i.kt)("h3",{id:"application-server-cache"},"Application Server Cache"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Placing a cache directly on a request layer node enables the local storage of response data"),(0,i.kt)("li",{parentName:"ul"},"Each time a request is made to the service, the node will quickly return local cached data if it exists"),(0,i.kt)("li",{parentName:"ul"},"If it is not in the cache, the requesting node will query the data from disk"),(0,i.kt)("li",{parentName:"ul"},"The cache on one request layer node could be located",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"in memory (very fast)"),(0,i.kt)("li",{parentName:"ul"},"on the node\u2019s local disk (faster than going to network storage)"))),(0,i.kt)("li",{parentName:"ul"},"If the request layer is expanded to multiple nodes",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"possible to have each node host its own cache"),(0,i.kt)("li",{parentName:"ul"},"however, if load balancer randomly distributes requests across the nodes",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"the same request will go to different nodes",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"thus increasing cache misses"),(0,i.kt)("li",{parentName:"ul"},"2 choices for overcoming this hurdle: 1) global caches 2) distributed caches")))))))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/reshinto/Basic_technologies_revision/raw/master/interviewPrep/system_design/images/appServerCache.png",alt:"alt text",title:"App Server Cache"})),(0,i.kt)("h3",{id:"database"},"Database"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"most database would have their own internal caching to cache frequent accessed data")),(0,i.kt)("h2",{id:"terms-used"},"Terms used"),(0,i.kt)("h3",{id:"cache"},"Cache"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a piece of hardware or software that stores data, typically meant to retrieve that data faster than otherwise"),(0,i.kt)("li",{parentName:"ul"},"caches are often used to store responses to network requests as well as results of computationally-long operations"),(0,i.kt)("li",{parentName:"ul"},"data in a cache can become ",(0,i.kt)("inlineCode",{parentName:"li"},"stale")," if the main source of truth for that data (i.e. the main database behind the cache) gets updates and the cache doesn't")),(0,i.kt)("h3",{id:"cache-hit"},"Cache Hit"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"when requested data is found in a cache")),(0,i.kt)("h3",{id:"cache-miss"},"Cache Miss"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"when requested data could have been found in a cache but isn't"),(0,i.kt)("li",{parentName:"ul"},"this is typically used to refer to a negative consequence of a system failure or of a poor design choice",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g.: if a server goes down, our load balancer will have to forward requests to a new server, which will result in cache misses")))),(0,i.kt)("h2",{id:"distributed-cache"},"Distributed Cache"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"works same as traditional cache"),(0,i.kt)("li",{parentName:"ul"},"has built-in functionality to replicate data"),(0,i.kt)("li",{parentName:"ul"},"shard data across servers if amount of data is too big for a single server"),(0,i.kt)("li",{parentName:"ul"},"and locate proper server for each key"),(0,i.kt)("li",{parentName:"ul"},"reason for doing this is, at scale, you don't want your entire system to break down just because your single cache server goes down",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"you'll want some replication to ensure system is more reliable"))),(0,i.kt)("li",{parentName:"ul"},"whenever an active server is down, the application will detect it and reroute it to a passive server",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"under ideal conditions, the passive servers will not do anything"),(0,i.kt)("li",{parentName:"ul"},"before a passive server gets brought up online, it needs to be ",(0,i.kt)("inlineCode",{parentName:"li"},"warm-up")," which is to pre-query the database and fill up the cache data")))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/reshinto/Basic_technologies_revision/raw/master/interviewPrep/system_design/images/distributedCache.png",alt:"alt text",title:"Distributed Cache"})),(0,i.kt)("h2",{id:"code-example"},"Code example"),(0,i.kt)("h3",{id:"caching-retrieval"},"Caching retrieval"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def app_request(tweet_id):\n    cache = {}\n    data = cache.get(tweet_id)\n    if data:\n        return data\n    else:\n        data = db_query(tweet_id)\n        # set data in cache\n        cache[tweet_id] = data\n        return data\n")),(0,i.kt)("h3",{id:"caching-writing"},"Caching writing"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def app_update(tweet_id, data):\n    cache = {}\n    db_update(data)\n    cache.pop(tweet_id)\n")))}h.isMDXComponent=!0}}]);