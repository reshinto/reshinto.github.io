"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[31235],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return a?r.createElement(g,s(s({ref:t},p),{},{components:a})):r.createElement(g,s({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},50270:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=a(83117),n=(a(67294),a(3905));const i={},s="Strings",o={unversionedId:"interviewPrep/data_structures/11Strings/readme",id:"interviewPrep/data_structures/11Strings/readme",title:"Strings",description:"- strings are generally considered to be a data type that behaves like a data structure",source:"@site/docs/interviewPrep/data_structures/11Strings/readme.md",sourceDirName:"interviewPrep/data_structures/11Strings",slug:"/interviewPrep/data_structures/11Strings/",permalink:"/docs/interviewPrep/data_structures/11Strings/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/data_structures/11Strings/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Stack Array Example",permalink:"/docs/interviewPrep/data_structures/10StacksAndQueues/typescript/stackArray"},next:{title:"Graphs",permalink:"/docs/interviewPrep/data_structures/12Graphs/"}},l={},c=[{value:"e.g. of an operation that&#39;s deceptively expensive due to string immutability",id:"eg-of-an-operation-thats-deceptively-expensive-due-to-string-immutability",level:2},{value:"standard operations and complexities",id:"standard-operations-and-complexities",level:2},{value:"Traversing a string: O(n) time, O(1) space",id:"traversing-a-string-on-time-o1-space",level:3},{value:"Copying a string: O(n) time and space",id:"copying-a-string-on-time-and-space",level:3},{value:"Accessing a character at a given index in a string: O(1) time and space",id:"accessing-a-character-at-a-given-index-in-a-string-o1-time-and-space",level:3},{value:"Insert a value in a string: O(n) time",id:"insert-a-value-in-a-string-on-time",level:3},{value:"Find sub strings within a string",id:"find-sub-strings-within-a-string",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"strings"},"Strings"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"strings are generally considered to be a data type that behaves like a data structure"),(0,n.kt)("li",{parentName:"ul"},"strings are stored in memory as arrays of integers",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"where each english character in a given string is mapped to an integer via some character-encoding standard like ASCII",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"each character is stored in memory as 1 byte of 8 bits"))),(0,n.kt)("li",{parentName:"ul"},"other languages would use other character encoding standard and might require more space, which is more bytes"))),(0,n.kt)("li",{parentName:"ul"},"strings behave much like normal arrays, with the main distinction being that, in most programming languages (C++ is a notable exception). strings are immutable",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"this means that they can't be edited after creation"),(0,n.kt)("li",{parentName:"ul"},"this also means that simple operations like appending a character to a string are more expensive than they might appear")))),(0,n.kt)("h2",{id:"eg-of-an-operation-thats-deceptively-expensive-due-to-string-immutability"},"e.g. of an operation that's deceptively expensive due to string immutability"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'string = "this is a string"\nnewString = ""\n\nfor character in string:\n    newString += character  # creates a new string\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the operation above has a time complexity of O(n",(0,n.kt)("sup",null,"2"),")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"where n is the length of string",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"because each addition of a character to newString creates an entirely new string and is itself an O(n) operation"))),(0,n.kt)("li",{parentName:"ul"},"therefore, n O(n) operations are performed, leading to an O(n",(0,n.kt)("sup",null,"2"),") time complexity operation overall")))),(0,n.kt)("h2",{id:"standard-operations-and-complexities"},"standard operations and complexities"),(0,n.kt)("h3",{id:"traversing-a-string-on-time-o1-space"},"Traversing a string: O(n) time, O(1) space"),(0,n.kt)("h3",{id:"copying-a-string-on-time-and-space"},"Copying a string: O(n) time and space"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"space complexity is linear because it would be storing another n characters in space")),(0,n.kt)("h3",{id:"accessing-a-character-at-a-given-index-in-a-string-o1-time-and-space"},"Accessing a character at a given index in a string: O(1) time and space"),(0,n.kt)("h3",{id:"insert-a-value-in-a-string-on-time"},"Insert a value in a string: O(n) time"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"in C++, strings are mutable, so alteration of string after creation is possible",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"time complexity is O(1) for this case"))),(0,n.kt)("li",{parentName:"ul"},"other than C++, in other languages, strings are immutable",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"strings cannot be altered after creation"),(0,n.kt)("li",{parentName:"ul"},"to alter a string, need to copy the string and create a brand new string that have that new character",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"in this case, it is better to split the string in to an actual array of characters, append the new character, then rejoin them back into a string")))))),(0,n.kt)("h2",{id:"find-sub-strings-within-a-string"},"Find sub strings within a string"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Knuth-Morris-Pratt algorith",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"a very fast but complex algorithm"),(0,n.kt)("li",{parentName:"ul"},"allows you to find 1 sub string inside another string"),(0,n.kt)("li",{parentName:"ul"},"or check if it is present in another string")))))}u.isMDXComponent=!0}}]);