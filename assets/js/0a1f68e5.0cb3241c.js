"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[6746],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=i,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},51893:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(83117),i=(r(67294),r(3905));const o={},a="TypeScript Example",s={unversionedId:"interviewPrep/designPatterns/Creational_patterns/Builder/typescript/readme",id:"interviewPrep/designPatterns/Creational_patterns/Builder/typescript/readme",title:"TypeScript Example",description:"",source:"@site/docs/interviewPrep/designPatterns/Creational_patterns/Builder/typescript/readme.md",sourceDirName:"interviewPrep/designPatterns/Creational_patterns/Builder/typescript",slug:"/interviewPrep/designPatterns/Creational_patterns/Builder/typescript/",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Builder/typescript/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Creational_patterns/Builder/typescript/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Example 2",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Builder/swift/example2"},next:{title:"Factory",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Factory/"}},c={},l=[],u={toc:l};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"typescript-example"},"TypeScript Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'/**\n * Builder Design Pattern\n *\n * Intent: Lets you construct complex objects step by step. The pattern allows\n * you to produce different types and representations of an object using the\n * same construction code.\n */\n\n/**\n * The Builder interface specifies methods for creating the different parts of\n * the Product objects.\n */\ninterface Builder {\n  producePartA(): void;\n  producePartB(): void;\n  producePartC(): void;\n}\n\n/**\n * The Concrete Builder classes follow the Builder interface and provide\n * specific implementations of the building steps. Your program may have several\n * variations of Builders, implemented differently.\n */\nclass ConcreteBuilder1 implements Builder {\n  private product: Product1;\n\n  /**\n   * A fresh builder instance should contain a blank product object, which is\n   * used in further assembly.\n   */\n  constructor() {\n    this.reset();\n  }\n\n  public reset(): void {\n    this.product = new Product1();\n  }\n\n  /**\n   * All production steps work with the same product instance.\n   */\n  public producePartA(): void {\n    this.product.parts.push("PartA1");\n  }\n\n  public producePartB(): void {\n    this.product.parts.push("PartB1");\n  }\n\n  public producePartC(): void {\n    this.product.parts.push("PartC1");\n  }\n\n  /**\n   * Concrete Builders are supposed to provide their own methods for\n   * retrieving results. That\'s because various types of builders may create\n   * entirely different products that don\'t follow the same interface.\n   * Therefore, such methods cannot be declared in the base Builder interface\n   * (at least in a statically typed programming language).\n   *\n   * Usually, after returning the end result to the client, a builder instance\n   * is expected to be ready to start producing another product. That\'s why\n   * it\'s a usual practice to call the reset method at the end of the\n   * `getProduct` method body. However, this behavior is not mandatory, and\n   * you can make your builders wait for an explicit reset call from the\n   * client code before disposing of the previous result.\n   */\n  public getProduct(): Product1 {\n    const result = this.product;\n    this.reset();\n    return result;\n  }\n}\n\n/**\n * It makes sense to use the Builder pattern only when your products are quite\n * complex and require extensive configuration.\n *\n * Unlike in other creational patterns, different concrete builders can produce\n * unrelated products. In other words, results of various builders may not\n * always follow the same interface.\n */\nclass Product1 {\n  public parts: string[] = [];\n\n  public listParts(): void {\n    console.log(`Product parts: ${this.parts.join(", ")}\\n`);\n  }\n}\n\n/**\n * The Director is only responsible for executing the building steps in a\n * particular sequence. It is helpful when producing products according to a\n * specific order or configuration. Strictly speaking, the Director class is\n * optional, since the client can control builders directly.\n */\nclass Director {\n  private builder: Builder;\n\n  /**\n   * The Director works with any builder instance that the client code passes\n   * to it. This way, the client code may alter the final type of the newly\n   * assembled product.\n   */\n  public setBuilder(builder: Builder): void {\n    this.builder = builder;\n  }\n\n  /**\n   * The Director can construct several product variations using the same\n   * building steps.\n   */\n  public buildMinimalViableProduct(): void {\n    this.builder.producePartA();\n  }\n\n  public buildFullFeaturedProduct(): void {\n    this.builder.producePartA();\n    this.builder.producePartB();\n    this.builder.producePartC();\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'/**\n * The client code creates a builder object, passes it to the director and then\n * initiates the construction process. The end result is retrieved from the\n * builder object.\n */\nfunction clientCode(director: Director) {\n  const builder = new ConcreteBuilder1();\n  director.setBuilder(builder);\n\n  console.log("Standard basic product:");\n  director.buildMinimalViableProduct();\n  builder.getProduct().listParts();\n\n  console.log("Standard full featured product:");\n  director.buildFullFeaturedProduct();\n  builder.getProduct().listParts();\n\n  // Remember, the Builder pattern can be used without a Director class.\n  console.log("Custom product:");\n  builder.producePartA();\n  builder.producePartC();\n  builder.getProduct().listParts();\n}\n\nconst director = new Director();\nclientCode(director);\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Standard basic product:\nProduct parts: PartA1\n\nStandard full featured product:\nProduct parts: PartA1, PartB1, PartC1\n\nCustom product:\nProduct parts: PartA1, PartC1\n")))}d.isMDXComponent=!0}}]);