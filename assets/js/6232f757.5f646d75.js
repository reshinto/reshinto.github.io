"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[3222],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return a?r.createElement(h,o(o({ref:t},m),{},{components:a})):r.createElement(h,o({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2157:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={},o="Composite",l={unversionedId:"interviewPrep/designPatterns/Structural_patterns/Composite/readme",id:"interviewPrep/designPatterns/Structural_patterns/Composite/readme",title:"Composite",description:"- originally defined as",source:"@site/docs/interviewPrep/designPatterns/Structural_patterns/Composite/readme.md",sourceDirName:"interviewPrep/designPatterns/Structural_patterns/Composite",slug:"/interviewPrep/designPatterns/Structural_patterns/Composite/",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Composite/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Structural_patterns/Composite/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bridge",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Bridge/"},next:{title:"Decorator",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Decorator/"}},s={},p=[{value:"Structure",id:"structure",level:2},{value:"Example",id:"example",level:2},{value:"Summary",id:"summary",level:2}],m={toc:p};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"composite"},"Composite"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"originally defined as",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Compose objects into tree structures to represent part-whole hierarchies",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"composite let clients treat individual objects and compositions of objects uniformly")))))),(0,n.kt)("h2",{id:"structure"},"Structure"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Composite",src:a(5630).Z,width:"804",height:"932"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The Component interface describes operations that are common to both simple and complex elements of the tree.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The Leaf is a basic element of a tree that doesn\u2019t have sub-elements."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Usually, leaf components end up doing most of the real work, since they don\u2019t have anyone to delegate the work to."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The Container (aka composite) is an element that has sub-elements: leaves or other containers."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A container doesn\u2019t know the concrete classes of its children."),(0,n.kt)("li",{parentName:"ul"},"It works with all sub-elements only via the component interface."),(0,n.kt)("li",{parentName:"ul"},"Upon receiving a request, a container delegates the work to its sub-elements, processes intermediate results and then returns the final result to the client."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The Client works with all elements through the component interface."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"As a result, the client can work in the same way with both simple or complex elements of the tree.")))),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The first element in this pattern is an abstract class that sits at the root of the hierarchical tree that this pattern aims to define."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"This abstract class, known as a component, should contain primitive properties as well as operations that would be shared with its derivatives."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"from the abstract component class, we get two kinds of derivative classes"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"a primitive element, known as a leaf, cannot have any children of their own",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The leaf represents a single element - for instance, a student or an employee or a product."))),(0,n.kt)("li",{parentName:"ol"},"a composite, which are collections of primitives",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"can host a collection of primitives (leaves) or composites as their children.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"a composite of primitives could be a catalog of mobile phones",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"or a science class with students"),(0,n.kt)("li",{parentName:"ul"},"or the Quality Assurance department with employees."))))),(0,n.kt)("li",{parentName:"ul"},"a composite of composites could be a catalog of mobile phones, laptops, and other products",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"where each category is a sub-catalog",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"a school with multiple subjects, each with multiple students."))))))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"both leaves and composites must implement a shared and uniform interface, as laid down by the parent class."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This ensures uniformity across the structure."),(0,n.kt)("li",{parentName:"ul"},"Additional methods may be added to the composites as needed, but they must adhere to the base interface.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This ensures that the client sees uniformity across composites and primitives, and uses the same interface.")))))))))),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Composite pattern allows you to define relationships and hierarchical trees of objects that stem from a base component class"),(0,n.kt)("li",{parentName:"ul"},"the structure allows you to define 2 kinds of nodes",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"A leaf node or a single entity like a product or a person",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"requests to leaf node are handled directly"))),(0,n.kt)("li",{parentName:"ol"},"A composite that contains collections of entities",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"composites can also be collection of composites"),(0,n.kt)("li",{parentName:"ul"},"requests sent to composites are first forwarded to member leaves, where they are individually handled")))),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"both leaves and composites implement a uniform interface for the client, and are great for describing a relationship between objects")))))}c.isMDXComponent=!0},5630:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/composite-9fb4bf6d3f029c88b3737e01b18cd3b4.png"}}]);