"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[9043],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),g=s(n),m=a,d=g["".concat(c,".").concat(m)]||g[m]||u[m]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},i="Go Example",p={unversionedId:"interviewPrep/designPatterns/Structural_patterns/Decorator/go/readme",id:"interviewPrep/designPatterns/Structural_patterns/Decorator/go/readme",title:"Go Example",description:"",source:"@site/docs/interviewPrep/designPatterns/Structural_patterns/Decorator/go/readme.md",sourceDirName:"interviewPrep/designPatterns/Structural_patterns/Decorator/go",slug:"/interviewPrep/designPatterns/Structural_patterns/Decorator/go/",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Decorator/go/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Structural_patterns/Decorator/go/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"C# Example",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Decorator/cSharp/"},next:{title:"Java Example",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Decorator/java/"}},c={},s=[],l={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"go-example"},"Go Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"package main\n\ntype cheeseTopping struct {\n    pizza pizza\n}\n\nfunc (c *cheeseTopping) getPrice() int {\n    pizzaPrice := c.pizza.getPrice()\n    return pizzaPrice + 10\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"package main\n\ntype pizza interface {\n    getPrice() int\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"package main\n\ntype tomatoTopping struct {\n    pizza pizza\n}\n\nfunc (c *tomatoTopping) getPrice() int {\n    pizzaPrice := c.pizza.getPrice()\n    return pizzaPrice + 7\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"package main\n\ntype veggeMania struct {\n}\n\nfunc (p *veggeMania) getPrice() int {\n    return 15\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc main() {\n\n    pizza := &veggeMania{}\n\n    //Add cheese topping\n    pizzaWithCheese := &cheeseTopping{\n        pizza: pizza,\n    }\n\n    //Add tomato topping\n    pizzaWithCheeseAndTomato := &tomatoTopping{\n        pizza: pizzaWithCheese,\n    }\n\n    fmt.Printf("Price of veggeMania with tomato and cheese topping is %d\\n", pizzaWithCheeseAndTomato.getPrice())\n}\n')))}u.isMDXComponent=!0}}]);