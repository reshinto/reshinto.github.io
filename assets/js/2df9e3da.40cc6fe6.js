"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[7853],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(a),d=i,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},82331:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=a(87462),i=(a(67294),a(3905));const r={},o="Stacks and Queues",l={unversionedId:"interviewPrep/data_structures/10StacksAndQueues/readme",id:"interviewPrep/data_structures/10StacksAndQueues/readme",title:"Stacks and Queues",description:"Stack",source:"@site/docs/interviewPrep/data_structures/10StacksAndQueues/readme.md",sourceDirName:"interviewPrep/data_structures/10StacksAndQueues",slug:"/interviewPrep/data_structures/10StacksAndQueues/",permalink:"/docs/interviewPrep/data_structures/10StacksAndQueues/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/data_structures/10StacksAndQueues/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hash Tables",permalink:"/docs/interviewPrep/data_structures/09HashTables/"},next:{title:"Strings",permalink:"/docs/interviewPrep/data_structures/11Strings/"}},s={},u=[{value:"Stack",id:"stack",level:2},{value:"Standard operations and complexities",id:"standard-operations-and-complexities",level:3},{value:"Pushing an element onto the stack: O(1) time and space",id:"pushing-an-element-onto-the-stack-o1-time-and-space",level:4},{value:"Popping an element off the stack: O(1) time and space",id:"popping-an-element-off-the-stack-o1-time-and-space",level:4},{value:"Peeking at the element on the top of the stack: O(1) time and space",id:"peeking-at-the-element-on-the-top-of-the-stack-o1-time-and-space",level:4},{value:"Searching for an element in the stack: O(n) time, O(1) space",id:"searching-for-an-element-in-the-stack-on-time-o1-space",level:4},{value:"Max Stack",id:"max-stack",level:3},{value:"Min Stack",id:"min-stack",level:2},{value:"Queue",id:"queue",level:2},{value:"Standard operations and complexities",id:"standard-operations-and-complexities-1",level:3},{value:"Enqueuing an element into the queue: O(1) time and space",id:"enqueuing-an-element-into-the-queue-o1-time-and-space",level:4},{value:"Dequeuing an element out of the queue: O(1) time and space",id:"dequeuing-an-element-out-of-the-queue-o1-time-and-space",level:4},{value:"Peeking at the element at the front of the queue: O(1) time and space",id:"peeking-at-the-element-at-the-front-of-the-queue-o1-time-and-space",level:4},{value:"Searching for an element in the queue: O(n) time, O(1) space",id:"searching-for-an-element-in-the-queue-on-time-o1-space",level:4},{value:"Priority queue",id:"priority-queue",level:3}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"stacks-and-queues"},"Stacks and Queues"),(0,i.kt)("h2",{id:"stack"},"Stack"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"an array like data structure whose elements follow the Last In First Out (LIFO) rule"),(0,i.kt)("li",{parentName:"ul"},"a stack is often compared to a stack of books on a table",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"the last book that's placed on the stack of books is the 1st 1 that's taken off the stack"))),(0,i.kt)("li",{parentName:"ul"},"a stack is typically implemented with a dynamic array or with a singly linked list")),(0,i.kt)("h3",{id:"standard-operations-and-complexities"},"Standard operations and complexities"),(0,i.kt)("h4",{id:"pushing-an-element-onto-the-stack-o1-time-and-space"},"Pushing an element onto the stack: O(1) time and space"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"not using any additional space that grows with respect to the size of the input")),(0,i.kt)("h4",{id:"popping-an-element-off-the-stack-o1-time-and-space"},"Popping an element off the stack: O(1) time and space"),(0,i.kt)("h4",{id:"peeking-at-the-element-on-the-top-of-the-stack-o1-time-and-space"},"Peeking at the element on the top of the stack: O(1) time and space"),(0,i.kt)("h4",{id:"searching-for-an-element-in-the-stack-on-time-o1-space"},"Searching for an element in the stack: O(n) time, O(1) space"),(0,i.kt)("h3",{id:"max-stack"},"Max Stack"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"keeps track of the largest element in the stack")),(0,i.kt)("h2",{id:"min-stack"},"Min Stack"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"keeps track of the smallest element in the stack")),(0,i.kt)("h2",{id:"queue"},"Queue"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"an array like data structure whose elements follow the First In First Out (FIFO) rule"),(0,i.kt)("li",{parentName:"ul"},"a queue is often compared to a group of people standing in line to purchase items at a store",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"the 1st person to get in line is the 1st 1 to purchase items and to get out of the queue"))),(0,i.kt)("li",{parentName:"ul"},"a queue is typically implemented with a doubly linked list",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"because removing the 1st element in an array is not O(1) time")))),(0,i.kt)("h3",{id:"standard-operations-and-complexities-1"},"Standard operations and complexities"),(0,i.kt)("h4",{id:"enqueuing-an-element-into-the-queue-o1-time-and-space"},"Enqueuing an element into the queue: O(1) time and space"),(0,i.kt)("h4",{id:"dequeuing-an-element-out-of-the-queue-o1-time-and-space"},"Dequeuing an element out of the queue: O(1) time and space"),(0,i.kt)("h4",{id:"peeking-at-the-element-at-the-front-of-the-queue-o1-time-and-space"},"Peeking at the element at the front of the queue: O(1) time and space"),(0,i.kt)("h4",{id:"searching-for-an-element-in-the-queue-on-time-o1-space"},"Searching for an element in the queue: O(n) time, O(1) space"),(0,i.kt)("h3",{id:"priority-queue"},"Priority queue"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"keeps track of an element with high priority"),(0,i.kt)("li",{parentName:"ul"},"min heap is used for building a priority queue"),(0,i.kt)("li",{parentName:"ul"},"it is a data structure for maintaining a set S of elements, each with an associated value called a key"),(0,i.kt)("li",{parentName:"ul"},"A max-priority queue supports the following operations",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"INSERT(S, x)")," inserts the element x into the set S"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MAXIMUM(S)")," returns the element of S with the largest key"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EXTRACT-MAX(S)")," removes and returns the element of S with the largest key"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"INCREASE-KEY(S, x, k)")," increases the value of element xs key to the new value k, which is assumed to be at least as large as xs current key value"))),(0,i.kt)("li",{parentName:"ul"},"This is a very good sort, but in most cases it is not the most optimal sort - reason why we are considering it is because on the basis of the heap",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"it is very good to build a queue with priority"),(0,i.kt)("li",{parentName:"ul"},"For example, where you can use this queue",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"schedule a job on the server or use an event-driven approach when modeling physical processes with great complexity"),(0,i.kt)("li",{parentName:"ul"},"For example, an event occurs with a minimum priority, it is executed, the time is recalculated, inserted into the queue, and the event we need appears at the top"),(0,i.kt)("li",{parentName:"ul"},"Also, there are queues with the highest priority or with the lowest",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You can insert an element into it, take the maximum element, extract the maximum element, and change the priority of some element"),(0,i.kt)("li",{parentName:"ul"},"For example, processor time, there is a queue of tasks that it executes in one clock cycle, it performs a task, the priority changes",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"we insert it into the queue and take it with the next priority")))))))))))}c.isMDXComponent=!0}}]);