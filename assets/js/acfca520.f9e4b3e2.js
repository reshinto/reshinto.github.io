"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[8697],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,k=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1496:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},l="How to configure newly created droplet with SSH",i={unversionedId:"database/cloud/DigitalOcean/Droplet/readme",id:"database/cloud/DigitalOcean/Droplet/readme",title:"How to configure newly created droplet with SSH",description:"- SSH with root",source:"@site/docs/database/cloud/DigitalOcean/Droplet/readme.md",sourceDirName:"database/cloud/DigitalOcean/Droplet",slug:"/database/cloud/DigitalOcean/Droplet/",permalink:"/docs/database/cloud/DigitalOcean/Droplet/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/database/cloud/DigitalOcean/Droplet/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AWS Cloud introduction",permalink:"/docs/database/cloud/AWS/foundational/cloudConcepts"},next:{title:"Firebase setup guide",permalink:"/docs/database/noSQL/firebase/"}},u={},s=[{value:"Create new user",id:"create-new-user",level:2},{value:"Enable SSH for new user",id:"enable-ssh-for-new-user",level:2},{value:"Other configs",id:"other-configs",level:2},{value:"disable root login and password authentication",id:"disable-root-login-and-password-authentication",level:3}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-configure-newly-created-droplet-with-ssh"},"How to configure newly created droplet with SSH"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SSH with root",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"ssh ",(0,a.kt)("a",{parentName:"p",href:"mailto:root@11.123.123.123"},"root@11.123.123.123"))))),(0,a.kt)("h2",{id:"create-new-user"},"Create new user"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"add new user",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"adduser myusername")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Adding user `myusername' ...\nAdding new group `myusername' (1000) ...\nAdding new user `myusername' (1000) with group `myusername' ...\nCreating home directory `/home/myusername' ...\nCopying files from `/etc/skel' ...\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type in user password")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"New password:\nRetype new password:\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"enter the required details")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"passwd: password updated successfully\nChanging the user information for myusername\nEnter the new value, or press ENTER for the default\n  Full Name []:\n  Room Number []:\n  Work Phone []:\n  Home Phone []:\n  Other []:\nIs the information correct? [Y/n]\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"enable sudo",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"usermod -aG sudo myusername"))),(0,a.kt)("li",{parentName:"ul"},"check if your username exist and sudo enabled",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"id myusername")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"uid=1000(myusername) gid=1000(myusername) groups=1000(myusername),27(sudo)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"login to user account",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"sudo su - myusername")))),(0,a.kt)("h2",{id:"enable-ssh-for-new-user"},"Enable SSH for new user"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"create SSH directory",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"mkdir ~/.ssh"))),(0,a.kt)("li",{parentName:"ul"},"change permission of the folder",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"chmod 700 ~/.ssh"))),(0,a.kt)("li",{parentName:"ul"},"open file",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"nano ~/.ssh/authorized_keys"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"on your local pc copy the ssh public key with ",(0,a.kt)("inlineCode",{parentName:"li"},"pbcopy < ~/.ssh/id_ed25519.pub")),(0,a.kt)("li",{parentName:"ul"},"paste the ssh public key into the file",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"ssh-ed25519 LHBSLUBLYUG'O(TGUYhkvybg76g7OUYVG'(OBL\n"))),(0,a.kt)("li",{parentName:"ul"},"change permission for this file\nchmod 600 ~/.ssh/authorized_keys")))),(0,a.kt)("li",{parentName:"ul"},"restart SSH service",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"sudo service ssh restart"))),(0,a.kt)("li",{parentName:"ul"},"test SSH login with new user",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"ssh ",(0,a.kt)("a",{parentName:"p",href:"mailto:myusername@11.123.123.123"},"myusername@11.123.123.123"))))),(0,a.kt)("h2",{id:"other-configs"},"Other configs"),(0,a.kt)("h3",{id:"disable-root-login-and-password-authentication"},"disable root login and password authentication"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"sudo vim /etc/ssh/sshd_config"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"change ",(0,a.kt)("inlineCode",{parentName:"li"},"yes")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"no"))),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},"...\nPermitRootLogin yes\n...\nPasswordAuthentication yes\n...\n")),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"reload sshd\nsudo systemctl reload sshd")),(0,a.kt)("h3",{parentName:"blockquote",id:"change-droplet-name-inside-droplet"},"change droplet name inside droplet"),(0,a.kt)("p",{parentName:"blockquote"},"sudo hostnamectl set-hostname new-host-name"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"exit from SSH and re-enter again for changes to take effect"))))}c.isMDXComponent=!0}}]);