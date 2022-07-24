"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[5986],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var o=r(67294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var u=o.createContext({}),d=function(e){var n=o.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=d(e.components);return o.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=d(r),m=t,g=c["".concat(u,".").concat(m)]||c[m]||s[m]||i;return r?o.createElement(g,l(l({ref:n},p),{},{components:r})):o.createElement(g,l({ref:n},p))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,l=new Array(i);l[0]=c;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:t,l[1]=a;for(var d=2;d<i;d++)l[d]=r[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},97900:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=r(83117),t=(r(67294),r(3905));const i={},l="Go Example",a={unversionedId:"interviewPrep/designPatterns/Creational_patterns/Builder/go/readme",id:"interviewPrep/designPatterns/Creational_patterns/Builder/go/readme",title:"Go Example",description:"",source:"@site/docs/interviewPrep/designPatterns/Creational_patterns/Builder/go/readme.md",sourceDirName:"interviewPrep/designPatterns/Creational_patterns/Builder/go",slug:"/interviewPrep/designPatterns/Creational_patterns/Builder/go/",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Builder/go/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Creational_patterns/Builder/go/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"C# Example",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Builder/cSharp/"},next:{title:"Java Example",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Builder/java/"}},u={},d=[],p={toc:d};function s(e){let{components:n,...r}=e;return(0,t.kt)("wrapper",(0,o.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"go-example"},"Go Example"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},"package main\n\ntype director struct {\n    builder iBuilder\n}\n\nfunc newDirector(b iBuilder) *director {\n    return &director{\n        builder: b,\n    }\n}\n\nfunc (d *director) setBuilder(b iBuilder) {\n    d.builder = b\n}\n\nfunc (d *director) buildHouse() house {\n    d.builder.setDoorType()\n    d.builder.setWindowType()\n    d.builder.setNumFloor()\n    return d.builder.getHouse()\n}\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},"package main\n\ntype house struct {\n    windowType string\n    doorType   string\n    floor      int\n}\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\ntype iBuilder interface {\n    setWindowType()\n    setDoorType()\n    setNumFloor()\n    getHouse() house\n}\n\nfunc getBuilder(builderType string) iBuilder {\n    if builderType == "normal" {\n        return &normalBuilder{}\n    }\n\n    if builderType == "igloo" {\n        return &iglooBuilder{}\n    }\n    return nil\n}\n')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\ntype iglooBuilder struct {\n    windowType string\n    doorType   string\n    floor      int\n}\n\nfunc newIglooBuilder() *iglooBuilder {\n    return &iglooBuilder{}\n}\n\nfunc (b *iglooBuilder) setWindowType() {\n    b.windowType = "Snow Window"\n}\n\nfunc (b *iglooBuilder) setDoorType() {\n    b.doorType = "Snow Door"\n}\n\nfunc (b *iglooBuilder) setNumFloor() {\n    b.floor = 1\n}\n\nfunc (b *iglooBuilder) getHouse() house {\n    return house{\n        doorType:   b.doorType,\n        windowType: b.windowType,\n        floor:      b.floor,\n    }\n}\n')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\ntype normalBuilder struct {\n    windowType string\n    doorType   string\n    floor      int\n}\n\nfunc newNormalBuilder() *normalBuilder {\n    return &normalBuilder{}\n}\n\nfunc (b *normalBuilder) setWindowType() {\n    b.windowType = "Wooden Window"\n}\n\nfunc (b *normalBuilder) setDoorType() {\n    b.doorType = "Wooden Door"\n}\n\nfunc (b *normalBuilder) setNumFloor() {\n    b.floor = 2\n}\n\nfunc (b *normalBuilder) getHouse() house {\n    return house{\n        doorType:   b.doorType,\n        windowType: b.windowType,\n        floor:      b.floor,\n    }\n}\n')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc main() {\n    normalBuilder := getBuilder("normal")\n    iglooBuilder := getBuilder("igloo")\n\n    director := newDirector(normalBuilder)\n    normalHouse := director.buildHouse()\n\n    fmt.Printf("Normal House Door Type: %s\\n", normalHouse.doorType)\n    fmt.Printf("Normal House Window Type: %s\\n", normalHouse.windowType)\n    fmt.Printf("Normal House Num Floor: %d\\n", normalHouse.floor)\n\n    director.setBuilder(iglooBuilder)\n    iglooHouse := director.buildHouse()\n\n    fmt.Printf("\\nIgloo House Door Type: %s\\n", iglooHouse.doorType)\n    fmt.Printf("Igloo House Window Type: %s\\n", iglooHouse.windowType)\n    fmt.Printf("Igloo House Num Floor: %d\\n", iglooHouse.floor)\n\n}\n')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"Normal House Door Type: Wooden Door\nNormal House Window Type: Wooden Window\nNormal House Num Floor: 2\n\nIgloo House Door Type: Snow Door\nIgloo House Window Type: Snow Window\nIgloo House Num Floor: 1\n")))}s.isMDXComponent=!0}}]);