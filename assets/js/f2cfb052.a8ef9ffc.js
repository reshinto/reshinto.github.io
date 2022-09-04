"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[47716],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>v});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(t),v=a,f=m["".concat(i,".").concat(v)]||m[v]||u[v]||o;return t?n.createElement(f,c(c({ref:r},l),{},{components:t})):n.createElement(f,c({ref:r},l))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var p=2;p<o;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},33646:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(83117),a=(t(67294),t(3905));const o={},c="Example 2",s={unversionedId:"interviewPrep/designPatterns/Structural_patterns/Decorator/javascript/example2",id:"interviewPrep/designPatterns/Structural_patterns/Decorator/javascript/example2",title:"Example 2",description:"",source:"@site/docs/interviewPrep/designPatterns/Structural_patterns/Decorator/javascript/example2.md",sourceDirName:"interviewPrep/designPatterns/Structural_patterns/Decorator/javascript",slug:"/interviewPrep/designPatterns/Structural_patterns/Decorator/javascript/example2",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Decorator/javascript/example2",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Structural_patterns/Decorator/javascript/example2.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JavaScript Example",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Decorator/javascript/"},next:{title:"how to run",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Decorator/javascript/realExample/"}},i={},p=[],l={toc:p};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"example-2"},"Example 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import axios from "axios";\n\nexport const CurrencyConverter = (fn) => async (qty, price, base, to) => {\n  const result = await fn(qty, price); // Call the original function\n  const currencyRate = await axios(\n    `https://free.currconv.com/api/v7/convert?q=${to.toUpperCase()}_${base.toUpperCase()}&compact=y&apiKey=84d74466e0748caf6de3`\n  );\n\n  return (\n    currencyRate.data[`${to.toUpperCase()}_${base.toUpperCase()}`]["val"] *\n    result\n  );\n};\n\nexport const CurrencyConverterDecorator = (base, to) => {\n  return function (target, name, descriptor) {\n    try {\n      const fn = descriptor.value; // The original function\n      descriptor.value = async (...args) => {\n        // Define the decorator\n        const result = await fn.call(this, ...args);\n        const currencyRate = await axios(\n          `https://free.currconv.com/api/v7/convert?q=${to.toUpperCase()}_${base.toUpperCase()}&compact=y&apiKey=84d74466e0748caf6de3`\n        );\n\n        return await (currencyRate.data[\n          `${to.toUpperCase()}_${base.toUpperCase()}`\n        ]["val"] * result);\n      };\n\n      return descriptor;\n    } catch (error) {\n      console.log(error);\n    }\n  };\n};\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import {\n  CurrencyConverter,\n  CurrencyConverterDecorator,\n} from "./CurrencyConverter";\n\nconst cost = (qty, price) => Promise.resolve(qty * price);\n\ncost(20, 5).then((result) => console.log(result));\n\n// with converter\nconst costPlus = CurrencyConverter(cost);\ncostPlus(20, 5, "SGD", "USD").then((result) => console.log(result));\n\nclass Cost {\n  @CurrencyConverterDecorator("INR", "USD")\n  compute(qty, price) {\n    return Promise.resolve(qty * price);\n  }\n}\n\nconst price = new Cost();\nprice.compute(20, 5).then((result) => console.log(result));\n')))}u.isMDXComponent=!0}}]);