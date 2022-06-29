"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[2278],{3905:(a,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>f});var t=n(7294);function c(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function r(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function i(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function d(a,e){if(null==a)return{};var n,t,c=function(a,e){if(null==a)return{};var n,t,c={},r=Object.keys(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||(c[n]=a[n]);return c}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(c[n]=a[n])}return c}var l=t.createContext({}),o=function(a){var e=t.useContext(l),n=e;return a&&(n="function"==typeof a?a(e):i(i({},e),a)),n},s=function(a){var e=o(a.components);return t.createElement(l.Provider,{value:e},a.children)},u={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},b=t.forwardRef((function(a,e){var n=a.components,c=a.mdxType,r=a.originalType,l=a.parentName,s=d(a,["components","mdxType","originalType","parentName"]),b=o(n),f=c,h=b["".concat(l,".").concat(f)]||b[f]||u[f]||r;return n?t.createElement(h,i(i({ref:e},s),{},{components:n})):t.createElement(h,i({ref:e},s))}));function f(a,e){var n=arguments,c=e&&e.mdxType;if("string"==typeof a||c){var r=n.length,i=new Array(r);i[0]=b;var d={};for(var l in e)hasOwnProperty.call(e,l)&&(d[l]=e[l]);d.originalType=a,d.mdxType="string"==typeof a?a:c,i[1]=d;for(var o=2;o<r;o++)i[o]=n[o];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}b.displayName="MDXCreateElement"},9967:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var t=n(7462),c=(n(7294),n(3905));const r={},i="All Construct example",d={unversionedId:"interviewPrep/algorithms_and_techniques/dynamic_programming/allConstruct",id:"interviewPrep/algorithms_and_techniques/dynamic_programming/allConstruct",title:"All Construct example",description:"- explanation",source:"@site/docs/interviewPrep/algorithms_and_techniques/dynamic_programming/allConstruct.md",sourceDirName:"interviewPrep/algorithms_and_techniques/dynamic_programming",slug:"/interviewPrep/algorithms_and_techniques/dynamic_programming/allConstruct",permalink:"/docs/interviewPrep/algorithms_and_techniques/dynamic_programming/allConstruct",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/algorithms_and_techniques/dynamic_programming/allConstruct.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dynamic Programming",permalink:"/docs/interviewPrep/algorithms_and_techniques/dynamic_programming/"},next:{title:"Best Sum example",permalink:"/docs/interviewPrep/algorithms_and_techniques/dynamic_programming/bestSum"}},l={},o=[{value:"Naive solution",id:"naive-solution",level:2},{value:"Memoization solution",id:"memoization-solution",level:2},{value:"Tabulation solution",id:"tabulation-solution",level:2}],s={toc:o};function u(a){let{components:e,...n}=a;return(0,c.kt)("wrapper",(0,t.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"all-construct-example"},"All Construct example"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'Write a function "allConstruct(target, wordBank)" that accepts a target string and an array of strings\n\nThe function should return a 2D array containing all of the ways that the "target" can be constructed by concatenating elements of the "wordBank" array\nEach element of the 2D array should represent 1 combination that constructs the "target"\n\nYou may reuse elements of "wordBank" as many times as needed\n')),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"explanation")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'Question 1: allConstruct("purple", ["purp", "p", "ur", "le", "purpl"])\n\nAnswer 1: [[purp, le], [p, ur, p, le]]\n\nQuestion 2: allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])\n\nAnswer 2: [\n  ["ab", "cd", "ef"],\n  ["ab", "c", "def"],\n  ["abc", "def"],\n  ["abcd", "ef"],\n]\n\nQuestion 3: allConstruct("hello", ["cat", "dog", "mouse"])\n\nAnswer 3: []\n\nQuestion 4: allConstruct("", ["cat", "dog", "mouse"])\n\nAnswer 4: [[]]\n')),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"graph display of what goes behind the hood for ",(0,c.kt)("inlineCode",{parentName:"li"},'allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])'))),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]) -> [\n  ["ab", "cd", "ef"],\n  ["ab", "c", "def"],\n  ["abc", "def"],\n  ["abcd", "ef"],\n]\n\n                  abcdef\n    /(ab)           |(abc)    \\(abcd)\n cdef              def        ef\n /(cd)  \\(c)        |(def)    |(ef)\nef      def        ""        ""\n |(ef)   |(def)\n""       ""\n\nwhen leaf node is "" returns value [[]] to parent\nwhile doing that, append the prefix value from the parent which was removed in the leaf node\nfor example at parent node ef, it should return [["ef"]]\n\nfor example at parent node cdef, if have 2 leaf nodes of value [["cd", "ef"]] and [["c", "def"]]\nit would then be combined to [["cd", "ef"], ["c", "def"]]\n')),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"graph display of what goes behind the hood for ",(0,c.kt)("inlineCode",{parentName:"li"},'allConstruct("purple", ["purp", "p", "ur", "le", "purpl"])'))),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]) -> [[purp, le], [p, ur, p, le]]\n\n[["purp", "le]]   +  [["p", "ur", "p", "le"]] + []\n\n                     purple\n  /(purp)              |(p)                       \\(purpl)\n le                  urple                         e\n |(le)                 |(ur)\n ""                   ple\n                       |(p)\n                      le\n                       |(le)\n                      ""\n')),(0,c.kt)("h2",{id:"naive-solution"},"Naive solution"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"time complexity is ",(0,c.kt)("inlineCode",{parentName:"li"},"O(n^m)")),(0,c.kt)("li",{parentName:"ul"},"space complexity is ",(0,c.kt)("inlineCode",{parentName:"li"},"O(m)"),", just add the number of call stacks during recursion and ignore the others")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-javascript"},'const allConstruct = (target, wordBank) => {\n  if (target === "") return [[]];\n\n  const result = [];\n\n  for (const word of wordBank) {\n    // time n\n    if (target.indexOf(word) === 0) {\n      const suffix = target.slice(word.length);\n      const waysToBuildSuffix = allConstruct(suffix, wordBank); // time ^m, space m\n      const waysToBuildTarget = waysToBuildSuffix.map((way) => [word, ...way]); // time m\n      result.push(...waysToBuildTarget);\n    }\n  }\n  return result;\n};\n\nconsole.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));\n/*\n[\n  ["purp", "le"],\n  ["p", "ur", "p", "le"],\n]\n*/\nconsole.log(\n  allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])\n);\n/*\n[\n  ["ab", "cd", "ef"],\n  ["ab", "c", "def"],\n  ["abc", "def"],\n  ["abcd", "ef"],\n]\n*/\nconsole.log(\n  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])\n); // []\nconsole.log(\n  allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaz", [\n    "a",\n    "aa",\n    "aaa",\n    "aaaa",\n    "aaaaa",\n  ])\n); // []\n')),(0,c.kt)("h2",{id:"memoization-solution"},"Memoization solution"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"time complexity is ",(0,c.kt)("inlineCode",{parentName:"li"},"O(n^m)")),(0,c.kt)("li",{parentName:"ul"},"space complexity is ",(0,c.kt)("inlineCode",{parentName:"li"},"O(m)"),", just add the number of call stacks during recursion and ignore the others"),(0,c.kt)("li",{parentName:"ul"},"does not help much for the worst case since we need to return a 2D array")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-javascript"},'const allConstruct = (target, wordBank, memo = {}) => {\n  if (target in memo) return memo[target];\n  if (target === "") return [[]];\n\n  const result = [];\n\n  for (const word of wordBank) {\n    // time n\n    if (target.indexOf(word) === 0) {\n      const suffix = target.slice(word.length); // space m\n      const waysToBuildSuffix = allConstruct(suffix, wordBank, memo); // time ^m\n      const waysToBuildTarget = waysToBuildSuffix.map((way) => [word, ...way]); // time m, space m\n      result.push(...waysToBuildTarget); // space m\n    }\n  }\n  memo[target] = result;\n  return result;\n};\n\nconsole.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));\n/*\n[\n  ["purp", "le"],\n  ["p", "ur", "p", "le"],\n]\n*/\nconsole.log(\n  allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])\n);\n/*\n[\n  ["ab", "cd", "ef"],\n  ["ab", "c", "def"],\n  ["abc", "def"],\n  ["abcd", "ef"],\n]\n*/\nconsole.log(\n  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])\n); // []\nconsole.log(\n  allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaz", [\n    "a",\n    "aa",\n    "aaa",\n    "aaaa",\n    "aaaaa",\n  ])\n); // []\n')),(0,c.kt)("h2",{id:"tabulation-solution"},"Tabulation solution"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]) -> [\n  ["ab", "cd", "ef"],\n  ["ab", "c", "def"],\n  ["abc", "def"],\n  ["abcd", "ef"],\n]\n\nm = target\nn = wordBank.length\n\nfirst create an array the size of the target.length + 1\nset default value to be []\n\nindex      :   0     1     2     3     4     5     6\nvalue      :   []    []    []    []    []    []    []\nActual char:   a     b     c     d     e     f\n\nwhen target value is an empty string, no string concatenation is required to get "", therefore return value should be [[]]\n\nindex      :   0       1     2     3     4     5     6\nvalue      :   [[]]    []    []    []    []    []    []\nActual char:   a       b     c     d     e     f\n\nlook at the 1st element of the array ["ab", "abc", "cd", "def", "abcd", "ef", "c"] is "ab"\ncurrent index is 0, value is [[]], and actual char is "a"\nsince first char of "ab" === actual char "a"\nwe can look at "ab" char length 2 steps ahead of the current index,\nvalue can be changed to the same as current value [[]] and appends the "ab" value into the nested array\nresulting in [["ab"]]\n\nindex      :   0       1     2           3     4     5     6\nvalue      :   [[]]    []    [["ab"]]    []    []    []    []\nActual char:   a       b     c            d     e     f\n\nlook at the 2nd element of the array ["ab", "abc", "cd", "def", "abcd", "ef", "c"] is "abc"\ncurrent index is 0, value is [[]], and actual char is "a"\nsince first char of "abc" === actual char "a"\nwe can look at "abc" char length 3 steps ahead of the current index,\nvalue can be changed to the same as current value [[]] and appends the "abc" value into the nested array\nresulting in [["abc"]]\n\nindex      :   0       1     2           3            4     5     6\nvalue      :   [[]]    []    [["ab"]]    [["abc"]]    []    []    []\nActual char:   a       b     c           d            e     f\n\nlook at the 3rd element of the array ["ab", "abc", "cd", "def", "abcd", "ef", "c"] is "cd"\ncurrent index is 0, value is [[]], and actual char is "a"\nsince first char of "cd" !== actual char "a"\nwe can ignore and skip this\n\nindex      :   0       1     2           3            4     5     6\nvalue      :   [[]]    []    [["ab"]]    [["abc"]]    []    []    []\nActual char:   a       b     c           d            e     f\n\nlook at the 4th element of the array ["ab", "abc", "cd", "def", "abcd", "ef", "c"] is "def"\ncurrent index is 0, value is [[]], and actual char is "a"\nsince first char of "def" !== actual char "a"\nwe can ignore and skip this\n\nindex      :   0       1     2           3            4     5     6\nvalue      :   [[]]    []    [["ab"]]    [["abc"]]    []    []    []\nActual char:   a       b     c           d            e     f\n\nlook at the 5th element of the array ["ab", "abc", "cd", "def", "abcd", "ef", "c"] is "abcd"\ncurrent index is 0, value is [[]], and actual char is "a"\nsince first char of "abcd" === actual char "a"\nwe can look at "abcd" char length 4 steps ahead of the current index,\nvalue can be changed to the same as current value [[]] and appends the "abc" value into the nested array\nresulting in [["abcd"]]\n\nindex      :   0       1     2           3            4             5     6\nvalue      :   [[]]    []    [["ab"]]    [["abc"]]    [["abcd"]]    []    []\nActual char:   a       b     c           d            e             f\n\nlook at the 6th element of the array ["ab", "abc", "cd", "def", "abcd", "ef", "c"] is "ef"\ncurrent index is 0, value is [[]], and actual char is "a"\nsince first char of "ef" !== actual char "a"\nwe can ignore and skip this\n\nindex      :   0       1     2           3            4             5     6\nvalue      :   [[]]    []    [["ab"]]    [["abc"]]    [["abcd"]]    []    []\nActual char:   a       b     c           d            e             f\n\nlook at the 7th element of the array ["ab", "abc", "cd", "def", "abcd", "ef", "c"] is "c"\ncurrent index is 0, value is [[]], and actual char is "a"\nsince first char of "c" !== actual char "a"\nwe can ignore and skip this\n\nindex      :   0       1     2           3            4             5     6\nvalue      :   [[]]    []    [["ab"]]    [["abc"]]    [["abcd"]]    []    []\nActual char:   a       b     c           d            e             f\n\nmove current value to the next index\nlook at the 1st element of the array ["ab", "abc", "cd", "def", "abcd", "ef", "c"] is "ab"\ncurrent index is 1, value is [], and actual char is "b"\nsince value is []\nwe can ignore and skip the entire process and move to the next index\n\nindex      :   0       1     2           3            4             5     6\nvalue      :   [[]]    []    [["ab"]]    [["abc"]]    [["abcd"]]    []    []\nActual char:   a       b     c           d            e             f\n\nmove current value to the next index\nlook at the 1st element of the array ["ab", "abc", "cd", "def", "abcd", "ef", "c"] is "ab"\ncurrent index is 2, value is [["ab"]], and actual char is "c"\nsince first char of "ab" !== actual char "c"\nwe can ignore and skip this\n\nindex      :   0       1     2           3            4             5     6\nvalue      :   [[]]    []    [["ab"]]    [["abc"]]    [["abcd"]]    []    []\nActual char:   a       b     c           d            e             f\n\nlook at the 2nd element of the array ["ab", "abc", "cd", "def", "abcd", "ef", "c"] is "abc"\ncurrent index is 2, value is [["ab"]], and actual char is "c"\nsince first char of "abc" !== actual char "c"\nwe can ignore and skip this\n\nindex      :   0       1     2           3            4             5     6\nvalue      :   [[]]    []    [["ab"]]    [["abc"]]    [["abcd"]]    []    []\nActual char:   a       b     c           d            e             f\n\nlook at the 3rd element of the array ["ab", "abc", "cd", "def", "abcd", "ef", "c"] is "cd"\ncurrent index is 2, value is [["ab"]], and actual char is "c"\nsince first char of "cd" === actual char "c"\nwe can look at "cd" char length 2 steps ahead of the current index,\nnew value can be changed to the same as current value [["ab"]] and appends the "cd" value into the nested array\nresulting in [["ab", cd"]] and then combine to the array at the new index 4\nwhich becomes [["abcd"], ["ab", "cd"]]\n\nindex      :   0       1     2           3            4                 5     6\nvalue      :   [[]]    []    [           [            [                 []    []\n                               ["ab"],     ["abc"],     ["abcd"],\n                             ]            ]             ["ab", "cd],\n                                                      ]\nActual char:   a       b     c           d            e                 f\n\nlook at the 4th element of the array ["ab", "abc", "cd", "def", "abcd", "ef", "c"] is "def"\ncurrent index is 2, value is [["ab"]], and actual char is "c"\nsince first char of "def" !== actual char "c"\nwe can ignore and skip this\n\nindex      :   0       1     2           3            4                 5     6\nvalue      :   [[]]    []    [           [            [                 []    []\n                               ["ab"],     ["abc"],     ["abcd"],\n                             ]            ]             ["ab", "cd],\n                                                      ]\nActual char:   a       b     c           d            e                 f\n\nlook at the 5th element of the array ["ab", "abc", "cd", "def", "abcd", "ef", "c"] is "abcd"\ncurrent index is 2, value is [["ab"]], and actual char is "c"\nsince first char of "abcd" !== actual char "c"\nwe can ignore and skip this\n\nindex      :   0       1     2           3            4                 5     6\nvalue      :   [[]]    []    [           [            [                 []    []\n                               ["ab"],     ["abc"],     ["abcd"],\n                             ]            ]             ["ab", "cd],\n                                                      ]\nActual char:   a       b     c           d            e                 f\n\nlook at the 6th element of the array ["ab", "abc", "cd", "def", "abcd", "ef", "c"] is "ef"\ncurrent index is 2, value is [["ab"]], and actual char is "c"\nsince first char of "ef" !== actual char "c"\nwe can ignore and skip this\n\nindex      :   0       1     2           3            4                 5     6\nvalue      :   [[]]    []    [           [            [                 []    []\n                               ["ab"],     ["abc"],     ["abcd"],\n                             ]            ]             ["ab", "cd],\n                                                      ]\nActual char:   a       b     c           d            e                 f\n\nlook at the 7th element of the array ["ab", "abc", "cd", "def", "abcd", "ef", "c"] is "c"\ncurrent index is 2, value is [["ab"]], and actual char is "c"\nsince first char of "c" === actual char "c"\nwe can look at "c" char length 1 steps ahead of the current index,\nnew value can be changed to the same as current value [["ab"]] and appends the "c" value into the nested array\nresulting in [["ab", c"]] and then combine to the array at the new index 3\nwhich becomes [["abc"], ["ab", "c"]]\n\nindex      :   0       1     2           3                  4                 5     6\nvalue      :   [[]]    []    [           [                  [                 []    []\n                               ["ab"],     ["abc"],          ["abcd"],\n                             ]             ["ab", "c"],      ["ab", "cd],\n                                          ]                 ]\nActual char:   a       b     c           d                  e                 f\n\nmove current value to the next index\nlook at the 1st element of the array ["ab", "abc", "cd", "def", "abcd", "ef", "c"] is "ab"\ncurrent index is 3, value is [["abc"], ["ab", "c"]], and actual char is "d"\nsince first char of "ab" !== actual char "d"\nwe can ignore and skip this\n\nindex      :   0       1     2           3                  4                 5     6\nvalue      :   [[]]    []    [           [                  [                 []    []\n                               ["ab"],     ["abc"],          ["abcd"],\n                             ]             ["ab", "c"],      ["ab", "cd],\n                                          ]                 ]\nActual char:   a       b     c           d                  e                 f\n\nlook at the 2nd element of the array ["ab", "abc", "cd", "def", "abcd", "ef", "c"] is "abc"\ncurrent index is 3, value is [["abc"], ["ab", "c"]], and actual char is "d"\nsince first char of "abc" !== actual char "d"\nwe can ignore and skip this\n\nindex      :   0       1     2           3                  4                 5     6\nvalue      :   [[]]    []    [           [                  [                 []    []\n                               ["ab"],     ["abc"],          ["abcd"],\n                             ]             ["ab", "c"],      ["ab", "cd],\n                                          ]                 ]\nActual char:   a       b     c           d                  e                 f\n\nlook at the 3rd element of the array ["ab", "abc", "cd", "def", "abcd", "ef", "c"] is "cd"\ncurrent index is 3, value is [["abc"], ["ab", "c"]], and actual char is "d"\nsince first char of "cd" !== actual char "d"\nwe can ignore and skip this\n\nindex      :   0       1     2           3                  4                 5     6\nvalue      :   [[]]    []    [           [                  [                 []    []\n                               ["ab"],     ["abc"],          ["abcd"],\n                             ]             ["ab", "c"],      ["ab", "cd],\n                                          ]                 ]\nActual char:   a       b     c           d                  e                 f\n\nlook at the 4th element of the array ["ab", "abc", "cd", "def", "abcd", "ef", "c"] is "def"\ncurrent index is 3, value is [["abc"], ["ab", "c"]], and actual char is "d"\nsince first char of "def" === actual char "d"\nwe can look at "def" char length 3 steps ahead of the current index,\nnew value can be changed to the same as current value [["abc"], ["ab", "c"]] and appends the "def" value into the nested array\nresulting in [["abc", "def"], ["ab", "c", "def"]]\n\nindex      :   0       1     2           3                  4                 5     6\nvalue      :   [[]]    []    [           [                  [                 []    [\n                               ["ab"],     ["abc"],          ["abcd"],                ["abc", "def"],\n                             ]             ["ab", "c"],      ["ab", "cd],             ["ab", "c", "def"],\n                                          ]                 ]                       ]\nActual char:   a       b     c           d                  e                 f\n\nlook at the 5th element of the array ["ab", "abc", "cd", "def", "abcd", "ef", "c"] is "abcd"\ncurrent index is 3, value is [["abc"], ["ab", "c"]], and actual char is "d"\nsince first char of "abcd" !== actual char "d"\nwe can ignore and skip this\n\nindex      :   0       1     2           3                  4                 5     6\nvalue      :   [[]]    []    [           [                  [                 []    [\n                               ["ab"],     ["abc"],          ["abcd"],                ["abc", "def"],\n                             ]             ["ab", "c"],      ["ab", "cd],             ["ab", "c", "def"],\n                                          ]                 ]                       ]\nActual char:   a       b     c           d                  e                 f\n\nlook at the 6th element of the array ["ab", "abc", "cd", "def", "abcd", "ef", "c"] is "ef"\ncurrent index is 3, value is [["abc"], ["ab", "c"]], and actual char is "d"\nsince first char of "ef" !== actual char "d"\nwe can ignore and skip this\n\nindex      :   0       1     2           3                  4                 5     6\nvalue      :   [[]]    []    [           [                  [                 []    [\n                               ["ab"],     ["abc"],          ["abcd"],                ["abc", "def"],\n                             ]             ["ab", "c"],      ["ab", "cd],             ["ab", "c", "def"],\n                                          ]                 ]                       ]\nActual char:   a       b     c           d                  e                 f\n\nlook at the 7th element of the array ["ab", "abc", "cd", "def", "abcd", "ef", "c"] is "c"\ncurrent index is 3, value is [["abc"], ["ab", "c"]], and actual char is "d"\nsince first char of "c" !== actual char "d"\nwe can ignore and skip this\n\nindex      :   0       1     2           3                  4                 5     6\nvalue      :   [[]]    []    [           [                  [                 []    [\n                               ["ab"],     ["abc"],          ["abcd"],                ["abc", "def"],\n                             ]             ["ab", "c"],      ["ab", "cd],             ["ab", "c", "def"],\n                                          ]                 ]                       ]\nActual char:   a       b     c           d                  e                 f\n\nmove current value to the next index\nlook at the 1st element of the array ["ab", "abc", "cd", "def", "abcd", "ef", "c"] is "ab"\ncurrent index is 4, value is [["abcd"], ["ab", "cd"]], and actual char is "e"\nsince first char of "ab" !== actual char "e"\nwe can ignore and skip this\n\nindex      :   0       1     2           3                  4                 5     6\nvalue      :   [[]]    []    [           [                  [                 []    [\n                               ["ab"],     ["abc"],          ["abcd"],                ["abc", "def"],\n                             ]             ["ab", "c"],      ["ab", "cd],             ["ab", "c", "def"],\n                                          ]                 ]                       ]\nActual char:   a       b     c           d                  e                 f\n\nlook at the 2nd element of the array ["ab", "abc", "cd", "def", "abcd", "ef", "c"] is "abc"\ncurrent index is 4, value is [["abcd"], ["ab", "cd"]], and actual char is "e"\nsince first char of "abc" !== actual char "e"\nwe can ignore and skip this\n\nindex      :   0       1     2           3                  4                 5     6\nvalue      :   [[]]    []    [           [                  [                 []    [\n                               ["ab"],     ["abc"],          ["abcd"],                ["abc", "def"],\n                             ]             ["ab", "c"],      ["ab", "cd],             ["ab", "c", "def"],\n                                          ]                 ]                       ]\nActual char:   a       b     c           d                  e                 f\n\nlook at the 3rd element of the array ["ab", "abc", "cd", "def", "abcd", "ef", "c"] is "cd"\ncurrent index is 4, value is [["abcd"], ["ab", "cd"]], and actual char is "e"\nsince first char of "cd" !== actual char "e"\nwe can ignore and skip this\n\nindex      :   0       1     2           3                  4                 5     6\nvalue      :   [[]]    []    [           [                  [                 []    [\n                               ["ab"],     ["abc"],          ["abcd"],                ["abc", "def"],\n                             ]             ["ab", "c"],      ["ab", "cd],             ["ab", "c", "def"],\n                                          ]                 ]                       ]\nActual char:   a       b     c           d                  e                 f\n\nlook at the 4th element of the array ["ab", "abc", "cd", "def", "abcd", "ef", "c"] is "def"\ncurrent index is 4, value is [["abcd"], ["ab", "cd"]], and actual char is "e"\nsince first char of "def" !== actual char "e"\nwe can ignore and skip this\n\nindex      :   0       1     2           3                  4                 5     6\nvalue      :   [[]]    []    [           [                  [                 []    [\n                               ["ab"],     ["abc"],          ["abcd"],                ["abc", "def"],\n                             ]             ["ab", "c"],      ["ab", "cd],             ["ab", "c", "def"],\n                                          ]                 ]                       ]\nActual char:   a       b     c           d                  e                 f\n\nlook at the 5th element of the array ["ab", "abc", "cd", "def", "abcd", "ef", "c"] is "abcd"\ncurrent index is 4, value is [["abcd"], ["ab", "cd"]], and actual char is "e"\nsince first char of "abcd" !== actual char "e"\nwe can ignore and skip this\n\nindex      :   0       1     2           3                  4                 5     6\nvalue      :   [[]]    []    [           [                  [                 []    [\n                               ["ab"],     ["abc"],          ["abcd"],                ["abc", "def"],\n                             ]             ["ab", "c"],      ["ab", "cd],             ["ab", "c", "def"],\n                                          ]                 ]                       ]\nActual char:   a       b     c           d                  e                 f\n\nlook at the 6th element of the array ["ab", "abc", "cd", "def", "abcd", "ef", "c"] is "ef"\ncurrent index is 4, value is [["abcd"], ["ab", "cd"]], and actual char is "e"\nsince first char of "ef" === actual char "e"\nwe can look at "ef" char length 2 steps ahead of the current index,\nnew value can be changed to the same as current value [["abcd"], ["ab", "cd"]] and appends the "ef" value into the nested array\nresulting in [["abcd", "ef"], ["ab", "cd", "ef"]] and then combine to the array at the new index 6\nwhich becomes [["abc", "def"], ["ab", "c", "def"], ["abcd", "ef"], ["ab", "cd", "ef"]]\n\nindex      :   0       1     2           3                  4                 5     6\nvalue      :   [[]]    []    [           [                  [                 []    [\n                               ["ab"],     ["abc"],          ["abcd"],                ["abc", "def"],\n                             ]             ["ab", "c"],      ["ab", "cd],             ["ab", "c", "def"],\n                                          ]                 ]                         ["abcd", "ef"],\n                                                                                      ["ab", "cd", "ef"],\n                                                                                     ]\nActual char:   a       b     c           d                  e                 f\n\nlook at the 7th element of the array ["ab", "abc", "cd", "def", "abcd", "ef", "c"] is "c"\ncurrent index is 4, value is [["abcd"], ["ab", "cd"]], and actual char is "e"\nsince first char of "c" !== actual char "e"\nwe can ignore and skip this\n\nindex      :   0       1     2           3                  4                 5     6\nvalue      :   [[]]    []    [           [                  [                 []    [\n                               ["ab"],     ["abc"],          ["abcd"],                ["abc", "def"],\n                             ]             ["ab", "c"],      ["ab", "cd],             ["ab", "c", "def"],\n                                          ]                 ]                         ["abcd", "ef"],\n                                                                                      ["ab", "cd", "ef"],\n                                                                                     ]\nActual char:   a       b     c           d                  e                 f\n\nwe can stop here, since nothing else will change\n')),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"time complexity is ",(0,c.kt)("inlineCode",{parentName:"li"},"O(n^m)")),(0,c.kt)("li",{parentName:"ul"},"space complexity is ",(0,c.kt)("inlineCode",{parentName:"li"},"O(n^m)")),(0,c.kt)("li",{parentName:"ul"},"does not help much for the worst case since we need to return a 2D array")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-javascript"},'const allConstruct = (target, wordBank) => {\n  const table = Array(target.length + 1)\n    .fill()\n    .map(() => []);\n  table[0] = [[]];\n\n  for (let i = 0; i <= target.length; i++) {\n    for (const word of wordBank) {\n      if (target.slice(i, i + word.length) === word) {\n        const newCombinations = table[i].map((subArray) => [...subArray, word]);\n        table[i + word.length].push(...newCombinations);\n      }\n    }\n  }\n  return table[target.length];\n};\n\nconsole.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));\n/*\n[\n  ["purp", "le"],\n  ["p", "ur", "p", "le"],\n]\n*/\nconsole.log(\n  allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])\n);\n/*\n[\n  ["ab", "cd", "ef"],\n  ["ab", "c", "def"],\n  ["abc", "def"],\n  ["abcd", "ef"],\n]\n*/\nconsole.log(\n  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])\n); // []\nconsole.log(\n  allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaz", [\n    "a",\n    "aa",\n    "aaa",\n    "aaaa",\n    "aaaaa",\n  ])\n); // return stack overflow due to large space being used\n')))}u.isMDXComponent=!0}}]);