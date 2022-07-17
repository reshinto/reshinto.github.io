"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[8552],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var c=r.createContext({}),s=function(t){var e=r.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=s(a),m=n,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(f,o(o({ref:e},p),{},{components:a})):r.createElement(f,o({ref:e},p))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},17293:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={},o="Abstract Factory",l={unversionedId:"interviewPrep/designPatterns/Creational_patterns/AbstractFactory/readme",id:"interviewPrep/designPatterns/Creational_patterns/AbstractFactory/readme",title:"Abstract Factory",description:"- it is an extension of the factory design pattern",source:"@site/docs/interviewPrep/designPatterns/Creational_patterns/AbstractFactory/readme.md",sourceDirName:"interviewPrep/designPatterns/Creational_patterns/AbstractFactory",slug:"/interviewPrep/designPatterns/Creational_patterns/AbstractFactory/",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/AbstractFactory/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Creational_patterns/AbstractFactory/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creational Patterns",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/"},next:{title:"C++ Example",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/AbstractFactory/cPlusPlus/"}},c={},s=[{value:"Allows you to create families of related objects without specifying a concrete class for each object",id:"allows-you-to-create-families-of-related-objects-without-specifying-a-concrete-class-for-each-object",level:2},{value:"Analogy:",id:"analogy",level:3},{value:"Coding terms:",id:"coding-terms",level:3},{value:"Structure",id:"structure",level:2},{value:"Summary",id:"summary",level:2},{value:"When to apply",id:"when-to-apply",level:2},{value:"Pros and Cons",id:"pros-and-cons",level:2}],p={toc:s};function u(t){let{components:e,...i}=t;return(0,n.kt)("wrapper",(0,r.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"abstract-factory"},"Abstract Factory"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"it is an extension of the factory design pattern"),(0,n.kt)("li",{parentName:"ul"},"it is needed when making an implementation or a factory that is more dynamic",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"which is to be able to add more features easily to the factory without needing to modify the factory again"))),(0,n.kt)("li",{parentName:"ul"},"better to create a factory first before modifying it into an abstract factory")),(0,n.kt)("h2",{id:"allows-you-to-create-families-of-related-objects-without-specifying-a-concrete-class-for-each-object"},"Allows you to create families of related objects without specifying a concrete class for each object"),(0,n.kt)("h3",{id:"analogy"},"Analogy:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Imagine that you're a clothing designer"),(0,n.kt)("li",{parentName:"ul"},"You need to build types of clothing",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"e.g.: shirts, sweaters, jeans"))),(0,n.kt)("li",{parentName:"ul"},"You also need sizes of clothing",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"e.g.: petites, regular, tall"))),(0,n.kt)("li",{parentName:"ul"},"To build these with Abstract Factory pattern",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"create an interface to build the clothing type (e.g.: sweater)"),(0,n.kt)("li",{parentName:"ol"},"create another interface to build the size (e.g.: petites)")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"These 2 interfaces will work together to generate a (petite-sized sweater)")))),(0,n.kt)("h3",{id:"coding-terms"},"Coding terms:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Imagine you\'re creating a "submit" button that will be used on windows and mac operating systems'),(0,n.kt)("li",{parentName:"ul"},"The button is the same object with the same functionality",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"only with a different class (Windows or Mac) depending on the operating system")))),(0,n.kt)("h2",{id:"structure"},"Structure"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Abstract Factory",src:a(25318).Z,width:"1448",height:"962"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Abstract Products declare interfaces for a set of distinct but related products which make up a product family")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Concrete Products are various implementations of abstract products, grouped by variants. Each abstract product (chair/sofa) must be implemented in all given variants (Victorian/Modern)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The Abstract Factory interface declares a set of methods for creating each of the abstract products")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Concrete Factories implement creation methods of the abstract factory"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Each concrete factory corresponds to a specific variant of products and creates only those product variants"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Although concrete factories instantiate concrete products, signatures of their creation methods must return corresponding abstract products"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This way the client code that uses a factory doesn\u2019t get coupled to the specific variant of the product it gets from a factory"),(0,n.kt)("li",{parentName:"ul"},"The Client can work with any concrete factory/product variant, as long as it communicates with their objects via abstract interfaces")))),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"makes the factory process easier by offering a generic interface to build a family of related objects")),(0,n.kt)("h2",{id:"when-to-apply"},"When to apply"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We should get benefits from usage of the Abstract Factory while working with various families of related products",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"In this case we are removing the dependency on concrete classes of these products and allowing future extensibility"))),(0,n.kt)("li",{parentName:"ul"},"The abstract factory encapsulates the details of object creation",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"But client code can still work with all types of created objects, since their interface is initially defined")))),(0,n.kt)("h2",{id:"pros-and-cons"},"Pros and Cons"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"pros"),(0,n.kt)("th",{parentName:"tr",align:null},"cons"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ensures compatibility of products"),(0,n.kt)("td",{parentName:"tr",align:null},"code becomes more complicated after introducing lots of new interfaces")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"gets rid of coupling"),(0,n.kt)("td",{parentName:"tr",align:null},"after extending abstract factory interface all concrete factories will need to be updated to implement it")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"extracts the product creation code into one place. (Single responsibility)"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"introducing new variants without breaking existing code. (Open/Closed)"),(0,n.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0},25318:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/abstract_factory-b81ea05202c266f54cbe4a515b230b64.png"}}]);