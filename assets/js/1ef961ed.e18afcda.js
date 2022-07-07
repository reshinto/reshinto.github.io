"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[1350],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,k=c["".concat(s,".").concat(d)]||c[d]||u[d]||l;return a?r.createElement(k,i(i({ref:t},m),{},{components:a})):r.createElement(k,i({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4570:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={},i="OSI (Open System Interconnection) Model",o={unversionedId:"interviewPrep/system_design/OSI_model",id:"interviewPrep/system_design/OSI_model",title:"OSI (Open System Interconnection) Model",description:"- it defines and used to understand how data is transferred from 1 computer to another in a computer network",source:"@site/docs/interviewPrep/system_design/OSI_model.md",sourceDirName:"interviewPrep/system_design",slug:"/interviewPrep/system_design/OSI_model",permalink:"/docs/interviewPrep/system_design/OSI_model",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/system_design/OSI_model.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"REpresentational State Transfer (REST)",permalink:"/docs/interviewPrep/system_design/25ApiDesign/rest"},next:{title:"SQL (Structured Query Language) vs. NoSQL",permalink:"/docs/interviewPrep/system_design/SQL_vs_NoSQL"}},s={},p=[{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2},{value:"OSI Model contains 7 layers",id:"osi-model-contains-7-layers",level:2},{value:"Application layer (7)",id:"application-layer-7",level:3},{value:"application layer protocols",id:"application-layer-protocols",level:4},{value:"Summary",id:"summary",level:4},{value:"Presentation layer (6)",id:"presentation-layer-6",level:3},{value:"Session layer (5)",id:"session-layer-5",level:3},{value:"Transport layer (4)",id:"transport-layer-4",level:3},{value:"Segmentation",id:"segmentation",level:4},{value:"Flow Control",id:"flow-control",level:4},{value:"Error Control",id:"error-control",level:4},{value:"transport layer performs 2 types of services",id:"transport-layer-performs-2-types-of-services",level:4},{value:"Network layer (3)",id:"network-layer-3",level:3},{value:"Data Link layer (2)",id:"data-link-layer-2",level:3},{value:"performs 2 basic function",id:"performs-2-basic-function",level:4},{value:"Physical layer (1)",id:"physical-layer-1",level:3}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"osi-open-system-interconnection-model"},"OSI (Open System Interconnection) Model"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"it defines and used to understand how data is transferred from 1 computer to another in a computer network"),(0,n.kt)("li",{parentName:"ul"},"in its basic form, 2 computers are connected via a LAN (Local Area Network) cable and connector (RJ45)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"shares data with the help of NIC (Network Interface Controller) card"),(0,n.kt)("li",{parentName:"ul"},"this forms the computer network")))),(0,n.kt)("h2",{id:"problem"},"Problem"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"if 1 computer uses Windows OS, and another uses Mac OS, how would they communicate?")),(0,n.kt)("h2",{id:"solution"},"Solution"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"OSI Model was introduced by ISO (International Organization for Standardization) in 1984")),(0,n.kt)("h2",{id:"osi-model-contains-7-layers"},"OSI Model contains 7 layers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"each layer is a package of protocols\n",(0,n.kt)("img",{parentName:"li",src:"https://github.com/reshinto/Basic_technologies_revision/raw/master/interviewPrep/system_design/images/osiLayers.png",alt:"alt text",title:"OSI Layers"}))),(0,n.kt)("h3",{id:"application-layer-7"},"Application layer (7)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"this layer is used by network applications",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"network application means computer apps that uses internet",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"computer apps e.g.: chrome, firefox, outlook, skype, etc.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"these apps are a network app that runs in your PC and does not reside in the application layer",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"but uses application layer protocols to use the internet")))))))))),(0,n.kt)("h4",{id:"application-layer-protocols"},"application layer protocols"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"examples",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"HTTP (Hypertext Transfer Protocol)"),(0,n.kt)("li",{parentName:"ul"},"HTTPS (Hypertext Transfer Protocol Secure)"),(0,n.kt)("li",{parentName:"ul"},"FTP (File Transfer Protocol)"),(0,n.kt)("li",{parentName:"ul"},"NFS (Network File System)"),(0,n.kt)("li",{parentName:"ul"},"FMTP (Flight Message Transfer Protocol)"),(0,n.kt)("li",{parentName:"ul"},"DHCP (Dynamic Host Configuration Protocol)"),(0,n.kt)("li",{parentName:"ul"},"SNMP (Simple Network Management Protocol)"),(0,n.kt)("li",{parentName:"ul"},"Telnet"),(0,n.kt)("li",{parentName:"ul"},"SMTP (Simple Mail Transfer Protocol)"),(0,n.kt)("li",{parentName:"ul"},"POP3 (Post Office Protocol version 3)"),(0,n.kt)("li",{parentName:"ul"},"IRC (Internet Relay Chat)"),(0,n.kt)("li",{parentName:"ul"},"NNTP (Network News Transfer Protocol)"))),(0,n.kt)("li",{parentName:"ul"},"the application layer protocols forms the basis for various network services",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"File Transfer: uses FTP"),(0,n.kt)("li",{parentName:"ul"},"Web Surfing: HTTP/S"),(0,n.kt)("li",{parentName:"ul"},"Emails: SMTP"),(0,n.kt)("li",{parentName:"ul"},"Virtual Terminals: Telnet")))),(0,n.kt)("h4",{id:"summary"},"Summary"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"application layer provides services for network applications with the help of protocols to perform user activities")),(0,n.kt)("h3",{id:"presentation-layer-6"},"Presentation layer (6)"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Translation",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"receives data in the form of alphanumeric characters from Application layer"),(0,n.kt)("li",{parentName:"ul"},"Presentatin layer then translate the data into binary code format for the machine to understand",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"e.g.: convert ASCII (American Standard Code for Information Interchange) to EBCDIC (Extended Binary Coded Decimal Interchange Code)"))))),(0,n.kt)("li",{parentName:"ol"},"Data Compression",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"before translated data is transmitted, presentation layer will reduce the number of bits that were used to represent the original data"),(0,n.kt)("li",{parentName:"ul"},"can be in 2 type of formats",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Lossy"),(0,n.kt)("li",{parentName:"ol"},"Lossless"))),(0,n.kt)("li",{parentName:"ul"},"it reduces the amount of space used to store the original file",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"e.g.: a 5 MB file into a 2 MB file"))),(0,n.kt)("li",{parentName:"ul"},"when space is reduced, the amount of time required to transmit also reduces, thus allow data transmission to be faster",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"useful for realtime audio and video streaming"))))),(0,n.kt)("li",{parentName:"ol"},"Encryption / Decryption",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"use to maintain the integrity of data before transmission"),(0,n.kt)("li",{parentName:"ul"},"it helps to enhance the security of sensitive data",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"data gets encrypted on the sender side, and gets decrypted on the receiver side"))),(0,n.kt)("li",{parentName:"ul"},"examples:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"SSL (Secure Sockets Layer) is used for encryption and decryption")))))),(0,n.kt)("h3",{id:"session-layer-5"},"Session layer (5)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"it helps in setting up and managing connections enabling sending and receiving of data",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"followed by termination of connections or sessions"))),(0,n.kt)("li",{parentName:"ul"},"it has its own helpers called APIs (Application Programming Interface)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"examples:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"NetBIOS (Network Basic Input/Output System)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"it is an API example that allows applications on different computers to communicate with each other")))))))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Authentication",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"done before a session or connection is established with the server"),(0,n.kt)("li",{parentName:"ul"},"it is a process of verifying who you are",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"for this, server uses username and password"),(0,n.kt)("li",{parentName:"ul"},"when matched with the server, a connection or session is established between the server and your computer"))))),(0,n.kt)("li",{parentName:"ol"},"Authorization",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"after authentication, authorization is checked"),(0,n.kt)("li",{parentName:"ul"},"it is a process used by the server to determine if you have permission to access a file"))),(0,n.kt)("li",{parentName:"ol"},"Session Management",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"session layer keeps track of the files being downloaded",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"webpage example",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"it contains text and image files, and are stored as separate files on the web server"),(0,n.kt)("li",{parentName:"ul"},"when you request a website on the web browser, it opens a separate session to the web server to download each of the text and image files separately"),(0,n.kt)("li",{parentName:"ul"},"files are received at the computer in the form of ",(0,n.kt)("inlineCode",{parentName:"li"},"Data Packets")),(0,n.kt)("li",{parentName:"ul"},"Session layer keeps tracks of which data packets belongs to which file and where it goes to (web browser for this case)")))))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the web browser performs all functions of Application, Presentation, and Session layer")),(0,n.kt)("h3",{id:"transport-layer-4"},"Transport layer (4)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"controls the reliability of communication")),(0,n.kt)("h4",{id:"segmentation"},"Segmentation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"data received from the Session layer is divided into small data units called ",(0,n.kt)("inlineCode",{parentName:"li"},"Segments"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"each Segment or data unit contains",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"a source and destination Port number",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"helps to direct the segment to the correct computer application"))),(0,n.kt)("li",{parentName:"ul"},"a sequence number",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"helps to reassemble segments in the correct order to form correct message at the receiver")))))))),(0,n.kt)("h4",{id:"flow-control"},"Flow Control"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"controls the amount of data being transmitted"),(0,n.kt)("li",{parentName:"ul"},"example: a mobile app connected to a server",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"server can transmit a max data of 100 Mbps"),(0,n.kt)("li",{parentName:"ul"},"mobile can process data with a max of 10 Mbps"),(0,n.kt)("li",{parentName:"ul"},"when mobile is downloading a file from a server",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"if server sends data at 50 Mbps",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"it is a a rate the mobile can't process"),(0,n.kt)("li",{parentName:"ul"},"mobile uses the Transport layer to tell the server to slow the data transmission rate to 10 Mbps so that no data gets lost"))),(0,n.kt)("li",{parentName:"ul"},"if server sends data at 5 Mbps",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"mobile uses the Transport layer to tell the server to increase the data trasmission rate to 10 Mbps to maintain system performance")))))))),(0,n.kt)("h4",{id:"error-control"},"Error Control"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Automatic Repeat Request",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"this is used when a data unit did not arrive at the destination"),(0,n.kt)("li",{parentName:"ul"},"it helps to retransmit the lost or corrupted data unit from the server to the app"))),(0,n.kt)("li",{parentName:"ul"},"Checksum",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"it is added to each data unit by the Transport layer to find out the received corrupted or missing segment")))),(0,n.kt)("h4",{id:"transport-layer-performs-2-types-of-services"},"transport layer performs 2 types of services"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Connection-oriented Transmission",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"done via TCP (Transmission Control Protocol)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"more reliable than UDP",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"because it provides feedback",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"you will know of the data delivery status"),(0,n.kt)("li",{parentName:"ul"},"data can be retransmitted if lost or corrupted"))))),(0,n.kt)("li",{parentName:"ul"},"used when whole data delivery is a must",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"www (world wide web), email, FTP"))))))),(0,n.kt)("li",{parentName:"ol"},"Connectionless Transmission",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"done via UDP (User Datagram Protocol)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"UDP (User Datagram Protocol)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"faster than TCP",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"because it provides no feedback",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"you do not know of the data delivery status"))))),(0,n.kt)("li",{parentName:"ul"},"used when receiving of whole data is not necessary",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"e.g.: online streaming movies, songs, games, voice over ip, TFTP (Trivial File Transfer Protocol), DNS (Domain Name System)")))))))))),(0,n.kt)("h3",{id:"network-layer-3"},"Network layer (3)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Transport Layer sends data segments to the network layer"),(0,n.kt)("li",{parentName:"ul"},"Network Layer works for the transmission of the recieved data segments from one computer to another located in different networks"),(0,n.kt)("li",{parentName:"ul"},"Data Units in Network Layer is called Data Packets"),(0,n.kt)("li",{parentName:"ul"},"The Function of Network Layer are:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Logical Addressing",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"IPv4 & IPv6 + Mask",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"every computer in a network has a unique IP address"),(0,n.kt)("li",{parentName:"ul"},"Network layer assigns sender and receiver IP address to each segment to form an IP Packet",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"IP address are assigned to ensure each data packet can reached the correct destination"))),(0,n.kt)("li",{parentName:"ul"},"Mask tells that the first 3 combination of an IP address represent the which network",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"the last combination of the IP address represents which host or computer"))))))),(0,n.kt)("li",{parentName:"ol"},"Routing",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"it is a method of moving data packet from source to destination"),(0,n.kt)("li",{parentName:"ul"},"it is based on the logical addressing format (IP addresses and Mask), routing decisions are made in the computer network"))),(0,n.kt)("li",{parentName:"ol"},"Path Determination",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"a computer can be connected to an internet server or a computer in a number of ways",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"choosing the best possible path for delivery from source to destination is called path determination"))),(0,n.kt)("li",{parentName:"ul"},"examples of protocols used to determine the best possible path for delivery",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"OSPF (Open Shortest Path First)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"it is a link-state routing protocol"))),(0,n.kt)("li",{parentName:"ul"},"BGP (Border Gateway Protocol)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"it is a standardized exterior gateway protocol"))),(0,n.kt)("li",{parentName:"ul"},"IS-IS (Intermediate System to Intermediate System)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"it is a routing protocol")))))))),(0,n.kt)("h3",{id:"data-link-layer-2"},"Data Link layer (2)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Data link layer receives data packets from network layer",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Data packets contains IP addresses of sender and receiver",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"There are two types of addressing:",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Logical Addressing",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"done at the Network layer"),(0,n.kt)("li",{parentName:"ul"},"where senders and receivers IP addresses are assigned to each segments to form a data packets"))),(0,n.kt)("li",{parentName:"ol"},"Physical Addressing",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"done at the Data Link layer"),(0,n.kt)("li",{parentName:"ul"},"head is added infront of the IP packet, while the tail is added behind"),(0,n.kt)("li",{parentName:"ul"},"where MAC addresses of sender and receiver are assigned to each data packets to form a frame"),(0,n.kt)("li",{parentName:"ul"},"MAC Address is 12 digit Alpha-Character Number Data unit in data link layer is called Frame.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"it is embedded into the network card by the manufacturer"))))))))))),(0,n.kt)("li",{parentName:"ul"},"Data Unit in Data Link layer is referred to as ",(0,n.kt)("inlineCode",{parentName:"li"},"frame"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"it is embedded as a software in NIC (Network Interface Card) of the computer",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"it provide means to transfer data from 1 computer to another via a local media",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"such as copper wire, optical fiber, and air"),(0,n.kt)("li",{parentName:"ul"},"media refers to the physical links between 2 computer or networks")))))))),(0,n.kt)("h4",{id:"performs-2-basic-function"},"performs 2 basic function"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"allows upper layer of OSI Model to access the media",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"via techniques such as framing",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"IP packet gets encapsulated into a frame before sending, upon receiving it gets decapsulated",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"this process repeats itself until the data reaches its final destination"))))))),(0,n.kt)("li",{parentName:"ol"},"controls how data is placed and received from the media",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"via techniques such as media access control, and error detection",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"multiple devices could be connected via a common media",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"if 2 or more devices sends data at the same time",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"there will be a possibility of collision of the 2 messages resulting in a useless message that no recipient can understand",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"use CSMA (Carrier-Sense Multiple Access) to avoid such a situation",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"it is a (MAC) Media Access Control protocol"),(0,n.kt)("li",{parentName:"ul"},"keeps an eye on when the shared media is free so that device can transmit data to the receiver"),(0,n.kt)("li",{parentName:"ul"},"this helps to control data transmission"))),(0,n.kt)("li",{parentName:"ul"},"each frame contains bits which are used to detect errors in the receiver frame",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"errors occur due to certain limitations of the media used for transporting data")))))))))))))),(0,n.kt)("h3",{id:"physical-layer-1"},"Physical layer (1)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Till now, Data from Application Layer has been segmented by Transport Layer - placed into Packets by Network Layer"),(0,n.kt)("li",{parentName:"ul"},"and Framed by Data Link Layer",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"which is a sequence of binary 0's and 1's"))),(0,n.kt)("li",{parentName:"ul"},"physical layer converts this binary bits into signals and transmit over local media"),(0,n.kt)("li",{parentName:"ul"},"It can be an electrical signal in the case of Copper cable or LAN cable, Light signal in the case of Optical Fiber, and Radio Signal in the case of AIR",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"So signal generated by physical layer depends on the type of media used to connect two devices"))),(0,n.kt)("li",{parentName:"ul"},"At the receiver, Physical Layer receives signal and converts to bits and pass it to Data Link Layer as a Frame"),(0,n.kt)("li",{parentName:"ul"},"Frame is further decapsulated as data moves through higher layers"),(0,n.kt)("li",{parentName:"ul"},"Finally,data is moved to Application Layer"),(0,n.kt)("li",{parentName:"ul"},"Application Layer Protocol makes the sender's message visible in the application in the receiver's computer screen"),(0,n.kt)("li",{parentName:"ul"},"In this way, OSI model is helping to transfer data between different hosts",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"So, these Seven Layers of OSI model are lying behind the smooth functioning of Internet")))))}u.isMDXComponent=!0}}]);