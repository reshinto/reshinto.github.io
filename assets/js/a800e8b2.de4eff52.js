"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[50650],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},71557:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=t(83117),a=(t(67294),t(3905));const o={},i="C# Example",p={unversionedId:"interviewPrep/designPatterns/Creational_patterns/Prototype/cSharp/readme",id:"interviewPrep/designPatterns/Creational_patterns/Prototype/cSharp/readme",title:"C# Example",description:"Example",source:"@site/docs/interviewPrep/designPatterns/Creational_patterns/Prototype/cSharp/readme.md",sourceDirName:"interviewPrep/designPatterns/Creational_patterns/Prototype/cSharp",slug:"/interviewPrep/designPatterns/Creational_patterns/Prototype/cSharp/",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Prototype/cSharp/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Creational_patterns/Prototype/cSharp/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"C++ Example",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Prototype/cPlusPlus/"},next:{title:"Go Example",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Prototype/go/"}},s={},l=[],c={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"c-example"},"C# Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// Prototype Design Pattern\n//\n// Intent: Lets you copy existing objects without making your code dependent on\n// their classes.\n\nusing System;\n\nnamespace RefactoringGuru.DesignPatterns.Prototype.Conceptual\n{\n    public class Person\n    {\n        public int Age;\n        public DateTime BirthDate;\n        public string Name;\n        public IdInfo IdInfo;\n\n        public Person ShallowCopy()\n        {\n            return (Person) this.MemberwiseClone();\n        }\n\n        public Person DeepCopy()\n        {\n            Person clone = (Person) this.MemberwiseClone();\n            clone.IdInfo = new IdInfo(IdInfo.IdNumber);\n            clone.Name = String.Copy(Name);\n            return clone;\n        }\n    }\n\n    public class IdInfo\n    {\n        public int IdNumber;\n\n        public IdInfo(int idNumber)\n        {\n            this.IdNumber = idNumber;\n        }\n    }\n\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            Person p1 = new Person();\n            p1.Age = 42;\n            p1.BirthDate = Convert.ToDateTime("1977-01-01");\n            p1.Name = "Jack Daniels";\n            p1.IdInfo = new IdInfo(666);\n\n            // Perform a shallow copy of p1 and assign it to p2.\n            Person p2 = p1.ShallowCopy();\n            // Make a deep copy of p1 and assign it to p3.\n            Person p3 = p1.DeepCopy();\n\n            // Display values of p1, p2 and p3.\n            Console.WriteLine("Original values of p1, p2, p3:");\n            Console.WriteLine("   p1 instance values: ");\n            DisplayValues(p1);\n            Console.WriteLine("   p2 instance values:");\n            DisplayValues(p2);\n            Console.WriteLine("   p3 instance values:");\n            DisplayValues(p3);\n\n            // Change the value of p1 properties and display the values of p1,\n            // p2 and p3.\n            p1.Age = 32;\n            p1.BirthDate = Convert.ToDateTime("1900-01-01");\n            p1.Name = "Frank";\n            p1.IdInfo.IdNumber = 7878;\n            Console.WriteLine("\\nValues of p1, p2 and p3 after changes to p1:");\n            Console.WriteLine("   p1 instance values: ");\n            DisplayValues(p1);\n            Console.WriteLine("   p2 instance values (reference values have changed):");\n            DisplayValues(p2);\n            Console.WriteLine("   p3 instance values (everything was kept the same):");\n            DisplayValues(p3);\n        }\n\n        public static void DisplayValues(Person p)\n        {\n            Console.WriteLine("      Name: {0:s}, Age: {1:d}, BirthDate: {2:MM/dd/yy}",\n                p.Name, p.Age, p.BirthDate);\n            Console.WriteLine("      ID#: {0:d}", p.IdInfo.IdNumber);\n        }\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Original values of p1, p2, p3:\n   p1 instance values:\n      Name: Jack Daniels, Age: 42, BirthDate: 01/01/77\n      ID#: 666\n   p2 instance values:\n      Name: Jack Daniels, Age: 42, BirthDate: 01/01/77\n      ID#: 666\n   p3 instance values:\n      Name: Jack Daniels, Age: 42, BirthDate: 01/01/77\n      ID#: 666\n\nValues of p1, p2 and p3 after changes to p1:\n   p1 instance values:\n      Name: Frank, Age: 32, BirthDate: 01/01/00\n      ID#: 7878\n   p2 instance values (reference values have changed):\n      Name: Jack Daniels, Age: 42, BirthDate: 01/01/77\n      ID#: 7878\n   p3 instance values (everything was kept the same):\n      Name: Jack Daniels, Age: 42, BirthDate: 01/01/77\n      ID#: 666\n")))}u.isMDXComponent=!0}}]);