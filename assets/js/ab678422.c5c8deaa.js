"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[15523],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>u});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),v=p(t),u=i,b=v["".concat(c,".").concat(u)]||v[u]||m[u]||o;return t?n.createElement(b,a(a({ref:r},l),{},{components:t})):n.createElement(b,a({ref:r},l))}));function u(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=v;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},54221:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(83117),i=(t(67294),t(3905));const o={},a="Go Example",s={unversionedId:"interviewPrep/designPatterns/Behavioral_patterns/Observer/go/readme",id:"interviewPrep/designPatterns/Behavioral_patterns/Observer/go/readme",title:"Go Example",description:"",source:"@site/docs/interviewPrep/designPatterns/Behavioral_patterns/Observer/go/readme.md",sourceDirName:"interviewPrep/designPatterns/Behavioral_patterns/Observer/go",slug:"/interviewPrep/designPatterns/Behavioral_patterns/Observer/go/",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Observer/go/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Behavioral_patterns/Observer/go/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"C# Example",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Observer/cSharp/"},next:{title:"Java Example",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Observer/java/"}},c={},p=[],l={toc:p};function m(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"go-example"},"Go Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\ntype customer struct {\n    id string\n}\n\nfunc (c *customer) update(itemName string) {\n    fmt.Printf("Sending email to customer %s for item %s\\n", c.id, itemName)\n}\n\nfunc (c *customer) getID() string {\n    return c.id\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\ntype item struct {\n    observerList []observer\n    name         string\n    inStock      bool\n}\n\nfunc newItem(name string) *item {\n    return &item{\n        name: name,\n    }\n}\nfunc (i *item) updateAvailability() {\n    fmt.Printf("Item %s is now in stock\\n", i.name)\n    i.inStock = true\n    i.notifyAll()\n}\nfunc (i *item) register(o observer) {\n    i.observerList = append(i.observerList, o)\n}\n\nfunc (i *item) deregister(o observer) {\n    i.observerList = removeFromslice(i.observerList, o)\n}\n\nfunc (i *item) notifyAll() {\n    for _, observer := range i.observerList {\n        observer.update(i.name)\n    }\n}\n\nfunc removeFromslice(observerList []observer, observerToRemove observer) []observer {\n    observerListLength := len(observerList)\n    for i, observer := range observerList {\n        if observerToRemove.getID() == observer.getID() {\n            observerList[observerListLength-1], observerList[i] = observerList[i], observerList[observerListLength-1]\n            return observerList[:observerListLength-1]\n        }\n    }\n    return observerList\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"package main\n\ntype observer interface {\n    update(string)\n    getID() string\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"package main\n\ntype subject interface {\n    register(Observer observer)\n    deregister(Observer observer)\n    notifyAll()\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nfunc main() {\n\n    shirtItem := newItem("Nike Shirt")\n\n    observerFirst := &customer{id: "abc@gmail.com"}\n    observerSecond := &customer{id: "xyz@gmail.com"}\n\n    shirtItem.register(observerFirst)\n    shirtItem.register(observerSecond)\n\n    shirtItem.updateAvailability()\n}\n')))}m.isMDXComponent=!0}}]);