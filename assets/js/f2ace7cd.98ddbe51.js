"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[4665],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={},i="Recursion",o={unversionedId:"interviewPrep/algorithms_and_techniques/recursion/readme",id:"interviewPrep/algorithms_and_techniques/recursion/readme",title:"Recursion",description:"- it is a method that calls itself",source:"@site/docs/interviewPrep/algorithms_and_techniques/recursion/readme.md",sourceDirName:"interviewPrep/algorithms_and_techniques/recursion",slug:"/interviewPrep/algorithms_and_techniques/recursion/",permalink:"/docs/interviewPrep/algorithms_and_techniques/recursion/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/algorithms_and_techniques/recursion/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Greedy Algorithm",permalink:"/docs/interviewPrep/algorithms_and_techniques/greedy_algorithms/"},next:{title:"Decimal To Binary",permalink:"/docs/interviewPrep/algorithms_and_techniques/recursion/decimalToBinary"}},s={},c=[{value:"Strategy",id:"strategy",level:2},{value:"Pros &amp; Cons of using Recursion",id:"pros--cons-of-using-recursion",level:2},{value:"Call Stack",id:"call-stack",level:2},{value:"Normal Call Stack without Recursion",id:"normal-call-stack-without-recursion",level:3},{value:"Call Stack with Recursion",id:"call-stack-with-recursion",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"recursion"},"Recursion"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"it is a method that calls itself",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"it can return or can also not return a value"),(0,a.kt)("li",{parentName:"ul"},"the stopping condition is when it hits the ",(0,a.kt)("inlineCode",{parentName:"li"},"base case"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"this means that we can no longer grow the number of recursive calls that we are storing in memory"))))),(0,a.kt)("li",{parentName:"ul"},"using ATM Analogy",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"what is the least amount of work i can do"),(0,a.kt)("li",{parentName:"ol"},"when would the process complete")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const getMyPositionInLine = (person) => {\n  if (person.nextInLine === null) {\n    return 1;  // this is the base case\n  }\n  return 1 + getMyPositionInLine(person.nextInLine);  // this is the recursive call\n}\n")))),(0,a.kt)("h2",{id:"strategy"},"Strategy"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Define the base case / stopping condition"),(0,a.kt)("li",{parentName:"ol"},"Do some work to shrink the problem space")),(0,a.kt)("h2",{id:"pros--cons-of-using-recursion"},"Pros & Cons of using Recursion"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Pros"),(0,a.kt)("th",{parentName:"tr",align:null},"Cons"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"bridges the gap between elegance and complexity"),(0,a.kt)("td",{parentName:"tr",align:null},"slow due to CPU overhead")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reduces the need for complex loops and auxiliary data structures"),(0,a.kt)("td",{parentName:"tr",align:null},"can lead to out of memory errors / stack overflow exceptions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"can reduce time complexity easily with memoization"),(0,a.kt)("td",{parentName:"tr",align:null},"can be unnecessarily complex if poorly constructed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"works really well with recursive structures like trees and graphs"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"call-stack"},"Call Stack"),(0,a.kt)("h3",{id:"normal-call-stack-without-recursion"},"Normal Call Stack without Recursion"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a is dependent on b which is dependent on c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'function a() {\n  return "hello " + b();\n}\n  \nfunction b() {\n  return "my " + c();\n}\n  \nfunction c() {\n  return "friends.";\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'the following is a call stack\neach row is a stack frame\n  \nwhen function a is called, the return value is added to the call stack\n|----------------|\n|                |\n|                |\n|                |\n| "hello " + b() |\n|----------------|\n  \nthe return value also calls function b, it gets added to the call stack\n|----------------|\n|                |\n|                |\n| "my " + c()    |\n| "hello " + b() |\n|----------------|\n  \nthe return value also calls function c, it gets added to the call stack\n|----------------|\n|                |\n| "friends."     |\n| "my " + c()    |\n| "hello " + b() |\n|----------------|\n  \nsince return value for this has hit the base case,\nit will start executing by poping the top stack frame from the call stack\n \nreturn result: "friends."\n|--------------------|\n|                    |\n|                    |\n| "my " + "friends." |\n| "hello " + b()     |\n|--------------------|\n \nreturn result: "my friends."\n|--------------------------|\n|                          |\n|                          |\n|                          |\n| "hello " + "my friends." |\n|--------------------------|\n \nreturn result: "hello my friends."\n|--------------------------|\n|                          |\n|                          |\n|                          |\n|                          |\n|--------------------------|\n')),(0,a.kt)("h3",{id:"call-stack-with-recursion"},"Call Stack with Recursion"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function a() {\n  return a();\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"   a()\n|--a()--|    -> stack overflow when we run out of memory\n|  a()  |\n|  a()  |\n|-------|\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the above example illustrates why a base case is required to prevent a stack overflow situation",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"a return value is important to do so")))))}p.isMDXComponent=!0}}]);