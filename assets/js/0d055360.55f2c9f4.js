"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[6140],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>p});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=l.createContext({}),d=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},k=function(e){var t=d(e.components);return l.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),m=d(a),p=n,c=m["".concat(u,".").concat(p)]||m[p]||s[p]||o;return a?l.createElement(c,r(r({ref:t},k),{},{components:a})):l.createElement(c,r({ref:t},k))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var d=2;d<o;d++)r[d]=a[d];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5594:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var l=a(7462),n=(a(7294),a(3905));const o={},r="MongoDB Overview",i={unversionedId:"database/noSQL/mongoDB/readme",id:"database/noSQL/mongoDB/readme",title:"MongoDB Overview",description:"- it is a cross-platform",source:"@site/docs/database/noSQL/mongoDB/readme.md",sourceDirName:"database/noSQL/mongoDB",slug:"/database/noSQL/mongoDB/",permalink:"/docs/database/noSQL/mongoDB/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/database/noSQL/mongoDB/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GraphQL",permalink:"/docs/database/noSQL/graphQL/"},next:{title:"Mongoose",permalink:"/docs/database/noSQL/mongoDB/mongoose/"}},u={},d=[{value:"help",id:"help",level:3},{value:"show dbs",id:"show-dbs",level:3},{value:"use databaseName",id:"use-databasename",level:3},{value:"CRUD",id:"crud",level:2},{value:"CREATE",id:"create",level:2},{value:"Add multiple Collections",id:"add-multiple-collections",level:2},{value:"Add 1 or multiple collections",id:"add-1-or-multiple-collections",level:2},{value:"READ",id:"read",level:2},{value:"Dos and Don&#39;ts",id:"dos-and-donts",level:3},{value:"UPDATE",id:"update",level:2},{value:"REMOVE (Delete value(s))",id:"remove-delete-values",level:2},{value:"Delete collection",id:"delete-collection",level:2},{value:"Delete database",id:"delete-database",level:2},{value:"BULKWRITE",id:"bulkwrite",level:2},{value:"SEARCH",id:"search",level:2},{value:"Get search scores",id:"get-search-scores",level:2},{value:"AGGREGATION",id:"aggregation",level:2},{value:"Count",id:"count",level:2},{value:"List all values",id:"list-all-values",level:2},{value:"Find the sum of values under key for each id key",id:"find-the-sum-of-values-under-key-for-each-id-key",level:2},{value:"ADDITIONAL DATA TYPES",id:"additional-data-types",level:2}],k={toc:d};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mongodb-overview"},"MongoDB Overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"it is a cross-platform"),(0,n.kt)("li",{parentName:"ul"},"open source"),(0,n.kt)("li",{parentName:"ul"},"document-oriented database that provides",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"high performance"),(0,n.kt)("li",{parentName:"ul"},"high availability"),(0,n.kt)("li",{parentName:"ul"},"horizontal scaling"),(0,n.kt)("li",{parentName:"ul"},"rich query lanaguage"),(0,n.kt)("li",{parentName:"ul"},"multiple storage engines",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"MMAPv1, In-Memory, WiredTiger"))))),(0,n.kt)("li",{parentName:"ul"},"Document is a set of key-value pairs similar to JSON objects"),(0,n.kt)("li",{parentName:"ul"},"Collection is a group of documents"),(0,n.kt)("li",{parentName:"ul"},"Databases hold collections of documents"),(0,n.kt)("li",{parentName:"ul"},"Advantages of documents",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Native data types"),(0,n.kt)("li",{parentName:"ul"},"No expensive joins"),(0,n.kt)("li",{parentName:"ul"},"Dynamic schema")))),(0,n.kt)("h1",{id:"getting-started-guide-to-setting-up-mongodb"},"Getting started guide to setting up mongodb"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"go to root folder in app")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"mkdir data")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"mkdir data/db")),(0,n.kt)("li",{parentName:"ol"},"run: ",(0,n.kt)("inlineCode",{parentName:"li"},"mongod --dbpath /myapp/data/db"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"leave it running when working with database")),(0,n.kt)("h1",{id:"for-debugging"},"for debugging"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"open a new terminal and open a mongo shell"),(0,n.kt)("li",{parentName:"ul"},"run: ",(0,n.kt)("inlineCode",{parentName:"li"},"mongo")),(0,n.kt)("li",{parentName:"ul"},"or run : ",(0,n.kt)("inlineCode",{parentName:"li"},"mongo --host localhost:27017"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"27017 is the default port mongodb uses")))),(0,n.kt)("h1",{id:"for-graphical-interface"},"for graphical interface"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"open MongoDB Compass Community"),(0,n.kt)("li",{parentName:"ul"},"ensure server is already run with mongod (refer to the above)"),(0,n.kt)("li",{parentName:"ul"},"no settings is required, just click the connect button")),(0,n.kt)("h1",{id:"mongo-shell-basics"},"Mongo shell basics"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"mongo uses the language called BSON (Binary JavaScript Object Notation)")),(0,n.kt)("h3",{id:"help"},"help"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"display a list of basic features")),(0,n.kt)("h3",{id:"show-dbs"},"show dbs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"display all databases that was created")),(0,n.kt)("h3",{id:"use-databasename"},"use databaseName"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"e.g.: use demo"),(0,n.kt)("li",{parentName:"ul"},'all "db" called will be refered to demo database'),(0,n.kt)("li",{parentName:"ul"},"use the database"),(0,n.kt)("li",{parentName:"ul"},"database not created will be added into collections"),(0,n.kt)("li",{parentName:"ul"},'but will not be display in "show dbs" until some data is added')),(0,n.kt)("h2",{id:"crud"},"CRUD"),(0,n.kt)("h2",{id:"create"},"CREATE"),(0,n.kt)("p",null,"Add 1 Collection"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'db.dataName.insertOne({key: "value"})')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"e.g.: ",(0,n.kt)("inlineCode",{parentName:"li"},'db.dogs.insertOne({name: "Rusty", breed: "Mutt"})')),(0,n.kt)("li",{parentName:"ul"},"dataName is a collection"),(0,n.kt)("li",{parentName:"ul"},"add data into database"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"db")," is the database declared with use databaseName")),(0,n.kt)("h2",{id:"add-multiple-collections"},"Add multiple Collections"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"db.dataName.insertMany(",'[{key1: "value1"}, {key2: "value2"}]',")")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"e.g.: ",(0,n.kt)("inlineCode",{parentName:"li"},'db.dogs.insertMany([{name: "Rusty", breed: "Mutt"}, {name: "Bob", breed: "dog"}])')),(0,n.kt)("li",{parentName:"ul"},"add data into database")),(0,n.kt)("h2",{id:"add-1-or-multiple-collections"},"Add 1 or multiple collections"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'db.dataName.insert({key: "value"})')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"e.g.: ",(0,n.kt)("inlineCode",{parentName:"li"},'db.dogs.insert({name: "Rusty", breed: "Mutt"})'),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"db.dataName.insert(",'[{key1: "value1"}, {key2: "value2"}]',")"))),(0,n.kt)("li",{parentName:"ul"},"e.g.: ",(0,n.kt)("inlineCode",{parentName:"li"},'db.dogs.insert([{name: "Rusty", breed: "Mutt"}, {name: "Bob", breed: "dog"}])'))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'db.createCollection("dataName")')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"e.g.: ",(0,n.kt)("inlineCode",{parentName:"li"},'db.createCollection("dogs")')),(0,n.kt)("li",{parentName:"ul"},"similar to insert but does not require data")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"show collections")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"display data added")),(0,n.kt)("h2",{id:"read"},"READ"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"db.dataName.find()\ndb.dataName.find({})\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"find all data keys and values under dataName")),(0,n.kt)("h3",{id:"dos-and-donts"},"Dos and Don'ts"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'\u221a db.dataName.find({ _id: ObjectId("fu438h9784hgf847") })  // need to be stored as a hash\nx db.dataName.find({ _id: "fu438h9784hgf847 })  // does not work\n\u221a db.dataName.find({ lastLogin: ISODate("2018-10-10T00:00:00") })  // need to be written this way to work for dates\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'db.dataName.find({key: "value"})')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"e.g.: ",(0,n.kt)("inlineCode",{parentName:"li"},'db.dogs.find({name: "Rusty"})')),(0,n.kt)("li",{parentName:"ul"},"find a specific data key and value under dataName")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'db.dataName.find({key1: "value1", key2: "value2"})')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"retrieve data that has all of the searched values")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"db.dataName.find({$ord: ",'[{key1, "value1"}, {key2: "value2"}]',"})")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'retrieve data that has either "value1" or "value2"')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"db.dataName.find({key: {$gt: n}})")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"display values in comparison to n"),(0,n.kt)("li",{parentName:"ul"},"gt = greater than n"),(0,n.kt)("li",{parentName:"ul"},"lt = less than n"),(0,n.kt)("li",{parentName:"ul"},"eq = equal to n"),(0,n.kt)("li",{parentName:"ul"},"gte = greate than or equal to n"),(0,n.kt)("li",{parentName:"ul"},"lte = less than or equal to n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"db.dataName.find({key: {$in: ",'["value1", "value2"]',"}})")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"display all data(s) that consist of the value in the array",'["value1", "value2"]'),(0,n.kt)("li",{parentName:"ul"},"nin == not in (inverse of in)")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"db.dataName.find({key: {$exists: n}})")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"if n == true, show all data that has the key field"),(0,n.kt)("li",{parentName:"ul"},"if n == false, show all data that does not have the key field")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"db.dataName.find({}, {","_","id: n})")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"if n == 0, display everything except id"),(0,n.kt)("li",{parentName:"ul"},"if n == 1, display only id")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"db.dataName.find().limit(n)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"e.g.: ",(0,n.kt)("inlineCode",{parentName:"li"},"db.dogs.find().limit(2)")),(0,n.kt)("li",{parentName:"ul"},"limit search results by n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"db.dataName.find().sort({key: n})")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"if n == 1, sort by ascending order"),(0,n.kt)("li",{parentName:"ul"},"if n == -1, sort by descending order")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"db.dataName.find().sort({key1: n1, key2: n2})")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"sort by multiple fields"),(0,n.kt)("li",{parentName:"ul"},"sort by key1 then by key2")),(0,n.kt)("h2",{id:"update"},"UPDATE"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'db.dataName.updateOne({key: "value"}, {changeKey: "changeValue"})\ndb.dataName.replaceOne({key: "value"}, {changeKey: "changeValue"})\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"e.g.: ",(0,n.kt)("inlineCode",{parentName:"li"},'db.dogs.updateOne({name: "Rusty"}, {breed: "Labradoodle"})')),(0,n.kt)("li",{parentName:"ul"},"key and value required to find the position to change"),(0,n.kt)("li",{parentName:"ul"},'this will rewrite everything to just {breed: "Labradoodle"} without the name object')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'db.dataName.updateOne({key, "value"}, {$set: {changeKey: "changeValue", addKey: addValue}})\ndb.dataName.update({key, "value"}, {$set: {changeKey: "changeValue", addKey: addValue}})\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"e.g.: ",(0,n.kt)("inlineCode",{parentName:"li"},'db.dogs.updateOne({name: "Rusty"}, {$set: {breed: "Labradoodle", isCute: true}})')),(0,n.kt)("li",{parentName:"ul"},"use $set: {} to ensure data that aren't called will not be deleted"),(0,n.kt)("li",{parentName:"ul"},"this can be used to update and add new key value pair"),(0,n.kt)("li",{parentName:"ul"},"this will only update ONE data object in collection",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"need to run multiple times to update all")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'db.dataName.updateMany({key, "value"}, {$set: {changeKey: "changeValue", addKey: addValue}})')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"this will update ALL data objects in collection")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'db.dataName.update({key, "value"}, {$set: {changeKey: "changeValue", addKey: addValue}, {multi: true}})')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"need to add {multi: true} to enable multiple updates")),(0,n.kt)("h2",{id:"remove-delete-values"},"REMOVE (Delete value(s))"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'db.dataName.remove({key: "value"}, true)')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"justOne parameter need to set as true to delete only 1 value",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},'db.dataName.deleteOne({key: "value"})'))),(0,n.kt)("li",{parentName:"ul"},"delete 1 value",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},'db.dataName.remove({key: "value"})\ndb.dataName.deleteMany({key: "value"})'))),(0,n.kt)("li",{parentName:"ul"},"e.g.: ",(0,n.kt)("inlineCode",{parentName:"li"},'db.dogs.remove({breed: "Labradoodle"})')),(0,n.kt)("li",{parentName:"ul"},"this will remove all dogs that has the same breed value")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'db.dataName.remove({key: "value"}).limit(n)')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"e.g.: ",(0,n.kt)("inlineCode",{parentName:"li"},'db.dogs.remove(breed: "Labradoodle").limit(1)')),(0,n.kt)("li",{parentName:"ul"},"limit n number of data to remove")),(0,n.kt)("h2",{id:"delete-collection"},"Delete collection"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"db.dataName.drop()")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"e.g.: ",(0,n.kt)("inlineCode",{parentName:"li"},"db.dogs.drop()"))),(0,n.kt)("h2",{id:"delete-database"},"Delete database"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"db.dropDatabase()")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"thi will delete the currently used database")),(0,n.kt)("h2",{id:"bulkwrite"},"BULKWRITE"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'db.dataName.bulkWrite(\n  [\n    {insertOne:\n      {"document": {key1: "value1", key2: "value2"}}\n    },\n    {updateOne:\n      {\n        filter: {key: "value"},\n        update: {$set: {changekey: "changeValue"}}\n      }\n    },\n    {deleteOne:\n      {filter: {key: "value"}}\n    }\n  ])\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"enables multiple requests in ONE request")),(0,n.kt)("h2",{id:"search"},"SEARCH"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'db.dataName.createIndex({key1: "text", key2: "text"})')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"provide text indexes to enable text search queries on string content")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'db.dataName.find({$text: {$search: "searchText1 searchText2"}})')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"$text query operator is required"),(0,n.kt)("li",{parentName:"ul"},"$search operator required to start searching"),(0,n.kt)("li",{parentName:"ul"},"key in the search contents"),(0,n.kt)("li",{parentName:"ul"},"add - in front of searchText to exclude from search e.g.: -searchText1")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'db.dataName.find({$text: {$search: "\\"search phrase\\""}})')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'use \\" to enable search by phrase')),(0,n.kt)("h2",{id:"get-search-scores"},"Get search scores"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'db.dataName.find({$text: {$search: "searchText"}, {score: {$meta: "textScore"}}})')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"need to add 1 score object to enable search rankings"),(0,n.kt)("li",{parentName:"ul"},"search rankings enable sorting if required"),(0,n.kt)("li",{parentName:"ul"},"$meta projection operator returns for each matching document the metadata")),(0,n.kt)("h2",{id:"aggregation"},"AGGREGATION"),(0,n.kt)("h2",{id:"count"},"Count"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'db.dataName.count({key: "value"})')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"this will count the total number of values that is in the data collection")),(0,n.kt)("h2",{id:"list-all-values"},"List all values"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'db.dataName.distinct("key")')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"display a list of values under key")),(0,n.kt)("h2",{id:"find-the-sum-of-values-under-key-for-each-id-key"},"Find the sum of values under key for each id key"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'db.dataName.aggregate([\n  {$match: {key: "value"}},\n  {$group: {_id: "$idKey1", total: {$sum: "$idKey2"}}}\n])\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"$match operator is used to filter data in collection",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"use {} to search all"))),(0,n.kt)("li",{parentName:"ul"},"$group is used to group similar idKey1 together",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"$ is added in front of idKey1 to group them as a single unit"),(0,n.kt)("li",{parentName:"ul"},"idKey1 refers to the key in the data to group similar values together"))),(0,n.kt)("li",{parentName:"ul"},"$sum gives the total sum of all the values given from idKey2",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"idKey2 refers to the key in the data to get all the different values")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'db.dataName.aggregate([\n  {$match: {key: "value"}},\n  {$group: {_id: "$idKey1", total: {$sum: "$idKey2"}}},\n  {$sort: {total: n}}\n])\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"return value can be sorted by adding {$sort: {total: n}}",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"if n == 1, sort in ascending order"),(0,n.kt)("li",{parentName:"ul"},"if n == -1, sort in descending order")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'DATA TYPES\n{\n    string: "string",\n    int: 123,\n    double: 1.23,\n    boolean: true,\n    array: [1, 2, 3],\n    object: {key1: "value1", key2: "value2"},\n    date: new Date("<YYYY-mm-dd>"),\n    object_id: <ObjectId>,\n    no_value: null\n}\n')),(0,n.kt)("h2",{id:"additional-data-types"},"ADDITIONAL DATA TYPES"),(0,n.kt)("p",null,"Timestamp, Binary data, Regular expressions, javascript code"),(0,n.kt)("h1",{id:"getting-started-on-nodejs"},"Getting started on nodejs"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'const { MongoClient } = require("mongodb");\nconst assert = require("assert");\n\n// Connection URL\nconst url = "mongodb://localhost:27017/db_name";\n\n// Use connect method to connect to the server\nMongoClient.connect(url, (err, connection) => {\n  assert.equal(null, err)l\n  console.log("Connected correctly to server");\n  connection.close();\n});\n')))}s.isMDXComponent=!0}}]);