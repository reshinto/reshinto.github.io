"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[9128],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,h=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return a?r.createElement(h,l(l({ref:t},p),{},{components:a})):r.createElement(h,l({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},44946:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={},l="Structural Patterns",s={unversionedId:"interviewPrep/designPatterns/Structural_patterns/readme",id:"interviewPrep/designPatterns/Structural_patterns/readme",title:"Structural Patterns",description:"- it explains how to assemble objects and classes into larger structures while keeping these structures flexible and efficient",source:"@site/docs/interviewPrep/designPatterns/Structural_patterns/readme.md",sourceDirName:"interviewPrep/designPatterns/Structural_patterns",slug:"/interviewPrep/designPatterns/Structural_patterns/",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Structural_patterns/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TypeScript Example",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Singleton/typescript/"},next:{title:"Adapter",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Adapter/"}},o={},c=[{value:"Adapter",id:"adapter",level:3},{value:"Bridge",id:"bridge",level:3},{value:"Composite",id:"composite",level:3},{value:"Decorator",id:"decorator",level:3},{value:"Facade",id:"facade",level:3},{value:"Flyweight",id:"flyweight",level:3},{value:"Proxy",id:"proxy",level:3}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"structural-patterns"},"Structural Patterns"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"it explains how to assemble objects and classes into larger structures while keeping these structures flexible and efficient",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"To achieve that, both inheritance and composition can be applied"))),(0,n.kt)("li",{parentName:"ul"},"concerned with the structure (eg class members)"),(0,n.kt)("li",{parentName:"ul"},"many patterns are wrappers that mimic the underlying class interface"),(0,n.kt)("li",{parentName:"ul"},"stress the importance of good API design"),(0,n.kt)("li",{parentName:"ul"},"Class: Use inheritance to compose classes",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Adapter"))),(0,n.kt)("li",{parentName:"ul"},"Object: Describe ways to assemble objects",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Adapter"),(0,n.kt)("li",{parentName:"ul"},"Bridge"),(0,n.kt)("li",{parentName:"ul"},"Composite"),(0,n.kt)("li",{parentName:"ul"},"Decorator"),(0,n.kt)("li",{parentName:"ul"},"Facade"),(0,n.kt)("li",{parentName:"ul"},"Flyweight"),(0,n.kt)("li",{parentName:"ul"},"Proxy")))),(0,n.kt)("h3",{id:"adapter"},(0,n.kt)("a",{parentName:"h3",href:"/docs/interviewPrep/designPatterns/Structural_patterns/Adapter/"},"Adapter")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Convert the interface of a class into another interface clients expect"),(0,n.kt)("li",{parentName:"ul"},"Adapter lets classes work together that couldn't otherwise because of incompatible interfaces"),(0,n.kt)("li",{parentName:"ul"},"Deal with relationships between classes & their subclasses (focus on class relationships)"),(0,n.kt)("li",{parentName:"ul"},"relationships are established through inheritance, so they are static-fixed at compile time"),(0,n.kt)("li",{parentName:"ul"},"Deal with object relationships, which can be changed at run time and are more dynamic"),(0,n.kt)("li",{parentName:"ul"},"Almost all patterns use inheritance to some extent")),(0,n.kt)("h3",{id:"bridge"},(0,n.kt)("a",{parentName:"h3",href:"/docs/interviewPrep/designPatterns/Structural_patterns/Bridge/"},"Bridge")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Decouple an abstraction from its implementation so that the two can vary independently"),(0,n.kt)("li",{parentName:"ul"},"Deal with object relationships, which can be changed at run time and are more dynamic"),(0,n.kt)("li",{parentName:"ul"},"Almost all patterns use inheritance to some extent")),(0,n.kt)("h3",{id:"composite"},(0,n.kt)("a",{parentName:"h3",href:"/docs/interviewPrep/designPatterns/Structural_patterns/Composite/"},"Composite")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Compose objects into tree structures to represent part-whole hierarchies"),(0,n.kt)("li",{parentName:"ul"},"Composite lets clients treat individual objects and compositions of objects uniformly"),(0,n.kt)("li",{parentName:"ul"},"Deal with object relationships, which can be changed at run time and are more dynamic"),(0,n.kt)("li",{parentName:"ul"},"Almost all patterns use inheritance to some extent"),(0,n.kt)("li",{parentName:"ul"},"often used with Iterator or Visitor"),(0,n.kt)("li",{parentName:"ul"},"have similar designs but different intents with Decorator"),(0,n.kt)("li",{parentName:"ul"},"Many objects in a design come from the analysis model, but often end up with classes that have no counterparts in the real world",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"higher-level classes:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"introduces an abstraction for treating objects uniformly that doesn't have a physical counterpart"),(0,n.kt)("li",{parentName:"ul"},"strict modeling of the real world leads to a system that reflects today's realities but not necessarily tomorrow's"),(0,n.kt)("li",{parentName:"ul"},"abstractions that emerge during design are key to making a design flexible")))))),(0,n.kt)("h3",{id:"decorator"},(0,n.kt)("a",{parentName:"h3",href:"/docs/interviewPrep/designPatterns/Structural_patterns/Decorator/"},"Decorator")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Attach additional responsibilities to an object dynamically"),(0,n.kt)("li",{parentName:"ul"},"Decorators provide a flexible alternative to subclassing for extending functionality"),(0,n.kt)("li",{parentName:"ul"},"Deal with object relationships, which can be changed at run time and are more dynamic"),(0,n.kt)("li",{parentName:"ul"},"Almost all patterns use inheritance to some extent"),(0,n.kt)("li",{parentName:"ul"},"have similar designs but different intents with Composite"),(0,n.kt)("li",{parentName:"ul"},"Design patterns specify relationships between interfaces, by requiring some classes to have similar interfaces or placing constraints on the interfaces of some classes",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Decorator pattern require the interfaces of Decorator objects to be identical to the decorated objects")))),(0,n.kt)("h3",{id:"facade"},(0,n.kt)("a",{parentName:"h3",href:"/docs/interviewPrep/designPatterns/Structural_patterns/Facade/"},"Facade")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Provide a unified interface to a set of interfaces in a subsystem"),(0,n.kt)("li",{parentName:"ul"},"Facade defines a higher-level interface that makes the subsystem easier to use"),(0,n.kt)("li",{parentName:"ul"},"Deal with object relationships, which can be changed at run time and are more dynamic"),(0,n.kt)("li",{parentName:"ul"},"Almost all patterns use inheritance to some extent"),(0,n.kt)("li",{parentName:"ul"},"Design patterns can address the issue of objects being able to vary tremendously in size and number",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Facade pattern: describes how to represent complete subsystems as objects")))),(0,n.kt)("h3",{id:"flyweight"},(0,n.kt)("a",{parentName:"h3",href:"/docs/interviewPrep/designPatterns/Structural_patterns/Flyweight/"},"Flyweight")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use sharing to support large numbers of fine-grained objects efficiently"),(0,n.kt)("li",{parentName:"ul"},"Deal with object relationships, which can be changed at run time and are more dynamic"),(0,n.kt)("li",{parentName:"ul"},"Almost all patterns use inheritance to some extent"),(0,n.kt)("li",{parentName:"ul"},"Design patterns can address the issue of objects being able to vary tremendously in size and number",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Flyweight pattern: describes how to support huge numbers of objects at the finest granularities")))),(0,n.kt)("h3",{id:"proxy"},(0,n.kt)("a",{parentName:"h3",href:"/docs/interviewPrep/designPatterns/Structural_patterns/Proxy/"},"Proxy")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Provide a surrogate or placeholder for another object to control access to it"),(0,n.kt)("li",{parentName:"ul"},"Deal with object relationships, which can be changed at run time and are more dynamic"),(0,n.kt)("li",{parentName:"ul"},"Almost all patterns use inheritance to some extent"),(0,n.kt)("li",{parentName:"ul"},"Design patterns specify relationships between interfaces, by requiring some classes to have similar interfaces or placing constraints on the interfaces of some classes",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Proxy pattern require the interfaces of Proxy objects to be identical to the proxied objects")))))}u.isMDXComponent=!0}}]);