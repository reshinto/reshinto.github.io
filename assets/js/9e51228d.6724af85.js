"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[6499],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(t),u=o,d=f["".concat(i,".").concat(u)]||f[u]||m[u]||a;return t?r.createElement(d,p(p({ref:n},l),{},{components:t})):r.createElement(d,p({ref:n},l))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=f;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var s=2;s<a;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},31007:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(83117),o=(t(67294),t(3905));const a={},p="Example 3",c={unversionedId:"interviewPrep/designPatterns/Structural_patterns/Decorator/python/example3",id:"interviewPrep/designPatterns/Structural_patterns/Decorator/python/example3",title:"Example 3",description:"",source:"@site/docs/interviewPrep/designPatterns/Structural_patterns/Decorator/python/example3.md",sourceDirName:"interviewPrep/designPatterns/Structural_patterns/Decorator/python",slug:"/interviewPrep/designPatterns/Structural_patterns/Decorator/python/example3",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Decorator/python/example3",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Structural_patterns/Decorator/python/example3.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Example 2",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Decorator/python/example2"},next:{title:"Swift Example",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Decorator/swift/"}},i={},s=[],l={toc:s};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"example-3"},"Example 3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class Component:\n    """\n    The base Component interface defines operations that can be altered by\n    decorators.\n    """\n\n    def operation(self) -> str:\n        pass\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from Component import Component\n\n\nclass Decorator(Component):\n    """\n    The base Decorator class follows the same interface as the other components.\n    The primary purpose of this class is to define the wrapping interface for\n    all concrete decorators. The default implementation of the wrapping code\n    might include a field for storing a wrapped component and the means to\n    initialize it.\n    """\n\n    _component: Component = None\n\n    def __init__(self, component: Component) -> None:\n        self._component = component\n\n    @property\n    def component(self) -> str:\n        """\n        The Decorator delegates all work to the wrapped component.\n        """\n\n        return self._component\n\n    def operation(self) -> str:\n        return self._component.operation()\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from Component import Component\n\n\nclass ConcreteComponent(Component):\n    """\n    Concrete Components provide default implementations of the operations. There\n    might be several variations of these classes.\n    """\n\n    def operation(self) -> str:\n        return "ConcreteComponent"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from Decorator import Decorator\n\n\nclass ConcreteDecoratorA(Decorator):\n    """\n    Concrete Decorators call the wrapped object and alter its result in some\n    way.\n    """\n\n    def operation(self) -> str:\n        """\n        Decorators may call parent implementation of the operation, instead of\n        calling the wrapped object directly. This approach simplifies extension\n        of decorator classes.\n        """\n        return f"ConcreteDecoratorA({self.component.operation()})"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from Decorator import Decorator\n\n\nclass ConcreteDecoratorB(Decorator):\n    """\n    Decorators can execute their behavior either before or after the call to a\n    wrapped object.\n    """\n\n    def operation(self) -> str:\n        return f"ConcreteDecoratorB({self.component.operation()})"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'"""\nDecorator Design Pattern\n\nIntent: Lets you attach new behaviors to objects by placing these objects inside\nspecial wrapper objects that contain the behaviors.\n"""\n\n\nfrom Component import Component\nfrom ConcreteComponent import ConcreteComponent\nfrom ConcreteDecoratorA import ConcreteDecoratorA\nfrom ConcreteDecoratorB import ConcreteDecoratorB\n\n\ndef client_code(component: Component) -> None:\n    """\n    The client code works with all objects using the Component interface. This\n    way it can stay independent of the concrete classes of components it works\n    with.\n    """\n\n    # ...\n\n    print(f"RESULT: {component.operation()}", end="")\n\n    # ...\n\n\nif __name__ == "__main__":\n    # This way the client code can support both simple components...\n    simple = ConcreteComponent()\n    print("Client: I\'ve got a simple component:")\n    client_code(simple)\n    print("\\n")\n\n    # ...as well as decorated ones.\n    #\n    # Note how decorators can wrap not only simple components but the other\n    # decorators as well.\n    decorator1 = ConcreteDecoratorA(simple)\n    decorator2 = ConcreteDecoratorB(decorator1)\n    print("Client: Now I\'ve got a decorated component:")\n    client_code(decorator2)\n')))}m.isMDXComponent=!0}}]);