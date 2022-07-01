"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[5019],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),k=a,m=c["".concat(s,".").concat(k)]||c[k]||d[k]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="SSH Guide",l={unversionedId:"others/setupSSH",id:"others/setupSSH",title:"SSH Guide",description:"Check for existing SSH keys",source:"@site/docs/others/setupSSH.md",sourceDirName:"others",slug:"/others/setupSSH",permalink:"/docs/others/setupSSH",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/others/setupSSH.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Linux terminal commands",permalink:"/docs/others/linux"},next:{title:"Husky",permalink:"/docs/pre-hooks/javascript/husky/"}},s={},p=[{value:"Check for existing SSH keys",id:"check-for-existing-ssh-keys",level:2},{value:"MAC OS",id:"mac-os",level:3},{value:"Generate a new SSH key",id:"generate-a-new-ssh-key",level:2},{value:"Adding SSH key to the ssh-agent",id:"adding-ssh-key-to-the-ssh-agent",level:2},{value:"Adding a new SSH key to your server that you want to SSH to",id:"adding-a-new-ssh-key-to-your-server-that-you-want-to-ssh-to",level:2},{value:"Add server identity to your pc&#39;s known host",id:"add-server-identity-to-your-pcs-known-host",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ssh-guide"},"SSH Guide"),(0,a.kt)("h2",{id:"check-for-existing-ssh-keys"},"Check for existing SSH keys"),(0,a.kt)("h3",{id:"mac-os"},"MAC OS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"open terminal and type ```ls ~/.ssh"),(0,a.kt)("li",{parentName:"ul"},"check if the directory has one of the following public SSH keys")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"id_rsa.pub\nid_ecdsa.pub\nid_ed25519.pub\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"if none of it exist, generation of a new SSH key would be required")),(0,a.kt)("h2",{id:"generate-a-new-ssh-key"},"Generate a new SSH key"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"open terminal with the following command",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},'ssh-keygen -t ed25519 -C "',(0,a.kt)("a",{parentName:"p",href:"mailto:your_email@example.com"},"your_email@example.com"),'"'),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"If you are using a legacy system that doesn't support the Ed25519 algorithm, use:\nssh-keygen -t rsa -b 4096 -C \"",(0,a.kt)("a",{parentName:"li",href:"mailto:your_email@example.com"},"your_email@example.com"),'"')))),(0,a.kt)("li",{parentName:"ul"},"you will get the following prompt message, just press enter to save at default file location")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Generating public/private ed25519 key pair.\nEnter file in which to save the key (/Users/yourusername/.ssh/id_ed25519):\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"you will get the next prompt, key is a password for easy access")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Enter passphrase (empty for no passphrase):\nEnter same passphrase again:\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"when completed, you will get something like the following")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Your identification has been saved in /Users/yourusername/.ssh/id_ed25519.\nYour public key has been saved in /Users/yourusername/.ssh/id_ed25519.pub.\nThe key fingerprint is:\nSHA256:kgkYKGY+hjkbfcHKBVBUYVYVWbhlbfVYK your_email@example.com\nThe key's randomart image is:\n+--[ED25519 256]--+\n|    o.+.= .      |\n|   . - o + .     |\n|    . . * .      |\n|   . + @ +       |\n|  . O - S .      |\n| o.ooo   +       |\n|  +Boo+   o      |\n|  ==E0 + .       |\n| .oo+.. .        |\n+----[SHA256]-----+\n")),(0,a.kt)("h2",{id:"adding-ssh-key-to-the-ssh-agent"},"Adding SSH key to the ssh-agent"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"start the ssh-agent in the background",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},'eval "$(ssh-agent -s)"'))),(0,a.kt)("li",{parentName:"ul"},"you will get something like the following\n",(0,a.kt)("inlineCode",{parentName:"li"},"Agent pid 59566")),(0,a.kt)("li",{parentName:"ul"},"modify the ",(0,a.kt)("inlineCode",{parentName:"li"},"~/.ssh/config")," file to automatically load keys into the ssh-agent and store passphrases in the keychain",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"create file if it does not exist"),(0,a.kt)("li",{parentName:"ul"},"file contents should have something like the following")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"Host *\n  AddKeysToAgent yes\n  UseKeychain yes\n  IdentityFile ~/.ssh/id_ed25519\n")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UseKeyChain")," can be omitted if passphrase was not used"),(0,a.kt)("li",{parentName:"ul"},"if an error ",(0,a.kt)("inlineCode",{parentName:"li"},"/Users/USER/.ssh/config: line 16: Bad configuration option: usekeychain")," occur",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"add an additional line in the config file under Host ",(0,a.kt)("inlineCode",{parentName:"li"},"IgnoreUnknown UseKeychain")))))),(0,a.kt)("li",{parentName:"ul"},"add SSH private key to the ssh-agent and store passphrase in the keychain, omit ",(0,a.kt)("inlineCode",{parentName:"li"},"-K")," if not using passphrase",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"ssh-add -K ~/.ssh/id_ed25519"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"you will be prompty with")),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},"Enter passphrase for /Users/yourusername/.ssh/id_ed25519:\n")),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},"Identity added: /Users/yourusername/.ssh/id_ed25519 (your_email@example.com)\n"))))),(0,a.kt)("h2",{id:"adding-a-new-ssh-key-to-your-server-that-you-want-to-ssh-to"},"Adding a new SSH key to your server that you want to SSH to"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"copy the SSH public key",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"pbcopy < ~/.ssh/id_ed25519.pub"))),(0,a.kt)("li",{parentName:"ul"},"add and paste this value into the SSH key field in your server")),(0,a.kt)("h2",{id:"add-server-identity-to-your-pcs-known-host"},"Add server identity to your pc's known host"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"you will get a prompt similar to this")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"The authenticity of host 'someonlineserver.com (11.12.123.123)' can't be established.\nRSA key fingerprint is SHA256:kjlnfe7o8GBLU7o42ulgob24ofbuy.\nAre you sure you want to continue connecting (yes/no/[fingerprint])?\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"if type ",(0,a.kt)("inlineCode",{parentName:"li"},"yes")," it would be added to your ",(0,a.kt)("inlineCode",{parentName:"li"},"~/.ssh/known_hosts")," file")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Warning: Permanently added 'github.com,11.12.123.123' (RSA) to the list of known hosts.\n")))}d.isMDXComponent=!0}}]);