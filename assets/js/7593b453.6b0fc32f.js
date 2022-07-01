"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[3553],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,v=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(v,s(s({ref:t},u),{},{components:n})):r.createElement(v,s({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={},s="Remove Duplicates From Linked List",a={unversionedId:"interviewPrep/codingTests/easy/linkedLists/removeDuplicatesFromLinkedList",id:"interviewPrep/codingTests/easy/linkedLists/removeDuplicatesFromLinkedList",title:"Remove Duplicates From Linked List",description:"You're given the head of a Singly Linked List whose nodes are in sorted order",source:"@site/docs/interviewPrep/codingTests/easy/linkedLists/removeDuplicatesFromLinkedList.md",sourceDirName:"interviewPrep/codingTests/easy/linkedLists",slug:"/interviewPrep/codingTests/easy/linkedLists/removeDuplicatesFromLinkedList",permalink:"/docs/interviewPrep/codingTests/easy/linkedLists/removeDuplicatesFromLinkedList",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/codingTests/easy/linkedLists/removeDuplicatesFromLinkedList.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Minimum Waiting Time",permalink:"/docs/interviewPrep/codingTests/easy/greedyAlgorithms/minimumWaitingTime"},next:{title:"Nth Fibonacci",permalink:"/docs/interviewPrep/codingTests/easy/recursion/nthFibonacci"}},l={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"remove-duplicates-from-linked-list"},"Remove Duplicates From Linked List"),(0,i.kt)("p",null,"You're given the head of a Singly Linked List whose nodes are in sorted order\nwith respect to their values. Write a function that returns a modified version\nof the Linked List that doesn't contain any nodes with duplicate values. The\nLinked List should be modified in place (i.e., you shouldn't create a brand\nnew list), and the modified Linked List should still have its nodes sorted\nwith respect to their values."),(0,i.kt)("p",null,"Each LinkedList node has an integer value as well as\na next node pointing to the next node in the list or to\nNone / null if it's the tail of the list."),(0,i.kt)("p",null,"Sample Input\n",(0,i.kt)("inlineCode",{parentName:"p"},"linkedList = 1 -> 1 -> 3 -> 4 -> 4 -> 4 -> 5 -> 6 -> 6 ")),(0,i.kt)("p",null,"Sample Output\n",(0,i.kt)("inlineCode",{parentName:"p"},"1 -> 3 -> 4 -> 5 -> 6 ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# This is an input class. Do not edit.\nclass LinkedList:\n  def __init__(self, value):\n    self.value = value\n    self.next = None\n\n\ndef removeDuplicatesFromLinkedList(linkedList):\n  # Write your code here.\n  current = linkedList\n  while current:\n    while current.next and current.value == current.next.value:\n      current.next = current.next.next\n    current = current.next\n  return linkedList\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// This is an input class. Do not edit.\nclass LinkedList {\n  constructor(value) {\n    this.value = value;\n    this.next = null;\n  }\n}\n\nfunction removeDuplicatesFromLinkedList(linkedList) {\n  // Write your code here.\n  let current = linkedList;\n  while (current) {\n    while (current.next && current.value === current.next.value) {\n      current.next = current.next.next;\n    }\n    current = current.next;\n  }\n  return linkedList;\n}\n")))}d.isMDXComponent=!0}}]);