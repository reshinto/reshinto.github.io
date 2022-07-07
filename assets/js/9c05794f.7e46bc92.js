"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[4412],{3905:(e,n,t)=>{t.d(n,{Zo:()=>h,kt:()=>u});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},h=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,h=d(e,["components","mdxType","originalType","parentName"]),g=l(t),u=i,c=g["".concat(s,".").concat(u)]||g[u]||m[u]||a;return t?r.createElement(c,o(o({ref:n},h),{},{components:t})):r.createElement(c,o({ref:n},h))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},98339:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var r=t(87462),i=(t(67294),t(3905));const a={},o="Merge Sort",d={unversionedId:"interviewPrep/algorithms_and_techniques/divide_&_conquer_algorithms/mergeSort",id:"interviewPrep/algorithms_and_techniques/divide_&_conquer_algorithms/mergeSort",title:"Merge Sort",description:"- before working on the recursion, need to think about the following",source:"@site/docs/interviewPrep/algorithms_and_techniques/divide_&_conquer_algorithms/mergeSort.md",sourceDirName:"interviewPrep/algorithms_and_techniques/divide_&_conquer_algorithms",slug:"/interviewPrep/algorithms_and_techniques/divide_&_conquer_algorithms/mergeSort",permalink:"/docs/interviewPrep/algorithms_and_techniques/divide_&_conquer_algorithms/mergeSort",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/algorithms_and_techniques/divide_&_conquer_algorithms/mergeSort.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Insert Value Into Binary Search Tree",permalink:"/docs/interviewPrep/algorithms_and_techniques/divide_&_conquer_algorithms/insertValueIntoBST"},next:{title:"Merge Two Sorted Linked Lists",permalink:"/docs/interviewPrep/algorithms_and_techniques/divide_&_conquer_algorithms/mergeTwoSortedLinkedLists"}},s={},l=[{value:"Iterative solution",id:"iterative-solution",level:2}],h={toc:l};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"merge-sort"},"Merge Sort"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"we take in a bunch of unsorted values,\nthen keep dividing the values until it cannot be divided anymore,\nthen sort them and merge them in a sorted order\n\ninput: [4, 1, 3, 2, 0, -1, 7, 10, 9, 20]\noutput: [-1, 0, 1, 2, 3, 4, 7, 9, 10, 20]\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"before working on the recursion, need to think about the following",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"What is the base case / stopping condition?"))),(0,i.kt)("li",{parentName:"ul"},"What is the smallest amount of work I can do in each iteration?")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function mergeSort(data, startIndex, endIndex) {\n  if (startIndex < endIndex) {\n    const midIndex = Math.floor((startIndex + endIndex) / 2);\n    mergeSort(data, startIndex, midIndex);\n    mergeSort(data, midIndex + 1, endIndex);\n    merge(data, startIndex, midIndex, endIndex);\n  }\n}\n\nfunction merge(data, startIndex, midIndex, endIndex) {\n  // build temp array to avoid modifying original contents\n  const temp = Array(endIndex - startIndex + 1);\n\n  let i = startIndex; // index for the left array\n  let j = midIndex + 1; // index for the right array\n  let k = 0; // index for the temp array\n\n  // while both sub-array have values, then try and merge them in sorted order\n  while (i <= midIndex && j <= endIndex) {\n    if (data[i] <= data[j]) {\n      temp[k] = data[i];\n      i++;\n    } else {\n      temp[k] = data[j];\n      j++;\n    }\n    k++;\n  }\n\n  // add the rest of the values from the left sub-array into the result\n  while (i <= midIndex) {\n    temp[k] = data[i];\n    k++;\n    i++;\n  }\n\n  // add the rest of the values from the right sub-array into the result\n  while (j <= endIndex) {\n    temp[k] = data[j];\n    k++;\n    j++;\n  }\n\n  // overwrite the original data values\n  for (let i = startIndex; i <= endIndex; i++) {\n    data[i] = temp[i - startIndex];\n  }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"input: [4, 1, 3, 2, 0, -1, 7, 10, 9, 20]\n\n1st split [4, 1, 3, 2, 0, -1, 7, 10, 9, 20] into 2 halves\nleft side [4, 1, 3, 2, 0], right side [-1, 7, 10, 9, 20]\nleft side needs to be finished first before doing the right side\n\n  [4, 1, 3, 2, 0, -1, 7, 10, 9, 20]\n        /                   \\\n[4, 1, 3, 2, 0]     [-1, 7, 10, 9, 20]\n\n|----------------------------------------------------|\n| mergeSort([4, 1, 3, 2, 0, -1, 7, 10, 9, 20], 0, 4) |\n|----------------------------------------------------|\n\nthen split [4, 1, 3, 2, 0] into 2 halves again\nleft side [4, 1], right side [3, 2, 0]\nleft side needs to be finished first before doing the right side\n\n    [4, 1, 3, 2, 0, -1, 7, 10, 9, 20]\n          /                   \\\n  [4, 1, 3, 2, 0]     [-1, 7, 10, 9, 20]\n   /        \\\n[4, 1]  [3, 2, 0]\n\n|----------------------------------------------------|\n| mergeSort([4, 1, 3, 2, 0, -1, 7, 10, 9, 20], 0, 1) |\n| mergeSort([4, 1, 3, 2, 0, -1, 7, 10, 9, 20], 0, 4) |\n|----------------------------------------------------|\n\nthen split [4, 1] into 2 halves again\nleft side [4], right side [1]\nleft side needs to be finished first before doing the right side\n\n    [4, 1, 3, 2, 0, -1, 7, 10, 9, 20]\n          /                   \\\n  [4, 1, 3, 2, 0]     [-1, 7, 10, 9, 20]\n    /        \\\n [4, 1]  [3, 2, 0]\n  /   \\\n[4]   [1]\n\n|----------------------------------------------------|\n| mergeSort([4, 1, 3, 2, 0, -1, 7, 10, 9, 20], 0, 0) |\n| mergeSort([4, 1, 3, 2, 0, -1, 7, 10, 9, 20], 0, 1) |\n| mergeSort([4, 1, 3, 2, 0, -1, 7, 10, 9, 20], 0, 4) |\n|----------------------------------------------------|\n\n|----------------------------------------------------|\n| mergeSort([4, 1, 3, 2, 0, -1, 7, 10, 9, 20], 1, 1) |\n| mergeSort([4, 1, 3, 2, 0, -1, 7, 10, 9, 20], 0, 1) |\n| mergeSort([4, 1, 3, 2, 0, -1, 7, 10, 9, 20], 0, 4) |\n|----------------------------------------------------|\n\nsince the left side and ride side is both at the base case\nsort it and then merge and replace the parent value\n\n    [4, 1, 3, 2, 0, -1, 7, 10, 9, 20]\n          /                   \\\n  [4, 1, 3, 2, 0]     [-1, 7, 10, 9, 20]\n    /        \\\n [1, 4]  [3, 2, 0]\n\n|----------------------------------------------------|\n| merge([4, 1, 3, 2, 0, -1, 7, 10, 9, 20], 0, 0, 1)  |\n| mergeSort([4, 1, 3, 2, 0, -1, 7, 10, 9, 20], 0, 4) |\n|----------------------------------------------------|\n\n|----------------------------------------------------|\n| mergeSort([1, 4, 3, 2, 0, -1, 7, 10, 9, 20], 2, 4) |\n| mergeSort([1, 4, 3, 2, 0, -1, 7, 10, 9, 20], 0, 4) |\n|----------------------------------------------------|\n\n now look at the right side [3, 2, 0] and split into 2 halves\n left side [3], right [2, 0]\n\n     [4, 1, 3, 2, 0, -1, 7, 10, 9, 20]\n          /                   \\\n  [4, 1, 3, 2, 0]     [-1, 7, 10, 9, 20]\n    /        \\\n [1, 4]  [3, 2, 0]\n          /    \\\n        [3]  [2, 0]\n\n|----------------------------------------------------|\n| mergeSort([1, 4, 3, 2, 0, -1, 7, 10, 9, 20], 2, 2) |\n| mergeSort([1, 4, 3, 2, 0, -1, 7, 10, 9, 20], 2, 4) |\n| mergeSort([1, 4, 3, 2, 0, -1, 7, 10, 9, 20], 0, 4) |\n|----------------------------------------------------|\n\n|----------------------------------------------------|\n| mergeSort([1, 4, 3, 2, 0, -1, 7, 10, 9, 20], 3, 4) |\n| mergeSort([1, 4, 3, 2, 0, -1, 7, 10, 9, 20], 2, 4) |\n| mergeSort([1, 4, 3, 2, 0, -1, 7, 10, 9, 20], 0, 4) |\n|----------------------------------------------------|\n\nsince the left side is at the base case, split the right side [2, 0] into 2 halves\nleft [2], right [0]\n\n     [4, 1, 3, 2, 0, -1, 7, 10, 9, 20]\n          /                   \\\n  [4, 1, 3, 2, 0]     [-1, 7, 10, 9, 20]\n    /        \\\n [1, 4]  [3, 2, 0]\n          /    \\\n        [3]  [2, 0]\n              /   \\\n            [2]   [0]\n\n|----------------------------------------------------|\n| mergeSort([1, 4, 3, 2, 0, -1, 7, 10, 9, 20], 3, 3) |\n| mergeSort([1, 4, 3, 2, 0, -1, 7, 10, 9, 20], 3, 4) |\n| mergeSort([1, 4, 3, 2, 0, -1, 7, 10, 9, 20], 2, 4) |\n| mergeSort([1, 4, 3, 2, 0, -1, 7, 10, 9, 20], 0, 4) |\n|----------------------------------------------------|\n\n|----------------------------------------------------|\n| mergeSort([1, 4, 3, 2, 0, -1, 7, 10, 9, 20], 4, 4) |\n| mergeSort([1, 4, 3, 2, 0, -1, 7, 10, 9, 20], 3, 4) |\n| mergeSort([1, 4, 3, 2, 0, -1, 7, 10, 9, 20], 2, 4) |\n| mergeSort([1, 4, 3, 2, 0, -1, 7, 10, 9, 20], 0, 4) |\n|----------------------------------------------------|\n\nsince the left side and ride side is both at the base case\nsort it and then merge and replace the parent value\n\n     [4, 1, 3, 2, 0, -1, 7, 10, 9, 20]\n          /                   \\\n  [4, 1, 3, 2, 0]     [-1, 7, 10, 9, 20]\n    /        \\\n [1, 4]  [3, 2, 0]\n          /    \\\n        [3]  [0, 2]\n\n|----------------------------------------------------|\n| merge([1, 4, 3, 2, 0, -1, 7, 10, 9, 20], 3, 3, 4)  |\n| mergeSort([1, 4, 3, 2, 0, -1, 7, 10, 9, 20], 2, 4) |\n| mergeSort([1, 4, 3, 2, 0, -1, 7, 10, 9, 20], 0, 4) |\n|----------------------------------------------------|\n\nleft and right are both sorted, sort it and then merge and replace the parent value\ncompare the left side value with the right side value,\nthe smallest would be added to the new parent array first\n\n     [4, 1, 3, 2, 0, -1, 7, 10, 9, 20]\n          /                   \\\n  [4, 1, 3, 2, 0]     [-1, 7, 10, 9, 20]\n    /        \\\n [1, 4]  [0, 2, 3]\n\n|----------------------------------------------------|\n| merge([1, 4, 3, 0, 2, -1, 7, 10, 9, 20], 2, 3, 4)  |\n| mergeSort([1, 4, 3, 0, 2, -1, 7, 10, 9, 20], 0, 4) |\n|----------------------------------------------------|\n\nleft and right are both sorted, sort it and then merge and replace the parent value\ncompare the left side value with the right side value,\nthe smallest would be added to the new parent array first\n\n     [4, 1, 3, 2, 0, -1, 7, 10, 9, 20]\n          /                   \\\n  [0, 1, 2, 3, 4]     [-1, 7, 10, 9, 20]\n\n|---------------------------------------------------|\n| merge([1, 4, 0, 2, 3, -1, 7, 10, 9, 20], 0, 2, 4) |\n|---------------------------------------------------|\n\n|----------------------------------------------------|\n| mergeSort([0, 1, 2, 3, 4, -1, 7, 10, 9, 20], 5, 9) |\n|----------------------------------------------------|\n\nnow look at the right side [-1, 7, 10, 9, 20] and split into 2 halves\nleft [-1, 7], right [10, 9, 20]\nleft side needs to be finished first before doing the right side\n\n     [4, 1, 3, 2, 0, -1, 7, 10, 9, 20]\n          /                   \\\n  [0, 1, 2, 3, 4]     [-1, 7, 10, 9, 20]\n                        /         \\\n                    [-1, 7]   [10, 9, 20]\n\n|----------------------------------------------------|\n| mergeSort([0, 1, 2, 3, 4, -1, 7, 10, 9, 20], 5, 6) |\n| mergeSort([0, 1, 2, 3, 4, -1, 7, 10, 9, 20], 5, 9) |\n|----------------------------------------------------|\n\nsplit the [-1, 7] into 2 halves\nleft [-1], right [7]\n\n     [4, 1, 3, 2, 0, -1, 7, 10, 9, 20]\n          /                   \\\n  [0, 1, 2, 3, 4]     [-1, 7, 10, 9, 20]\n                        /         \\\n                    [-1, 7]   [10, 9, 20]\n                     /   \\\n                   [-1]  [7]\n\n|----------------------------------------------------|\n| mergeSort([0, 1, 2, 3, 4, -1, 7, 10, 9, 20], 5, 5) |\n| mergeSort([0, 1, 2, 3, 4, -1, 7, 10, 9, 20], 5, 6) |\n| mergeSort([0, 1, 2, 3, 4, -1, 7, 10, 9, 20], 5, 9) |\n|----------------------------------------------------|\n\n|----------------------------------------------------|\n| mergeSort([0, 1, 2, 3, 4, -1, 7, 10, 9, 20], 6, 6) |\n| mergeSort([0, 1, 2, 3, 4, -1, 7, 10, 9, 20], 5, 6) |\n| mergeSort([0, 1, 2, 3, 4, -1, 7, 10, 9, 20], 5, 9) |\n|----------------------------------------------------|\n\nsince the left side and ride side is both at the base case\nsort it and then merge and replace the parent value\n\n     [4, 1, 3, 2, 0, -1, 7, 10, 9, 20]\n          /                   \\\n  [0, 1, 2, 3, 4]     [-1, 7, 10, 9, 20]\n                        /         \\\n                    [-1, 7]   [10, 9, 20]\n\n|----------------------------------------------------|\n| merge([0, 1, 2, 3, 4, -1, 7, 10, 9, 20], 5, 5, 6)  |\n| mergeSort([0, 1, 2, 3, 4, -1, 7, 10, 9, 20], 5, 9) |\n|----------------------------------------------------|\n\n|----------------------------------------------------|\n| mergeSort([0, 1, 2, 3, 4, -1, 7, 10, 9, 20], 7, 9) |\n| mergeSort([0, 1, 2, 3, 4, -1, 7, 10, 9, 20], 5, 9) |\n|----------------------------------------------------|\n\nnow look at the right side [10, 9, 20] and split it into 2 halves\nleft [10], right [9, 20]\n\n     [4, 1, 3, 2, 0, -1, 7, 10, 9, 20]\n          /                   \\\n  [0, 1, 2, 3, 4]     [-1, 7, 10, 9, 20]\n                        /         \\\n                    [-1, 7]   [10, 9, 20]\n                               /     \\\n                             [10]  [9, 20]\n\n|----------------------------------------------------|\n| mergeSort([0, 1, 2, 3, 4, -1, 7, 10, 9, 20], 7, 7) |\n| mergeSort([0, 1, 2, 3, 4, -1, 7, 10, 9, 20], 7, 9) |\n| mergeSort([0, 1, 2, 3, 4, -1, 7, 10, 9, 20], 5, 9) |\n|----------------------------------------------------|\n\n|----------------------------------------------------|\n| mergeSort([0, 1, 2, 3, 4, -1, 7, 10, 9, 20], 8, 9) |\n| mergeSort([0, 1, 2, 3, 4, -1, 7, 10, 9, 20], 7, 9) |\n| mergeSort([0, 1, 2, 3, 4, -1, 7, 10, 9, 20], 5, 9) |\n|----------------------------------------------------|\n\nsince the left side is at the base case, split the right side [9, 20] into 2 halves\nleft [9], right [20]\n\n     [4, 1, 3, 2, 0, -1, 7, 10, 9, 20]\n          /                   \\\n  [0, 1, 2, 3, 4]     [-1, 7, 10, 9, 20]\n                        /         \\\n                    [-1, 7]   [10, 9, 20]\n                               /     \\\n                             [10]  [9, 20]\n                                    /    \\\n                                  [9]   [20]\n\n|----------------------------------------------------|\n| mergeSort([0, 1, 2, 3, 4, -1, 7, 10, 9, 20], 8, 8) |\n| mergeSort([0, 1, 2, 3, 4, -1, 7, 10, 9, 20], 8, 9) |\n| mergeSort([0, 1, 2, 3, 4, -1, 7, 10, 9, 20], 7, 9) |\n| mergeSort([0, 1, 2, 3, 4, -1, 7, 10, 9, 20], 5, 9) |\n|----------------------------------------------------|\n\n|----------------------------------------------------|\n| mergeSort([0, 1, 2, 3, 4, -1, 7, 10, 9, 20], 9, 9) |\n| mergeSort([0, 1, 2, 3, 4, -1, 7, 10, 9, 20], 8, 9) |\n| mergeSort([0, 1, 2, 3, 4, -1, 7, 10, 9, 20], 7, 9) |\n| mergeSort([0, 1, 2, 3, 4, -1, 7, 10, 9, 20], 5, 9) |\n|----------------------------------------------------|\n\nsince the left and right are at the base case,\nsort it and then merge and replace the parent value\n\n     [4, 1, 3, 2, 0, -1, 7, 10, 9, 20]\n          /                   \\\n  [0, 1, 2, 3, 4]     [-1, 7, 10, 9, 20]\n                        /         \\\n                    [-1, 7]   [10, 9, 20]\n                               /     \\\n                             [10]  [9, 20]\n\n|----------------------------------------------------|\n| merge([0, 1, 2, 3, 4, -1, 7, 10, 9, 20], 8, 8, 9)  |\n| mergeSort([0, 1, 2, 3, 4, -1, 7, 10, 9, 20], 7, 9) |\n| mergeSort([0, 1, 2, 3, 4, -1, 7, 10, 9, 20], 5, 9) |\n|----------------------------------------------------|\n\nsince the left and right are already sorted,\nsort them and then merge and replace the parent value\ncompare the left side value with the right side value,\nthe smallest would be added to the new parent array first\n\n     [4, 1, 3, 2, 0, -1, 7, 10, 9, 20]\n          /                   \\\n  [0, 1, 2, 3, 4]     [-1, 7, 10, 9, 20]\n                        /         \\\n                    [-1, 7]   [9, 10, 20]\n\n|----------------------------------------------------|\n| merge([0, 1, 2, 3, 4, -1, 7, 10, 9, 20], 7, 8, 9)  |\n| mergeSort([0, 1, 2, 3, 4, -1, 7, 9, 10, 20], 5, 9) |\n|----------------------------------------------------|\n\nsince the left and right are already sorted,\nsort them and then merge and replace the parent value\ncompare the left side value with the right side value,\nthe smallest would be added to the new parent array first\n\n     [4, 1, 3, 2, 0, -1, 7, 10, 9, 20]\n          /                   \\\n  [0, 1, 2, 3, 4]     [-1, 7, 9, 10, 20]\n\n|---------------------------------------------------|\n| merge([0, 1, 2, 3, 4, -1, 7, 9, 10, 20], 5, 7, 9) |\n|---------------------------------------------------|\n\nsince the left and right are already sorted,\nsort them and then merge and replace the parent value\ncompare the left side value with the right side value,\nthe smallest would be added to the new parent array first\n\n     [-1, 0, 1, 2, 3, 4, 7, 9, 10, 20]\n\n|---------------------------------------------------|\n| merge([0, 1, 2, 3, 4, -1, 7, 9, 10, 20], 0, 4, 9) |\n|---------------------------------------------------|\n\nreturn results = [-1, 0, 1, 2, 3, 4, 7, 9, 10, 20]\n")),(0,i.kt)("h2",{id:"iterative-solution"},"Iterative solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function mergeSort(data) {\n  const endIndex = data.length - 1;\n\n  // current size of subarrays to be merged\n  // currSize varies from 1 to endIndex/2\n  // Merge subarrays in bottom up manner\n  // First merge subarrays of size 1 to create sorted subarrays of size 2\n  // then merge subarrays of size 2 to create sorted subarrays of size 4\n  for (let currSize = 1; currSize <= endIndex; currSize *= 2) {\n    // starting index of different subarray to be merged\n    for (let leftIndex = 0; leftIndex < endIndex; leftIndex += 2 * currSize) {\n      // Find ending point of left subarray\n      // mid+1 is starting point of right\n      const mid = Math.min(leftIndex + currSize - 1, endIndex);\n      const rightEnd = Math.min(leftIndex + 2 * currSize - 1, endIndex);\n      merge(data, leftIndex, mid, rightEnd);\n    }\n  }\n}\n")))}m.isMDXComponent=!0}}]);