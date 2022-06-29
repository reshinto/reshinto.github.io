"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[8238],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>c});var r=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,i=function(e,a){if(null==e)return{};var t,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),p=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=p(e.components);return r.createElement(o.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(t),c=i,h=m["".concat(o,".").concat(c)]||m[c]||u[c]||n;return t?r.createElement(h,l(l({ref:a},d),{},{components:t})):r.createElement(h,l({ref:a},d))}));function c(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var n=t.length,l=new Array(n);l[0]=m;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<n;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1770:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var r=t(7462),i=(t(7294),t(3905));const n={},l="Specialized Storage Paradigms",s={unversionedId:"interviewPrep/system_design/14SpecializedStorageParadigms/readme",id:"interviewPrep/system_design/14SpecializedStorageParadigms/readme",title:"Specialized Storage Paradigms",description:"Blob storage",source:"@site/docs/interviewPrep/system_design/14SpecializedStorageParadigms/readme.md",sourceDirName:"interviewPrep/system_design/14SpecializedStorageParadigms",slug:"/interviewPrep/system_design/14SpecializedStorageParadigms/",permalink:"/docs/interviewPrep/system_design/14SpecializedStorageParadigms/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/system_design/14SpecializedStorageParadigms/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Redis Key-Value Store example",permalink:"/docs/interviewPrep/system_design/13Key-ValueStores/redisExample/"},next:{title:"SQL vs Graph Database example",permalink:"/docs/interviewPrep/system_design/14SpecializedStorageParadigms/sqlVsGraphDbExample/"}},o={},p=[{value:"Blob storage",id:"blob-storage",level:2},{value:"Time Series Database (TSDB)",id:"time-series-database-tsdb",level:2},{value:"Graph Database",id:"graph-database",level:2},{value:"Cypher",id:"cypher",level:2},{value:"Spatial Database",id:"spatial-database",level:2},{value:"what is spatial data?",id:"what-is-spatial-data",level:3},{value:"use cases",id:"use-cases",level:3},{value:"Spatial indexes examples",id:"spatial-indexes-examples",level:3},{value:"Quadtree",id:"quadtree",level:4},{value:"R-trees",id:"r-trees",level:4},{value:"K-D trees",id:"k-d-trees",level:4},{value:"M-trees",id:"m-trees",level:4}],d={toc:p};function u(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"specialized-storage-paradigms"},"Specialized Storage Paradigms"),(0,i.kt)("h2",{id:"blob-storage"},"Blob storage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"widely used kind of storage in small and large systems"),(0,i.kt)("li",{parentName:"ul"},"they don't really count as databases, partially because they only allow the user to store and retrieve data based on the name of the blob"),(0,i.kt)("li",{parentName:"ul"},"is similar to key-value store but blob stores have different guarantees",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"it might be slower than key-value stores, but values can be megabytes larger (or gigabytes larger)"),(0,i.kt)("li",{parentName:"ul"},"usually used to store large binaries, database snapshots, or images and other static assets that a website might have"))),(0,i.kt)("li",{parentName:"ul"},"blob storage is complicated to have on premise",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"only giant companies like Google and Amazon have infrastructure that supports it"),(0,i.kt)("li",{parentName:"ul"},"so usually in the system design interview context, can assume that you will be able to use Google Cloud Storage or Amazon S3",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"they cost money depending on how much storage is used and how often you store and retrieve blobs from that storage"))))),(0,i.kt)("li",{parentName:"ul"},"blob storage e.g.:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Google Cloud Storage",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"GCS is a blob storage service provided by Google"))),(0,i.kt)("li",{parentName:"ul"},"Amazon S3",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"S3 is a blob storage service provided by Amazon through Amazon Web Services (AWS)")))))),(0,i.kt)("h2",{id:"time-series-database-tsdb"},"Time Series Database (TSDB)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"it is a special kind of database optimized for storing and analyzing time-indexed data which are data points that specifically occur at a given moment in time"),(0,i.kt)("li",{parentName:"ul"},"use cases",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"good if you are monitoring parts of the system",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g: a bunch of events that all occur at a given timestamp"),(0,i.kt)("li",{parentName:"ul"},"if you are designing an IoT system, where you got millions of devices that are constantly sending telemetry data or capturing certain data in their environments"),(0,i.kt)("li",{parentName:"ul"},"if you are dealing with stock prices that change every second or cryptocurrency prices"))))),(0,i.kt)("li",{parentName:"ul"},"e.g.:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.influxdata.com/"},"InfluxDB"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"a popular open-source time series-database"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://prometheus.io/"},"Prometheus"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"a popular open-source time series database, typically used for monitoring purposes"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://graphiteapp.org/"},"Graphite"))))),(0,i.kt)("h2",{id:"graph-database"},"Graph Database"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a type of database that stores data following the graph data model"),(0,i.kt)("li",{parentName:"ul"},"data entries in a graph database can have explicitly defined relationships",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"much like nodes in a graph can have edges"))),(0,i.kt)("li",{parentName:"ul"},"graph databases take advantage of their underlying graph structure to perform complex queries on deeply connected data very fast"),(0,i.kt)("li",{parentName:"ul"},"graph database are thus often preferred to relational databases when dealing with systems where data points naturally form a graph and have multiple levels of relationships",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g.: social networks"))),(0,i.kt)("li",{parentName:"ul"},"database e.g.:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://neo4j.com/"},"Neo4j"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"a popular graph database that consists of nodes, relationships, properties, and labels")))))),(0,i.kt)("h2",{id:"cypher"},"Cypher"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a graph query language that was originally developed for the Neo4j graph database",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"but has been standardized to be used with other graph databases in an effort to make it the SQL for graphs"))),(0,i.kt)("li",{parentName:"ul"},"Cypher queries are often much simpler than their SQL counterparts",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g.: Cypher query to find data in Neo4j, a popular graph database",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MATCH (some_node:SomeLabel)-[:SOME_RELATIONSHIP]->(some_other_node:SomeLabel {some_property:'value'})"))))))),(0,i.kt)("h2",{id:"spatial-database"},"Spatial Database"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a type of database optimized for storing and querying spatial data like locations on a map"),(0,i.kt)("li",{parentName:"ul"},"Spatial databases rely on spatial indexes like quadtrees to quickly perform spatial queries like finding all locations in the vicinity of a region")),(0,i.kt)("h3",{id:"what-is-spatial-data"},"what is spatial data?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"anything that has to do with geometric space, basically locations on a map")),(0,i.kt)("h3",{id:"use-cases"},"use cases"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"if you are storing hotels in the world, or restaurants in a country, or designing google maps")),(0,i.kt)("h3",{id:"spatial-indexes-examples"},"Spatial indexes examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"there might be times where you might need to implement your own spatial indexes and storing it in memory",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"might be required if you are designing a system that really cares about very fast latencies, dealing with location based system or system that relies on spatial data, and you don't wanna be querying the database all the time"))),(0,i.kt)("li",{parentName:"ul"},"in this day and age, a lot of databases e.g.: Postgres are smart and really optimized for all sorts of queries and data types",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"thus is possible that some databases like Postgres might provide out of the box solutions for spatial data",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"this is dependent on the interviewer, discuss with the interviewer to understand what they are looking for")))))),(0,i.kt)("h4",{id:"quadtree"},"Quadtree"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a tree data structure most commonly used to index 2 dimensional spatial data"),(0,i.kt)("li",{parentName:"ul"},"each node in a quadtree has either 0 children nodes (and is therefore a leaf node) or exactly 4 children nodes"),(0,i.kt)("li",{parentName:"ul"},"typically quadtree nodes contain some form of spatial data",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g.: locations on a map with a maximum capacity of some specified number n"),(0,i.kt)("li",{parentName:"ul"},"so long as nodes aren't at capacity, they remain leaf nodes"),(0,i.kt)("li",{parentName:"ul"},"once they reach capacity, they're given 4 children nodes, and their data entries are split across 4 children nodes"))),(0,i.kt)("li",{parentName:"ul"},"a quadtree lends itself well to storing spatial data because it can be represented as a grid filled with rectangles that are recursively subdivided into 4 sub-rectangles",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"where each quadtree node is represented by a rectangle and each rectangle represents a spatial region"),(0,i.kt)("li",{parentName:"ul"},"assuming we're storing locations in the world, we can imagine a quadtree with a maximum node-capacity n as follows",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"the root node, which represents the entire world, is the outermost rectangle"),(0,i.kt)("li",{parentName:"ul"},"if the entire world has more than n locations, the outmost rectangle is divided into 4 quadrants, each representing a region of the world"),(0,i.kt)("li",{parentName:"ul"},"so long as a region has more than n locations, its corresponding rectangle is subdivided into 4 quadrants (the corresponding node in the quadtree is given 4 children nodes)"),(0,i.kt)("li",{parentName:"ul"},"regions that have fewer than n locations are undivided rectangles (leaf nodes)"),(0,i.kt)("li",{parentName:"ul"},"the parts of the grid that have many subdivided rectangles represent densely populated areas (like rural areas)"))))),(0,i.kt)("li",{parentName:"ul"},"finding a given location in a perfect quadtree is an extremely fast operation that runs in log4(x) time (where x is the total number of locations), since quadtree nodes have 4 children nodes")),(0,i.kt)("h4",{id:"r-trees"},"R-trees"),(0,i.kt)("h4",{id:"k-d-trees"},"K-D trees"),(0,i.kt)("h4",{id:"m-trees"},"M-trees"))}u.isMDXComponent=!0}}]);