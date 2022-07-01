"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[5990],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>h});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),p=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,d=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),c=p(t),h=o,f=c["".concat(d,".").concat(h)]||c[h]||u[h]||s;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=c;var a={};for(var d in n)hasOwnProperty.call(n,d)&&(a[d]=n[d]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2608:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const s={},i="Node Depths",a={unversionedId:"interviewPrep/codingTests/easy/binaryTrees/nodeDepths",id:"interviewPrep/codingTests/easy/binaryTrees/nodeDepths",title:"Node Depths",description:"The distance between a node in a Binary Tree and the tree's root is called the",source:"@site/docs/interviewPrep/codingTests/easy/binaryTrees/nodeDepths.md",sourceDirName:"interviewPrep/codingTests/easy/binaryTrees",slug:"/interviewPrep/codingTests/easy/binaryTrees/nodeDepths",permalink:"/docs/interviewPrep/codingTests/easy/binaryTrees/nodeDepths",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/codingTests/easy/binaryTrees/nodeDepths.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Branch Sums",permalink:"/docs/interviewPrep/codingTests/easy/binaryTrees/branchSums"},next:{title:"Depth-first Search",permalink:"/docs/interviewPrep/codingTests/easy/graphs/depth-firstSearch"}},d={},p=[],l={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"node-depths"},"Node Depths"),(0,o.kt)("p",null,"The distance between a node in a Binary Tree and the tree's root is called the\nnode's depth."),(0,o.kt)("p",null,"Write a function that takes in a Binary Tree and returns the sum of its nodes'\ndepths."),(0,o.kt)("p",null,"Each BinaryTree node has an integer value, a\nleft child node, and a right child node. Children\nnodes can either be BinaryTree nodes themselves or\nNone / null"),(0,o.kt)("p",null,"Sample Input"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  tree =    1\n         /     \\\n        2       3\n      /   \\   /   \\\n     4     5 6     7\n   /   \\\n  8     9\n")),(0,o.kt)("p",null,"Sample Output\n16"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// The depth of the node with value 2 is 1.\n// The depth of the node with value 3 is 1.\n// The depth of the node with value 4 is 2.\n// The depth of the node with value 5 is 2.\n// Etc..\n// Summing all of these depths yields 16.\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# This is the class of the input binary tree.\nclass BinaryTree:\n  def __init__(self, value):\n    self.value = value\n    self.left = None\n    self.right = None\n\n\n# solution 1\ndef nodeDepths(root):\n  # Write your code here.\n  sum = 0\n  s = [{"node": root, "d": 0}]\n  while len(s) > 0:\n    current = s.pop()\n    node, d = current["node"], current["d"]\n    if not node:\n      continue\n    s.append({"node": node.right, "d": d+1})\n    s.append({"node": node.left, "d": d+1})\n    sum += d\n  return sum\n\n\n# solution 2\ndef nodeDepths(root):\n  # Write your code here.\n  sum = 0\n  s = [{"node": root, "d": 0}]\n  while len(s) > 0:\n    current = s.pop()\n    node, d = current["node"], current["d"]\n    if node.right:\n      s.append({"node": node.right, "d": d+1})\n    if node.left:\n      s.append({"node": node.left, "d": d+1})\n    sum += d\n  return sum\n\n\n# solution 3\ndef nodeDepths(root):\n  # Write your code here.\n  return getDepth(root, 0)\n\n\ndef getDepth(current, depth):\n  if not current:\n    return 0\n  return depth + getDepth(current.left, depth+1) + getDepth(current.right, depth+1)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// This is the class of the input binary tree.\nclass BinaryTree {\n  constructor(value) {\n    this.value = value;\n    this.left = null;\n    this.right = null;\n  }\n}\n\n// solution 1\nfunction nodeDepths(root) {\n  // Write your code here.\n  return getDepths(root, 0);\n}\n\nfunction getDepths(current, depth) {\n  if (!current) {\n    return 0;\n  }\n  return (\n    depth +\n    getDepths(current.left, depth + 1) +\n    getDepths(current.right, depth + 1)\n  );\n}\n\n// solution 2\nfunction nodeDepths(root) {\n  // Write your code here.\n  let sum = 0;\n  const s = [{node: root, d: 0}];\n  while (s.length > 0) {\n    const {node, d} = s.pop();\n    if (!node) {\n      continue;\n    }\n    sum += d;\n    s.push({node: node.right, d: d + 1});\n    s.push({node: node.left, d: d + 1});\n  }\n  return sum;\n}\n")))}u.isMDXComponent=!0}}]);