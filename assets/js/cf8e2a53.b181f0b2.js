"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[5409],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=i,y=d["".concat(l,".").concat(p)]||d[p]||m[p]||r;return n?a.createElement(y,o(o({ref:t},c),{},{components:n})):a.createElement(y,o({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const r={},o="What are design fundamentals",s={unversionedId:"interviewPrep/system_design/02WhatAreDesignFundamentals/readme",id:"interviewPrep/system_design/02WhatAreDesignFundamentals/readme",title:"What are design fundamentals",description:"- to conduct a 45 min discussion",source:"@site/docs/interviewPrep/system_design/02WhatAreDesignFundamentals/readme.md",sourceDirName:"interviewPrep/system_design/02WhatAreDesignFundamentals",slug:"/interviewPrep/system_design/02WhatAreDesignFundamentals/",permalink:"/docs/interviewPrep/system_design/02WhatAreDesignFundamentals/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/system_design/02WhatAreDesignFundamentals/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/interviewPrep/system_design/01Introduction/"},next:{title:"Client-Server Model",permalink:"/docs/interviewPrep/system_design/03Client-ServerModel/"}},l={},u=[{value:"4 categories",id:"4-categories",level:2},{value:"Underlying or foundational knowledge",id:"underlying-or-foundational-knowledge",level:3},{value:"Key characteristics of a system",id:"key-characteristics-of-a-system",level:3},{value:"Actual components of a system",id:"actual-components-of-a-system",level:3},{value:"Actual tech",id:"actual-tech",level:3}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-are-design-fundamentals"},"What are design fundamentals"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"to conduct a 45 min discussion"),(0,i.kt)("li",{parentName:"ul"},"involve asking the interviewer questions",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"prodding them about what type of system you're really building"),(0,i.kt)("li",{parentName:"ul"},"what kind of functionality your system is gonna have to support"),(0,i.kt)("li",{parentName:"ul"},"what characteristics we're gonna value in our system"))),(0,i.kt)("li",{parentName:"ul"},"answer to system interview question had a lot to do with subjectivity",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"a proposed solution to a system design interview question may very well not be objectively correct or objectively incorrect"),(0,i.kt)("li",{parentName:"ul"},"it is our job to very confidently justify our solution"),(0,i.kt)("li",{parentName:"ul"},"it is our job to explain to rationalize why i've made certain choices, why i've designed parts of my system in 1 way instead of another"),(0,i.kt)("li",{parentName:"ul"},"it is our job to make the interviewer understand why my proposed solution is reasonable, why it's sound, and why it might be the best 1, or perhaps why it might not be the best 1, why it may be 1 of many potential solutions"),(0,i.kt)("li",{parentName:"ul"},"it is our job to eliminate any doubts that the interviewer might have in some of my design choices"),(0,i.kt)("li",{parentName:"ul"},"it is our job to defend my position or to adapt my position if the interview challenges it")))),(0,i.kt)("h2",{id:"4-categories"},"4 categories"),(0,i.kt)("h3",{id:"underlying-or-foundational-knowledge"},"Underlying or foundational knowledge"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"these are design fundamentals where, if you don't understand them, you will at best have severe gaps in knowledge that will undermine your positions or your ability to defend positions in a system design interview",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"at worst, will make you incapable of even beginning to tackle a system design interview"),(0,i.kt)("li",{parentName:"ul"},"e.g.:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"client server model: need to know what it is to design any modern day systems"),(0,i.kt)("li",{parentName:"ul"},"network protocols: need to have some understanding of how machines communicate and interact with 1 another in order to be able to properly design a complex system")))))),(0,i.kt)("h3",{id:"key-characteristics-of-a-system"},"Key characteristics of a system"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"things that you might want the system to have"),(0,i.kt)("li",{parentName:"ul"},"things that you might be trading off when making certain design decisions",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g.: availability, wait and see, throughput, redundancy, consistency")))),(0,i.kt)("h3",{id:"actual-components-of-a-system"},"Actual components of a system"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"these are gonna be slightly more tangible things that you can either have in a system or that you can implement in a system"),(0,i.kt)("li",{parentName:"ul"},"e.g.: load balances, proxies, caches, rate limiting, leader election"),(0,i.kt)("li",{parentName:"ul"},"these are the key components that are gonna allow your system to have the key characteristics")),(0,i.kt)("h3",{id:"actual-tech"},"Actual tech"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"real existing products or services that you can actually use in a system, either as actual components in a system or to achieve a certain characteristic in a system"),(0,i.kt)("li",{parentName:"ul"},"these are gonna be real tools",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g.: Zookeeper, XCD, Engine X, Reddits, Amazon S3, Google Cloud Storage"))),(0,i.kt)("li",{parentName:"ul"},"this category is often overlooked but is very important that can round you off and make you shine in a systems design interview")))}m.isMDXComponent=!0}}]);