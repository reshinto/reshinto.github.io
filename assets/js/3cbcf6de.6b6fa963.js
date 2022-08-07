"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[56510],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},28082:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(83117),o=(r(67294),r(3905));const a={},i="React Router Dom",c={unversionedId:"Technologies/frontend/react/react-router-dom/readme",id:"Technologies/frontend/react/react-router-dom/readme",title:"React Router Dom",description:"Use Params",source:"@site/docs/Technologies/frontend/react/react-router-dom/readme.md",sourceDirName:"Technologies/frontend/react/react-router-dom",slug:"/Technologies/frontend/react/react-router-dom/",permalink:"/docs/Technologies/frontend/react/react-router-dom/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/Technologies/frontend/react/react-router-dom/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using Formik as forms example",permalink:"/docs/Technologies/frontend/react/Forms/Formik/"},next:{title:"Required dependencies",permalink:"/docs/Technologies/frontend/react/react-router-dom/example/"}},s={},u=[{value:"Use Params",id:"use-params",level:2},{value:"Use history",id:"use-history",level:2},{value:"Private route",id:"private-route",level:2}],p={toc:u};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react-router-dom"},"React Router Dom"),(0,o.kt)("h2",{id:"use-params"},"Use Params"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"setting params in path with router")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\nimport {BrowserRouter as Router, Switch, Route} from "react-router-dom";\nimport Component from "./Component";\n\nexport default () => {\n  return (\n    <Router>\n      <Switch>\n        <Route exact path="/:paramName" component={Component} />\n      </Switch>\n    </Router>\n  );\n};\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"retrieve params with old method")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\n\nexport default (props) => {\n  const {paramName} = props.match.params;\n  return <></>;\n};\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"retrieve params with ",(0,o.kt)("inlineCode",{parentName:"li"},"useParams()"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\nimport {useParams} from "react-router-dom";\n\nexport default () => {\n  const {paramName} = useParams();\n  return <></>;\n};\n')),(0,o.kt)("h2",{id:"use-history"},"Use history"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"go back 1 page")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\nimport {useHistory} from "react-router-dom";\n\nexport default () => {\n  const history = useHistory();\n\n  const handleGoBack = () => {\n    history.goBack();\n  };\n\n  return <div onClick={handleGoBack}>go back</div>;\n};\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"redirect to a page")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\nimport {useHistory} from "react-router-dom";\n\nexport default () => {\n  const history = useHistory();\n\n  const handleRedirect = () => {\n    history.push("/path");\n  };\n\n  return <div onClick={handleRedirect}>redirect</div>;\n};\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"add state when redirecting")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\nimport {useHistory} from "react-router-dom";\n\nexport default () => {\n  const history = useHistory();\n\n  const handleRedirect = () => {\n    history.push("/path", state);\n  };\n\n  return <div onClick={handleRedirect}>redirect</div>;\n};\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"retrieve state after redirect")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\n\nexport default (props) => {\n  const stateArr = props.history.location.state; // returns state in an array\n\n  return <></>;\n};\n')),(0,o.kt)("h2",{id:"private-route"},"Private route"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"old method")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// creating a private route\nimport React from "react";\nimport { Route, Redirect } from "react-router-dom";\nimport { connect } from "react-redux";\n\nconst PrivateRoute = ({ component: Component, redirectPath, loading, isAuthenticated, ...rest }) => (\n  <Route\n    {...rest}\n    render={props => {\n      if (loading) return <div>loading...</div>\n      else if (!isAuthenticated) return <Redirect to=`${redirectPath}` />;\n      else return <Component {...props} />;\n    }}\n  />\n);\n\nconst mapStateToProps = state => ({\n  loading: state.reducer.loading,\n  isAuthenticated: state.reducer.isAuthenticated,\n});\n\nexport default connect(mapStateToProps)(PrivateRoute);\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"using hooks method")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// creating a private route\nimport React from "react";\nimport {useSelector} from "react-redux";\nimport {Route, useHistory} from "react-router-dom";\n\nexport default ({component: Component, redirectPath, ...rest}) => {\n  const {loading, isAuthenticated} = useSelector((state) => state.reducer);\n  const history = useHistory();\n  return (\n    <Route\n      {...rest}\n      render={(props) => {\n        if (loading) return <div>loading...</div>;\n        else if (!isAuthenticated) return history.push(`${redirectPath}`);\n        else return <Component {...props} />;\n      }}\n    />\n  );\n};\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// using private route\nimport React from "react";\nimport {Route} from "react-router-dom";\nimport PrivateRoute from "./PrivateRoute";\nimport Component from "./Component";\n\nexport default () => (\n  <div>\n    <PrivateRoute\n      exact\n      path="/path"\n      component={Component}\n      redirectPath="/redirectpath"\n    />\n  </div>\n);\n')))}l.isMDXComponent=!0}}]);