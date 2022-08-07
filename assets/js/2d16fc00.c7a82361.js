"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[60552],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>f});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),l=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=l(e.components);return t.createElement(i.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(i,".").concat(f)]||d[f]||s[f]||o;return n?t.createElement(m,c(c({ref:r},u),{},{components:n})):t.createElement(m,c({ref:r},u))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var l=2;l<o;l++)c[l]=n[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94641:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var t=n(83117),a=(n(67294),n(3905));const o={},c="Run Java Apps In Docker",p={unversionedId:"languageSpecific/java/runJavaAppsInDocker/readme",id:"languageSpecific/java/runJavaAppsInDocker/readme",title:"Run Java Apps In Docker",description:"",source:"@site/docs/languageSpecific/java/runJavaAppsInDocker/readme.md",sourceDirName:"languageSpecific/java/runJavaAppsInDocker",slug:"/languageSpecific/java/runJavaAppsInDocker/",permalink:"/docs/languageSpecific/java/runJavaAppsInDocker/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/languageSpecific/java/runJavaAppsInDocker/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Parallel, Concurrent and Multithreading",permalink:"/docs/languageSpecific/java/parallelConcurrentMultithreading"},next:{title:"NodeJS",permalink:"/docs/languageSpecific/javascript/nodejs"}},i={},l=[],u={toc:l};function s(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"run-java-apps-in-docker"},"Run Java Apps In Docker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-docker"},"FROM openjdk\n\n# using maven example\nCOPY target/helloworld-1.0-SNAPSHOT.jar /deployments/\n\n# method 1\nCMD java -cp /deployments/helloworld-1.0-SNAPSHOT.jar com.dockerapp.App\n\n# method 2: requires maven-jar-plugin to run\n# CMD java -jar /deployments/helloworld-1.0-SNAPSHOT.jar\n")))}s.isMDXComponent=!0}}]);