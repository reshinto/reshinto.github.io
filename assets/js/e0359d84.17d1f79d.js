"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[7783],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5352:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={},i="Object Oriented Programming",o={unversionedId:"basics/OOP",id:"basics/OOP",title:"Object Oriented Programming",description:"- it is a style of programming or a programming paradigm",source:"@site/docs/basics/OOP.md",sourceDirName:"basics",slug:"/basics/OOP",permalink:"/docs/basics/OOP",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/basics/OOP.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Test-Driven Development (TDD)",permalink:"/docs/automatedTests/testDrivenDevelopment"},next:{title:"Asynchronous",permalink:"/docs/basics/asynchronous"}},s={},p=[{value:"4 pillars of OOP",id:"4-pillars-of-oop",level:2},{value:"Value types vs Reference types",id:"value-types-vs-reference-types",level:2},{value:"Value types",id:"value-types",level:3},{value:"Reference types",id:"reference-types",level:3},{value:"Factory",id:"factory",level:2},{value:"Constructor",id:"constructor",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"object-oriented-programming"},"Object Oriented Programming"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"it is a style of programming or a programming paradigm"),(0,r.kt)("li",{parentName:"ul"},"it combines a group of related variables and functions into a unit",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the unit is referred to as an object"),(0,r.kt)("li",{parentName:"ul"},"the variables are referred to as properties"),(0,r.kt)("li",{parentName:"ul"},"the functions are referred to as methods"))),(0,r.kt)("li",{parentName:"ul"},"e.g.: a CAR object",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'has properties of "make, model, color"'),(0,r.kt)("li",{parentName:"ul"},'and methods of "start(), stop(), move()"')))),(0,r.kt)("h2",{id:"4-pillars-of-oop"},"4 pillars of OOP"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Encapsulation"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"group related variables and functions that operate on them into objects",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"thus reduce complexity and increase reusability"))),(0,r.kt)("li",{parentName:"ul"},"(summary) hiding the code and data into a single unit"),(0,r.kt)("li",{parentName:"ul"},"in other words, it packages complex functionality for ease of programming",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"access to individual functions can be restricted"),(0,r.kt)("li",{parentName:"ul"},"hide complex functionality in methods"),(0,r.kt)("li",{parentName:"ul"},"the true nature of encapsulated data may also be hidden"))),(0,r.kt)("li",{parentName:"ul"},"benefits of encapsulation",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"breaking functionality into small maintainable units"),(0,r.kt)("li",{parentName:"ul"},"grouping functions and data together"),(0,r.kt)("li",{parentName:"ul"},"supporting testing of software at a granular level")))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// procedural programming\nlet baseSalary = 30000;\nlet overtime = 10;\nlet rate = 20;\nfunction getWage(baseSalary, overtime, rate) {\n  return baseSalary + overtime * rate;\n}\ngetWage(baseSalary, overtime, rate);\n\n// encapsulation - this is better because getWage method does not requires any parameters\n// the fewer the number of parameters, the easier it is to use and maintain that function\nlet employee = {\n  baseSalary: 30000,\n  overtime: 10,\n  rate: 20,\n  getWage: function () {\n    return this.baseSalary + this.overtime * this.rate;\n  },\n};\nemployee.getWage();\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Abstraction"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"hide some of the properties and methods from outside",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"this will make the interface of those objects simpler",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"an object with a few properties and methods is easier to understand than an object with several properties and methods"))),(0,r.kt)("li",{parentName:"ul"},"this will help reduce the impact of change",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"in the future, if changes were to occur in the inner or private methods, none of the changes will leak outside",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"because there isn't any code that touches the methods outside of their content object"))))))),(0,r.kt)("li",{parentName:"ul"},"(summary) hide the details and the complexity and show only the essentials, which reduce complexity & isolate the impact of changes")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'function Employee(name, age, baseSalary) {\n  this.name = name;\n  this.age = age;\n  this.baseSalary = baseSalary;\n  let monthlyBonus = 1500;\n\n  // abstraction creation\n  let calculateFinalSalary = function () {\n    let finalSalary = baseSalary + monthlyBonus;\n    console.log(finalSalary);\n  };\n\n  this.getEmployeeDetails = function () {\n    console.log(this.name);\n    calculateFinalSalary; // abstraction implementation;\n  };\n}\n\nconst employee = new Employee("John", 30, 2000);\nemployee.getEmployeeDetails();\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Inheritance"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"it is a mechanism that allows you to eliminate redundant code"),(0,r.kt)("li",{parentName:"ul"},"it has a relationship between classes that lets you inherit or extend functionality from 1 class to another"),(0,r.kt)("li",{parentName:"ul"},"not all Object Oriented languages are the same",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"c++ supports multiple inheritance"),(0,r.kt)("li",{parentName:"ul"},"java only supports single inheritance",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"each class can extend or inherit functionality from only 1 other class"),(0,r.kt)("li",{parentName:"ul"},"classes can implement multiple interfaces"))))),(0,r.kt)("li",{parentName:"ul"},"inheritance relationship",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Parent/Child, Base/Derived, Superclass/Subclass")))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'class Employee {\n  // parent\n  raiseAmt = 1.04;\n\n  constructor(first, last, pay) {\n    this.first = first;\n    this.last = last;\n    this.pay = pay;\n  }\n\n  applyRaise() {\n    this.pay = parseInt(this.pay * this.raise_amt);\n  }\n}\n\n// Inheritance\nclass Developer extends Employee {\n  // child\n  raiseAmt = 1.1;\n\n  constructor(first, last, pay, progLang) {\n    super(first, last, pay); // implement parent class init method\n    this.progLang = progLang;\n  }\n}\n\nconst dev = new Developer("abc", "xyz", 5000, "Javascript");\nconsole.log(dev.pay); // 5000\ndev.applyRaise();\nconsole.log(dev.pay); // 5500\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Polymorphism - literally means many forms"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"it addresses an object as either super or subtype"),(0,r.kt)("li",{parentName:"ul"},"writes methods that accept supertype as arguments"),(0,r.kt)("li",{parentName:"ul"},"passes instances of subtypes"),(0,r.kt)("li",{parentName:"ul"},"increases code flxibility and reusability"),(0,r.kt)("li",{parentName:"ul"},"has 2 types",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Compile time polymorphism (static binding)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"e.g.: method overloading",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"having several methods present in a class with the same name but different types/order/number of parameters"))))),(0,r.kt)("li",{parentName:"ol"},"Runtime polymorphism (dynamic binding)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"e.g.: method overriding",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"means changing the implementation of an inherited method"),(0,r.kt)("li",{parentName:"ul"},"Overriding is about same method, same signature but different classes connected through inheritance")))))))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n\n  makeSound() {\n    console.log("Generic animal sound");\n  }\n}\n\n// polymorphism - override the makeSound method\nclass Dog extends Animal {\n  constructor(name) {\n    super(name);\n  }\n\n  makeSound() {\n    console.log("Woof!");\n  }\n}\nconst dog = new Dog("Happy");\ndog.makeSound(); // "Woof!"\n')))),(0,r.kt)("h2",{id:"value-types-vs-reference-types"},"Value types vs Reference types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"primitives are copied by their value")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// example 1\nlet x = 0;\nlet y = x;\nx = 20; // y = 0, x = 20\n\n// example 2\nlet number = 10;\nfunction increase(number) {\n  number++;\n}\nincrease(number);\nconsole.log(number); // number = 10\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"objects are copied by their reference")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// example 1\nlet x = {value: 0};\nlet y = x;\nx.value = 20; // y = { value: 20 }\n\n// example 2\nlet obj = {value: 10};\nfunction increase(obj) {\n  obj.value++;\n}\nincrease(obj);\nconsole.log(obj); // { value: 11 }\n")),(0,r.kt)("h3",{id:"value-types"},"Value types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"number, string, boolean, symbol, undefined, null")),(0,r.kt)("h3",{id:"reference-types"},"Reference types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"object, function, array")),(0,r.kt)("h2",{id:"factory"},"Factory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// normal code - needs to make multiple of the same objects if have different radius value\nconst circle = {\n  radius: 1,\n  draw: function () {\n    console.log("draw");\n  },\n};\ncircle.draw();\n\n// factory function - only need to change the value in the parameter during initialization\nfunction createCircle(radius) {\n  return {\n    radius,\n    draw: function () {\n      console.log("draw");\n    },\n  };\n}\n\nconst circle = createCircle(1);\ncircle.draw();\n')),(0,r.kt)("h2",{id:"constructor"},"Constructor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// constructor function\nfunction Circle(radius) {\n  this.radius = radius;\n  this.draw = function () {\n    console.log("draw");\n  };\n}\n\nconst circle = new Circle(1);\ncircle.draw();\n')))}u.isMDXComponent=!0}}]);