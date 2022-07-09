"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[7313],{3905:(e,t,r)=>{r.d(t,{Zo:()=>o,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},o=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,g=d["".concat(c,".").concat(u)]||d[u]||h[u]||i;return r?a.createElement(g,l(l({ref:t},o),{},{components:r})):a.createElement(g,l({ref:t},o))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},28799:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={},l="Graphs",s={unversionedId:"interviewPrep/data_structures/12Graphs/readme",id:"interviewPrep/data_structures/12Graphs/readme",title:"Graphs",description:"- All types of trees are special cases of graphs",source:"@site/docs/interviewPrep/data_structures/12Graphs/readme.md",sourceDirName:"interviewPrep/data_structures/12Graphs",slug:"/interviewPrep/data_structures/12Graphs/",permalink:"/docs/interviewPrep/data_structures/12Graphs/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/data_structures/12Graphs/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Strings",permalink:"/docs/interviewPrep/data_structures/11Strings/"},next:{title:"Breadth First Search Example",permalink:"/docs/interviewPrep/data_structures/12Graphs/typescript/breadthFirstSearch"}},c={},p=[{value:"Graph cycle",id:"graph-cycle",level:2},{value:"Acyclic Graph",id:"acyclic-graph",level:3},{value:"Cyclic Graph",id:"cyclic-graph",level:3},{value:"Directed Graph",id:"directed-graph",level:2},{value:"Directed Graph with Weights",id:"directed-graph-with-weights",level:3},{value:"Undirected Graph",id:"undirected-graph",level:2},{value:"Connected Graph",id:"connected-graph",level:2},{value:"Disconnected Graph",id:"disconnected-graph",level:2},{value:"standard operations and complexities",id:"standard-operations-and-complexities",level:2},{value:"Storing a graph: O(V + E) space",id:"storing-a-graph-ov--e-space",level:3},{value:"Traversing a graph: O(V + E) time",id:"traversing-a-graph-ov--e-time",level:3},{value:"Depth First Search (DFS)",id:"depth-first-search-dfs",level:4},{value:"Breath First Search (BFS)",id:"breath-first-search-bfs",level:4}],o={toc:p};function h(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},o,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"graphs"},"Graphs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"All types of trees are special cases of graphs"),(0,n.kt)("li",{parentName:"ul"},"a collection of nodes or values called ",(0,n.kt)("inlineCode",{parentName:"li"},"vertices")," that might be related",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"relations between vertices are called ",(0,n.kt)("inlineCode",{parentName:"li"},"edges")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"G = (V, E)")))),(0,n.kt)("li",{parentName:"ul"},"many things in life can be represented by graphs",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"e.g. a social network can be represented by a graph whose vertices are users and whose edges are friendships between the users"),(0,n.kt)("li",{parentName:"ul"},"similarly, a city map can be represented by a graph whose vertices are locations in the city and whose edges are roads between the locations"))),(0,n.kt)("li",{parentName:"ul"},"typically, we represent a graph as an ",(0,n.kt)("inlineCode",{parentName:"li"},"adjacency list"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"|V|")),(0,n.kt)("li",{parentName:"ul"},"it can store a list of nodes in the graph",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"every node stores value and a list of it's edges (or a list of it's adjacencies)"))))),(0,n.kt)("li",{parentName:"ul"},"a graph can also be represented by a 2 dimensional array")),(0,n.kt)("h2",{id:"graph-cycle"},"Graph cycle"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a cycle occurs in a graph when 3 or more vertices in the graph are connected so as to form a closed loop"),(0,n.kt)("li",{parentName:"ul"},"note that the definition of a graph cycle is sometimes broadened to include cycles of length 2 or 1",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"in the context of coding interviews, when dealing with questions that involve graph cycles",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"it's important to clarify what exactly constitutes a cycle")))))),(0,n.kt)("h3",{id:"acyclic-graph"},"Acyclic Graph"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a graph that has no cycles")),(0,n.kt)("h3",{id:"cyclic-graph"},"Cyclic Graph"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"cyclicGraph",src:r(3846).Z,width:"1552",height:"990"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a graph that has at least 1 cycle"),(0,n.kt)("li",{parentName:"ul"},"if you are traversing through the graph, and going down connections, and found yourself revisiting a connection that you have previously visited just by following the path of 3 edges",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"then that means there's a cycle in the graph")))),(0,n.kt)("h2",{id:"directed-graph"},"Directed Graph"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"directedGraph",src:r(35651).Z,width:"832",height:"486"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a graph that whose edges are directed",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"meaning that they can only be traversed in 1 direction, which is specified"))),(0,n.kt)("li",{parentName:"ul"},"for e.g. a graph of airports and flights would likely be directed",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"since a flight specifically goes from 1 airport to another (has a direction)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"without necessarily implying the presence of a flight in the opposite direction")))))),(0,n.kt)("h3",{id:"directed-graph-with-weights"},"Directed Graph with Weights"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Directed Graph with Weights",src:r(28254).Z,width:"720",height:"300"})),(0,n.kt)("h2",{id:"undirected-graph"},"Undirected Graph"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"undirectedGraph",src:r(29968).Z,width:"832",height:"486"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a graph whose edges are undirected, meaning that they can be traversed in both directions"),(0,n.kt)("li",{parentName:"ul"},"e.g. a graph of friends would likely be undirected, since friendship is by nature bidirectional")),(0,n.kt)("h2",{id:"connected-graph"},"Connected Graph"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"connectedGraph",src:r(82104).Z,width:"832",height:"486"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a graph is connected if for every pair of vertices in the graph there's a path of 1 or more edges connecting the given vertices"),(0,n.kt)("li",{parentName:"ul"},"in the case of a directed graph, the graph is",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"strongly connected if there are bidirectional connections between the vertices of every pair of vertices",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"for every vertex-pair (u, v), can reach v from u and u from v"))),(0,n.kt)("li",{parentName:"ul"},"weakly connected if there are connections (but not necessarily bidirectional ones) between the vertices of every pair of vertices")))),(0,n.kt)("h2",{id:"disconnected-graph"},"Disconnected Graph"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a graph that isn't connected is said to be disconnected\n",(0,n.kt)("img",{alt:"disconnectedGraph",src:r(66777).Z,width:"1444",height:"922"}))),(0,n.kt)("h2",{id:"standard-operations-and-complexities"},"standard operations and complexities"),(0,n.kt)("h3",{id:"storing-a-graph-ov--e-space"},"Storing a graph: O(V + E) space"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"storing V vertices (nodes)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"V is the number of vertices in the graph"))),(0,n.kt)("li",{parentName:"ul"},"storing E edges",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"E is the number of edges in the graph")))),(0,n.kt)("h3",{id:"traversing-a-graph-ov--e-time"},"Traversing a graph: O(V + E) time"),(0,n.kt)("h4",{id:"depth-first-search-dfs"},"Depth First Search (DFS)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"traversing the graph deeper before going wide")),(0,n.kt)("h4",{id:"breath-first-search-bfs"},"Breath First Search (BFS)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"traversing the graph wider before going deep")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"it is one of the simplest algorithms for searching a graph and the archetype for many important graph algorithms")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The algorithm works on both directed and undirected graphs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"example: assumes that the input graph ",(0,n.kt)("inlineCode",{parentName:"p"},"G = (V, E)")," is represented using adjacency lists"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'function BFS(Graph, source) {\n  let u, vertex;\n\n  for (u of Graph) {\n    u.color = "WHITE";\n    u.dist = Number.POSITIVE_INFINITY;\n    u.parent = null;\n  }\n\n  source.color = "GRAY";\n  source.dist = 0;\n  source.parent = null;\n  Queue = [];\n  Queue.push(source);\n\n  while (Queue.length > 0) {\n    u = Queue.unshift();\n\n    for (vertex of Graph.Adj[u]) {\n      if (vertex.color === "WHITE") {\n        vertex.color = "GRAY";\n        vertex.dist = u.dist + 1;\n        vertex.parent = u;\n        Queue.push(Queue, vertex);\n      }\n    }\n\n    u.color = "BLACK";\n  }\n}\n')))))}h.isMDXComponent=!0},82104:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/connectedGraph-c093a735d240a9ce21310bd5fc99aaf9.png"},3846:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/cyclicGraph-4df708d6076983e2de6e7619dee252ea.png"},35651:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/directedGraph-c093a735d240a9ce21310bd5fc99aaf9.png"},28254:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/directedGraphWeights-65acb28c173367bda5d289b493764ef8.jpg"},66777:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/disconnectedGraph-ed4f589b098c1fab71961dc95af0921d.png"},29968:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/undirectedGraph-424c7aad566efb44c31f8b734fcc21de.png"}}]);