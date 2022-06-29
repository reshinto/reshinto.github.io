"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[1254],{3905:(e,o,r)=>{r.d(o,{Zo:()=>d,kt:()=>m});var t=r(7294);function n(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function c(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?c(Object(r),!0).forEach((function(o){n(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function a(e,o){if(null==e)return{};var r,t,n=function(e,o){if(null==e)return{};var r,t,n={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],o.indexOf(r)>=0||(n[r]=e[r]);return n}(e,o);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=t.createContext({}),l=function(e){var o=t.useContext(s),r=o;return e&&(r="function"==typeof e?e(o):p(p({},o),e)),r},d=function(e){var o=l(e.components);return t.createElement(s.Provider,{value:o},e.children)},i={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},u=t.forwardRef((function(e,o){var r=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,k=u["".concat(s,".").concat(m)]||u[m]||i[m]||c;return r?t.createElement(k,p(p({ref:o},d),{},{components:r})):t.createElement(k,p({ref:o},d))}));function m(e,o){var r=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var c=r.length,p=new Array(c);p[0]=u;var a={};for(var s in o)hasOwnProperty.call(o,s)&&(a[s]=o[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,p[1]=a;for(var l=2;l<c;l++)p[l]=r[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7977:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>s,contentTitle:()=>p,default:()=>i,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var t=r(7462),n=(r(7294),r(3905));const c={},p="Docker Compose",a={unversionedId:"devops/docker/dockercompose",id:"devops/docker/dockercompose",title:"Docker Compose",description:"run docker compose",source:"@site/docs/devops/docker/dockercompose.md",sourceDirName:"devops/docker",slug:"/devops/docker/dockercompose",permalink:"/docs/devops/docker/dockercompose",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/devops/docker/dockercompose.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create local ubuntu server to be used on vscode",permalink:"/docs/devops/docker/createLocalServer"},next:{title:"Kubernetes (K8s, Hubernetes)",permalink:"/docs/devops/kubernetes/"}},s={},l=[{value:"run docker compose",id:"run-docker-compose",level:2},{value:"stop docker compose",id:"stop-docker-compose",level:2}],d={toc:l};function i(e){let{components:o,...r}=e;return(0,n.kt)("wrapper",(0,t.Z)({},d,r,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"docker-compose"},"Docker Compose"),(0,n.kt)("h2",{id:"run-docker-compose"},"run docker compose"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker-compose up\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"run docker compose in detach mode",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"docker-compose up -d\n"))),(0,n.kt)("li",{parentName:"ul"},"run custom docker compose file",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"docker-compose -f my-docker-compose-file.yml up\n")))),(0,n.kt)("h2",{id:"stop-docker-compose"},"stop docker compose"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker-compose down\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"stop custom docker compose file",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"docker-compose -f my-docker-compose-file.yml down\n")))))}i.isMDXComponent=!0}}]);