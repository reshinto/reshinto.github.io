"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[2408],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},m=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),c=l(t),d=a,y=c["".concat(s,".").concat(d)]||c[d]||p[d]||i;return t?n.createElement(y,o(o({ref:r},m),{},{components:t})):n.createElement(y,o({ref:r},m))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var u={};for(var s in r)hasOwnProperty.call(r,s)&&(u[s]=r[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},34043:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var n=t(83117),a=(t(67294),t(3905));const i={},o="Three Number Sum",u={unversionedId:"interviewPrep/codingTests/medium/arrays/threeNumberSum",id:"interviewPrep/codingTests/medium/arrays/threeNumberSum",title:"Three Number Sum",description:"Write a function that takes in a non-empty array of distinct integers and an",source:"@site/docs/interviewPrep/codingTests/medium/arrays/threeNumberSum.md",sourceDirName:"interviewPrep/codingTests/medium/arrays",slug:"/interviewPrep/codingTests/medium/arrays/threeNumberSum",permalink:"/docs/interviewPrep/codingTests/medium/arrays/threeNumberSum",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/codingTests/medium/arrays/threeNumberSum.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Spiral Traverse",permalink:"/docs/interviewPrep/codingTests/medium/arrays/spiralTraverse"},next:{title:"Complexity Analysis",permalink:"/docs/interviewPrep/data_structures/03ComplexityAnalysis/"}},s={},l=[],m={toc:l};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"three-number-sum"},"Three Number Sum"),(0,a.kt)("p",null,"Write a function that takes in a non-empty array of distinct integers and an\ninteger representing a target sum. The function should find all triplets in\nthe array that sum up to the target sum and return a two-dimensional array of\nall these triplets. The numbers in each triplet should be ordered in ascending\norder, and the triplets themselves should be ordered in ascending order with\nrespect to the numbers they hold."),(0,a.kt)("p",null,"If no three numbers sum up to the target sum, the function should return an\nempty array."),(0,a.kt)("p",null,"Sample Input\n",(0,a.kt)("inlineCode",{parentName:"p"},"array = [12, 3, 1, 2, -6, 5, -8, 6]"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"targetSum = 0")),(0,a.kt)("p",null,"Sample Output\n",(0,a.kt)("inlineCode",{parentName:"p"},"[[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def threeNumberSum(array, targetSum):\n  # Write your code here.\n  array.sort()\n  result = []\n  for i in range(len(array) - 2):\n    left = i + 1\n    right = len(array) - 1\n    while left < right:\n      sum = array[i] + array[left] + array[right]\n      if sum == targetSum:\n        result.append([array[i], array[left], array[right]])\n        newArr = []\n        left += 1\n        right -= 1\n      elif sum > targetSum:\n        right -= 1\n      elif sum < targetSum:\n        left += 1\n  return result\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function threeNumberSum(array, targetSum) {\n  // Write your code here.\n  array.sort((a, b) => a - b);\n  const result = [];\n  for (let i = 0; i < array.length - 2; i++) {\n    let left = i + 1;\n    let right = array.length - 1;\n    while (left < right) {\n      const sum = array[i] + array[left] + array[right];\n      if (sum === targetSum) {\n        result.push([array[i], array[left], array[right]]);\n        left++;\n        right--;\n      } else if (sum > targetSum) {\n        right--;\n      } else if (sum < targetSum) {\n        left++;\n      }\n    }\n  }\n  return result;\n}\n")))}p.isMDXComponent=!0}}]);