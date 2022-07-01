"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[4241],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4828:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={},i="Test-Driven Development (TDD)",l={unversionedId:"automatedTests/testDrivenDevelopment",id:"automatedTests/testDrivenDevelopment",title:"Test-Driven Development (TDD)",description:"- Writing tests for production code before writing the actual code",source:"@site/docs/automatedTests/testDrivenDevelopment.md",sourceDirName:"automatedTests",slug:"/automatedTests/testDrivenDevelopment",permalink:"/docs/automatedTests/testDrivenDevelopment",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/automatedTests/testDrivenDevelopment.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SuperTest for testing the server (incomplete)",permalink:"/docs/automatedTests/javascript/superTest"},next:{title:"Object Oriented Programming",permalink:"/docs/basics/OOP"}},s={},u=[{value:"Advantages of TDD",id:"advantages-of-tdd",level:2},{value:"Disadvantages of TDD",id:"disadvantages-of-tdd",level:2},{value:"Basic TDD cycle",id:"basic-tdd-cycle",level:2},{value:"Criteria for a good test",id:"criteria-for-a-good-test",level:2},{value:"3 types of tests",id:"3-types-of-tests",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"test-driven-development-tdd"},"Test-Driven Development (TDD)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Writing tests for production code before writing the actual code"),(0,n.kt)("li",{parentName:"ul"},"simple example: writing failing test first before writing the logic")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"function inchesToCentimeters(x) {}\n\ntest(inchesToCentimeters(1) === 2.54);\ntest(inchesToCentimeters(5) === 12.7);\ntest(inchesToCentimeters(27) === 68.58);\ntest(inchesToCentimeters(196) === 497.84);\n")),(0,n.kt)("h2",{id:"advantages-of-tdd"},"Advantages of TDD"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ensures code quality"),(0,n.kt)("li",{parentName:"ul"},"Forces us to clarify our thinking"),(0,n.kt)("li",{parentName:"ul"},"Improves communication between developers",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Allows new developers to understand the intention from other developers or those who already left the company",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"adding comments to code is good, however, no guarantees that the comments will also be updated together with the code"),(0,n.kt)("li",{parentName:"ul"},"tests provides a concrete medium to express what the code is supposed to do & the different situations where it should produce a certain output",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"if the code changes, tests must also be modified to prevent the tests from failing"))))))),(0,n.kt)("li",{parentName:"ul"},"Improves the structure of the production code",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Requires to think carefully about how the code is arranged"),(0,n.kt)("li",{parentName:"ul"},"Forces to split up large chunks of code into smaller, more testable chunks (thus makes code loosely coupled)"))),(0,n.kt)("li",{parentName:"ul"},"Allows developers to make worry-free changes",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"if all the test passes, then everything is okay")))),(0,n.kt)("h2",{id:"disadvantages-of-tdd"},"Disadvantages of TDD"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Takes longer at first"),(0,n.kt)("li",{parentName:"ul"},"TDD is not always a favorite with management"),(0,n.kt)("li",{parentName:"ul"},"Need to be careful of writing bad tests")),(0,n.kt)("h2",{id:"basic-tdd-cycle"},"Basic TDD cycle"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Write a failing test"),(0,n.kt)("li",{parentName:"ol"},"Write the code but only enough to make the failing code test pass"),(0,n.kt)("li",{parentName:"ol"},"Refactor the code written")),(0,n.kt)("h2",{id:"criteria-for-a-good-test"},"Criteria for a good test"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Readable",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test should be even more readable than the code they cover"),(0,n.kt)("li",{parentName:"ul"},'it should answer "What\'s the actual behavior?", "What\'s the expected behavior?", "Why?"'))),(0,n.kt)("li",{parentName:"ol"},"Isolated",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test in 1 test cannot affect the results of the other tests"))),(0,n.kt)("li",{parentName:"ol"},"Thorough",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test must cover both generic expected inputs & unexpected or edge case inputs"))),(0,n.kt)("li",{parentName:"ol"},"Explicit",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"All the information required to reproduce the results of the test, must be readily accessible to anyone"),(0,n.kt)("li",{parentName:"ul"},"There should be no shared state between components, nothing hidden, everything involved in getting to the final result should be clear & obvious")))),(0,n.kt)("h2",{id:"3-types-of-tests"},"3 types of tests"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Unit Tests: test very specific, low level pieces of functionality (end users won't really notice or think about directly)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Need to have 3 things: A testing environment / test runner, A testing framework, An assertion library"),(0,n.kt)("li",{parentName:"ul"},"tools:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Mocha: serves as a test runner and a testing framework"),(0,n.kt)("li",{parentName:"ul"},"Chai: serves as an assertion library"),(0,n.kt)("li",{parentName:"ul"},"Jasmine: serves all"),(0,n.kt)("li",{parentName:"ul"},"Jest: serves all"))))),(0,n.kt)("li",{parentName:"ol"},"Integration Tests: ensures that the individual pieces of the application work together correctly (e.g. testing if app communicates correctly with a database or api)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"tools:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Mocha & Chai"),(0,n.kt)("li",{parentName:"ul"},"Sinon js:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"use for creating test doubles"),(0,n.kt)("li",{parentName:"ul"},"provides different functions for creating mocks, stubs, and other test doubles that allow effective integration tests"),(0,n.kt)("li",{parentName:"ul"},"help to verify how something works in isolation"))),(0,n.kt)("li",{parentName:"ul"},"Supertest: allows us to run integration tests on our node server without actually starting up the server",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"this is helpful because waiting for a server to start up can dramatically slow down our development"),(0,n.kt)("li",{parentName:"ul"},"it allows us to query our server and get results as if the server was actually running"))))))),(0,n.kt)("li",{parentName:"ol"},"End-to-End (E2E) Tests: ensure the entire app works as seen from the viewpoint of a user",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"tools: ",(0,n.kt)("a",{parentName:"li",href:"https://www.selenium.dev/documentation/en/"},"selenium"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer"},"puppeteer"),", ",(0,n.kt)("a",{parentName:"li",href:"https://www.cypress.io/"},"cypress"))))))}c.isMDXComponent=!0}}]);