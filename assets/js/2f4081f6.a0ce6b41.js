"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[727],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(r),y=o,d=f["".concat(p,".").concat(y)]||f[y]||u[y]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},46174:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={},i="Example 3",l={unversionedId:"interviewPrep/designPatterns/Structural_patterns/Proxy/python/example3",id:"interviewPrep/designPatterns/Structural_patterns/Proxy/python/example3",title:"Example 3",description:"",source:"@site/docs/interviewPrep/designPatterns/Structural_patterns/Proxy/python/example3.md",sourceDirName:"interviewPrep/designPatterns/Structural_patterns/Proxy/python",slug:"/interviewPrep/designPatterns/Structural_patterns/Proxy/python/example3",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Proxy/python/example3",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Structural_patterns/Proxy/python/example3.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Example 2",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Proxy/python/example2"},next:{title:"Swift Example",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Proxy/swift/"}},p={},s=[],c={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"example-3"},"Example 3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class Blog:\n    def read(self):\n        print("Read the blog")\n\n    def write(self):\n        print("Write the blog")\n\n\nclass Proxy:\n    def __init__(self, target):\n        self.target = target\n\n    def __getattr__(self, attr):\n        return getattr(self.target, attr)\n\n\nclass AnonUserBlogProxy(Proxy):\n    def __init__(self, blog):\n        super().__init__(blog)\n\n    def write(self):\n        print("Only authorized users can write blog posts.")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from proxy2 import Blog, AnonUserBlogProxy\n\nblog = Blog()\nblog.write()  # can write the blog\n\nproxy = AnonUserBlogProxy(blog)\nproxy.write()  # only authorized users can write the blog\n")))}u.isMDXComponent=!0}}]);