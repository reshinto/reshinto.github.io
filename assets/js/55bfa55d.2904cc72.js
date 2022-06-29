"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[7405],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o="Redundancy and Replication",l={unversionedId:"interviewPrep/system_design/redundancy_and_replication",id:"interviewPrep/system_design/redundancy_and_replication",title:"Redundancy and Replication",description:"* Redundancy is the duplication of critical components or functions of a system",source:"@site/docs/interviewPrep/system_design/redundancy_and_replication.md",sourceDirName:"interviewPrep/system_design",slug:"/interviewPrep/system_design/redundancy_and_replication",permalink:"/docs/interviewPrep/system_design/redundancy_and_replication",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/system_design/redundancy_and_replication.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Proxies",permalink:"/docs/interviewPrep/system_design/proxies"},next:{title:"Web",permalink:"/docs/interviewPrep/system_design/web/"}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"redundancy-and-replication"},"Redundancy and Replication"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Redundancy is the duplication of critical components or functions of a system",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"with the intention of increasing the reliability of the system",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"usually in the form of a backup or fail-safe, or to improve actual system performance"))),(0,a.kt)("li",{parentName:"ul"},"e.g. if there is only one copy of a file stored on a single server, then losing that server means losing the file",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Since losing data is seldom a good thing",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"we can create duplicate or redundant copies of the file to solve this problem"))))))),(0,a.kt)("li",{parentName:"ul"},"Redundancy plays a key role in removing the single points of failure in the system",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"provides backups if needed in a crisis"),(0,a.kt)("li",{parentName:"ul"},"e.g. if we have two instances of a service running in production and one fails",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"* the system can failover to the other one\n")),(0,a.kt)("img",{parentName:"li",src:"https://github.com/reshinto/Basic_technologies_revision/raw/master/interviewPrep/system_design/images/redundancy.png",alt:"alt text",title:"Redundancy"})))),(0,a.kt)("li",{parentName:"ul"},"Replication means sharing information to ensure consistency between redundant resources",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"such as software or hardware components, to improve reliability, fault-tolerance, or accessibility"))),(0,a.kt)("li",{parentName:"ul"},"Replication is widely used in many database management systems (DBMS)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"usually with a master-slave relationship between the original and the copies"),(0,a.kt)("li",{parentName:"ul"},"The master gets all the updates",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"which then ripple through to the slaves",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Each slave outputs a message stating that it has received the update successfully",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"thus allowing the sending of subsequent updates")))))))))))}u.isMDXComponent=!0}}]);