"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[18593],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,v=m["".concat(c,".").concat(u)]||m[u]||l[u]||i;return t?o.createElement(v,a(a({ref:n},d),{},{components:t})):o.createElement(v,a({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},91328:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=t(83117),r=(t(67294),t(3905));const i={},a="C++ Example",s={unversionedId:"interviewPrep/designPatterns/Behavioral_patterns/Mediator/cPlusPlus/readme",id:"interviewPrep/designPatterns/Behavioral_patterns/Mediator/cPlusPlus/readme",title:"C++ Example",description:"",source:"@site/docs/interviewPrep/designPatterns/Behavioral_patterns/Mediator/cPlusPlus/readme.md",sourceDirName:"interviewPrep/designPatterns/Behavioral_patterns/Mediator/cPlusPlus",slug:"/interviewPrep/designPatterns/Behavioral_patterns/Mediator/cPlusPlus/",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Mediator/cPlusPlus/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Behavioral_patterns/Mediator/cPlusPlus/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mediator",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Mediator/"},next:{title:"C# Example",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Mediator/cSharp/"}},c={},p=[],d={toc:p};function l(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"c-example"},"C++ Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n#include <string>\n/**\n * Mediator Design Pattern\n *\n * Intent: Lets you reduce chaotic dependencies between objects. The pattern\n * restricts direct communications between the objects and forces them to\n * collaborate only via a mediator object.\n */\n\n/**\n * The Mediator interface declares a method used by components to notify the\n * mediator about various events. The Mediator may react to these events and\n * pass the execution to other components.\n */\nclass BaseComponent;\nclass Mediator {\n public:\n  virtual void Notify(BaseComponent *sender, std::string event) const = 0;\n};\n\n/**\n * The Base Component provides the basic functionality of storing a mediator\'s\n * instance inside component objects.\n */\nclass BaseComponent {\n protected:\n  Mediator *mediator_;\n\n public:\n  BaseComponent(Mediator *mediator = nullptr) : mediator_(mediator) {\n  }\n  void set_mediator(Mediator *mediator) {\n    this->mediator_ = mediator;\n  }\n};\n\n/**\n * Concrete Components implement various functionality. They don\'t depend on\n * other components. They also don\'t depend on any concrete mediator classes.\n */\nclass Component1 : public BaseComponent {\n public:\n  void DoA() {\n    std::cout << "Component 1 does A.\\n";\n    this->mediator_->Notify(this, "A");\n  }\n  void DoB() {\n    std::cout << "Component 1 does B.\\n";\n    this->mediator_->Notify(this, "B");\n  }\n};\n\nclass Component2 : public BaseComponent {\n public:\n  void DoC() {\n    std::cout << "Component 2 does C.\\n";\n    this->mediator_->Notify(this, "C");\n  }\n  void DoD() {\n    std::cout << "Component 2 does D.\\n";\n    this->mediator_->Notify(this, "D");\n  }\n};\n\n/**\n * Concrete Mediators implement cooperative behavior by coordinating several\n * components.\n */\nclass ConcreteMediator : public Mediator {\n private:\n  Component1 *component1_;\n  Component2 *component2_;\n\n public:\n  ConcreteMediator(Component1 *c1, Component2 *c2) : component1_(c1), component2_(c2) {\n    this->component1_->set_mediator(this);\n    this->component2_->set_mediator(this);\n  }\n  void Notify(BaseComponent *sender, std::string event) const override {\n    if (event == "A") {\n      std::cout << "Mediator reacts on A and triggers following operations:\\n";\n      this->component2_->DoC();\n    }\n    if (event == "D") {\n      std::cout << "Mediator reacts on D and triggers following operations:\\n";\n      this->component1_->DoB();\n      this->component2_->DoC();\n    }\n  }\n};\n\n/**\n * The client code.\n */\n\nvoid ClientCode() {\n  Component1 *c1 = new Component1;\n  Component2 *c2 = new Component2;\n  ConcreteMediator *mediator = new ConcreteMediator(c1, c2);\n  std::cout << "Client triggers operation A.\\n";\n  c1->DoA();\n  std::cout << "\\n";\n  std::cout << "Client triggers operation D.\\n";\n  c2->DoD();\n\n  delete c1;\n  delete c2;\n  delete mediator;\n}\n\nint main() {\n  ClientCode();\n  return 0;\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Client triggers operation A.\nComponent 1 does A.\nMediator reacts on A and triggers following operations:\nComponent 2 does C.\n\nClient triggers operation D.\nComponent 2 does D.\nMediator reacts on D and triggers following operations:\nComponent 1 does B.\nComponent 2 does C.\n")))}l.isMDXComponent=!0}}]);