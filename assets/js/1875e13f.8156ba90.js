"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[5101],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>h});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var i=n.createContext({}),l=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},u=function(t){var e=l(t.components);return n.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=l(r),h=o,b=d["".concat(i,".").concat(h)]||d[h]||p[h]||a;return r?n.createElement(b,c(c({ref:e},u),{},{components:r})):n.createElement(b,c({ref:e},u))}));function h(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,c=new Array(a);c[0]=d;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:o,c[1]=s;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13972:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},c="C# Example",s={unversionedId:"interviewPrep/designPatterns/Creational_patterns/AbstractFactory/cSharp/readme",id:"interviewPrep/designPatterns/Creational_patterns/AbstractFactory/cSharp/readme",title:"C# Example",description:"Example",source:"@site/docs/interviewPrep/designPatterns/Creational_patterns/AbstractFactory/cSharp/readme.md",sourceDirName:"interviewPrep/designPatterns/Creational_patterns/AbstractFactory/cSharp",slug:"/interviewPrep/designPatterns/Creational_patterns/AbstractFactory/cSharp/",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/AbstractFactory/cSharp/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Creational_patterns/AbstractFactory/cSharp/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"C++ Example",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/AbstractFactory/cPlusPlus/"},next:{title:"Go Example",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/AbstractFactory/go/"}},i={},l=[],u={toc:l};function p(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"c-example"},"C# Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Abstract Factory Design Pattern\n//\n// Intent: Lets you produce families of related objects without specifying their\n// concrete classes.\n\nusing System;\n\nnamespace RefactoringGuru.DesignPatterns.AbstractFactory.Conceptual\n{\n    // The Abstract Factory interface declares a set of methods that return\n    // different abstract products. These products are called a family and are\n    // related by a high-level theme or concept. Products of one family are\n    // usually able to collaborate among themselves. A family of products may\n    // have several variants, but the products of one variant are incompatible\n    // with products of another.\n    public interface IAbstractFactory\n    {\n        IAbstractProductA CreateProductA();\n\n        IAbstractProductB CreateProductB();\n    }\n\n    // Concrete Factories produce a family of products that belong to a single\n    // variant. The factory guarantees that resulting products are compatible.\n    // Note that signatures of the Concrete Factory\'s methods return an abstract\n    // product, while inside the method a concrete product is instantiated.\n    class ConcreteFactory1 : IAbstractFactory\n    {\n        public IAbstractProductA CreateProductA()\n        {\n            return new ConcreteProductA1();\n        }\n\n        public IAbstractProductB CreateProductB()\n        {\n            return new ConcreteProductB1();\n        }\n    }\n\n    // Each Concrete Factory has a corresponding product variant.\n    class ConcreteFactory2 : IAbstractFactory\n    {\n        public IAbstractProductA CreateProductA()\n        {\n            return new ConcreteProductA2();\n        }\n\n        public IAbstractProductB CreateProductB()\n        {\n            return new ConcreteProductB2();\n        }\n    }\n\n    // Each distinct product of a product family should have a base interface.\n    // All variants of the product must implement this interface.\n    public interface IAbstractProductA\n    {\n        string UsefulFunctionA();\n    }\n\n    // Concrete Products are created by corresponding Concrete Factories.\n    class ConcreteProductA1 : IAbstractProductA\n    {\n        public string UsefulFunctionA()\n        {\n            return "The result of the product A1.";\n        }\n    }\n\n    class ConcreteProductA2 : IAbstractProductA\n    {\n        public string UsefulFunctionA()\n        {\n            return "The result of the product A2.";\n        }\n    }\n\n    // Here\'s the the base interface of another product. All products can\n    // interact with each other, but proper interaction is possible only between\n    // products of the same concrete variant.\n    public interface IAbstractProductB\n    {\n        // Product B is able to do its own thing...\n        string UsefulFunctionB();\n\n        // ...but it also can collaborate with the ProductA.\n        //\n        // The Abstract Factory makes sure that all products it creates are of\n        // the same variant and thus, compatible.\n        string AnotherUsefulFunctionB(IAbstractProductA collaborator);\n    }\n\n    // Concrete Products are created by corresponding Concrete Factories.\n    class ConcreteProductB1 : IAbstractProductB\n    {\n        public string UsefulFunctionB()\n        {\n            return "The result of the product B1.";\n        }\n\n        // The variant, Product B1, is only able to work correctly with the\n        // variant, Product A1. Nevertheless, it accepts any instance of\n        // AbstractProductA as an argument.\n        public string AnotherUsefulFunctionB(IAbstractProductA collaborator)\n        {\n            var result = collaborator.UsefulFunctionA();\n\n            return $"The result of the B1 collaborating with the ({result})";\n        }\n    }\n\n    class ConcreteProductB2 : IAbstractProductB\n    {\n        public string UsefulFunctionB()\n        {\n            return "The result of the product B2.";\n        }\n\n       // The variant, Product B2, is only able to work correctly with the\n       // variant, Product A2. Nevertheless, it accepts any instance of\n       // AbstractProductA as an argument.\n        public string AnotherUsefulFunctionB(IAbstractProductA collaborator)\n        {\n            var result = collaborator.UsefulFunctionA();\n\n            return $"The result of the B2 collaborating with the ({result})";\n        }\n    }\n\n    // The client code works with factories and products only through abstract\n    // types: AbstractFactory and AbstractProduct. This lets you pass any\n    // factory or product subclass to the client code without breaking it.\n    class Client\n    {\n        public void Main()\n        {\n            // The client code can work with any concrete factory class.\n            Console.WriteLine("Client: Testing client code with the first factory type...");\n            ClientMethod(new ConcreteFactory1());\n            Console.WriteLine();\n\n            Console.WriteLine("Client: Testing the same client code with the second factory type...");\n            ClientMethod(new ConcreteFactory2());\n        }\n\n        public void ClientMethod(IAbstractFactory factory)\n        {\n            var productA = factory.CreateProductA();\n            var productB = factory.CreateProductB();\n\n            Console.WriteLine(productB.UsefulFunctionB());\n            Console.WriteLine(productB.AnotherUsefulFunctionB(productA));\n        }\n    }\n\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            new Client().Main();\n        }\n    }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Client: Testing client code with the first factory type...\nThe result of the product B1.\nThe result of the B1 collaborating with the (The result of the product A1.)\n\nClient: Testing the same client code with the second factory type...\nThe result of the product B2.\nThe result of the B2 collaborating with the (The result of the product A2.)\n")))}p.isMDXComponent=!0}}]);