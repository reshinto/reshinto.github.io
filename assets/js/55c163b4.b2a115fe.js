"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[1651],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(a),m=i,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||r;return a?n.createElement(d,s(s({ref:t},p),{},{components:a})):n.createElement(d,s({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},49259:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const r={},s="Inheritance in Details",o={unversionedId:"interviewPrep/basics/programmingParadigm/OOP/inheritanceInDetails",id:"interviewPrep/basics/programmingParadigm/OOP/inheritanceInDetails",title:"Inheritance in Details",description:"- JavaScript remains a prototype based, although the class keyword was introduced in ES2015 but is a syntactical sugar",source:"@site/docs/interviewPrep/basics/programmingParadigm/OOP/inheritanceInDetails.md",sourceDirName:"interviewPrep/basics/programmingParadigm/OOP",slug:"/interviewPrep/basics/programmingParadigm/OOP/inheritanceInDetails",permalink:"/docs/interviewPrep/basics/programmingParadigm/OOP/inheritanceInDetails",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/basics/programmingParadigm/OOP/inheritanceInDetails.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Duck Typing",permalink:"/docs/interviewPrep/basics/programmingParadigm/OOP/duckTyping"},next:{title:"Interface",permalink:"/docs/interviewPrep/basics/programmingParadigm/OOP/interface"}},l={},c=[{value:"Recognizing Where to Use Inheritance",id:"recognizing-where-to-use-inheritance",level:2},{value:"Creating an Abstract Superclass with Shared Abstract Behavior",id:"creating-an-abstract-superclass-with-shared-abstract-behavior",level:2},{value:"Template Method Pattern: Default Implementation",id:"template-method-pattern-default-implementation",level:2},{value:"Using Hook Messages: Decoupling Subclasses",id:"using-hook-messages-decoupling-subclasses",level:2},{value:"Summary",id:"summary",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"inheritance-in-details"},"Inheritance in Details"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"JavaScript remains a prototype based, although the ",(0,i.kt)("inlineCode",{parentName:"li"},"class")," keyword was introduced in ",(0,i.kt)("inlineCode",{parentName:"li"},"ES2015")," but is a syntactical sugar"),(0,i.kt)("li",{parentName:"ul"},"Inheritance for JavaScript has only 1 construct ",(0,i.kt)("inlineCode",{parentName:"li"},"objects"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"each object has a private property which holds a link to another object called ",(0,i.kt)("inlineCode",{parentName:"li"},"prototype")),(0,i.kt)("li",{parentName:"ul"},"that prototype object has a prototype of its own and so on until the object is reached with null as its prototype",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"by definition ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," has no prototype and acts as the final link in the prototype chain"))))),(0,i.kt)("li",{parentName:"ul"},"nearly all objects in JavaScript are instances of ",(0,i.kt)("inlineCode",{parentName:"li"},"Object")," which sits on the top of a prototype chain"),(0,i.kt)("li",{parentName:"ul"},"the confusion is JavaScript's weakness",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"however, the prototypical inheritance model itself is more powerful than the classic model",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g.: it is trivial to build a classic model on top of a prototypal model"))))),(0,i.kt)("li",{parentName:"ul"},"inheritance mechanisms play a key role in the object approach in terms of extensibility and reuse, model the relationship (",(0,i.kt)("inlineCode",{parentName:"li"},"IS-A relationship"),")",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"and exploit the relationship between the base class and its descendant"))),(0,i.kt)("li",{parentName:"ul"},"Experienced developers can tell you that overuse of inheritance leads to code that is difficult to understand and maintain",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This is primarily because the ",(0,i.kt)("inlineCode",{parentName:"li"},"IS-A relationship")," is much stronger than the relationship that appears during composition"),(0,i.kt)("li",{parentName:"ul"},"Therefore, when making changes, need to be very careful and see if any methods have been overridden, what is the contract of the parent class, at the level of coupling"))),(0,i.kt)("li",{parentName:"ul"},"Inheritance is essentially an automatic message delegation mechanism"),(0,i.kt)("li",{parentName:"ul"},"Inheritance creates a relationship in which if one object cannot respond to a received message, it passes that message to another",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"this transfer happens automatically")))),(0,i.kt)("h2",{id:"recognizing-where-to-use-inheritance"},"Recognizing Where to Use Inheritance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"problem"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'class Bicycle {\n  constructor(options) {\n    // previous options\n    this.style = options.style;\n    this.frontShock = options.frontShock;\n  }\n\n  // becomes strange when a new style is added\n  spares() {\n    if (this.style === "road") {\n      return {\n        chain: "11-speed",\n        tireSize: "28",\n        tapeColor: this.tapeColor,\n      };\n    }\n\n    return {\n      chain: "11-speed",\n      tireSize: "29",\n      frontShock: this.frontShock,\n    };\n  }\n}\n\nconst crossCountryBike = new Bicycle({\n  style: "XC",\n  size: "M",\n  frontShock: "mountain",\n});\nconst roadBike = new Bicycle({style: "road", size: "M", tapeColor: "red"});\n')))),(0,i.kt)("h2",{id:"creating-an-abstract-superclass-with-shared-abstract-behavior"},"Creating an Abstract Superclass with Shared Abstract Behavior"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"abstract class",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"can store both abstract and concrete methods",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"abstract methods must be implemented to use, concrete methods can be used without overriding them"))),(0,i.kt)("li",{parentName:"ul"},"all the abstract methods must be implemented in every non-abstract subclass",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You always need to implement all the abstract methods and there should be no unused behavior in any subclass, if such thing happens this may be a sign of incorrect inheritance structure"))),(0,i.kt)("li",{parentName:"ul"},"stores the behaviour which is common to all subclasses",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"subclasses inherited an abstract class should fully use its functionality, otherwise you need to review the inheritance structure")))))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Bicycle Abstract Class",src:a(11025).Z,width:"1034",height:"832"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"solution: use Abstract class and inherit"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"abstract class Bicycle {\n  // keep only common parts\n}\n\nclass RoadBike extends Bicycle {\n  constructor(options) {\n    super(options);\n\n    this.tapeColor = options.tapeColor;\n  }\n\n  spares() {\n    return {\n      ...super.spares(),\n      tapeColor: this.tapeColor,\n    };\n  }\n}\n\nclass MountainBike extends Bicycle {\n  constructor(options) {\n    super(options);\n\n    this.frontShock = options.frontShock;\n  }\n\n  spares() {\n    return {\n      ...super.spares(),\n      frontShock: this.frontShock,\n    };\n  }\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Abstract classes exist in order to inherit from them"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"They provide a common repository that stores the behavior common to all subclasses"),(0,i.kt)("li",{parentName:"ul"},"each of them is a specialization of an abstract class"),(0,i.kt)("li",{parentName:"ul"},"It almost never makes sense to create an abstract superclass with a single subclass")))),(0,i.kt)("h2",{id:"template-method-pattern-default-implementation"},"Template Method Pattern: Default Implementation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This gives subclasses the ability to inject specialization by overriding the default values set in the parent class")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This technique of describing the basic structure/algorithm in a superclass and redefining parts of this structure/algorithm to those that are already specific for a particular class is called the template method")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"allows you to define the base algorithm in the superclass and control its lifecycle and then override only needed parts in the subclass")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"solution: use Template method"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'abstract class Bicycle {\n  protected readonly defaultChain = "11-speed";\n\n  constructor(opts) {\n    // ...\n    this.chain = opts.chain || this.defaultChain;\n    this.tireSize = opts.tireSize || this.defaultTireSize;\n  }\n}\n\nclass RoadBike extends Bicycle {\n  protected readonly defaultTireSize = "28";\n}\n\nclass MountainBike extends Bicycle {\n  protected readonly defaultTireSize = "29";\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"now there are new problems:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Mountain bike and road bike classes depend on their abstract class"),(0,i.kt)("li",{parentName:"ul"},"Abstract class depends on children"),(0,i.kt)("li",{parentName:"ul"},"If you forget to call super methods \u2013 the result might not contain all data required"),(0,i.kt)("li",{parentName:"ul"},"Users of road and mountain bike depend on the abstract class, even if they don't know anything about it")))),(0,i.kt)("h2",{id:"using-hook-messages-decoupling-subclasses"},"Using Hook Messages: Decoupling Subclasses"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This strategy removes the knowledge of the algorithm from the subclass and returns control to the superclass"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Which was done by adding the postInitialize method"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"solution: Using Hook Messages"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"abstract class Bicycle {\n  constructor(opts) {\n    this.size = opts.size;\n    this.chain = opts.chain;\n    this.tireSize = opts.tireSize;\n\n    this.postInitialize(opts);\n  }\n\n  protected postInitialize() {}\n\n  spares() {\n    return {\n      tireSize: this.tireSize,\n      chain: this.chain,\n      ...this.localSpares(),\n    };\n  }\n}\n\nclass RoadBike extends Bicycle {\n  protected postInitialize(opts) {\n    this.tapeColor = opts.tapeColor;\n  }\n\n  protected localSpares() {\n    return {tapeColor: this.tapeColor};\n  }\n}\n\nclass MountainBike extends Bicycle {\n  protected postInitialize(opts) {\n    this.frontShock = opts.frontShock;\n  }\n\n  protected localSpares() {\n    return {frontShock: this.frontShock};\n  }\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"RoadBike and MountainBike no longer control the initialization process"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"but instead bring specialization to a more abstract algorithm"),(0,i.kt)("li",{parentName:"ul"},"This algorithm is defined in the abstract superclass Bicycle, which in turn is responsible for sending postInitialize"),(0,i.kt)("li",{parentName:"ul"},"To achieve this result Bicycle constructor should always be called, this will happen automatically if derived classes will have no constructor"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This same technique can be used to remove the dispatch of super in the spares method"))),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Inheritance solves the problem of related types that share a great deal of common behavior but differ across some dimension"),(0,i.kt)("li",{parentName:"ul"},"The best way to create an abstract superclass is by pushing code up from concrete subclasses"),(0,i.kt)("li",{parentName:"ul"},"Abstract superclasses use the template method pattern to invite inheritors to supply specializations",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"they use hook methods to allow these inheritors to contribute these specializations without being forced to send super"))),(0,i.kt)("li",{parentName:"ul"},"Well-designed inheritance hierarchies are easy to extend with new subclasses, even for programmers who know very little about the application")))}u.isMDXComponent=!0},11025:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bicycleAbstractClass-d53e968a1045bf6ac0b1a453c7e9e69d.png"}}]);