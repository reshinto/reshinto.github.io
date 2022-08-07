"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[43821],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62512:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(83117),o=(n(67294),n(3905));const i={},a="Swift Example",s={unversionedId:"interviewPrep/designPatterns/Behavioral_patterns/Iterator/swift/readme",id:"interviewPrep/designPatterns/Behavioral_patterns/Iterator/swift/readme",title:"Swift Example",description:"",source:"@site/docs/interviewPrep/designPatterns/Behavioral_patterns/Iterator/swift/readme.md",sourceDirName:"interviewPrep/designPatterns/Behavioral_patterns/Iterator/swift",slug:"/interviewPrep/designPatterns/Behavioral_patterns/Iterator/swift/",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Iterator/swift/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Behavioral_patterns/Iterator/swift/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Python Example",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Iterator/python/"},next:{title:"Example 2",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Iterator/swift/example2"}},l={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"swift-example"},"Swift Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'/// Iterator Design Pattern\n///\n/// Intent: Lets you traverse elements of a collection without exposing its\n/// underlying representation (list, stack, tree, etc.).\n///\n/// Swift language has a built-in iterator support:\n///\n/// - The `IteratorProtocol` provides a simple iterator protocol:\n/// https://developer.apple.com/documentation/swift/iteratorprotocol\n///\n/// - The `AnyIterator<Element>` struct provides basic iterator implementation:\n/// https://developer.apple.com/documentation/swift/anyiterator\n///\n/// In this examples we\'ll see how to use both of these mechanisms.\n\nimport XCTest\n\n/// This is a collection that we\'re going to iterate through using an iterator\n/// derived from IteratorProtocol.\nclass WordsCollection {\n\n    fileprivate lazy var items = [String]()\n\n    func append(_ item: String) {\n        self.items.append(item)\n    }\n}\n\nextension WordsCollection: Sequence {\n\n    func makeIterator() -> WordsIterator {\n        return WordsIterator(self)\n    }\n}\n\n/// Concrete Iterators implement various traversal algorithms. These classes\n/// store the current traversal position at all times.\nclass WordsIterator: IteratorProtocol {\n\n    private let collection: WordsCollection\n    private var index = 0\n\n    init(_ collection: WordsCollection) {\n        self.collection = collection\n    }\n\n    func next() -> String? {\n        defer { index += 1 }\n        return index < collection.items.count ? collection.items[index] : nil\n    }\n}\n\n\n/// This is another collection that we\'ll provide AnyIterator for traversing its\n/// items.\nclass NumbersCollection {\n\n    fileprivate lazy var items = [Int]()\n\n    func append(_ item: Int) {\n        self.items.append(item)\n    }\n}\n\nextension NumbersCollection: Sequence {\n\n    func makeIterator() -> AnyIterator<Int> {\n        var index = self.items.count - 1\n\n        return AnyIterator {\n            defer { index -= 1 }\n            return index >= 0 ? self.items[index] : nil\n        }\n    }\n}\n\n/// Client does not know the internal representation of a given sequence.\nclass Client {\n    // ...\n    static func clientCode<S: Sequence>(sequence: S) {\n        for item in sequence {\n            print(item)\n        }\n    }\n    // ...\n}\n\n/// Let\'s see how it all works together.\nclass IteratorConceptual: XCTestCase {\n\n    func testIteratorProtocol() {\n\n        let words = WordsCollection()\n        words.append("First")\n        words.append("Second")\n        words.append("Third")\n\n        print("Straight traversal using IteratorProtocol:")\n        Client.clientCode(sequence: words)\n    }\n\n    func testAnyIterator() {\n\n        let numbers = NumbersCollection()\n        numbers.append(1)\n        numbers.append(2)\n        numbers.append(3)\n\n        print("\\nReverse traversal using AnyIterator:")\n        Client.clientCode(sequence: numbers)\n    }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Straight traversal using IteratorProtocol:\nFirst\nSecond\nThird\n\nReverse traversal using AnyIterator:\n3\n2\n1\n")))}u.isMDXComponent=!0}}]);