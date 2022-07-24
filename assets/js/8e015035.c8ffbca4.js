"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[1896],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,d=u["".concat(o,".").concat(m)]||u[m]||h[m]||i;return a?n.createElement(d,l(l({ref:t},p),{},{components:a})):n.createElement(d,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},27658:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(83117),r=(a(67294),a(3905));const i={},l="State",s={unversionedId:"interviewPrep/designPatterns/Behavioral_patterns/State/readme",id:"interviewPrep/designPatterns/Behavioral_patterns/State/readme",title:"State",description:"- it lets an object alter its behavior when its internal state changes",source:"@site/docs/interviewPrep/designPatterns/Behavioral_patterns/State/readme.md",sourceDirName:"interviewPrep/designPatterns/Behavioral_patterns/State",slug:"/interviewPrep/designPatterns/Behavioral_patterns/State/",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/State/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Behavioral_patterns/State/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Observer",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Observer/"},next:{title:"Strategy",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Strategy/"}},o={},c=[{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2},{value:"Analogy",id:"analogy",level:2},{value:"Structure",id:"structure",level:2},{value:"When to use",id:"when-to-use",level:2},{value:"How to implement",id:"how-to-implement",level:2},{value:"Pros &amp; Cons",id:"pros--cons",level:2},{value:"Pros",id:"pros",level:3},{value:"Cons",id:"cons",level:3}],p={toc:c};function h(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"state"},"State"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"it lets an object alter its behavior when its internal state changes"),(0,r.kt)("li",{parentName:"ul"},"it appears as if the object changed its class")),(0,r.kt)("h2",{id:"problem"},"Problem"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"state pattern is closely related to the concept of Finite-state-machine",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"main idea is that, at any time, there's a finite number of states which a program can be in",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"within any unique state, the program behaves differently"),(0,r.kt)("li",{parentName:"ul"},"the program can be switched from 1 state to another instantaneously"),(0,r.kt)("li",{parentName:"ul"},"however, depending on a current state, the program may or may not switch to a certain other states"),(0,r.kt)("li",{parentName:"ul"},"these switching rules, called transitions are also finite and predetermined"))))),(0,r.kt)("li",{parentName:"ul"},"the same approach can be applied to objects",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"e.g.: for a Document class",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"it can be in 1 of 3 states",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"draft, moderation, published",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"draft: it moves the document to moderation"),(0,r.kt)("li",{parentName:"ul"},"moderation: it makes the document public, but only if the current user is an administrator"),(0,r.kt)("li",{parentName:"ul"},"published: it doesn't do anything at all"))))))))),(0,r.kt)("li",{parentName:"ul"},"state machines are usually implemented with lots of conditional operators that select appropriate behavior depending on the current state of the object",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"usually this state is just a set of values of the object's fields"))),(0,r.kt)("li",{parentName:"ul"},"the biggest weakness of a state machine based on conditionals reveals itself once we start adding more states and state-dependent behaviors to the Document class",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"most methods will contain a lot of conditionals that pick the proper behavior of a method according to the current state"),(0,r.kt)("li",{parentName:"ul"},"this makes it difficult to maintain because any change to the transition logic may require changing state conditionals in every method"),(0,r.kt)("li",{parentName:"ul"},"the problem tends to get bigger as a project evolves",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"it is difficult to predict all possible states and transitions as the design stage"),(0,r.kt)("li",{parentName:"ul"},"thus a lean state machine built with a limited set of conditionals can grow into a bloated mess over time")))))),(0,r.kt)("h2",{id:"solution"},"Solution"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the state pattern suggest that new classes should be created for all possible states of an object",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"and extract all state-specific behaviors into these classes"))),(0,r.kt)("li",{parentName:"ul"},"Instead of implementing all behaviors on its own, the original object, called context, stores a reference to 1 of the state objects that represents its current state, and delegates all state-related work to that object"),(0,r.kt)("li",{parentName:"ul"},"to transition the context into another state",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"replace the active state object with another object that represents that new state"))),(0,r.kt)("li",{parentName:"ul"},"this is possible only if all state classes follow the same interface and the context itself works with these objects through that interface"),(0,r.kt)("li",{parentName:"ul"},"structure look similar to Strategy pattern",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"but is different in that the particular states may be aware of each other and initiate transitions from 1 state to another"),(0,r.kt)("li",{parentName:"ul"},"whereas strategies almost never know about each other")))),(0,r.kt)("h2",{id:"analogy"},"Analogy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the buttons and switches in the smartphone behave differently depending on the current state of the device",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When the phone is unlocked, pressing buttons leads to executing various functions"),(0,r.kt)("li",{parentName:"ul"},"When the phone is locked, pressing any button leads to the unlock screen"),(0,r.kt)("li",{parentName:"ul"},"When the phone\u2019s charge is low, pressing any button shows the charging screen")))),(0,r.kt)("h2",{id:"structure"},"Structure"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"State",src:a(38971).Z,width:"1082",height:"882"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Context stores a reference to one of the concrete state objects and delegates to it all state-specific work."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The context communicates with the state object via the state interface."),(0,r.kt)("li",{parentName:"ul"},"The context exposes a setter for passing it a new state object."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The State interface declares the state-specific methods."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"These methods should make sense for all concrete states because you don\u2019t want some of your states to have useless methods that will never be called."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Concrete States provide their own implementations for the state-specific methods."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"To avoid duplication of similar code across multiple states, you may provide intermediate abstract classes that encapsulate some common behavior."),(0,r.kt)("li",{parentName:"ul"},"State objects may store a back reference to the context object."),(0,r.kt)("li",{parentName:"ul"},"Through this reference, the state can fetch any required info from the context object, as well as initiate state transitions."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Both context and concrete states can set the next state of the context and perform the actual state transition by replacing the state object linked to the context."))),(0,r.kt)("h2",{id:"when-to-use"},"When to use"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the State pattern when you have an object that behaves differently depending on its current state, the number of states is enormous, and the state-specific code changes frequently",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The pattern suggests that you extract all state-specific code into a set of distinct classes"),(0,r.kt)("li",{parentName:"ul"},"As a result, you can add new states or change existing ones independently of each other, reducing the maintenance cost"))),(0,r.kt)("li",{parentName:"ul"},"Use the pattern when you have a class polluted with massive conditionals that alter how the class behaves according to the current values of the class\u2019s fields",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The State pattern lets you extract branches of these conditionals into methods of corresponding state classes"),(0,r.kt)("li",{parentName:"ul"},"While doing so, you can also clean temporary fields and helper methods involved in state-specific code out of your main class"))),(0,r.kt)("li",{parentName:"ul"},"Use State when you have a lot of duplicate code across similar states and transitions of a condition-based state machine",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The State pattern lets you compose hierarchies of state classes and reduce duplication by extracting common code into abstract base classes")))),(0,r.kt)("h2",{id:"how-to-implement"},"How to implement"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Decide what class will act as the context",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"It could be an existing class which already has the state-dependent code; or a new class, if the state-specific code is distributed across multiple classes"))),(0,r.kt)("li",{parentName:"ol"},"Declare the state interface",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Although it may mirror all the methods declared in the context, aim only for those that may contain state-specific behavior"))),(0,r.kt)("li",{parentName:"ol"},"For every actual state, create a class that derives from the state interface",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Then go over the methods of the context and extract all code related to that state into your newly created class"),(0,r.kt)("li",{parentName:"ul"},"While moving the code to the state class, you might discover that it depends on private members of the context",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"There are several workarounds:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Make these fields or methods public"),(0,r.kt)("li",{parentName:"ul"},"Turn the behavior you\u2019re extracting into a public method in the context and call it from the state class",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This way is ugly but quick, and you can always fix it later"))),(0,r.kt)("li",{parentName:"ul"},"Nest the state classes into the context class, but only if your programming language supports nesting classes"))))))),(0,r.kt)("li",{parentName:"ol"},"In the context class, add a reference field of the state interface type and a public setter that allows overriding the value of that field"),(0,r.kt)("li",{parentName:"ol"},"Go over the method of the context again and replace empty state conditionals with calls to corresponding methods of the state object"),(0,r.kt)("li",{parentName:"ol"},"To switch the state of the context, create an instance of one of the state classes and pass it to the context",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can do this within the context itself, or in various states, or in the client"),(0,r.kt)("li",{parentName:"ul"},"Wherever this is done, the class becomes dependent on the concrete state class that it instantiates")))),(0,r.kt)("h2",{id:"pros--cons"},"Pros & Cons"),(0,r.kt)("h3",{id:"pros"},"Pros"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Single Responsibility Principle",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Organize the code related to particular states into separate classes"))),(0,r.kt)("li",{parentName:"ul"},"Open/Closed Principle",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Introduce new states without changing existing state classes or the context"))),(0,r.kt)("li",{parentName:"ul"},"Simplify the code of the context by eliminating bulky state machine conditionals")),(0,r.kt)("h3",{id:"cons"},"Cons"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Applying the pattern can be overkill if a state machine has only a few states or rarely changes")))}h.isMDXComponent=!0},38971:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/state-5c0875ff58e2655b49ea2a84558458df.png"}}]);