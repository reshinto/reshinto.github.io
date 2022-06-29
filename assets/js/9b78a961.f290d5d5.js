"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[5243],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(r),u=a,f=d["".concat(c,".").concat(u)]||d[u]||h[u]||i;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7841:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={},s="Depth-first Search",o={unversionedId:"interviewPrep/codingTests/easy/graphs/depth-firstSearch",id:"interviewPrep/codingTests/easy/graphs/depth-firstSearch",title:"Depth-first Search",description:"You're given a Node class that has a name and an",source:"@site/docs/interviewPrep/codingTests/easy/graphs/depth-firstSearch.md",sourceDirName:"interviewPrep/codingTests/easy/graphs",slug:"/interviewPrep/codingTests/easy/graphs/depth-firstSearch",permalink:"/docs/interviewPrep/codingTests/easy/graphs/depth-firstSearch",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/codingTests/easy/graphs/depth-firstSearch.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Node Depths",permalink:"/docs/interviewPrep/codingTests/easy/binaryTrees/nodeDepths"},next:{title:"Class Photos",permalink:"/docs/interviewPrep/codingTests/easy/greedyAlgorithms/classPhotos"}},c={},p=[],l={toc:p};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"depth-first-search"},"Depth-first Search"),(0,a.kt)("p",null,"  You're given a Node class that has a name and an\narray of optional children nodes. When put together, nodes form\nan acyclic tree-like structure."),(0,a.kt)("p",null,"  Implement the depthFirstSearch method on the\nNode class, which takes in an empty array, traverses the tree\nusing the Depth-first Search approach (specifically navigating the tree from\nleft to right), stores all of the nodes' names in the input array, and returns\nit."),(0,a.kt)("p",null,"  If you're unfamiliar with Depth-first Search, we recommend watching the\nConceptual Overview section of this question's video explanation before\nstarting to code."),(0,a.kt)("p",null,"  Sample Input"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"graph = A\n     /  |  \\\n    B   C   D\n   / \\     / \\\n  E   F   G   H\n     / \\   \\\n    I   J   K\n")),(0,a.kt)("p",null,"  Sample Output\n",(0,a.kt)("inlineCode",{parentName:"p"},'["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Node:\n  def __init__(self, name):\n    self.children = []\n    self.name = name\n\n  def addChild(self, name):\n    self.children.append(Node(name))\n    return self\n\n  def depthFirstSearch(self, array):\n    array.append(self.name)\n    for child in self.children:\n      child.depthFirstSearch(array)\n    return array\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"class Node {\n  constructor(name) {\n    this.name = name;\n    this.children = [];\n  }\n\n  addChild(name) {\n    this.children.push(new Node(name));\n    return this;\n  }\n\n  depthFirstSearch(array) {\n    // Write your code here.\n    array.push(this.name);\n    for (const child of this.children) {\n      child.depthFirstSearch(array);\n    }\n    return array;\n  }\n}\n")))}h.isMDXComponent=!0}}]);