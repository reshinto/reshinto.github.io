"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[9590],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||r;return a?i.createElement(h,l(l({ref:t},m),{},{components:a})):i.createElement(h,l({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},59714:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=a(83117),n=(a(67294),a(3905));const r={},l="Data Partitioning",o={unversionedId:"interviewPrep/system_design/data_partitioning",id:"interviewPrep/system_design/data_partitioning",title:"Data Partitioning",description:"- a technique to break up a big database (DB) into many smaller parts",source:"@site/docs/interviewPrep/system_design/data_partitioning.md",sourceDirName:"interviewPrep/system_design",slug:"/interviewPrep/system_design/data_partitioning",permalink:"/docs/interviewPrep/system_design/data_partitioning",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/system_design/data_partitioning.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Consistent Hashing",permalink:"/docs/interviewPrep/system_design/consistent_hashing"},next:{title:"Database Scaling",permalink:"/docs/interviewPrep/system_design/database_scaling"}},s={},p=[{value:"Partitioning Methods",id:"partitioning-methods",level:2},{value:"Partitioning Criteria",id:"partitioning-criteria",level:2},{value:"Common Problems of Data Partitioning",id:"common-problems-of-data-partitioning",level:2}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"data-partitioning"},"Data Partitioning"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a technique to break up a big database (DB) into many smaller parts"),(0,n.kt)("li",{parentName:"ul"},"It is the process of splitting up a DB/table across multiple machines",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"to improve the manageability, performance, availability, and load balancing of an application"))),(0,n.kt)("li",{parentName:"ul"},"after a certain scale point",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"it is cheaper and more feasible to scale horizontally",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"by adding more machines"))),(0,n.kt)("li",{parentName:"ul"},"It is more expensive to grow it vertically by adding beefier servers")))),(0,n.kt)("h2",{id:"partitioning-methods"},"Partitioning Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"3 most popular schemes used by various large scale applications",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Horizontal partitioning",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"put different rows into different tables"),(0,n.kt)("li",{parentName:"ul"},"also called as range based partitioning",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"as we are storing different ranges of data in separate tables"))),(0,n.kt)("li",{parentName:"ul"},"also called as Data Sharding"),(0,n.kt)("li",{parentName:"ul"},"key problem",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"if the value whose range is used for partitioning isn\u2019t chosen carefully",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"the partitioning scheme will lead to unbalanced servers"))))))),(0,n.kt)("li",{parentName:"ol"},"Vertical Partitioning",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"divide our data to store tables related to a specific feature in their own server"),(0,n.kt)("li",{parentName:"ul"},"it is straightforward to implement and has a low impact on the application"),(0,n.kt)("li",{parentName:"ul"},"main problem",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"if our application experiences additional growth",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"it may be necessary to further partition a feature specific DB across various servers"))))))),(0,n.kt)("li",{parentName:"ol"},"Directory Based Partitioning",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A loosely coupled approach to work around issues mentioned in the above schemes",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"is to create a lookup service",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"which knows your current partitioning scheme and abstracts it away from the DB access code"))))),(0,n.kt)("li",{parentName:"ul"},"to find out where a particular data entity resides",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"we query the directory server that holds the mapping between each tuple key to its DB server"))),(0,n.kt)("li",{parentName:"ul"},"loosely coupled approach means",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"can perform tasks like",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"adding servers to the DB pool"),(0,n.kt)("li",{parentName:"ul"},"changing our partitioning scheme without having an impact on the application")))))))))),(0,n.kt)("h2",{id:"partitioning-criteria"},"Partitioning Criteria"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Key or Hash-based partitioning",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"apply a hash function to some key attributes of the entity we are storing; that yields the partition number"),(0,n.kt)("li",{parentName:"ul"},"This approach should ensure a uniform allocation of data among servers"),(0,n.kt)("li",{parentName:"ul"},"fundamental problem",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"it effectively fixes the total number of DB servers",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"adding new servers = changing the hash function",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"this would require redistribution of data and downtime for the service",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A workaround for this problem is to use Consistent Hashing"))))))))))),(0,n.kt)("li",{parentName:"ol"},"List partitioning",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"each partition is assigned a list of values",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"whenever we want to insert a new record, we will see which partition contains our key and then store it there"))))),(0,n.kt)("li",{parentName:"ol"},"Round-robin partitioning\n",(0,n.kt)("em",{parentName:"li"}," a simple strategy that ensures uniform data distribution\n")," With \u2018n\u2019 partitions, the \u2018i\u2019 tuple is assigned to partition (i mod n)\nd. Composite partitioning\n",(0,n.kt)("em",{parentName:"li"}," combine any of the above partitioning schemes to devise a new scheme\n")," e.g.: first applying a list partitioning scheme and then a hash based partitioning\n",(0,n.kt)("em",{parentName:"li"}," Consistent hashing could be considered a composite of hash and list partitioning\n")," where the hash reduces the key space to a size that can be listed")),(0,n.kt)("h2",{id:"common-problems-of-data-partitioning"},"Common Problems of Data Partitioning"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"On a partitioned database, there are certain extra constraints on the different operations that can be performed",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"constraints are due to operations across multiple tables rows in the same table will no longer run on the same server"),(0,n.kt)("li",{parentName:"ul"},"Constraints and additional complexxities introduced by partitioning",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Joins and Denormalization",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Performing joins on a database which is running on one server is straightforward",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"but will no longer be so once once a database is partitioned and spread across multiple machines",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"because joins that span database partitions will not be feasible"))))),(0,n.kt)("li",{parentName:"ul"},"Such joins will not be performance efficient since data has to be compiled from multiple servers"),(0,n.kt)("li",{parentName:"ul"},"solution: denormalize the database",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"so that queries that previously required joins can be performed from a single table"),(0,n.kt)("li",{parentName:"ul"},"however, service now has to deal with all the perils of denormalization such as data inconsistency"))))),(0,n.kt)("li",{parentName:"ol"},"Referential integrity",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"trying to enforce data integrity constraints such as foreign keys in a partitioned database can be difficult"),(0,n.kt)("li",{parentName:"ul"},"Most of RDBMS do not support foreign keys constraints across databases on different database servers",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"this means that apps that require referential integrity on partitioned databases have to enforce it in app code",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"in such cases, applications have to run regular SQL jobs to clean up dangling references"))))))),(0,n.kt)("li",{parentName:"ol"},"Rebalancing",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"many reasons we have to change our partitioning scheme",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"The data distribution is not uniform"),(0,n.kt)("li",{parentName:"ol"},"There is a lot of load on a partition"))))))))),(0,n.kt)("li",{parentName:"ul"},"In such cases, either we have to create more DB partitions or have to rebalance existing partitions",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"this means the partitioning scheme changed and all existing data moved to new locations"),(0,n.kt)("li",{parentName:"ul"},"Doing this without incurring downtime is extremely difficult"))),(0,n.kt)("li",{parentName:"ul"},"Using a scheme like directory based partitioning make rebalancing a palatable experience",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"at the cost of increasing the complexity of the system"),(0,n.kt)("li",{parentName:"ul"},"and creating a new single point of failure (i.e. the lookup service/database)")))))}u.isMDXComponent=!0}}]);