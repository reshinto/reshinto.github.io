"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[6175],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=a,d=m["".concat(p,".").concat(u)]||m[u]||g[u]||i;return t?r.createElement(d,o(o({ref:n},c),{},{components:t})):r.createElement(d,o({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},78538:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const i={},o="Go Example",s={unversionedId:"interviewPrep/designPatterns/Creational_patterns/AbstractFactory/go/readme",id:"interviewPrep/designPatterns/Creational_patterns/AbstractFactory/go/readme",title:"Go Example",description:"- interfaces",source:"@site/docs/interviewPrep/designPatterns/Creational_patterns/AbstractFactory/go/readme.md",sourceDirName:"interviewPrep/designPatterns/Creational_patterns/AbstractFactory/go",slug:"/interviewPrep/designPatterns/Creational_patterns/AbstractFactory/go/",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/AbstractFactory/go/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Creational_patterns/AbstractFactory/go/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"C# Example",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/AbstractFactory/cSharp/"},next:{title:"Java Example",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/AbstractFactory/java/"}},p={},l=[],c={toc:l};function g(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"go-example"},"Go Example"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"interfaces"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"iShirt.go"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},"package main\n\ntype iShirt interface {\n  setLogo(logo string)\n  setSize(size int)\n  getLogo() string\n  getSize() int\n}\n\ntype shirt struct {\n  logo string\n  size int\n}\n\nfunc (s *shirt) setLogo(logo string) {\n  s.logo = logo\n}\n\nfunc (s *shirt) getLogo() string {\n  return s.logo\n}\n\nfunc (s *shirt) setSize(size int) {\n  s.size = size\n}\n\nfunc (s *shirt) getSize() int {\n  return s.size\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"iShoe.go"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},"package main\n\ntype iShoe interface {\n  setLogo(logo string)\n  setSize(size int)\n  getLogo() string\n  getSize() int\n}\n\ntype shoe struct {\n  logo string\n  size int\n}\n\nfunc (s *shoe) setLogo(logo string) {\n  s.logo = logo\n}\n\nfunc (s *shoe) getLogo() string {\n  return s.logo\n}\n\nfunc (s *shoe) setSize(size int) {\n  s.size = size\n}\n\nfunc (s *shoe) getSize() int {\n  return s.size\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"iSportsFactory.go"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\ntype iSportsFactory interface {\n  makeShoe() iShoe\n  makeShirt() iShirt\n}\n\nfunc getSportsFactory(brand string) (iSportsFactory, error) {\n  if brand == "adidas" {\n    return &adidas{}, nil\n  }\n\n  if brand == "nike" {\n    return &nike{}, nil\n  }\n\n  return nil, fmt.Errorf("Wrong brand type passed")\n}\n'))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"adidas"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"adidas.go"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\ntype adidas struct {\n}\n\nfunc (a *adidas) makeShoe() iShoe {\n  return &adidasShoe{\n    shoe: shoe{\n      logo: "adidas",\n      size: 14,\n    },\n  }\n}\n\nfunc (a *adidas) makeShirt() iShirt {\n  return &adidasShirt{\n    shirt: shirt{\n      logo: "adidas",\n      size: 14,\n    },\n  }\n}\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"adidasShirt.go"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},"package main\n\ntype adidasShirt struct {\n  shirt\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"adidasShoe.go"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},"package main\n\ntype adidasShoe struct {\n  shoe\n}\n"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"nike"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"nike.go"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\ntype nike struct {\n}\n\nfunc (n *nike) makeShoe() iShoe {\n  return &nikeShoe{\n    shoe: shoe{\n      logo: "nike",\n      size: 14,\n    },\n  }\n}\n\nfunc (n *nike) makeShirt() iShirt {\n  return &nikeShirt{\n    shirt: shirt{\n      logo: "nike",\n      size: 14,\n    },\n  }\n}\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"nikeShirt.go"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},"package main\n\ntype nikeShirt struct {\n  shirt\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"nikeShoe.go"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},"package main\n\ntype nikeShoe struct {\n  shoe\n}\n"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"main.go"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc main() {\n  adidasFactory, _ := getSportsFactory("adidas")\n  nikeFactory, _ := getSportsFactory("nike")\n\n  nikeShoe := nikeFactory.makeShoe()\n  nikeShirt := nikeFactory.makeShirt()\n\n  adidasShoe := adidasFactory.makeShoe()\n  adidasShirt := adidasFactory.makeShirt()\n\n  printShoeDetails(nikeShoe)\n  printShirtDetails(nikeShirt)\n\n  printShoeDetails(adidasShoe)\n  printShirtDetails(adidasShirt)\n}\n\nfunc printShoeDetails(s iShoe) {\n  fmt.Printf("Logo: %s", s.getLogo())\n  fmt.Println()\n  fmt.Printf("Size: %d", s.getSize())\n  fmt.Println()\n}\n\nfunc printShirtDetails(s iShirt) {\n  fmt.Printf("Logo: %s", s.getLogo())\n  fmt.Println()\n  fmt.Printf("Size: %d", s.getSize())\n  fmt.Println()\n}\n')))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Logo: nike\nSize: 14\nLogo: nike\nSize: 14\nLogo: adidas\nSize: 14\nLogo: adidas\nSize: 14\n")))}g.isMDXComponent=!0}}]);