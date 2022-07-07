"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[8538],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>s});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),s=a,d=m["".concat(p,".").concat(s)]||m[s]||k[s]||n;return r?o.createElement(d,l(l({ref:t},u),{},{components:r})):o.createElement(d,l({ref:t},u))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<n;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},75576:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var o=r(87462),a=(r(67294),r(3905));const n={},l="Works only if react app is created using create-react-app",i={unversionedId:"deployment/heroku/deployReactTutorial",id:"deployment/heroku/deployReactTutorial",title:"Works only if react app is created using create-react-app",description:"1. Setup .gitignore file",source:"@site/docs/deployment/heroku/deployReactTutorial.md",sourceDirName:"deployment/heroku",slug:"/deployment/heroku/deployReactTutorial",permalink:"/docs/deployment/heroku/deployReactTutorial",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/deployment/heroku/deployReactTutorial.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"deployDjangoTutorial",permalink:"/docs/deployment/heroku/deployDjangoTutorial"},next:{title:"herokuCheatsheet",permalink:"/docs/deployment/heroku/herokuCheatsheet"}},p={},c=[],u={toc:c};function k(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"works-only-if-react-app-is-created-using-create-react-app"},"Works only if react app is created using create-react-app"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Setup .gitignore file"),(0,a.kt)("li",{parentName:"ol"},"Ensure either package-lock.json or yarn.lock is deleted, only can have 1"),(0,a.kt)("li",{parentName:"ol"},"Init with git, ignore if already done",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"git init"))),(0,a.kt)("li",{parentName:"ol"},"Add and commit",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},'git add . && git commit -m "initial commit"'))),(0,a.kt)("li",{parentName:"ol"},"Login to Heroku",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"heroku login"))),(0,a.kt)("li",{parentName:"ol"},"Create heroku project with buildpack (project name will be the url)",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"heroku create project_name -b ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mars/create-react-app-buildpack.git"},"https://github.com/mars/create-react-app-buildpack.git")),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"url will be ",(0,a.kt)("a",{parentName:"li",href:"https://project_name.herokuapp.com"},"https://project_name.herokuapp.com")),(0,a.kt)("li",{parentName:"ul"},"if project_name is not given, random name will be given")))),(0,a.kt)("li",{parentName:"ol"},"Set heroku environment variables",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"view all configs",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"heroku config"))),(0,a.kt)("li",{parentName:"ul"},"set environment variable if required",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"heroku config:set MY_KEY=KEY_VALUE"))))),(0,a.kt)("li",{parentName:"ol"},"Push to heroku",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"git push heroku master"))),(0,a.kt)("li",{parentName:"ol"},"Open website",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"heroku open"))),(0,a.kt)("li",{parentName:"ol"},"Check releases for version to rollback if required",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"heroku releases"))),(0,a.kt)("li",{parentName:"ol"},"Rollback if neccessary",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"heroku rollback vxxx"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"example\nheroku rollback v2"))))))}k.isMDXComponent=!0}}]);