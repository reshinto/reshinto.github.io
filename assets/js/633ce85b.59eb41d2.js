"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[3003],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=u(n),d=a,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(k,l(l({ref:e},p),{},{components:n})):r.createElement(k,l({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},71634:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={},l="Sorting algorithms",o={unversionedId:"interviewPrep/algorithms_and_techniques/sorting/readme",id:"interviewPrep/algorithms_and_techniques/sorting/readme",title:"Sorting algorithms",description:"| Algorithm          | Time best case                | Time avg case                 | Time worst case               | Space      |",source:"@site/docs/interviewPrep/algorithms_and_techniques/sorting/readme.md",sourceDirName:"interviewPrep/algorithms_and_techniques/sorting",slug:"/interviewPrep/algorithms_and_techniques/sorting/",permalink:"/docs/interviewPrep/algorithms_and_techniques/sorting/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/algorithms_and_techniques/sorting/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sum of natural numbers",permalink:"/docs/interviewPrep/algorithms_and_techniques/recursion/sumOfNaturalNumbers"},next:{title:"Heap Sort",permalink:"/docs/interviewPrep/algorithms_and_techniques/sorting/heapSort"}},s={},u=[{value:"Quicksort",id:"quicksort",level:2},{value:"Bubble Sort",id:"bubble-sort",level:2},{value:"Counting Sort",id:"counting-sort",level:2},{value:"Selection Sort",id:"selection-sort",level:2}],p={toc:u};function m(t){let{components:e,...i}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sorting-algorithms"},"Sorting algorithms"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Algorithm"),(0,a.kt)("th",{parentName:"tr",align:null},"Time best case"),(0,a.kt)("th",{parentName:"tr",align:null},"Time avg case"),(0,a.kt)("th",{parentName:"tr",align:null},"Time worst case"),(0,a.kt)("th",{parentName:"tr",align:null},"Space"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Quicksort")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"O(n log n)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"O(n log n)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"O(n",(0,a.kt)("sup",null,"2"),")")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"O(log n)"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Bubble Sort")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"O(n)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"O(n",(0,a.kt)("sup",null,"2"),")")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"O(n",(0,a.kt)("sup",null,"2"),")")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"O(1)"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Counting Sort")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"O(n + k)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"O(n + k)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"O(n + k)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"O(n + k)"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Selection Sort")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"O(n",(0,a.kt)("sup",null,"2"),")")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"O(n",(0,a.kt)("sup",null,"2"),")")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"O(n",(0,a.kt)("sup",null,"2"),")")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"O(1)"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Some of them, like ",(0,a.kt)("strong",{parentName:"li"},"Quicksort")," and ",(0,a.kt)("strong",{parentName:"li"},"Merge Sort")," alongside with ",(0,a.kt)("strong",{parentName:"li"},"Heap Sort")," are based on the divide and conquer principle and are considered efficient sorting algorithms that achieve a much better time complexity of ",(0,a.kt)("inlineCode",{parentName:"li"},"\u0398(n log n)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"therefore, are also suitable for large data sets with billions of elements")))),(0,a.kt)("h2",{id:"quicksort"},"Quicksort"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"it picks an element as a pivot and partitions the array based on the pivot",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"How to pick pivot?",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Always pick the first element as a pivot"),(0,a.kt)("li",{parentName:"ul"},"Always pick the last element as a pivot (implemented below)"),(0,a.kt)("li",{parentName:"ul"},"Pick a random element as a pivot"),(0,a.kt)("li",{parentName:"ul"},"Pick median as a pivot"))))),(0,a.kt)("li",{parentName:"ul"},"The partition process is a key process",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Choose x element as pivot"),(0,a.kt)("li",{parentName:"ul"},"put x and its position in a sorted array"),(0,a.kt)("li",{parentName:"ul"},"then put all smaller elements before the pivot, and all larger elements after the pivot")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Quick Sort",src:n(84287).Z,width:"300",height:"180"})),(0,a.kt)("h2",{id:"bubble-sort"},"Bubble Sort"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"it is the most straightforward way of sorting"),(0,a.kt)("li",{parentName:"ul"},"it has the suboptimal characteristics, but it is easy to perceive")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bubble Sort",src:n(84667).Z,width:"300",height:"180"})),(0,a.kt)("h2",{id:"counting-sort"},"Counting Sort"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"it sorts the elements of an array by counting the number of occurrences of each unique element in the array"),(0,a.kt)("li",{parentName:"ul"},"It has the linear time and will take ",(0,a.kt)("inlineCode",{parentName:"li"},"O(k + n)")," time to finish",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"where ",(0,a.kt)("inlineCode",{parentName:"li"},"k")," is the value of the max element in the input array"),(0,a.kt)("li",{parentName:"ul"},"it is efficient if the range of input data is not significantly greater than the number of elements to be sorted")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Counting Sort",src:n(74612).Z,width:"825",height:"461"})),(0,a.kt)("h2",{id:"selection-sort"},"Selection Sort"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"it sorts elements by picking a minimum element from an unsorted subarray and putting it at the beginning of the sorted subarray",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"considering ascending order")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Selection Sort",src:n(71879).Z,width:"399",height:"285"})))}m.isMDXComponent=!0},84667:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/bubble-3d9a8bc54ee1ce9c8fdae83fafba130c.gif"},74612:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/counting_sort-e5e0a4ce74eaa6d9139e4b2dcae3edbd.gif"},84287:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/quicksort-1f34ac910005055a38e0a9df1ee21386.gif"},71879:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/selection_sort-2dc72dd2292ae4cf8bcf5b81ca8cd99a.webp"}}]);