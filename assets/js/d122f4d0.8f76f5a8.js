"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[39051],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=u(t),p=a,f=h["".concat(o,".").concat(p)]||h[p]||c[p]||i;return t?r.createElement(f,l(l({ref:n},d),{},{components:t})):r.createElement(f,l({ref:n},d))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=h;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},77901:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(83117),a=(t(67294),t(3905));const i={},l="Swift Example",s={unversionedId:"interviewPrep/designPatterns/Behavioral_patterns/ChainOfResponsibility/swift/readme",id:"interviewPrep/designPatterns/Behavioral_patterns/ChainOfResponsibility/swift/readme",title:"Swift Example",description:"",source:"@site/docs/interviewPrep/designPatterns/Behavioral_patterns/ChainOfResponsibility/swift/readme.md",sourceDirName:"interviewPrep/designPatterns/Behavioral_patterns/ChainOfResponsibility/swift",slug:"/interviewPrep/designPatterns/Behavioral_patterns/ChainOfResponsibility/swift/",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/ChainOfResponsibility/swift/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Behavioral_patterns/ChainOfResponsibility/swift/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Python Example",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/ChainOfResponsibility/python/"},next:{title:"Example 2",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/ChainOfResponsibility/swift/example2"}},o={},u=[],d={toc:u};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"swift-example"},"Swift Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'/// Chain of Responsibility Design Pattern\n///\n/// Intent: Lets you pass requests along a chain of handlers. Upon receiving a\n/// request, each handler decides either to process the request or to pass it to\n/// the next handler in the chain.\n\nimport XCTest\n\n/// The Handler interface declares a method for building the chain of handlers.\n/// It also declares a method for executing a request.\nprotocol Handler: class {\n\n    @discardableResult\n    func setNext(handler: Handler) -> Handler\n\n    func handle(request: String) -> String?\n\n    var nextHandler: Handler? { get set }\n}\n\nextension Handler {\n\n    func setNext(handler: Handler) -> Handler {\n        self.nextHandler = handler\n\n        /// Returning a handler from here will let us link handlers in a\n        /// convenient way like this:\n        /// monkey.setNext(handler: squirrel).setNext(handler: dog)\n        return handler\n    }\n\n    func handle(request: String) -> String? {\n        return nextHandler?.handle(request: request)\n    }\n}\n\n/// All Concrete Handlers either handle a request or pass it to the next handler\n/// in the chain.\nclass MonkeyHandler: Handler {\n\n    var nextHandler: Handler?\n\n    func handle(request: String) -> String? {\n        if (request == "Banana") {\n            return "Monkey: I\'ll eat the " + request + ".\\n"\n        } else {\n            return nextHandler?.handle(request: request)\n        }\n    }\n}\n\nclass SquirrelHandler: Handler {\n\n    var nextHandler: Handler?\n\n    func handle(request: String) -> String? {\n\n        if (request == "Nut") {\n            return "Squirrel: I\'ll eat the " + request + ".\\n"\n        } else {\n            return nextHandler?.handle(request: request)\n        }\n    }\n}\n\nclass DogHandler: Handler {\n\n    var nextHandler: Handler?\n\n    func handle(request: String) -> String? {\n        if (request == "MeatBall") {\n            return "Dog: I\'ll eat the " + request + ".\\n"\n        } else {\n            return nextHandler?.handle(request: request)\n        }\n    }\n}\n\n/// The client code is usually suited to work with a single handler. In most\n/// cases, it is not even aware that the handler is part of a chain.\nclass Client {\n    // ...\n    static func someClientCode(handler: Handler) {\n\n        let food = ["Nut", "Banana", "Cup of coffee"]\n\n        for item in food {\n\n            print("Client: Who wants a " + item + "?\\n")\n\n            guard let result = handler.handle(request: item) else {\n                print("  " + item + " was left untouched.\\n")\n                return\n            }\n\n            print("  " + result)\n        }\n    }\n    // ...\n}\n\n/// Let\'s see how it all works together.\nclass ChainOfResponsibilityConceptual: XCTestCase {\n\n    func test() {\n\n        /// The other part of the client code constructs the actual chain.\n\n        let monkey = MonkeyHandler()\n        let squirrel = SquirrelHandler()\n        let dog = DogHandler()\n        monkey.setNext(handler: squirrel).setNext(handler: dog)\n\n        /// The client should be able to send a request to any handler, not just\n        /// the first one in the chain.\n\n        print("Chain: Monkey > Squirrel > Dog\\n\\n")\n        Client.someClientCode(handler: monkey)\n        print()\n        print("Subchain: Squirrel > Dog\\n\\n")\n        Client.someClientCode(handler: squirrel)\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Chain: Monkey > Squirrel > Dog\n\n\nClient: Who wants a Nut?\n\nSquirrel: I'll eat the Nut.\n\nClient: Who wants a Banana?\n\nMonkey: I'll eat the Banana.\n\nClient: Who wants a Cup of coffee?\n\nCup of coffee was left untouched.\n\n\nSubchain: Squirrel > Dog\n\n\nClient: Who wants a Nut?\n\nSquirrel: I'll eat the Nut.\n\nClient: Who wants a Banana?\n\nBanana was left untouched.\n")))}c.isMDXComponent=!0}}]);