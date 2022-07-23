"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[5355],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||c;return t?a.createElement(f,o(o({ref:n},l),{},{components:t})):a.createElement(f,o({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=p;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var s=2;s<c;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},33439:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const c={},o="Reduce method",u={unversionedId:"languageSpecific/javascript/reduce",id:"languageSpecific/javascript/reduce",title:"Reduce method",description:"Calculate sum of values in array",source:"@site/docs/languageSpecific/javascript/reduce.md",sourceDirName:"languageSpecific/javascript",slug:"/languageSpecific/javascript/reduce",permalink:"/docs/languageSpecific/javascript/reduce",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/languageSpecific/javascript/reduce.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NodeJS",permalink:"/docs/languageSpecific/javascript/nodejs"},next:{title:"TypeScript",permalink:"/docs/languageSpecific/javascript/typescript"}},i={},s=[{value:"Calculate sum of values in array",id:"calculate-sum-of-values-in-array",level:2},{value:"Combine and join arrays by ID",id:"combine-and-join-arrays-by-id",level:2}],l={toc:s};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"reduce-method"},"Reduce method"),(0,r.kt)("h2",{id:"calculate-sum-of-values-in-array"},"Calculate sum of values in array"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const intArr = [1, 2, 3, 4];\n\nconst intResult = intArr.reduce((acc, x) => acc + x);\n\nconsole.log(intResult); // 10\n")),(0,r.kt)("h2",{id:"combine-and-join-arrays-by-id"},"Combine and join arrays by ID"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"data"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const users = [\n  {\n    userID: "1",\n    username: "John40",\n    country: "USA",\n    name: "John",\n  },\n  {\n    userID: "2",\n    username: "Luke123",\n    country: "Sweden",\n    name: "Luke",\n  },\n  {\n    userID: "3",\n    username: "Lora123",\n    country: "Finland",\n    name: "Lora",\n  },\n  {\n    userID: "4",\n    username: "MIKE",\n    country: "GB",\n    name: "Mike",\n  },\n  {\n    userID: "5",\n    username: "Emmi1990",\n    country: "Finland",\n    name: "Emmi",\n  },\n];\n\nconst data = [\n  {\n    userID: "1",\n    amt: 20,\n  },\n  {\n    userID: "2",\n    amt: 30,\n  },\n  {\n    userID: "3",\n    amt: 40,\n  },\n  {\n    userID: "4",\n    amt: 50,\n  },\n  {\n    userID: "1",\n    amt: 100,\n  },\n];\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"combine data by ID"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const combined = users.concat(data);\n\nconst result = Object.values(\n  combined.reduce((acc, x) => {\n    // if acc.userID object does not exist, replace it with an empty object\n    // combine object at acc.userID with x object\n    acc[x.userID] = Object.assign(acc[x.userID] || {}, x);\n\n    return acc;\n\n    // initial value required for x value not to start from 2nd element of array\n  }, {})\n);\n\nconsole.log(result);\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'[\n  {\n    userID: "1",\n    username: "John40",\n    country: "USA",\n    name: "John",\n    amt: 100,\n  },\n  {\n    userID: "2",\n    username: "Luke123",\n    country: "Sweden",\n    name: "Luke",\n    amt: 30,\n  },\n  {\n    userID: "3",\n    username: "Lora123",\n    country: "Finland",\n    name: "Lora",\n    amt: 40,\n  },\n  {\n    userID: "4",\n    username: "MIKE",\n    country: "GB",\n    name: "Mike",\n    amt: 50,\n  },\n  {\n    userID: "5",\n    username: "Emmi1990",\n    country: "Finland",\n    name: "Emmi",\n  },\n];\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"combine data by ID and increment duplicates"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const combined = users.concat(data);\n\nconst result = Object.values(\n  combined.reduce((acc, x) => {\n    // set default value for objects that does not have amt property\n    const currentAmt = acc[x.userID]?.amt ? acc[x.userID].amt : 0;\n    const nextAmt = x?.amt ? x.amt : 0;\n\n    // if acc.userID object does not exist, replace it with an empty object\n    // combine object at acc.userID with modified x object\n    acc[x.userID] = Object.assign(acc[x.userID] || {}, {\n      ...x,\n      amt: currentAmt + nextAmt,\n    });\n\n    return acc;\n\n    // initial value required for x value not to start from 2nd element of array\n  }, {})\n);\n\nconsole.log(result);\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'[\n  {\n    userID: "1",\n    username: "John40",\n    country: "USA",\n    name: "John",\n    amt: 120,\n  },\n  {\n    userID: "2",\n    username: "Luke123",\n    country: "Sweden",\n    name: "Luke",\n    amt: 30,\n  },\n  {\n    userID: "3",\n    username: "Lora123",\n    country: "Finland",\n    name: "Lora",\n    amt: 40,\n  },\n  {\n    userID: "4",\n    username: "MIKE",\n    country: "GB",\n    name: "Mike",\n    amt: 50,\n  },\n  {\n    userID: "5",\n    username: "Emmi1990",\n    country: "Finland",\n    name: "Emmi",\n    amt: 0,\n  },\n];\n')))))}m.isMDXComponent=!0}}]);