"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[16984],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,d=u["".concat(i,".").concat(h)]||u[h]||m[h]||s;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},39247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=n(83117),o=(n(67294),n(3905));const s={},a="Mac Example",c={unversionedId:"Technologies/others/tox/mac/readme",id:"Technologies/others/tox/mac/readme",title:"Mac Example",description:"",source:"@site/docs/Technologies/others/tox/mac/readme.md",sourceDirName:"Technologies/others/tox/mac",slug:"/Technologies/others/tox/mac/",permalink:"/docs/Technologies/others/tox/mac/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/Technologies/others/tox/mac/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SSH Guide",permalink:"/docs/Technologies/others/setupSSH"},next:{title:"Windows Example",permalink:"/docs/Technologies/others/tox/windows/"}},i={},l=[],p={toc:l};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mac-example"},"Mac Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[tox]\nenvlist = default\nisolated_build = True\n\n[testenv]\ndeps =\n    -rrequirements.txt\n    -rtest-requirements.txt\ninstall_command = pip install {opts} {packages}\nwhitelist_externals =\n    sh\ncommands =\n    sh -c "cat .env.example > .env"\n    sh -c "pre-commit install -f --hook-type pre-commit"\n    sh -c "pre-commit install --hook-type commit-msg"\n    sh -c "cat ./.hooks/pre-commit > .git/hooks/pre-commit"\n    sh -c "cat ./.hooks/commit-msg > .git/hooks/commit-msg"\n\n[testenv:run]\nskip_install = true\ncommands =\n    uvicorn src.map:app --reload --header server:app-api --port 8080\n\n[testenv:test]\nskip_install = true\nwhitelist_externals =\n    sh\ncommands =\n    sh -c "pylint app --exit-zero"\n    sh -c "pytest"\n    sh -c "coverage report"\n\n[testenv:test-all]\nskip_install = true\nwhitelist_externals =\n    sh\ncommands =\n    sh -c "pylint app --exit-zero"\n    sh -c "pytest"\n    sh -c "./postman/run-api-tests.sh $0 $1 $2" {posargs}\n    sh -c "coverage report"\n')))}m.isMDXComponent=!0}}]);