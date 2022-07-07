"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[2531],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(b,l(l({ref:t},c),{},{components:n})):a.createElement(b,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={},l="Django database setting",i={unversionedId:"database/SQL/djangoDatabaseSettings",id:"database/SQL/djangoDatabaseSettings",title:"Django database setting",description:"Default sqlite3",source:"@site/docs/database/SQL/djangoDatabaseSettings.md",sourceDirName:"database/SQL",slug:"/database/SQL/djangoDatabaseSettings",permalink:"/docs/database/SQL/djangoDatabaseSettings",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/database/SQL/djangoDatabaseSettings.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Threads",permalink:"/docs/basics/threads"},next:{title:"Entity Framework",permalink:"/docs/database/SQL/entityFramework"}},s={},p=[{value:"Default sqlite3",id:"default-sqlite3",level:2},{value:"MySQL",id:"mysql",level:2},{value:"PostgreSQL",id:"postgresql",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"django-database-setting"},"Django database setting"),(0,r.kt)("h2",{id:"default-sqlite3"},"Default sqlite3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DATABASES = {\n    'default': {\n        'ENGINE': 'django.db.backends.sqlite3',\n        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),\n    }\n}\n")),(0,r.kt)("h2",{id:"mysql"},"MySQL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"pip install mysql-connector-python")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'DATABASES = {\n    \'default\': {\n        \'ENGINE\': \'mysql.connector.django\',\n        \'NAME\': "trading_platform",\n        "USER": "springfield",\n        "PASSWORD": os.environ.get("mysqlme_password"),\n        "HOST": "localhost",\n        \'OPTIONS\': {\n            \'autocommit\': True,\n        },\n    }\n}\n')),(0,r.kt)("h2",{id:"postgresql"},"PostgreSQL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"pip install psycopg2-binary"),(0,r.kt)("li",{parentName:"ul"},"pip install dj-database-url",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"import to settings.py",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"import dj_database_url")))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DATABASES = {'default': dj_database_url.config(\n    conn_max_age=600, ssl_require=True)}\n")))}u.isMDXComponent=!0}}]);