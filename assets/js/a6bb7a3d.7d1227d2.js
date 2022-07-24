"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[4830],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),c=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,y=d["".concat(a,".").concat(m)]||d[m]||s[m]||l;return n?o.createElement(y,i(i({ref:t},u),{},{components:n})):o.createElement(y,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<l;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var o=n(83117),r=(n(67294),n(3905));const l={},i=void 0,p={unversionedId:"Technologies/deployment/libraries/python/readme",id:"Technologies/deployment/libraries/python/readme",title:"readme",description:"Publish to pypi",source:"@site/docs/Technologies/deployment/libraries/python/readme.md",sourceDirName:"Technologies/deployment/libraries/python",slug:"/Technologies/deployment/libraries/python/",permalink:"/docs/Technologies/deployment/libraries/python/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/Technologies/deployment/libraries/python/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"herokuCheatsheet",permalink:"/docs/Technologies/deployment/heroku/herokuCheatsheet"},next:{title:"Internet Information Services",permalink:"/docs/Technologies/deployment/windows/iis"}},a={},c=[{value:"Publish to pypi",id:"publish-to-pypi",level:2},{value:"Install tools for publishing",id:"install-tools-for-publishing",level:3},{value:"Build and compile python package",id:"build-and-compile-python-package",level:3},{value:"Deploy to pypi",id:"deploy-to-pypi",level:3}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"publish-to-pypi"},"Publish to pypi"),(0,r.kt)("h3",{id:"install-tools-for-publishing"},"Install tools for publishing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install build",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"python -m pip install --upgrade build"))),(0,r.kt)("li",{parentName:"ul"},"Install twine",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"python -m pip install --upgrade twine")))),(0,r.kt)("h3",{id:"build-and-compile-python-package"},"Build and compile python package"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"make sure to delete existing ",(0,r.kt)("inlineCode",{parentName:"li"},"dist/")," folders before building",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"python -m build")))),(0,r.kt)("h3",{id:"deploy-to-pypi"},"Deploy to pypi"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"twine upload dist/","*")))}s.isMDXComponent=!0}}]);