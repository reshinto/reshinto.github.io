"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[48098],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(l,".").concat(f)]||u[f]||g[f]||c;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<c;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var r=n(83117),a=(n(67294),n(3905));const c={},i="Go Example",o={unversionedId:"interviewPrep/designPatterns/Behavioral_patterns/Strategy/go/readme",id:"interviewPrep/designPatterns/Behavioral_patterns/Strategy/go/readme",title:"Go Example",description:"",source:"@site/docs/interviewPrep/designPatterns/Behavioral_patterns/Strategy/go/readme.md",sourceDirName:"interviewPrep/designPatterns/Behavioral_patterns/Strategy/go",slug:"/interviewPrep/designPatterns/Behavioral_patterns/Strategy/go/",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Strategy/go/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Behavioral_patterns/Strategy/go/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"C# Example",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Strategy/cSharp/"},next:{title:"Java Example",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Strategy/java/"}},l={},p=[],s={toc:p};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"go-example"},"Go Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"package main\n\ntype cache struct {\n    storage      map[string]string\n    evictionAlgo evictionAlgo\n    capacity     int\n    maxCapacity  int\n}\n\nfunc initCache(e evictionAlgo) *cache {\n    storage := make(map[string]string)\n    return &cache{\n        storage:      storage,\n        evictionAlgo: e,\n        capacity:     0,\n        maxCapacity:  2,\n    }\n}\n\nfunc (c *cache) setEvictionAlgo(e evictionAlgo) {\n    c.evictionAlgo = e\n}\n\nfunc (c *cache) add(key, value string) {\n    if c.capacity == c.maxCapacity {\n        c.evict()\n    }\n    c.capacity++\n    c.storage[key] = value\n}\n\nfunc (c *cache) get(key string) {\n    delete(c.storage, key)\n}\n\nfunc (c *cache) evict() {\n    c.evictionAlgo.evict(c)\n    c.capacity--\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"package main\n\ntype evictionAlgo interface {\n    evict(c *cache)\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\ntype fifo struct {\n}\n\nfunc (l *fifo) evict(c *cache) {\n    fmt.Println("Evicting by fifo strategy")\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\ntype lfu struct {\n}\n\nfunc (l *lfu) evict(c *cache) {\n    fmt.Println("Evicting by lfu strategy")\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\ntype lru struct {\n}\n\nfunc (l *lru) evict(c *cache) {\n    fmt.Println("Evicting by lru strategy")\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nfunc main() {\n    lfu := &lfu{}\n    cache := initCache(lfu)\n\n    cache.add("a", "1")\n    cache.add("b", "2")\n\n    cache.add("c", "3")\n\n    lru := &lru{}\n    cache.setEvictionAlgo(lru)\n\n    cache.add("d", "4")\n\n    fifo := &fifo{}\n    cache.setEvictionAlgo(fifo)\n\n    cache.add("e", "5")\n\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Evicting by lfu strategy\nEvicting by lru strategy\nEvicting by fifo strategy\n")))}g.isMDXComponent=!0}}]);