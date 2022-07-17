"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[4737],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},15029:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={},l="Interpreter",o={unversionedId:"interviewPrep/designPatterns/Behavioral_patterns/Interpreter/readme",id:"interviewPrep/designPatterns/Behavioral_patterns/Interpreter/readme",title:"Interpreter",description:"- Given a language, define a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language",source:"@site/docs/interviewPrep/designPatterns/Behavioral_patterns/Interpreter/readme.md",sourceDirName:"interviewPrep/designPatterns/Behavioral_patterns/Interpreter",slug:"/interviewPrep/designPatterns/Behavioral_patterns/Interpreter/",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Interpreter/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Behavioral_patterns/Interpreter/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Example 2",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Command/typescript/example2"},next:{title:"Iterator",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Iterator/"}},s={},p=[{value:"When to use",id:"when-to-use",level:2},{value:"Structure",id:"structure",level:2}],u={toc:p};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interpreter"},"Interpreter"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Given a language, define a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language")),(0,a.kt)("h2",{id:"when-to-use"},"When to use"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use when you need to create a scripting language to allow end user to customize their solution due to the complexity and advanced configuration requirements of the app",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"however, it is easier & faster to use an existing command interpreter or expression evaluator tool of the box"))),(0,a.kt)("li",{parentName:"ul"},"Use when a problem can be encoded and implemented by a simple grammar",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"when a problem is characterized by a language, it describes the problem domain which should be well-understood and well-defined"),(0,a.kt)("li",{parentName:"ul"},"the language needs to be mapped to a grammar"),(0,a.kt)("li",{parentName:"ul"},"grammars are usually hierarchical tree-like structures that step through multiple levels",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"but end up with terminal nodes (also called literals)")))))),(0,a.kt)("h2",{id:"structure"},"Structure"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Interpreter",src:r(95383).Z,width:"1074",height:"588"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"AbstractExpression / Expression",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"declares an interface for executing an operation"))),(0,a.kt)("li",{parentName:"ol"},"TerminalExpression / ThousandExpression, HundredExpression / TenExpression / OneExpression / LeafExpression",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"implements an interpret operation associated with terminal symbols in the grammar"),(0,a.kt)("li",{parentName:"ul"},"an instance is required for every terminal symbol in the sentence"))),(0,a.kt)("li",{parentName:"ol"},"NonterminalExpression / ComposedExpression",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"1 such class is required for every rule ",(0,a.kt)("inlineCode",{parentName:"li"},"R ::= R1R2...Rn")," in the grammar"),(0,a.kt)("li",{parentName:"ul"},"maintains instance variables of type AbstractExpression for each of the symbols R1 through Rn"),(0,a.kt)("li",{parentName:"ul"},"implements an Interpret operation for nonterminal symbols in the grammar",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Interpret typical calls itself recursively on the variables representing R1 through Rn"))))),(0,a.kt)("li",{parentName:"ol"},"Context",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"contains information that is global to the interpreter"))),(0,a.kt)("li",{parentName:"ol"},"Client / InterpreterApp",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"builds (or is given) an abstract syntax tree representing a particular sentence in the language that the grammar defines"),(0,a.kt)("li",{parentName:"ul"},"the abstract syntax tree is assembled from instances of the NonterminalExpression and TerminalExpression classes"),(0,a.kt)("li",{parentName:"ul"},"invokes the Interpret operation")))))}m.isMDXComponent=!0},95383:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/interpreter-e47e434b7edbbd7a2a052fc849aae1bd.png"}}]);