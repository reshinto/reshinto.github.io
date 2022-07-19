"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[6087],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>y});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),y=a,g=u["".concat(s,".").concat(y)]||u[y]||d[y]||i;return t?n.createElement(g,o(o({ref:r},p),{},{components:t})):n.createElement(g,o({ref:r},p))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},58700:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const i={},o="Longest Peak",l={unversionedId:"interviewPrep/codingTests/medium/arrays/longestPeak",id:"interviewPrep/codingTests/medium/arrays/longestPeak",title:"Longest Peak",description:"Write a function that takes in an array of integers and returns the length of",source:"@site/docs/interviewPrep/codingTests/medium/arrays/longestPeak.md",sourceDirName:"interviewPrep/codingTests/medium/arrays",slug:"/interviewPrep/codingTests/medium/arrays/longestPeak",permalink:"/docs/interviewPrep/codingTests/medium/arrays/longestPeak",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/codingTests/medium/arrays/longestPeak.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Array Of Products",permalink:"/docs/interviewPrep/codingTests/medium/arrays/arrayOfProducts"},next:{title:"Monotonic Array",permalink:"/docs/interviewPrep/codingTests/medium/arrays/monotonicArray"}},s={},c=[],p={toc:c};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"longest-peak"},"Longest Peak"),(0,a.kt)("p",null,"Write a function that takes in an array of integers and returns the length of\nthe longest peak in the array."),(0,a.kt)("p",null,"A peak is defined as adjacent integers in the array that are strictly\nincreasing until they reach a tip (the highest value in the peak), at which\npoint they become strictly decreasing. At least three integers are required to\nform a peak."),(0,a.kt)("p",null,"For example, the integers 1, 4, 10, 2 form a peak, but the\nintegers 4, 0, 10 don't and neither do the integers\n1, 2, 2, 0. Similarly, the integers 1, 2, 3 don't\nform a peak because there aren't any strictly decreasing integers after the 3"),(0,a.kt)("p",null,"Sample Input\n",(0,a.kt)("inlineCode",{parentName:"p"},"array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]")),(0,a.kt)("p",null,"Sample Output\n",(0,a.kt)("inlineCode",{parentName:"p"},"6 // 0, 10, 6, 5, -1, -3")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def longestPeak(array):\n  # Write your code here.\n  peak = 0\n  i = 1\n  while i < len(array) - 1:\n    isPeak = array[i-1] < array[i] and array[i] > array[i+1]\n    if not isPeak:\n      i += 1\n      continue\n\n    leftIdx = i - 2\n    while leftIdx >= 0 and array[leftIdx] < array[leftIdx+1]:\n      leftIdx -= 1\n\n    rightIdx = i + 2\n    while rightIdx < len(array) and array[rightIdx] < array[rightIdx-1]:\n      rightIdx += 1\n\n    currentPeak = rightIdx - leftIdx - 1\n    peak = max(peak, currentPeak)\n    i = rightIdx\n\n  return peak\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function longestPeak(array) {\n  // Write your code here.\n  let peak = 0;\n  let i = 1;\n  while (i < array.length - 1) {\n    const isPeak = array[i - 1] < array[i] && array[i] > array[i + 1];\n    if (!isPeak) {\n      i++;\n      continue;\n    }\n\n    let leftIdx = i - 2;\n    while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {\n      leftIdx--;\n    }\n\n    let rightIdx = i + 2;\n    while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {\n      rightIdx++;\n    }\n\n    const currentPeak = rightIdx - leftIdx - 1;\n    peak = Math.max(peak, currentPeak);\n    i = rightIdx;\n  }\n  return peak;\n}\n")))}d.isMDXComponent=!0}}]);