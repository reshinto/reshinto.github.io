"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[5874],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13540:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const o={},r="NodeJS",l={unversionedId:"languageSpecific/javascript/nodejs",id:"languageSpecific/javascript/nodejs",title:"NodeJS",description:"Introduction",source:"@site/docs/languageSpecific/javascript/nodejs.md",sourceDirName:"languageSpecific/javascript",slug:"/languageSpecific/javascript/nodejs",permalink:"/docs/languageSpecific/javascript/nodejs",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/languageSpecific/javascript/nodejs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Run Java Apps In Docker",permalink:"/docs/languageSpecific/java/runJavaAppsInDocker/"},next:{title:"Reduce method",permalink:"/docs/languageSpecific/javascript/reduce"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Difference between NodeJS and the browser",id:"difference-between-nodejs-and-the-browser",level:2},{value:"V8 JavaScript Engine",id:"v8-javascript-engine",level:2},{value:"Compilation",id:"compilation",level:2},{value:"NodeJS Event Loop",id:"nodejs-event-loop",level:2},{value:"Introduction",id:"introduction-1",level:3},{value:"Blocking the event loop",id:"blocking-the-event-loop",level:3},{value:"The Call Stack",id:"the-call-stack",level:3},{value:"Simple event loop explanation",id:"simple-event-loop-explanation",level:3},{value:"Queuing function execution",id:"queuing-function-execution",level:3},{value:"The Message Queue",id:"the-message-queue",level:3},{value:"ES6 Job Queue",id:"es6-job-queue",level:3},{value:"Concurrency and Throughput",id:"concurrency-and-throughput",level:3},{value:"process.nextTick()",id:"processnexttick",level:2},{value:"setImmediate()",id:"setimmediate",level:2},{value:"JavaScript Timers",id:"javascript-timers",level:2},{value:"setTimeout()",id:"settimeout",level:3},{value:"setInterval()",id:"setinterval",level:3},{value:"Recursive setTimeout",id:"recursive-settimeout",level:3},{value:"Orchestrating promises",id:"orchestrating-promises",level:3},{value:"Promise all",id:"promise-all",level:4},{value:"Promise race",id:"promise-race",level:4},{value:"Promise any",id:"promise-any",level:4}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nodejs"},"NodeJS"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Node.js is an open-source and cross-platform JavaScript runtime environment"),(0,i.kt)("li",{parentName:"ul"},"it runs the ",(0,i.kt)("inlineCode",{parentName:"li"},"V8 JavaScript engine"),", the core of Google Chrome, outside of the browser",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This allows Node.js to be very performant"))),(0,i.kt)("li",{parentName:"ul"},"A Node.js app runs in a ",(0,i.kt)("inlineCode",{parentName:"li"},"single process"),", without creating a new thread for every request",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking"),(0,i.kt)("li",{parentName:"ul"},"libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm"))),(0,i.kt)("li",{parentName:"ul"},"When Node.js performs an I/O operation, like reading from the network, accessing a database or the filesystem",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back"),(0,i.kt)("li",{parentName:"ul"},"This allows Node.js to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"which could be a significant source of bugs"))))),(0,i.kt)("li",{parentName:"ul"},"you are in charge of deciding which ECMAScript version to use by changing the Node.js version",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"you can also enable specific experimental features by running Node.js with flags")))),(0,i.kt)("h2",{id:"difference-between-nodejs-and-the-browser"},"Difference between NodeJS and the browser"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Both the browser and Node.js use JavaScript as their programming language"),(0,i.kt)("li",{parentName:"ul"},"the difference lies in the ecosystem",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In the browser",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"most of the time what you are doing is interacting with the DOM, or other Web Platform APIs like Cookies"),(0,i.kt)("li",{parentName:"ul"},"we don't have all the nice APIs that Node.js provides through its modules",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g.: filesystem access functionality"))),(0,i.kt)("li",{parentName:"ul"},"in the browser environment, you don't get to choose what browser your visitors will use"),(0,i.kt)("li",{parentName:"ul"},"Since JavaScript moves so fast, but browsers can be a bit slow to upgrade",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"sometimes on the web you are stuck with using older JavaScript / ECMAScript releases"),(0,i.kt)("li",{parentName:"ul"},"You can use Babel to transform your code to be ES5-compatible before shipping it to the browser"),(0,i.kt)("li",{parentName:"ul"},"in the browser we are starting to see the ES Modules standard being implemented"),(0,i.kt)("li",{parentName:"ul"},"you are limited to import in the browser"))))),(0,i.kt)("li",{parentName:"ul"},"In Node.js",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"don't have the document, window and all the other objects that are provided by the browser"),(0,i.kt)("li",{parentName:"ul"},"you control the environment",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Unless you are building an open source application that anyone can deploy anywhere, you know which version of Node.js you will run the application on"),(0,i.kt)("li",{parentName:"ul"},"This means that you can write all the modern ES6-7-8-9 JavaScript that your Node.js version supports"))),(0,i.kt)("li",{parentName:"ul"},"it supports both the CommonJS and ES module systems (since Node.js v12)"),(0,i.kt)("li",{parentName:"ul"},"you can use both ",(0,i.kt)("inlineCode",{parentName:"li"},"require()")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"import")," in Node.js")))))),(0,i.kt)("h2",{id:"v8-javascript-engine"},"V8 JavaScript Engine"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"V8 is the name of the JavaScript engine that powers Google Chrome",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It's the thing that takes our JavaScript and executes it while browsing with Chrome"))),(0,i.kt)("li",{parentName:"ul"},"i.e. it parses and executes JavaScript code",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The DOM, and the other Web Platform APIs (they all makeup runtime environment) are provided by the browser"))),(0,i.kt)("li",{parentName:"ul"},"the JavaScript engine is independent of the browser in which it's hosted",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This key feature enabled the rise of Node.js"),(0,i.kt)("li",{parentName:"ul"},"V8 was chosen to be the engine that powered Node.js back in 2009"),(0,i.kt)("li",{parentName:"ul"},"as the popularity of Node.js exploded, V8 became the engine that now powers an incredible amount of server-side code written in JavaScript"))),(0,i.kt)("li",{parentName:"ul"},"The Node.js ecosystem is huge and thanks to V8 which also powers desktop apps, with projects like Electron"),(0,i.kt)("li",{parentName:"ul"},"V8 is written in C++, and it's continuously improved",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It is portable and runs on Mac, Windows, Linux and several other systems")))),(0,i.kt)("h2",{id:"compilation"},"Compilation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"JavaScript is generally considered an interpreted language",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"but modern JavaScript engines no longer just interpret JavaScript, they compile it",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This has been happening since 2009, when the SpiderMonkey JavaScript compiler was added to Firefox 3.5, and everyone followed this idea"))))),(0,i.kt)("li",{parentName:"ul"},"JavaScript is internally compiled by V8 with just-in-time (JIT) compilation to speed up the execution"),(0,i.kt)("li",{parentName:"ul"},"Our applications can now run for hours inside a browser, rather than being just a few form validation rules or simple scripts"),(0,i.kt)("li",{parentName:"ul"},"compiling JavaScript makes perfect sense because",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"although it might take a little bit more to have the JavaScript ready"),(0,i.kt)("li",{parentName:"ul"},"once done it's going to be much more performant than purely interpreted code")))),(0,i.kt)("h2",{id:"nodejs-event-loop"},"NodeJS Event Loop"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"nodejs",src:n(77226).Z,width:"2792",height:"1086"})),(0,i.kt)("h3",{id:"introduction-1"},"Introduction"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Why is this so important?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Because it explains how Node.js can be asynchronous and have non-blocking I/O"))),(0,i.kt)("li",{parentName:"ul"},"The Node.js JavaScript code runs on a single thread",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"There is just one thing happening at a time"),(0,i.kt)("li",{parentName:"ul"},"This is a limitation that's actually very helpful",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"as it simplifies a lot how you program without worrying about concurrency issues"),(0,i.kt)("li",{parentName:"ul"},"You just need to pay attention to how you write your code"),(0,i.kt)("li",{parentName:"ul"},"avoid anything that could block the thread, like synchronous network calls or infinite loops"))))),(0,i.kt)("li",{parentName:"ul"},"in most browsers there is an event loop for every browser tab",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"it makes every process isolated and avoid a web page with infinite loops or heavy processing to block your entire browser"))),(0,i.kt)("li",{parentName:"ul"},"The environment manages multiple concurrent event loops, to handle API calls",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Web Workers run in their own event loop as well"))),(0,i.kt)("li",{parentName:"ul"},"You mainly need to be concerned that your code will run on a single event loop, and write code with this thing in mind to avoid blocking it")),(0,i.kt)("h3",{id:"blocking-the-event-loop"},"Blocking the event loop"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Any JavaScript code that takes too long to return back control to the event loop will block the execution of any JavaScript code in the page",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"it even block the UI thread, and the user cannot click around, scroll the page, etc."))),(0,i.kt)("li",{parentName:"ul"},"Almost all the I/O primitives in JavaScript are non-blocking",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Network requests, filesystem operations, and so on"),(0,i.kt)("li",{parentName:"ul"},"Being blocking is the exception, and this is why JavaScript is based so much on callbacks, and more recently on promises and async/await")))),(0,i.kt)("h3",{id:"the-call-stack"},"The Call Stack"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The call stack is a LIFO (Last In, First Out) stack")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The event loop continuously checks the call stack to see if there's any function that needs to run"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"While doing so, it adds any function call it finds in the call stack and executes each one in order"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"in the error stack trace from the debugger or in the browser console"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"the browser looks up the function names in the call stack to inform you which function originates the current call"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://nodejs.dev/static/e4594b6135efd353b44770f748fdccd5/1b853/exception-call-stack.png",alt:"error stack trace"})))))),(0,i.kt)("h3",{id:"simple-event-loop-explanation"},"Simple event loop explanation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When this code runs",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"first ",(0,i.kt)("inlineCode",{parentName:"li"},"foo()")," is called"),(0,i.kt)("li",{parentName:"ol"},"Inside ",(0,i.kt)("inlineCode",{parentName:"li"},"foo()")," we first call ",(0,i.kt)("inlineCode",{parentName:"li"},"bar()")),(0,i.kt)("li",{parentName:"ol"},"then we call ",(0,i.kt)("inlineCode",{parentName:"li"},"baz()"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const bar = () => console.log("bar");\n\nconst baz = () => console.log("baz");\n\nconst foo = () => {\n  console.log("foo");\n  bar();\n  baz();\n};\n\nfoo();\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"foo\nbar\nbaz\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://nodejs.dev/static/270ebeb6dbfa7d613152b71257c72a9e/c83ae/call-stack-first-example.png",alt:"call stack"})),(0,i.kt)("h3",{id:"queuing-function-execution"},"Queuing function execution"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"it defer a function until the stack is clear")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When this code runs"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"first ",(0,i.kt)("inlineCode",{parentName:"li"},"foo()")," is called"),(0,i.kt)("li",{parentName:"ol"},"Inside ",(0,i.kt)("inlineCode",{parentName:"li"},"foo()")," we first call ",(0,i.kt)("inlineCode",{parentName:"li"},"setTimeout"),", passing bar as an argument",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"we instruct it to run immediately as fast as it can, passing 0 as the timer"))),(0,i.kt)("li",{parentName:"ol"},"Then we call ",(0,i.kt)("inlineCode",{parentName:"li"},"baz()"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const bar = () => console.log("bar");\n\nconst baz = () => console.log("baz");\n\nconst foo = () => {\n  console.log("foo");\n  setTimeout(bar, 0);\n  baz();\n};\n\nfoo();\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"foo\nbaz\nbar\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://nodejs.dev/static/be55515b9343074d00b43de88c495331/966a0/call-stack-second-example.png",alt:"asynchronous call stack"})),(0,i.kt)("h3",{id:"the-message-queue"},"The Message Queue"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When ",(0,i.kt)("inlineCode",{parentName:"li"},"setTimeout()")," is called, the Browser or Node.js starts the timer",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Once the timer expires, in this case immediately as we put 0 as the timeout, the callback function is put in the Message Queue"))),(0,i.kt)("li",{parentName:"ul"},"The Message Queue is also where user-initiated events like click or keyboard events, or fetch responses are queued before your code has the opportunity to react to them",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Or also DOM events like onload"))),(0,i.kt)("li",{parentName:"ul"},"The loop gives priority to the call stack, and it first processes everything it finds in the call stack",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"once there's nothing in there, it goes to pick up things in the message queue"))),(0,i.kt)("li",{parentName:"ul"},"We don't have to wait for functions like setTimeout, fetch or other things to do their own work",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"because they are provided by the browser, and they live on their own threads"),(0,i.kt)("li",{parentName:"ul"},"For example, if you set the setTimeout timeout to 2 seconds, you don't have to wait 2 seconds",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"the wait happens elsewhere")))))),(0,i.kt)("h3",{id:"es6-job-queue"},"ES6 Job Queue"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ECMAScript 2015 introduced the concept of the Job Queue, which is used by Promises (also introduced in ES6/ES2015)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It's a way to execute the result of an async function as soon as possible, rather than being put at the end of the call stack"))),(0,i.kt)("li",{parentName:"ul"},"Promises that resolve before the current function ends will be executed right after the current function"),(0,i.kt)("li",{parentName:"ul"},"Similar to a rollercoaster ride at an amusement park",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"the message queue puts you at the back of the queue, behind all the other people, where you will have to wait for your turn"),(0,i.kt)("li",{parentName:"ul"},"while the job queue is the fastpass ticket that lets you take another ride right after you finished the previous one")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const bar = () => console.log("bar");\n\nconst baz = () => console.log("baz");\n\nconst foo = () => {\n  console.log("foo");\n  setTimeout(bar, 0);\n  new Promise((resolve, reject) =>\n    resolve("should be right after baz, before bar")\n  ).then((resolve) => console.log(resolve));\n  baz();\n};\n\nfoo();\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"foo\nbaz\nshould be right after baz, before bar\nbar\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://nodejs.dev/static/4bb05f4d91852eb8c6b3de5371451315/c83ae/call-stack-third-example.png",alt:"promises call back"})),(0,i.kt)("h3",{id:"concurrency-and-throughput"},"Concurrency and Throughput"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"JavaScript execution in Node.js is single threaded, so concurrency refers to the event loop's capacity to execute JavaScript callback functions after completing other work"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Any code that is expected to run in a concurrent manner must allow the event loop to continue running as non-JavaScript operations, like I/O, are occurring"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"As an example, let's consider a case where each request to a web server takes 50ms to complete and 45ms of that 50ms is database I/O that can be done asynchronously"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Choosing non-blocking asynchronous operations frees up that 45ms per request to handle other requests"),(0,i.kt)("li",{parentName:"ul"},"This is a significant difference in capacity just by choosing to use non-blocking methods instead of blocking methods"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The event loop is different than models in many other languages where additional threads may be created to handle concurrent work"))),(0,i.kt)("h2",{id:"processnexttick"},"process.nextTick()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Every time the event loop takes a full trip, we call it a tick")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When we pass a function to ",(0,i.kt)("inlineCode",{parentName:"p"},"process.nextTick()")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"we instruct the engine to invoke this function at the end of the current operation, before the next event loop tick starts")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"process.nextTick(() => {\n  // do something\n});\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The event loop is busy processing the current function code"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"When this operation ends, the JS engine runs all the functions passed to nextTick calls during that operation",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It's the way we can tell the JS engine to process a function asynchronously (after the current function), but as soon as possible, not queue it"))),(0,i.kt)("li",{parentName:"ul"},"Calling ",(0,i.kt)("inlineCode",{parentName:"li"},"setTimeout(() => {}, 0)")," will execute the function at the end of next tick, much later than when using ",(0,i.kt)("inlineCode",{parentName:"li"},"nextTick()")," which prioritizes the call and executes it just before the beginning of the next tick"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"nextTick()")," when you want to make sure that in the next event loop iteration that code is already executed"))),(0,i.kt)("h2",{id:"setimmediate"},"setImmediate()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When you want to execute some piece of code asynchronously, but as soon as possible"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"use the ",(0,i.kt)("inlineCode",{parentName:"li"},"setImmediate()")," function provided by Node.js"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Any function passed as the ",(0,i.kt)("inlineCode",{parentName:"p"},"setImmediate()")," argument is a callback that's executed in the next iteration of the event loop")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A function passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"process.nextTick()")," is going to be executed on the current iteration of the event loop after the current operation ends"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This means it will always execute before setTimeout and setImmediate"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A ",(0,i.kt)("inlineCode",{parentName:"p"},"setTimeout()")," callback with a 0ms delay is very similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"setImmediate()")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The execution order will depend on various factors, but they will be both run in the next iteration of the event loop"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A ",(0,i.kt)("inlineCode",{parentName:"p"},"process.nextTick callback")," is added to ",(0,i.kt)("inlineCode",{parentName:"p"},"process.nextTick queue")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"Promise.then() callback")," is added to promises microtask queue"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"setTimeout"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"setImmediate")," callback is added to macrotask queue"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Event loop executes tasks in"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"process.nextTick")," queue first"),(0,i.kt)("li",{parentName:"ol"},"then executes ",(0,i.kt)("inlineCode",{parentName:"li"},"promises.then()")," microtask queue"),(0,i.kt)("li",{parentName:"ol"},"then executes ",(0,i.kt)("inlineCode",{parentName:"li"},"setTimeout"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"setImmediate")," macrotask queue"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"code will"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"first call ",(0,i.kt)("inlineCode",{parentName:"li"},"start()")),(0,i.kt)("li",{parentName:"ol"},"then call ",(0,i.kt)("inlineCode",{parentName:"li"},"foo()")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"process.nextTick")," queue"),(0,i.kt)("li",{parentName:"ol"},"After that, it will handle ",(0,i.kt)("inlineCode",{parentName:"li"},"promises")," microtask queue, which prints bar and adds ",(0,i.kt)("inlineCode",{parentName:"li"},"zoo()")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"process.nextTick")," queue at the same time"),(0,i.kt)("li",{parentName:"ol"},"Then it will call ",(0,i.kt)("inlineCode",{parentName:"li"},"zoo()")," which has just been added"),(0,i.kt)("li",{parentName:"ol"},"In the end, the ",(0,i.kt)("inlineCode",{parentName:"li"},"baz()")," in macrotask queue is called")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const baz = () => console.log("baz");\nconst foo = () => console.log("foo");\nconst zoo = () => console.log("zoo");\n\nconst start = () => {\n  console.log("start");\n  setImmediate(baz);\n  new Promise((resolve, reject) => {\n    resolve("bar");\n  }).then((resolve) => {\n    console.log(resolve);\n    process.nextTick(zoo);\n  });\n  process.nextTick(foo);\n};\n\nstart();\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"start\nfoo\nbar\nzoo\nbaz\n")),(0,i.kt)("h2",{id:"javascript-timers"},"JavaScript Timers"),(0,i.kt)("h3",{id:"settimeout"},"setTimeout()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When writing JavaScript code, you might want to delay the execution of a function"),(0,i.kt)("li",{parentName:"ul"},"You specify a callback function to execute later, and a value expressing how later you want it to run, in milliseconds")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// method 1\nconst myFunction = (firstParam, secondParam) => {\n  // do something\n};\n\n// runs after 2 seconds\nsetTimeout(myFunction, 2000, firstParam, secondParam);\n\n// method 2\nsetTimeout(() => {\n  // do something with firstParam, secondParam\n}, 2000);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"clearing timeout"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const id = setTimeout(() => {\n  // should run after 2 seconds\n}, 2000);\n\n// I changed my mind\nclearTimeout(id);\n")))),(0,i.kt)("h3",{id:"setinterval"},"setInterval()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a function similar to setTimeout, with a difference: instead of running the callback function once, it will run it forever, at the specific time interval you specify (in milliseconds)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// method 1\nconst id = setInterval(() => {\n  // runs every 2 seconds\n}, 2000);\n\nclearInterval(id);\n\n// method 2\nconst interval = setInterval(() => {\n  if (App.somethingIWait === "arrived") {\n    clearInterval(interval);\n  }\n  // otherwise do things\n}, 100);\n')),(0,i.kt)("h3",{id:"recursive-settimeout"},"Recursive setTimeout"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"setInterval starts a function every n milliseconds, without any consideration about when a function finished its execution",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"if you need every function to execute after it has completed at a set interval, use recursive ",(0,i.kt)("inlineCode",{parentName:"li"},"setTimeout")," instead")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const myFunction = () => {\n  // do something\n\n  setTimeout(myFunction, 1000);\n};\n\nsetTimeout(myFunction, 1000);\n")),(0,i.kt)("h3",{id:"orchestrating-promises"},"Orchestrating promises"),(0,i.kt)("h4",{id:"promise-all"},"Promise all"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you need to synchronize different promises, ",(0,i.kt)("inlineCode",{parentName:"li"},"Promise.all()")," helps you define a list of promises, and execute something when they are all resolved")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// method 1\nconst f1 = fetch("/something.json");\nconst f2 = fetch("/something2.json");\n\nPromise.all([f1, f2])\n  .then((res) => {\n    console.log("Array of results", res);\n  })\n  .catch((err) => {\n    console.error(err);\n  });\n\n// method 2\nPromise.all([f1, f2]).then(([res1, res2]) => {\n  console.log("Results", res1, res2);\n});\n')),(0,i.kt)("h4",{id:"promise-race"},"Promise race"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Promise.race()")," runs when the first of the promises you pass to it settles (resolves or rejects), and it runs the attached callback just once, with the result of the first promise settled",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"only have 1 winner")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const first = new Promise((resolve, reject) => {\n  setTimeout(resolve, 500, "first");\n});\nconst second = new Promise((resolve, reject) => {\n  setTimeout(resolve, 100, "second");\n});\n\nPromise.race([first, second]).then((result) => {\n  console.log(result); // second\n});\n')),(0,i.kt)("h4",{id:"promise-any"},"Promise any"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Promise.any()")," settles when any of the promises you pass to it fulfill or all of the promises get rejected"),(0,i.kt)("li",{parentName:"ul"},"It returns a single promise that resolves with the value from the first promise that is fulfilled"),(0,i.kt)("li",{parentName:"ul"},"If all promises are rejected, then the returned promise is rejected with an AggregateError")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const first = new Promise((resolve, reject) => {\n  setTimeout(reject, 500, "first");\n});\nconst second = new Promise((resolve, reject) => {\n  setTimeout(reject, 100, "second");\n});\n\nPromise.any([first, second]).catch((error) => {\n  console.log(error); // AggregateError\n});\n')))}p.isMDXComponent=!0},77226:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nodejs-0dae90ce571c827afc0381e6e2f60f46.png"}}]);