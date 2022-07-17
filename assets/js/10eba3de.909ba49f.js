"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[2383],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),b=o,d=f["".concat(s,".").concat(b)]||f[b]||p[b]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},25418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},i="Swift Example",c={unversionedId:"interviewPrep/designPatterns/Structural_patterns/Proxy/swift/readme",id:"interviewPrep/designPatterns/Structural_patterns/Proxy/swift/readme",title:"Swift Example",description:"",source:"@site/docs/interviewPrep/designPatterns/Structural_patterns/Proxy/swift/readme.md",sourceDirName:"interviewPrep/designPatterns/Structural_patterns/Proxy/swift",slug:"/interviewPrep/designPatterns/Structural_patterns/Proxy/swift/",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Proxy/swift/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Structural_patterns/Proxy/swift/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Example 3",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Proxy/python/example3"},next:{title:"Example 2",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Proxy/swift/example2"}},s={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"swift-example"},"Swift Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'/// Proxy Design Pattern\n///\n/// Intent: Provide a surrogate or placeholder for another object to control\n/// access to the original object or to add other responsibilities.\n\nimport XCTest\n\n/// The Subject interface declares common operations for both RealSubject and\n/// the Proxy. As long as the client works with RealSubject using this\n/// interface, you\'ll be able to pass it a proxy instead of a real subject.\nprotocol Subject {\n\n    func request()\n}\n\n/// The RealSubject contains some core business logic. Usually, RealSubjects are\n/// capable of doing some useful work which may also be very slow or sensitive -\n/// e.g. correcting input data. A Proxy can solve these issues without any\n/// changes to the RealSubject\'s code.\nclass RealSubject: Subject {\n\n    func request() {\n        print("RealSubject: Handling request.")\n    }\n}\n\n/// The Proxy has an interface identical to the RealSubject.\nclass Proxy: Subject {\n\n    private var realSubject: RealSubject\n\n    /// The Proxy maintains a reference to an object of the RealSubject class.\n    /// It can be either lazy-loaded or passed to the Proxy by the client.\n    init(_ realSubject: RealSubject) {\n        self.realSubject = realSubject\n    }\n\n    /// The most common applications of the Proxy pattern are lazy loading,\n    /// caching, controlling the access, logging, etc. A Proxy can perform one\n    /// of these things and then, depending on the result, pass the execution to\n    /// the same method in a linked RealSubject object.\n    func request() {\n\n        if (checkAccess()) {\n            realSubject.request()\n            logAccess()\n        }\n    }\n\n    private func checkAccess() -> Bool {\n\n        /// Some real checks should go here.\n\n        print("Proxy: Checking access prior to firing a real request.")\n\n        return true\n    }\n\n    private func logAccess() {\n        print("Proxy: Logging the time of request.")\n    }\n}\n\n/// The client code is supposed to work with all objects (both subjects and\n/// proxies) via the Subject interface in order to support both real subjects\n/// and proxies. In real life, however, clients mostly work with their real\n/// subjects directly. In this case, to implement the pattern more easily, you\n/// can extend your proxy from the real subject\'s class.\nclass Client {\n    // ...\n    static func clientCode(subject: Subject) {\n        // ...\n        print(subject.request())\n        // ...\n    }\n    // ...\n}\n\n/// Let\'s see how it all works together.\nclass ProxyConceptual: XCTestCase {\n\n    func test() {\n        print("Client: Executing the client code with a real subject:")\n        let realSubject = RealSubject()\n        Client.clientCode(subject: realSubject)\n\n        print("\\nClient: Executing the same client code with a proxy:")\n        let proxy = Proxy(realSubject)\n        Client.clientCode(subject: proxy)\n    }\n}\n')))}p.isMDXComponent=!0}}]);