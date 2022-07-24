"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[2427],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?i.createElement(k,o(o({ref:t},c),{},{components:n})):i.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=n(83117),a=(n(67294),n(3905));const r={},o="Duck Typing",s={unversionedId:"interviewPrep/basics/programmingParadigm/OOP/duckTyping",id:"interviewPrep/basics/programmingParadigm/OOP/duckTyping",title:"Duck Typing",description:"- it is a role which can be applied to some specific class in some specific moment of time",source:"@site/docs/interviewPrep/basics/programmingParadigm/OOP/duckTyping.md",sourceDirName:"interviewPrep/basics/programmingParadigm/OOP",slug:"/interviewPrep/basics/programmingParadigm/OOP/duckTyping",permalink:"/docs/interviewPrep/basics/programmingParadigm/OOP/duckTyping",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/basics/programmingParadigm/OOP/duckTyping.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Design by Contract (DbC)",permalink:"/docs/interviewPrep/basics/programmingParadigm/OOP/designByContract"},next:{title:"Inheritance in Details",permalink:"/docs/interviewPrep/basics/programmingParadigm/OOP/inheritanceInDetails"}},l={},p=[{value:"If It Walks Like a Duck and Talks Like a Duck Then It&#39;s a Duck",id:"if-it-walks-like-a-duck-and-talks-like-a-duck-then-its-a-duck",level:2},{value:"Finding the Duck",id:"finding-the-duck",level:2},{value:"Writing Code that Relies on Ducks",id:"writing-code-that-relies-on-ducks",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"duck-typing"},"Duck Typing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"it is a role which can be applied to some specific class in some specific moment of time"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"this is the moment when we can extract the duck types"),(0,a.kt)("li",{parentName:"ul"},"duck type is not related to the interfaces or abstract classes, it is only about the specific class which plays specific role in specific moment of time"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"duck-typing feature ensures type safety")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"the technique in TypeScript is used to compare two objects by determining if they have the same type matching properties and objects members or not")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For example, if we assign an object with two properties and a method and the second object is only assigned with two properties"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The typescript compiler raises a compile-time error in such situations when we create a variable of object1 and assign it a variable of the second object type")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'class Pigeon {\n  sound = "coos";\n}\n\nclass Owl {\n  sound = "hoots";\n}\n\nclass Penguin {\n  sound = "peeps";\n  swim() {\n    console.log("I\'m a bird and i can swim");\n  }\n}\n\nlet pigeon: Pigeon = new Owl(); // Works\nlet owl: Owl = new Pigeon(); // Works\nlet pigeon2: Pigeon = new Penguin(); // Works\nlet penguin: Penguin = new Pigeon(); // Compile time error\n')))),(0,a.kt)("h2",{id:"if-it-walks-like-a-duck-and-talks-like-a-duck-then-its-a-duck"},"If It Walks Like a Duck and Talks Like a Duck Then It's a Duck"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"example"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"the prepare method will dramatically increase in the number of dependencies",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"it knows every class name, class method names and their arguments\nthe worst is this type of code will only increase its size and dependencies number with time")))),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class Mechanic {}\nclass TripCoordinator {}\nclass Driver {}\n\nclass Trip {\n  bicycles;\n  customers;\n  vehicle;\n\n  prepare(prepares: object[]) {\n    return prepares.map((preparer) => {\n      switch (preparer.constructor) {\n        case Mechanic:\n          return preparer.prepareBicycles(this.bicycles);\n        case TripCoordinator:\n          return preparer.buyFood(this.customers);\n        case Driver:\n          preparer.fillTank(this.vehicle);\n\n          return preparer.fillWaterTank(this.vehicle);\n      }\n    });\n  }\n}\n")))),(0,a.kt)("h2",{id:"finding-the-duck"},"Finding the Duck"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"after identifying the problem, we need to minimize dependencies number to make the ",(0,a.kt)("inlineCode",{parentName:"li"},"Trip")," functionality easily extensible without usage of switch case and other similar approaches"),(0,a.kt)("li",{parentName:"ul"},"every preparer class is responsible for preparing something for the ",(0,a.kt)("inlineCode",{parentName:"li"},"Trip"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"we can try to extract some ",(0,a.kt)("inlineCode",{parentName:"li"},"Preparer")," abstraction and call it a ",(0,a.kt)("inlineCode",{parentName:"li"},"duck type")),(0,a.kt)("li",{parentName:"ul"},"this becomes something similar to an interface")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class Trip {\n  prepare(prepares: {prepareTrip(trip: Trip)}[]) {\n    prepares.map((preparer) => {\n      preparer.prepareTrip(this);\n    });\n  }\n}\n\nclass Driver {}\n\nclass Mechanic {\n  prepareTrip(trip: Trip) {\n    trip.bicycles.map((bicycle) => {\n      this.prepareBicycle(bicycle);\n    });\n  }\n}\n\nclass TripCoordinator {\n  prepareTrip(trip: Trip) {\n    this.buyFood(trip);\n  }\n}\n")),(0,a.kt)("h2",{id:"writing-code-that-relies-on-ducks"},"Writing Code that Relies on Ducks"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Recognizing Hidden Ducks"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"You need to timely understand where the duck types are hidden and how to extract them, pay attention to the next places in the code:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Case statements that switch on class",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"similar to the switch..case situation, but here you check if you are working with instance of some specific class"))),(0,a.kt)("li",{parentName:"ul"},"instanceof operator",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"when trying to find out which exact class you are working with to apply specific steps to it, this may be a sign of hidden duck type"))),(0,a.kt)("li",{parentName:"ul"},"Checking the method exists (if (obj.someMethod) { obj.someMethod() })",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"It is also a good sign that there may be a hidden duck type when do not need to check the exact class but when you only need some specific method to exist"))))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Placing Trust in Your Ducks"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'Let client code trust the duck type, in lack of the trust client code means the next: "I know who you are, so I know what you do"'),(0,a.kt)("li",{parentName:"ul"},"Such knowledge transforms into tight coupling between classes which results into non extensible code"),(0,a.kt)("li",{parentName:"ul"},"Flexible applications built on top of objects which works on trust\n\u2013 your goal as a developer is to make those objects reliable, to let the trust work"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Documenting Duck Types"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Preparer duck type and its open interface is a specific part of the design, but at the same time it is a virtual part of code, because it is neither a class nor a real interface"),(0,a.kt)("li",{parentName:"ul"},"Preparers are an abstraction, just a convention which gives you the powerful system design tool, but this abstraction makes code less obvious"),(0,a.kt)("li",{parentName:"ul"},"When you create a duck type, you must document and cover it with tests"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Sharing Code between Ducks"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"In the example shared is only prepareTrip method, but when you start using duck types, you may notice that some part of the functionality is common for all the types"),(0,a.kt)("li",{parentName:"ul"},"Share such functionality using mixins and other available approaches"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Choosing Your Ducks Wisely"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The last point, tells us that you do not need to create duck types just to have them"),(0,a.kt)("li",{parentName:"ul"},"You need to find a balance between resources required for the refactoring, benefit gained, support simplicity and code clarity")))))}u.isMDXComponent=!0}}]);