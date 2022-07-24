"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[4685],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},17285:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(83117),a=(t(67294),t(3905));const o={},i="Demos",c={unversionedId:"languageSpecific/java/demo/readme",id:"languageSpecific/java/demo/readme",title:"Demos",description:"Threads wasting CPU cycles demo",source:"@site/docs/languageSpecific/java/demo/readme.md",sourceDirName:"languageSpecific/java/demo",slug:"/languageSpecific/java/demo/",permalink:"/docs/languageSpecific/java/demo/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/languageSpecific/java/demo/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GUI example",permalink:"/docs/languageSpecific/java/GUI/"},next:{title:"Java 9",permalink:"/docs/languageSpecific/java/java9/"}},s={},l=[{value:"Threads wasting CPU cycles demo",id:"threads-wasting-cpu-cycles-demo",level:2},{value:"Concurrency execution scheduling",id:"concurrency-execution-scheduling",level:3}],u={toc:l};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"demos"},"Demos"),(0,a.kt)("h2",{id:"threads-wasting-cpu-cycles-demo"},"Threads wasting CPU cycles demo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * Threads that waste CPU cycles\n * uses java 11\n * run command: javac ThreadProcessDemo.java && java ThreadProcessDemo\n */\n\n// a simple thread that wastes CPU cycles forever\nclass CPUWaster extends Thread {\n    public void run() {\n        while (true) {}\n    }\n}\n\npublic class ThreadProcessDemo {\n    public static void main(String args[]) throws InterruptedException {\n\n        // display current information about this process\n        Runtime rt = Runtime.getRuntime();\n        long usedKB = (rt.totalMemory() - rt.freeMemory()) / 1024 ;\n        System.out.format("  Process ID: %d\\n", ProcessHandle.current().pid());\n        System.out.format("Thread Count: %d\\n", Thread.activeCount());\n        System.out.format("Memory Usage: %d KB\\n", usedKB);\n\n        // start 6 new threads\n        System.out.println("\\nStarting 6 CPUWaster threads...\\n");\n        for (int i=0; i<6; i++)\n            new CPUWaster().start();\n\n        // display current information about this process\n        usedKB = (rt.totalMemory() - rt.freeMemory()) / 1024 ;\n        System.out.format("  Process ID: %d\\n", ProcessHandle.current().pid());\n        System.out.format("Thread Count: %d\\n", Thread.activeCount());\n        System.out.format("Memory Usage: %d KB\\n", usedKB);\n    }\n}\n')),(0,a.kt)("h3",{id:"concurrency-execution-scheduling"},"Concurrency execution scheduling"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * Two threads chopping vegetables\n * uses java 11\n * run command: javac ExecutionSchedulingDemo.java && java ExecutionSchedulingDemo\n */\n\nclass VegetableChopper extends Thread{\n\n    public int vegetable_count = 0;\n    public static boolean chopping = true;\n\n    public VegetableChopper(String name) {\n        this.setName(name);\n    }\n\n    public void run() {\n        while(chopping) {\n            System.out.println(this.getName() + " chopped a vegetable!");\n            vegetable_count++;\n        }\n    }\n}\n\npublic class ExecutionSchedulingDemo {\n    public static void main(String args[]) throws InterruptedException {\n        VegetableChopper barron = new VegetableChopper("Barron");\n        VegetableChopper olivia = new VegetableChopper("Olivia");\n\n        barron.start();                     // Barron start chopping\n        olivia.start();                     // Olivia start chopping\n        Thread.sleep(1000);                 // continue chopping for 1 second\n        VegetableChopper.chopping = false;  // stop chopping\n\n        barron.join();\n        olivia.join();\n        System.out.format("Barron chopped %d vegetables.\\n", barron.vegetable_count);\n        System.out.format("Olivia chopped %d vegetables.\\n", olivia.vegetable_count);\n    }\n}\n')))}p.isMDXComponent=!0}}]);