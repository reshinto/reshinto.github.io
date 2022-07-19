"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[9837],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(h,o(o({ref:n},s),{},{components:t})):r.createElement(h,o({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},54768:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const a={},o="Palindrome",l={unversionedId:"interviewPrep/algorithms_and_techniques/recursion/palindrome",id:"interviewPrep/algorithms_and_techniques/recursion/palindrome",title:"Palindrome",description:"- before working on the recursion, need to think about the following",source:"@site/docs/interviewPrep/algorithms_and_techniques/recursion/palindrome.md",sourceDirName:"interviewPrep/algorithms_and_techniques/recursion",slug:"/interviewPrep/algorithms_and_techniques/recursion/palindrome",permalink:"/docs/interviewPrep/algorithms_and_techniques/recursion/palindrome",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/algorithms_and_techniques/recursion/palindrome.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Decimal To Binary",permalink:"/docs/interviewPrep/algorithms_and_techniques/recursion/decimalToBinary"},next:{title:"Reverse Linked List",permalink:"/docs/interviewPrep/algorithms_and_techniques/recursion/reverseLinkedList"}},c={},u=[{value:"Iterative solution",id:"iterative-solution",level:3}],s={toc:u};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"palindrome"},"Palindrome"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"words that can be spelled forward and backwards\n\ninput: kayak\noutput: kayak\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"before working on the recursion, need to think about the following",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"What is the base case / stopping condition?"))),(0,i.kt)("li",{parentName:"ul"},"What is the smallest amount of work I can do in each iteration?")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function isPalindrome(input) {\n  if (input.length === 0 || input.length === 1) {\n    return true;\n  }\n  if (input[0] === input[input.length - 1]) {\n    return isPalindrome(input.slice(1, input.length - 1));\n  }\n  return false;\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'input: "racecar"\n\ncurrent input is "racecar"\nwhen function is called, the return value is added to the call stack\n|-----------------------|\n| isPalindrome("aceca") |\n|-----------------------|\n\nmove to the next recursion call\ncurrent input is "aceca"\nwhen function is called, the return value is added to the call stack\n|-----------------------|\n|  isPalindrome("cec")  |\n| isPalindrome("aceca") |\n|-----------------------|\n\nmove to the next recursion call\ncurrent input is "cec"\nwhen function is called, the return value is added to the call stack\n|-----------------------|\n|   isPalindrome("e")   |\n|  isPalindrome("cec")  |\n| isPalindrome("aceca") |\n|-----------------------|\n\nmove to the next recursion call\ncurrent input is "e"\nsince return value for this has hit the base case,\nit will start executing by poping the top stack frame from the call stack\n\nreturn result: true\n|-----------------------|\n|         true          |\n|  isPalindrome("cec")  |\n| isPalindrome("aceca") |\n|-----------------------|\n\nreturn result: true\n|-----------------------|\n|                       |\n|         true          |\n| isPalindrome("aceca") |\n|-----------------------|\n\nreturn result: true\n|-----------------------|\n|                       |\n|                       |\n|         true          |\n|-----------------------|\n\nreturn result: true\n|-----------------------|\n|                       |\n|                       |\n|                       |\n|-----------------------|\n')),(0,i.kt)("h3",{id:"iterative-solution"},"Iterative solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function isPalindrome(input) {\n  const midIndex = Math.ceil(input.length / 2);\n  for (let i = 0; i < midIndex; i++) {\n    if (input[0 + i] !== input[input.length - 1 - i]) {\n      return false;\n    }\n  }\n  return true;\n}\n")))}p.isMDXComponent=!0}}]);