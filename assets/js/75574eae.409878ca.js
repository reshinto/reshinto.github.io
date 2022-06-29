"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[7347],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>m});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),u=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return a?t.createElement(g,i(i({ref:n},p),{},{components:a})):t.createElement(g,i({ref:n},p))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3052:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var t=a(7462),r=(a(7294),a(3905));const l={},i="GraphQL",o={unversionedId:"database/noSQL/graphQL/readme",id:"database/noSQL/graphQL/readme",title:"GraphQL",description:"- created at Facebook in 2012",source:"@site/docs/database/noSQL/graphQL/readme.md",sourceDirName:"database/noSQL/graphQL",slug:"/database/noSQL/graphQL/",permalink:"/docs/database/noSQL/graphQL/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/database/noSQL/graphQL/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Firebase setup guide",permalink:"/docs/database/noSQL/firebase/"},next:{title:"MongoDB Overview",permalink:"/docs/database/noSQL/mongoDB/"}},s={},u=[{value:"Benefits of using GraphQL",id:"benefits-of-using-graphql",level:2},{value:"Syntax",id:"syntax",level:2},{value:"writing comments",id:"writing-comments",level:3},{value:"Queries",id:"queries",level:3},{value:"Basic queries",id:"basic-queries",level:4},{value:"Variable definitions",id:"variable-definitions",level:4},{value:"Multiple fields",id:"multiple-fields",level:4},{value:"Parsing argument",id:"parsing-argument",level:4},{value:"Required argument",id:"required-argument",level:4},{value:"Aliases",id:"aliases",level:4},{value:"Fragments",id:"fragments",level:4},{value:"Nested fields",id:"nested-fields",level:4},{value:"Multiple nested fields",id:"multiple-nested-fields",level:4},{value:"Pagination",id:"pagination",level:4},{value:"Mutations",id:"mutations",level:3},{value:"Create mutations",id:"create-mutations",level:4},{value:"Schemas",id:"schemas",level:2},{value:"Input Types",id:"input-types",level:3},{value:"Query <code>__schema</code>",id:"query-__schema",level:3},{value:"Query <code>__type</code>",id:"query-__type",level:3}],p={toc:u};function d(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"graphql"},"GraphQL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"created at Facebook in 2012"),(0,r.kt)("li",{parentName:"ul"},"it is a declarative data fetching specification & query language",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"used to get data from server to client"))),(0,r.kt)("li",{parentName:"ul"},"can use many languages to build a graph server")),(0,r.kt)("h2",{id:"benefits-of-using-graphql"},"Benefits of using GraphQL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"it defines the shape of the desired data and calls for it once",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"this helps to avoid multiple rest calls and the performance problems of over and under fetching"))),(0,r.kt)("li",{parentName:"ul"},"it is backward compatible and version-free",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"means that one can add new fields to an existing GraphQL server without breaking the current clients",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"old fields can be deprecated and yet still can continue to function"))))),(0,r.kt)("li",{parentName:"ul"},"can be used to wrap around existing API",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"so that one don't have to set up everything from scratch & use it as part of the existing setup"))),(0,r.kt)("li",{parentName:"ul"},"it is language agnostic",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"can implement GraphQL solutions in a range of different languages")))),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("h3",{id:"writing-comments"},"writing comments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"# comment\n")),(0,r.kt)("h3",{id:"queries"},"Queries"),(0,r.kt)("h4",{id:"basic-queries"},"Basic queries"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"graphql query")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"// method 1: similar to anonymous function\n{\n  viewer {\n    id\n  }\n}\n\n// method 2: makes it easier to find but does not have a unique name\nquery {\n  viewer {\n    id\n  }\n}\n\n// method 3: Set operation names to all easy finding as names are unique\nquery SomeUniqueName {\n  viewer {\n    id\n  }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"json result")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "viewer": {\n      "id": "efhyubVgvkywdUBUYGGB"\n    }\n  }\n}\n')),(0,r.kt)("h4",{id:"variable-definitions"},"Variable definitions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query SomeUniqueName($myVariable: String!) {\n  organization(login: $myVariable) {\n    id\n  }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"query variables")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "myVariable": "facebook"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "organization": {\n      "id": "MDEyOk9yZ2FuaXphdGlvbjY5NjMx"\n    }\n  }\n}\n')),(0,r.kt)("h4",{id:"multiple-fields"},"Multiple fields"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  viewer {\n    id\n    bio\n    name\n    company\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "viewer": {\n      "id": "HJBHJssjkbdLJHBHJB",\n      "bio": "some description about myself",\n      "name": "Myname",\n      "company": null\n    }\n  }\n}\n')),(0,r.kt)("h4",{id:"parsing-argument"},"Parsing argument"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"when parsing argument value, must use double quotes"),(0,r.kt)("li",{parentName:"ul"},"single argument")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  repositoryOwner(login: "myusername") {\n    id\n    url\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "repositoryOwner": {\n      "id": "hlbBHKBbhbdhbBLHB",\n      "url": "https://github.com/myusername"\n    }\n  }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"multiple arguments")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  repository(name: "graphql", owner: "facebook") {\n    id\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "repository": {\n      "id": "MDEwOlJlcG9zaXRvcnkzODM0MjIyMQ=="\n    }\n  }\n}\n')),(0,r.kt)("h4",{id:"required-argument"},"Required argument"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"if missing an error will be shown")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  repository(name: "graphql") {\n    id\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "path": [\n        "query",\n        "repository"\n      ],\n      "extensions": {\n        "code": "missingRequiredArguments",\n        "className": "Field",\n        "name": "repository",\n        "arguments": "owner"\n      },\n      "locations": [\n        {\n          "line": 2,\n          "column": 2\n        }\n      ],\n      "message": "Field \'repository\' is missing required arguments: owner"\n    }\n  ]\n}\n')),(0,r.kt)("h4",{id:"aliases"},"Aliases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"not using aliases with conflicting arguments will result with an error")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  repository(name: "graphql", owner: "facebook") {\n    id description homepageUrl\n  }\n  repository(name: "react", owner: "facebook") {\n    id description homepageUrl\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "path": [],\n      "extensions": {\n        "code": "fieldConflict",\n        "fieldName": "repository",\n        "conflicts": "{name:\\"\\\\\\"graphql\\\\\\"\\",owner:\\"\\\\\\"facebook\\\\\\"\\"} or {name:\\"\\\\\\"react\\\\\\"\\",owner:\\"\\\\\\"facebook\\\\\\"\\"}"\n      },\n      "locations": [\n        {\n          "line": 2,\n          "column": 3\n        },\n        {\n          "line": 5,\n          "column": 3\n        }\n      ],\n      "message": "Field \'repository\' has an argument conflict: {name:\\"\\\\\\"graphql\\\\\\"\\",owner:\\"\\\\\\"facebook\\\\\\"\\"} or {name:\\"\\\\\\"react\\\\\\"\\",owner:\\"\\\\\\"facebook\\\\\\"\\"}?"\n    }\n  ]\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use Aliases to solve the error")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  graphqlProject: repository(name: "graphql", owner: "facebook") {\n    id\n    description\n    homepageUrl\n  }\n  reactProject: repository(name: "react", owner: "facebook") {\n    id\n    description\n    homepageUrl\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "graphqlProject": {\n      "id": "MDEwOlJlcG9zaXRvcnkzODM0MjIyMQ==",\n      "description": "GraphQL is a query language and execution engine tied to any backend service.",\n      "homepageUrl": "https://spec.graphql.org"\n    },\n    "reactProject": {\n      "id": "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",\n      "description": "A declarative, efficient, and flexible JavaScript library for building user interfaces.",\n      "homepageUrl": "https://reactjs.org"\n    }\n  }\n}\n')),(0,r.kt)("h4",{id:"fragments"},"Fragments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"they are reusable sets of fields that can be included in queries as needed to prevent repetition")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  graphqlProject: repository(name: "graphql", owner: "facebook") {\n    ...repoFields\n  }\n  reactProject: repository(name: "react", owner: "facebook") {\n    ...repoFields\n  }\n}\n\nfragment repoFields on Repository {\n  id\n  description\n  homepageUrl\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "graphqlProject": {\n      "id": "MDEwOlJlcG9zaXRvcnkzODM0MjIyMQ==",\n      "description": "GraphQL is a query language and execution engine tied to any backend service.",\n      "homepageUrl": "https://spec.graphql.org"\n    },\n    "reactProject": {\n      "id": "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",\n      "description": "A declarative, efficient, and flexible JavaScript library for building user interfaces.",\n      "homepageUrl": "https://reactjs.org"\n    }\n  }\n}\n')),(0,r.kt)("h4",{id:"nested-fields"},"Nested fields"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  viewer {\n    id\n    name\n    isEmployee\n    location\n    databaseId\n    repositories(first: 3) {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n    }\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "viewer": {\n      "id": "MDQ6VXNlcjM1MDQyMjEz",\n      "name": "Terence",\n      "isEmployee": false,\n      "location": null,\n      "databaseId": 35042213,\n      "repositories": {\n        "edges": [\n          {\n            "node": {\n              "id": "MDEwOlJlcG9zaXRvcnkxMjExNDE5MzY=",\n              "name": "alarm-volume-control"\n            }\n          },\n          {\n            "node": {\n              "id": "MDEwOlJlcG9zaXRvcnkxMjgyMDY0ODM=",\n              "name": "Rock-Paper-Scissors"\n            }\n          },\n          {\n            "node": {\n              "id": "MDEwOlJlcG9zaXRvcnkxMjgzOTQzNjc=",\n              "name": "Hackerrank-Solutions"\n            }\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,r.kt)("h4",{id:"multiple-nested-fields"},"Multiple nested fields"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  repository(owner: "github", name: "opensource.guide") {\n    id\n    name\n    description\n    watchers(first: 3) {\n      edges {\n        node {\n          id\n          name\n          company\n        }\n      }\n    }\n    pullRequests(last: 2) {\n      edges {\n        node {\n          id\n          author {\n            avatarUrl\n            login\n            resourcePath\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "repository": {\n      "id": "MDEwOlJlcG9zaXRvcnk2MTIwNDgxOA==",\n      "name": "opensource.guide",\n      "description": "\ud83d\udcda Community guides for open source creators",\n      "watchers": {\n        "edges": [\n          {\n            "node": {\n              "id": "MDQ6VXNlcjEwODcy",\n              "name": "TAKAGI Masahiro",\n              "company": null\n            }\n          },\n          {\n            "node": {\n              "id": "MDQ6VXNlcjMwNDA4",\n              "name": "Dirk Br\xfcnsicke",\n              "company": "bruensicke.com"\n            }\n          },\n          {\n            "node": {\n              "id": "MDQ6VXNlcjQwNDE1",\n              "name": "Mike Linksvayer",\n              "company": "\u2603"\n            }\n          }\n        ]\n      },\n      "pullRequests": {\n        "edges": [\n          {\n            "node": {\n              "id": "MDExOlB1bGxSZXF1ZXN0Njg4NjMzNTE2",\n              "author": {\n                "avatarUrl": "https://avatars.githubusercontent.com/u/86223196?v=4",\n                "login": "maxius122-bit",\n                "resourcePath": "/maxius122-bit"\n              }\n            }\n          },\n          {\n            "node": {\n              "id": "MDExOlB1bGxSZXF1ZXN0Njg4NjM0OTQ1",\n              "author": {\n                "avatarUrl": "https://avatars.githubusercontent.com/u/86223196?v=4",\n                "login": "maxius122-bit",\n                "resourcePath": "/maxius122-bit"\n              }\n            }\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,r.kt)("h4",{id:"pagination"},"Pagination"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"first, last, states can be used to filter the data")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'# (first: 5)\n# (last: 3)\n\n{\n  repository(name: "graphql", owner: "facebook") {\n    id\n    issues(last: 5, states: OPEN) {\n      edges {\n        node {\n          id\n          number\n          title\n        }\n      }\n    }\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "repository": {\n      "id": "MDEwOlJlcG9zaXRvcnkzODM0MjIyMQ==",\n      "issues": {\n        "edges": [\n          {\n            "node": {\n              "id": "MDU6SXNzdWU4NzMxNzU4MTI=",\n              "number": 862,\n              "title": "Meta-Fields Defined by Schema Authors"\n            }\n          },\n          {\n            "node": {\n              "id": "MDU6SXNzdWU4NzYwNzYyODQ=",\n              "number": 864,\n              "title": "Explicitly state in spec that full introspection output is equivalent to full SDL document"\n            }\n          },\n          {\n            "node": {\n              "id": "MDU6SXNzdWU4Nzc3NjEzNTQ=",\n              "number": 866,\n              "title": "Execute fragments directly"\n            }\n          },\n          {\n            "node": {\n              "id": "MDU6SXNzdWU4ODAyNjEzNTE=",\n              "number": 867,\n              "title": "[Strawman] Provide a non-null designator in GraphQL operations"\n            }\n          },\n          {\n            "node": {\n              "id": "MDU6SXNzdWU4OTg4OTY4NzQ=",\n              "number": 872,\n              "title": "Optional v. Nullable input redux"\n            }\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"mutations"},"Mutations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Data modifications are made with mutations"),(0,r.kt)("li",{parentName:"ul"},"Similar to PUT or DELETE in REST"),(0,r.kt)("li",{parentName:"ul"},"data is sent as a payload"),(0,r.kt)("li",{parentName:"ul"},"GraphQL changes the dataset behind the schema"),(0,r.kt)("li",{parentName:"ul"},"API defines which mutations are allowed")),(0,r.kt)("h4",{id:"create-mutations"},"Create mutations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation NewComment($input: AddCommentInput!) {\n  addComment(input: $input) {\n    clientMutationId\n    subject {\n      id\n    }\n  }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"query variables")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "input": {\n    "clientMutationId": "123456",\n    "subjectId": "NININIWDNEUBNFIUuinife",\n    "body": "mutation has occured"\n  }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"json result (shows that a new comment has been added to the issue of the repository)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "addComment": {\n      "clientMutationId": "123456",\n      "subject": {\n        "id": "MDU6SXNzdWU5NDY1MjM3MTM="\n      }\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"schemas"},"Schemas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the way the fields are setup in graphQL is determined by the schemas"),(0,r.kt)("li",{parentName:"ul"},"it provides sll the object types used in the data",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"it also specifies the types for all the values")))),(0,r.kt)("h3",{id:"input-types"},"Input Types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Integer"),(0,r.kt)("li",{parentName:"ul"},"Float"),(0,r.kt)("li",{parentName:"ul"},"String"),(0,r.kt)("li",{parentName:"ul"},"Boolean"),(0,r.kt)("li",{parentName:"ul"},"Null"),(0,r.kt)("li",{parentName:"ul"},"Enum"),(0,r.kt)("li",{parentName:"ul"},"List"),(0,r.kt)("li",{parentName:"ul"},"Object")),(0,r.kt)("h3",{id:"query-__schema"},"Query ",(0,r.kt)("inlineCode",{parentName:"h3"},"__schema")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  __schema {\n    queryType {\n      name\n      description\n      fields {\n        name\n        description\n      }\n    }\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "__schema": {\n      "queryType": {\n        "name": "Query",\n        "description": "The query root of GitHub\'s GraphQL interface.",\n        "fields": [\n          {\n            "name": "codeOfConduct",\n            "description": "Look up a code of conduct by its key"\n          },\n          {\n            "name": "codesOfConduct",\n            "description": "Look up a code of conduct by its key"\n          },\n          ...,\n          {\n            "name": "viewer",\n            "description": "The currently authenticated user."\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"sample schema in the docs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"marketplaceCategories(\nexcludeEmpty: Boolean\nexcludeSubcategories: Boolean\nincludeCategories: [String!]  # ! means value is required\n): [MarketplaceCategory!]!\nGet alphabetically sorted list of Marketplace categories\n\nmarketplaceCategory(slug: String!useTopicAliases: Boolean): MarketplaceCategory\nLook up a Marketplace category by its slug.\n\nmarketplaceListing(slug: String!): MarketplaceListing\nLook up a single Marketplace listing\n\nmarketplaceListings(\nadminId: ID\nafter: String\nallStates: Boolean\nbefore: String\ncategorySlug: String\nfirst: Int\nlast: Int\norganizationId: ID\nprimaryCategoryOnly: Boolean = false\nslugs: [String]\nuseTopicAliases: Boolean\nviewerCanAdmin: Boolean\nwithFreeTrialsOnly: Boolean = false\n): MarketplaceListingConnection!\nLook up Marketplace listings\n")),(0,r.kt)("h3",{id:"query-__type"},"Query ",(0,r.kt)("inlineCode",{parentName:"h3"},"__type")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  __type(name: "Repository") {\n    kind\n    name\n    description\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "__type": {\n      "kind": "OBJECT",\n      "name": "Repository",\n      "description": "A repository contains the content for a project."\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);