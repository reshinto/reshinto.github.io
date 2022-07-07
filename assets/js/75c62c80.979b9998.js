"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[4434],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>f});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),l=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},u=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},y={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,g=p["".concat(s,".").concat(f)]||p[f]||y[f]||i;return n?t.createElement(g,o(o({ref:r},u),{},{components:n})):t.createElement(g,o({ref:r},u))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},65171:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=n(87462),a=(n(67294),n(3905));const i={},o="Binary Search",c={unversionedId:"interviewPrep/codingTests/easy/searching/binarySearch",id:"interviewPrep/codingTests/easy/searching/binarySearch",title:"Binary Search",description:"Write a function that takes in a sorted array of integers as well as a target",source:"@site/docs/interviewPrep/codingTests/easy/searching/binarySearch.md",sourceDirName:"interviewPrep/codingTests/easy/searching",slug:"/interviewPrep/codingTests/easy/searching/binarySearch",permalink:"/docs/interviewPrep/codingTests/easy/searching/binarySearch",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/codingTests/easy/searching/binarySearch.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Product Sum",permalink:"/docs/interviewPrep/codingTests/easy/recursion/productSum"},next:{title:"Find Three Largest Numbers",permalink:"/docs/interviewPrep/codingTests/easy/searching/findThreeLargestNumbers"}},s={},l=[],u={toc:l};function y(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"binary-search"},"Binary Search"),(0,a.kt)("p",null,"Write a function that takes in a sorted array of integers as well as a target\ninteger. The function should use the Binary Search algorithm to determine if\nthe target integer is contained in the array and should return its index if it\nis, otherwise -1"),(0,a.kt)("p",null,"If you're unfamiliar with Binary Search, we recommend watching the Conceptual\nOverview section of this question's video explanation before starting to code."),(0,a.kt)("p",null,"Sample Input\n",(0,a.kt)("inlineCode",{parentName:"p"},"array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"target = 33")),(0,a.kt)("p",null,"Sample Output\n3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# solution 1\ndef binarySearch(array, target):\n  # Write your code here.\n  L = 0\n  R = len(array) - 1\n  while L is not R:\n    M = round((R - L) / 2) + L\n    V = array[M]\n    if array[L] == target:\n      return L\n    if array[R] == target:\n      return R\n    if V == target:\n      return M\n    elif target > V:\n      L = M + 1\n    elif target < V:\n      R = M - 1\n    else:\n      break\n  return -1\n\n\n# solution 2\ndef binarySearch(array, target):\n  # Write your code here.\n  return search(array, target, 0, len(array)-1)\n\n\ndef search(array, target, L, R):\n  if L > R:\n    return -1\n  M = (R + L) // 2\n  V = array[M]\n  if target == V:\n    return M\n  elif target > V:\n    return search(array, target, L+1, R)\n  else:\n    return search(array, target, L, R-1)\n\n\n# solution 3\ndef binarySearch(array, target):\n  # Write your code here.\n  L = 0\n  R = len(array) - 1\n  while L <= R:\n    M = (R + L) // 2\n    V = array[M]\n    if target == V:\n      return M\n    elif target > V:\n      L = M + 1\n    else:\n      R = M - 1\n  return -1\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// solution 1\nfunction binarySearch(array, target) {\n  // Write your code here.\n  let L = 0;\n  let R = array.length - 1;\n  while (L <= R) {\n    const M = Math.floor((R + L) / 2);\n    const V = array[M];\n    if (target === V) {\n      return M;\n    } else if (target > V) {\n      L = M + 1;\n    } else {\n      R = M - 1;\n    }\n  }\n  return -1;\n}\n\n// solution 2\nfunction binarySearch(array, target) {\n  // Write your code here.\n  return search(array, target, 0, array.length - 1);\n}\n\nfunction search(array, target, L, R) {\n  const M = Math.floor((R + L) / 2);\n  const V = array[M];\n  if (L > R) {\n    return -1;\n  }\n  if (target === V) {\n    return M;\n  } else if (target > V) {\n    return search(array, target, M + 1, R);\n  } else {\n    return search(array, target, L, M - 1);\n  }\n}\n")))}y.isMDXComponent=!0}}]);