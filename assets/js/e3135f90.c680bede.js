"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[7997],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>p});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},d=Object.keys(e);for(r=0;r<d.length;r++)t=d[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)t=d[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,d=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(t),p=o,v=h["".concat(a,".").concat(p)]||h[p]||l[p]||d;return t?r.createElement(v,i(i({ref:n},u),{},{components:t})):r.createElement(v,i({ref:n},u))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var d=t.length,i=new Array(d);i[0]=h;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<d;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},48605:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>d,metadata:()=>s,toc:()=>c});var r=t(83117),o=(t(67294),t(3905));const d={},i="Reverse Linked List",s={unversionedId:"interviewPrep/algorithms_and_techniques/recursion/reverseLinkedList",id:"interviewPrep/algorithms_and_techniques/recursion/reverseLinkedList",title:"Reverse Linked List",description:"- supporting code",source:"@site/docs/interviewPrep/algorithms_and_techniques/recursion/reverseLinkedList.md",sourceDirName:"interviewPrep/algorithms_and_techniques/recursion",slug:"/interviewPrep/algorithms_and_techniques/recursion/reverseLinkedList",permalink:"/docs/interviewPrep/algorithms_and_techniques/recursion/reverseLinkedList",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/algorithms_and_techniques/recursion/reverseLinkedList.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Palindrome",permalink:"/docs/interviewPrep/algorithms_and_techniques/recursion/palindrome"},next:{title:"Recursion with strings",permalink:"/docs/interviewPrep/algorithms_and_techniques/recursion/reverseString"}},a={},c=[{value:"Iterative solution",id:"iterative-solution",level:2}],u={toc:c};function l(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"reverse-linked-list"},"Reverse Linked List"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Linked list are common data structures used to store data that is not necessarily contiguously stored in memory\nRecursion can be used for such things\n\ninput: node1 -> node2 -> node3 -> node4 -> node5 -> node6\noutput: node1 <- node2 <- node3 <- node4 <- node5 <- node6\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function reverseList(head) {\n  if (!head || !head.next) {\n    return head;\n  }\n  newFirstNode = reverseList(head.next);\n  head.next.next = head;\n  head.next = null;\n  return newFirstNode;\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"supporting code"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'class Node {\n  constructor(value) {\n    this.value = value;\n    this.next = null;\n  }\n\n  setNext(node) {\n    this.next = node;\n  }\n\n  getNext() {\n    return this.next;\n  }\n}\n\nfunction printLinkedList(node) {\n  let tmp = node;\n  let result = "";\n  while (tmp) {\n    result += tmp.value + " ";\n    tmp = tmp.getNext();\n  }\n  console.log(result);\n}\n')))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"input: node1 -> node2 -> node3 -> node4 -> node5 -> node6\n\ncurrent node is node1\nsince current head and head.next is not null or undefined,\nit means that there is a next node which it is pointing to.\ntherefore, the return value would be added to the stack and code will move to the next node at node2\n|--------------------|\n| reverseList(node2) |\n|--------------------|\n\nmove to the next recursion call\ncurrent node is node2\nsince current head and head.next is not null or undefined,\nit means that there is a next node which it is pointing to.\ntherefore, the return value would be added to the stack and code will move to the next node at node3\n|--------------------|\n| reverseList(node3) |\n| reverseList(node2) |\n|--------------------|\n\nmove to the next recursion call\ncurrent node is node3\nsince current head and head.next is not null or undefined,\nit means that there is a next node which it is pointing to.\ntherefore, the return value would be added to the stack and code will move to the next node at node4\n|--------------------|\n| reverseList(node4) |\n| reverseList(node3) |\n| reverseList(node2) |\n|--------------------|\n\nmove to the next recursion call\ncurrent node is node4\nsince current head and head.next is not null or undefined,\nit means that there is a next node which it is pointing to.\ntherefore, the return value would be added to the stack and code will move to the next node at node5\n|--------------------|\n| reverseList(node5) |\n| reverseList(node4) |\n| reverseList(node3) |\n| reverseList(node2) |\n|--------------------|\n\nmove to the next recursion call\ncurrent node is node5\nsince current head and head.next is not null or undefined,\nit means that there is a next node which it is pointing to.\ntherefore, the return value would be added to the stack and code will move to the next node at node6\n|--------------------|\n| reverseList(node6) |\n| reverseList(node5) |\n| reverseList(node4) |\n| reverseList(node3) |\n| reverseList(node2) |\n|--------------------|\n\nmove to the next recursion call\ncurrent node is node6\nsince current head.next is null, this has hit the base case,\nit will start executing by poping the top stack frame from the call stack\n\nnode1 -> node2 -> node3 -> node4 -> node5 -> node6\n\nreturn result: node6\n|--------------------|\n| node6              |\n| reverseList(node5) |\n| reverseList(node4) |\n| reverseList(node3) |\n| reverseList(node2) |\n|--------------------|\n\ncontinue at current node5\nnode6 is popped off the stack and assigned to newFirstNode\nset node5.next.next which is node6.next as node5\nbreak node5.next which was node6 and set as null;\n\nnode1 -> node2 -> node3 -> node4 -> node5 | node6 -> node5\n\nreturn result: node6\n|--------------------|\n| node6              |\n| reverseList(node4) |\n| reverseList(node3) |\n| reverseList(node2) |\n|--------------------|\n\ncontinue at current node4\nnode6 is popped off the stack and assigned to newFirstNode\nset node4.next.next which is node5.next as node4\nbreak node4.next which was node5 and set as null;\n\nnode1 -> node2 -> node3 -> node4 | node6 -> node5 -> node4\n\nreturn result: node6\n|--------------------|\n| node6              |\n| reverseList(node3) |\n| reverseList(node2) |\n|--------------------|\n\ncontinue at current node3\nnode6 is popped off the stack and assigned to newFirstNode\nset node3.next.next which is node4.next as node3\nbreak node3.next which was node4 and set as null;\n\nnode1 -> node2 -> node3 | node6 -> node5 -> node4 -> node3\n\nreturn result: node6\n|--------------------|\n| node6              |\n| reverseList(node2) |\n|--------------------|\n\ncontinue at current node2\nnode6 is popped off the stack and assigned to newFirstNode\nset node2.next.next which is node3.next as node2\nbreak node2.next which was node3 and set as null;\n\nnode1 -> node2 | node6 -> node5 -> node4 -> node3 -> node2\n\nreturn result: node6\n|--------------------|\n| node6              |\n|--------------------|\n\ncontinue at current node1\nnode6 is popped off the stack and assigned to newFirstNode\nset node1.next.next which is node2.next as node1\nbreak node1.next which was node2 and set as null;\n\nnode1 | node6 -> node5 -> node4 -> node3 -> node2 -> node1\n\nreturn result: node6\n\noutput: node6 -> node5 -> node4 -> node3 -> node2 -> node1\n")),(0,o.kt)("h2",{id:"iterative-solution"},"Iterative solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function reverseList(head) {\n  let newNext = null;\n  let current = head;\n  while (current) {\n    const tmp = current.next;\n    current.next = newNext;\n    newNext = current;\n    current = tmp;\n  }\n  return newNext;\n}\n")))}l.isMDXComponent=!0}}]);