"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[138],{3905:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>h});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function c(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?c(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)a=c[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)a=c[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),s=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},u=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(a),h=r,m=f["".concat(l,".").concat(h)]||f[h]||d[h]||c;return a?t.createElement(m,o(o({ref:n},u),{},{components:a})):t.createElement(m,o({ref:n},u))}));function h(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<c;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}f.displayName="MDXCreateElement"},91480:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var t=a(87462),r=(a(67294),a(3905));const c={},o="Can Construct example",i={unversionedId:"interviewPrep/algorithms_and_techniques/dynamic_programming/canConstruct",id:"interviewPrep/algorithms_and_techniques/dynamic_programming/canConstruct",title:"Can Construct example",description:"- explanation",source:"@site/docs/interviewPrep/algorithms_and_techniques/dynamic_programming/canConstruct.md",sourceDirName:"interviewPrep/algorithms_and_techniques/dynamic_programming",slug:"/interviewPrep/algorithms_and_techniques/dynamic_programming/canConstruct",permalink:"/docs/interviewPrep/algorithms_and_techniques/dynamic_programming/canConstruct",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/algorithms_and_techniques/dynamic_programming/canConstruct.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Best Sum example",permalink:"/docs/interviewPrep/algorithms_and_techniques/dynamic_programming/bestSum"},next:{title:"Can Sum example",permalink:"/docs/interviewPrep/algorithms_and_techniques/dynamic_programming/canSum"}},l={},s=[{value:"Naive solution",id:"naive-solution",level:2},{value:"Memoization solution",id:"memoization-solution",level:2},{value:"Tabulation solution",id:"tabulation-solution",level:2}],u={toc:s};function d(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"can-construct-example"},"Can Construct example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Write a function "canConstruct(target, wordBank)" that accepts a target string and an array of strings\n\nThe function should return a boolean indicating whether or not the "target" can be constructed by concatenating elements of the "wordBank" array\n\nYou may reuse elements of "wordBank" as many times as needed\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"explanation")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Question 1: canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])\n\nsince "abc" + "def" = "abcdef"\nAnswer 1: true\n\nQuestion 2: canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])\n\nsince there are 0 ways to generate "skateboard"\nAnswer 2: false\n\nit is easier to generate a shorter string than a longer string\n\nQuestion 3: canConstruct("", ["cat", "dog", "mouse"])\n\nsince we can choose not to use any of the elements in the array\nAnswer 3: true\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"graph display of what goes behind the hood for ",(0,r.kt)("inlineCode",{parentName:"li"},'canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])'))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]) -> true\n* do not take out characters from the middle of a string\n* only branch the children if we have a matching prefix in the word bank\n\nm = target.length\nn = wordBank.length\nheight = m\n\n       abcdef                       1\n  /(ab)  |(abc)  \\(abcd)\ncdef    def       ef                * n\n |(cd)   |(def)\n ef      ""                         * n\n\nwhen leaf node is "" returns true value to parent\nwhen leaf node is not empty and cannot be broken down any more, returns false value to parent\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]) -> false\n\n   skateboard\n   /(ska)   \\(sk)\nteboard   ateboard\n   |(t)       |(ate)\neboard      board\n          /(bo)  \\(board)\n         ard      d\n')),(0,r.kt)("h2",{id:"naive-solution"},"Naive solution"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"time complexity is ",(0,r.kt)("inlineCode",{parentName:"li"},"O((n^m) * m)")),(0,r.kt)("li",{parentName:"ul"},"space complexity is ",(0,r.kt)("inlineCode",{parentName:"li"},"O(m * m)"),", simplified to ",(0,r.kt)("inlineCode",{parentName:"li"},"O(m^2)"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const canConstruct = (target, wordBank) => {\n  if (target === "") return true;\n\n  for (const word of wordBank) {\n    // time n\n    if (target.indexOf(word) === 0) {\n      const suffix = target.slice(word.length); // time, space this copies an array which the worst case will be m times\n      if (canConstruct(suffix, wordBank)) {\n        // time ^m, n has to be recalled depending on m, space m\n        return true;\n      }\n    }\n  }\n  return false;\n};\n\nconsole.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true\nconsole.log(\n  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])\n); // false\nconsole.log(\n  canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])\n); // true\nconsole.log(\n  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [\n    "e",\n    "ee",\n    "eee",\n    "eeee",\n    "eeeee",\n    "eeeeee",\n  ])\n); // false\n')),(0,r.kt)("h2",{id:"memoization-solution"},"Memoization solution"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"time complexity is ",(0,r.kt)("inlineCode",{parentName:"li"},"O(n * m * m)"),", simplified to ",(0,r.kt)("inlineCode",{parentName:"li"},"O(n * m^2)")),(0,r.kt)("li",{parentName:"ul"},"space complexity is ",(0,r.kt)("inlineCode",{parentName:"li"},"O(m * m)"),", simplified to ",(0,r.kt)("inlineCode",{parentName:"li"},"O(m^2)"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const canConstruct = (target, wordBank, memo = {}) => {\n  if (target in memo) return memo[target]; // space m\n  if (target === "") return true;\n\n  for (const word of wordBank) {\n    // time n\n    if (target.indexOf(word) === 0) {\n      const suffix = target.slice(word.length); // time, space this copies an array which the worst case will be m times\n      if (canConstruct(suffix, wordBank, memo)) {\n        // time m, since no duplicate of n is being compute\n        memo[target] = true;\n        return true;\n      }\n    }\n  }\n  memo[target] = false;\n  return false;\n};\n\nconsole.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true\nconsole.log(\n  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])\n); // false\nconsole.log(\n  canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])\n); // true\nconsole.log(\n  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [\n    "e",\n    "ee",\n    "eee",\n    "eeee",\n    "eeeee",\n    "eeeeee",\n  ])\n); // false\n')),(0,r.kt)("h2",{id:"tabulation-solution"},"Tabulation solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]) -> true\n\nm = target\nn = wordBank.length\n\nfirst create an array the size of the target.length + 1\nset default value to be false\n\nindex      :   0     1     2     3     4     5     6\nvalue      : false false false false false false false\nActual char:   a     b     c     d     e     f\n\nwhen target value is an empty string, no string concatenation is required to get "", therefore return value should be true\n\nindex      :   0     1     2     3     4     5     6\nvalue      :  true false false false false false false\nActual char:   a     b     c     d     e     f\n\nlook at the 1st element of the array ["ab", "abc", "cd", "def", "abcd"] is "ab"\ncurrent index is 0, value is True, and actual char is "a"\nsince first char of "ab" === actual char "a"\nwe can look at "ab" char length 2 steps ahead of the current index,\nvalue can be changed to the same as current value true\n\nindex      :   0     1     2     3     4     5     6\nvalue      :  true false true false false false false\nActual char:   a     b     c     d     e     f\n\nlook at the 2nd element of the array ["ab", "abc", "cd", "def", "abcd"] is "abc"\ncurrent index is 0, value is True, and actual char is "a"\nsince first char of "abc" === actual char "a"\nwe can look at "abc" char length 3 steps ahead of the current index,\nvalue can be changed to the same as current value true\n\nindex      :   0     1     2     3     4     5     6\nvalue      :  true false true  true false false false\nActual char:   a     b     c     d     e     f\n\nlook at the 3rd element of the array ["ab", "abc", "cd", "def", "abcd"] is "cd"\ncurrent index is 0, value is True, and actual char is "a"\nsince first char of "cd" !== actual char "a"\nwe can ignore and skip this\n\nindex      :   0     1     2     3     4     5     6\nvalue      :  true false true  true false false false\nActual char:   a     b     c     d     e     f\n\nlook at the 4th element of the array ["ab", "abc", "cd", "def", "abcd"] is "def"\ncurrent index is 0, value is True, and actual char is "a"\nsince first char of "def" !== actual char "a"\nwe can ignore and skip this\n\nindex      :   0     1     2     3     4     5     6\nvalue      :  true false true  true false false false\nActual char:   a     b     c     d     e     f\n\nlook at the 5th element of the array ["ab", "abc", "cd", "def", "abcd"] is "abcd"\ncurrent index is 0, value is True, and actual char is "a"\nsince first char of "abcd" === actual char "a"\nwe can look at "abcd" char length 4 steps ahead of the current index,\nvalue can be changed to the same as current value true\n\nindex      :   0     1     2     3     4     5     6\nvalue      :  true false true  true  true false false\nActual char:   a     b     c     d     e     f\n\nmove current value to the next index\nlook at the 1st element of the array ["ab", "abc", "cd", "def", "abcd"] is "ab"\ncurrent index is 1, value is false, and actual char is "b"\nsince value is false, we can skip the entire process and move to the next index\n\nindex      :   0     1     2     3     4     5     6\nvalue      :  true false true  true  true false false\nActual char:   a     b     c     d     e     f\n\nmove current value to the next index\nlook at the 1st element of the array ["ab", "abc", "cd", "def", "abcd"] is "ab"\ncurrent index is 2, value is True, and actual char is "c"\nsince first char of "ab" !== actual char "c"\nwe can ignore and skip this\n\nindex      :   0     1     2     3     4     5     6\nvalue      :  true false true  true  true false false\nActual char:   a     b     c     d     e     f\n\nlook at the 2nd element of the array ["ab", "abc", "cd", "def", "abcd"] is "abc"\ncurrent index is 2, value is True, and actual char is "c"\nsince first char of "abc" !== actual char "c"\nwe can ignore and skip this\n\nindex      :   0     1     2     3     4     5     6\nvalue      :  true false true  true  true false false\nActual char:   a     b     c     d     e     f\n\nlook at the 3rd element of the array ["ab", "abc", "cd", "def", "abcd"] is "cd"\ncurrent index is 2, value is True, and actual char is "c"\nsince first char of "cd" === actual char "c"\nwe can look at "cd" char length 2 steps ahead of the current index,\nvalue can be changed to the same as current value true\n\nindex      :   0     1     2     3     4     5     6\nvalue      :  true false true  true  true false false\nActual char:   a     b     c     d     e     f\n\nlook at the 4th element of the array ["ab", "abc", "cd", "def", "abcd"] is "def"\ncurrent index is 2, value is True, and actual char is "c"\nsince first char of "def" !== actual char "c"\nwe can ignore and skip this\n\nindex      :   0     1     2     3     4     5     6\nvalue      :  true false true  true  true false false\nActual char:   a     b     c     d     e     f\n\nlook at the 5th element of the array ["ab", "abc", "cd", "def", "abcd"] is "abcd"\ncurrent index is 2, value is True, and actual char is "c"\nsince first char of "abcd" !== actual char "c"\nwe can ignore and skip this\n\nindex      :   0     1     2     3     4     5     6\nvalue      :  true false true  true  true false false\nActual char:   a     b     c     d     e     f\n\nmove current value to the next index\nlook at the 1st element of the array ["ab", "abc", "cd", "def", "abcd"] is "ab"\ncurrent index is 3, value is True, and actual char is "d"\nsince first char of "ab" !== actual char "d"\nwe can ignore and skip this\n\nindex      :   0     1     2     3     4     5     6\nvalue      :  true false true  true  true false false\nActual char:   a     b     c     d     e     f\n\nlook at the 2nd element of the array ["ab", "abc", "cd", "def", "abcd"] is "abc"\ncurrent index is 3, value is True, and actual char is "d"\nsince first char of "abc" !== actual char "d"\nwe can ignore and skip this\n\nindex      :   0     1     2     3     4     5     6\nvalue      :  true false true  true  true false false\nActual char:   a     b     c     d     e     f\n\nlook at the 3rd element of the array ["ab", "abc", "cd", "def", "abcd"] is "cd"\ncurrent index is 3, value is True, and actual char is "d"\nsince first char of "cd" !== actual char "d"\nwe can ignore and skip this\n\nindex      :   0     1     2     3     4     5     6\nvalue      :  true false true  true  true false false\nActual char:   a     b     c     d     e     f\n\nlook at the 4th element of the array ["ab", "abc", "cd", "def", "abcd"] is "def"\ncurrent index is 3, value is True, and actual char is "d"\nsince first char of "def" === actual char "d"\nwe can look at "def" char length 3 steps ahead of the current index,\nvalue can be changed to the same as current value true\n\nindex      :   0     1     2     3     4     5     6\nvalue      :  true false true  true  true false  true\nActual char:   a     b     c     d     e     f\n\nwe can stop here, since nothing else will change\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"time complexity is ",(0,r.kt)("inlineCode",{parentName:"li"},"O(n * m * m)"),", simplified to ",(0,r.kt)("inlineCode",{parentName:"li"},"O(n * m^2)")),(0,r.kt)("li",{parentName:"ul"},"space complexity is ",(0,r.kt)("inlineCode",{parentName:"li"},"O(m)"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const canConstruct = (target, wordBank) => {\n  const table = Array(target.length + 1).fill(false); // space m\n  table[0] = true;\n\n  for (let i = 0; i <= target.length; i++) {\n    // time m\n    if (table[i]) {\n      for (const word of wordBank) {\n        // time n\n        if (target.slice(i, i + word.length) === word) {\n          // time m\n          table[i + word.length] = true;\n        }\n      }\n    }\n  }\n  return table[target.length];\n};\n\nconsole.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true\nconsole.log(\n  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])\n); // false\nconsole.log(\n  canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])\n); // true\nconsole.log(\n  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [\n    "e",\n    "ee",\n    "eee",\n    "eeee",\n    "eeeee",\n    "eeeeee",\n  ])\n); // false\n')))}d.isMDXComponent=!0}}]);