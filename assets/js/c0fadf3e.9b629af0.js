"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[4695],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,f=d["".concat(o,".").concat(m)]||d[m]||l[m]||s;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<s;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},78885:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=r(83117),i=(r(67294),r(3905));const s={},a="Stack Linked List Example",c={unversionedId:"interviewPrep/data_structures/08LinkedLists/typescript/stackLinkedList",id:"interviewPrep/data_structures/08LinkedLists/typescript/stackLinkedList",title:"Stack Linked List Example",description:"",source:"@site/docs/interviewPrep/data_structures/08LinkedLists/typescript/stackLinkedList.md",sourceDirName:"interviewPrep/data_structures/08LinkedLists/typescript",slug:"/interviewPrep/data_structures/08LinkedLists/typescript/stackLinkedList",permalink:"/docs/interviewPrep/data_structures/08LinkedLists/typescript/stackLinkedList",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/data_structures/08LinkedLists/typescript/stackLinkedList.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sorted Linked List Example",permalink:"/docs/interviewPrep/data_structures/08LinkedLists/typescript/sortedLinkedList"},next:{title:"Hash Tables",permalink:"/docs/interviewPrep/data_structures/09HashTables/"}},o={},p=[],u={toc:p};function l(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"stack-linked-list-example"},"Stack Linked List Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class StackLinkedList<T> {\n  private items: DoublyLinkedList<T>;\n\n  constructor() {\n    this.items = new DoublyLinkedList<T>();\n  }\n\n  public push(element: T) {\n    this.items.push(element);\n  }\n\n  public pop() {\n    if (this.isEmpty()) {\n      return undefined;\n    }\n    const result = this.items.removeAt(this.size() - 1);\n    return result;\n  }\n\n  public peek() {\n    if (this.isEmpty()) {\n      return undefined;\n    }\n    return this.items.getNodeAt(this.size() - 1).element;\n  }\n\n  public isEmpty() {\n    return this.items.isEmpty();\n  }\n\n  public size() {\n    return this.items.size();\n  }\n\n  public clear() {\n    this.items.clear();\n  }\n\n  public toString() {\n    return this.items.toString();\n  }\n}\n")))}l.isMDXComponent=!0}}]);