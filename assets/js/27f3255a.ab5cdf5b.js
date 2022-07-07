"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[421],{3905:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>d});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function r(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),s=c(l),d=a,k=s["".concat(u,".").concat(d)]||s[d]||m[d]||i;return l?n.createElement(k,o(o({ref:t},p),{},{components:l})):n.createElement(k,o({ref:t},p))}));function d(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=l.length,o=new Array(i);o[0]=s;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var c=2;c<i;c++)o[c]=l[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}s.displayName="MDXCreateElement"},77539:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=l(87462),a=(l(67294),l(3905));const i={},o="How to compile and run files of different languages in the terminal",r={unversionedId:"languageSpecific/run_language_tutorial",id:"languageSpecific/run_language_tutorial",title:"How to compile and run files of different languages in the terminal",description:"compile .cpp & .h files together",source:"@site/docs/languageSpecific/run_language_tutorial.md",sourceDirName:"languageSpecific",slug:"/languageSpecific/run_language_tutorial",permalink:"/docs/languageSpecific/run_language_tutorial",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/languageSpecific/run_language_tutorial.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Python Virtual Environment",permalink:"/docs/languageSpecific/python/virtualEnv"},next:{title:"XML (eXtensible Markup Language)",permalink:"/docs/languageSpecific/xml/"}},u={},c=[{value:"compile .cpp &amp; .h files together",id:"compile-cpp--h-files-together",level:2},{value:"syntax: -Wall: check for errors",id:"syntax--wall-check-for-errors",level:3},{value:"same as above but add -x c when compiling",id:"same-as-above-but-add--x-c-when-compiling",level:2},{value:"OR",id:"or",level:2},{value:"OR",id:"or-1",level:2},{value:"If .h header file is in another directory need to use -I",id:"if-h-header-file-is-in-another-directory-need-to-use--i",level:3},{value:"use ./ to run file",id:"use--to-run-file",level:3},{value:"if no output file name is defined earlier",id:"if-no-output-file-name-is-defined-earlier",level:3},{value:"compile file",id:"compile-file",level:2},{value:"run file",id:"run-file",level:2},{value:"compile xxx.java file with javac in terminal",id:"compile-xxxjava-file-with-javac-in-terminal",level:2},{value:"java class will be created, run class file with java",id:"java-class-will-be-created-run-class-file-with-java",level:2},{value:"java 11 onwards, class will not be created, javac not required",id:"java-11-onwards-class-will-not-be-created-javac-not-required",level:2},{value:"compile and run at the same time",id:"compile-and-run-at-the-same-time",level:2},{value:"using package",id:"using-package",level:2},{value:"at root directory of project",id:"at-root-directory-of-project",level:3},{value:"compile file",id:"compile-file-1",level:4},{value:"run file",id:"run-file-1",level:4},{value:"using modularity",id:"using-modularity",level:2},{value:"run typescript files without compiling with ts-node in terminal (no javascript created)",id:"run-typescript-files-without-compiling-with-ts-node-in-terminal-no-javascript-created",level:2},{value:"compile xxx.ts file with tsc in terminal",id:"compile-xxxts-file-with-tsc-in-terminal",level:2},{value:"javascript file will be created, run file with node",id:"javascript-file-will-be-created-run-file-with-node",level:2},{value:"run with nodeJS",id:"run-with-nodejs",level:2},{value:"open nodejs shell",id:"open-nodejs-shell",level:3},{value:"run with python 2",id:"run-with-python-2",level:2},{value:"open python 2 shell",id:"open-python-2-shell",level:3},{value:"run with python 3",id:"run-with-python-3",level:2},{value:"open python 3 shell",id:"open-python-3-shell",level:3},{value:"open ruby shell",id:"open-ruby-shell",level:2},{value:"compile &amp; run x86 32 bit files",id:"compile--run-x86-32-bit-files",level:2},{value:"compile",id:"compile",level:3},{value:"run",id:"run",level:3},{value:"compile &amp; run x86_64 64 bit files",id:"compile--run-x86_64-64-bit-files",level:2},{value:"compile",id:"compile-1",level:3},{value:"run",id:"run-1",level:3},{value:"Open GroovyShell to use the dynamic interpreter on the terminal",id:"open-groovyshell-to-use-the-dynamic-interpreter-on-the-terminal",level:2},{value:"Open GroovyConsole to open an external UI interface editor",id:"open-groovyconsole-to-open-an-external-ui-interface-editor",level:2},{value:"Execute groovy code on the command line",id:"execute-groovy-code-on-the-command-line",level:2},{value:"Run groovy file",id:"run-groovy-file",level:2}],p={toc:c};function m(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-compile-and-run-files-of-different-languages-in-the-terminal"},"How to compile and run files of different languages in the terminal"),(0,a.kt)("h1",{id:"run-c-files"},"Run C++ files"),(0,a.kt)("h2",{id:"compile-cpp--h-files-together"},"compile .cpp & .h files together"),(0,a.kt)("h3",{id:"syntax--wall-check-for-errors"},"syntax: -Wall: check for errors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"-o: is an output file"),(0,a.kt)("li",{parentName:"ul"},"output file name: zzz"),(0,a.kt)("li",{parentName:"ul"},".cpp and .h files"),(0,a.kt)("li",{parentName:"ul"},"old method of building",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"g++ -Wall -o zzz xxx.cpp abc.h"))),(0,a.kt)("li",{parentName:"ul"},"new method of building",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"g++ -Wall -o zzz xxx.cpp"))),(0,a.kt)("li",{parentName:"ul"},"run built file",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"./zzz")))),(0,a.kt)("h1",{id:"run-c-files-1"},"Run C files"),(0,a.kt)("h2",{id:"same-as-above-but-add--x-c-when-compiling"},"same as above but add -x c when compiling"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"g++ -x c -Wall -o zzz xxx.c abc.h")),(0,a.kt)("h2",{id:"or"},"OR"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"clang -o zzz xxx.c abc.h")),(0,a.kt)("h2",{id:"or-1"},"OR"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"make xxx")),(0,a.kt)("h3",{id:"if-h-header-file-is-in-another-directory-need-to-use--i"},"If .h header file is in another directory need to use -I"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"g++ -I /fullpath/myproject xxx.cpp /fullpath/myproject/header/yyy.h")),(0,a.kt)("h3",{id:"use--to-run-file"},"use ./ to run file"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"./zzz")),(0,a.kt)("h3",{id:"if-no-output-file-name-is-defined-earlier"},"if no output file name is defined earlier"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ouput file will automatically create an a.out file"),(0,a.kt)("li",{parentName:"ul"},"to run",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"./a.out")))),(0,a.kt)("h1",{id:"run-c-files-2"},"Run C# files"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Need to have Mono platform to compile and run code",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"if using MacOS",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"brew install mono")))))),(0,a.kt)("h2",{id:"compile-file"},"compile file"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"mcs xxx.cs")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"xxx.exe will be created")),(0,a.kt)("h2",{id:"run-file"},"run file"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"mono xxx.exe")),(0,a.kt)("h1",{id:"run-java-files"},"Run Java files"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"xxx.java file name must be the same as public class name"),(0,a.kt)("li",{parentName:"ul"},"note: it is case sensitive")),(0,a.kt)("h2",{id:"compile-xxxjava-file-with-javac-in-terminal"},"compile xxx.java file with javac in terminal"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"javac xxx.java")),(0,a.kt)("h2",{id:"java-class-will-be-created-run-class-file-with-java"},"java class will be created, run class file with java"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"java xxx")),(0,a.kt)("h2",{id:"java-11-onwards-class-will-not-be-created-javac-not-required"},"java 11 onwards, class will not be created, javac not required"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"compile and run java file",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"java xxx.java")))),(0,a.kt)("h2",{id:"compile-and-run-at-the-same-time"},"compile and run at the same time"),(0,a.kt)("p",null,"javac xxx.java && java xxx"),(0,a.kt)("h2",{id:"using-package"},"using package"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"e.g.: Main.java")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package com.example.java;\n\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello from Java!");\n  }\n}\n')),(0,a.kt)("h3",{id:"at-root-directory-of-project"},"at root directory of project"),(0,a.kt)("h4",{id:"compile-file-1"},"compile file"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"javac ./com/example/java/Main.java")),(0,a.kt)("h4",{id:"run-file-1"},"run file"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"java com.example.java.Main")),(0,a.kt)("h2",{id:"using-modularity"},"using modularity"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"compile",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},'javac -d ./mods/ --module-source-path src $(find src -name "',"*",'.java")'))),(0,a.kt)("li",{parentName:"ul"},"run without optional dependencies",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"java --module-path mods/ -m com.domain.module/com.domain.module.Main"))),(0,a.kt)("li",{parentName:"ul"},"run with optional dependencies",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"java --module-path mods/ --add-modules com.domain.optionalmodule -m com.domain.module/com.domain.module.Main")))),(0,a.kt)("h1",{id:"run-typescript-files"},"Run Typescript files"),(0,a.kt)("h2",{id:"run-typescript-files-without-compiling-with-ts-node-in-terminal-no-javascript-created"},"run typescript files without compiling with ts-node in terminal (no javascript created)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"ts-node xxx.ts")),(0,a.kt)("h2",{id:"compile-xxxts-file-with-tsc-in-terminal"},"compile xxx.ts file with tsc in terminal"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"tsc ./xxx.ts")),(0,a.kt)("h2",{id:"javascript-file-will-be-created-run-file-with-node"},"javascript file will be created, run file with node"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"node xxx.js")),(0,a.kt)("h1",{id:"run-javascript-files"},"Run Javascript files"),(0,a.kt)("h2",{id:"run-with-nodejs"},"run with nodeJS"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"node filename.js")),(0,a.kt)("h3",{id:"open-nodejs-shell"},"open nodejs shell"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"node")),(0,a.kt)("h1",{id:"run-python-files"},"Run Python files"),(0,a.kt)("h2",{id:"run-with-python-2"},"run with python 2"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"python2 filename.py")),(0,a.kt)("h3",{id:"open-python-2-shell"},"open python 2 shell"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"python2")),(0,a.kt)("h2",{id:"run-with-python-3"},"run with python 3"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"python3 filename.py")),(0,a.kt)("h3",{id:"open-python-3-shell"},"open python 3 shell"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"python3")),(0,a.kt)("h1",{id:"run-ruby-files"},"Run Ruby files"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"ruby filename.rb")),(0,a.kt)("h2",{id:"open-ruby-shell"},"open ruby shell"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"irb")),(0,a.kt)("h1",{id:"run-assembly-files"},"Run assembly files"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"nasm compiler must be installed",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"if using MacOS",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"brew install nasm")))))),(0,a.kt)("h2",{id:"compile--run-x86-32-bit-files"},"compile & run x86 32 bit files"),(0,a.kt)("h3",{id:"compile"},"compile"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"nasm -f macho xxx32.asm && ld -macosx_version_min 10.7.0 -o xxx32 xxx32.o")),(0,a.kt)("h3",{id:"run"},"run"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"./xxx32")),(0,a.kt)("h2",{id:"compile--run-x86_64-64-bit-files"},"compile & run x86_64 64 bit files"),(0,a.kt)("h3",{id:"compile-1"},"compile"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"nasm -f macho64 xxx64.asm && ld -macosx_version_min 10.7.0 -lSystem -o xxx64 xxx64.o")),(0,a.kt)("h3",{id:"run-1"},"run"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"./xxx64")),(0,a.kt)("h1",{id:"run-groovy"},"Run Groovy"),(0,a.kt)("h2",{id:"open-groovyshell-to-use-the-dynamic-interpreter-on-the-terminal"},"Open GroovyShell to use the dynamic interpreter on the terminal"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"in the command line type ",(0,a.kt)("inlineCode",{parentName:"li"},"groovysh"))),(0,a.kt)("h2",{id:"open-groovyconsole-to-open-an-external-ui-interface-editor"},"Open GroovyConsole to open an external UI interface editor"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"in the command line type ",(0,a.kt)("inlineCode",{parentName:"li"},"groovyConsole"))),(0,a.kt)("h2",{id:"execute-groovy-code-on-the-command-line"},"Execute groovy code on the command line"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"groovy -e \"println 'Hello, World!'\""))),(0,a.kt)("h2",{id:"run-groovy-file"},"Run groovy file"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"groovy hello.groovy")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"groovy hello"))),(0,a.kt)("h1",{id:"compile-latex-file"},"Compile Latex file"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"xelatex filename.tex")))}m.isMDXComponent=!0}}]);