"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[7946],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(t),g=r,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||i;return t?a.createElement(m,l(l({ref:n},c),{},{components:t})):a.createElement(m,l({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},47643:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=t(87462),r=(t(67294),t(3905));const i={},l="Java Example",o={unversionedId:"interviewPrep/designPatterns/Creational_patterns/Singleton/java/readme",id:"interviewPrep/designPatterns/Creational_patterns/Singleton/java/readme",title:"Java Example",description:"Non Thread Safe",source:"@site/docs/interviewPrep/designPatterns/Creational_patterns/Singleton/java/readme.md",sourceDirName:"interviewPrep/designPatterns/Creational_patterns/Singleton/java",slug:"/interviewPrep/designPatterns/Creational_patterns/Singleton/java/",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Singleton/java/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Creational_patterns/Singleton/java/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Example 2",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Singleton/go/example2"},next:{title:"JavaScript Example",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Singleton/javascript/"}},s={},u=[{value:"Non Thread Safe",id:"non-thread-safe",level:2},{value:"Thread Safe",id:"thread-safe",level:2}],c={toc:u};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"java-example"},"Java Example"),(0,r.kt)("h2",{id:"non-thread-safe"},"Non Thread Safe"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Singleton")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"package refactoring_guru.singleton.example.non_thread_safe;\n\npublic final class Singleton {\n    private static Singleton instance;\n    public String value;\n\n    private Singleton(String value) {\n        // The following code emulates slow initialization.\n        try {\n            Thread.sleep(1000);\n        } catch (InterruptedException ex) {\n            ex.printStackTrace();\n        }\n        this.value = value;\n    }\n\n    public static Singleton getInstance(String value) {\n        if (instance == null) {\n            instance = new Singleton(value);\n        }\n        return instance;\n    }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Multi Thread")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package refactoring_guru.singleton.example.non_thread_safe;\n\npublic class DemoMultiThread {\n    public static void main(String[] args) {\n        System.out.println("If you see the same value, then singleton was reused (yay!)" + "\\n" +\n                "If you see different values, then 2 singletons were created (booo!!)" + "\\n\\n" +\n                "RESULT:" + "\\n");\n        Thread threadFoo = new Thread(new ThreadFoo());\n        Thread threadBar = new Thread(new ThreadBar());\n        threadFoo.start();\n        threadBar.start();\n    }\n\n    static class ThreadFoo implements Runnable {\n        @Override\n        public void run() {\n            Singleton singleton = Singleton.getInstance("FOO");\n            System.out.println(singleton.value);\n        }\n    }\n\n    static class ThreadBar implements Runnable {\n        @Override\n        public void run() {\n            Singleton singleton = Singleton.getInstance("BAR");\n            System.out.println(singleton.value);\n        }\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"If you see the same value, then singleton was reused (yay!)\nIf you see different values, then 2 singletons were created (booo!!)\n\nRESULT:\n\nFOO\nBAR\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Single Thread")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package refactoring_guru.singleton.example.non_thread_safe;\n\npublic class DemoSingleThread {\n    public static void main(String[] args) {\n        System.out.println("If you see the same value, then singleton was reused (yay!)" + "\\n" +\n                "If you see different values, then 2 singletons were created (booo!!)" + "\\n\\n" +\n                "RESULT:" + "\\n");\n        Singleton singleton = Singleton.getInstance("FOO");\n        Singleton anotherSingleton = Singleton.getInstance("BAR");\n        System.out.println(singleton.value);\n        System.out.println(anotherSingleton.value);\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"If you see the same value, then singleton was reused (yay!)\nIf you see different values, then 2 singletons were created (booo!!)\n\nRESULT:\n\nFOO\nFOO\n")),(0,r.kt)("h2",{id:"thread-safe"},"Thread Safe"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Singleton")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"package refactoring_guru.singleton.example.thread_safe;\n\npublic final class Singleton {\n    // The field must be declared volatile so that double check lock would work\n    // correctly.\n    private static volatile Singleton instance;\n\n    public String value;\n\n    private Singleton(String value) {\n        this.value = value;\n    }\n\n    public static Singleton getInstance(String value) {\n        // The approach taken here is called double-checked locking (DCL). It\n        // exists to prevent race condition between multiple threads that may\n        // attempt to get singleton instance at the same time, creating separate\n        // instances as a result.\n        //\n        // It may seem that having the `result` variable here is completely\n        // pointless. There is, however, a very important caveat when\n        // implementing double-checked locking in Java, which is solved by\n        // introducing this local variable.\n        //\n        // You can read more info DCL issues in Java here:\n        // https://refactoring.guru/java-dcl-issue\n        Singleton result = instance;\n        if (result != null) {\n            return result;\n        }\n        synchronized(Singleton.class) {\n            if (instance == null) {\n                instance = new Singleton(value);\n            }\n            return instance;\n        }\n    }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Multi Thread")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package refactoring_guru.singleton.example.thread_safe;\n\npublic class DemoMultiThread {\n    public static void main(String[] args) {\n        System.out.println("If you see the same value, then singleton was reused (yay!)" + "\\n" +\n                "If you see different values, then 2 singletons were created (booo!!)" + "\\n\\n" +\n                "RESULT:" + "\\n");\n        Thread threadFoo = new Thread(new ThreadFoo());\n        Thread threadBar = new Thread(new ThreadBar());\n        threadFoo.start();\n        threadBar.start();\n    }\n\n    static class ThreadFoo implements Runnable {\n        @Override\n        public void run() {\n            Singleton singleton = Singleton.getInstance("FOO");\n            System.out.println(singleton.value);\n        }\n    }\n\n    static class ThreadBar implements Runnable {\n        @Override\n        public void run() {\n            Singleton singleton = Singleton.getInstance("BAR");\n            System.out.println(singleton.value);\n        }\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"If you see the same value, then singleton was reused (yay!)\nIf you see different values, then 2 singletons were created (booo!!)\n\nRESULT:\n\nBAR\nBAR\n")))}p.isMDXComponent=!0}}]);