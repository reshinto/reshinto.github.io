"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[8983],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,L=u["".concat(l,".").concat(m)]||u[m]||c[m]||s;return n?r.createElement(L,o(o({ref:t},d),{},{components:n})):r.createElement(L,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var r=n(83117),i=(n(67294),n(3905));const s={},o="Sorted Linked List Example",a={unversionedId:"interviewPrep/data_structures/08LinkedLists/typescript/sortedLinkedList",id:"interviewPrep/data_structures/08LinkedLists/typescript/sortedLinkedList",title:"Sorted Linked List Example",description:"Utils",source:"@site/docs/interviewPrep/data_structures/08LinkedLists/typescript/sortedLinkedList.md",sourceDirName:"interviewPrep/data_structures/08LinkedLists/typescript",slug:"/interviewPrep/data_structures/08LinkedLists/typescript/sortedLinkedList",permalink:"/docs/interviewPrep/data_structures/08LinkedLists/typescript/sortedLinkedList",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/data_structures/08LinkedLists/typescript/sortedLinkedList.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Singly Linked List Example",permalink:"/docs/interviewPrep/data_structures/08LinkedLists/typescript/singlyLinkedList"},next:{title:"Stack Linked List Example",permalink:"/docs/interviewPrep/data_structures/08LinkedLists/typescript/stackLinkedList"}},l={},p=[{value:"Utils",id:"utils",level:2},{value:"Sorted Linked List",id:"sorted-linked-list",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sorted-linked-list-example"},"Sorted Linked List Example"),(0,i.kt)("h2",{id:"utils"},"Utils"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"enum Compare {\n  LessThan = -1,\n  BiggerThan = 1,\n  Equals = 0,\n}\n\nfunction compare<T>(a: T, b: T): number {\n  if (a === b) {\n    return Compare.Equals;\n  }\n  return a < b ? Compare.LessThan : Compare.BiggerThan;\n}\n")),(0,i.kt)("h2",{id:"sorted-linked-list"},"Sorted Linked List"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class SortedLinkedList<T> extends LinkedList<T> {\n  /**\n   * @description: Add an element to the linked list\n   * @param {T} element\n   */\n  public push(element: T) {\n    if (this.isEmpty()) {\n      super.push(element);\n    } else {\n      const index = this.getIndexNextSortedElement(element);\n      super.insert(element, index);\n    }\n  }\n\n  /**\n   * @description: Add an element to the linked list\n   * @param {T} element\n   */\n  public insert(element: T, index: number = 0) {\n    if (this.isEmpty()) {\n      return super.insert(element, 0);\n    }\n    index = this.getIndexNextSortedElement(element);\n    return super.insert(element, index);\n  }\n\n  /**\n   * @private\n   * @description: Get the position where the element should be inserted\n   * @param {T} element\n   * @return {Number} index\n   */\n  private getIndexNextSortedElement(element: T) {\n    let current = this.head;\n    let i = 0;\n\n    for (; i < this.size() && current; i++) {\n      const comp = compare(element, current.element);\n      if (comp === Compare.LESS_THAN) {\n        return i;\n      }\n      current = current.next;\n    }\n\n    return i;\n  }\n}\n")))}c.isMDXComponent=!0}}]);