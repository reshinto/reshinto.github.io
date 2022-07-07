"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[6187],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>d});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},u=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),d=a,g=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return n?t.createElement(g,o(o({ref:r},u),{},{components:n})):t.createElement(g,o({ref:r},u))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},92279:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=n(87462),a=(n(67294),n(3905));const i={},o="Find Three Largest Numbers",s={unversionedId:"interviewPrep/codingTests/easy/searching/findThreeLargestNumbers",id:"interviewPrep/codingTests/easy/searching/findThreeLargestNumbers",title:"Find Three Largest Numbers",description:"Write a function that takes in an array of at least three integers and,",source:"@site/docs/interviewPrep/codingTests/easy/searching/findThreeLargestNumbers.md",sourceDirName:"interviewPrep/codingTests/easy/searching",slug:"/interviewPrep/codingTests/easy/searching/findThreeLargestNumbers",permalink:"/docs/interviewPrep/codingTests/easy/searching/findThreeLargestNumbers",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/codingTests/easy/searching/findThreeLargestNumbers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Binary Search",permalink:"/docs/interviewPrep/codingTests/easy/searching/binarySearch"},next:{title:"Bubble Sort",permalink:"/docs/interviewPrep/codingTests/easy/sorting/bubbleSort"}},c={},l=[],u={toc:l};function p(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"find-three-largest-numbers"},"Find Three Largest Numbers"),(0,a.kt)("p",null,"Write a function that takes in an array of at least three integers and,\nwithout sorting the input array, returns a sorted array of the three largest\nintegers in the input array."),(0,a.kt)("p",null,"The function should return duplicate integers if necessary; for example, it\nshould return ","[10, 10, 12]"," for an input array of ","[10, 5, 9, 10, 12]"),(0,a.kt)("p",null,"Sample Input\n",(0,a.kt)("inlineCode",{parentName:"p"},"array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]"),"\nSample Output\n",(0,a.kt)("inlineCode",{parentName:"p"},"[18, 141, 541]")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def findThreeLargestNumbers(array):\n  # Write your code here.\n  newArr = [None, None, None]\n  for v in array:\n    a, b, c = newArr[0], newArr[1], newArr[2]\n    if not c:\n      newArr[2] = v\n    elif v >= c:\n      newArr[0] = newArr[1]\n      newArr[1] = newArr[2]\n      newArr[2] = v\n    elif not b:\n      newArr[1] = v\n    elif v >= b:\n      newArr[0] = newArr[1]\n      newArr[1] = v\n    elif not a:\n      newArr[0] = v\n    elif v >= a:\n      newArr[0] = v\n  return newArr\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function findThreeLargestNumbers(array) {\n  // Write your code here.\n  const newArr = [null, null, null];\n  for (let v of array) {\n    const [a, b, c] = newArr;\n    if (!c) {\n      newArr[2] = v;\n    } else if (v >= c) {\n      newArr[0] = newArr[1];\n      newArr[1] = newArr[2];\n      newArr[2] = v;\n    } else if (!b) {\n      newArr[1] = v;\n    } else if (v >= b) {\n      newArr[0] = newArr[1];\n      newArr[1] = v;\n    } else if (!a) {\n      newArr[0] = v;\n    } else if (v >= a) {\n      newArr[0] = v;\n    }\n  }\n  return newArr;\n}\n")))}p.isMDXComponent=!0}}]);