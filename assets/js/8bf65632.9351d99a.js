"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[9496],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,k=c["".concat(s,".").concat(u)]||c[u]||d[u]||l;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},o="TCP (Transmission Control Protocol) vs UDP (User Datagram Protocol)",i={unversionedId:"interviewPrep/system_design/04NetworkProtocols/TCPvsUDP",id:"interviewPrep/system_design/04NetworkProtocols/TCPvsUDP",title:"TCP (Transmission Control Protocol) vs UDP (User Datagram Protocol)",description:"- both lies at the Layer 4 Transport in the OSI model",source:"@site/docs/interviewPrep/system_design/04NetworkProtocols/TCPvsUDP.md",sourceDirName:"interviewPrep/system_design/04NetworkProtocols",slug:"/interviewPrep/system_design/04NetworkProtocols/TCPvsUDP",permalink:"/docs/interviewPrep/system_design/04NetworkProtocols/TCPvsUDP",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/system_design/04NetworkProtocols/TCPvsUDP.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Network Protocols",permalink:"/docs/interviewPrep/system_design/04NetworkProtocols/"},next:{title:"HTTP (Hypertext Transfer Protocol)",permalink:"/docs/interviewPrep/system_design/04NetworkProtocols/http"}},s={},p=[{value:"TCP",id:"tcp",level:2},{value:"TCP Example",id:"tcp-example",level:3},{value:"UDP",id:"udp",level:2},{value:"UDP Example",id:"udp-example",level:3}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tcp-transmission-control-protocol-vs-udp-user-datagram-protocol"},"TCP (Transmission Control Protocol) vs UDP (User Datagram Protocol)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"both lies at the Layer 4 Transport in the OSI model",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"it lets multiple apps use 1 network connection simultaneously")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"the sender sends a ",(0,r.kt)("inlineCode",{parentName:"li"},"message")," wrapped by a ",(0,r.kt)("inlineCode",{parentName:"li"},"Segment"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Segment")," contains additional information",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"e.g.: source and destination port numbers"))))),(0,r.kt)("li",{parentName:"ol"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"Segment")," is then sent to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Network layer")," for further processing"),(0,r.kt)("li",{parentName:"ol"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"Segment")," will then reappear from the ",(0,r.kt)("inlineCode",{parentName:"li"},"Network layer")," in the receiver's ",(0,r.kt)("inlineCode",{parentName:"li"},"Transport layer"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Segment")," will be examined to determine the destination port"),(0,r.kt)("li",{parentName:"ul"},"it would then be unwrapped and delivered to the destination port")))))),(0,r.kt)("h2",{id:"tcp"},"TCP"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the reliable, connection based choice"),(0,r.kt)("li",{parentName:"ul"},"it is stream-oriented",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"used as a continuous flow of data"),(0,r.kt)("li",{parentName:"ul"},"split up in chunks by TCP"),(0,r.kt)("li",{parentName:"ul"},"e.g.: phone conversation"))),(0,r.kt)("li",{parentName:"ul"},"Uses of TCP",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"when data loss can't be tolerated or in-order delivery is needed",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"e.g.: file transfers, remote access (SSH)"))),(0,r.kt)("li",{parentName:"ul"},"when delivery acknowledgements are needed",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"alternative (not worth the effort): use UDP and implement acknowledgements in app for important packets")))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"pros"),(0,r.kt)("th",{parentName:"tr",align:null},"cons"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delivery acknowledgement"),(0,r.kt)("td",{parentName:"tr",align:null},"larger packets (header: 20 bytes)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"guaranteed delivery: packet would be resent if no receipt acknowledge was made"),(0,r.kt)("td",{parentName:"tr",align:null},"requires more bandwidth as it has bigger overhead: retransmission of packets, acknowledgement of packets")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"requires setting up a connection first (3 way handshake)"),(0,r.kt)("td",{parentName:"tr",align:null},"slower than UDP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"congestion control: delays transmission when network is congested"),(0,r.kt)("td",{parentName:"tr",align:null},"stateful")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"will send packets in order because segments are numbered"),(0,r.kt)("td",{parentName:"tr",align:null},"data doesn't always get sent out immediately due to side effect of congestion control")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"error detection: no technical improvement from UDP but checksum is mandatory for IPv4 and IPv6 packets"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"tcp-example"},"TCP Example"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"tcp.js")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const net = require("net");\n\nconst server = net.createServer((socket) => {\n  socket.write("Hello.");\n  socket.on("data", (data) => {\n    console.log(data.toString());\n  });\n});\n\nserver.listen(8080);\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run server"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"node tcp.js"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Make connection"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"telnet 127.0.0.1 8080"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Close connection"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"need to close at server side")))),(0,r.kt)("h2",{id:"udp"},"UDP"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"lightweight, connectionless choice"),(0,r.kt)("li",{parentName:"ul"},"it is message-oriented",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"app sends data in distinct chunks"),(0,r.kt)("li",{parentName:"ul"},"e.g.: email, text messaging"))),(0,r.kt)("li",{parentName:"ul"},"Uses of UDP",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"multimedia streaming",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"alternative: TCP",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"when its overhead doesn't deteriorate performance"),(0,r.kt)("li",{parentName:"ul"},"some firewalls block UDP for security reasons"))),(0,r.kt)("li",{parentName:"ul"},"use UDP for less overhead, send delay undesirable, data loss can be masked"))),(0,r.kt)("li",{parentName:"ul"},"small transactions",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"e.g. DBS lookups"),(0,r.kt)("li",{parentName:"ul"},"no need to create and close the connection first"))),(0,r.kt)("li",{parentName:"ul"},"Bandwidth-intensive apps that tolerate packet loss")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"pros"),(0,r.kt)("th",{parentName:"tr",align:null},"cons"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"smaller packets sizes (header: 8 bytes)"),(0,r.kt)("td",{parentName:"tr",align:null},"no acknowledgement")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"less bandwidth"),(0,r.kt)("td",{parentName:"tr",align:null},"no guaranteed delivery as it has primitive error detection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"faster than tcp"),(0,r.kt)("td",{parentName:"tr",align:null},"no error recovery when error detection is detected, corrupted segment would most likely be discarded or remains but turn on a warning flag for the app")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stateless"),(0,r.kt)("td",{parentName:"tr",align:null},"no congestion control (packets get dropped more often during congested senario)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"no connection reqired to create and maintain"),(0,r.kt)("td",{parentName:"tr",align:null},"packets can arrive out of order")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"more control over when data is sent"),(0,r.kt)("td",{parentName:"tr",align:null},"no compensation for lost packets")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"checksum is mandatory for only IPv6 packets")))),(0,r.kt)("h3",{id:"udp-example"},"UDP Example"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"udp.js"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const dgram = require("dgram");\nconst socket = dgram.createSocket("udp4"); // for IPv4\n// const socket = dgram.createSocket(\'udp6\');  // for IPv6\n\nsocket.on("message", (msg, rinfo) => {\n  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);\n});\n\nsocket.bind(8081);\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run server"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"node udp.js"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Make connection"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},'echo "hi" | nc -w1 -u 127.0.0.1 8081')))))}d.isMDXComponent=!0}}]);