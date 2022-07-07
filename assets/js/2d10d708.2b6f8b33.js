"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[4132],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},26754:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={},i="Factory",l={unversionedId:"interviewPrep/designPatterns/Creational_patterns/Factory/readme",id:"interviewPrep/designPatterns/Creational_patterns/Factory/readme",title:"Factory",description:"- it is an interface for creating an object which lets subclasses decide which class to instantiate",source:"@site/docs/interviewPrep/designPatterns/Creational_patterns/Factory/readme.md",sourceDirName:"interviewPrep/designPatterns/Creational_patterns/Factory",slug:"/interviewPrep/designPatterns/Creational_patterns/Factory/",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Factory/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Creational_patterns/Factory/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Builder pattern",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Builder/"},next:{title:"Prototype",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Prototype/"}},s={},c=[{value:"Analogy",id:"analogy",level:2},{value:"Structure",id:"structure",level:2},{value:"Summary",id:"summary",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"factory"},"Factory"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"it is an interface for creating an object which lets subclasses decide which class to instantiate"),(0,n.kt)("li",{parentName:"ul"},"also know as the virtual constructor pattern")),(0,n.kt)("h2",{id:"analogy"},"Analogy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"assume a phone in an elementary form has",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"a model name, processor type, amount of RAM, dimensions, screen resolutions"))),(0,n.kt)("li",{parentName:"ul"},"a phone factory can manufacture all kinds of phones",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"only need to supply a combination of feature attributes to get the job done"),(0,n.kt)("li",{parentName:"ul"},"once a combinations of specs listed as model A, B, and C are available",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"do not need to specify the specs again"))))),(0,n.kt)("li",{parentName:"ul"},"in conclusion, the factory pattern allows generation of preconfigured custom objects easily",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"without the need to pass in constructor options each time")))),(0,n.kt)("h2",{id:"structure"},"Structure"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Factory",src:r(87810).Z,width:"1318",height:"814"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The Product declares the interface, which is common to all objects that can be produced by the creator and its subclasses.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Concrete Products are different implementations of the product interface.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The Creator class declares the factory method that returns new product objects."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"It\u2019s important that the return type of this method matches the product interface."),(0,n.kt)("li",{parentName:"ul"},"You can declare the factory method as abstract to force all subclasses to implement their own versions of the method."),(0,n.kt)("li",{parentName:"ul"},"As an alternative, the base factory method can return some default product type."),(0,n.kt)("li",{parentName:"ul"},"Note, despite its name, product creation is not the primary responsibility of the creator."),(0,n.kt)("li",{parentName:"ul"},"Usually, the creator class already has some core business logic related to products."),(0,n.kt)("li",{parentName:"ul"},"The factory method helps to decouple this logic from the concrete product classes."),(0,n.kt)("li",{parentName:"ul"},"Here is an analogy: a large software development company can have a training department for programmers."),(0,n.kt)("li",{parentName:"ul"},"However, the primary function of the company as a whole is still writing code, not producing programmers."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Concrete Creators override the base factory method so it returns a different type of product."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Note that the factory method doesn\u2019t have to create new instances all the time."),(0,n.kt)("li",{parentName:"ul"},"It can also return existing objects from a cache, an object pool, or another source.")))),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"factory pattern provides an interface for constructing pre-configured objects"),(0,n.kt)("li",{parentName:"ul"},"code is cleaner and resilient"),(0,n.kt)("li",{parentName:"ul"},"pattern is useful when writing packages for public use"),(0,n.kt)("li",{parentName:"ul"},"allows an easy to understand interface to the package functions")))}u.isMDXComponent=!0},87810:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/factory-6f46227a53e922840799068e99ca7831.png"}}]);