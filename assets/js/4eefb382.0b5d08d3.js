"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[42898],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=i,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},53514:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(83117),i=(r(67294),r(3905));const a={},o="Don't Repeat Yourself (DRY)",l={unversionedId:"interviewPrep/design_principles/DRY/readme",id:"interviewPrep/design_principles/DRY/readme",title:"Don't Repeat Yourself (DRY)",description:"- It usually means refactoring code by taking something done several times and turning it into a loop or a function",source:"@site/docs/interviewPrep/design_principles/DRY/readme.md",sourceDirName:"interviewPrep/design_principles/DRY",slug:"/interviewPrep/design_principles/DRY/",permalink:"/docs/interviewPrep/design_principles/DRY/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/design_principles/DRY/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Big Design Up Front (BDUF)",permalink:"/docs/interviewPrep/design_principles/BDUF/"},next:{title:"JavaScript Example",permalink:"/docs/interviewPrep/design_principles/DRY/javascript/"}},s={},p=[],u={toc:p};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dont-repeat-yourself-dry"},"Don't Repeat Yourself (DRY)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It usually means refactoring code by taking something done several times and turning it into a loop or a function",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"DRY code is easy to change, because you only have to make any change in one place"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Easy to change")," doesn\u2019t just mean clean code",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"if you can\u2019t figure out what a variable is for or what a function does based on its name",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"then it\u2019s harder to change it later, when you might not remember exactly how your code works",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"or when somebody else is trying to change your code"))))))),(0,i.kt)("li",{parentName:"ul"},"Using descriptive variable names make it easier to understand what the variable contains and in turn make it easier to use or change later on"),(0,i.kt)("li",{parentName:"ul"},"A good starting naming convention for your variables and functions would be:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"singular words for variables containing values",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"i.e: fruit, firstName, favoriteColor"))),(0,i.kt)("li",{parentName:"ul"},"plural words for variables containing objects or arrays",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"i.e: fruits, names, myColors"))),(0,i.kt)("li",{parentName:"ul"},"a description for variables containing functions",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"ie: logFruits, findPerson, getFavoriteColor"))))),(0,i.kt)("li",{parentName:"ul"},"Conclusion",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Whenever you finish writing some code, you should always look back to see if there is any way you can DRY it up, including:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"using descriptive variable names"),(0,i.kt)("li",{parentName:"ul"},"taking repetitive bits of code"),(0,i.kt)("li",{parentName:"ul"},"extracting them into a function or loop")))))))}c.isMDXComponent=!0}}]);