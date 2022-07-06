"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[4416],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7278:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={},l="Bridge pattern",o={unversionedId:"interviewPrep/designPatterns/Structural_patterns/Bridge/readme",id:"interviewPrep/designPatterns/Structural_patterns/Bridge/readme",title:"Bridge pattern",description:"- It divides business logic or huge class into separate class hierarchies that can be developed independently",source:"@site/docs/interviewPrep/designPatterns/Structural_patterns/Bridge/readme.md",sourceDirName:"interviewPrep/designPatterns/Structural_patterns/Bridge",slug:"/interviewPrep/designPatterns/Structural_patterns/Bridge/",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Bridge/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Structural_patterns/Bridge/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Adapter design pattern",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Adapter/"},next:{title:"Composite design pattern",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Composite/"}},s={},p=[{value:"Why use the Bridge pattern",id:"why-use-the-bridge-pattern",level:2},{value:"Structure",id:"structure",level:2}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bridge-pattern"},"Bridge pattern"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It divides business logic or huge class into separate class hierarchies that can be developed independently",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"one of these hierarchies (often called ",(0,a.kt)("inlineCode",{parentName:"li"},"Abstraction"),") will get a reference to an object of the 2nd hierarchy (",(0,a.kt)("inlineCode",{parentName:"li"},"Implementation"),")"),(0,a.kt)("li",{parentName:"ul"},"the abstraction will be able to delegate some of its calls to the implementations object",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"since all implementations will have a common interface and would be interchangeable inside the abstraction")))))),(0,a.kt)("h2",{id:"why-use-the-bridge-pattern"},"Why use the Bridge pattern"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"it is useful for",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"dealing with cross-platform apps"),(0,a.kt)("li",{parentName:"ul"},"supporting multiple types of database servers"),(0,a.kt)("li",{parentName:"ul"},"working with several API providers of a certain kind",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"e.g.: cloud platforms, social networks")))))),(0,a.kt)("h2",{id:"structure"},"Structure"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bridge",src:r(7103).Z,width:"1174",height:"820"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The Abstraction provides high-level control logic."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"It relies on the implementation object to do the actual low-level work."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The Implementation declares the interface that\u2019s common for all concrete implementations."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"An abstraction can only communicate with an implementation object via methods that are declared here."),(0,a.kt)("li",{parentName:"ul"},"The abstraction may list the same methods as the implementation, but usually the abstraction declares some complex behaviors that rely on a wide variety of primitive operations declared by the implementation."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Concrete Implementations contain platform-specific code.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Refined Abstractions provide variants of control logic. Like their parent, they work with different implementations via the general implementation interface.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Usually, the Client is only interested in working with the abstraction."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"However, it\u2019s the client\u2019s job to link the abstraction object with one of the implementation objects.")))))}u.isMDXComponent=!0},7103:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/bridge-c3c6e960d6deea28031a171c06227536.png"}}]);