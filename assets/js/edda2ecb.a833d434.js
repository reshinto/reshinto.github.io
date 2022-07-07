"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[5527],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=c(n),m=i,g=f["".concat(p,".").concat(m)]||f[m]||s[m]||a;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},97776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={},l="Handling PIP",o={unversionedId:"languageSpecific/python/pip",id:"languageSpecific/python/pip",title:"Handling PIP",description:"Create requirements file",source:"@site/docs/languageSpecific/python/pip.md",sourceDirName:"languageSpecific/python",slug:"/languageSpecific/python/pip",permalink:"/docs/languageSpecific/python/pip",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/languageSpecific/python/pip.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/docs/languageSpecific/python/"},next:{title:"Python Virtual Environment",permalink:"/docs/languageSpecific/python/virtualEnv"}},p={},c=[{value:"Create requirements file",id:"create-requirements-file",level:2},{value:"Uninstall packages installed from requirements.txt",id:"uninstall-packages-installed-from-requirementstxt",level:2},{value:"Uninstall all packages without any reference",id:"uninstall-all-packages-without-any-reference",level:2}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"handling-pip"},"Handling PIP"),(0,i.kt)("h2",{id:"create-requirements-file"},"Create requirements file"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"pip freeze > requirements.txt")),(0,i.kt)("h2",{id:"uninstall-packages-installed-from-requirementstxt"},"Uninstall packages installed from requirements.txt"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"pip uninstall -r requirements.txt -y")),(0,i.kt)("h2",{id:"uninstall-all-packages-without-any-reference"},"Uninstall all packages without any reference"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"pip uninstall -y -r <(pip freeze)")))}s.isMDXComponent=!0}}]);