"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[1089],{3905:(e,n,s)=>{s.d(n,{Zo:()=>p,kt:()=>m});var t=s(67294);function a(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function r(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}function i(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?r(Object(s),!0).forEach((function(n){a(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function c(e,n){if(null==e)return{};var s,t,a=function(e,n){if(null==e)return{};var s,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)s=r[t],n.indexOf(s)>=0||(a[s]=e[s]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)s=r[t],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var o=t.createContext({}),l=function(e){var n=t.useContext(o),s=n;return e&&(s="function"==typeof e?e(n):i(i({},n),e)),s},p=function(e){var n=l(e.components);return t.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var s=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=l(s),m=a,u=g["".concat(o,".").concat(m)]||g[m]||d[m]||r;return s?t.createElement(u,i(i({ref:n},p),{},{components:s})):t.createElement(u,i({ref:n},p))}));function m(e,n){var s=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=s.length,i=new Array(r);i[0]=g;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=s[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,s)}g.displayName="MDXCreateElement"},20108:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=s(87462),a=(s(67294),s(3905));const r={},i="Example 2",c={unversionedId:"interviewPrep/designPatterns/Creational_patterns/Singleton/swift/example2",id:"interviewPrep/designPatterns/Creational_patterns/Singleton/swift/example2",title:"Example 2",description:"",source:"@site/docs/interviewPrep/designPatterns/Creational_patterns/Singleton/swift/example2.md",sourceDirName:"interviewPrep/designPatterns/Creational_patterns/Singleton/swift",slug:"/interviewPrep/designPatterns/Creational_patterns/Singleton/swift/example2",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Singleton/swift/example2",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Creational_patterns/Singleton/swift/example2.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Swift Example",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Singleton/swift/"},next:{title:"TypeScript Example",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Singleton/typescript/"}},o={},l=[],p={toc:l};function d(e){let{components:n,...s}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"example-2"},"Example 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'import XCTest\n\n/// Singleton Design Pattern\n///\n/// Intent: Ensure that class has a single instance, and provide a global point\n/// of access to it.\n\nclass SingletonRealWorld: XCTestCase {\n\n    func testSingletonRealWorld() {\n\n        /// There are two view controllers.\n        ///\n        /// MessagesListVC displays a list of last messages from a user\'s chats.\n        /// ChatVC displays a chat with a friend.\n        ///\n        /// FriendsChatService fetches messages from a server and provides all\n        /// subscribers (view controllers in our example) with new and removed\n        /// messages.\n        ///\n        /// FriendsChatService is used by both view controllers. It can be\n        /// implemented as an instance of a class as well as a global variable.\n        ///\n        /// In this example, it is important to have only one instance that\n        /// performs resource-intensive work.\n\n        let listVC = MessagesListVC()\n        let chatVC = ChatVC()\n\n        listVC.startReceiveMessages()\n        chatVC.startReceiveMessages()\n\n        /// ... add view controllers to the navigation stack ...\n    }\n}\n\n\nclass BaseVC: UIViewController, MessageSubscriber {\n\n    func accept(new messages: [Message]) {\n        /// handle new messages in the base class\n    }\n\n    func accept(removed messages: [Message]) {\n        /// handle removed messages in the base class\n    }\n\n    func startReceiveMessages() {\n\n        /// The singleton can be injected as a dependency. However, from an\n        /// informational perspective, this example calls FriendsChatService\n        /// directly to illustrate the intent of the pattern, which is: "...to\n        /// provide the global point of access to the instance..."\n\n        FriendsChatService.shared.add(subscriber: self)\n    }\n}\n\nclass MessagesListVC: BaseVC {\n\n    override func accept(new messages: [Message]) {\n        print("MessagesListVC accepted \'new messages\'")\n        /// handle new messages in the child class\n    }\n\n    override func accept(removed messages: [Message]) {\n        print("MessagesListVC accepted \'removed messages\'")\n        /// handle removed messages in the child class\n    }\n\n    override func startReceiveMessages() {\n        print("MessagesListVC starts receive messages")\n        super.startReceiveMessages()\n    }\n}\n\nclass ChatVC: BaseVC {\n\n    override func accept(new messages: [Message]) {\n        print("ChatVC accepted \'new messages\'")\n        /// handle new messages in the child class\n    }\n\n    override func accept(removed messages: [Message]) {\n        print("ChatVC accepted \'removed messages\'")\n        /// handle removed messages in the child class\n    }\n\n    override func startReceiveMessages() {\n        print("ChatVC starts receive messages")\n        super.startReceiveMessages()\n    }\n}\n\n/// Protocol for call-back events\n\nprotocol MessageSubscriber {\n\n    func accept(new messages: [Message])\n    func accept(removed messages: [Message])\n}\n\n/// Protocol for communication with a message service\n\nprotocol MessageService {\n\n    func add(subscriber: MessageSubscriber)\n}\n\n/// Message domain model\n\nstruct Message {\n\n    let id: Int\n    let text: String\n}\n\n\nclass FriendsChatService: MessageService {\n\n    static let shared = FriendsChatService()\n\n    private var subscribers = [MessageSubscriber]()\n\n    func add(subscriber: MessageSubscriber) {\n\n        /// In this example, fetching starts again by adding a new subscriber\n        subscribers.append(subscriber)\n\n        /// Please note, the first subscriber will receive messages again when\n        /// the second subscriber is added\n        startFetching()\n    }\n\n    func startFetching() {\n\n        /// Set up the network stack, establish a connection...\n        /// ...and retrieve data from a server\n\n        let newMessages = [Message(id: 0, text: "Text0"),\n                           Message(id: 5, text: "Text5"),\n                           Message(id: 10, text: "Text10")]\n\n        let removedMessages = [Message(id: 1, text: "Text0")]\n\n        /// Send updated data to subscribers\n        receivedNew(messages: newMessages)\n        receivedRemoved(messages: removedMessages)\n    }\n}\n\nprivate extension FriendsChatService {\n\n    func receivedNew(messages: [Message]) {\n\n        subscribers.forEach { item in\n            item.accept(new: messages)\n        }\n    }\n\n    func receivedRemoved(messages: [Message]) {\n\n        subscribers.forEach { item in\n            item.accept(removed: messages)\n        }\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"MessagesListVC starts receive messages\nMessagesListVC accepted 'new messages'\nMessagesListVC accepted 'removed messages'\n======== At this point, the second subscriber is added ======\nChatVC starts receive messages\nMessagesListVC accepted 'new messages'\nChatVC accepted 'new messages'\nMessagesListVC accepted 'removed messages'\nChatVC accepted 'removed messages'\n")))}d.isMDXComponent=!0}}]);