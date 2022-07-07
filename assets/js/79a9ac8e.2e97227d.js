"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[9498],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(r),u=l,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function u(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9413:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(87462),l=(r(67294),r(3905));const a={},i="Etcd leader election example",o={unversionedId:"interviewPrep/system_design/16LeaderElection/etcdExample/readme",id:"interviewPrep/system_design/16LeaderElection/etcdExample/readme",title:"Etcd leader election example",description:"How to run",source:"@site/docs/interviewPrep/system_design/16LeaderElection/etcdExample/readme.md",sourceDirName:"interviewPrep/system_design/16LeaderElection/etcdExample",slug:"/interviewPrep/system_design/16LeaderElection/etcdExample/",permalink:"/docs/interviewPrep/system_design/16LeaderElection/etcdExample/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/system_design/16LeaderElection/etcdExample/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Leader Election",permalink:"/docs/interviewPrep/system_design/16LeaderElection/"},next:{title:"Peer-To-Peer Networks",permalink:"/docs/interviewPrep/system_design/17Peer-To-PeerNetworks/"}},p={},c=[{value:"How to run",id:"how-to-run",level:2}],s={toc:c};function d(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"etcd-leader-election-example"},"Etcd leader election example"),(0,l.kt)("h2",{id:"how-to-run"},"How to run"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"install etcd",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"brew install etcd"))),(0,l.kt)("li",{parentName:"ul"},"start etcd service",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"brew services start etcd"))),(0,l.kt)("li",{parentName:"ul"},"install all dependencies",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"pipenv install"))),(0,l.kt)("li",{parentName:"ul"},"open 4 terminals and enter into virtual environment for all of them",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"pipenv shell"))),(0,l.kt)("li",{parentName:"ul"},"run 1 server in 4 terminals",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"python leader_election.py server1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"python leader_election.py server2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"python leader_election.py server3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"python leader_election.py server4")))),(0,l.kt)("li",{parentName:"ul"},"server1 will be the leader since it is run first"),(0,l.kt)("li",{parentName:"ul"},"should any of the follower servers were to crash, nothing will change"),(0,l.kt)("li",{parentName:"ul"},"should the leader server crash, a new leader will be selected among the follower servers")))}d.isMDXComponent=!0}}]);