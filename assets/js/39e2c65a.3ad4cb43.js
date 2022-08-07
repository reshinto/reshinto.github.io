"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[97672],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=c(r),y=a,d=f["".concat(s,".").concat(y)]||f[y]||u[y]||o;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},24274:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(83117),a=(r(67294),r(3905));const o={},i="Example 2",p={unversionedId:"interviewPrep/designPatterns/Creational_patterns/Factory/python/example2",id:"interviewPrep/designPatterns/Creational_patterns/Factory/python/example2",title:"Example 2",description:"",source:"@site/docs/interviewPrep/designPatterns/Creational_patterns/Factory/python/example2.md",sourceDirName:"interviewPrep/designPatterns/Creational_patterns/Factory/python",slug:"/interviewPrep/designPatterns/Creational_patterns/Factory/python/example2",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Factory/python/example2",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Creational_patterns/Factory/python/example2.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Python Example",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Factory/python/"},next:{title:"Swift Example",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Factory/swift/"}},s={},c=[],l={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"example-2"},"Example 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'class ShapeInterface:\n    def draw(self): pass\n\n\nclass Circle(ShapeInterface):\n    def draw(self):\n        print("Circle.draw")\n\n\nclass Square(ShapeInterface):\n    def draw(self):\n        print("Square.draw")\n\n\nclass ShapeFactory:\n    @staticmethod\n    def getShape(type):\n        if type == \'Cirle\':\n            return Circle()\n        if type == \'Square\':\n            return Square()\n        assert 0, "Could not find shape " + type\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from Factory import ShapeFactory\n\nF = ShapeFactory()\ns = F.getShape("Square")\nprint(s)\ns.draw()\n')))}u.isMDXComponent=!0}}]);