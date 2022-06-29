"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[2788],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),o=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=o(r),m=n,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?a.createElement(y,l(l({ref:t},p),{},{components:r})):a.createElement(y,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var o=2;o<i;o++)l[o]=r[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3474:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var a=r(7462),n=(r(7294),r(3905));const i={},l="Security and HTTPS",s={unversionedId:"interviewPrep/system_design/24SecurityAndHttps/readme",id:"interviewPrep/system_design/24SecurityAndHttps/readme",title:"Security and HTTPS",description:"encryption",source:"@site/docs/interviewPrep/system_design/24SecurityAndHttps/readme.md",sourceDirName:"interviewPrep/system_design/24SecurityAndHttps",slug:"/interviewPrep/system_design/24SecurityAndHttps/",permalink:"/docs/interviewPrep/system_design/24SecurityAndHttps/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/system_design/24SecurityAndHttps/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MapReducer example",permalink:"/docs/interviewPrep/system_design/23MapReduce/example/"},next:{title:"Symmetric Encryption example",permalink:"/docs/interviewPrep/system_design/24SecurityAndHttps/symmetricEncryptionExample/"}},c={},o=[{value:"Man-In-The-Middle Attack (MITM)",id:"man-in-the-middle-attack-mitm",level:2},{value:"Symmetric Encryption",id:"symmetric-encryption",level:2},{value:"Asymmetric Encryption",id:"asymmetric-encryption",level:2},{value:"Advanced Encryption Standard (AES)",id:"advanced-encryption-standard-aes",level:2},{value:"HyperText Transfer Protocol Secure (HTTPS)",id:"hypertext-transfer-protocol-secure-https",level:2},{value:"Transport Layer Security (TLS)",id:"transport-layer-security-tls",level:2},{value:"Secure Sockets Layer (SSL) Certificate",id:"secure-sockets-layer-ssl-certificate",level:2},{value:"Certificate Authority",id:"certificate-authority",level:2},{value:"TLS Handshake",id:"tls-handshake",level:2}],p={toc:o};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"security-and-https"},"Security and HTTPS"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"encryption",src:r(2759).Z,width:"1572",height:"658"})),(0,n.kt)("h2",{id:"man-in-the-middle-attack-mitm"},"Man-In-The-Middle Attack (MITM)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"an attack in which the attacker intercepts a line of communication that is thought to be private by its 2 communicating parties"),(0,n.kt)("li",{parentName:"ul"},"if a malicious actor intercepted and mutated an IP packet on its way from a client to a server, that would be a man-in-the-middle attack"),(0,n.kt)("li",{parentName:"ul"},"MITM attacks are the primary threat that encryption and HTTPS aim to defend against")),(0,n.kt)("h2",{id:"symmetric-encryption"},"Symmetric Encryption"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a type of encryption that relies on only a single key to both encrypt and decrypt data"),(0,n.kt)("li",{parentName:"ul"},"the key must be known to all parties involved in communication and must be shared between parties at 1 point or another"),(0,n.kt)("li",{parentName:"ul"},"Symmetric-key algorithms tend to be faster than their asymmetric counterparts"),(0,n.kt)("li",{parentName:"ul"},"the most widely used symmetric-key algorithms are part of the Advanced Encryption Standard (AES)"),(0,n.kt)("li",{parentName:"ul"},"Symmetric encryption by itself would not solve the HTTP vulnerability",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"this is because sharing of common key between the client and server requires it to be shared over a security communications channel",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"otherwise it will still be vulnerable to MITM attack")))))),(0,n.kt)("h2",{id:"asymmetric-encryption"},"Asymmetric Encryption"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"also known as public-key encryption, it relies on 2 keys",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"a public key and private key to encrypt and decrypt data"))),(0,n.kt)("li",{parentName:"ul"},"the keys are generated using cryptographic algorithms and are mathematically connected such that data encrypted with the public key can only be decrypted with the private key"),(0,n.kt)("li",{parentName:"ul"},"while the private key must be kept secure to maintain the fidelity of this encryption paradigm, the public key can be openly shared"),(0,n.kt)("li",{parentName:"ul"},"asymmetric-key algorithms tend to be slower than their symmetric counterparts")),(0,n.kt)("h2",{id:"advanced-encryption-standard-aes"},"Advanced Encryption Standard (AES)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"is a widely used encryption standard that has 3 symmetric-key algorithms",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"AES-128, AES-192, AES-256"))),(0,n.kt)("li",{parentName:"ul"},'AES is considered to be the "gold standard" in encryption and is even used by the US National Security Agency to encrypt top secret information')),(0,n.kt)("h2",{id:"hypertext-transfer-protocol-secure-https"},"HyperText Transfer Protocol Secure (HTTPS)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"it is an extension of HTTP that's used for secure communication online"),(0,n.kt)("li",{parentName:"ul"},"it requires servers to have trusted certificates (usually SSL certificates)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"uses the Transport Layer Security (TLS), a security protocol built on top of Transmission Control Protocol (TCP)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"to encrypt data communicated between a client and a server")))))),(0,n.kt)("h2",{id:"transport-layer-security-tls"},"Transport Layer Security (TLS)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"is a security protocol over which HTTP runs in order to achieve secure communication online"),(0,n.kt)("li",{parentName:"ul"},"HTTP over TLS is also known as HTTPS")),(0,n.kt)("h2",{id:"secure-sockets-layer-ssl-certificate"},"Secure Sockets Layer (SSL) Certificate"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"is a digital certificate granted to a server by a certificate authority"),(0,n.kt)("li",{parentName:"ul"},"contains the server's public key, to be used as part of the TLS handshake process in HTTPS connection"),(0,n.kt)("li",{parentName:"ul"},"an SSL certificate effectively confirms that a public key belongs to the server claiming it belongs to them"),(0,n.kt)("li",{parentName:"ul"},"SSL certificates are a crucial defense against mam-in-the-middle attacks")),(0,n.kt)("h2",{id:"certificate-authority"},"Certificate Authority"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a trusted entity that signs digital certificates",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"namely SSL certificates that are relied on in HTTPS connections")))),(0,n.kt)("h2",{id:"tls-handshake"},"TLS Handshake"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the process through which a client and a server communicating over HTTPS exchange encryption related information and establish a secure communication"),(0,n.kt)("li",{parentName:"ul"},"the typical steps in a TLS handshake are roughly as follows",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'the client sends a client hello "a string of random bytes" to the server'),(0,n.kt)("li",{parentName:"ul"},'the server responds with a server hello "another string of random bytes" as well as its SSL certificate, which contains its public key'),(0,n.kt)("li",{parentName:"ul"},"the client verifies that the certificate was issued by a certificate authority and sends a premaster secret yet another string of random bytes,",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"this time encrypted with the server's public key to the server"))),(0,n.kt)("li",{parentName:"ul"},"the client and the server use the client hello, the server hello, and the premaster secret to then generate same symmetric-encryption session keys",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"- to be used to encrypt and decrypt all data communicated during the remainder of the connection\n")),(0,n.kt)("img",{alt:"tlsHandshake",src:r(1270).Z,width:"1438",height:"748"}))))))}u.isMDXComponent=!0},2759:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/encryption-d07b62297460a6a6e0d0fac5f647f9f8.png"},1270:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/tlsHandshake-2004b260ab0efb7e53210477d2adf5d6.png"}}]);