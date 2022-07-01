"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[6482],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7436:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},i="MapReducer example",l={unversionedId:"interviewPrep/system_design/23MapReduce/example/readme",id:"interviewPrep/system_design/23MapReduce/example/readme",title:"MapReducer example",description:"How to use",source:"@site/docs/interviewPrep/system_design/23MapReduce/example/readme.md",sourceDirName:"interviewPrep/system_design/23MapReduce/example",slug:"/interviewPrep/system_design/23MapReduce/example/",permalink:"/docs/interviewPrep/system_design/23MapReduce/example/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/system_design/23MapReduce/example/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[MapReduce](https://static.googleusercontent.com/media/research.google.com/en//archive/mapreduce-osdi04.pdf)",permalink:"/docs/interviewPrep/system_design/23MapReduce/"},next:{title:"Security and HTTPS",permalink:"/docs/interviewPrep/system_design/24SecurityAndHttps/"}},s={},c=[{value:"How to use",id:"how-to-use",level:2},{value:"How it works",id:"how-it-works",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mapreducer-example"},"MapReducer example"),(0,a.kt)("h2",{id:"how-to-use"},"How to use"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"run shell file with bash",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"bash run.sh"))),(0,a.kt)("li",{parentName:"ul"},"allow chmod permission",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"chmod a+x run.sh"))),(0,a.kt)("li",{parentName:"ul"},"run shell file without bash",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"./run.sh")))),(0,a.kt)("h2",{id:"how-it-works"},"How it works"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the shell script is meant to replicate what the central control plane of the distributed file system would do",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"it knows where the data lives, it determines what the Map and Reduce functions are gonna be, where the programs are gonna live"))),(0,a.kt)("li",{parentName:"ul"},"latencies are checked if it is over 10 seconds and will be written as 1 each per line in the over_10_seconds.txt file in their respective host/map_results folder"),(0,a.kt)("li",{parentName:"ul"},"latencies are also checked if it is under 10 seconds and will be written as 1 each per line in the under_10_seconds.txt file in their respective host/map_results folder"),(0,a.kt)("li",{parentName:"ul"},"total number of latencies that are over 10 seconds will be accumulated and be written in the map_results folder"),(0,a.kt)("li",{parentName:"ul"},"total number of latencies that are under 10 seconds will be accumulated and be written in the mpa_results folder"),(0,a.kt)("li",{parentName:"ul"},"total count of the number of latencies over 10 seconds will be counted and be written in the reduce_results folder"),(0,a.kt)("li",{parentName:"ul"},"total count of the number of latencies under 10 seconds will be counted and be written in the reduce_results folder")))}p.isMDXComponent=!0}}]);