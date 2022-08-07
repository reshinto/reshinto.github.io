"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[90851],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(t),f=r,u=m["".concat(p,".").concat(f)]||m[f]||l[f]||i;return t?o.createElement(u,a(a({ref:n},d),{},{components:t})):o.createElement(u,a({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},81656:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=t(83117),r=(t(67294),t(3905));const i={},a="Swift Example",s={unversionedId:"interviewPrep/designPatterns/Behavioral_patterns/Mediator/swift/readme",id:"interviewPrep/designPatterns/Behavioral_patterns/Mediator/swift/readme",title:"Swift Example",description:"",source:"@site/docs/interviewPrep/designPatterns/Behavioral_patterns/Mediator/swift/readme.md",sourceDirName:"interviewPrep/designPatterns/Behavioral_patterns/Mediator/swift",slug:"/interviewPrep/designPatterns/Behavioral_patterns/Mediator/swift/",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Mediator/swift/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Behavioral_patterns/Mediator/swift/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Python Example",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Mediator/python/"},next:{title:"Example 2",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Mediator/swift/example2"}},p={},c=[],d={toc:c};function l(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"swift-example"},"Swift Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'/// Mediator Design Pattern\n///\n/// Intent: Lets you reduce chaotic dependencies between objects. The pattern\n/// restricts direct communications between the objects and forces them to\n/// collaborate only via a mediator object.\n\nimport XCTest\n\n/// The Mediator interface declares a method used by components to notify the\n/// mediator about various events. The Mediator may react to these events and\n/// pass the execution to other components.\nprotocol Mediator: AnyObject {\n\n    func notify(sender: BaseComponent, event: String)\n}\n\n/// Concrete Mediators implement cooperative behavior by coordinating several\n/// components.\nclass ConcreteMediator: Mediator {\n\n    private var component1: Component1\n    private var component2: Component2\n\n    init(_ component1: Component1, _ component2: Component2) {\n        self.component1 = component1\n        self.component2 = component2\n\n        component1.update(mediator: self)\n        component2.update(mediator: self)\n    }\n\n    func notify(sender: BaseComponent, event: String) {\n        if event == "A" {\n            print("Mediator reacts on A and triggers following operations:")\n            self.component2.doC()\n        }\n        else if (event == "D") {\n            print("Mediator reacts on D and triggers following operations:")\n            self.component1.doB()\n            self.component2.doC()\n        }\n    }\n}\n\n/// The Base Component provides the basic functionality of storing a mediator\'s\n/// instance inside component objects.\nclass BaseComponent {\n\n    fileprivate weak var mediator: Mediator?\n\n    init(mediator: Mediator? = nil) {\n        self.mediator = mediator\n    }\n\n    func update(mediator: Mediator) {\n        self.mediator = mediator\n    }\n}\n\n/// Concrete Components implement various functionality. They don\'t depend on\n/// other components. They also don\'t depend on any concrete mediator classes.\nclass Component1: BaseComponent {\n\n    func doA() {\n        print("Component 1 does A.")\n        mediator?.notify(sender: self, event: "A")\n    }\n\n    func doB() {\n        print("Component 1 does B.\\n")\n        mediator?.notify(sender: self, event: "B")\n    }\n}\n\nclass Component2: BaseComponent {\n\n    func doC() {\n        print("Component 2 does C.")\n        mediator?.notify(sender: self, event: "C")\n    }\n\n    func doD() {\n        print("Component 2 does D.")\n        mediator?.notify(sender: self, event: "D")\n    }\n}\n\n/// Let\'s see how it all works together.\nclass MediatorConceptual: XCTestCase {\n\n    func testMediatorConceptual() {\n\n        let component1 = Component1()\n        let component2 = Component2()\n\n        let mediator = ConcreteMediator(component1, component2)\n        print("Client triggers operation A.")\n        component1.doA()\n\n        print("\\nClient triggers operation D.")\n        component2.doD()\n\n        print(mediator)\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Client triggers operation A.\nComponent 1 does A.\nMediator reacts on A and triggers following operations:\nComponent 2 does C.\n\nClient triggers operation D.\nComponent 2 does D.\nMediator reacts on D and triggers following operations:\nComponent 1 does B.\n\nComponent 2 does C.\n")))}l.isMDXComponent=!0}}]);