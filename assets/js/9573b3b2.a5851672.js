"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[118],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||g[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},16583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(83117),a=(n(67294),n(3905));const o={},i="Example 3: Singleton Borg",s={unversionedId:"interviewPrep/designPatterns/Creational_patterns/Singleton/python/example3",id:"interviewPrep/designPatterns/Creational_patterns/Singleton/python/example3",title:"Example 3: Singleton Borg",description:"",source:"@site/docs/interviewPrep/designPatterns/Creational_patterns/Singleton/python/example3.md",sourceDirName:"interviewPrep/designPatterns/Creational_patterns/Singleton/python",slug:"/interviewPrep/designPatterns/Creational_patterns/Singleton/python/example3",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Singleton/python/example3",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Creational_patterns/Singleton/python/example3.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Example 2",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Singleton/python/example2"},next:{title:"Swift Example",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Singleton/swift/"}},l={},p=[],c={toc:p};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"example-3-singleton-borg"},"Example 3: Singleton Borg"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'class Borg:\n    """Borg class making class attributes global"""\n    _shared_state = {}  # Attribute dictionary\n\n    def __init__(self):\n        self.__dict__ = self._shared_state  # Make it an attribute dictionary\n\n\nclass Singleton(Borg):  # Inherits from the Borg class\n    """This class now shares all its attributes among its various instances"""\n    # This essentially makes the singleton objects an object-oriented global variable\n\n    def __init__(self, **kwargs):\n        Borg.__init__(self)\n        # Update the attribute dictionary by inserting a new key-value pair\n        self._shared_state.update(kwargs)\n\n    def __str__(self):\n        # Returns the attribute dictionary for printing\n        return str(self._shared_state)\n\n\n# create a singleton object and add first acronym\nx = Singleton(HTTP="Hyper Text Transfer Protocol")\n# print the object\nprint(x)\n# {\'HTTP\': \'Hyper Text Transfer Protocol\'}\n\n# create another singleton object and if it refers to the same attribute dictionary by adding another acronym\ny = Singleton(SNMP="Single Network Management Protocol")\n# print the object\nprint(y)\n# {\'HTTP\': \'Hyper Text Transfer Protocol\', \'SNMP\': \'Single Network Management Protocol\'}\n')))}g.isMDXComponent=!0}}]);