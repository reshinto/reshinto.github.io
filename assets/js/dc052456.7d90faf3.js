"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[3723],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},79417:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const a={},i="Forward Proxy example",l={unversionedId:"interviewPrep/system_design/09Proxies/forwardProxyExample/readme",id:"interviewPrep/system_design/09Proxies/forwardProxyExample/readme",title:"Forward Proxy example",description:"how to setup",source:"@site/docs/interviewPrep/system_design/09Proxies/forwardProxyExample/readme.md",sourceDirName:"interviewPrep/system_design/09Proxies/forwardProxyExample",slug:"/interviewPrep/system_design/09Proxies/forwardProxyExample/",permalink:"/docs/interviewPrep/system_design/09Proxies/forwardProxyExample/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/system_design/09Proxies/forwardProxyExample/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Proxies",permalink:"/docs/interviewPrep/system_design/09Proxies/"},next:{title:"Load Balancers",permalink:"/docs/interviewPrep/system_design/10LoadBalancers/"}},s={},p=[{value:"how to setup",id:"how-to-setup",level:2}],c={toc:p};function m(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"forward-proxy-example"},"Forward Proxy example"),(0,o.kt)("h2",{id:"how-to-setup"},"how to setup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"install dependecies",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"npm install"))),(0,o.kt)("li",{parentName:"ol"},"install nginx if it has not been installed",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"brew install nginx"))),(0,o.kt)("li",{parentName:"ol"},"modify nginx.conf file",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"backup file before making changes"),(0,o.kt)("li",{parentName:"ul"},"location of nginx.conf file for mac is at"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/usr/local/etc/nginx")))),(0,o.kt)("li",{parentName:"ol"},"run nginx",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"brew services start nginx"))),(0,o.kt)("li",{parentName:"ol"},"run server",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"node server.js"))),(0,o.kt)("li",{parentName:"ol"},"send request ",(0,o.kt)("inlineCode",{parentName:"li"},"curl localhost:3001/hello")," for client to server"),(0,o.kt)("li",{parentName:"ol"},"send request ",(0,o.kt)("inlineCode",{parentName:"li"},"curl localhost:8081/hello")," for client to proxy to server")))}m.isMDXComponent=!0}}]);