"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[5772],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=u(a),c=r,b=h["".concat(l,".").concat(c)]||h[c]||m[c]||s;return a?i.createElement(b,n(n({ref:t},p),{},{components:a})):i.createElement(b,n({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,n=new Array(s);n[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,n[1]=o;for(var u=2;u<s;u++)n[u]=a[u];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},308:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var i=a(7462),r=(a(7294),a(3905));const s={},n="Publish / Subscribe Pattern",o={unversionedId:"interviewPrep/system_design/22PublishSubscribePattern/readme",id:"interviewPrep/system_design/22PublishSubscribePattern/readme",title:"Publish / Subscribe Pattern",description:"- often shortened as Pub/Sub",source:"@site/docs/interviewPrep/system_design/22PublishSubscribePattern/readme.md",sourceDirName:"interviewPrep/system_design/22PublishSubscribePattern",slug:"/interviewPrep/system_design/22PublishSubscribePattern/",permalink:"/docs/interviewPrep/system_design/22PublishSubscribePattern/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/system_design/22PublishSubscribePattern/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Logging and Monitoring",permalink:"/docs/interviewPrep/system_design/21LoggingAndMonitoring/"},next:{title:"Publish / Subscribe Example",permalink:"/docs/interviewPrep/system_design/22PublishSubscribePattern/example/"}},l={},u=[{value:"When to use example",id:"when-to-use-example",level:2},{value:"Pub/Sub tools",id:"pubsub-tools",level:2},{value:"Apache Kafka",id:"apache-kafka",level:3},{value:"Google Cloud Pub/Sub",id:"google-cloud-pubsub",level:3},{value:"Terms Used",id:"terms-used",level:2},{value:"Idempotent Operation",id:"idempotent-operation",level:3}],p={toc:u};function m(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"publish--subscribe-pattern"},"Publish / Subscribe Pattern"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"often shortened as Pub/Sub"),(0,r.kt)("li",{parentName:"ul"},"often come with very powerful guarantees like at-least-once delivery, persistent storage, ordering of messages, and replayability of messages"),(0,r.kt)("li",{parentName:"ul"},"it is a popular messaging model that consists of publishers and subscribers",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"publishers publish messages to special topics (sometimes called channels) without caring about or even knowing who will read those messages",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"they are the servers where their job is to publish data to the topics and not to the clients"))),(0,r.kt)("li",{parentName:"ul"},"subscribers subscribe to topics and read messages coming through those topics",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"they are the clients that are subscribed to the topics"),(0,r.kt)("li",{parentName:"ul"},"so they are listening for messages (data or information) from topics instead of from the publishers/servers"),(0,r.kt)("li",{parentName:"ul"},"when a message is pushed out to the subscriber, the subscriber would then acknowledge receipt by sending the acknowledgement (ACK) to the topic",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the message would then be flagged that it has been consumed by which subscriber"))),(0,r.kt)("li",{parentName:"ul"},"can also have content filtering of messages that they want to receive"))),(0,r.kt)("li",{parentName:"ul"},"topics",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"similar to like channels of specific information",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"each topic would have different types of data"))),(0,r.kt)("li",{parentName:"ul"},"data is being published or pushed from the publishers/servers"),(0,r.kt)("li",{parentName:"ul"},"topics act as intermediaries between publishers and subscribers is like a database solution"),(0,r.kt)("li",{parentName:"ul"},"topics also provides ordering of messages",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"as you send or publish messages to topics, they will be pushed to subscribers in the same order similar to a Queue data structure"))))),(0,r.kt)("li",{parentName:"ul"},"messages",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"it represent some form of data or operation that is relevant to the subscribers"),(0,r.kt)("li",{parentName:"ul"},"messages can be replayed in the topic if desired"),(0,r.kt)("li",{parentName:"ul"},"all messages that are gonna be published to topics are going to be stored in persistent storage in the topics - this guarantees the delivery of the messages in a particular topic to the subscriber at least once - sometimes delivery might be sent more than once - this happens when the subsriber loses connection after the message is pushed out from the topic to the subscriber, thus the subscriber is unable to send back an ACK to the topic - when subscriber reconnects back, the message in the topic would assume that the subscriber has yet to receive the message and thus will be sent to the subscriber again - this introduces the concept of Idempotent operation - if the message that is being sent is an idempotent operation, it might be bad for the system, whether it is bad or not depends on the ultimate operation - e.g.: if only 1 user can like a youtube video once, it should not increment the number of likes more than once - for this case, it is a drawback for the pub/sub system\n",(0,r.kt)("img",{alt:"pubSubExample",src:a(5862).Z,width:"2346",height:"1848"}))))))),(0,r.kt)("h2",{id:"when-to-use-example"},"When to use example"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"in the chat application, we can use streaming paradigm as a solution",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"however, if we need to expand the system, we would get some issues",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the moment the system becomes a distributed system, then we would need to think about how to handle network partitions",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"what do we do if our clients lose their connection with the servers, or servers die, what will happen to the messages, does it disappear, will clients be able to retrieve the messages if they lost connection?"))))))),(0,r.kt)("li",{parentName:"ul"},"in a stock broker example, if we have clients who were streaming or listening to servers for data about stock prices",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"they were relying on those stock prices to execute important trades",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"what would happen if there were network partition?"))))),(0,r.kt)("li",{parentName:"ul"},"therefore, the moment we start to deal with distributed systems, we have to deal with persistent storage for a lot of parts of our system",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"however, in this typical case an asynchronous operation made by the client would go to the server and then will take some time for it to be completed before going back to the client",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"this might not be something you would want to store in the typical database solution if response speed is important"))))),(0,r.kt)("li",{parentName:"ul"},"a naive solution would be to store the data at the server level, where the clients are issuing the asynchronous operations to",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"however, you probably don't want to have your storage solution or custom built storage solution at the server level",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the business logic which is what the server is doing should likely be separated out from the storage solution"),(0,r.kt)("li",{parentName:"ul"},"it would be better to separate the duties in the system"))))),(0,r.kt)("li",{parentName:"ul"},"this is where the pub/sub system comes into play")),(0,r.kt)("h2",{id:"pubsub-tools"},"Pub/Sub tools"),(0,r.kt)("h3",{id:"apache-kafka"},(0,r.kt)("a",{parentName:"h3",href:"https://kafka.apache.org/"},"Apache Kafka")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a distributed messaging system created by LinkedIn"),(0,r.kt)("li",{parentName:"ul"},"very useful when using the streaming paradigm as opposed to polling")),(0,r.kt)("h3",{id:"google-cloud-pubsub"},(0,r.kt)("a",{parentName:"h3",href:"https://cloud.google.com/pubsub"},"Google Cloud Pub/Sub")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a highly-scalable Pub/Sub messaging service created by Google"),(0,r.kt)("li",{parentName:"ul"},'Gurantees at-least-once delivery of messages and supports "rewinding" in order to reprocess messages'),(0,r.kt)("li",{parentName:"ul"},"things like sharding at the topic level, end-to-end encryption are all taken care of")),(0,r.kt)("h2",{id:"terms-used"},"Terms Used"),(0,r.kt)("h3",{id:"idempotent-operation"},"Idempotent Operation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"an operation that has the same ultimate outcome regardless of how many times it's performed"),(0,r.kt)("li",{parentName:"ul"},"it is idempotent if an operation can be performed multiple times without changing its overall effect"),(0,r.kt)("li",{parentName:"ul"},"Operations performed through a Pub/Sub messaging system typically have to be idempotent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"since Pub/Sub systems tend to allow the same messages to be consumed multiple times"))),(0,r.kt)("li",{parentName:"ul"},"e.g.:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"increasing an integer value in a database is not an idempotent operation",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"since repeating this operation will not have the same effect as if it had been performed only once"),(0,r.kt)("li",{parentName:"ul"},'conversly, setting a value to "COMPLETE" is an idempotent operation, since repeating this operation will always yield the same result',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'the value will be "COMPLETE"')))))))))}m.isMDXComponent=!0},5862:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/pubSub-2e93bbf8a3ac24b46f121c0b897a9d81.png"}}]);