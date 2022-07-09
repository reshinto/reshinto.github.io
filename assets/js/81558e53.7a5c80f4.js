"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[9824],{3905:(e,i,t)=>{t.d(i,{Zo:()=>d,kt:()=>p});var A=t(67294);function a(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function n(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);i&&(A=A.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,A)}return t}function o(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?n(Object(t),!0).forEach((function(i){a(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function l(e,i){if(null==e)return{};var t,A,a=function(e,i){if(null==e)return{};var t,A,a={},n=Object.keys(e);for(A=0;A<n.length;A++)t=n[A],i.indexOf(t)>=0||(a[t]=e[t]);return a}(e,i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(A=0;A<n.length;A++)t=n[A],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var r=A.createContext({}),s=function(e){var i=A.useContext(r),t=i;return e&&(t="function"==typeof e?e(i):o(o({},i),e)),t},d=function(e){var i=s(e.components);return A.createElement(r.Provider,{value:i},e.children)},c={inlineCode:"code",wrapper:function(e){var i=e.children;return A.createElement(A.Fragment,{},i)}},f=A.forwardRef((function(e,i){var t=e.components,a=e.mdxType,n=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),f=s(t),p=a,u=f["".concat(r,".").concat(p)]||f[p]||c[p]||n;return t?A.createElement(u,o(o({ref:i},d),{},{components:t})):A.createElement(u,o({ref:i},d))}));function p(e,i){var t=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var n=t.length,o=new Array(n);o[0]=f;var l={};for(var r in i)hasOwnProperty.call(i,r)&&(l[r]=i[r]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<n;s++)o[s]=t[s];return A.createElement.apply(null,o)}return A.createElement.apply(null,t)}f.displayName="MDXCreateElement"},62201:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var A=t(87462),a=(t(67294),t(3905));const n={},o="Linked Lists",l={unversionedId:"interviewPrep/data_structures/08LinkedLists/readme",id:"interviewPrep/data_structures/08LinkedLists/readme",title:"Linked Lists",description:"- it is a data structure in which the objects are arranged in a linear order",source:"@site/docs/interviewPrep/data_structures/08LinkedLists/readme.md",sourceDirName:"interviewPrep/data_structures/08LinkedLists",slug:"/interviewPrep/data_structures/08LinkedLists/",permalink:"/docs/interviewPrep/data_structures/08LinkedLists/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/data_structures/08LinkedLists/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Array",permalink:"/docs/interviewPrep/data_structures/07Array/"},next:{title:"Circular Linked List Example",permalink:"/docs/interviewPrep/data_structures/08LinkedLists/typescript/circularLinkedList"}},r={},s=[{value:"Singly Linked List",id:"singly-linked-list",level:2},{value:"standard operations and their complexities",id:"standard-operations-and-their-complexities",level:3},{value:"Initialize a linked list: O(n) time, O(n) space",id:"initialize-a-linked-list-on-time-on-space",level:4},{value:"Accessing the head: O(1) time, O(1) space",id:"accessing-the-head-o1-time-o1-space",level:4},{value:"Accessing the tail: O(n) time, O(1) space",id:"accessing-the-tail-on-time-o1-space",level:4},{value:"Accessing a middle node: O(n) time, O(1) space",id:"accessing-a-middle-node-on-time-o1-space",level:4},{value:"Inserting / Removing the head: O(1) time, O(1) space",id:"inserting--removing-the-head-o1-time-o1-space",level:4},{value:"Inserting / Removing the tail: O(n) to access + O(1) to modify time, O(1) space",id:"inserting--removing-the-tail-on-to-access--o1-to-modify-time-o1-space",level:4},{value:"Inserting / Removing a middle node: O(n) to access + O(1) to modify time, O(1) space",id:"inserting--removing-a-middle-node-on-to-access--o1-to-modify-time-o1-space",level:4},{value:"Searching for a value: O(n) time, O(1) space",id:"searching-for-a-value-on-time-o1-space",level:4},{value:"Traverse a linked list: O(n) time, O(1) space",id:"traverse-a-linked-list-on-time-o1-space",level:4},{value:"Copy a linked list: O(n) time, O(n) space",id:"copy-a-linked-list-on-time-on-space",level:4},{value:"Doubly Linked List",id:"doubly-linked-list",level:2},{value:"standard operations and their time complexities",id:"standard-operations-and-their-time-complexities",level:3},{value:"Initialize a linked list: O(n) time, O(n) space",id:"initialize-a-linked-list-on-time-on-space-1",level:4},{value:"Accessing the head: O(1) time, O(1) space",id:"accessing-the-head-o1-time-o1-space-1",level:4},{value:"Accessing the tail: O(1) time, O(1) space",id:"accessing-the-tail-o1-time-o1-space",level:4},{value:"Accessing a middle node: O(n) time, O(1) space",id:"accessing-a-middle-node-on-time-o1-space-1",level:4},{value:"Inserting / Removing the head: O(1) time, O(1) space",id:"inserting--removing-the-head-o1-time-o1-space-1",level:4},{value:"Inserting / Removing the tail: O(1) time, O(1) space",id:"inserting--removing-the-tail-o1-time-o1-space",level:4},{value:"Inserting / Removing a middle node: O(n) to access + O(1) to modify time, O(1) space",id:"inserting--removing-a-middle-node-on-to-access--o1-to-modify-time-o1-space-1",level:4},{value:"Searching for a value: O(n) time, O(1) space",id:"searching-for-a-value-on-time-o1-space-1",level:4},{value:"Traverse a linked list: O(n) time, O(1) space",id:"traverse-a-linked-list-on-time-o1-space-1",level:4},{value:"Copy a linked list: O(n) time, O(n) space",id:"copy-a-linked-list-on-time-on-space-1",level:4},{value:"Circular Linked List / Cyclic Linked List",id:"circular-linked-list--cyclic-linked-list",level:2},{value:"Circular Double Linked List / Cyclic Double Linked List",id:"circular-double-linked-list--cyclic-double-linked-list",level:2}],d={toc:s};function c(e){let{components:i,...n}=e;return(0,a.kt)("wrapper",(0,A.Z)({},d,n,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"linked-lists"},"Linked Lists"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"it is a data structure in which the objects are arranged in a linear order"),(0,a.kt)("li",{parentName:"ul"},"order in a linked list is determined by a pointer in each object"),(0,a.kt)("li",{parentName:"ul"},"consists of nodes, each with some value and a pointer to the next node in the linked list"),(0,a.kt)("li",{parentName:"ul"},"a linked list node's value and next node are typically stored in ",(0,a.kt)("inlineCode",{parentName:"li"},"value")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"next")," properties"),(0,a.kt)("li",{parentName:"ul"},"the 1st node in a linked list is referred to as the ",(0,a.kt)("inlineCode",{parentName:"li"},"head")," of the linked list"),(0,a.kt)("li",{parentName:"ul"},"the last node in a linked list, whose ",(0,a.kt)("inlineCode",{parentName:"li"},"next")," property points to the ",(0,a.kt)("inlineCode",{parentName:"li"},"null")," value is known as the ",(0,a.kt)("inlineCode",{parentName:"li"},"tail")," of the linked list"),(0,a.kt)("li",{parentName:"ul"},"linked lists differs from an array is in how it's implemented and how it's stored in memory",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"basically it would store each node (1 memory slot) with their pointer (1 memory slot) back to back",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"the pointer stores the memory address of the next node"),(0,a.kt)("li",{parentName:"ul"},"each node and their respective pointers are not stored back to back with the other nodes and pointers in the memory"),(0,a.kt)("li",{parentName:"ul"},"they are linked together via their pointers"),(0,a.kt)("li",{parentName:"ul"},"in the case of a singly linked list, the last node would point to the memory address that contains the null value"))))),(0,a.kt)("li",{parentName:"ul"},"The advantage of this data structure is usage of pointers",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"In languages with manual memory allocation this allows data structures to allocate memory dynamically"),(0,a.kt)("li",{parentName:"ul"},"In javascript, this advantage is mitigated in general, but other features of a double linked list could be used")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class Node<T> {\n  constructor(public element: T, public next?: Node<T>) {}\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class DoublyNode<T> extends Node<T> {\n  constructor(\n    public element: T,\n    public next?: DoublyNode<T>,\n    public prev?: DoublyNode<T>\n  ) {\n    super(element, next);\n  }\n}\n")),(0,a.kt)("h2",{id:"singly-linked-list"},"Singly Linked List"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Linked list",src:t(4569).Z,width:"412",height:"92"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"visual representation of a singly linked list whose nodes hold integer values",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 -> 1 -> 2 -> 3 -> null")))),(0,a.kt)("li",{parentName:"ul"},"a singly linked list typically exposes its head to its user for easy access",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"while finding a node in a singly linked list involves traversing through all of the nodes leading up to the node in question (as opposed to instant access with an array)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"adding or removing nodes involves overwriting ",(0,a.kt)("inlineCode",{parentName:"li"},"next")," pointers (assuming that you have access to the node right before the node that you're adding or removing)")))))),(0,a.kt)("h3",{id:"standard-operations-and-their-complexities"},"standard operations and their complexities"),(0,a.kt)("h4",{id:"initialize-a-linked-list-on-time-on-space"},"Initialize a linked list: O(n) time, O(n) space"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"this will create 2n memory slots, 1 for the node and 1 for the pointer"),(0,a.kt)("li",{parentName:"ul"},"it will also need to allocate the n chunks of memory thus will take n time")),(0,a.kt)("h4",{id:"accessing-the-head-o1-time-o1-space"},"Accessing the head: O(1) time, O(1) space"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"space is not affected")),(0,a.kt)("h4",{id:"accessing-the-tail-on-time-o1-space"},"Accessing the tail: O(n) time, O(1) space"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"requires to traverse the linked list to get the node"),(0,a.kt)("li",{parentName:"ul"},"space is not affected")),(0,a.kt)("h4",{id:"accessing-a-middle-node-on-time-o1-space"},"Accessing a middle node: O(n) time, O(1) space"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"requires to traverse the linked list to get the node"),(0,a.kt)("li",{parentName:"ul"},"space is not affected")),(0,a.kt)("h4",{id:"inserting--removing-the-head-o1-time-o1-space"},"Inserting / Removing the head: O(1) time, O(1) space"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"none of the nodes are required to be shifted, therefore it only requires changing of the head reference which is only for 1 node making it constant time and space effort"),(0,a.kt)("li",{parentName:"ul"},"With add operation, memory is allocated for a new node and then the pointer in the last element is updated to point to the new node.")),(0,a.kt)("h4",{id:"inserting--removing-the-tail-on-to-access--o1-to-modify-time-o1-space"},"Inserting / Removing the tail: O(n) to access + O(1) to modify time, O(1) space"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"requires traversing through the list before any changing of reference could be done, therefore time is linear to traverse but modification is constant")),(0,a.kt)("h4",{id:"inserting--removing-a-middle-node-on-to-access--o1-to-modify-time-o1-space"},"Inserting / Removing a middle node: O(n) to access + O(1) to modify time, O(1) space"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"requires traversing through the list before any changing of reference could be done, therefore time is linear to traverse but modification is constant")),(0,a.kt)("h4",{id:"searching-for-a-value-on-time-o1-space"},"Searching for a value: O(n) time, O(1) space"),(0,a.kt)("h4",{id:"traverse-a-linked-list-on-time-o1-space"},"Traverse a linked list: O(n) time, O(1) space"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"space is not affected")),(0,a.kt)("h4",{id:"copy-a-linked-list-on-time-on-space"},"Copy a linked list: O(n) time, O(n) space"),(0,a.kt)("h2",{id:"doubly-linked-list"},"Doubly Linked List"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Double linked list",src:t(12592).Z,width:"480",height:"100"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"similar to a singly linked list, except that each node in a doubly linked list also has a pointer to the previous node",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"the previous node is typically stored in a ",(0,a.kt)("inlineCode",{parentName:"li"},"prev")," property"))),(0,a.kt)("li",{parentName:"ul"},"just as the ",(0,a.kt)("inlineCode",{parentName:"li"},"next")," property of a doubly linked list's ",(0,a.kt)("inlineCode",{parentName:"li"},"tail")," points to the ",(0,a.kt)("inlineCode",{parentName:"li"},"null")," value, the ",(0,a.kt)("inlineCode",{parentName:"li"},"prev")," property of a doubly linked list ",(0,a.kt)("inlineCode",{parentName:"li"},"head")," also points to the ",(0,a.kt)("inlineCode",{parentName:"li"},"null")," value"),(0,a.kt)("li",{parentName:"ul"},"visual representation of a doubly linked list whose nodes hold integer values",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"null <-> 0 <-> 1 <-> 2 <-> 3 <-> null")))),(0,a.kt)("li",{parentName:"ul"},"a doubly linked list typically exposes both its head and tail to its user",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"it also behaves very similarly to a singly linked list")))),(0,a.kt)("h3",{id:"standard-operations-and-their-time-complexities"},"standard operations and their time complexities"),(0,a.kt)("h4",{id:"initialize-a-linked-list-on-time-on-space-1"},"Initialize a linked list: O(n) time, O(n) space"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"this will create 2n memory slots, 1 for the node and 1 for the pointer"),(0,a.kt)("li",{parentName:"ul"},"it will also need to allocate the n chunks of memory thus will take n time")),(0,a.kt)("h4",{id:"accessing-the-head-o1-time-o1-space-1"},"Accessing the head: O(1) time, O(1) space"),(0,a.kt)("h4",{id:"accessing-the-tail-o1-time-o1-space"},"Accessing the tail: O(1) time, O(1) space"),(0,a.kt)("h4",{id:"accessing-a-middle-node-on-time-o1-space-1"},"Accessing a middle node: O(n) time, O(1) space"),(0,a.kt)("h4",{id:"inserting--removing-the-head-o1-time-o1-space-1"},"Inserting / Removing the head: O(1) time, O(1) space"),(0,a.kt)("h4",{id:"inserting--removing-the-tail-o1-time-o1-space"},"Inserting / Removing the tail: O(1) time, O(1) space"),(0,a.kt)("h4",{id:"inserting--removing-a-middle-node-on-to-access--o1-to-modify-time-o1-space-1"},"Inserting / Removing a middle node: O(n) to access + O(1) to modify time, O(1) space"),(0,a.kt)("h4",{id:"searching-for-a-value-on-time-o1-space-1"},"Searching for a value: O(n) time, O(1) space"),(0,a.kt)("h4",{id:"traverse-a-linked-list-on-time-o1-space-1"},"Traverse a linked list: O(n) time, O(1) space"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"space is not affected")),(0,a.kt)("h4",{id:"copy-a-linked-list-on-time-on-space-1"},"Copy a linked list: O(n) time, O(n) space"),(0,a.kt)("h2",{id:"circular-linked-list--cyclic-linked-list"},"Circular Linked List / Cyclic Linked List"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Cyclic linked list",src:t(4241).Z,width:"560",height:"98"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a linked list that has no clear ",(0,a.kt)("inlineCode",{parentName:"li"},"head")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"tail"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"because its ",(0,a.kt)("inlineCode",{parentName:"li"},"tail")," points to its ",(0,a.kt)("inlineCode",{parentName:"li"},"head")),(0,a.kt)("li",{parentName:"ul"},"forming a closed circle"))),(0,a.kt)("li",{parentName:"ul"},"it can be either singly circular linked list or a doubly circular linked list")),(0,a.kt)("h2",{id:"circular-double-linked-list--cyclic-double-linked-list"},"Circular Double Linked List / Cyclic Double Linked List"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Cyclic double linked list",src:t(57459).Z,width:"674",height:"158"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the last element is pointing to the first and first points to the last")))}c.isMDXComponent=!0},57459:(e,i,t)=>{t.d(i,{Z:()=>A});const A=t.p+"assets/images/cyclic_double_linked_list-744ceb94d6ab6ff3b38311db480e94c4.jpg"},4241:(e,i,t)=>{t.d(i,{Z:()=>A});const A=t.p+"assets/images/cyclic_linked_list-9b90ae625c2de4f47a7c1906b9fdad92.jpg"},12592:(e,i,t)=>{t.d(i,{Z:()=>A});const A="data:image/jpeg;base64,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/GsPinUte02SOWGTUbCOabeEMibo5EkUYZSMEHpX6P0yRFljaJ/uuCD9DSle2gHifhX4q/DrW7YxNmFrZkg8y4gT98+Oo8vcAT1IOMdxXVw+NvhtcI7xXlqRHnOYip4YL0KgnkjHrnI4q9bfDzwpZ2Vhp8Fptg04yGMZ+8ZAVYuf4sg96xLX4QeD7U2RYXNx/Z9wbiETTs4UkY2c9UwBhTxwK419YVr2f9L/AIP/AAD56ms0jGKk4N9d1/X/AAPPTwP9pz4Q/ELxl40+Efjv4XaNp2qyeAtYudRu7W7uRZCaKW38pVV/LfJyc8iuvi8aftQQJ5cPwq0WNfRfEAA/IWtfT1Fdp9CfBV7pf7VN18btO+Lo+HejKljokukG1/t/ljJP53mbvs3bpjFet/8ACc/tTf8ARLdH/wDChH/yLX01RQB8y/8ACc/tTf8ARLdH/wDChH/yLR/wnP7U3/RLdH/8KEf/ACLX01RQB8CfC/Rv2qfh3r/jzWn+Hmi3i+M9ak1ZUGv7TAHjVPLJ+zfNjbnNeuzeNv2ppYXi/wCFXaON6kZ/4SEdx/1619PUUAeNfs+eDfEfgD4PeHfCfi6KGDWLKOc3MdvJ50SPNPJLtWTC7gA4GcCvZaKKACiiigAooooAKKKKACiiigAooooA/9P9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//U/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/1f38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9k="},4569:(e,i,t)=>{t.d(i,{Z:()=>A});const A="data:image/jpeg;base64,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"}}]);