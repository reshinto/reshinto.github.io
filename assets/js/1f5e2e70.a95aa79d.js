"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[2200],{3905:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>y});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),u=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},d=function(e){var r=u(e.components);return t.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),y=a,f=c["".concat(l,".").concat(y)]||c[y]||p[y]||o;return n?t.createElement(f,s(s({ref:r},d),{},{components:n})):t.createElement(f,s({ref:r},d))}));function y(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=c;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2775:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var t=n(7462),a=(n(7294),n(3905));const o={},s="Spiral Traverse",i={unversionedId:"interviewPrep/codingTests/medium/arrays/spiralTraverse",id:"interviewPrep/codingTests/medium/arrays/spiralTraverse",title:"Spiral Traverse",description:"Write a function that takes in an n x m two-dimensional array (that can be",source:"@site/docs/interviewPrep/codingTests/medium/arrays/spiralTraverse.md",sourceDirName:"interviewPrep/codingTests/medium/arrays",slug:"/interviewPrep/codingTests/medium/arrays/spiralTraverse",permalink:"/docs/interviewPrep/codingTests/medium/arrays/spiralTraverse",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/codingTests/medium/arrays/spiralTraverse.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Smallest Difference",permalink:"/docs/interviewPrep/codingTests/medium/arrays/smallestDifference"},next:{title:"Three Number Sum",permalink:"/docs/interviewPrep/codingTests/medium/arrays/threeNumberSum"}},l={},u=[],d={toc:u};function p(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spiral-traverse"},"Spiral Traverse"),(0,a.kt)("p",null,"Write a function that takes in an n x m two-dimensional array (that can be\nsquare-shaped when n == m) and returns a one-dimensional array of all the\narray's elements in spiral order."),(0,a.kt)("p",null,"Spiral order starts at the top left corner of the two-dimensional array, goes\nto the right, and proceeds in a spiral pattern all the way until every element\nhas been visited."),(0,a.kt)("p",null,"Sample Input"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"array = [\n  [1,   2,  3, 4],\n  [12, 13, 14, 5],\n  [11, 16, 15, 6],\n  [10,  9,  8, 7],\n]\n")),(0,a.kt)("p",null,"Sample Output\n",(0,a.kt)("inlineCode",{parentName:"p"},"[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# solution 1\ndef spiralTraverse(array):\n  # Write your code here.\n  startRow = 0\n  endRow = len(array) - 1\n  startCol = 0\n  endCol = len(array[0]) - 1\n  result = []\n  while startRow <= endRow and startCol <= endCol:\n    for i in range(startCol, endCol + 1):\n      result.append(array[startRow][i])\n\n    for i in range(startRow + 1, endRow + 1):\n      result.append(array[i][endCol])\n\n    for i in range(endCol - 1, startCol - 1, -1):\n      if startRow == endRow:\n        break\n      result.append(array[endRow][i])\n\n    for i in range(endRow - 1, startRow, -1):\n      if startCol == endCol:\n        break\n      result.append(array[i][startCol])\n\n    startRow += 1\n    endRow -= 1\n    startCol += 1\n    endCol -= 1\n  return result\n\n\n# solution 2\ndef spiralTraverse(array):\n  # Write your code here.\n  result = []\n  traverse(array, 0, len(array) - 1, 0, len(array[0]) - 1, result)\n  return result\n\n\ndef traverse(array, startRow, endRow, startCol, endCol, result):\n  if startRow > endRow or startCol > endCol:\n    return\n\n  for i in range(startCol, endCol + 1):\n    result.append(array[startRow][i])\n\n  for i in range(startRow + 1, endRow + 1):\n    result.append(array[i][endCol])\n\n  for i in range(endCol - 1, startCol - 1, -1):\n    if startRow == endRow:\n      return\n    result.append(array[endRow][i])\n\n  for i in range(endRow - 1, startRow, -1):\n    if startCol == endCol:\n      return\n    result.append(array[i][startCol])\n\n  traverse(array, startRow + 1, endRow - 1, startCol + 1, endCol - 1, result)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// solution 1\nfunction spiralTraverse(array) {\n  // Write your code here.\n  const result = [];\n  let startRow = 0;\n  let endRow = array.length - 1;\n  let startCol = 0;\n  let endCol = array[0].length - 1;\n\n  while (startRow <= endRow && startCol <= endCol) {\n    for (let i = startCol; i < endCol + 1; i++) {\n      result.push(array[startRow][i]);\n    }\n\n    for (let i = startRow + 1; i < endRow + 1; i++) {\n      result.push(array[i][endCol]);\n    }\n\n    for (let i = endCol - 1; i > startCol - 1; i--) {\n      if (startRow === endRow) {\n        break;\n      }\n      result.push(array[endRow][i]);\n    }\n\n    for (let i = endRow - 1; i > startRow; i--) {\n      if (startCol === endCol) {\n        break;\n      }\n      result.push(array[i][startCol]);\n    }\n\n    startRow++;\n    endRow--;\n    startCol++;\n    endCol--;\n  }\n  return result;\n}\n\n// solution 2\nfunction spiralTraverse(array) {\n  // Write your code here.\n  const result = [];\n  traverse(array, 0, array.length - 1, 0, array[0].length - 1, result);\n  return result;\n}\n\nfunction traverse(array, startRow, endRow, startCol, endCol, result) {\n  if (startRow > endRow || startCol > endCol) {\n    return;\n  }\n\n  for (let i = startCol; i < endCol + 1; i++) {\n    result.push(array[startRow][i]);\n  }\n\n  for (let i = startRow + 1; i < endRow + 1; i++) {\n    result.push(array[i][endCol]);\n  }\n\n  for (let i = endCol - 1; i > startCol - 1; i--) {\n    if (startRow === endRow) {\n      break;\n    }\n    result.push(array[endRow][i]);\n  }\n\n  for (let i = endRow - 1; i > startRow; i--) {\n    if (startCol === endCol) {\n      break;\n    }\n    result.push(array[i][startCol]);\n  }\n\n  traverse(array, startRow + 1, endRow - 1, startCol + 1, endCol - 1, result);\n}\n")))}p.isMDXComponent=!0}}]);