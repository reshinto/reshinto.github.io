"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[434],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,v=u["".concat(o,".").concat(h)]||u[h]||m[h]||i;return n?a.createElement(v,s(s({ref:t},p),{},{components:n})):a.createElement(v,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},s="Long-Polling vs WebSockets vs Server-Sent Events",l={unversionedId:"interviewPrep/system_design/long-polling_vs_websockets_vs_server-sent_events",id:"interviewPrep/system_design/long-polling_vs_websockets_vs_server-sent_events",title:"Long-Polling vs WebSockets vs Server-Sent Events",description:"- What is the difference between Long-Polling, WebSockets, and Server-Sent Events?",source:"@site/docs/interviewPrep/system_design/long-polling_vs_websockets_vs_server-sent_events.md",sourceDirName:"interviewPrep/system_design",slug:"/interviewPrep/system_design/long-polling_vs_websockets_vs_server-sent_events",permalink:"/docs/interviewPrep/system_design/long-polling_vs_websockets_vs_server-sent_events",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/system_design/long-polling_vs_websockets_vs_server-sent_events.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Indexes",permalink:"/docs/interviewPrep/system_design/indexes"},next:{title:"Microservices",permalink:"/docs/interviewPrep/system_design/microservices/"}},o={},c=[{value:"Ajax Polling",id:"ajax-polling",level:2},{value:"HTTP Long-Polling",id:"http-long-polling",level:2},{value:"WebSockets",id:"websockets",level:2},{value:"Server-Sent Events (SSEs)",id:"server-sent-events-sses",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"long-polling-vs-websockets-vs-server-sent-events"},"Long-Polling vs WebSockets vs Server-Sent Events"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What is the difference between Long-Polling, WebSockets, and Server-Sent Events?"),(0,r.kt)("li",{parentName:"ul"},"Long-Polling, WebSockets, and Server-Sent Events are popular communication protocols between a client",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"like a web browser and a web server"),(0,r.kt)("li",{parentName:"ul"},"sequence of events for regular HTTP request: 1. The client opens a connection and requests data from the server 2. The server calculates the response 3. The server sends the response back to the client on the opened request\n",(0,r.kt)("img",{parentName:"li",src:"https://github.com/reshinto/Basic_technologies_revision/raw/master/interviewPrep/system_design/images/httpProtocol.png",alt:"alt text",title:"HTTP Protocol"}))))),(0,r.kt)("h2",{id:"ajax-polling"},"Ajax Polling"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Polling is a standard technique used by the vast majority of AJAX applications",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The basic idea is that the client repeatedly polls (or requests) a server for data"),(0,r.kt)("li",{parentName:"ul"},"The client makes a request and waits for the server to respond with data"),(0,r.kt)("li",{parentName:"ul"},"If no data is available, an empty response is returned")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"The client opens a connection and requests data from the server using regular HTTP"),(0,r.kt)("li",{parentName:"ol"},"The requested webpage sends requests to the server at regular intervals (e.g., 0.5 seconds)"),(0,r.kt)("li",{parentName:"ol"},"The server calculates the response and sends it back, just like regular HTTP traffic"),(0,r.kt)("li",{parentName:"ol"},"The client repeats the above three steps periodically to get updates from the server"))),(0,r.kt)("li",{parentName:"ul"},"The problem with Polling is that the client has to keep asking the server for any new data",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"As a result, a lot of responses are empty, creating HTTP overhead\n",(0,r.kt)("img",{parentName:"li",src:"https://github.com/reshinto/Basic_technologies_revision/raw/master/interviewPrep/system_design/images/ajaxPollingProtocol.png",alt:"alt text",title:"Ajax Polling Protocol"}))))),(0,r.kt)("h2",{id:"http-long-polling"},"HTTP Long-Polling"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This is a variation of the traditional polling technique",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"that allows the server to push information to a client whenever the data is available"),(0,r.kt)("li",{parentName:"ul"},"With Long-Polling, the client requests information from the server exactly as in normal polling",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"but with the expectation that the server may not respond immediately"),(0,r.kt)("li",{parentName:"ul"},"That\u2019s why this technique is sometimes referred to as a \u201cHanging GET\u201d",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the server does not have any data available for the client",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"instead of sending an empty response",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the server holds the request and waits until some data becomes available"))))),(0,r.kt)("li",{parentName:"ul"},"Once the data becomes available",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"a full response is sent to the client"),(0,r.kt)("li",{parentName:"ul"},"The client then immediately re-request information from the server",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"so that the server will almost always have an available waiting request",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"that it can use to deliver data in response to an event"))))))))))))),(0,r.kt)("li",{parentName:"ul"},"The basic life cycle of an application using HTTP Long-Polling is as follows:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"The client makes an initial request using regular HTTP and then waits for a response"),(0,r.kt)("li",{parentName:"ol"},"The server delays its response until an update is available or a timeout has occurred"),(0,r.kt)("li",{parentName:"ol"},"When an update is available, the server sends a full response to the client"),(0,r.kt)("li",{parentName:"ol"},"The client typically sends a new long-poll request",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"either immediately upon receiving a response or after a pause to allow an acceptable latency period"))),(0,r.kt)("li",{parentName:"ol"},"Each Long-Poll request has a timeout ","*"," The client has to reconnect periodically after the connection is closed due to timeouts\n",(0,r.kt)("img",{parentName:"li",src:"https://github.com/reshinto/Basic_technologies_revision/raw/master/interviewPrep/system_design/images/longPollingProtocol.png",alt:"alt text",title:"Long Polling Protocol"}))))),(0,r.kt)("h2",{id:"websockets"},"WebSockets"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"WebSocket provides Full duplex communication channels over a single TCP connection"),(0,r.kt)("li",{parentName:"ul"},"It provides a persistent connection between a client and a server",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"that both parties can use to start sending data at any time"),(0,r.kt)("li",{parentName:"ul"},"The client establishes a WebSocket connection through a process known as the WebSocket handshake\n",(0,r.kt)("em",{parentName:"li"}," If the process succeeds, then the server and client can exchange data in both directions at any time\n")," The WebSocket protocol enables communication between a client and a server with lower overheads\n",(0,r.kt)("em",{parentName:"li"}," facilitating real-time data transfer from and to the server\n")," This is made possible by providing a standardized way for the server to send content to the browser\n",(0,r.kt)("em",{parentName:"li"}," without being asked by the client\n")," and allowing for messages to be passed back and forth while keeping the connection open ","*"," In this way, a two-way (bi-directional) ongoing conversation can take place between a client and a server\n",(0,r.kt)("img",{parentName:"li",src:"https://github.com/reshinto/Basic_technologies_revision/raw/master/interviewPrep/system_design/images/websocketsProtocol.png",alt:"alt text",title:"WebSockets Protocol"}))))),(0,r.kt)("h2",{id:"server-sent-events-sses"},"Server-Sent Events (SSEs)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Under SSEs the client establishes a persistent and long-term connection with the server"),(0,r.kt)("li",{parentName:"ul"},"The server uses this connection to send data to a client"),(0,r.kt)("li",{parentName:"ul"},"If the client wants to send data to the server",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"it would require the use of another technology/protocol to do so",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Client requests data from a server using regular HTTP"),(0,r.kt)("li",{parentName:"ol"},"The requested webpage opens a connection to the server"),(0,r.kt)("li",{parentName:"ol"},"The server sends the data to the client whenever there\u2019s new information available"))))),(0,r.kt)("li",{parentName:"ul"},"SSEs are best when we need real-time traffic from the server to the client",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"or if the server is generating data in a loop and will be sending multiple events to the client\n",(0,r.kt)("img",{parentName:"li",src:"https://github.com/reshinto/Basic_technologies_revision/raw/master/interviewPrep/system_design/images/serverSentEventsProtocol.png",alt:"alt text",title:"Server Sent Events Protocol"}))))))}m.isMDXComponent=!0}}]);