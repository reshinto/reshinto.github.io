"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[4528],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return a?r.createElement(h,l(l({ref:t},d),{},{components:a})):r.createElement(h,l({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6322:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={},l="Indexes",o={unversionedId:"interviewPrep/system_design/indexes",id:"interviewPrep/system_design/indexes",title:"Indexes",description:"- Sooner or later there comes a time when database performance is no longer satisfactory",source:"@site/docs/interviewPrep/system_design/indexes.md",sourceDirName:"interviewPrep/system_design",slug:"/interviewPrep/system_design/indexes",permalink:"/docs/interviewPrep/system_design/indexes",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/system_design/indexes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Distributed System Characteristics",permalink:"/docs/interviewPrep/system_design/distributed_systems_key_characteristics"},next:{title:"Long-Polling vs WebSockets vs Server-Sent Events",permalink:"/docs/interviewPrep/system_design/long-polling_vs_websockets_vs_server-sent_events"}},s={},p=[{value:"Example: A library catalog",id:"example-a-library-catalog",level:2},{value:"How do Indexes decrease write performance?",id:"how-do-indexes-decrease-write-performance",level:2}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"indexes"},"Indexes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sooner or later there comes a time when database performance is no longer satisfactory"),(0,n.kt)("li",{parentName:"ul"},"One of the very first things you should turn to when that happens is database indexing"),(0,n.kt)("li",{parentName:"ul"},"The goal of creating an index on a particular table in a database",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"is to make it faster to search through the table and find the row or rows that we want"))),(0,n.kt)("li",{parentName:"ul"},"Indexes can be created using one or more columns of a database table",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"providing the basis for rapid random lookups and efficient access of ordered records")))),(0,n.kt)("h2",{id:"example-a-library-catalog"},"Example: A library catalog"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A library catalog is a register that contains the list of books found in a library"),(0,n.kt)("li",{parentName:"ul"},"The catalog is organized like a database table generally with 4 columns:",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"book title"),(0,n.kt)("li",{parentName:"ol"},"writer"),(0,n.kt)("li",{parentName:"ol"},"subject"),(0,n.kt)("li",{parentName:"ol"},"date of publication"))),(0,n.kt)("li",{parentName:"ul"},"There are usually 2 such catalogs:",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"sorted by the book title"),(0,n.kt)("li",{parentName:"ol"},"sorted by the writer name"))),(0,n.kt)("li",{parentName:"ul"},"can either think of a writer you want to read",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"then look through their books"),(0,n.kt)("li",{parentName:"ul"},"or look up a specific book title"))),(0,n.kt)("li",{parentName:"ul"},"These catalogs are like indexes for the database of books"),(0,n.kt)("li",{parentName:"ul"},"They provide a sorted list of data that is easily searchable by relevant information"),(0,n.kt)("li",{parentName:"ul"},"An index is a data structure that can be perceived as a table of contents",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"that points us to the location where actual data lives"))),(0,n.kt)("li",{parentName:"ul"},"when we create an index on a column of a table",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"we store that column and a pointer to the whole row in the index"))),(0,n.kt)("li",{parentName:"ul"},"Just like a traditional relational data store",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"can apply this concept to larger datasets"))),(0,n.kt)("li",{parentName:"ul"},"The trick with indexes is that we must carefully consider how users will access the data"),(0,n.kt)("li",{parentName:"ul"},"In the case of data sets that are many terabytes in size, but have very small payloads (e.g., 1 KB)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"indexes are a necessity for optimizing data access"))),(0,n.kt)("li",{parentName:"ul"},"Finding a small payload in such a large dataset can be a real challenge",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"since we can\u2019t possibly iterate over that much data in any reasonable time"))),(0,n.kt)("li",{parentName:"ul"},"it is very likely that such a large data set is spread over several physical devices",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"this means we need some way to find the correct physical location of the desired data"),(0,n.kt)("li",{parentName:"ul"},"Indexes are the best way to do this\n",(0,n.kt)("img",{parentName:"li",src:"https://github.com/reshinto/Basic_technologies_revision/raw/master/interviewPrep/system_design/images/indexes.png",alt:"alt text",title:"Indexes"}))))),(0,n.kt)("h2",{id:"how-do-indexes-decrease-write-performance"},"How do Indexes decrease write performance?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An index can dramatically speed up data retrieval",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"but may itself be large due to the additional keys",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"which slow down data insertion & update."))))),(0,n.kt)("li",{parentName:"ul"},"When adding rows or making updates to existing rows for a table with an active index",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"we have to write the data and have to update the index",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This will decrease the write performance",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This performance degradation applies to all insert, update, and delete operations for the table"),(0,n.kt)("li",{parentName:"ul"},"thus, adding unnecessary indexes on tables should be avoided and indexes that are no longer used should be removed"))))))),(0,n.kt)("li",{parentName:"ul"},"adding indexes is about improving the performance of search queries"),(0,n.kt)("li",{parentName:"ul"},"If the goal of the database is to provide a data store that is often written to and rarely read from",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"decreasing the performance of the more common operation (writing)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"is probably not worth the increase in performance we get from reading")))))))}c.isMDXComponent=!0}}]);