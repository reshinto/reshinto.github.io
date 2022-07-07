"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[2800],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(r),m=a,h=p["".concat(u,".").concat(m)]||p[m]||s[m]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},81733:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const o={},i="Redux store",l={unversionedId:"frontend/react/redux/reduxThunk/store",id:"frontend/react/redux/reduxThunk/store",title:"Redux store",description:"Basic redux",source:"@site/docs/frontend/react/redux/reduxThunk/store.md",sourceDirName:"frontend/react/redux/reduxThunk",slug:"/frontend/react/redux/reduxThunk/store",permalink:"/docs/frontend/react/redux/reduxThunk/store",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/frontend/react/redux/reduxThunk/store.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Reducer in redux",permalink:"/docs/frontend/react/redux/reduxThunk/reducer"},next:{title:"Using redux in components",permalink:"/docs/frontend/react/redux/reduxThunk/usingReduxInComponents"}},u={},d=[{value:"Basic redux",id:"basic-redux",level:2},{value:"Installation",id:"installation",level:3},{value:"Store creation, subscription, utilization",id:"store-creation-subscription-utilization",level:3},{value:"Import required tools from <code>redux</code>, <code>actions</code>, and <code>reducers</code>",id:"import-required-tools-from-redux-actions-and-reducers",level:4},{value:"Create store",id:"create-store",level:4},{value:"Subscribe store",id:"subscribe-store",level:4},{value:"Utilize store through dispatching actions",id:"utilize-store-through-dispatching-actions",level:4},{value:"React Redux",id:"react-redux",level:2},{value:"Installation",id:"installation-1",level:3},{value:"Store creation and utilization",id:"store-creation-and-utilization",level:3},{value:"Import <code>createStore from redux</code>, and <code>reducers</code>",id:"import-createstore-from-redux-and-reducers",level:4},{value:"Create store",id:"create-store-1",level:4},{value:"Utilize store at the root of the react app",id:"utilize-store-at-the-root-of-the-react-app",level:4}],c={toc:d};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"redux-store"},"Redux store"),(0,a.kt)("h2",{id:"basic-redux"},"Basic redux"),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npm i redux")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn add redux")),(0,a.kt)("h3",{id:"store-creation-subscription-utilization"},"Store creation, subscription, utilization"),(0,a.kt)("h4",{id:"import-required-tools-from-redux-actions-and-reducers"},"Import required tools from ",(0,a.kt)("inlineCode",{parentName:"h4"},"redux"),", ",(0,a.kt)("inlineCode",{parentName:"h4"},"actions"),", and ",(0,a.kt)("inlineCode",{parentName:"h4"},"reducers")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import {createStore, combineReducers} from "redux"; // combineReducers only required if have multiple reducers\nimport {name1Action} from "./name1Action.js";\nimport {name2Action} from "./name2Action.js";\n\nimport {name1Reducer} from "./name1Reducer.js";\nimport {name2Reducer} from "./name2Reducer.js";\n')),(0,a.kt)("h4",{id:"create-store"},"Create store"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1 reducer")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const store = createStore(name1Reducer);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"multiple reducers")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const store = createStore(\n  combineReducers({\n    name1Reducer,\n    name2Reducer,\n  })\n);\n")),(0,a.kt)("h4",{id:"subscribe-store"},"Subscribe store"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"subscribe monitors changes of state to update the UI")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"store.subscribe(() => {\n  // can print state here if needed\n  console.log(store.getState());\n});\n")),(0,a.kt)("h4",{id:"utilize-store-through-dispatching-actions"},"Utilize store through dispatching actions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"store.dispatch(name1Action(arg1)); // action must be called be (), add arg value if available\n")),(0,a.kt)("h2",{id:"react-redux"},"React Redux"),(0,a.kt)("h3",{id:"installation-1"},"Installation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"basic installation\n",(0,a.kt)("inlineCode",{parentName:"li"},"npm i redux react-redux")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn add redux react-redux")),(0,a.kt)("li",{parentName:"ul"},"Install redux-thunk if needed to handle async actions\n",(0,a.kt)("inlineCode",{parentName:"li"},"npm i redux react-redux redux-thunk")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn add redux react-redux redux-thunk")),(0,a.kt)("li",{parentName:"ul"},"Install redux devtools extension to enable devtools support without using the basic redux method (optional)\n",(0,a.kt)("inlineCode",{parentName:"li"},"npm i redux react-redux redux-thunk redux-devtools-extension")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn add redux react-redux redux-thunk redux-devtools-extension"))),(0,a.kt)("h3",{id:"store-creation-and-utilization"},"Store creation and utilization"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"create a ",(0,a.kt)("inlineCode",{parentName:"li"},"store.js")," file anywhere in the ",(0,a.kt)("inlineCode",{parentName:"li"},"src")," folder")),(0,a.kt)("h4",{id:"import-createstore-from-redux-and-reducers"},"Import ",(0,a.kt)("inlineCode",{parentName:"h4"},"createStore from redux"),", and ",(0,a.kt)("inlineCode",{parentName:"h4"},"reducers")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// combineReducers only required if have multiple reducers\n// applyMiddleware only required if using redux-thunk middleware\n// compose only required if using the method to enable redux devtools\nimport {createStore, combineReducers, applyMiddleware, compose} from "redux";\nimport thunk from "redux-thunk"; // import only if required\nimport {composeWithDevTools} from "redux-devtools-extension/developmentOnly"; // required if not using compose\n\nimport {name1Reducer} from "./name1Reducer.js";\nimport {name2Reducer} from "./name2Reducer.js";\n')),(0,a.kt)("h4",{id:"create-store-1"},"Create store"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1 reducer")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"export default createStore(name1Reducer);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"multiple reducers")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"export default createStore(\n  combineReducers({\n    name1Reducer,\n    name2Reducer,\n  })\n);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"apply basic thunk middleware")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"export default createStore(\n  combineReducers({\n    name1Reducer,\n    name2Reducer,\n  }),\n  applyMiddleware(thunk)\n);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"enable thunk with redux devtools using default method from redux library")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"export default createStore(\n  combineReducers({\n    name1Reducer,\n    name2Reducer,\n  }),\n  compose(\n    applyMiddleware(thunk),\n    window.__REDUX_DEVTOOLS_EXTENSION__\n      ? window.__REDUX_DEVTOOLS_EXTENSION__()\n      : (f) => f\n  )\n);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"enable thunk with redux devtools using external library")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// May optionally specify it to hydrate the state from the server in universal apps\n// or to restore a previously serialized user session.\n// If produced reducer with combineReducers, this must be a plain object with the same shape as the keys passed to it.\n// Otherwise, free to pass anything that the reducer can understand.\nconst initialState = {};\n\n// enable multiple middlewares\nconst middleware = [thunk];\n\n// A reducing function that returns the next state tree, given the current state tree and an action to handle\nconst reducers = combineReducers({\n  name1Reducer,\n  name2Reducer,\n});\n\n// may optionally specify it to enhance the store with third-party capabilities\n// such as middleware, time travel, persistence, etc.\nconst enhancer = composeWithDevTools(applyMiddleware(...middleware));\n\nconst store = createStore(reducers, initialState, enhancer);\n\nexport default store;\n")),(0,a.kt)("h4",{id:"utilize-store-at-the-root-of-the-react-app"},"Utilize store at the root of the react app"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\nimport {Provider} from "react-redux";\nimport store from "./store";\n\nfunction App() {\n  return (\n    <Provider store={store}>\n      <div></div>\n    </Provider>\n  );\n}\n\nexport default App;\n')))}s.isMDXComponent=!0}}]);