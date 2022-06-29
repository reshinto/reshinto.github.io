"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[9643],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),s=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,f=d["".concat(u,".").concat(m)]||d[m]||l[m]||a;return t?o.createElement(f,c(c({ref:n},p),{},{components:t})):o.createElement(f,c({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4663:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=t(7462),r=(t(7294),t(3905));const a={},c="Using redux in components",i={unversionedId:"frontend/react/redux/reduxThunk/usingReduxInComponents",id:"frontend/react/redux/reduxThunk/usingReduxInComponents",title:"Using redux in components",description:"Old method (works for class or functional components)",source:"@site/docs/frontend/react/redux/reduxThunk/usingReduxInComponents.md",sourceDirName:"frontend/react/redux/reduxThunk",slug:"/frontend/react/redux/reduxThunk/usingReduxInComponents",permalink:"/docs/frontend/react/redux/reduxThunk/usingReduxInComponents",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/frontend/react/redux/reduxThunk/usingReduxInComponents.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Redux store",permalink:"/docs/frontend/react/redux/reduxThunk/store"},next:{title:"Webpack Tutorial",permalink:"/docs/frontend/webpack_tutorial"}},u={},s=[{value:"Old method (works for class or functional components)",id:"old-method-works-for-class-or-functional-components",level:2},{value:"New method, using hooks from react-redux library",id:"new-method-using-hooks-from-react-redux-library",level:2}],p={toc:s};function l(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-redux-in-components"},"Using redux in components"),(0,r.kt)("h2",{id:"old-method-works-for-class-or-functional-components"},"Old method (works for class or functional components)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"everything in 1 file")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\nimport { connect } from "react-redux";\nimport { name1Action } from "./nameAction";\n\nfunction App({ count, doAction }) {\n  return (\n    <>\n      <button onClick={doAction}>DoSomething</button>\n      <span>{count}</span>\n    </>\n  )\n};\n\nfunction mapStateToProps(state) {\n  return {\n    count: state.nameReducer.count,  // nameReducer required if using combineReducers\n  };\n}\n\n// method 1, Manually Injecting dispatch\nfunction mapDispatchToProps(dispatch, ownProps) {\n  return {\n    doAction: () => {\n      dispatch(name1Action());\n    },\n  }\n}\n\n// method 2, using object shorthand, Each field of the mapDispatchToProps object is assumed to be an action creator\n// component will no longer receive dispatch as a prop\nconst mapDispatchToProps = {\n  doAction: () => name1Action(),\n}\n\nexport default connect(mapStateToProps, mapDispatchToProps)(App);\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"using containers"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"component")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\n\nexport default function App({ count, doAction }) {\n  return (\n    <>\n      <button onClick={doAction}>DoSomething</button>\n      <span>{count}</span>\n    </>\n  );\n};\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"container")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\nimport { connect } from "react-redux";\nimport App from "./App";\nimport { name1Action } from "./nameAction";\n\nfunction mapStateToProps(state) {\n  return {\n    count: state.nameReducer.count,  // nameReducer required if using combineReducers\n  };\n}\n\n// method 1, Manually Injecting dispatch\nfunction mapDispatchToProps(dispatch, ownProps) {\n  return {\n    doAction: () => {\n      dispatch(name1Action());\n    },\n  }\n}\n\n// method 2, using object shorthand, Each field of the mapDispatchToProps object is assumed to be an action creator\n// component will no longer receive dispatch as a prop\nconst mapDispatchToProps = {\n  doAction: () => name1Action(),\n}\n\nexport default connect(mapStateToProps, mapDispatchToProps)(App);\n')))),(0,r.kt)("h2",{id:"new-method-using-hooks-from-react-redux-library"},"New method, using hooks from react-redux library"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\nimport { useSelector, useDispatch, shallowEqual } from "react-redux";\nimport { name1Action } from "./nameAction";\n\nexport default () => {\n  const count = useSelector((state) => state.counterReducer.count);  // get props from reducer\n  const count2 = useSelector((state) => state.counterReducer.count2, shallowEqual);  // get and compare current value with previous value\n  const dispatch = useDispatch();  // enable dispatch for actions\n  \n  return (\n    <>\n      <button onClick={() => dispatch(name1Action())}>DoSomething</button>\n      <span>{count}</span>\n    </>\n  )\n};\n')))}l.isMDXComponent=!0}}]);