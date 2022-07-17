"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[9130],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),m=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=m(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=m(t),d=a,f=u["".concat(p,".").concat(d)]||u[d]||s[d]||o;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var m=2;m<o;m++)i[m]=t[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},27683:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var r=t(87462),a=(t(67294),t(3905));const o={},i="Go Example",c={unversionedId:"interviewPrep/designPatterns/Behavioral_patterns/Command/go/readme",id:"interviewPrep/designPatterns/Behavioral_patterns/Command/go/readme",title:"Go Example",description:"",source:"@site/docs/interviewPrep/designPatterns/Behavioral_patterns/Command/go/readme.md",sourceDirName:"interviewPrep/designPatterns/Behavioral_patterns/Command/go",slug:"/interviewPrep/designPatterns/Behavioral_patterns/Command/go/",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Command/go/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Behavioral_patterns/Command/go/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"C# Example",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Command/cSharp/"},next:{title:"Java Example",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Command/java/"}},p={},m=[],l={toc:m};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"go-example"},"Go Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"package main\n\ntype button struct {\n    command command\n}\n\nfunc (b *button) press() {\n    b.command.execute()\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"package main\n\ntype command interface {\n    execute()\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"package main\n\ntype device interface {\n    on()\n    off()\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"package main\n\ntype offCommand struct {\n    device device\n}\n\nfunc (c *offCommand) execute() {\n    c.device.off()\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"package main\n\ntype onCommand struct {\n    device device\n}\n\nfunc (c *onCommand) execute() {\n    c.device.on()\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\ntype tv struct {\n    isRunning bool\n}\n\nfunc (t *tv) on() {\n    t.isRunning = true\n    fmt.Println("Turning tv on")\n}\n\nfunc (t *tv) off() {\n    t.isRunning = false\n    fmt.Println("Turning tv off")\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"package main\n\nfunc main() {\n    tv := &tv{}\n\n    onCommand := &onCommand{\n        device: tv,\n    }\n\n    offCommand := &offCommand{\n        device: tv,\n    }\n\n    onButton := &button{\n        command: onCommand,\n    }\n    onButton.press()\n\n    offButton := &button{\n        command: offCommand,\n    }\n    offButton.press()\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Turning tv on\nTurning tv off\n")))}s.isMDXComponent=!0}}]);