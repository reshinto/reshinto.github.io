"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[3053],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),d=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=d(a),c=n,m=h["".concat(s,".").concat(c)]||h[c]||u[c]||r;return a?i.createElement(m,l(l({ref:t},p),{},{components:a})):i.createElement(m,l({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var d=2;d<r;d++)l[d]=a[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},74810:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=a(87462),n=(a(67294),a(3905));const r={},l="Replication and Sharding",o={unversionedId:"interviewPrep/system_design/15ReplicationAndSharding/readme",id:"interviewPrep/system_design/15ReplicationAndSharding/readme",title:"Replication and Sharding",description:"- a system's performance is often only as good as its database",source:"@site/docs/interviewPrep/system_design/15ReplicationAndSharding/readme.md",sourceDirName:"interviewPrep/system_design/15ReplicationAndSharding",slug:"/interviewPrep/system_design/15ReplicationAndSharding/",permalink:"/docs/interviewPrep/system_design/15ReplicationAndSharding/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/system_design/15ReplicationAndSharding/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SQL vs Graph Database example",permalink:"/docs/interviewPrep/system_design/14SpecializedStorageParadigms/sqlVsGraphDbExample/"},next:{title:"Sharding example",permalink:"/docs/interviewPrep/system_design/15ReplicationAndSharding/shardingExample/"}},s={},d=[{value:"Replication",id:"replication",level:2},{value:"Using replication to backup a database",id:"using-replication-to-backup-a-database",level:3},{value:"How it works",id:"how-it-works",level:4},{value:"Using replication to create database for specific regions",id:"using-replication-to-create-database-for-specific-regions",level:3},{value:"How it works",id:"how-it-works-1",level:4},{value:"Sharding (sometimes called data partitioning)",id:"sharding-sometimes-called-data-partitioning",level:2},{value:"When to use",id:"when-to-use",level:3},{value:"Hot Spot",id:"hot-spot",level:2}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"replication-and-sharding"},"Replication and Sharding"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a system's performance is often only as good as its database",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"optimize the database and the system's performance will improve"),(0,n.kt)("li",{parentName:"ul"},"e.g.: if a system's database is unavailable, then the system itself will likely be unavailable",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"if a system's database has high latency or low throughput, then the system itself will likely have high latency or low throughput"))),(0,n.kt)("li",{parentName:"ul"},"this is where replication and sharding will come into play"))),(0,n.kt)("li",{parentName:"ul"},"data redundancy and data partitioning techniques can be used to enhance a system's fault tolerance, throughput, and overall reliability")),(0,n.kt)("h2",{id:"replication"},"Replication"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the act of duplicating the data from 1 database server to others")),(0,n.kt)("h3",{id:"using-replication-to-backup-a-database"},"Using replication to backup a database"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"this is sometimes used to increase the redundancy of the system and tolerate regional failures",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"replica database must always be up to date with the main database")))),(0,n.kt)("h4",{id:"how-it-works"},"How it works"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"whenever the main database is updated, the replica database will also need to be updated and in a synchronous way",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"in the event that the update of the replica database should fail, the update of the main database should not be completed"))),(0,n.kt)("li",{parentName:"ul"},"as a result, this will cause the write operation to take longer as both databases has to be updated successfully"),(0,n.kt)("li",{parentName:"ul"},"when the main database fails, the replica database will take over"),(0,n.kt)("li",{parentName:"ul"},"when the main database is up again, the main databse will take over")),(0,n.kt)("h3",{id:"using-replication-to-create-database-for-specific-regions"},"Using replication to create database for specific regions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"other times you can use replication to move data closer to the clients",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"thus decreasing the latency of accessing specific data")))),(0,n.kt)("h4",{id:"how-it-works-1"},"How it works"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"if there are 2 servers, 1 in the US for US users, and 1 in China for Chinese users",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"each server in their respective countries will update their own databases first",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"this will allow native users to have high latency and throughput"))),(0,n.kt)("li",{parentName:"ul"},"however the native data in each database has to be in sync with each other",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"since other country's database is not of high priority, other country's database can be updated asynchronously after the native country's database has been updated")))))),(0,n.kt)("h2",{id:"sharding-sometimes-called-data-partitioning"},"Sharding (sometimes called data partitioning)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"it is the act of splitting a database into 2 or more pieces called ",(0,n.kt)("inlineCode",{parentName:"li"},"shards")),(0,n.kt)("li",{parentName:"ul"},"it is typically done to increase the throughput of the database"),(0,n.kt)("li",{parentName:"ul"},"popular sharding strategies",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"sharding based on a client's region"),(0,n.kt)("li",{parentName:"ul"},"sharding based on the type of data being stored (e.g.: user data gets stored in 1 shard, payments data gets stored in another shard)"),(0,n.kt)("li",{parentName:"ul"},"sharding based on the hash of a column (only for structured data)")))),(0,n.kt)("h3",{id:"when-to-use"},"When to use"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"when a database reaches a bottleneck and can't handle too many requests at once and throughput is too low",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"although scaling vertically by improving the database more powerful would work but there is only so much that can be done"),(0,n.kt)("li",{parentName:"ul"},"scaling horizontally by adding more database servers is also possible, however, if there are tons of data, replicating it might not be an optimal way"))),(0,n.kt)("li",{parentName:"ul"},"a better solution would be to split up the data and store parts of the data in their own database server, this is sharding or data partitions",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"e.g.: any paying customers with the name that starts from A to C goes to shard 1, D to F goes to shard 2, etc."),(0,n.kt)("li",{parentName:"ul"},"this solution however, comes with problems too leading to Hot Spot issue"),(0,n.kt)("li",{parentName:"ul"},"a better way to split up data might be to use hashing that guarantees uniformity"),(0,n.kt)("li",{parentName:"ul"},"a reverse proxy or load balance could be used to configure this logic of determining which shard to use")))),(0,n.kt)("h2",{id:"hot-spot"},"Hot Spot"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"when distributing a workload across a set of server, that workload might be spread unevenly"),(0,n.kt)("li",{parentName:"ul"},"this can happen if the sharding key or hashing function are suboptimal",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"or if the workload is naturally skewed",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"some servers will receive a lot more traffic than others, thus creating a hot spot")))))))}u.isMDXComponent=!0}}]);