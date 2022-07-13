"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[1127],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(a),d=r,f=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},35818:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const i={},o="Main Concepts",l={unversionedId:"Technologies/basics/programmingParadigm/FP/mainConcepts",id:"Technologies/basics/programmingParadigm/FP/mainConcepts",title:"Main Concepts",description:"Immutability",source:"@site/docs/Technologies/basics/programmingParadigm/FP/mainConcepts.md",sourceDirName:"Technologies/basics/programmingParadigm/FP",slug:"/Technologies/basics/programmingParadigm/FP/mainConcepts",permalink:"/docs/Technologies/basics/programmingParadigm/FP/mainConcepts",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/Technologies/basics/programmingParadigm/FP/mainConcepts.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Functional Programming in JavaScript",permalink:"/docs/Technologies/basics/programmingParadigm/FP/functionalProgrammingInJS"},next:{title:"Object Oriented Programming",permalink:"/docs/Technologies/basics/programmingParadigm/OOP/"}},s={},m=[{value:"Immutability",id:"immutability",level:2},{value:"Side Effects",id:"side-effects",level:3},{value:"Pure Functions",id:"pure-functions",level:3},{value:"No Shared State",id:"no-shared-state",level:2},{value:"Problems with shared state",id:"problems-with-shared-state",level:3},{value:"How to avoid it",id:"how-to-avoid-it",level:3},{value:"Composition",id:"composition",level:2},{value:"Composition over inheritance",id:"composition-over-inheritance",level:3}],c={toc:m};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"main-concepts"},"Main Concepts"),(0,r.kt)("h2",{id:"immutability"},"Immutability"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The main rule of an immutable object is it cannot be modified after creation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Conversely, a mutable object is each object which can be modified after creation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The data flow in the program is lossy if the immutability principle is not followed"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"that is why it is the main concept of functional programming"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"example: if data is mutated some bugs which are hard to find can be hidden"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"version 1"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const stat = [\n  {name: "John", score: 1.003},\n  {name: "Lora", score: 2},\n  {name: "Max", score: 3.76},\n];\n\n// expecting to create a new array, but contents in array got modified instead\n// this is because inside the stat, item got modified\nconst statScoreInt = stat.map((el) => {\n  el.score = Math.floor(el.score);\n  el.name = el.name;\n\n  return el;\n});\n\nconsole.log(stat); // [{ name: "John", score: 1 }, { name: "Lora", score: 2 }, { name: "Max", score: 3 }]\nconsole.log(statScoreInt); // [{ name: "John", score: 1 }, { name: "Lora", score: 2 }, { name: "Max", score: 3 }]\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"version 2"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const stat = [\n  {name: "John", score: 1.003},\n  {name: "Lora", score: 2},\n  {name: "Max", score: 3.76},\n];\n\n// new copied array got created as expected\nconst statScoreInt = stat.map((el) => {\n  return {score: Math.floor(el.score), ...el};\n});\n\nconsole.log(stat); // [{ name: "John", score: 1.003 }, { name: "Lora", score: 2 }, { name: "Max", score: 3.76 }]\nconsole.log(statScoreInt); // [{ name: "John", score: 1 }, { name: "Lora", score: 2 }, { name: "Max", score: 3 }]\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In JavaScript, it might be easy to confuse const with immutability"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The variable which cannot be redeclared is created by using ",(0,r.kt)("inlineCode",{parentName:"li"},"const")," but immutable objects are not created by const"),(0,r.kt)("li",{parentName:"ul"},"You can't change the object that the binding refers to, but you can still change the properties of the object",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"which means that bindings created with const are mutable"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Immutable objects can't be changed at all"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can make a value truly immutable by ",(0,r.kt)("inlineCode",{parentName:"li"},"deep-freezing")," the object"),(0,r.kt)("li",{parentName:"ul"},"JavaScript has a method that freezes an object one-level deep (in order to freeze an object deeply, recursion could be used to freeze each property and nested objects)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"example"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"There are several libraries in JavaScript which try to follow this principle, for example, Immutable.js")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const a = Object.freeze({\n  greeting: "Hello",\n  subject: "student",\n  mark: "!",\n});\n\na.greeting = "Goodbye";\n// Error: Cannot assign to read only property \'foo\' of object Object\n')))),(0,r.kt)("h3",{id:"side-effects"},"Side Effects"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"it is a side effect",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"if state changes are observable outside the called function"),(0,r.kt)("li",{parentName:"ul"},"they are not returned value of the function"))),(0,r.kt)("li",{parentName:"ul"},"Side effects include:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Modifying any external variable or object property",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"e.g., a global variable, or a variable in the parent function scope chain"))),(0,r.kt)("li",{parentName:"ul"},"Logging to the console"),(0,r.kt)("li",{parentName:"ul"},"Alert"),(0,r.kt)("li",{parentName:"ul"},"Writing to the screen, in other words, replacing the content of a specific tag",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"querySelector(), getElementById(), etc."))),(0,r.kt)("li",{parentName:"ul"},"Writing to a file"),(0,r.kt)("li",{parentName:"ul"},"The HTTP request might have side effects",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"therefore the function that triggers the request transitively have side effects"))),(0,r.kt)("li",{parentName:"ul"},"Triggering any external process"),(0,r.kt)("li",{parentName:"ul"},"Calling any other functions with side effects"))),(0,r.kt)("li",{parentName:"ul"},"In functional programming side effects are mostly avoided",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"It makes a program much easier to understand, and much easier to test"))),(0,r.kt)("li",{parentName:"ul"},"a program without side effects does nothing",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the code does not write to or read from a database, does not make any requests, does not change UI, etc.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"it does not bring any value"),(0,r.kt)("li",{parentName:"ul"},"So we cannot completely avoid side effects"))))),(0,r.kt)("li",{parentName:"ul"},"to isolate side effects from the rest of your software",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"by keeping side effects separately from the rest of the software",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the application will be much easier to extend, refactor, debug, test, and maintain"))))),(0,r.kt)("li",{parentName:"ul"},"That is why a lot of front-end frameworks suggest using state management tools along with the library",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Because it separates components rendering from state management"),(0,r.kt)("li",{parentName:"ul"},"they are loosely coupled modules"),(0,r.kt)("li",{parentName:"ul"},"ReactJS and Redux are examples of that")))),(0,r.kt)("h3",{id:"pure-functions"},"Pure Functions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A function is called pure if it has the following properties:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Given the same input, always returns the same output"),(0,r.kt)("li",{parentName:"ul"},"Function without side effects"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A pure function also can be called a deterministic function")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JS arrays methods such as"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"map, filter, reduce etc., are examples of pure function"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A pure function does not depend on any state, it only depends on input parameters")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"example 1: Pure function: no side effect"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"there are no side effects because price comes as an argument")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const doubledPrice = (price) => price * 2;\ndoubledPrice(2);\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"example 2: not pure function: have side effect"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"there is a side effect because",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the price is changed inside the function, but price is declared outside the doubledPrice scope")))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"let price = 2;\nconst doubledPrice = () => (price = price * 2);\ndoubledPrice();\n")))),(0,r.kt)("h2",{id:"no-shared-state"},"No Shared State"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Shared state")," is a memory space (could be an object or simple variable) that is reachable from all program parts",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In other words, it is global and exists in shared scope"),(0,r.kt)("li",{parentName:"ul"},"It also could be passed as a property between scopes"),(0,r.kt)("li",{parentName:"ul"},"If two or more application parts change the same data, then the data is a shared state")))),(0,r.kt)("h3",{id:"problems-with-shared-state"},"Problems with shared state"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the state is changing from more than one place in the application"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"there is a risk of one modification preventing another part of the application to work with the actual data"),(0,r.kt)("li",{parentName:"ul"},"So it might lead to strange hard to track bugs"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"example"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Functions ",(0,r.kt)("inlineCode",{parentName:"li"},"main()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"minor()")," do something and wants to log an ",(0,r.kt)("inlineCode",{parentName:"li"},"arr")),(0,r.kt)("li",{parentName:"ul"},"Function ",(0,r.kt)("inlineCode",{parentName:"li"},"logGrocery()")," logs elements into console",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"However, it removes elements from the array while logging them"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"logGrocery()")," breaks ",(0,r.kt)("inlineCode",{parentName:"li"},"minor()")," and that is why there is an undefined")))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const arr = ["bread", "milk", "wine"];\n\nfunction logGrocery(arr) {\n  for (let i = 0; i <= arr.length + 1; i++) {\n    console.log(arr.shift());\n  }\n}\n\nfunction main() {\n  // some code\n  logGrocery(arr);\n}\n\nfunction minor() {\n  // some code\n  logGrocery(arr);\n}\n\nmain();\nminor();\n\n// bread\n// milk\n// wine\n// undefined (1)\n')))),(0,r.kt)("h3",{id:"how-to-avoid-it"},"How to avoid it"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We can avoid shared state by copying data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Until we are reading from a shared state without any modification we are safe")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Before doing some modifications we need to ",(0,r.kt)("inlineCode",{parentName:"p"},"un-share")," our state")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"example"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Functions ",(0,r.kt)("inlineCode",{parentName:"li"},"main()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"minor()")," do something and wants to log an ",(0,r.kt)("inlineCode",{parentName:"li"},"arr")),(0,r.kt)("li",{parentName:"ul"},"Function ",(0,r.kt)("inlineCode",{parentName:"li"},"logGrocery()")," logs elements into console",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The code creates a new variable ",(0,r.kt)("inlineCode",{parentName:"li"},"localArray"),", a copy of ",(0,r.kt)("inlineCode",{parentName:"li"},"arr")),(0,r.kt)("li",{parentName:"ul"},"So the ",(0,r.kt)("inlineCode",{parentName:"li"},"localArray")," is modified, and it is a new declaration on each call"))),(0,r.kt)("li",{parentName:"ul"},"Avoiding mutations by updating non-destructively")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const arr = ["bread", "milk", "wine"];\n\nfunction logGrocery(arr) {\n  const localArr = [...arr]; // important\n\n  for (let i = 0; i <= localArr.length + 1; i++) {\n    console.log(localArr.shift());\n  }\n}\n\nfunction main() {\n  // some code\n  logGrocery(arr);\n}\n\nfunction minor() {\n  // some code\n  logGrocery(arr);\n}\n\nmain();\nminor();\n\n// bread\n// milk\n// wine\n// bread\n// milk\n// wine\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"example: Preventing mutations by making data immutable"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"We can prevent mutations of shared data by making that data immutable",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If data is immutable, it can be shared without any risks"),(0,r.kt)("li",{parentName:"ul"},"In particular, there is no need to copy defensively")))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const shoppingList = [\"bread\", \"milk\", \"wine\"];\n\nfunction addToShoppingList(arr, item) {\n  return [...arr, item];\n}\n\nfunction main(item) {\n  // some code\n  return addToShoppingList(arr, item);\n}\n\nconst withFruit = main(\"fruit\");\n\nconsole.log(withFruit); // ['bread', 'milk', 'wine', 'fruit']\nconsole.log(shoppingList); // ['bread', 'milk', 'wine']\n")))),(0,r.kt)("h2",{id:"composition"},"Composition"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Function composition")," is a combination of two or more functions"),(0,r.kt)("li",{parentName:"ul"},"The single function does a small piece which is not valuable for an application",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"in order to achieve the desired result, small functions have to be combined together"),(0,r.kt)("li",{parentName:"ul"},"can imagine composing functions as pipes of functions that data has to go through, so that outcome is reached"))),(0,r.kt)("li",{parentName:"ul"},"In functional programming, it is preferable to use composition over inheritance")),(0,r.kt)("h3",{id:"composition-over-inheritance"},"Composition over inheritance"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"composition is easier in maintenance and for reusability purposes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It is easy to refactor the code if needed")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Composition is a simple mental model, so there is no need to think in advance of hierarchy, and we can combine all small pieces in the way that we need them to be")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"example: combines the power of objects and functional programming"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const dog = (name) => {\n  const self = {\n    name,\n  };\n\n  return self;\n};\n\nconst buddy = dog("Buddy");\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"example 1: using composition"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const canSayHi = (self) => ({\n  sayHi: () => console.log(`Hi! I'm ${self.name}`),\n});\n\nconst canEat = () => ({\n  eat: (food) => console.log(`Eating ${food}...`),\n});\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const behaviors = (self) => Object.assign({}, canSayHi(self), canEat());\n\nconst dog = (name) => {\n  const self = {\n    name,\n  };\n\n  const dogBehaviors = (self) => ({\n    bark: () => console.log("Ruff!"),\n  });\n\n  return Object.assign(self, behaviors(self), dogBehaviors(self));\n};\n\nconst buddy = dog("Buddy");\n\nbuddy.sayHi(); // Hi! I\'m Buddy\nbuddy.eat("Petfood"); // Eating Petfood...\nbuddy.bark(); // Ruff!\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const cat = (name) => {\n  const self = {\n    name,\n  };\n\n  const catBehaviors = (self) => ({\n    meow: () => console.log("Meow!"),\n    haveLunch: (food) => {\n      self.eat(food);\n    },\n  });\n\n  return Object.assign(self, catBehaviors(self), canEat());\n};\n\nconst kitty = cat("Kitty");\n\nkitty.haveLunch("fish"); // Eating fish...\nkitty.meow(); // Meow!\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"example 2: using composition to create a statistic board with the possibility to sort, find all occurrences, and filter by prop"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"compose")," function is a self-invoking function that can take any number of parameters and execute right-to-left",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"in other words, performs right-to-left function composition\nSo, you can compose functions the way you need"),(0,r.kt)("li",{parentName:"ul"},"There is a possibility to filter and sort in one part of the application and filter and find in another without any duplication, by composing small reusable parts"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"self-invoking function")," is a nameless (anonymous) function that is invoked immediately after its definition")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const stat = [\n  {name: "Lora", score: 1.003},\n  {name: "Lora", score: 1.003},\n  {name: "Lora", score: 2},\n  {name: "Max", score: 3.76},\n];\n\nconst sort = (arr) => {\n  return arr.sort((a, b) => b.score - a.score);\n};\n\nconst filter = (params) => {\n  return (arr) => arr.filter((item) => item.name === params);\n};\n\nconst findAll = (params) => {\n  return (arr) => arr.filter((item) => item.score === params);\n};\n\nconst compose = (...funcs) => {\n  return (arr) => {\n    return funcs.reverse().reduce((acc, func) => func(acc), arr);\n  };\n};\n\nconsole.log(compose(filter("Lora"))(stat)); // [{ name: "Lora", score: 1.003 }, { name: "Lora", score: 1.003 }, { name: "Lora", score: 2 }]\nconsole.log(compose(findAll(1.003), filter("Lora"))(stat)); // [{ name: "Lora", score: 1.003 }, { name: "Lora", score: 1.003 }]\nconsole.log(compose(sort, filter("Lora"))(stat)); // [{ name: "Lora",score: 2 }, { name: "Lora",score: 1.003 }, { name: "Lora",score: 1.003 }]\n')))))}p.isMDXComponent=!0}}]);