"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[3751],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=u(a),c=i,h=d["".concat(l,".").concat(c)]||d[c]||p[c]||n;return a?r.createElement(h,o(o({ref:t},m),{},{components:a})):r.createElement(h,o({ref:t},m))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<n;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4075:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var r=a(7462),i=(a(7294),a(3905));const n={},o="Storage",s={unversionedId:"interviewPrep/system_design/05Storage/readme",id:"interviewPrep/system_design/05Storage/readme",title:"Storage",description:"- any system will require some form of storage",source:"@site/docs/interviewPrep/system_design/05Storage/readme.md",sourceDirName:"interviewPrep/system_design/05Storage",slug:"/interviewPrep/system_design/05Storage/",permalink:"/docs/interviewPrep/system_design/05Storage/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/system_design/05Storage/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HTTP (Hypertext Transfer Protocol)",permalink:"/docs/interviewPrep/system_design/04NetworkProtocols/http"},next:{title:"Latency and Throughput",permalink:"/docs/interviewPrep/system_design/06LatencyAndThroughput/"}},l={},u=[{value:"Terms used",id:"terms-used",level:2},{value:"Databases",id:"databases",level:3},{value:"Disk",id:"disk",level:3},{value:"Memory",id:"memory",level:3},{value:"Persistent Storage",id:"persistent-storage",level:3}],m={toc:u};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"storage"},"Storage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"any system will require some form of storage",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"example",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"store user information"),(0,i.kt)("li",{parentName:"ul"},"store metrics about the system"))))),(0,i.kt)("li",{parentName:"ul"},"storage is very complicated",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"does a database impose some kind of structure on the way that data is stored in it or does it not?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"this is related to relational databases"))),(0,i.kt)("li",{parentName:"ul"},"when it comes to availability, if its about the uptime of the system, then the choice of database is really important",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"different databases are gonna give different things"),(0,i.kt)("li",{parentName:"ul"},"cause if the database goes down then the entire system will go down with the database"),(0,i.kt)("li",{parentName:"ul"},"this is related to the topic distributed storage"))),(0,i.kt)("li",{parentName:"ul"},"if you don't want the entire system to get brought down when the database is down",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"will need to store data not on 1 machine but on multiple machines"),(0,i.kt)("li",{parentName:"ul"},"this comes with a lot of complexity"),(0,i.kt)("li",{parentName:"ul"},"brings questions",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"how do you store data on multiple machines?"),(0,i.kt)("li",{parentName:"ul"},"do you split the data up?"),(0,i.kt)("li",{parentName:"ul"},"do you replicate the data across multiple machines?"),(0,i.kt)("li",{parentName:"ul"},"this leads to consistency issues",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"it is a concept in storage that refers to the staleness or the up-to-dateness of data",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g.: if you access data from a database, especially if that database is distributed across multiple machines, are you ever gonna get stale data",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"or will you always get the most up to date version of that data"))))))))))))),(0,i.kt)("li",{parentName:"ul"},"some databases are gonna give you certain properties or certain guarantees",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"but they're gonna trade off others"))),(0,i.kt)("li",{parentName:"ul"},"other databases are gonna give you different properties in exchange for other trade-offs")),(0,i.kt)("h2",{id:"terms-used"},"Terms used"),(0,i.kt)("h3",{id:"databases"},"Databases"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"databases are programs that either use disk or memory to do 2 core things",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"record(store) data"),(0,i.kt)("li",{parentName:"ol"},"query(retrieve) data"))),(0,i.kt)("li",{parentName:"ul"},"they are servers that are long lived and interact with the rest of the application through network calls, with protocols on top of TCP or even HTTP"),(0,i.kt)("li",{parentName:"ul"},"some databases only keep records in memory, and the users of such databases are aware of the fact that those records may be lost forever if the machine or process dies"),(0,i.kt)("li",{parentName:"ul"},"databases need persistence of those records, and cannot use memory",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"means that you have to write the data to disk"),(0,i.kt)("li",{parentName:"ul"},"anything written to disk will remain through power loss or network partitions",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"this is used to keep permanent records"))))),(0,i.kt)("li",{parentName:"ul"},"since machines die often in a large scale system",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"special disk partitions or volumes are used by the database processes",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"and those volumes can get recovered even if the machine were to go down permanently")))))),(0,i.kt)("h3",{id:"disk"},"Disk"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"usually refers to either HDD (Hard-Disk Drive) or SSD(Solid-State Drive)"),(0,i.kt)("li",{parentName:"ul"},"data written to disk will persist through power failures and general machine crashes"),(0,i.kt)("li",{parentName:"ul"},"disk is also referred to as Non-Volatile Storage"),(0,i.kt)("li",{parentName:"ul"},"SSD is far faster than HDD",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"based on the latencies of accessing data from SSD and HDD"),(0,i.kt)("li",{parentName:"ul"},"it is also far more expensive from a financial point of view"),(0,i.kt)("li",{parentName:"ul"},"because of that, HDD will typically be used for data that's rarely accessed or updated"),(0,i.kt)("li",{parentName:"ul"},"but that's stored for a long time"),(0,i.kt)("li",{parentName:"ul"},"SSD will be used for data that's frequently accessed and updated")))),(0,i.kt)("h3",{id:"memory"},"Memory"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"short for Random Access Memory(RAM)"),(0,i.kt)("li",{parentName:"ul"},"data stored in memory will be lost when the process that has written that data dies"),(0,i.kt)("li",{parentName:"ul"},"1 advantage of using memory over disk is that reading and writing data in memory is much faster than reading or writing data in disk")),(0,i.kt)("h3",{id:"persistent-storage"},"Persistent Storage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"usually refers to disk"),(0,i.kt)("li",{parentName:"ul"},"but in general it is any form of storage that persists if the process in charge of managing it dies")))}p.isMDXComponent=!0}}]);