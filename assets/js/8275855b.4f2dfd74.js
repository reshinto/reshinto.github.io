"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[3363],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(a),h=i,d=u["".concat(s,".").concat(h)]||u[h]||c[h]||r;return a?n.createElement(d,l(l({ref:t},m),{},{components:a})):n.createElement(d,l({ref:t},m))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4400:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={},l="Object-oriented Design",o={unversionedId:"basics/programmingParadigm/OOP/OOD",id:"basics/programmingParadigm/OOP/OOD",title:"Object-oriented Design",description:"- it is the process of planning a system of interacting objects for the purpose of solving a software problem",source:"@site/docs/basics/programmingParadigm/OOP/OOD.md",sourceDirName:"basics/programmingParadigm/OOP",slug:"/basics/programmingParadigm/OOP/OOD",permalink:"/docs/basics/programmingParadigm/OOP/OOD",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/basics/programmingParadigm/OOP/OOD.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Object Oriented Programming",permalink:"/docs/basics/programmingParadigm/OOP/"},next:{title:"Inheritance in Details",permalink:"/docs/basics/programmingParadigm/OOP/inheritanceInDetails"}},s={},p=[{value:"Design Smells",id:"design-smells",level:2},{value:"What is Design?",id:"what-is-design",level:2},{value:"Why Change is Hard and the Problem Design Solves",id:"why-change-is-hard-and-the-problem-design-solves",level:2},{value:"The Purpose of OOD",id:"the-purpose-of-ood",level:2},{value:"The Tools of Design",id:"the-tools-of-design",level:2}],m={toc:p};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"object-oriented-design"},"Object-oriented Design"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"it is the process of planning a system of interacting objects for the purpose of solving a software problem",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It is one approach to software design"))),(0,i.kt)("li",{parentName:"ul"},"usually changes always happen and something always changes",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g.: clients did not know what they exactly wanted, or they told something wrong -\u3000 therefore the need for software design is important"))),(0,i.kt)("li",{parentName:"ul"},"applications that are easy to change are always fun to write and extend",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Such applications will be flexible in development, adaptable to new requirements"))),(0,i.kt)("li",{parentName:"ul"},"applications that lack such qualities as flexibility and adaptability",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"each change will be more expensive and more difficult")))),(0,i.kt)("h2",{id:"design-smells"},"Design Smells"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"bad design smells",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Rigidity",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"indicates that a system is rigid if it is difficult to change it, or even a small change will entail high costs"),(0,i.kt)("li",{parentName:"ul"},"This suggests that the system is no longer flexible and extensible"))),(0,i.kt)("li",{parentName:"ul"},"Fragility",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"indicates that a system is fragile if a change in some part breaks something in another part"),(0,i.kt)("li",{parentName:"ul"},"while the part in which something breaks is not connected in any way and does not explicitly depend on the part in which something has changed"))),(0,i.kt)("li",{parentName:"ul"},"Immobility",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"means that a system is immobile if certain parts of it cannot be separated into separate components or into separate modules and reused in another part of this system, and in the best cases, in other systems in general"))),(0,i.kt)("li",{parentName:"ul"},"Viscosity",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The system is viscous if basic operations are difficult or take too long to complete and thus ignored"),(0,i.kt)("li",{parentName:"ul"},"example of such operations that are difficult to modify and take a long time",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"slow tests",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If they are hard to run, if they are hard to write"),(0,i.kt)("li",{parentName:"ul"},"if they are slow to execute, then most likely no one will support them, no one will write them, no one will run them"))))))),(0,i.kt)("li",{parentName:"ul"},"Needless Complexity / premature optimization",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"indicates that the system is unnecessarily complicated or prematurely optimized"),(0,i.kt)("li",{parentName:"ul"},"has too much code that is not currently used, but was written with the intention that it may be needed in the future if the customer wants that functionality",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"this generates dead code"),(0,i.kt)("li",{parentName:"ul"},"code that is not used, first for days, then months, years, and then everyone forgets who wrote it, why it was written, and are simply afraid to delete it, because, it may be used somewhere, but nobody knows where"))))))),(0,i.kt)("li",{parentName:"ul"},"the main reason for all the listed bad design smells is the lack of flexibility in the system",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The system must be flexible, or, as per saying",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"software must be soft that is, it must be easy to change"))),(0,i.kt)("li",{parentName:"ul"},"that is why we need a good design")))),(0,i.kt)("h2",{id:"what-is-design"},"What is Design?"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Software development project lifecycle",src:a(9720).Z,width:"1308",height:"256"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"lifecycle",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"final product?\n\u2013 An application that solves some specific problems in its domain area"),(0,i.kt)("li",{parentName:"ul"},"creation process?\n\u2013 The process of interpreting or compiling source code"),(0,i.kt)("li",{parentName:"ul"},"design process",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"is the source code itself"))))),(0,i.kt)("li",{parentName:"ul"},"the design phase is much longer and more expensive than the creation phase"),(0,i.kt)("li",{parentName:"ul"},"the design phase should be iterative, gradual, with constant feedback from both the product and the client")),(0,i.kt)("h2",{id:"why-change-is-hard-and-the-problem-design-solves"},"Why Change is Hard and the Problem Design Solves"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"reason"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Object-oriented application is made of parts \u2013 objects"),(0,i.kt)("li",{parentName:"ul"},"Interactions are embodied in the messages that pass between the objects"),(0,i.kt)("li",{parentName:"ul"},"Sender object \u2013 Target object creates dependencies between the two"),(0,i.kt)("li",{parentName:"ul"},"Object-oriented design is about managing dependencies"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Change will always occur for requirements, product, ecosystem, environment, customer"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The system needs a design that is ready for such changes"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"the design would consist of certain parts that would interact with each other to create the behavior of something whole"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"a class, a component, an architectural layer, or an application"),(0,i.kt)("li",{parentName:"ul"},"parts are objects, interactions between them are implemented using messages that are sent between these objects"),(0,i.kt)("li",{parentName:"ul"},"sending the correct message to the correct recipient-object requires knowledge of where this object is and how to interact with it",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This knowledge creates a relationship between two or three objects, or generally a huge number of objects in the system"),(0,i.kt)("li",{parentName:"ul"},"Cross dependencies, cycle-dependency and so on arise",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"all these dependencies complicate system change"))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Object-oriented design is essentially dependency management")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In the absence of design, unmanaged dependencies lead to chaos"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"because objects begin to know too much about each other, and at some point, it is easier to throw everything out and rewrite entire application than to add some next changes"),(0,i.kt)("li",{parentName:"ul"},"Since these dependencies just become unmanageable",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"By changing something in one place, even if there are some tests, we do not exclude the possibility that something will not break in another place")))))),(0,i.kt)("h2",{id:"the-purpose-of-ood"},"The Purpose of OOD"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Software must:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Satisfy customer's needs"),(0,i.kt)("li",{parentName:"ul"},"Be flexible for change and enhancement"))),(0,i.kt)("li",{parentName:"ul"},"the goal of object-oriented design is",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"to satisfy the needs of the customer"),(0,i.kt)("li",{parentName:"ol"},"to be easy to change and be adaptable and ready for such changes and extensions")))),(0,i.kt)("h2",{id:"the-tools-of-design"},"The Tools of Design"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"tools",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Design Principles:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"SOLID"),(0,i.kt)("li",{parentName:"ul"},"DRY"),(0,i.kt)("li",{parentName:"ul"},"KISS"))),(0,i.kt)("li",{parentName:"ul"},"Design Patterns",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Creational"),(0,i.kt)("li",{parentName:"ul"},"Behavioral"),(0,i.kt)("li",{parentName:"ul"},"Structural"))),(0,i.kt)("li",{parentName:"ul"},"OOP Principles",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Abstraction"),(0,i.kt)("li",{parentName:"ul"},"Encapsulation"),(0,i.kt)("li",{parentName:"ul"},"Polymorphism"),(0,i.kt)("li",{parentName:"ul"},"Inheritance")))))))}c.isMDXComponent=!0},9720:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/softwareDevelopmentProjectLifecycle-33410956b7894e75558c3fa507c0b8d3.png"}}]);