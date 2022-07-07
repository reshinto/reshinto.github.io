"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[5994],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),f=s(t),d=r,p=f["".concat(o,".").concat(d)]||f[d]||c[d]||l;return t?a.createElement(p,u(u({ref:n},m),{},{components:t})):a.createElement(p,u({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,u=new Array(l);u[0]=f;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,u[1]=i;for(var s=2;s<l;s++)u[s]=t[s];return a.createElement.apply(null,u)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4215:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>u,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const l={},u="Can Sum example",i={unversionedId:"interviewPrep/algorithms_and_techniques/dynamic_programming/canSum",id:"interviewPrep/algorithms_and_techniques/dynamic_programming/canSum",title:"Can Sum example",description:"- explanation",source:"@site/docs/interviewPrep/algorithms_and_techniques/dynamic_programming/canSum.md",sourceDirName:"interviewPrep/algorithms_and_techniques/dynamic_programming",slug:"/interviewPrep/algorithms_and_techniques/dynamic_programming/canSum",permalink:"/docs/interviewPrep/algorithms_and_techniques/dynamic_programming/canSum",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/algorithms_and_techniques/dynamic_programming/canSum.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Can Construct example",permalink:"/docs/interviewPrep/algorithms_and_techniques/dynamic_programming/canConstruct"},next:{title:"Count Construct example",permalink:"/docs/interviewPrep/algorithms_and_techniques/dynamic_programming/countConstruct"}},o={},s=[{value:"Naive solution",id:"naive-solution",level:2},{value:"Memoization solution",id:"memoization-solution",level:2},{value:"Tabulation solution",id:"tabulation-solution",level:2}],m={toc:s};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"can-sum-example"},"Can Sum example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Write a function "canSum(targetSum, numbers)" that takes in a targetSum and an array of numbers as arguments\n\nThe function should return a boolean indicating whether or not it is possible to generate the targetSum using from the array\n\nYou may use an element of the array as many times as needed\n\nYou may assume that all input numbers are nonnegative\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"explanation")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Question: calculate canSum(7, [5, 3, 4, 7])\n\nExplanation: if we have a smaller amount of targetSum, then they'll tend to be a smaller, easier problem than a larger number of targets\n\nAnswer: true\n\n1. 3 + 4\n2. 7\n\ncanSum(7, [2, 4]) -> false\n\ncanSum(0, [...]) -> true\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"graph display of what goes behind the hood for ",(0,r.kt)("inlineCode",{parentName:"li"},"canSum(7, [5, 3, 4, 7]) -> true"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"use targetSum for every node\n\n            7\n  /      |      |     \\\n7-5=2  7-3=4  7-4=3  7-7=0\n      /     \\     \\\n  4-3=1  4-4=0  3-3=0\n\nwhen value is 0, it will be our base case and we can return as true\nwhen value is not 0, it will return as false\n\nas long as 1 leaf node returns true, we can stop the task and return the value\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"graph display of what goes behind the hood for ",(0,r.kt)("inlineCode",{parentName:"li"},"canSum(7, [2, 4]) -> false"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"m = target sum  // which is also the number of levels\nn = array length\n\n          7                   1\n       /     \\\n    7-2=5    7-4=3            * n\n   /    \\       |\n5-2=3  5-4=1  3-2=1           * n\n  |\n3-2=1                         * n\n\nall leaf nodes as a targetSum value of more than 0 and cannot be reduced further, thus returns false\n")),(0,r.kt)("h2",{id:"naive-solution"},"Naive solution"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"time complexity is ",(0,r.kt)("inlineCode",{parentName:"li"},"O(n^m)"),", where m = target sum, n = numbers.length"),(0,r.kt)("li",{parentName:"ul"},"space complexity is ",(0,r.kt)("inlineCode",{parentName:"li"},"O(m)"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const canSum = (targetSum, numbers) => {\n  if (targetSum === 0) return true;\n  if (targetSum < 0) return false;\n\n  for (const num of numbers) {\n    const remainder = targetSum - num;\n    if (canSum(remainder, numbers)) {\n      return true;\n    }\n  }\n  return false;\n};\n\nconsole.log(canSum(7, [2, 3])); // true\nconsole.log(canSum(7, [5, 3, 4, 7])); // true\nconsole.log(canSum(7, [2, 4])); // false\nconsole.log(canSum(8, [2, 3, 5])); // true\nconsole.log(canSum(300, [7, 14])); // false\n")),(0,r.kt)("h2",{id:"memoization-solution"},"Memoization solution"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"time complexity is ",(0,r.kt)("inlineCode",{parentName:"li"},"O(n*m)")),(0,r.kt)("li",{parentName:"ul"},"space complexity is ",(0,r.kt)("inlineCode",{parentName:"li"},"O(m)"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const canSum = (targetSum, numbers, memo = {}) => {\n  if (targetSum in memo) return memo[targetSum];\n  if (targetSum === 0) return true;\n  if (targetSum < 0) return false;\n\n  for (const num of numbers) {\n    const remainder = targetSum - num;\n    if (canSum(remainder, numbers, memo)) {\n      memo[targetSum] = true;\n      return true;\n    }\n  }\n  memo[targetSum] = false;\n  return false;\n};\n\nconsole.log(canSum(7, [2, 3])); // true\nconsole.log(canSum(7, [5, 3, 4, 7])); // true\nconsole.log(canSum(7, [2, 4])); // false\nconsole.log(canSum(8, [2, 3, 5])); // true\nconsole.log(canSum(300, [7, 14])); // false\n")),(0,r.kt)("h2",{id:"tabulation-solution"},"Tabulation solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"canSum(7, [5, 3, 4]) -> true\n\nm = targetSum\nn = numbers.length\n\nfirst create an array the size of the target sum + 1\n\nindex:   0     1     2     3     4     5     6    7\nvalue: false false false false false false false false\n\nwhen targetSum is at 0, no sum is required to get 0, therefore return value should be true\n\nindex:   0     1     2     3     4     5     6    7\nvalue: true false false false false false false false\n\nlook at the 1st element of the array [5, 3, 4] is 5\ncurrent index is 0 and value is true\ncurrent index (0), can return 0 by not adding\nif current value is true, will always return true,\nthus 5 steps ahead of the current index, value can be changed to true\n\nindex:   0     1     2     3     4     5     6    7\nvalue: true false false false false  true false false\n\nlook at the 2nd element of the array [5, 3, 4] is 3\ncurrent index is 0 and value is true\ncurrent index (0), can return 0 by not adding\nif current value is true, will always return true,\nthus 3 steps ahead of the current index, value can be changed to true\n\nindex:   0     1     2     3     4     5     6    7\nvalue: true  false false true  false  true false false\n\nlook at the 3rd element of the array [5, 3, 4] is 4\ncurrent index is 0 and value is true\ncurrent index (0), can return 0 by not adding\nif current value is true, will always return true,\nthus 4 steps ahead of the current index, value can be changed to true\n\nindex:   0     1     2     3     4     5     6    7\nvalue: true  false false true  true  true false false\n\nmove current value to the next index\nlook at the 1st element of the array [5, 3, 4] is 5\ncurrent index is 1 and value is false\nif current value is false, nothing needs to be changed\n\nindex:   0     1     2     3     4     5     6    7\nvalue: true  false false true  true  true false false\n\nlook at the 2nd element of the array [5, 3, 4] is 3\ncurrent index is 1 and value is false\nif current value is false, nothing needs to be changed\n\nindex:   0     1     2     3     4     5     6    7\nvalue: true  false false true  true  true false false\n\nlook at the 3rd element of the array [5, 3, 4] is 4\ncurrent index is 1 and value is false\nif current value is false, nothing needs to be changed\n\nindex:   0     1     2     3     4     5     6    7\nvalue: true  false false true  true  true false false\n\nmove current value to the next index\nlook at the 1st element of the array [5, 3, 4] is 5\ncurrent index is 2 and value is false\nif current value is false, nothing needs to be changed\n\nindex:   0     1     2     3     4     5     6    7\nvalue: true  false false true  true  true false false\n\nlook at the 2nd element of the array [5, 3, 4] is 3\ncurrent index is 2 and value is false\nif current value is false, nothing needs to be changed\n\nindex:   0     1     2     3     4     5     6    7\nvalue: true  false false true  true  true false false\n\nlook at the 3rd element of the array [5, 3, 4] is 4\ncurrent index is 2 and value is false\nif current value is false, nothing needs to be changed\n\nindex:   0     1     2     3     4     5     6    7\nvalue: true  false false true  true  true false false\n\nmove current value to the next index\nlook at the 1st element of the array [5, 3, 4] is 5\ncurrent index is 3 and value is true\ntherefore this step can be skipped\n\nindex:   0     1     2     3     4     5     6    7\nvalue: true  false false true  true  true false false\n\nlook at the 2nd element of the array [5, 3, 4] is 3\ncurrent index is 3 and value is true\nif current value is true, will always return true,\nthus 3 steps ahead of the current index, value can be changed to true\n\nindex:   0     1     2     3     4     5     6    7\nvalue: true  false false true  true  true  true false\n\nlook at the 3rd element of the array [5, 3, 4] is 4\ncurrent index is 3 and value is true\nif current value is true, will always return true,\nthus 4 steps ahead of the current index, value can be changed to true\n\nindex:   0     1     2     3     4     5     6    7\nvalue: true  false false true  true  true  true true\n\nthe rest can be skipped since their values are all true\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"time complexity is ",(0,r.kt)("inlineCode",{parentName:"li"},"O(n*m)")),(0,r.kt)("li",{parentName:"ul"},"space complexity is ",(0,r.kt)("inlineCode",{parentName:"li"},"O(m)"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const canSum = (targetSum, numbers) => {\n  const table = Array(targetSum + 1).fill(false);\n  table[0] = true;\n  for (let i = 0; i <= targetSum; i++) {\n    if (table[i]) {\n      for (let num of numbers) {\n        table[i + num] = true;\n      }\n    }\n  }\n  return table[targetSum];\n};\n\nconsole.log(canSum(7, [2, 3])); // true\nconsole.log(canSum(7, [5, 3, 4, 7])); // true\nconsole.log(canSum(7, [2, 4])); // false\nconsole.log(canSum(8, [2, 3, 5])); // true\nconsole.log(canSum(300, [7, 14])); // false\n")))}c.isMDXComponent=!0}}]);