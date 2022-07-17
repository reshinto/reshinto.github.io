"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[7877],{3905:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>f});var t=n(67294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),u=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},d=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=i,m=p["".concat(s,".").concat(f)]||p[f]||c[f]||a;return n?t.createElement(m,o(o({ref:r},d),{},{components:n})):t.createElement(m,o({ref:r},d))}));function f(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},29649:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var t=n(87462),i=(n(67294),n(3905));const a={},o="Example 2",l={unversionedId:"interviewPrep/designPatterns/Creational_patterns/Builder/swift/example2",id:"interviewPrep/designPatterns/Creational_patterns/Builder/swift/example2",title:"Example 2",description:"",source:"@site/docs/interviewPrep/designPatterns/Creational_patterns/Builder/swift/example2.md",sourceDirName:"interviewPrep/designPatterns/Creational_patterns/Builder/swift",slug:"/interviewPrep/designPatterns/Creational_patterns/Builder/swift/example2",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Builder/swift/example2",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Creational_patterns/Builder/swift/example2.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Swift Example",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Builder/swift/"},next:{title:"TypeScript Example",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Builder/typescript/"}},s={},u=[],d={toc:u};function c(e){let{components:r,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"example-2"},"Example 2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'import Foundation\nimport XCTest\n\n\nclass BaseQueryBuilder<Model: DomainModel> {\n\n    typealias Predicate = (Model) -> (Bool)\n\n    func limit(_ limit: Int) -> BaseQueryBuilder<Model> {\n        return self\n    }\n\n    func filter(_ predicate: @escaping Predicate) -> BaseQueryBuilder<Model> {\n        return self\n    }\n\n    func fetch() -> [Model] {\n        preconditionFailure("Should be overridden in subclasses.")\n    }\n}\n\nclass RealmQueryBuilder<Model: DomainModel>: BaseQueryBuilder<Model> {\n\n    enum Query {\n        case filter(Predicate)\n        case limit(Int)\n        /// ...\n    }\n\n    fileprivate var operations = [Query]()\n\n    @discardableResult\n    override func limit(_ limit: Int) -> RealmQueryBuilder<Model> {\n        operations.append(Query.limit(limit))\n        return self\n    }\n\n    @discardableResult\n    override func filter(_ predicate: @escaping Predicate) -> RealmQueryBuilder<Model> {\n        operations.append(Query.filter(predicate))\n        return self\n    }\n\n    override func fetch() -> [Model] {\n        print("RealmQueryBuilder: Initializing CoreDataProvider with \\(operations.count) operations:")\n        return RealmProvider().fetch(operations)\n    }\n}\n\nclass CoreDataQueryBuilder<Model: DomainModel>: BaseQueryBuilder<Model> {\n\n    enum Query {\n        case filter(Predicate)\n        case limit(Int)\n        case includesPropertyValues(Bool)\n        /// ...\n    }\n\n    fileprivate var operations = [Query]()\n\n    override func limit(_ limit: Int) -> CoreDataQueryBuilder<Model> {\n        operations.append(Query.limit(limit))\n        return self\n    }\n\n    override func filter(_ predicate: @escaping Predicate) -> CoreDataQueryBuilder<Model> {\n        operations.append(Query.filter(predicate))\n        return self\n    }\n\n    func includesPropertyValues(_ toggle: Bool) -> CoreDataQueryBuilder<Model> {\n        operations.append(Query.includesPropertyValues(toggle))\n        return self\n    }\n\n    override func fetch() -> [Model] {\n        print("CoreDataQueryBuilder: Initializing CoreDataProvider with \\(operations.count) operations.")\n        return CoreDataProvider().fetch(operations)\n    }\n}\n\n\n/// Data Providers contain a logic how to fetch models. Builders accumulate\n/// operations and then update providers to fetch the data.\n\nclass RealmProvider {\n\n    func fetch<Model: DomainModel>(_ operations: [RealmQueryBuilder<Model>.Query]) -> [Model] {\n\n        print("RealmProvider: Retrieving data from Realm...")\n\n        for item in operations {\n            switch item {\n            case .filter(_):\n                print("RealmProvider: executing the \'filter\' operation.")\n                /// Use Realm instance to filter results.\n                break\n            case .limit(_):\n                print("RealmProvider: executing the \'limit\' operation.")\n                /// Use Realm instance to limit results.\n                break\n            }\n        }\n\n        /// Return results from Realm\n        return []\n    }\n}\n\nclass CoreDataProvider {\n\n    func fetch<Model: DomainModel>(_ operations: [CoreDataQueryBuilder<Model>.Query]) -> [Model] {\n\n        /// Create a NSFetchRequest\n\n        print("CoreDataProvider: Retrieving data from CoreData...")\n\n        for item in operations {\n            switch item {\n            case .filter(_):\n                print("CoreDataProvider: executing the \'filter\' operation.")\n                /// Set a \'predicate\' for a NSFetchRequest.\n                break\n            case .limit(_):\n                print("CoreDataProvider: executing the \'limit\' operation.")\n                /// Set a \'fetchLimit\' for a NSFetchRequest.\n                break\n            case .includesPropertyValues(_):\n                print("CoreDataProvider: executing the \'includesPropertyValues\' operation.")\n                /// Set an \'includesPropertyValues\' for a NSFetchRequest.\n                break\n            }\n        }\n\n        /// Execute a NSFetchRequest and return results.\n        return []\n    }\n}\n\n\nprotocol DomainModel {\n    /// The protocol groups domain models to the common interface\n}\n\nprivate struct User: DomainModel {\n    let id: Int\n    let age: Int\n    let email: String\n}\n\n\nclass BuilderRealWorld: XCTestCase {\n\n    func testBuilderRealWorld() {\n        print("Client: Start fetching data from Realm")\n        clientCode(builder: RealmQueryBuilder<User>())\n\n        print()\n\n        print("Client: Start fetching data from CoreData")\n        clientCode(builder: CoreDataQueryBuilder<User>())\n    }\n\n    fileprivate func clientCode(builder: BaseQueryBuilder<User>) {\n\n        let results = builder.filter({ $0.age < 20 })\n            .limit(1)\n            .fetch()\n\n        print("Client: I have fetched: " + String(results.count) + " records.")\n    }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Client: Start fetching data from Realm\nRealmQueryBuilder: Initializing CoreDataProvider with 2 operations:\nRealmProvider: Retrieving data from Realm...\nRealmProvider: executing the 'filter' operation.\nRealmProvider: executing the 'limit' operation.\nClient: I have fetched: 0 records.\n\nClient: Start fetching data from CoreData\nCoreDataQueryBuilder: Initializing CoreDataProvider with 2 operations.\nCoreDataProvider: Retrieving data from CoreData...\nCoreDataProvider: executing the 'filter' operation.\nCoreDataProvider: executing the 'limit' operation.\nClient: I have fetched: 0 records.\n")))}c.isMDXComponent=!0}}]);