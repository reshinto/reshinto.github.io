"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[3478],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),h=n,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||i;return a?r.createElement(d,o(o({ref:t},p),{},{components:a})):r.createElement(d,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},59567:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={},o="Decorator design pattern",l={unversionedId:"interviewPrep/designPatterns/Structural_patterns/Decorator/readme",id:"interviewPrep/designPatterns/Structural_patterns/Decorator/readme",title:"Decorator design pattern",description:"- lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.",source:"@site/docs/interviewPrep/designPatterns/Structural_patterns/Decorator/readme.md",sourceDirName:"interviewPrep/designPatterns/Structural_patterns/Decorator",slug:"/interviewPrep/designPatterns/Structural_patterns/Decorator/",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Decorator/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Structural_patterns/Decorator/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Composite design pattern",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Composite/"},next:{title:"how to run",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Decorator/javascript/realExample/"}},s={},c=[{value:"Definition",id:"definition",level:2},{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2},{value:"Analogy",id:"analogy",level:2},{value:"Structure",id:"structure",level:2},{value:"When to use",id:"when-to-use",level:2},{value:"How to implement",id:"how-to-implement",level:2},{value:"Pros &amp; Cons",id:"pros--cons",level:2},{value:"Pros",id:"pros",level:3},{value:"Cons",id:"cons",level:3},{value:"Summary",id:"summary",level:2},{value:"Javascript",id:"javascript",level:3},{value:"Python",id:"python",level:3}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"decorator-design-pattern"},"Decorator design pattern"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.")),(0,n.kt)("h2",{id:"definition"},"Definition"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"original definition",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Attach additional responsibilities to an object dynamically"),(0,n.kt)("li",{parentName:"ul"},"decorators provide a flexible alternative to sub classing for extending functionality"))),(0,n.kt)("li",{parentName:"ul"},"a good way to define pluggable behaviors and features for clients that do not alter their original function but add extra abilities"),(0,n.kt)("li",{parentName:"ul"},"also known as a wrapper pattern",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"when used with functions, a decorator ingests a function and returns back a function",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"this way it behaves as a higher order function"))))),(0,n.kt)("li",{parentName:"ul"},"example",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"the react framework uses the concept of higher order components",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"which results in a component gaining extra abilities and functionality")))))),(0,n.kt)("h2",{id:"problem"},"Problem"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In a notification library which lets other programs notify their users about important events",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"the initial version of the library was based on the Notifier class that had a few fields, a constructor and a single send method"),(0,n.kt)("li",{parentName:"ul"},"the method could accept a message argument from a client",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"and send the message to a list of emails that were passed to the notifier via its constructor"))),(0,n.kt)("li",{parentName:"ul"},"a 3rd party app which acted as a client was supposed to create and configure the notifier object once",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"and then use it each time something important happened"))))),(0,n.kt)("li",{parentName:"ul"},"then you realize that users of the library expect more than just email notifications",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"many of them want to receive SMS about critical issues"),(0,n.kt)("li",{parentName:"ul"},"others want to be notified on Facebook"),(0,n.kt)("li",{parentName:"ul"},"corporate users want to get Slack notifications"))),(0,n.kt)("li",{parentName:"ul"},"if you try to extend the Notifier class",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"and put the additional notification methods into new subclasses",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"now the client needs to instantiate the desire notification class"),(0,n.kt)("li",{parentName:"ul"},"and use it for all further notifications"))))),(0,n.kt)("li",{parentName:"ul"},"but if someone asked you to use several notification types at once",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"can try to address that problem by creating special subclasses",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"which combined several notification methods within 1 class"))),(0,n.kt)("li",{parentName:"ul"},"however, this approach would bloat the code immensely",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"for both the library code and the client code"))))),(0,n.kt)("li",{parentName:"ul"},"thus a need to find some other way to structure notifications classes so that their number won't accidentally break some record")),(0,n.kt)("h2",{id:"solution"},"Solution"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"extending a class is the 1st thing that comes to mind when needed to alter an object's behavior",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"however, inheritance has several serious caveats that we need to be aware of",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"inheritance is static",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"we can't alter behavior of an existing object at runtime"),(0,n.kt)("li",{parentName:"ul"},"can only replace the whole object with another 1 that's created from a different subclass"))),(0,n.kt)("li",{parentName:"ul"},"subclasses can have just 1 parent class",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"in most languages, inheritance doesn't let a class inherit behaviors of multiple classes at the same time"))))))),(0,n.kt)("li",{parentName:"ul"},"To overcome these caveats is by using Aggregation or Composition instead of inheritance",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"both alternatives work almost the same way",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"1 object has a reference to another and delegates it some work"),(0,n.kt)("li",{parentName:"ul"},"whereas with inheritance, the object itself is able to do that work",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"inheriting the behavior from its superclass"))))))),(0,n.kt)("li",{parentName:"ul"},"with this new approach, can easily substitute the linked helper object with another",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"changing the behavior of the container at runtime"),(0,n.kt)("li",{parentName:"ul"},"an object can use the behavior of various classes",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"having references to multiple objects and delegating them all kinds of work"))),(0,n.kt)("li",{parentName:"ul"},"aggregation / composition is the key principle behind many design patterns including decorator"))),(0,n.kt)("li",{parentName:"ul"},"Wrapper is the alternative nickname for the Decorator pattern that clearly expresses the main idea of the pattern",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"a wrapper is an object that can be linked with some target object"),(0,n.kt)("li",{parentName:"ul"},"the wrapper contains the same set of methods as the target and delegates to it all requests it received"),(0,n.kt)("li",{parentName:"ul"},"however, the wrapper may alter the result by doing something either before or after it passes the request to the target"))),(0,n.kt)("li",{parentName:"ul"},"when does the wrapper become a real decorator",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"the wrapper implements the same interface as the wrapped object",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"from the client's perspective, these objects are identical"))),(0,n.kt)("li",{parentName:"ul"},"make the wrapper's reference field accept any object that follows that interface",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"this will let you cover an object in multiple wrappers, adding the combined behavior of all the wrappers to it"))))),(0,n.kt)("li",{parentName:"ul"},"in the notification example, leave the simple email notification behavior inside the base Notifier class",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"but turn all other notification methods into decorators"),(0,n.kt)("li",{parentName:"ul"},"the client code would need to wrap a basic notifier object into a set of decorators that match the client's preferences",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"the resulting objects will be structures as a stack",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"the last decorator in the stack would be the object that the client actually works with"),(0,n.kt)("li",{parentName:"ul"},"since all decorators implement the same interface as the base notifier",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"the rest of the client code won't care whether it works with the pure notifier object or the decorated one"))))))),(0,n.kt)("li",{parentName:"ul"},"the same approach could be applied to other behaviors such as formatting messages or composing the recipient list",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"the client can decorate the object with any custom decorates",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"as long as they follow the same interface as the others")))))))),(0,n.kt)("h2",{id:"analogy"},"Analogy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"wearing clothes is an example of decorators",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"when you're cold, you wrap yourself in a sweater"),(0,n.kt)("li",{parentName:"ul"},"if you're cold with a sweater, you can wear a jacket on top"),(0,n.kt)("li",{parentName:"ul"},"if it's raining, you can put on a raincoat"),(0,n.kt)("li",{parentName:"ul"},"all of these garments extend your basic behavior but aren't part of you",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"you can easily take off any piece of clothing whenever you don't need it")))))),(0,n.kt)("h2",{id:"structure"},"Structure"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Decorator",src:a(40363).Z,width:"1048",height:"1066"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The Component declares the common interface for both wrappers and wrapped objects.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Concrete Component is a class of objects being wrapped."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"It defines the basic behavior, which can be altered by decorators."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The Base Decorator class has a field for referencing a wrapped object."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The field\u2019s type should be declared as the component interface so it can contain both concrete components and decorators."),(0,n.kt)("li",{parentName:"ul"},"The base decorator delegates all operations to the wrapped object."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Concrete Decorators define extra behaviors that can be added to components dynamically."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Concrete decorators override methods of the base decorator and execute their behavior either before or after calling the parent method."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The Client can wrap components in multiple layers of decorators, as long as it works with all objects via the component interface."))),(0,n.kt)("h2",{id:"when-to-use"},"When to use"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use the Decorator pattern when you need to be able to assign extra behaviors to objects at runtime without breaking the code that uses these objects"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The Decorator lets you structure your business logic into layers,",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"create a decorator for each layer"),(0,n.kt)("li",{parentName:"ul"},"and compose objects with various combinations of this logic at runtime"))),(0,n.kt)("li",{parentName:"ul"},"The client code can treat all these objects in the same way, since they all follow a common interface"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use the pattern when it\u2019s awkward or not possible to extend an object\u2019s behavior using inheritance"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Many programming languages have the ",(0,n.kt)("inlineCode",{parentName:"li"},"final")," keyword that can be used to prevent further extension of a class",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"For a final class, the only way to reuse the existing behavior would be to wrap the class with your own wrapper, using the Decorator pattern")))))),(0,n.kt)("h2",{id:"how-to-implement"},"How to implement"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Make sure your business domain can be represented as a primary component with multiple optional layers over it"),(0,n.kt)("li",{parentName:"ol"},"Figure out what methods are common to both the primary component and the optional layers",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Create a component interface and declare those methods there"))),(0,n.kt)("li",{parentName:"ol"},"Create a concrete component class and define the base behavior in it"),(0,n.kt)("li",{parentName:"ol"},"Create a base decorator class",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"It should have a field for storing a reference to a wrapped object"),(0,n.kt)("li",{parentName:"ul"},"The field should be declared with the component interface type to allow linking to concrete components as well as decorators"),(0,n.kt)("li",{parentName:"ul"},"The base decorator must delegate all work to the wrapped object"))),(0,n.kt)("li",{parentName:"ol"},"Make sure all classes implement the component interface"),(0,n.kt)("li",{parentName:"ol"},"Create concrete decorators by extending them from the base decorator",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A concrete decorator must execute its behavior before or after the call to the parent method (which always delegates to the wrapped object)"))),(0,n.kt)("li",{parentName:"ol"},"The client code must be responsible for creating decorators and composing them in the way the client needs")),(0,n.kt)("h2",{id:"pros--cons"},"Pros & Cons"),(0,n.kt)("h3",{id:"pros"},"Pros"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"can extend an object\u2019s behavior without making a new subclass"),(0,n.kt)("li",{parentName:"ul"},"can add or remove responsibilities from an object at runtime"),(0,n.kt)("li",{parentName:"ul"},"can combine several behaviors by wrapping an object into multiple decorators"),(0,n.kt)("li",{parentName:"ul"},"Single Responsibility Principle",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"can divide a monolithic class that implements many possible variants of behavior into several smaller classes")))),(0,n.kt)("h3",{id:"cons"},"Cons"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It\u2019s hard to remove a specific wrapper from the wrappers stack"),(0,n.kt)("li",{parentName:"ul"},"It\u2019s hard to implement a decorator in such a way that its behavior doesn\u2019t depend on the order in the decorators stack"),(0,n.kt)("li",{parentName:"ul"},"The initial configuration code of layers might look pretty ugly")),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the decorator pattern, ingests a function and returns back a function"),(0,n.kt)("li",{parentName:"ul"},"decorators can be used to add features and function to existing objects dynamically"),(0,n.kt)("li",{parentName:"ul"},"implemented as higher order functions")),(0,n.kt)("h3",{id:"javascript"},"Javascript"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the TC39 has proposed the decorator (@decorator) syntax for use with classes and class methods"),(0,n.kt)("li",{parentName:"ul"},"until the format is released, the decorator syntax can be implemented using the babel complier")),(0,n.kt)("h3",{id:"python"},"Python"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the decorator design pattern is NOT the same as the python decorator / function wrapper")))}u.isMDXComponent=!0},40363:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/decorator-2d478b389d5a63bc2f62c3a77da5c259.png"}}]);