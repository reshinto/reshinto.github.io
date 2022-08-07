"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[16711],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),m=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=m(e.components);return o.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=m(t),d=r,u=f["".concat(l,".").concat(d)]||f[d]||c[d]||i;return t?o.createElement(u,a(a({ref:n},p),{},{components:t})):o.createElement(u,a({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var m=2;m<i;m++)a[m]=t[m];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},14898:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var o=t(83117),r=(t(67294),t(3905));const i={},a="Example 2",s={unversionedId:"interviewPrep/designPatterns/Behavioral_patterns/Command/typescript/example2",id:"interviewPrep/designPatterns/Behavioral_patterns/Command/typescript/example2",title:"Example 2",description:"",source:"@site/docs/interviewPrep/designPatterns/Behavioral_patterns/Command/typescript/example2.md",sourceDirName:"interviewPrep/designPatterns/Behavioral_patterns/Command/typescript",slug:"/interviewPrep/designPatterns/Behavioral_patterns/Command/typescript/example2",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Command/typescript/example2",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Behavioral_patterns/Command/typescript/example2.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TypeScript Example",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Command/typescript/"},next:{title:"Interpreter",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Interpreter/"}},l={},m=[],p={toc:m};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"example-2"},"Example 2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export default interface Command {\n  execute(): any;\n  undo(): any;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import Command from "./CommandInterface";\n\nexport default class RemoteController {\n  onCommand: Command;\n  offCommand: Command;\n\n  setCommand(onCommand, offCommand) {\n    this.onCommand = onCommand;\n    this.offCommand = offCommand;\n  }\n\n  clickOnButton() {\n    this.onCommand.execute();\n  }\n\n  clickOffButton() {\n    this.offCommand.execute();\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export default class Television {\n  state: boolean = false;\n\n  on() {\n    this.state = true;\n  }\n\n  off() {\n    this.state = false;\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import Television from "./TelevisionReceiver";\nimport Command from "./CommandInterface";\n\nexport default class TelevisionOnCommand implements Command {\n  television: Television;\n\n  constructor(television: Television) {\n    this.television = television;\n  }\n\n  execute() {\n    this.television.on();\n  }\n\n  undo() {\n    this.television.off();\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import Television from "./TelevisionReceiver";\nimport Command from "./CommandInterface";\n\nexport default class TelevisionOffCommand implements Command {\n  television: Television;\n\n  constructor(television: Television) {\n    this.television = television;\n  }\n\n  execute() {\n    this.television.off();\n  }\n\n  undo() {\n    this.television.on();\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import Television from "./TelevisionReceiver";\nimport TelevisionOnCommand from "./TelevisionOnCommand";\nimport TelevisionOffCommand from "./TelevisionOffCommand";\nimport RemoteController from "./RemoteControllerInvoker";\n\nconst television = new Television();\nconst televisionOnCommand = new TelevisionOnCommand(television);\nconst televisionOffCommand = new TelevisionOffCommand(television);\nconst remote = new RemoteController();\n\nremote.setCommand(televisionOnCommand, televisionOffCommand);\n\nconsole.log("state of television before remote is used:", television.state);\nremote.clickOnButton();\nconsole.log(\n  "state of television after remote is used with on click:",\n  television.state\n);\nremote.clickOffButton();\nconsole.log(\n  "state of television after remote is used with off click:",\n  television.state\n);\n')))}c.isMDXComponent=!0}}]);