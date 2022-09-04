"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[94691],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=i,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},20898:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(83117),i=(r(67294),r(3905));const a={},o="Swift Example",s={unversionedId:"interviewPrep/designPatterns/Creational_patterns/Builder/swift/readme",id:"interviewPrep/designPatterns/Creational_patterns/Builder/swift/readme",title:"Swift Example",description:"",source:"@site/docs/interviewPrep/designPatterns/Creational_patterns/Builder/swift/readme.md",sourceDirName:"interviewPrep/designPatterns/Creational_patterns/Builder/swift",slug:"/interviewPrep/designPatterns/Creational_patterns/Builder/swift/",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Builder/swift/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Creational_patterns/Builder/swift/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Example 2",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Builder/python/example2"},next:{title:"Example 2",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Builder/swift/example2"}},c={},u=[],l={toc:u};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"swift-example"},"Swift Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'/// Builder Design Pattern\n///\n/// Intent: Lets you construct complex objects step by step. The pattern allows\n/// you to produce different types and representations of an object using the\n/// same construction code.\n\nimport XCTest\n\n/// The Builder interface specifies methods for creating the different parts of\n/// the Product objects.\nprotocol Builder {\n\n    func producePartA()\n    func producePartB()\n    func producePartC()\n}\n\n/// The Concrete Builder classes follow the Builder interface and provide\n/// specific implementations of the building steps. Your program may have\n/// several variations of Builders, implemented differently.\nclass ConcreteBuilder1: Builder {\n\n    /// A fresh builder instance should contain a blank product object, which is\n    /// used in further assembly.\n    private var product = Product1()\n\n    func reset() {\n        product = Product1()\n    }\n\n    /// All production steps work with the same product instance.\n    func producePartA() {\n        product.add(part: "PartA1")\n    }\n\n    func producePartB() {\n        product.add(part: "PartB1")\n    }\n\n    func producePartC() {\n        product.add(part: "PartC1")\n    }\n\n    /// Concrete Builders are supposed to provide their own methods for\n    /// retrieving results. That\'s because various types of builders may create\n    /// entirely different products that don\'t follow the same interface.\n    /// Therefore, such methods cannot be declared in the base Builder interface\n    /// (at least in a statically typed programming language).\n    ///\n    /// Usually, after returning the end result to the client, a builder\n    /// instance is expected to be ready to start producing another product.\n    /// That\'s why it\'s a usual practice to call the reset method at the end of\n    /// the `getProduct` method body. However, this behavior is not mandatory,\n    /// and you can make your builders wait for an explicit reset call from the\n    /// client code before disposing of the previous result.\n    func retrieveProduct() -> Product1 {\n        let result = self.product\n        reset()\n        return result\n    }\n}\n\n/// The Director is only responsible for executing the building steps in a\n/// particular sequence. It is helpful when producing products according to a\n/// specific order or configuration. Strictly speaking, the Director class is\n/// optional, since the client can control builders directly.\nclass Director {\n\n    private var builder: Builder?\n\n    /// The Director works with any builder instance that the client code passes\n    /// to it. This way, the client code may alter the final type of the newly\n    /// assembled product.\n    func update(builder: Builder) {\n        self.builder = builder\n    }\n\n    /// The Director can construct several product variations using the same\n    /// building steps.\n    func buildMinimalViableProduct() {\n        builder?.producePartA()\n    }\n\n    func buildFullFeaturedProduct() {\n        builder?.producePartA()\n        builder?.producePartB()\n        builder?.producePartC()\n    }\n}\n\n/// It makes sense to use the Builder pattern only when your products are quite\n/// complex and require extensive configuration.\n///\n/// Unlike in other creational patterns, different concrete builders can produce\n/// unrelated products. In other words, results of various builders may not\n/// always follow the same interface.\nclass Product1 {\n\n    private var parts = [String]()\n\n    func add(part: String) {\n        self.parts.append(part)\n    }\n\n    func listParts() -> String {\n        return "Product parts: " + parts.joined(separator: ", ") + "\\n"\n    }\n}\n\n/// The client code creates a builder object, passes it to the director and then\n/// initiates the construction process. The end result is retrieved from the\n/// builder object.\nclass Client {\n    // ...\n    static func someClientCode(director: Director) {\n        let builder = ConcreteBuilder1()\n        director.update(builder: builder)\n\n        print("Standard basic product:")\n        director.buildMinimalViableProduct()\n        print(builder.retrieveProduct().listParts())\n\n        print("Standard full featured product:")\n        director.buildFullFeaturedProduct()\n        print(builder.retrieveProduct().listParts())\n\n        // Remember, the Builder pattern can be used without a Director class.\n        print("Custom product:")\n        builder.producePartA()\n        builder.producePartC()\n        print(builder.retrieveProduct().listParts())\n    }\n    // ...\n}\n\n/// Let\'s see how it all comes together.\nclass BuilderConceptual: XCTestCase {\n\n    func testBuilderConceptual() {\n        let director = Director()\n        Client.someClientCode(director: director)\n    }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Standard basic product:\nProduct parts: PartA1\n\nStandard full featured product:\nProduct parts: PartA1, PartB1, PartC1\n\nCustom product:\nProduct parts: PartA1, PartC1\n")))}d.isMDXComponent=!0}}]);