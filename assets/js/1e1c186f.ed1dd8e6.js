"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[3646],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=i,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30325:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(83117),i=(n(67294),n(3905));const o={},a="Separation Of Concerns (SOC)",l={unversionedId:"interviewPrep/design_principles/SOC/readme",id:"interviewPrep/design_principles/SOC/readme",title:"Separation Of Concerns (SOC)",description:"- this one is meant to help you group functions or modules into a service",source:"@site/docs/interviewPrep/design_principles/SOC/readme.md",sourceDirName:"interviewPrep/design_principles/SOC",slug:"/interviewPrep/design_principles/SOC/",permalink:"/docs/interviewPrep/design_principles/SOC/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/design_principles/SOC/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Proof Of Concept (POC)",permalink:"/docs/interviewPrep/design_principles/POC/"},next:{title:"SOLID",permalink:"/docs/interviewPrep/design_principles/SOLID/"}},s={},p=[{value:"Example",id:"example",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"separation-of-concerns-soc"},"Separation Of Concerns (SOC)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"this one is meant to help you group functions or modules into a service"),(0,i.kt)("li",{parentName:"ul"},"The point being if you\u2019re designing a system that deals with several concepts, you want to group your functions into modules depending on what they have to deal with")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"consider a blogging platform, a simple one, where your users can publish their blog posts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You could have a single system taking care of everything (user management, blog posts, analytics, and so on)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"But if you want to follow the SOC principle, you could end up with something more in the lines of the following"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"SOC",src:n(39107).Z,width:"561",height:"401"})),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This is of course a very crude representation of the architecture, but the point being you can separate different responsibilities into different modules, this in turn allows for benefits such as",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Scaling individual functionalities becomes easier",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You can now easily consider scaling your user management module, because it is getting too much traffic, while leaving the rest of the platform untouched"))),(0,i.kt)("li",{parentName:"ul"},"Making changes is easier now that your code is not tightly coupled",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You can make considerable modifications to how you manage blog posts without affecting any other section of the platform"))),(0,i.kt)("li",{parentName:"ul"},"Your platform is now more stable",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If one of these modules crashes, then the system can potentially still function, with less features, of course, but the potential is there nevertheless"))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"SOC can also apply to API design, library architecture and more"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It\u2019s simply about having control over how you group functionalities in a way that makes sense to the users of those functionalities")))))}u.isMDXComponent=!0},39107:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/soc-2f9e6b6230b6f92fa6ca42ac743fc118.png"}}]);