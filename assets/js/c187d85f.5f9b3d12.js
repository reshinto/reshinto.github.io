"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[6475],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(n),d=a,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},41468:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},s="Java Example",i={unversionedId:"interviewPrep/designPatterns/Behavioral_patterns/Template/java/readme",id:"interviewPrep/designPatterns/Behavioral_patterns/Template/java/readme",title:"Java Example",description:"- networks",source:"@site/docs/interviewPrep/designPatterns/Behavioral_patterns/Template/java/readme.md",sourceDirName:"interviewPrep/designPatterns/Behavioral_patterns/Template/java",slug:"/interviewPrep/designPatterns/Behavioral_patterns/Template/java/",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Template/java/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Behavioral_patterns/Template/java/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Go Example",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Template/go/"},next:{title:"JavaScript Example",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Template/javascript/"}},p={},l=[],u={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"java-example"},"Java Example"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"networks"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"networks/Facebook.java"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package refactoring_guru.template_method.example.networks;\n\n/**\n * Class of social network\n*/\npublic class Facebook extends Network {\n    public Facebook(String userName, String password) {\n        this.userName = userName;\n        this.password = password;\n    }\n\n    public boolean logIn(String userName, String password) {\n        System.out.println("\\nChecking user\'s parameters");\n        System.out.println("Name: " + this.userName);\n        System.out.print("Password: ");\n        for (int i = 0; i < this.password.length(); i++) {\n            System.out.print("*");\n        }\n        simulateNetworkLatency();\n        System.out.println("\\n\\nLogIn success on Facebook");\n        return true;\n    }\n\n    public boolean sendData(byte[] data) {\n        boolean messagePosted = true;\n        if (messagePosted) {\n            System.out.println("Message: \'" + new String(data) + "\' was posted on Facebook");\n            return true;\n        } else {\n            return false;\n        }\n    }\n\n    public void logOut() {\n        System.out.println("User: \'" + userName + "\' was logged out from Facebook");\n    }\n\n    private void simulateNetworkLatency() {\n        try {\n            int i = 0;\n            System.out.println();\n            while (i < 10) {\n                System.out.print(".");\n                Thread.sleep(500);\n                i++;\n            }\n        } catch (InterruptedException ex) {\n            ex.printStackTrace();\n        }\n    }\n}\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"networks/Network.java"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"package refactoring_guru.template_method.example.networks;\n\n/**\n * Base class of social network.\n*/\npublic abstract class Network {\n    String userName;\n    String password;\n\n    Network() {}\n\n    /**\n     * Publish the data to whatever network.\n     */\n    public boolean post(String message) {\n        // Authenticate before posting. Every network uses a different\n        // authentication method.\n        if (logIn(this.userName, this.password)) {\n            // Send the post data.\n            boolean result =  sendData(message.getBytes());\n            logOut();\n            return result;\n        }\n        return false;\n    }\n\n    abstract boolean logIn(String userName, String password);\n    abstract boolean sendData(byte[] data);\n    abstract void logOut();\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"networks/Twitter.java"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package refactoring_guru.template_method.example.networks;\n\n/**\n * Class of social network\n*/\npublic class Twitter extends Network {\n\n    public Twitter(String userName, String password) {\n        this.userName = userName;\n        this.password = password;\n    }\n\n    public boolean logIn(String userName, String password) {\n        System.out.println("\\nChecking user\'s parameters");\n        System.out.println("Name: " + this.userName);\n        System.out.print("Password: ");\n        for (int i = 0; i < this.password.length(); i++) {\n            System.out.print("*");\n        }\n        simulateNetworkLatency();\n        System.out.println("\\n\\nLogIn success on Twitter");\n        return true;\n    }\n\n    public boolean sendData(byte[] data) {\n        boolean messagePosted = true;\n        if (messagePosted) {\n            System.out.println("Message: \'" + new String(data) + "\' was posted on Twitter");\n            return true;\n        } else {\n            return false;\n        }\n    }\n\n    public void logOut() {\n        System.out.println("User: \'" + userName + "\' was logged out from Twitter");\n    }\n\n    private void simulateNetworkLatency() {\n        try {\n            int i = 0;\n            System.out.println();\n            while (i < 10) {\n                System.out.print(".");\n                Thread.sleep(500);\n                i++;\n            }\n        } catch (InterruptedException ex) {\n            ex.printStackTrace();\n        }\n    }\n}\n'))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Demo.java"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package refactoring_guru.template_method.example;\n\nimport refactoring_guru.template_method.example.networks.Facebook;\nimport refactoring_guru.template_method.example.networks.Network;\nimport refactoring_guru.template_method.example.networks.Twitter;\n\nimport java.io.BufferedReader;\nimport java.io.IOException;\nimport java.io.InputStreamReader;\n\n/**\n * Demo class. Everything comes together here.\n */\npublic class Demo {\n    public static void main(String[] args) throws IOException {\n        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));\n        Network network = null;\n        System.out.print("Input user name: ");\n        String userName = reader.readLine();\n        System.out.print("Input password: ");\n        String password = reader.readLine();\n\n        // Enter the message.\n        System.out.print("Input message: ");\n        String message = reader.readLine();\n\n        System.out.println("\\nChoose social network for posting message.\\n" +\n                "1 - Facebook\\n" +\n                "2 - Twitter");\n        int choice = Integer.parseInt(reader.readLine());\n\n        // Create proper network object and send the message.\n        if (choice == 1) {\n            network = new Facebook(userName, password);\n        } else if (choice == 2) {\n            network = new Twitter(userName, password);\n        }\n        network.post(message);\n    }\n}\n')),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"Input user name: Jhonatan\nInput password: qswe\nInput message: Hello, World!\n\nChoose social network for posting message.\n1 - Facebook\n2 - Twitter\n2\n\nChecking user's parameters\nName: Jhonatan\nPassword: ****\n..........\n\nLogIn success on Twitter\nMessage: 'Hello, World!' was posted on Twitter\nUser: 'Jhonatan' was logged out from Twitter\n")))))}m.isMDXComponent=!0}}]);