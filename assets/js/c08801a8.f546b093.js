"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[20289],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var b=n.createContext({}),v=function(e){var r=n.useContext(b),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=v(e.components);return n.createElement(b.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,a=e.originalType,b=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=v(t),m=s,d=u["".concat(b,".").concat(m)]||u[m]||c[m]||a;return t?n.createElement(d,o(o({ref:r},l),{},{components:t})):n.createElement(d,o({ref:r},l))}));function m(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=u;var i={};for(var b in r)hasOwnProperty.call(r,b)&&(i[b]=r[b]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var v=2;v<a;v++)o[v]=t[v];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},43293:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>v});var n=t(83117),s=(t(67294),t(3905));const a={},o="C++ Example",i={unversionedId:"interviewPrep/designPatterns/Behavioral_patterns/Observer/cPlusPlus/readme",id:"interviewPrep/designPatterns/Behavioral_patterns/Observer/cPlusPlus/readme",title:"C++ Example",description:"",source:"@site/docs/interviewPrep/designPatterns/Behavioral_patterns/Observer/cPlusPlus/readme.md",sourceDirName:"interviewPrep/designPatterns/Behavioral_patterns/Observer/cPlusPlus",slug:"/interviewPrep/designPatterns/Behavioral_patterns/Observer/cPlusPlus/",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Observer/cPlusPlus/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Behavioral_patterns/Observer/cPlusPlus/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Observer",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Observer/"},next:{title:"C# Example",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Observer/cSharp/"}},b={},v=[],l={toc:v};function c(e){let{components:r,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"c-example"},"C++ Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},'/**\n * Observer Design Pattern\n *\n * Intent: Lets you define a subscription mechanism to notify multiple objects\n * about any events that happen to the object they\'re observing.\n *\n * Note that there\'s a lot of different terms with similar meaning associated\n * with this pattern. Just remember that the Subject is also called the\n * Publisher and the Observer is often called the Subscriber and vice versa.\n * Also the verbs "observe", "listen" or "track" usually mean the same thing.\n */\n\n#include <iostream>\n#include <list>\n#include <string>\n\nclass IObserver {\n public:\n  virtual ~IObserver(){};\n  virtual void Update(const std::string &message_from_subject) = 0;\n};\n\nclass ISubject {\n public:\n  virtual ~ISubject(){};\n  virtual void Attach(IObserver *observer) = 0;\n  virtual void Detach(IObserver *observer) = 0;\n  virtual void Notify() = 0;\n};\n\n/**\n * The Subject owns some important state and notifies observers when the state\n * changes.\n */\n\nclass Subject : public ISubject {\n public:\n  virtual ~Subject() {\n    std::cout << "Goodbye, I was the Subject.\\n";\n  }\n\n  /**\n   * The subscription management methods.\n   */\n  void Attach(IObserver *observer) override {\n    list_observer_.push_back(observer);\n  }\n  void Detach(IObserver *observer) override {\n    list_observer_.remove(observer);\n  }\n  void Notify() override {\n    std::list<IObserver *>::iterator iterator = list_observer_.begin();\n    HowManyObserver();\n    while (iterator != list_observer_.end()) {\n      (*iterator)->Update(message_);\n      ++iterator;\n    }\n  }\n\n  void CreateMessage(std::string message = "Empty") {\n    this->message_ = message;\n    Notify();\n  }\n  void HowManyObserver() {\n    std::cout << "There are " << list_observer_.size() << " observers in the list.\\n";\n  }\n\n  /**\n   * Usually, the subscription logic is only a fraction of what a Subject can\n   * really do. Subjects commonly hold some important business logic, that\n   * triggers a notification method whenever something important is about to\n   * happen (or after it).\n   */\n  void SomeBusinessLogic() {\n    this->message_ = "change message message";\n    Notify();\n    std::cout << "I\'m about to do some thing important\\n";\n  }\n\n private:\n  std::list<IObserver *> list_observer_;\n  std::string message_;\n};\n\nclass Observer : public IObserver {\n public:\n  Observer(Subject &subject) : subject_(subject) {\n    this->subject_.Attach(this);\n    std::cout << "Hi, I\'m the Observer \\"" << ++Observer::static_number_ << "\\".\\n";\n    this->number_ = Observer::static_number_;\n  }\n  virtual ~Observer() {\n    std::cout << "Goodbye, I was the Observer \\"" << this->number_ << "\\".\\n";\n  }\n\n  void Update(const std::string &message_from_subject) override {\n    message_from_subject_ = message_from_subject;\n    PrintInfo();\n  }\n  void RemoveMeFromTheList() {\n    subject_.Detach(this);\n    std::cout << "Observer \\"" << number_ << "\\" removed from the list.\\n";\n  }\n  void PrintInfo() {\n    std::cout << "Observer \\"" << this->number_ << "\\": a new message is available --\x3e " << this->message_from_subject_ << "\\n";\n  }\n\n private:\n  std::string message_from_subject_;\n  Subject &subject_;\n  static int static_number_;\n  int number_;\n};\n\nint Observer::static_number_ = 0;\n\nvoid ClientCode() {\n  Subject *subject = new Subject;\n  Observer *observer1 = new Observer(*subject);\n  Observer *observer2 = new Observer(*subject);\n  Observer *observer3 = new Observer(*subject);\n  Observer *observer4;\n  Observer *observer5;\n\n  subject->CreateMessage("Hello World! :D");\n  observer3->RemoveMeFromTheList();\n\n  subject->CreateMessage("The weather is hot today! :p");\n  observer4 = new Observer(*subject);\n\n  observer2->RemoveMeFromTheList();\n  observer5 = new Observer(*subject);\n\n  subject->CreateMessage("My new car is great! ;)");\n  observer5->RemoveMeFromTheList();\n\n  observer4->RemoveMeFromTheList();\n  observer1->RemoveMeFromTheList();\n\n  delete observer5;\n  delete observer4;\n  delete observer3;\n  delete observer2;\n  delete observer1;\n  delete subject;\n}\n\nint main() {\n  ClientCode();\n  return 0;\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Hi, I\'m the Observer "1".\nHi, I\'m the Observer "2".\nHi, I\'m the Observer "3".\nThere are 3 observers in the list.\nObserver "1": a new message is available --\x3e Hello World! :D\nObserver "2": a new message is available --\x3e Hello World! :D\nObserver "3": a new message is available --\x3e Hello World! :D\nObserver "3" removed from the list.\nThere are 2 observers in the list.\nObserver "1": a new message is available --\x3e The weather is hot today! :p\nObserver "2": a new message is available --\x3e The weather is hot today! :p\nHi, I\'m the Observer "4".\nObserver "2" removed from the list.\nHi, I\'m the Observer "5".\nThere are 3 observers in the list.\nObserver "1": a new message is available --\x3e My new car is great! ;)\nObserver "4": a new message is available --\x3e My new car is great! ;)\nObserver "5": a new message is available --\x3e My new car is great! ;)\nObserver "5" removed from the list.\nObserver "4" removed from the list.\nObserver "1" removed from the list.\nGoodbye, I was the Observer "5".\nGoodbye, I was the Observer "4".\nGoodbye, I was the Observer "3".\nGoodbye, I was the Observer "2".\nGoodbye, I was the Observer "1".\nGoodbye, I was the Subject.\n')))}c.isMDXComponent=!0}}]);