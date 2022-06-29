"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[7682],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,h=u["".concat(o,".").concat(d)]||u[d]||m[d]||l;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3518:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const l={},i="c# summary notes",s={unversionedId:"languageSpecific/cSharp/readme",id:"languageSpecific/cSharp/readme",title:"c# summary notes",description:"summary notes",source:"@site/docs/languageSpecific/cSharp/readme.md",sourceDirName:"languageSpecific/cSharp",slug:"/languageSpecific/cSharp/",permalink:"/docs/languageSpecific/cSharp/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/languageSpecific/cSharp/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"C++",permalink:"/docs/languageSpecific/cPlusPlus/"},next:{title:"HTML",permalink:"/docs/languageSpecific/html/"}},o={},c=[{value:"C# vs .NET",id:"c-vs-net",level:3},{value:"Common Language Runtime (CLR)",id:"common-language-runtime-clr",level:3},{value:"Architecture of .NET Applications",id:"architecture-of-net-applications",level:3},{value:"Namespace",id:"namespace",level:3},{value:"Classes vs Structures",id:"classes-vs-structures",level:3},{value:"Abstract classes vs Interfaces",id:"abstract-classes-vs-interfaces",level:3}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"c-summary-notes"},"c# summary notes"),(0,n.kt)("h3",{id:"c-vs-net"},"C# vs .NET"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"C# is a programming language"),(0,n.kt)("li",{parentName:"ul"},".NET is a framework",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"It consists of a run-time environment (CLR) and a class library that we use for building applications")))),(0,n.kt)("h3",{id:"common-language-runtime-clr"},"Common Language Runtime (CLR)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When you compile an application, C# compiler compiles your code to IL (Intermediate Language) code"),(0,n.kt)("li",{parentName:"ul"},"IL code is platform agnostics, which makes it possible to a take a C# program on a different computer with different hardware architecture and operating system and run it",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"For this to happen, we need CLR"))),(0,n.kt)("li",{parentName:"ul"},"When you run a C# application, CLR compiles the IL code into the native machine code for the computer on which it is running",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This process is called Just-in-time Compilation (JIT)")))),(0,n.kt)("h3",{id:"architecture-of-net-applications"},"Architecture of .NET Applications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In terms of architecture, an application written with C# consists of building blocks called classes",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A class is a container for data (attributes) and methods (functions)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Attributes represent the state of the application"),(0,n.kt)("li",{parentName:"ul"},"Methods include code",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"they have logic"),(0,n.kt)("li",{parentName:"ul"},"That's where we implement our algorithms and write code")))))))),(0,n.kt)("h3",{id:"namespace"},"Namespace"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A namespace is a container for related classes"),(0,n.kt)("li",{parentName:"ul"},"So as your application grows in size, you may want to group the related classes into various namespaces for better maintainability"),(0,n.kt)("li",{parentName:"ul"},"As the number of classes and namespaces even grow further, you may want to physically separate related namespaces into separate assemblies",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"An assembly is a file (DLL or EXE) that contains one or more namespaces and classes",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"An EXE file represents a program that can be executed"),(0,n.kt)("li",{parentName:"ul"},"A DLL is a file that includes code that can be re-used across different programs")))))),(0,n.kt)("h3",{id:"classes-vs-structures"},"Classes vs Structures"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use struct instead of class if instances of type are small & commonly short-lived / are commonly embedded in other objects"),(0,n.kt)("li",{parentName:"ul"},"Avoid defining a struct unless the type has all of the following characteristics",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"it logically represents a single value, similar to primitive types (int, double, etc.)"),(0,n.kt)("li",{parentName:"ol"},"it has an instance size under 16 bytes"),(0,n.kt)("li",{parentName:"ol"},"it is immutable"),(0,n.kt)("li",{parentName:"ol"},"it will not have to be boxed frequently")))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"type"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Struct (structure) is a value type"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"All primitive types are structures (int, char, bool, etc.)")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-c#"},'// example 1\n// since a and b are value types, they are independent of each other\nint a = 10;\nint b = a;\nb++;\nSystem.Console.WriteLine($"{a}, {b}");  // 10, 11\n\n\n// example 2\npublic class Program {\n  public static void Main() {\n    int number = 1;\n    Increment(number);\n    System.Console.WriteLine(number);  // value will still be 1\n  }\n\n  public static void increment(int number) {\n    number += 10;\n  }\n}\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Class is a reference type"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Non primitive types are classes (Arrays, Strings, etc.)")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-c#"},'// example 1\n// since array1 & array2 is a reference of the heap, when either 1 is modified, the rest will be affected\nint[] array1 = new int[3] {1, 2, 3};\nint[] array2 = array1;\narray2[0] = 0;\nSystem.Console.WriteLine($"{array1}, {array2}");  // [0, 2, 3], [0, 2, 3]\n\n\n// example 2\npublic class Person {\n  public int Age;\n}\n\npublic class Program {\n  public static void Main() {\n    Person person = new Person() {Age=20};\n    increment(person);\n    System.Console.WriteLine(person.Age);  // 30\n  }\n\n  public static void increment(Person person) {\n    person.Age += 10;\n  }\n}\n'))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Storage"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Memory of Structs are stored on stack"),(0,n.kt)("li",{parentName:"ul"},"Memory of Classes are stored on heap"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Memory"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Value types hold their value in memory where they are declared",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"memory is allocated on stack and is done automatically"))),(0,n.kt)("li",{parentName:"ul"},"Reference types hold a reference to an object in memory",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Need to allocate memory"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Destroy"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Value types are destroyed immediately after the scope is lost",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Data will be immediately removed when out of scope"))),(0,n.kt)("li",{parentName:"ul"},"Only reference variables in reference types are destroyed after the scope is lost",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"data will remain in the memory temporary"),(0,n.kt)("li",{parentName:"ul"},"the object is later destroyed by garbage collector"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copy"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"When a struct is copied into another struct, a new copy of that struct gets created & modifications on 1 struct will not affect the values contained by the other struct"),(0,n.kt)("li",{parentName:"ul"},"When a class is copied into another class, only get a copy of the reference variable",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"both the reference variables point to the same object on the heap"),(0,n.kt)("li",{parentName:"ul"},"operations on 1 variable will affect the values contained by the other reference variable"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Destructors"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Structs can't have destructors"),(0,n.kt)("li",{parentName:"ul"},"Classes can have destructors"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Explicit parameter"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Structs cannot have explicit parameter & constructor"),(0,n.kt)("li",{parentName:"ul"},"Classes can have explicit parameter & constructor"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Inheritance"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Structs can't inherit from another class"),(0,n.kt)("li",{parentName:"ul"},"Class can inherit from another class"),(0,n.kt)("li",{parentName:"ul"},"Both structs and classes can inherit from an interface"),(0,n.kt)("li",{parentName:"ul"},"Both structs and classes cannot inherit from another struct (Struct are sealed types)")))),(0,n.kt)("h3",{id:"abstract-classes-vs-interfaces"},"Abstract classes vs Interfaces"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"abstract classes can have implementations for some of its methods",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"interfaces cannot have any implementations for all of its methods"))),(0,n.kt)("li",{parentName:"ul"},"abstract classes can have fields (variable declared outside of a method)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"interfaces cannot have fields"))),(0,n.kt)("li",{parentName:"ul"},"abstract classes can inherit from another abstract class or another interface",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"interface can only inherit from another interface"))),(0,n.kt)("li",{parentName:"ul"},"abstract classes can only inherit from 1 class or multiple interfaces at the same time",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"interface can only inherit from 1 or multiple interfaces at the same time"))),(0,n.kt)("li",{parentName:"ul"},"abstract class members can have access modifiers (public, private, protected, etc)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"interface cannot have access modifiers")))))}m.isMDXComponent=!0}}]);