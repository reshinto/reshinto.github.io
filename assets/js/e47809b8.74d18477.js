"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[1990],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(83117),a=(n(67294),n(3905));const o={},i="ASP.NET CORE terminal guide",l={unversionedId:"Technologies/fullstack/aspDotNetCore_SDK",id:"Technologies/fullstack/aspDotNetCore_SDK",title:"ASP.NET CORE terminal guide",description:"Create a new webapi",source:"@site/docs/Technologies/fullstack/aspDotNetCore_SDK.md",sourceDirName:"Technologies/fullstack",slug:"/Technologies/fullstack/aspDotNetCore_SDK",permalink:"/docs/Technologies/fullstack/aspDotNetCore_SDK",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/Technologies/fullstack/aspDotNetCore_SDK.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Webpack Tutorial",permalink:"/docs/Technologies/frontend/webpack_tutorial"},next:{title:"Machine Learning Basics",permalink:"/docs/Technologies/machine_learning/"}},c={},p=[{value:"Create a new webapi",id:"create-a-new-webapi",level:2},{value:"Run project",id:"run-project",level:2},{value:"Run project with auto update",id:"run-project-with-auto-update",level:2},{value:"Connect and Manage database",id:"connect-and-manage-database",level:2},{value:"Apply Migration",id:"apply-migration",level:2}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aspnet-core-terminal-guide"},"ASP.NET CORE terminal guide"),(0,a.kt)("h2",{id:"create-a-new-webapi"},"Create a new webapi"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"dotnet new webapi -n appName.API")),(0,a.kt)("h2",{id:"run-project"},"Run project"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"dotnet run")),(0,a.kt)("h2",{id:"run-project-with-auto-update"},"Run project with auto update"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"dotnet watch run")),(0,a.kt)("h2",{id:"connect-and-manage-database"},"Connect and Manage database"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'requires installation of "dotnet-ef"',(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"dotnet tool install --global dotnet-ef"))),(0,a.kt)("li",{parentName:"ul"},"view help",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"dotnet ef -h"))),(0,a.kt)("li",{parentName:"ul"},"add migration",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"requires installation of nuget packages, install via nuget in project\n",(0,a.kt)("em",{parentName:"li"},' "Microsoft.EntityFrameworkCore"\n'),' "Microsoft.EntityFrameworkCore.Design" ',"*",' "Microsoft.EntityFrameworkCore.NameOfSqlDatabase" -> eg "Microsoft.EntityFrameworkCore.Sqlite"',(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"dotnet ef migrations add MigrationName"))))),(0,a.kt)("li",{parentName:"ul"},"remove migration",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"dotnet ef migrations remove MigrationName")))),(0,a.kt)("h2",{id:"apply-migration"},"Apply Migration"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"dotnet ef database update")))}s.isMDXComponent=!0}}]);