"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[4760],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=m(n),h=a,k=u["".concat(l,".").concat(h)]||u[h]||c[h]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const o={},i="Husky",s={unversionedId:"pre-hooks/javascript/husky/readme",id:"pre-hooks/javascript/husky/readme",title:"Husky",description:"How to install",source:"@site/docs/pre-hooks/javascript/husky/readme.md",sourceDirName:"pre-hooks/javascript/husky",slug:"/pre-hooks/javascript/husky/",permalink:"/docs/pre-hooks/javascript/husky/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/pre-hooks/javascript/husky/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SSH Guide",permalink:"/docs/others/setupSSH"},next:{title:"Pre-commit",permalink:"/docs/pre-hooks/python/pre-commit/"}},l={},m=[{value:"How to install",id:"how-to-install",level:2},{value:"Create a pre-commit hook",id:"create-a-pre-commit-hook",level:2},{value:"Create a commit-msg hook",id:"create-a-commit-msg-hook",level:2},{value:"Create a commit lint to manage the commit message",id:"create-a-commit-lint-to-manage-the-commit-message",level:2},{value:"Create a branch lint to manage the branch names",id:"create-a-branch-lint-to-manage-the-branch-names",level:2}],p={toc:m};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"husky"},"Husky"),(0,a.kt)("h2",{id:"how-to-install"},"How to install"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"method 1",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"npx husky-init && npm install")))),(0,a.kt)("li",{parentName:"ul"},"method 2",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"npx husky-init && yarn")))),(0,a.kt)("li",{parentName:"ul"},"method 3",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"yarn dlx husky-init --yarn2 && yarn")),(0,a.kt)("li",{parentName:"ul"},"Yarn 2 doesn't support prepare lifecycle script, so husky needs to be installed differently"))),(0,a.kt)("li",{parentName:"ul"},"Prepare husky for installation",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'npm set-script prepare "husky install"')),(0,a.kt)("li",{parentName:"ul"},"should have",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'// package.json\n{\n  "scripts": {\n    "prepare": "husky install"\n  }\n}\n'))))),(0,a.kt)("li",{parentName:"ul"},"install husky ",(0,a.kt)("inlineCode",{parentName:"li"},"npm run prepare"))),(0,a.kt)("h2",{id:"create-a-pre-commit-hook"},"Create a pre-commit hook"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},'npx husky add .husky/pre-commit "npm test"'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"you should get"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nnpm test\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"change it to something like the following")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"code:clean and test:coverage are scripts written in the package.json"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// package.json\n{\n  "scripts": {\n    "prepare": "husky install",\n    "code:lint": "eslint --ext .js,.jsx,.ts,.tsx \\"src/\\"",\n    "code:format": "prettier --write .",\n    "code:clean": "npm run code:lint --fix; npm run code:format"\n  }\n}\n')),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nnpm run code:clean && npm run test:coverage && node ./branchLint.js\n')))),(0,a.kt)("h2",{id:"create-a-commit-msg-hook"},"Create a commit-msg hook"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"npx husky add .husky/commit-msg 'npx --no-install commitlint --edit \"$1\"'"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"you should get"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nnpx --no-install commitlint --edit ""\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"change it to something like the following"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\necho \'husky:hooks:commit-msg\' && node ./commitLint.ts\n')))),(0,a.kt)("h2",{id:"create-a-commit-lint-to-manage-the-commit-message"},"Create a commit lint to manage the commit message"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"commitLint.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const fs = require("fs");\nconst path = require("path");\nconst pjson = require("../package.json");\n\nconst projectAcronym = pjson.name;\nconst ruleCommit = `\\\\[((${projectAcronym})-(\\\\d)+)\\\\]:\\\\s\\\\w`;\n\nconst regExpCommit = new RegExp(ruleCommit, "g");\n\nconst msg = `\n  # Invalid commit message!\n  #\n  # Please use the following rules:\n  # \'[required key]: <required message>\'\n  #\n  # - [required key]: \'[${projectAcronym}-{key}]: \', when the {key} is a valid JIRA issue key\n  # - <required message>: \'{msg}\', when the {msg} is a clear commit message\n  #\n  # For example:\n  # \'[${projectAcronym}-1234]: Commit message\'\n`;\n\nconst commitPath = path.resolve(\n  process.env.HUSKY_GIT_PARAMS || ".git/COMMIT_EDITMSG"\n);\nconst commitMsg = fs.readFileSync(commitPath, "utf8");\n\nif (!regExpCommit.test(commitMsg)) {\n  console.error(msg);\n  process.exit(1);\n}\n')),(0,a.kt)("h2",{id:"create-a-branch-lint-to-manage-the-branch-names"},"Create a branch lint to manage the branch names"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"branchLint.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const fs = require("fs");\nconst path = require("path");\nconst pjson = require("../package.json");\n\nconst projectAcronym = pjson.name;\nconst ruleBranch = `^(feature|bugfix|improvement|library|prerelease|release|hotfix)\\/${projectAcronym}-(\\\\d+)[a-z0-9._-]+$`;\n\nconst regExpBranch = new RegExp(ruleBranch, "g");\n\nconst msg = `\n  # Invalid branch name!\n  #\n  # Branch names in this project must adhere to this contract:\n  # ${ruleBranch}\n  #\n  # Your commit will be rejected.\n  # Please use the following rules:\n  # \'[required key1]/{required key2}-<required name>\'\n  #\n  # - [required key1]: \'{key1}/\', when the {key1} is a type of branch of either\n  #   - feature | bugfix | improvement | library | prerelease | release | hotfix\n  # - {required key2}: \'${projectAcronym}-{key2}-\', when the {key2} is a valid JIRA issue key\n  # - <required name>: \'{msg}\', when the {msg} is a clear branch name\n  #\n  # For example:\n  # \'feature/${projectAcronym}-01-feature-branch-name\'\n`;\n\nconst branchNamePath = path.resolve(\n  process.env.HUSKY_GIT_PARAMS || ".git/HEAD"\n);\n\nconst branchName = fs\n  .readFileSync(branchNamePath, "utf8")\n  .split("ref: refs/heads/")[1]\n  .split("\\n")[0];\n\nif (!regExpBranch.test(branchName)) {\n  console.error(msg);\n  process.exit(1);\n}\n')))}c.isMDXComponent=!0}}]);