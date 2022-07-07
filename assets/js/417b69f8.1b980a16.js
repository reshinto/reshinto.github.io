"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[8251],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(r),h=a,f=c["".concat(s,".").concat(h)]||c[h]||p[h]||l;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},54656:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={},i="Trees",o={unversionedId:"interviewPrep/data_structures/13Trees/readme",id:"interviewPrep/data_structures/13Trees/readme",title:"Trees",description:"- a special type of graph",source:"@site/docs/interviewPrep/data_structures/13Trees/readme.md",sourceDirName:"interviewPrep/data_structures/13Trees",slug:"/interviewPrep/data_structures/13Trees/",permalink:"/docs/interviewPrep/data_structures/13Trees/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/data_structures/13Trees/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Graphs",permalink:"/docs/interviewPrep/data_structures/12Graphs/"},next:{title:"DESIGN PATTERNS ELEMENTS OF REUSABLE OBJECT ORIENTED SOFTWARE",permalink:"/docs/interviewPrep/designPatterns/"}},s={},u=[{value:"Types of trees",id:"types-of-trees",level:2},{value:"Binary Trees",id:"binary-trees",level:3},{value:"K-ary Tree",id:"k-ary-tree",level:4},{value:"Perfect Binary Tree",id:"perfect-binary-tree",level:4},{value:"Complete Binary Tree",id:"complete-binary-tree",level:4},{value:"Balanced Binary Tree",id:"balanced-binary-tree",level:4},{value:"Full Binary Tree",id:"full-binary-tree",level:4},{value:"Heaps",id:"heaps",level:3},{value:"Min Heaps",id:"min-heaps",level:4},{value:"Max Heaps",id:"max-heaps",level:4},{value:"Ternary Tree",id:"ternary-tree",level:3},{value:"Tries",id:"tries",level:3},{value:"AVL Trees",id:"avl-trees",level:3},{value:"Red Black Trees",id:"red-black-trees",level:3},{value:"standard operations and complexities",id:"standard-operations-and-complexities",level:2},{value:"Storing all types of tree: O(N) space",id:"storing-all-types-of-tree-on-space",level:3},{value:"Traversing through the entire tree: O(N) time",id:"traversing-through-the-entire-tree-on-time",level:3},{value:"Traversing 1 subtree at every step for a balance binary tree: O(log N) time on average",id:"traversing-1-subtree-at-every-step-for-a-balance-binary-tree-olog-n-time-on-average",level:3},{value:"Binary Search",id:"binary-search",level:2},{value:"Traversal Types",id:"traversal-types",level:2},{value:"Breath First Traversal",id:"breath-first-traversal",level:3},{value:"Depth First Traversal",id:"depth-first-traversal",level:3},{value:"Inorder (Left, Root, Right)",id:"inorder-left-root-right",level:4},{value:"Preorder (Root, Left, Right)",id:"preorder-root-left-right",level:4},{value:"Postorder (Left, Right, Root)",id:"postorder-left-right-root",level:4}],d={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"trees"},"Trees"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a special type of graph"),(0,a.kt)("li",{parentName:"ul"},"trees excel at storing data hierarchically and are commonly used as a means of testing your knowledge of recursion during coding interviews"),(0,a.kt)("li",{parentName:"ul"},"it is a data structure that consists of nodes, each with some value and pointers to child-nodes",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"which recursively form subtrees in the tree"))),(0,a.kt)("li",{parentName:"ul"},"the 1st node in a tree is referred to as the root of the tree",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"while the nodes at the bottom of a tree (the nodes with no child-nodes) are referred to as leaf nodes or leaves"),(0,a.kt)("li",{parentName:"ul"},"the paths between the root of a tree and its leaves are called branches"),(0,a.kt)("li",{parentName:"ul"},"the height of a tree is the length of its longest branch"),(0,a.kt)("li",{parentName:"ul"},"the depth of a tree node is its distance from its tree's root",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"also known as the node's level in the tree"))))),(0,a.kt)("li",{parentName:"ul"},"a tree is effectively a graph that's connected, directed, and acyclic",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"has an explicit root node, and whose nodes all have a single parent (except for the root node)"),(0,a.kt)("li",{parentName:"ul"},"in most implementations of trees, tree nodes don't have a pointer to their parent, but can if desired")))),(0,a.kt)("h2",{id:"types-of-trees"},"Types of trees"),(0,a.kt)("h3",{id:"binary-trees"},"Binary Trees"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the root node has 2 child nodes"),(0,a.kt)("li",{parentName:"ul"},"every other nodes have up to 2 child nodes"),(0,a.kt)("li",{parentName:"ul"},"the structure of a binary tree is such that many of its operations have a logarithmic time complexity, making binary tree a commonly used data structure")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class BinaryTree:\n  def __init__(self, value):\n    self.value = value\n    self.left = None\n    self.right = None\n")),(0,a.kt)("h4",{id:"k-ary-tree"},"K-ary Tree"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a tree where every node (including the root) have up to k child nodes",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"e.g.: a binary tree is a k-ary tree where k == 2")))),(0,a.kt)("h4",{id:"perfect-binary-tree"},"Perfect Binary Tree"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a binary tree whose interior nodes all have 2 child nodes and whose leaf nodes all have the same depth",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"        1\n    /         \\\n   2           3\n  /  \\       /   \\\n 4    5     6     7\n /\\   /\\    /\\    /\\\n8  9 10 11 12 13 14 15\n")))),(0,a.kt)("h4",{id:"complete-binary-tree"},"Complete Binary Tree"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a binary tree that's almost perfect"),(0,a.kt)("li",{parentName:"ul"},"its interior nodes all have 2 child nodes"),(0,a.kt)("li",{parentName:"ul"},"but its leaf nodes don't necessarily all have the same depth"),(0,a.kt)("li",{parentName:"ul"},"furthermore, the nodes in the last level of a complete binary tree are as far left as possible",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"      1\n    /   \\\n   2     3\n  / \\   / \\\n 4   5 6   7\n /\\\n8  9\n"))),(0,a.kt)("li",{parentName:"ul"},"a binary tree is incomplete if the nodes in its last level aren't as far left as possible",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"      1\n    /   \\\n   2     3\n  / \\   / \\\n 4   5 6   7\n    /   \\\n   8     9\n")))),(0,a.kt)("h4",{id:"balanced-binary-tree"},"Balanced Binary Tree"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"       1\n     /    \\\n    2      3\n   / \\    / \\\n  4   5  6   7\n / \\        /\n10  9      8\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a binary tree whose nodes all have left and right subtrees whose heights differ by no more than 1"),(0,a.kt)("li",{parentName:"ul"},"a balanced binary tree is such that the logarithmic time complexity of its operations is maintained"),(0,a.kt)("li",{parentName:"ul"},"e.g.: inserting a node at the bottom of the following imbalanced binary tree's left subtree would clearly not be a logarithmic-time operation, since it would involve traversing through most of the tree's nodes",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"         1\n       /  \\\n      2    3\n     /\n    4\n   /\n  8\n /\n10\n")))),(0,a.kt)("h4",{id:"full-binary-tree"},"Full Binary Tree"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a binary tree whose nodes all have either 2 child nodes or 0 child nodes",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"  1\n / \\\n2   3\n   / \\\n  6   7\n / \\\n8   9\n")))),(0,a.kt)("h3",{id:"heaps"},"Heaps"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"they are typically binary heaps"),(0,a.kt)("li",{parentName:"ul"},"a special type of binary trees, where every node in the tree satisfies the min or max heap property")),(0,a.kt)("h4",{id:"min-heaps"},"Min Heaps"),(0,a.kt)("h4",{id:"max-heaps"},"Max Heaps"),(0,a.kt)("h3",{id:"ternary-tree"},"Ternary Tree"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the root node has 3 child nodes"),(0,a.kt)("li",{parentName:"ul"},"every other nodes have up to 3 child nodes")),(0,a.kt)("h3",{id:"tries"},"Tries"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a tree like data structure that typically stores characters in a string")),(0,a.kt)("h3",{id:"avl-trees"},"AVL Trees"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"able to rebalance themselves to obtain the log N complexity")),(0,a.kt)("h3",{id:"red-black-trees"},"Red Black Trees"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"able to rebalance themselves to obtain the log N complexity")),(0,a.kt)("h2",{id:"standard-operations-and-complexities"},"standard operations and complexities"),(0,a.kt)("h3",{id:"storing-all-types-of-tree-on-space"},"Storing all types of tree: O(N) space"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"N is the total number of nodes in the tree")),(0,a.kt)("h3",{id:"traversing-through-the-entire-tree-on-time"},"Traversing through the entire tree: O(N) time"),(0,a.kt)("h3",{id:"traversing-1-subtree-at-every-step-for-a-balance-binary-tree-olog-n-time-on-average"},"Traversing 1 subtree at every step for a balance binary tree: O(log N) time on average"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"if the tree is skewed, it becomes O(N) time on worst")),(0,a.kt)("h2",{id:"binary-search"},"Binary Search"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def binary_search(current, target):\n  if current is None:\n    return None\n  if current.value == target:\n    return current.value\n  if target > current.value:\n    return binary_search(current.right, target, result)\n  elif target < current.value:\n    return binary_search(current.left, target, result)\n  else:\n    return None\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def binary_search(tree, target):\n  current = tree\n  while current:\n    if current.value == target:\n      return current.value\n    if target > current.value:\n      current = current.right\n    elif target < current.value:\n      current = current.left\n    else:\n      break\n  return None\n")),(0,a.kt)("h2",{id:"traversal-types"},"Traversal Types"),(0,a.kt)("h3",{id:"breath-first-traversal"},"Breath First Traversal"),(0,a.kt)("h3",{id:"depth-first-traversal"},"Depth First Traversal"),(0,a.kt)("h4",{id:"inorder-left-root-right"},"Inorder (Left, Root, Right)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Traverse the left subtree, i.e., call Inorder(left-subtree)"),(0,a.kt)("li",{parentName:"ol"},"Visit the root."),(0,a.kt)("li",{parentName:"ol"},"Traverse the right subtree, i.e., call Inorder(right-subtree)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def dfs(current_node):\n  if current_node:\n    dfs(current_node.left)\n    print(current_node.value)\n    dfs(current_node.right)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def dfs(root):\n  if root is None:\n    return\n\n  node_stack = []\n  node_stack.append(root)\n\n  while(len(node_stack) > 0):\n    current = node_stack.pop()\n\n    # Note that right child is pushed first so that left is processed first\n    if current.right:\n      node_stack.append(current.right)\n\n    print(current.value)\n\n    if current.left:\n      node_stack.append(current.left)\n")),(0,a.kt)("h4",{id:"preorder-root-left-right"},"Preorder (Root, Left, Right)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Visit the root."),(0,a.kt)("li",{parentName:"ol"},"Traverse the left subtree, i.e., call Preorder(left-subtree)"),(0,a.kt)("li",{parentName:"ol"},"Traverse the right subtree, i.e., call Preorder(right-subtree)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def dfs(current_node):\n  if current_node:\n    print(current_node.value)\n    dfs(current_node.left)\n    dfs(current_node.right)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def dfs(root):\n  if root is None:\n    return\n\n  node_stack = []\n  node_stack.append(root)\n\n  while(len(node_stack) > 0):\n    current = node_stack.pop()\n    print(current.value)\n\n    # Note that right child is pushed first so that left is processed first\n    if current.right:\n      node_stack.append(current.right)\n    if current.left:\n      node_stack.append(current.left)\n")),(0,a.kt)("h4",{id:"postorder-left-right-root"},"Postorder (Left, Right, Root)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Traverse the left subtree, i.e., call Postorder(left-subtree)"),(0,a.kt)("li",{parentName:"ol"},"Traverse the right subtree, i.e., call Postorder(right-subtree)"),(0,a.kt)("li",{parentName:"ol"},"Visit the root.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def dfs(current_node):\n  if current_node:\n    dfs(current_node.left)\n    dfs(current_node.right)\n    print(current_node.value)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def dfs(root):\n  if root is None:\n    return\n\n  node_stack = []\n  node_stack.append(root)\n\n  while(len(node_stack) > 0):\n    current = node_stack.pop()\n\n    # Note that right child is pushed first so that left is processed first\n    if current.right:\n      node_stack.append(current.right)\n    if current.left:\n      node_stack.append(current.left)\n\n    print(current.value)\n")))}p.isMDXComponent=!0}}]);