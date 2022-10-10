"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[89254],{3905:(e,t,n)=>{n.d(t,{Zo:()=>y,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},y=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),h=c(n),p=a,f=h["".concat(l,".").concat(p)]||h[p]||g[p]||i;return n?r.createElement(f,s(s({ref:t},y),{},{components:n})):r.createElement(f,s({ref:t},y))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},58494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(83117),a=(n(67294),n(3905));const i={},s="Swift Example",o={unversionedId:"interviewPrep/designPatterns/Structural_patterns/Flyweight/swift/readme",id:"interviewPrep/designPatterns/Structural_patterns/Flyweight/swift/readme",title:"Swift Example",description:"",source:"@site/docs/interviewPrep/designPatterns/Structural_patterns/Flyweight/swift/readme.md",sourceDirName:"interviewPrep/designPatterns/Structural_patterns/Flyweight/swift",slug:"/interviewPrep/designPatterns/Structural_patterns/Flyweight/swift/",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Flyweight/swift/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Structural_patterns/Flyweight/swift/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Python Example",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Flyweight/python/"},next:{title:"Example 2",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Flyweight/swift/example2"}},l={},c=[],y={toc:c};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"swift-example"},"Swift Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'/// Flyweight Design Pattern\n///\n/// Intent: Lets you fit more objects into the available amount of RAM by\n/// sharing common parts of state between multiple objects, instead of keeping\n/// all of the data in each object.\n\nimport XCTest\n\n/// The Flyweight stores a common portion of the state (also called intrinsic\n/// state) that belongs to multiple real business entities. The Flyweight\n/// accepts the rest of the state (extrinsic state, unique for each entity) via\n/// its method parameters.\nclass Flyweight {\n\n    private let sharedState: [String]\n\n    init(sharedState: [String]) {\n        self.sharedState = sharedState\n    }\n\n    func operation(uniqueState: [String]) {\n        print("Flyweight: Displaying shared (\\(sharedState)) and unique (\\(uniqueState) state.\\n")\n    }\n}\n\n/// The Flyweight Factory creates and manages the Flyweight objects. It ensures\n/// that flyweights are shared correctly. When the client requests a flyweight,\n/// the factory either returns an existing instance or creates a new one, if it\n/// doesn\'t exist yet.\nclass FlyweightFactory {\n\n    private var flyweights: [String: Flyweight]\n\n    init(states: [[String]]) {\n\n        var flyweights = [String: Flyweight]()\n\n        for state in states {\n            flyweights[state.key] = Flyweight(sharedState: state)\n        }\n\n        self.flyweights = flyweights\n    }\n\n    /// Returns an existing Flyweight with a given state or creates a new one.\n    func flyweight(for state: [String]) -> Flyweight {\n\n        let key = state.key\n\n        guard let foundFlyweight = flyweights[key] else {\n\n            print("FlyweightFactory: Can\'t find a flyweight, creating new one.\\n")\n            let flyweight = Flyweight(sharedState: state)\n            flyweights.updateValue(flyweight, forKey: key)\n            return flyweight\n        }\n        print("FlyweightFactory: Reusing existing flyweight.\\n")\n        return foundFlyweight\n    }\n\n    func printFlyweights() {\n        print("FlyweightFactory: I have \\(flyweights.count) flyweights:\\n")\n        for item in flyweights {\n            print(item.key)\n        }\n    }\n}\n\nextension Array where Element == String {\n\n    /// Returns a Flyweight\'s string hash for a given state.\n    var key: String {\n        return self.joined()\n    }\n}\n\n\nclass FlyweightConceptual: XCTestCase {\n\n    func testFlyweight() {\n\n        /// The client code usually creates a bunch of pre-populated flyweights\n        /// in the initialization stage of the application.\n\n        let factory = FlyweightFactory(states:\n        [\n            ["Chevrolet", "Camaro2018", "pink"],\n            ["Mercedes Benz", "C300", "black"],\n            ["Mercedes Benz", "C500", "red"],\n            ["BMW", "M5", "red"],\n            ["BMW", "X6", "white"]\n        ])\n\n        factory.printFlyweights()\n\n        /// ...\n\n        addCarToPoliceDatabase(factory,\n                "CL234IR",\n                "James Doe",\n                "BMW",\n                "M5",\n                "red")\n\n        addCarToPoliceDatabase(factory,\n                "CL234IR",\n                "James Doe",\n                "BMW",\n                "X1",\n                "red")\n\n        factory.printFlyweights()\n    }\n\n    func addCarToPoliceDatabase(\n            _ factory: FlyweightFactory,\n            _ plates: String,\n            _ owner: String,\n            _ brand: String,\n            _ model: String,\n            _ color: String) {\n\n        print("Client: Adding a car to database.\\n")\n\n        let flyweight = factory.flyweight(for: [brand, model, color])\n\n        /// The client code either stores or calculates extrinsic state and\n        /// passes it to the flyweight\'s methods.\n        flyweight.operation(uniqueState: [plates, owner])\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'FlyweightFactory: I have 5 flyweights:\n\nMercedes BenzC500red\nChevroletCamaro2018pink\nMercedes BenzC300black\nBMWX6white\nBMWM5red\nClient: Adding a car to database.\n\nFlyweightFactory: Reusing existing flyweight.\n\nFlyweight: Displaying shared (["BMW", "M5", "red"]) and unique (["CL234IR", "James Doe"] state.\n\nClient: Adding a car to database.\n\nFlyweightFactory: Can\'t find a flyweight, creating new one.\n\nFlyweight: Displaying shared (["BMW", "X1", "red"]) and unique (["CL234IR", "James Doe"] state.\n\nFlyweightFactory: I have 6 flyweights:\n\nMercedes BenzC500red\nBMWX1red\nChevroletCamaro2018pink\nMercedes BenzC300black\nBMWX6white\nBMWM5red\n')))}g.isMDXComponent=!0}}]);