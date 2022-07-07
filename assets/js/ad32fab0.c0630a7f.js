"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[6925],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,d=u["".concat(s,".").concat(h)]||u[h]||p[h]||i;return n?a.createElement(d,r(r({ref:t},m),{},{components:n})):a.createElement(d,r({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14446:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={},r="Mediator design pattern",l={unversionedId:"interviewPrep/designPatterns/Behavioral_patterns/Mediator/readme",id:"interviewPrep/designPatterns/Behavioral_patterns/Mediator/readme",title:"Mediator design pattern",description:"- lets you reduce chaotic dependencies between objects",source:"@site/docs/interviewPrep/designPatterns/Behavioral_patterns/Mediator/readme.md",sourceDirName:"interviewPrep/designPatterns/Behavioral_patterns/Mediator",slug:"/interviewPrep/designPatterns/Behavioral_patterns/Mediator/",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Mediator/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Behavioral_patterns/Mediator/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Iterator design pattern",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Iterator/"},next:{title:"Memento design pattern",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Memento/"}},s={},c=[{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2},{value:"Analogy",id:"analogy",level:2},{value:"Structure",id:"structure",level:2},{value:"When to use",id:"when-to-use",level:2},{value:"How to implement",id:"how-to-implement",level:2},{value:"Pros &amp; Cons",id:"pros--cons",level:2},{value:"Pros",id:"pros",level:3},{value:"Cons",id:"cons",level:3}],m={toc:c};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mediator-design-pattern"},"Mediator design pattern"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"lets you reduce chaotic dependencies between objects"),(0,o.kt)("li",{parentName:"ul"},"the pattern restricts direct communications between the objects",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"forces them to collaborate only via a mediator object")))),(0,o.kt)("h2",{id:"problem"},"Problem"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"e.g.: let's say there is a dialog for creating & editing customer profile",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"it consists of various form controls such as text fields, checkboxes, buttons, etc."),(0,o.kt)("li",{parentName:"ul"},"some of the form elements may interact with others",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'e.g: selecting "i have a dog" checkbox may reveal a hidden text field for entering the dog\'s name'),(0,o.kt)("li",{parentName:"ul"},"another e.g.: the submit button that has to validate values of all fields before saving the data"))),(0,o.kt)("li",{parentName:"ul"},"by having this logic implemented directly inside the code of the form elements",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"it make these element's classes much hard to reuse in other forms of the app",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"e.g.: can't use the checkbox inside another form as it's coupled to the dog's text field"))),(0,o.kt)("li",{parentName:"ul"},"this results in you can only use either all the classes involved in rendering the profile form, or none at all")))))),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"all direct communication between the components which you want to make independent of each other should be ceased",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"these components must collaborate indirectly",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"by calling a special mediator object that redirects the calls to appropriate components"),(0,o.kt)("li",{parentName:"ul"},"thus, the components depend only on a single mediator class instead of being coupled to dozens of their colleagues"))))),(0,o.kt)("li",{parentName:"ul"},"in the profile editing form, the dialog class itself may act as the mediator",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"dialog class should already be aware of all of its sub-elements",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"thus introducing of new dependencies into the class is not needed"))))),(0,o.kt)("li",{parentName:"ul"},"the most significant change happens to the actual form elements (e.g.: submit button)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"previously, each time a user clicked the button, it had to validate the values of all individual form elements"),(0,o.kt)("li",{parentName:"ul"},"its single job is to notify the dialog about the click"),(0,o.kt)("li",{parentName:"ul"},"upon receiving this notification, the dialog itself performs the validations or passes the task to the individual elements",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"therefore, instead of being tied to a dozen form elements, the button is only dependent on the dialog class")))))),(0,o.kt)("h2",{id:"analogy"},"Analogy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"pilots of aircraft that approach or depart the airport control area don't communicate directly with each other",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"they speak to an air traffic controller, who sits in a tall tower somewhere near the airstrip"))),(0,o.kt)("li",{parentName:"ul"},"without the air traffic controller, pilots would need to be aware of every plane in the vicinity of the airport",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"discussing landing priorities with a committee of dozens of other pilots"))),(0,o.kt)("li",{parentName:"ul"},"therefore, the tower doesn't need to control the whole flight",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"it exists only to enforce constraints in the terminal area because the number of involved actors there might be overwhelming to a pilot")))),(0,o.kt)("h2",{id:"structure"},"Structure"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Mediator",src:n(49564).Z,width:"1080",height:"902"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Components are various classes that contain some business logic."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Each component has a reference to a mediator, declared with the type of the mediator interface."),(0,o.kt)("li",{parentName:"ul"},"The component isn\u2019t aware of the actual class of the mediator, so you can reuse the component in other programs by linking it to a different mediator."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The Mediator interface declares methods of communication with components, which usually include just a single notification method."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Components may pass any context as arguments of this method, including their own objects, but only in such a way that no coupling occurs between a receiving component and the sender\u2019s class."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Concrete Mediators encapsulate relations between various components."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Concrete mediators often keep references to all components they manage and sometimes even manage their lifecycle."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Components must not be aware of other components."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If something important happens within or to a component, it must only notify the mediator."),(0,o.kt)("li",{parentName:"ul"},"When the mediator receives the notification, it can easily identify the sender, which might be just enough to decide what component should be triggered in return."),(0,o.kt)("li",{parentName:"ul"},"From a component\u2019s perspective, it all looks like a total black box."),(0,o.kt)("li",{parentName:"ul"},"The sender doesn\u2019t know who\u2019ll end up handling its request, and the receiver doesn\u2019t know who sent the request in the first place.")))),(0,o.kt)("h2",{id:"when-to-use"},"When to use"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"use the pattern when it's hard to change some of the classes because they are tightly coupled to a bunch of other classes",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"the pattern lets you extract all the relationships between classes into a separate class, isolating any changes to a specific component from the rest of the components"))),(0,o.kt)("li",{parentName:"ul"},"use the pattern when you can't reuse a component in a different program because it's too dependent on other components",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"after you apply the mediator, individual components become unaware of the other components"),(0,o.kt)("li",{parentName:"ul"},"they could still communicate with each other, albeit indirectly, through a mediator object"),(0,o.kt)("li",{parentName:"ul"},"to reuse a component in a different app, you need to provide it a with a new mediator class"))),(0,o.kt)("li",{parentName:"ul"},"use the mediator when you find yourself creating tons of component subclasses just to reuse some basic behavior in various contexts",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"since all relations between components are contained within the mediator, it's easy to define entirely new ways for these components to collaborate by introducing new mediator classes, without having to change the components themselves")))),(0,o.kt)("h2",{id:"how-to-implement"},"How to implement"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"identify a group of tightly coupled classes which would benefit from being more independent(e.g., for easier maintenance or simpler reuse of these classes)"),(0,o.kt)("li",{parentName:"ol"},"Declare the mediator interface and describe the desired communication protocol between mediators and various components.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In most cases, a single method for receiving notifications from components is sufficient."),(0,o.kt)("li",{parentName:"ul"},"This interface is crucial when you want to reuse component classes in different contexts.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"As long as the component works with its mediator via the generic interface, you can link the component with a different implementation of the mediator."))))),(0,o.kt)("li",{parentName:"ol"},"Implement the concrete mediator class.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This class would benefit from storing references to all of the components it manages."))),(0,o.kt)("li",{parentName:"ol"},"You can go even further and make the mediator responsible for the creation and destruction of component objects.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"After this, the mediator may resemble a factory or a facade."))),(0,o.kt)("li",{parentName:"ol"},"Components should store a reference to the mediator object.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The connection is usually established in the component\u2019s constructor, where a mediator object is passed as an argument."))),(0,o.kt)("li",{parentName:"ol"},"Change the components\u2019 code so that they call the mediator\u2019s notification method instead of methods on other components.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Extract the code that involves calling other components into the mediator class."),(0,o.kt)("li",{parentName:"ul"},"Execute this code whenever the mediator receives notifications from that component.")))),(0,o.kt)("h2",{id:"pros--cons"},"Pros & Cons"),(0,o.kt)("h3",{id:"pros"},"Pros"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Single Responsibility Principle. You can extract the communications between various components into a single place, making it easier to comprehend and maintain."),(0,o.kt)("li",{parentName:"ul"},"Open/Closed Principle. You can introduce new mediators without having to change the actual components."),(0,o.kt)("li",{parentName:"ul"},"You can reduce coupling between various components of a program."),(0,o.kt)("li",{parentName:"ul"},"You can reuse individual components more easily.")),(0,o.kt)("h3",{id:"cons"},"Cons"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Over time a mediator can evolve into a God Object.")))}p.isMDXComponent=!0},49564:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mediator-b43dd6a078709b6adfab1d80ee02de29.png"}}]);