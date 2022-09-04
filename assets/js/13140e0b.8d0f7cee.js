"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[46268],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(t),u=r,h=m["".concat(p,".").concat(u)]||m[u]||l[u]||i;return t?o.createElement(h,a(a({ref:n},d),{},{components:t})):o.createElement(h,a({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},99185:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=t(83117),r=(t(67294),t(3905));const i={},a="C# Example",s={unversionedId:"interviewPrep/designPatterns/Behavioral_patterns/Mediator/cSharp/readme",id:"interviewPrep/designPatterns/Behavioral_patterns/Mediator/cSharp/readme",title:"C# Example",description:"Example",source:"@site/docs/interviewPrep/designPatterns/Behavioral_patterns/Mediator/cSharp/readme.md",sourceDirName:"interviewPrep/designPatterns/Behavioral_patterns/Mediator/cSharp",slug:"/interviewPrep/designPatterns/Behavioral_patterns/Mediator/cSharp/",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Mediator/cSharp/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Behavioral_patterns/Mediator/cSharp/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"C++ Example",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Mediator/cPlusPlus/"},next:{title:"Go Example",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Mediator/go/"}},p={},c=[],d={toc:c};function l(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"c-example"},"C# Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// Mediator Design Pattern\n//\n// Intent: Lets you reduce chaotic dependencies between objects. The pattern\n// restricts direct communications between the objects and forces them to\n// collaborate only via a mediator object.\n\nusing System;\n\nnamespace RefactoringGuru.DesignPatterns.Mediator.Conceptual\n{\n    // The Mediator interface declares a method used by components to notify the\n    // mediator about various events. The Mediator may react to these events and\n    // pass the execution to other components.\n    public interface IMediator\n    {\n        void Notify(object sender, string ev);\n    }\n\n    // Concrete Mediators implement cooperative behavior by coordinating several\n    // components.\n    class ConcreteMediator : IMediator\n    {\n        private Component1 _component1;\n\n        private Component2 _component2;\n\n        public ConcreteMediator(Component1 component1, Component2 component2)\n        {\n            this._component1 = component1;\n            this._component1.SetMediator(this);\n            this._component2 = component2;\n            this._component2.SetMediator(this);\n        }\n\n        public void Notify(object sender, string ev)\n        {\n            if (ev == "A")\n            {\n                Console.WriteLine("Mediator reacts on A and triggers folowing operations:");\n                this._component2.DoC();\n            }\n            if (ev == "D")\n            {\n                Console.WriteLine("Mediator reacts on D and triggers following operations:");\n                this._component1.DoB();\n                this._component2.DoC();\n            }\n        }\n    }\n\n    // The Base Component provides the basic functionality of storing a\n    // mediator\'s instance inside component objects.\n    class BaseComponent\n    {\n        protected IMediator _mediator;\n\n        public BaseComponent(IMediator mediator = null)\n        {\n            this._mediator = mediator;\n        }\n\n        public void SetMediator(IMediator mediator)\n        {\n            this._mediator = mediator;\n        }\n    }\n\n    // Concrete Components implement various functionality. They don\'t depend on\n    // other components. They also don\'t depend on any concrete mediator\n    // classes.\n    class Component1 : BaseComponent\n    {\n        public void DoA()\n        {\n            Console.WriteLine("Component 1 does A.");\n\n            this._mediator.Notify(this, "A");\n        }\n\n        public void DoB()\n        {\n            Console.WriteLine("Component 1 does B.");\n\n            this._mediator.Notify(this, "B");\n        }\n    }\n\n    class Component2 : BaseComponent\n    {\n        public void DoC()\n        {\n            Console.WriteLine("Component 2 does C.");\n\n            this._mediator.Notify(this, "C");\n        }\n\n        public void DoD()\n        {\n            Console.WriteLine("Component 2 does D.");\n\n            this._mediator.Notify(this, "D");\n        }\n    }\n\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            // The client code.\n            Component1 component1 = new Component1();\n            Component2 component2 = new Component2();\n            new ConcreteMediator(component1, component2);\n\n            Console.WriteLine("Client triggets operation A.");\n            component1.DoA();\n\n            Console.WriteLine();\n\n            Console.WriteLine("Client triggers operation D.");\n            component2.DoD();\n        }\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Client triggers operation A.\nComponent 1 does A.\nMediator reacts on A and triggers following operations:\nComponent 2 does C.\n\nClient triggers operation D.\nComponent 2 does D.\nMediator reacts on D and triggers following operations:\nComponent 1 does B.\nComponent 2 does C.\n")))}l.isMDXComponent=!0}}]);