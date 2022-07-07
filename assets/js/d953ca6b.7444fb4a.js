"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[4330],{3905:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>d});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),u=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return r?t.createElement(f,c(c({ref:n},l),{},{components:r})):t.createElement(f,c({ref:n},l))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},58134:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var t=r(87462),o=(r(67294),r(3905));const a={},c="Generate Document",i={unversionedId:"interviewPrep/codingTests/easy/strings/generateDocument",id:"interviewPrep/codingTests/easy/strings/generateDocument",title:"Generate Document",description:"You're given a string of available characters and a string representing a",source:"@site/docs/interviewPrep/codingTests/easy/strings/generateDocument.md",sourceDirName:"interviewPrep/codingTests/easy/strings",slug:"/interviewPrep/codingTests/easy/strings/generateDocument",permalink:"/docs/interviewPrep/codingTests/easy/strings/generateDocument",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/codingTests/easy/strings/generateDocument.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Caesar Cipher Encryptor",permalink:"/docs/interviewPrep/codingTests/easy/strings/caesarCipherEncryptor"},next:{title:"Palindrome Check",permalink:"/docs/interviewPrep/codingTests/easy/strings/palindromeCheck"}},s={},u=[],l={toc:u};function m(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"generate-document"},"Generate Document"),(0,o.kt)("p",null,"You're given a string of available characters and a string representing a\ndocument that you need to generate. Write a function that determines if you\ncan generate the document using the available characters. If you can generate\nthe document, your function should return true; otherwise, it\nshould return false"),(0,o.kt)("p",null,'You\'re only able to generate the document if the frequency of unique\ncharacters in the characters string is greater than or equal to the frequency\nof unique characters in the document string. For example, if you\'re given\ncharacters = "abcabc" and document = "aabbccc" you\ncannot generate the document because you\'re missing one c'),(0,o.kt)("p",null,"The document that you need to create may contain any characters, including\nspecial characters, capital letters, numbers, and spaces."),(0,o.kt)("p",null,'Note: you can always generate the empty string ("")'),(0,o.kt)("p",null,"Sample Input\n",(0,o.kt)("inlineCode",{parentName:"p"},'characters = "Bste!hetsi ogEAxpelrt x "'),"\n",(0,o.kt)("inlineCode",{parentName:"p"},'document = "AlgoExpert is the Best!"'),"\nSample Output\ntrue"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# solution 1\ndef generateDocument(characters, document):\n  # Write your code here.\n  result = False\n  newChars = list(characters)\n  if document == "":\n    return True\n  for v in document:\n    if v in newChars:\n      newChars.remove(v)\n      result = True\n    else:\n      return False\n  return result\n\n\n# solution 2\ndef generateDocument(characters, document):\n  # Write your code here.\n  memo = {}\n\n  for v in characters:\n    if v not in memo:\n      memo[v] = 0\n    memo[v] += 1\n\n  for v in document:\n    if v not in memo or not memo[v]:\n      return False\n    memo[v] -= 1\n  return True\n\n\n# solution 3\ndef generateDocument(characters, document):\n  # Write your code here.\n  for v in document:\n  charF = charFreq(v, characters)\n  docF = charFreq(v, document)\n  if docF > charF:\n    return False\n  return True\n\n\ndef charFreq(c, string):\n  freq = 0\n  for v in string:\n    if c == v:\n      freq += 1\n  return freq\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// solution 1\nfunction generateDocument(characters, document) {\n  // Write your code here.\n  for (let v of document) {\n    const charFreq = charsFreq(v, characters);\n    const docFreq = charsFreq(v, document);\n    if (docFreq > charFreq) {\n      return false;\n    }\n  }\n  return true;\n}\n\nfunction charsFreq(c, string) {\n  freq = 0;\n  for (let v of string) {\n    if (v === c) {\n      freq++;\n    }\n  }\n  return freq;\n}\n\n// solution 2\nfunction generateDocument(characters, document) {\n  // Write your code here.\n  const memo = {};\n  for (let i = 0; i < characters.length; i++) {\n    if (!memo[characters[i]]) {\n      memo[characters[i]] = 0;\n    }\n    memo[characters[i]]++;\n  }\n\n  for (let i = 0; i < document.length; i++) {\n    if (!memo[document[i]]) {\n      return false;\n    }\n    memo[document[i]]--;\n  }\n  return true;\n}\n")))}m.isMDXComponent=!0}}]);