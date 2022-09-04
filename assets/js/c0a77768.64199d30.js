"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[19525],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=i,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},17863:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(83117),i=(n(67294),n(3905));const r={},o="React Fiber Architecture",l={unversionedId:"Technologies/frontend/react/reactFiber",id:"Technologies/frontend/react/reactFiber",title:"React Fiber Architecture",description:"Introduction",source:"@site/docs/Technologies/frontend/react/reactFiber.md",sourceDirName:"Technologies/frontend/react",slug:"/Technologies/frontend/react/reactFiber",permalink:"/docs/Technologies/frontend/react/reactFiber",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/Technologies/frontend/react/reactFiber.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Required dependencies",permalink:"/docs/Technologies/frontend/react/react-router-dom/example/"},next:{title:"Requires the following libraries",permalink:"/docs/Technologies/frontend/react/redux/reduxSaga/"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"About this document",id:"about-this-document",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Review",id:"review",level:2},{value:"What is reconciliation?",id:"what-is-reconciliation",level:3},{value:"Reconciliation versus rendering",id:"reconciliation-versus-rendering",level:3},{value:"Scheduling",id:"scheduling",level:3},{value:"What is a fiber?",id:"what-is-a-fiber",level:2},{value:"Structure of a fiber",id:"structure-of-a-fiber",level:3},{value:"<code>type</code> and <code>key</code>",id:"type-and-key",level:4},{value:"<code>child</code> and <code>sibling</code>",id:"child-and-sibling",level:4},{value:"<code>return</code>",id:"return",level:4},{value:"<code>pendingProps</code> and <code>memoizedProps</code>",id:"pendingprops-and-memoizedprops",level:4},{value:"<code>pendingWorkPriority</code>",id:"pendingworkpriority",level:4},{value:"<code>alternate</code>",id:"alternate",level:4},{value:"<code>output</code>",id:"output",level:4},{value:"Future sections",id:"future-sections",level:2},{value:"Related Videos",id:"related-videos",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"react-fiber-architecture"},"React Fiber Architecture"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"React Fiber is an ongoing reimplementation of React's core algorithm. It is the culmination of over two years of research by the React team."),(0,i.kt)("p",null,"The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is ",(0,i.kt)("strong",{parentName:"p"},"incremental rendering"),": the ability to split rendering work into chunks and spread it out over multiple frames."),(0,i.kt)("p",null,"Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives."),(0,i.kt)("h3",{id:"about-this-document"},"About this document"),(0,i.kt)("p",null,"Fiber introduces several novel concepts that are difficult to grok solely by looking at code. This document began as a collection of notes I took as I followed along with Fiber's implementation in the React project. As it grew, I realized it may be a helpful resource for others, too."),(0,i.kt)("p",null,"I'll attempt to use the plainest language possible, and to avoid jargon by explicitly defining key terms. I'll also link heavily to external resources when possible."),(0,i.kt)("p",null,"Please note that I am not on the React team, and do not speak from any authority. ",(0,i.kt)("strong",{parentName:"p"},"This is not an official document"),". I have asked members of the React team to review it for accuracy."),(0,i.kt)("p",null,"This is also a work in progress. ",(0,i.kt)("strong",{parentName:"p"},"Fiber is an ongoing project that will likely undergo significant refactors before it's completed.")," Also ongoing are my attempts at documenting its design here. Improvements and suggestions are highly welcome."),(0,i.kt)("p",null,"My goal is that after reading this document, you will understand Fiber well enough to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/commits/master/src/renderers/shared/fiber"},"follow along as it's implemented"),", and eventually even be able to contribute back to React."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"I strongly suggest that you are familiar with the following resources before continuing:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://facebook.github.io/react/blog/2015/12/18/react-components-elements-and-instances.html"},"React Components, Elements, and Instances"),' - "Component" is often an overloaded term. A firm grasp of these terms is crucial.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://facebook.github.io/react/docs/reconciliation.html"},"Reconciliation")," - A high-level description of React's reconciliation algorithm."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reactjs/react-basic"},"React Basic Theoretical Concepts")," - A description of the conceptual model of React without implementation burden. Some of this may not make sense on first reading. That's okay, it will make more sense with time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://facebook.github.io/react/contributing/design-principles.html"},"React Design Principles")," - Pay special attention to the section on scheduling. It does a great job of explaining the ",(0,i.kt)("em",{parentName:"li"},"why")," of React Fiber.")),(0,i.kt)("h2",{id:"review"},"Review"),(0,i.kt)("p",null,"Please check out the prerequisites section if you haven't already."),(0,i.kt)("p",null,"Before we dive into the new stuff, let's review a few concepts."),(0,i.kt)("h3",{id:"what-is-reconciliation"},"What is reconciliation?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"reconciliation"),"\n",(0,i.kt)("em",{parentName:"p"},"The algorithm React uses to diff one tree with another to determine which parts need to be changed."),"\n",(0,i.kt)("strong",{parentName:"p"},"update"),"\n",(0,i.kt)("em",{parentName:"p"},"A change in the data used to render a React app. Usually the result of ",(0,i.kt)("inlineCode",{parentName:"em"},"setState"),". Eventually results in a re-render.")),(0,i.kt)("p",null,"The central idea of React's API is to think of updates as if they cause the entire app to re-render. This allows the developer to reason declaratively, rather than worry about how to efficiently transition the app from any particular state to another (A to B, B to C, C to A, and so on)."),(0,i.kt)("p",null,"Actually re-rendering the entire app on each change only works for the most trivial apps; in a real-world app, it's prohibitively costly in terms of performance. React has optimizations which create the appearance of whole app re-rendering while maintaining great performance. The bulk of these optimizations are part of a process called ",(0,i.kt)("strong",{parentName:"p"},"reconciliation"),"."),(0,i.kt)("p",null,'Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment \u2014 for example, in the case of a browser application, it\'s translated to a set of DOM operations. When the app is updated (usually via ',(0,i.kt)("inlineCode",{parentName:"p"},"setState"),"), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app."),(0,i.kt)("p",null,"Although Fiber is a ground-up rewrite of the reconciler, the high-level algorithm ",(0,i.kt)("a",{parentName:"p",href:"https://facebook.github.io/react/docs/reconciliation.html"},"described in the React docs")," will be largely the same. The key points are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely."),(0,i.kt)("li",{parentName:"ul"},'Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."')),(0,i.kt)("h3",{id:"reconciliation-versus-rendering"},"Reconciliation versus rendering"),(0,i.kt)("p",null,'The DOM is just one of the rendering environments React can render to, the other major targets being native iOS and Android views via React Native. (This is why "virtual DOM" is a bit of a misnomer.)'),(0,i.kt)("p",null,"The reason it can support so many targets is because React is designed so that reconciliation and rendering are separate phases. The reconciler does the work of computing which parts of a tree have changed; the renderer then uses that information to actually update the rendered app."),(0,i.kt)("p",null,"This separation means that React DOM and React Native can use their own renderers while sharing the same reconciler, provided by React core."),(0,i.kt)("p",null,"Fiber reimplements the reconciler. It is not principally concerned with rendering, though renderers will need to change to support (and take advantage of) the new architecture."),(0,i.kt)("h3",{id:"scheduling"},"Scheduling"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"scheduling"),"\n",(0,i.kt)("em",{parentName:"p"},"the process of determining when work should be performed.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"work"),"\n",(0,i.kt)("em",{parentName:"p"},"any computations that must be performed. Work is usually the result of an update (e.g. ",(0,i.kt)("inlineCode",{parentName:"em"},"setState"),")")),(0,i.kt)("p",null,"React's ",(0,i.kt)("a",{parentName:"p",href:"https://facebook.github.io/react/contributing/design-principles.html#scheduling"},"Design Principles")," document is so good on this subject that I'll just quote it here:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In its current implementation React walks the tree recursively and calls render functions of the whole updated tree during a single tick. However in the future it might start delaying some updates to avoid dropping frames."),(0,i.kt)("p",{parentName:"blockquote"},'This is a common theme in React design. Some popular libraries implement the "push" approach where computations are performed when the new data is available. React, however, sticks to the "pull" approach where computations can be delayed until necessary.'),(0,i.kt)("p",{parentName:"blockquote"},"React is not a generic data processing library. It is a library for building user interfaces. We think that it is uniquely positioned in an app to know which computations are relevant right now and which are not."),(0,i.kt)("p",{parentName:"blockquote"},"If something is offscreen, we can delay any logic related to it. If data is arriving faster than the frame rate, we can coalesce and batch updates. We can prioritize work coming from user interactions (such as an animation caused by a button click) over less important background work (such as rendering new content just loaded from the network) to avoid dropping frames.")),(0,i.kt)("p",null,"The key points are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience."),(0,i.kt)("li",{parentName:"ul"},"Different types of updates have different priorities \u2014 an animation update needs to complete more quickly than, say, an update from a data store."),(0,i.kt)("li",{parentName:"ul"},"A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.")),(0,i.kt)("p",null,"React doesn't currently take advantage of scheduling in a significant way; an update results in the entire subtree being re-rendered immediately. Overhauling React's core algorithm to take advantage of scheduling is the driving idea behind Fiber."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Now we're ready to dive into Fiber's implementation. The next section is more technical than what we've discussed so far. Please make sure you're comfortable with the previous material before moving on."),(0,i.kt)("h2",{id:"what-is-a-fiber"},"What is a fiber?"),(0,i.kt)("p",null,"We're about to discuss the heart of React Fiber's architecture. Fibers are a much lower-level abstraction than application developers typically think about. If you find yourself frustrated in your attempts to understand it, don't feel discouraged. Keep trying and it will eventually make sense. (When you do finally get it, please suggest how to improve this section.)"),(0,i.kt)("p",null,"Here we go!"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We've established that a primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"pause work and come back to it later."),(0,i.kt)("li",{parentName:"ul"},"assign priority to different types of work."),(0,i.kt)("li",{parentName:"ul"},"reuse previously completed work."),(0,i.kt)("li",{parentName:"ul"},"abort work if it's no longer needed.")),(0,i.kt)("p",null,"In order to do any of this, we first need a way to break work down into units. In one sense, that's what a fiber is. A fiber represents a ",(0,i.kt)("strong",{parentName:"p"},"unit of work"),"."),(0,i.kt)("p",null,"To go further, let's go back to the conception of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/reactjs/react-basic#transformation"},"React components as functions of data"),", commonly expressed as"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"v = f(d)\n")),(0,i.kt)("p",null,"It follows that rendering a React app is akin to calling a function whose body contains calls to other functions, and so on. This analogy is useful when thinking about fibers."),(0,i.kt)("p",null,"The way computers typically track a program's execution is using the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Call_stack"},"call stack"),". When a function is executed, a new ",(0,i.kt)("strong",{parentName:"p"},"stack frame")," is added to the stack. That stack frame represents the work that is performed by that function."),(0,i.kt)("p",null,"When dealing with UIs, the problem is that if too much work is executed all at once, it can cause animations to drop frames and look choppy. What's more, some of that work may be unnecessary if it's superseded by a more recent update. This is where the comparison between UI components and function breaks down, because components have more specific concerns than functions in general."),(0,i.kt)("p",null,"Newer browsers (and React Native) implement APIs that help address this exact problem: ",(0,i.kt)("inlineCode",{parentName:"p"},"requestIdleCallback")," schedules a low priority function to be called during an idle period, and ",(0,i.kt)("inlineCode",{parentName:"p"},"requestAnimationFrame")," schedules a high priority function to be called on the next animation frame. The problem is that, in order to use those APIs, you need a way to break rendering work into incremental units. If you rely only on the call stack, it will keep doing work until the stack is empty."),(0,i.kt)("p",null,"Wouldn't it be great if we could customize the behavior of the call stack to optimize for rendering UIs? Wouldn't it be great if we could interrupt the call stack at will and manipulate stack frames manually?"),(0,i.kt)("p",null,"That's the purpose of React Fiber. Fiber is reimplementation of the stack, specialized for React components. You can think of a single fiber as a ",(0,i.kt)("strong",{parentName:"p"},"virtual stack frame"),"."),(0,i.kt)("p",null,"The advantage of reimplementing the stack is that you can ",(0,i.kt)("a",{parentName:"p",href:"https://www.facebook.com/groups/2003630259862046/permalink/2054053404819731/"},"keep stack frames in memory")," and execute them however (and ",(0,i.kt)("em",{parentName:"p"},"whenever"),") you want. This is crucial for accomplishing the goals we have for scheduling."),(0,i.kt)("p",null,"Aside from scheduling, manually dealing with stack frames unlocks the potential for features such as concurrency and error boundaries. We will cover these topics in future sections."),(0,i.kt)("p",null,"In the next section, we'll look more at the structure of a fiber."),(0,i.kt)("h3",{id:"structure-of-a-fiber"},"Structure of a fiber"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: as we get more specific about implementation details, the likelihood that something may change increases. Please file a PR if you notice any mistakes or outdated information.")),(0,i.kt)("p",null,"In concrete terms, a fiber is a JavaScript object that contains information about a component, its input, and its output."),(0,i.kt)("p",null,"A fiber corresponds to a stack frame, but it also corresponds to an instance of a component."),(0,i.kt)("p",null,"Here are some of the important fields that belong to a fiber. (This list is not exhaustive.)"),(0,i.kt)("h4",{id:"type-and-key"},(0,i.kt)("inlineCode",{parentName:"h4"},"type")," and ",(0,i.kt)("inlineCode",{parentName:"h4"},"key")),(0,i.kt)("p",null,"The type and key of a fiber serve the same purpose as they do for React elements. (In fact, when a fiber is created from an element, these two fields are copied over directly.)"),(0,i.kt)("p",null,"The type of a fiber describes the component that it corresponds to. For composite components, the type is the function or class component itself. For host components (",(0,i.kt)("inlineCode",{parentName:"p"},"div"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"span"),", etc.), the type is a string."),(0,i.kt)("p",null,"Conceptually, the type is the function (as in ",(0,i.kt)("inlineCode",{parentName:"p"},"v = f(d)"),") whose execution is being tracked by the stack frame."),(0,i.kt)("p",null,"Along with the type, the key is used during reconciliation to determine whether the fiber can be reused."),(0,i.kt)("h4",{id:"child-and-sibling"},(0,i.kt)("inlineCode",{parentName:"h4"},"child")," and ",(0,i.kt)("inlineCode",{parentName:"h4"},"sibling")),(0,i.kt)("p",null,"These fields point to other fibers, describing the recursive tree structure of a fiber."),(0,i.kt)("p",null,"The child fiber corresponds to the value returned by a component's ",(0,i.kt)("inlineCode",{parentName:"p"},"render")," method. So in the following example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function Parent() {\n  return <Child />;\n}\n")),(0,i.kt)("p",null,"The child fiber of ",(0,i.kt)("inlineCode",{parentName:"p"},"Parent")," corresponds to ",(0,i.kt)("inlineCode",{parentName:"p"},"Child"),"."),(0,i.kt)("p",null,"The sibling field accounts for the case where ",(0,i.kt)("inlineCode",{parentName:"p"},"render")," returns multiple children (a new feature in Fiber!):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function Parent() {\n  return [<Child1 />, <Child2 />];\n}\n")),(0,i.kt)("p",null,"The child fibers form a singly-linked list whose head is the first child. So in this example, the child of ",(0,i.kt)("inlineCode",{parentName:"p"},"Parent")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"Child1")," and the sibling of ",(0,i.kt)("inlineCode",{parentName:"p"},"Child1")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"Child2"),"."),(0,i.kt)("p",null,"Going back to our function analogy, you can think of a child fiber as a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Tail_call"},"tail-called function"),"."),(0,i.kt)("h4",{id:"return"},(0,i.kt)("inlineCode",{parentName:"h4"},"return")),(0,i.kt)("p",null,"The return fiber is the fiber to which the program should return after processing the current one. It is conceptually the same as the return address of a stack frame. It can also be thought of as the parent fiber."),(0,i.kt)("p",null,"If a fiber has multiple child fibers, each child fiber's return fiber is the parent. So in our example in the previous section, the return fiber of ",(0,i.kt)("inlineCode",{parentName:"p"},"Child1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Child2")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"Parent"),"."),(0,i.kt)("h4",{id:"pendingprops-and-memoizedprops"},(0,i.kt)("inlineCode",{parentName:"h4"},"pendingProps")," and ",(0,i.kt)("inlineCode",{parentName:"h4"},"memoizedProps")),(0,i.kt)("p",null,"Conceptually, props are the arguments of a function. A fiber's ",(0,i.kt)("inlineCode",{parentName:"p"},"pendingProps")," are set at the beginning of its execution, and ",(0,i.kt)("inlineCode",{parentName:"p"},"memoizedProps")," are set at the end."),(0,i.kt)("p",null,"When the incoming ",(0,i.kt)("inlineCode",{parentName:"p"},"pendingProps")," are equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"memoizedProps"),", it signals that the fiber's previous output can be reused, preventing unnecessary work."),(0,i.kt)("h4",{id:"pendingworkpriority"},(0,i.kt)("inlineCode",{parentName:"h4"},"pendingWorkPriority")),(0,i.kt)("p",null,"A number indicating the priority of the work represented by the fiber. The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/blob/master/src/renderers/shared/fiber/ReactPriorityLevel.js"},"ReactPriorityLevel")," module lists the different priority levels and what they represent."),(0,i.kt)("p",null,"With the exception of ",(0,i.kt)("inlineCode",{parentName:"p"},"NoWork"),", which is 0, a larger number indicates a lower priority. For example, you could use the following function to check if a fiber's priority is at least as high as the given level:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function matchesPriority(fiber, priority) {\n  return (\n    fiber.pendingWorkPriority !== 0 && fiber.pendingWorkPriority <= priority\n  );\n}\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"This function is for illustration only; it's not actually part of the React Fiber codebase.")),(0,i.kt)("p",null,"The scheduler uses the priority field to search for the next unit of work to perform. This algorithm will be discussed in a future section."),(0,i.kt)("h4",{id:"alternate"},(0,i.kt)("inlineCode",{parentName:"h4"},"alternate")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"flush"),"\n",(0,i.kt)("em",{parentName:"p"},"To flush a fiber is to render its output onto the screen.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"work-in-progress"),"\n",(0,i.kt)("em",{parentName:"p"},"A fiber that has not yet completed; conceptually, a stack frame which has not yet returned.")),(0,i.kt)("p",null,"At any time, a component instance has at most two fibers that correspond to it: the current, flushed fiber, and the work-in-progress fiber."),(0,i.kt)("p",null,"The alternate of the current fiber is the work-in-progress, and the alternate of the work-in-progress is the current fiber."),(0,i.kt)("p",null,"A fiber's alternate is created lazily using a function called ",(0,i.kt)("inlineCode",{parentName:"p"},"cloneFiber"),". Rather than always creating a new object, ",(0,i.kt)("inlineCode",{parentName:"p"},"cloneFiber")," will attempt to reuse the fiber's alternate if it exists, minimizing allocations."),(0,i.kt)("p",null,"You should think of the ",(0,i.kt)("inlineCode",{parentName:"p"},"alternate")," field as an implementation detail, but it pops up often enough in the codebase that it's valuable to discuss it here."),(0,i.kt)("h4",{id:"output"},(0,i.kt)("inlineCode",{parentName:"h4"},"output")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"host component"),"\n",(0,i.kt)("em",{parentName:"p"},"The leaf nodes of a React application. They are specific to the rendering environment (e.g., in a browser app, they are ",(0,i.kt)("inlineCode",{parentName:"em"},"div"),", ",(0,i.kt)("inlineCode",{parentName:"em"},"span"),", etc.). In JSX, they are denoted using lowercase tag names.")),(0,i.kt)("p",null,"Conceptually, the output of a fiber is the return value of a function."),(0,i.kt)("p",null,"Every fiber eventually has output, but output is created only at the leaf nodes by ",(0,i.kt)("strong",{parentName:"p"},"host components"),". The output is then transferred up the tree."),(0,i.kt)("p",null,"The output is what is eventually given to the renderer so that it can flush the changes to the rendering environment. It's the renderer's responsibility to define how the output is created and updated."),(0,i.kt)("h2",{id:"future-sections"},"Future sections"),(0,i.kt)("p",null,"That's all there is for now, but this document is nowhere near complete. Future sections will describe the algorithms used throughout the lifecycle of an update. Topics to cover include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"how the scheduler finds the next unit of work to perform."),(0,i.kt)("li",{parentName:"ul"},"how priority is tracked and propagated through the fiber tree."),(0,i.kt)("li",{parentName:"ul"},"how the scheduler knows when to pause and resume work."),(0,i.kt)("li",{parentName:"ul"},"how work is flushed and marked as complete."),(0,i.kt)("li",{parentName:"ul"},"how side-effects (such as lifecycle methods) work."),(0,i.kt)("li",{parentName:"ul"},"what a coroutine is and how it can be used to implement features like context and layout.")),(0,i.kt)("h2",{id:"related-videos"},"Related Videos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/aV1271hd9ew"},"What's Next for React (ReactNext 2016)"))))}u.isMDXComponent=!0}}]);