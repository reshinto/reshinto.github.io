"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[3428],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),b=o,y=d["".concat(s,".").concat(b)]||d[b]||u[b]||c;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const c={},a="TypeScript Example",i={unversionedId:"interviewPrep/designPatterns/Structural_patterns/Proxy/typescript/readme",id:"interviewPrep/designPatterns/Structural_patterns/Proxy/typescript/readme",title:"TypeScript Example",description:"",source:"@site/docs/interviewPrep/designPatterns/Structural_patterns/Proxy/typescript/readme.md",sourceDirName:"interviewPrep/designPatterns/Structural_patterns/Proxy/typescript",slug:"/interviewPrep/designPatterns/Structural_patterns/Proxy/typescript/",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Proxy/typescript/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Structural_patterns/Proxy/typescript/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Example 2",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Proxy/swift/example2"},next:{title:"Dependency Inversion Principle",permalink:"/docs/interviewPrep/design_principles/SOLID/DependencyInversionPrinciple/"}},s={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"typescript-example"},"TypeScript Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'/**\n * Proxy Design Pattern\n *\n * Intent: Provide a surrogate or placeholder for another object to control\n * access to the original object or to add other responsibilities.\n */\n\n/**\n * The Subject interface declares common operations for both RealSubject and the\n * Proxy. As long as the client works with RealSubject using this interface,\n * you\'ll be able to pass it a proxy instead of a real subject.\n */\ninterface Subject {\n  request(): void;\n}\n\n/**\n * The RealSubject contains some core business logic. Usually, RealSubjects are\n * capable of doing some useful work which may also be very slow or sensitive -\n * e.g. correcting input data. A Proxy can solve these issues without any\n * changes to the RealSubject\'s code.\n */\nclass RealSubject implements Subject {\n  public request(): void {\n    console.log("RealSubject: Handling request.");\n  }\n}\n\n/**\n * The Proxy has an interface identical to the RealSubject.\n */\nclass Proxy implements Subject {\n  private realSubject: RealSubject;\n\n  /**\n   * The Proxy maintains a reference to an object of the RealSubject class. It\n   * can be either lazy-loaded or passed to the Proxy by the client.\n   */\n  constructor(realSubject: RealSubject) {\n    this.realSubject = realSubject;\n  }\n\n  /**\n   * The most common applications of the Proxy pattern are lazy loading,\n   * caching, controlling the access, logging, etc. A Proxy can perform one of\n   * these things and then, depending on the result, pass the execution to the\n   * same method in a linked RealSubject object.\n   */\n  public request(): void {\n    if (this.checkAccess()) {\n      this.realSubject.request();\n      this.logAccess();\n    }\n  }\n\n  private checkAccess(): boolean {\n    // Some real checks should go here.\n    console.log("Proxy: Checking access prior to firing a real request.");\n\n    return true;\n  }\n\n  private logAccess(): void {\n    console.log("Proxy: Logging the time of request.");\n  }\n}\n\n/**\n * The client code is supposed to work with all objects (both subjects and\n * proxies) via the Subject interface in order to support both real subjects and\n * proxies. In real life, however, clients mostly work with their real subjects\n * directly. In this case, to implement the pattern more easily, you can extend\n * your proxy from the real subject\'s class.\n */\nfunction clientCode(subject: Subject) {\n  // ...\n\n  subject.request();\n\n  // ...\n}\n\nconsole.log("Client: Executing the client code with a real subject:");\nconst realSubject = new RealSubject();\nclientCode(realSubject);\n\nconsole.log("");\n\nconsole.log("Client: Executing the same client code with a proxy:");\nconst proxy = new Proxy(realSubject);\nclientCode(proxy);\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Client: Executing the client code with a real subject:\nRealSubject: Handling request.\n\nClient: Executing the same client code with a proxy:\nProxy: Checking access prior to firing a real request.\nRealSubject: Handling request.\nProxy: Logging the time of request.\n")))}u.isMDXComponent=!0}}]);