"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[7429],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(a,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65339:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={},l="Internet Information Services",s={unversionedId:"Technologies/deployment/windows/iis",id:"Technologies/deployment/windows/iis",title:"Internet Information Services",description:"terminal commands",source:"@site/docs/Technologies/deployment/windows/iis.md",sourceDirName:"Technologies/deployment/windows",slug:"/Technologies/deployment/windows/iis",permalink:"/docs/Technologies/deployment/windows/iis",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/Technologies/deployment/windows/iis.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"readme",permalink:"/docs/Technologies/deployment/libraries/python/"},next:{title:"Github Actions",permalink:"/docs/Technologies/devops/CiCd/githubActions/"}},a={},c=[{value:"terminal commands",id:"terminal-commands",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"internet-information-services"},"Internet Information Services"),(0,i.kt)("h2",{id:"terminal-commands"},"terminal commands"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"stop services")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"iisreset/stop\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"start services")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"iisreset/start\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"reset services")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"iisreset\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"view existing configured sites")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd c:\\Windows\\System32\\inetsrv\nappcmd list site\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create new website (id starts from 1, must be unique)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'cd c:\\Windows\\System32\\inetsrv\nappcmd add site /name:"Default Web Site" /id:1 /physicalPath:C:\\production\\dispatcher\\website /bindings:http/*:81:websiteaddress.com\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"delete website")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'cd c:\\Windows\\System32\\inetsrv\nappcmd delete site "Default Web Site"\n')))}u.isMDXComponent=!0}}]);