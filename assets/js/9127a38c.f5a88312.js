"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[1793],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2106:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},i="The Law of Demeter",l={unversionedId:"basics/programmingParadigm/OOP/theLawOfDemeter",id:"basics/programmingParadigm/OOP/theLawOfDemeter",title:"The Law of Demeter",description:"- The purpose of the law of Demeter is lower cohesion",source:"@site/docs/basics/programmingParadigm/OOP/theLawOfDemeter.md",sourceDirName:"basics/programmingParadigm/OOP",slug:"/basics/programmingParadigm/OOP/theLawOfDemeter",permalink:"/docs/basics/programmingParadigm/OOP/theLawOfDemeter",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/basics/programmingParadigm/OOP/theLawOfDemeter.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mixins",permalink:"/docs/basics/programmingParadigm/OOP/mixins"},next:{title:"Threads",permalink:"/docs/basics/threads"}},s={},c=[{value:"Avoiding violations",id:"avoiding-violations",level:2}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-law-of-demeter"},"The Law of Demeter"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The purpose of the law of Demeter is lower cohesion"),(0,a.kt)("li",{parentName:"ul"},"The low cohesion shows that the design is of good quality"),(0,a.kt)("li",{parentName:"ul"},"Some violations of the Law of Demeter are harmless, although others are a sign that the public interface has not been segregated correctly or has not been segregated at all"),(0,a.kt)("li",{parentName:"ul"},"example",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"1. customer.bicycle.wheel.tire();\n2. customer.bicycle.wheel.rotate();\n3. Object.keys(...).sort(...).join(',');\n")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"1st and 2nd line violates the law of demeter"),(0,a.kt)("li",{parentName:"ul"},"3rd line is reasonable and does not violate the law of demeter")))),(0,a.kt)("h2",{id:"avoiding-violations"},"Avoiding violations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"how to avoid unnecessary dependency")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"problem"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"a User who have Account and this account has a plan and User has discountedPlanPrice which violate the Law of Demeter")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"abstract class User {\n  private account: Account;\n\n  discountedPlanPrice(coupon: Coupon) {\n    return coupon.discount(this.account.getPlan().getPrice());\n  }\n}\n\nclass Account {\n  private plan: Plan;\n\n  getPlan() {\n    return this.plan;\n  }\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"solution"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"One of the common ways to remove such chains is by using delegation",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A wrapper method encapsulates or hides knowledge that would otherwise be implemented in the message chain"),(0,a.kt)("li",{parentName:"ul"},"Delegation is an effective technique to avoid Law of Demeter violations, but only for behavior, not for attributes"))),(0,a.kt)("li",{parentName:"ul"},"To avoid such problems, you need to think over the application architecture in advance")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class Account {\n  private plan: Plan;\n\n  discountedPlanPrice(coupon) {\n    return coupon.discount(this.plan.getPrice());\n  }\n}\n")))))}m.isMDXComponent=!0}}]);