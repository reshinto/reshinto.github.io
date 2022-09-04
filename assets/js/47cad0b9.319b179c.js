"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[120],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),h=l(n),g=a,u=h["".concat(c,".").concat(g)]||h[g]||p[g]||o;return n?r.createElement(u,s(s({ref:t},m),{},{components:n})):r.createElement(u,s({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4624:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(83117),a=(n(67294),n(3905));const o={},s="JavaScript Example",i={unversionedId:"interviewPrep/designPatterns/Behavioral_patterns/Memento/javascript/readme",id:"interviewPrep/designPatterns/Behavioral_patterns/Memento/javascript/readme",title:"JavaScript Example",description:"",source:"@site/docs/interviewPrep/designPatterns/Behavioral_patterns/Memento/javascript/readme.md",sourceDirName:"interviewPrep/designPatterns/Behavioral_patterns/Memento/javascript",slug:"/interviewPrep/designPatterns/Behavioral_patterns/Memento/javascript/",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Memento/javascript/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Behavioral_patterns/Memento/javascript/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Java Example",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Memento/java/"},next:{title:"Python Example",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Memento/python/"}},c={},l=[],m={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"javascript-example"},"JavaScript Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * The Caretaker doesn't depend on the Concrete Memento class. Therefore, it\n * doesn't have access to the originator's state, stored inside the memento. It\n * works with all mementos via the base Memento interface.\n */\nclass Caretaker {\n  constructor(originator) {\n    this.mementos = [];\n    this.originator = originator;\n  }\n\n  backup() {\n    console.log(\"\\nCaretaker: Saving Originator's state...\");\n    this.mementos.push(this.originator.save());\n  }\n\n  undo() {\n    if (!this.mementos.length) {\n      return;\n    }\n    const memento = this.mementos.pop();\n\n    console.log(`Caretaker: Restoring state to: ${memento.getName()}`);\n    this.originator.restore(memento);\n  }\n\n  showHistory() {\n    console.log(\"Caretaker: Here's the list of mementos:\");\n    for (const memento of this.mementos) {\n      console.log(memento.getName());\n    }\n  }\n}\n\nmodule.exports = Caretaker;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * The Memento interface provides a way to retrieve the memento's metadata, such\n * as creation date or name. However, it doesn't expose the Originator's state.\n */\nclass Memento {\n  getState() {}\n\n  getName() {}\n\n  getDate() {}\n}\n\nmodule.exports = Memento;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const Memento = require("./Memento");\n\n/**\n * The Concrete Memento contains the infrastructure for storing the Originator\'s\n * state.\n */\nclass ConcreteMemento extends Memento {\n  constructor(state) {\n    super();\n    this.state = state;\n    this.date = new Date().toISOString().slice(0, 19).replace("T", " ");\n  }\n\n  /**\n   * The Originator uses this method when restoring its state.\n   */\n  getState() {\n    return this.state;\n  }\n\n  /**\n   * The rest of the methods are used by the Caretaker to display metadata.\n   */\n  getName() {\n    return `${this.date} / (${this.state.substr(0, 9)}...)`;\n  }\n\n  getDate() {\n    return this.date;\n  }\n}\n\nmodule.exports = ConcreteMemento;\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const ConcreteMemento = require("./ConcreteMemento");\n\n/**\n * The Originator holds some important state that may change over time. It also\n * defines a method for saving the state inside a memento and another method for\n * restoring the state from it.\n */\nclass Originator {\n  constructor(state) {\n    /**\n     * For the sake of simplicity, the originator\'s state is stored inside a\n     * single variable.\n     */\n    this.state = state;\n    console.log(`Originator: My initial state is: ${state}`);\n  }\n\n  /**\n   * The Originator\'s business logic may affect its internal state. Therefore,\n   * the client should backup the state before launching methods of the\n   * business logic via the save() method.\n   */\n  doSomething() {\n    console.log("Originator: I\'m doing something important.");\n    this.state = this.generateRandomString(30);\n    console.log(`Originator: and my state has changed to: ${this.state}`);\n  }\n\n  generateRandomString(length = 10) {\n    const charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";\n\n    return Array.apply(null, {length})\n      .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))\n      .join("");\n  }\n\n  /**\n   * Saves the current state inside a memento.\n   */\n  save() {\n    return new ConcreteMemento(this.state);\n  }\n\n  /**\n   * Restores the Originator\'s state from a memento object.\n   */\n  restore(memento) {\n    this.state = memento.getState();\n    console.log(`Originator: My state has changed to: ${this.state}`);\n  }\n}\n\nmodule.exports = Originator;\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const Caretaker = require("./Caretaker");\nconst Originator = require("./Originator");\n\n/**\n * Memento Design Pattern\n *\n * Intent: Lets you save and restore the previous state of an object without\n * revealing the details of its implementation.\n *\n */\nconst originator = new Originator("Super-duper-super-puper-super.");\nconst caretaker = new Caretaker(originator);\n\ncaretaker.backup();\noriginator.doSomething();\n\ncaretaker.backup();\noriginator.doSomething();\n\ncaretaker.backup();\noriginator.doSomething();\n\nconsole.log("");\ncaretaker.showHistory();\n\nconsole.log("\\nClient: Now, let\'s rollback!\\n");\ncaretaker.undo();\n\nconsole.log("\\nClient: Once more!\\n");\ncaretaker.undo();\n')))}p.isMDXComponent=!0}}]);