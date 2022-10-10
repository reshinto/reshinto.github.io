"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[51477],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,g=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(g,o(o({ref:t},l),{},{components:n})):r.createElement(g,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32601:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(83117),a=(n(67294),n(3905));const i={},o="TypeScript Example",p={unversionedId:"interviewPrep/designPatterns/Structural_patterns/Adapter/typescript/readme",id:"interviewPrep/designPatterns/Structural_patterns/Adapter/typescript/readme",title:"TypeScript Example",description:"",source:"@site/docs/interviewPrep/designPatterns/Structural_patterns/Adapter/typescript/readme.md",sourceDirName:"interviewPrep/designPatterns/Structural_patterns/Adapter/typescript",slug:"/interviewPrep/designPatterns/Structural_patterns/Adapter/typescript/",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Adapter/typescript/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Structural_patterns/Adapter/typescript/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Example 2",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Adapter/swift/example2"},next:{title:"Bridge",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Bridge/"}},s={},c=[],l={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"typescript-example"},"TypeScript Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'/**\n * Adapter Design Pattern\n *\n * Intent: Provides a unified interface that allows objects with incompatible\n * interfaces to collaborate.\n */\n\n/**\n * The Target defines the domain-specific interface used by the client code.\n */\nclass Target {\n  public request(): string {\n    return "Target: The default target\'s behavior.";\n  }\n}\n\n/**\n * The Adaptee contains some useful behavior, but its interface is incompatible\n * with the existing client code. The Adaptee needs some adaptation before the\n * client code can use it.\n */\nclass Adaptee {\n  public specificRequest(): string {\n    return ".eetpadA eht fo roivaheb laicepS";\n  }\n}\n\n/**\n * The Adapter makes the Adaptee\'s interface compatible with the Target\'s\n * interface.\n */\nclass Adapter extends Target {\n  private adaptee: Adaptee;\n\n  constructor(adaptee: Adaptee) {\n    super();\n    this.adaptee = adaptee;\n  }\n\n  public request(): string {\n    const result = this.adaptee.specificRequest().split("").reverse().join("");\n    return `Adapter: (TRANSLATED) ${result}`;\n  }\n}\n\n/**\n * The client code supports all classes that follow the Target interface.\n */\nfunction clientCode(target: Target) {\n  console.log(target.request());\n}\n\nconsole.log("Client: I can work just fine with the Target objects:");\nconst target = new Target();\nclientCode(target);\n\nconsole.log("");\n\nconst adaptee = new Adaptee();\nconsole.log(\n  "Client: The Adaptee class has a weird interface. See, I don\'t understand it:"\n);\nconsole.log(`Adaptee: ${adaptee.specificRequest()}`);\n\nconsole.log("");\n\nconsole.log("Client: But I can work with it via the Adapter:");\nconst adapter = new Adapter(adaptee);\nclientCode(adapter);\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Client: I can work just fine with the Target objects:\nTarget: The default target's behavior.\n\nClient: The Adaptee class has a weird interface. See, I don't understand it:\nAdaptee: .eetpadA eht fo roivaheb laicepS\n\nClient: But I can work with it via the Adapter:\nAdapter: (TRANSLATED) Special behavior of the Adaptee.\n")))}d.isMDXComponent=!0}}]);