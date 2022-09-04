"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[19849],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(n),u=a,d=f["".concat(l,".").concat(u)]||f[u]||m[u]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},12685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(83117),a=(n(67294),n(3905));const o={},i="Example 2",c={unversionedId:"interviewPrep/designPatterns/Structural_patterns/Bridge/typescript/example2",id:"interviewPrep/designPatterns/Structural_patterns/Bridge/typescript/example2",title:"Example 2",description:"",source:"@site/docs/interviewPrep/designPatterns/Structural_patterns/Bridge/typescript/example2.md",sourceDirName:"interviewPrep/designPatterns/Structural_patterns/Bridge/typescript",slug:"/interviewPrep/designPatterns/Structural_patterns/Bridge/typescript/example2",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Bridge/typescript/example2",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Structural_patterns/Bridge/typescript/example2.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TypeScript Example",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Bridge/typescript/"},next:{title:"Composite",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Composite/"}},l={},s=[],p={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"example-2"},"Example 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Bridge Implementation\n// Define an interface for the Implementation\n\n/**\n * The Implementation defines the interface for all implementation classes. It\n * doesn't have to match the Abstraction's interface. In fact, the two\n * interfaces can be entirely different. Typically the Implementation interface\n * provides only primitive operations, while the Abstraction defines higher-\n * level operations based on those primitives.\n */\nexport default interface ColorInterface {\n  log(): string;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import ColorInterface from "./ColorInterface";\n\n// Create a Concrete Implementation\n\n/**\n * Each Concrete Implementation corresponds to a specific platform and\n * implements the Implementation interface using that platform\'s API.\n */\nexport default class BlueConcreteImplementation implements ColorInterface {\n  log() {\n    return "blue";\n  }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import ColorInterface from "./ColorInterface";\n\n// Create a Concrete Implementation\n\n/**\n * Each Concrete Implementation corresponds to a specific platform and\n * implements the Implementation interface using that platform\'s API.\n */\nexport default class RedConcreteImplementation implements ColorInterface {\n  log() {\n    return "red";\n  }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// Bridge Abstraction\nimport ColorInterface from "./ColorInterface";\n\n// Define an abstract class for the Abstraction\n/**\n * The Abstraction defines the interface for the "control" part of the two class\n * hierarchies. It maintains a reference to an object of the Implementation\n * hierarchy and delegates all of the real work to this object.\n */\nexport default abstract class ShapeAbstract {\n  color: ColorInterface;\n\n  constructor(color: ColorInterface) {\n    this.color = color;\n  }\n\n  logMe() {\n    console.log(`I am a ${this.color.log()} shape.`);\n  }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import ShapeAbstract from "./ShapeAbstract";\nimport ColorInterface from "./ColorInterface";\n\n// You can extend the Abstraction without changing the Implementation classes\nexport default class TriangleAbstraction extends ShapeAbstract {\n  constructor(color: ColorInterface) {\n    super(color);\n  }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import ShapeAbstract from "./ShapeAbstract";\nimport ColorInterface from "./ColorInterface";\n\n// You can extend the Abstraction without changing the Implementation classes\nexport default class CircleRefinedAbstraction extends ShapeAbstract {\n  constructor(color: ColorInterface) {\n    super(color);\n  }\n\n  // Create a refined Abstraction that behaves slightly differently\n  logMe() {\n    console.log(`I am a ${this.color.log()} circle.`);\n  }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import CircleRefinedAbstraction from "./CircleRefinedAbstraction";\nimport TriangleAbstraction from "./TriangleAbstraction";\nimport RedConcreteImplementation from "./RedConcreteImplementation";\nimport BlueConcreteImplementation from "./BlueConcreteImplementation";\n\n// Bridge pattern is to link the abstraction and implementation which had been separated\n// Instantiate the circle with a concrete implementation\n\n/**\n * The client code should be able to work with any pre-configured abstraction-\n * implementation combination.\n */\nconst circle = new CircleRefinedAbstraction(new RedConcreteImplementation());\nconst triangle = new TriangleAbstraction(new BlueConcreteImplementation());\n\ncircle.logMe(); // Output: I am a red circle.\n\ntriangle.logMe(); // Output: I am a blue shape.\n')))}m.isMDXComponent=!0}}]);