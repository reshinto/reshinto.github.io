"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[25256],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>p});var l=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,l,r=function(e,t){if(null==e)return{};var i,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)i=n[l],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)i=n[l],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var d=l.createContext({}),u=function(e){var t=l.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},m=function(e){var t=u(e.components);return l.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,d=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),s=u(i),p=r,f=s["".concat(d,".").concat(p)]||s[p]||c[p]||n;return i?l.createElement(f,o(o({ref:t},m),{},{components:i})):l.createElement(f,o({ref:t},m))}));function p(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,o=new Array(n);o[0]=s;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var u=2;u<n;u++)o[u]=i[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,i)}s.displayName="MDXCreateElement"},27761:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>a,toc:()=>u});var l=i(83117),r=(i(67294),i(3905));const n={},o="Linux terminal commands",a={unversionedId:"Technologies/others/linux",id:"Technologies/others/linux",title:"Linux terminal commands",description:"linux is case-sensitive",source:"@site/docs/Technologies/others/linux.md",sourceDirName:"Technologies/others",slug:"/Technologies/others/linux",permalink:"/docs/Technologies/others/linux",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/Technologies/others/linux.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Git",permalink:"/docs/Technologies/others/gitCommands"},next:{title:"SSH Guide",permalink:"/docs/Technologies/others/setupSSH"}},d={},u=[{value:"linux is case-sensitive",id:"linux-is-case-sensitive",level:2},{value:"Current directory",id:"current-directory",level:3},{value:"Previous directory",id:"previous-directory",level:3},{value:"Home directory",id:"home-directory",level:3},{value:"Root directory",id:"root-directory",level:3},{value:"Check present working directory",id:"check-present-working-directory",level:3},{value:"Show list of folders and files",id:"show-list-of-folders-and-files",level:3},{value:"Change directory",id:"change-directory",level:3},{value:"Make directory",id:"make-directory",level:3},{value:"Create new file",id:"create-new-file",level:3},{value:"Remove directory (can only remove empty directory)",id:"remove-directory-can-only-remove-empty-directory",level:3},{value:"Remove file and/or folder",id:"remove-file-andor-folder",level:3},{value:"Copy file and/or folder",id:"copy-file-andor-folder",level:3},{value:"Move or rename folder or file",id:"move-or-rename-folder-or-file",level:3},{value:"Print file contents",id:"print-file-contents",level:3},{value:"Search through text in a file",id:"search-through-text-in-a-file",level:3},{value:"Append the output of a command to a file (file will be created if it does not exist)",id:"append-the-output-of-a-command-to-a-file-file-will-be-created-if-it-does-not-exist",level:3},{value:"Overwrite output of a command to a file (Output redirection, file will be created if it does not exist)",id:"overwrite-output-of-a-command-to-a-file-output-redirection-file-will-be-created-if-it-does-not-exist",level:3},{value:"Direct output of a command to another command",id:"direct-output-of-a-command-to-another-command",level:3},{value:"Input redirection",id:"input-redirection",level:3},{value:"Sort text in a file",id:"sort-text-in-a-file",level:3},{value:"Print unique text in a file (file contents must be sorted first)",id:"print-unique-text-in-a-file-file-contents-must-be-sorted-first",level:3},{value:"Temporarily replace or substitute string in a file and prints the file contents",id:"temporarily-replace-or-substitute-string-in-a-file-and-prints-the-file-contents",level:3},{value:"Disable sudo password prompt",id:"disable-sudo-password-prompt",level:3}],m={toc:u};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,l.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"linux-terminal-commands"},"Linux terminal commands"),(0,r.kt)("h2",{id:"linux-is-case-sensitive"},"linux is case-sensitive"),(0,r.kt)("h3",{id:"current-directory"},"Current directory"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"."))),(0,r.kt)("h3",{id:"previous-directory"},"Previous directory"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".."))),(0,r.kt)("h3",{id:"home-directory"},"Home directory"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"~"))),(0,r.kt)("h3",{id:"root-directory"},"Root directory"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/"))),(0,r.kt)("h3",{id:"check-present-working-directory"},"Check present working directory"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pwd"))),(0,r.kt)("h3",{id:"show-list-of-folders-and-files"},"Show list of folders and files"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ls")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ls -a")," also display hidden folders and files")),(0,r.kt)("h3",{id:"change-directory"},"Change directory"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cd ..")," go back 1 directory"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cd <folderName>")," change to folderName directory")),(0,r.kt)("h3",{id:"make-directory"},"Make directory"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mkdir <newFolderName>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mkdir <newFolderName> <newFolderName2> <newFolderName3>")," create multiple directories"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mkdir -p <newFolderName/newFolderName2/newFolderName3>")," create nested directories")),(0,r.kt)("h3",{id:"create-new-file"},"Create new file"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"touch <newFileName>"))),(0,r.kt)("h3",{id:"remove-directory-can-only-remove-empty-directory"},"Remove directory (can only remove empty directory)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rmdir <folderName>"))),(0,r.kt)("h3",{id:"remove-file-andor-folder"},"Remove file and/or folder"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rm <filename>")," only for files"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rm -r <folderName>")," remove current and nested folders"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rm -rf <folderName>")," remove current and nested folders and files")),(0,r.kt)("h3",{id:"copy-file-andor-folder"},"Copy file and/or folder"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cp <filename>")," only for 1 file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cp -r <folderName>")," for folders, nested folders and files")),(0,r.kt)("h3",{id:"move-or-rename-folder-or-file"},"Move or rename folder or file"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mv <oldFilename> <newFilename>")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"mv <oldFilePath> <newFilePath>"))),(0,r.kt)("h3",{id:"print-file-contents"},"Print file contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cat <filename>"))),(0,r.kt)("h3",{id:"search-through-text-in-a-file"},"Search through text in a file"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'grep "<text>" <filename>'))),(0,r.kt)("h3",{id:"append-the-output-of-a-command-to-a-file-file-will-be-created-if-it-does-not-exist"},"Append the output of a command to a file (file will be created if it does not exist)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<cmd> >> <filename>"))),(0,r.kt)("h3",{id:"overwrite-output-of-a-command-to-a-file-output-redirection-file-will-be-created-if-it-does-not-exist"},"Overwrite output of a command to a file (Output redirection, file will be created if it does not exist)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<cmd> > <filename>"))),(0,r.kt)("h3",{id:"direct-output-of-a-command-to-another-command"},"Direct output of a command to another command"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<cmd1> | <cmd2>")," cmd2 will use cmd1 output to execute")),(0,r.kt)("h3",{id:"input-redirection"},"Input redirection"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<cmd> < <file>")," file will be fed into the command and then runned",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ex: ",(0,r.kt)("inlineCode",{parentName:"li"},"<sendingEmailCommand> < <fileToBeAttached>"))))),(0,r.kt)("h3",{id:"sort-text-in-a-file"},"Sort text in a file"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sort <file>")," sort by ascending order"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sort -r <file>")," sort by descending order")),(0,r.kt)("h3",{id:"print-unique-text-in-a-file-file-contents-must-be-sorted-first"},"Print unique text in a file (file contents must be sorted first)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"uniq <file>"))),(0,r.kt)("h3",{id:"temporarily-replace-or-substitute-string-in-a-file-and-prints-the-file-contents"},"Temporarily replace or substitute string in a file and prints the file contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'sed "s/<oldString>/<newString>/" <file>'))),(0,r.kt)("h3",{id:"disable-sudo-password-prompt"},"Disable sudo password prompt"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"sudo visudo")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"add the following line at the bottom",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{username}")," e.g.: myusername")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{username} ALL=(ALL) NOPASSWD:ALL\n")))}c.isMDXComponent=!0}}]);