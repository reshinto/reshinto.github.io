"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[86684],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(r),g=a,y=m["".concat(l,".").concat(g)]||m[g]||u[g]||i;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78071:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=r(83117),a=(r(67294),r(3905));const i={},o="Java Example",p={unversionedId:"interviewPrep/designPatterns/Structural_patterns/Flyweight/java/readme",id:"interviewPrep/designPatterns/Structural_patterns/Flyweight/java/readme",title:"Java Example",description:"- forest",source:"@site/docs/interviewPrep/designPatterns/Structural_patterns/Flyweight/java/readme.md",sourceDirName:"interviewPrep/designPatterns/Structural_patterns/Flyweight/java",slug:"/interviewPrep/designPatterns/Structural_patterns/Flyweight/java/",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Flyweight/java/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Structural_patterns/Flyweight/java/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Go Example",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Flyweight/go/"},next:{title:"JavaScript Example",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Flyweight/javascript/"}},l={},s=[],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"java-example"},"Java Example"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"forest"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"forest/Forest.java"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"package refactoring_guru.flyweight.example.forest;\n\nimport refactoring_guru.flyweight.example.trees.Tree;\nimport refactoring_guru.flyweight.example.trees.TreeFactory;\nimport refactoring_guru.flyweight.example.trees.TreeType;\n\nimport javax.swing.*;\nimport java.awt.*;\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic class Forest extends JFrame {\n    private List<Tree> trees = new ArrayList<>();\n\n    public void plantTree(int x, int y, String name, Color color, String otherTreeData) {\n        TreeType type = TreeFactory.getTreeType(name, color, otherTreeData);\n        Tree tree = new Tree(x, y, type);\n        trees.add(tree);\n    }\n\n    @Override\n    public void paint(Graphics graphics) {\n        for (Tree tree : trees) {\n            tree.draw(graphics);\n        }\n    }\n}\n"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"trees"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"trees/Tree.java"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"package refactoring_guru.flyweight.example.trees;\n\nimport java.awt.*;\n\npublic class Tree {\n    private int x;\n    private int y;\n    private TreeType type;\n\n    public Tree(int x, int y, TreeType type) {\n        this.x = x;\n        this.y = y;\n        this.type = type;\n    }\n\n    public void draw(Graphics g) {\n        type.draw(g, x, y);\n    }\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"trees/TreeFactory.java"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"package refactoring_guru.flyweight.example.trees;\n\nimport java.awt.*;\nimport java.util.HashMap;\nimport java.util.Map;\n\npublic class TreeFactory {\n    static Map<String, TreeType> treeTypes = new HashMap<>();\n\n    public static TreeType getTreeType(String name, Color color, String otherTreeData) {\n        TreeType result = treeTypes.get(name);\n        if (result == null) {\n            result = new TreeType(name, color, otherTreeData);\n            treeTypes.put(name, result);\n        }\n        return result;\n    }\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"trees/TreeType.java"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"package refactoring_guru.flyweight.example.trees;\n\nimport java.awt.*;\n\npublic class TreeType {\n    private String name;\n    private Color color;\n    private String otherTreeData;\n\n    public TreeType(String name, Color color, String otherTreeData) {\n        this.name = name;\n        this.color = color;\n        this.otherTreeData = otherTreeData;\n    }\n\n    public void draw(Graphics g, int x, int y) {\n        g.setColor(Color.BLACK);\n        g.fillRect(x - 1, y, 3, 5);\n        g.setColor(color);\n        g.fillOval(x - 5, y - 10, 10, 10);\n    }\n}\n"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Demo.java"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package refactoring_guru.flyweight.example;\n\nimport refactoring_guru.flyweight.example.forest.Forest;\n\nimport java.awt.*;\n\npublic class Demo {\n    static int CANVAS_SIZE = 500;\n    static int TREES_TO_DRAW = 1000000;\n    static int TREE_TYPES = 2;\n\n    public static void main(String[] args) {\n        Forest forest = new Forest();\n        for (int i = 0; i < Math.floor(TREES_TO_DRAW / TREE_TYPES); i++) {\n            forest.plantTree(random(0, CANVAS_SIZE), random(0, CANVAS_SIZE),\n                    "Summer Oak", Color.GREEN, "Oak texture stub");\n            forest.plantTree(random(0, CANVAS_SIZE), random(0, CANVAS_SIZE),\n                    "Autumn Oak", Color.ORANGE, "Autumn Oak texture stub");\n        }\n        forest.setSize(CANVAS_SIZE, CANVAS_SIZE);\n        forest.setVisible(true);\n\n        System.out.println(TREES_TO_DRAW + " trees drawn");\n        System.out.println("---------------------");\n        System.out.println("Memory usage:");\n        System.out.println("Tree size (8 bytes) * " + TREES_TO_DRAW);\n        System.out.println("+ TreeTypes size (~30 bytes) * " + TREE_TYPES + "");\n        System.out.println("---------------------");\n        System.out.println("Total: " + ((TREES_TO_DRAW * 8 + TREE_TYPES * 30) / 1024 / 1024) +\n                "MB (instead of " + ((TREES_TO_DRAW * 38) / 1024 / 1024) + "MB)");\n    }\n\n    private static int random(int min, int max) {\n        return min + (int) (Math.random() * ((max - min) + 1));\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1000000 trees drawn\n---------------------\nMemory usage:\nTree size (8 bytes) * 1000000\n+ TreeTypes size (~30 bytes) * 2\n---------------------\nTotal: 7MB (instead of 36MB)\n")))}u.isMDXComponent=!0}}]);