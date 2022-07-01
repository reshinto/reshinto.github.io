"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[42],{3905:(n,t,e)=>{e.d(t,{Zo:()=>u,kt:()=>h});var a=e(7294);function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,a)}return e}function s(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){o(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function i(n,t){if(null==n)return{};var e,a,o=function(n,t){if(null==n)return{};var e,a,o={},r=Object.keys(n);for(a=0;a<r.length;a++)e=r[a],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)e=r[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var c=a.createContext({}),p=function(n){var t=a.useContext(c),e=t;return n&&(e="function"==typeof n?n(t):s(s({},t),n)),e},u=function(n){var t=p(n.components);return a.createElement(c.Provider,{value:t},n.children)},l={inlineCode:"code",wrapper:function(n){var t=n.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(n,t){var e=n.components,o=n.mdxType,r=n.originalType,c=n.parentName,u=i(n,["components","mdxType","originalType","parentName"]),d=p(e),h=o,m=d["".concat(c,".").concat(h)]||d[h]||l[h]||r;return e?a.createElement(m,s(s({ref:t},u),{},{components:e})):a.createElement(m,s({ref:t},u))}));function h(n,t){var e=arguments,o=t&&t.mdxType;if("string"==typeof n||o){var r=e.length,s=new Array(r);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=n,i.mdxType="string"==typeof n?n:o,s[1]=i;for(var p=2;p<r;p++)s[p]=e[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,e)}d.displayName="MDXCreateElement"},3276:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=e(7462),o=(e(7294),e(3905));const r={},s="Action in redux",i={unversionedId:"frontend/react/redux/reduxThunk/action",id:"frontend/react/redux/reduxThunk/action",title:"Action in redux",description:"action without redux-thunk",source:"@site/docs/frontend/react/redux/reduxThunk/action.md",sourceDirName:"frontend/react/redux/reduxThunk",slug:"/frontend/react/redux/reduxThunk/action",permalink:"/docs/frontend/react/redux/reduxThunk/action",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/frontend/react/redux/reduxThunk/action.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Requires the following libraries",permalink:"/docs/frontend/react/redux/reduxSaga/"},next:{title:"Reducer in redux",permalink:"/docs/frontend/react/redux/reduxThunk/reducer"}},c={},p=[{value:"action without redux-thunk",id:"action-without-redux-thunk",level:2},{value:"no arguments (synchronous)",id:"no-arguments-synchronous",level:3},{value:"have argument to set value (synchronous)",id:"have-argument-to-set-value-synchronous",level:3},{value:"action with redux-thunk",id:"action-with-redux-thunk",level:2},{value:"no arguments (asynchronous)",id:"no-arguments-asynchronous",level:3},{value:"have argument to set value (asynchronous)",id:"have-argument-to-set-value-asynchronous",level:3},{value:"refactored actions",id:"refactored-actions",level:2},{value:"reusable api call",id:"reusable-api-call",level:3}],u={toc:p};function l(n){let{components:t,...e}=n;return(0,o.kt)("wrapper",(0,a.Z)({},u,e,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"action-in-redux"},"Action in redux"),(0,o.kt)("h2",{id:"action-without-redux-thunk"},"action without redux-thunk"),(0,o.kt)("h3",{id:"no-arguments-synchronous"},"no arguments (synchronous)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import * as actionTypes from "./types"; // import to prevent manual type declaration\n\nexport const resetAction = () => {\n  return {\n    type: actionTypes.RESET,\n  };\n};\n')),(0,o.kt)("h3",{id:"have-argument-to-set-value-synchronous"},"have argument to set value (synchronous)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import * as actionTypes from "./types";\n\nexport const setAction = (value) => {\n  return {\n    type: actionTypes.SET,\n    payload: value,\n  };\n};\n')),(0,o.kt)("h2",{id:"action-with-redux-thunk"},"action with redux-thunk"),(0,o.kt)("h3",{id:"no-arguments-asynchronous"},"no arguments (asynchronous)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"fetch")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import * as actionTypes from "./types";\n\nexport const getAction = () => async (dispatch, getState) => {\n  const URL = "http://www.someurl.com";\n  try {\n    const res = await fetch(URL);\n    const data = await res.json();\n    dispatch({\n      type: actionTypes.GET,\n      payload: data,\n    });\n  } catch (error) {\n    doSomething(error);\n  }\n};\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"axios")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import axios from "axios";\nimport * as actionTypes from "../types";\n\nexport const getAction = () => (dispatch, state) => {\n  const URL = "http://www.someurl.com";\n  axios\n    .get(URL)\n    .then(res => {\n      dispatch({\n        type: actionTypes.GET,\n        payload: res.data,\n      });\n    })\n    .catch(error => {\n      doSomething(error);\n    }\n};\n')),(0,o.kt)("h3",{id:"have-argument-to-set-value-asynchronous"},"have argument to set value (asynchronous)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"fetch post")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import * as actionTypes from "./types";\n\nexport const postAction = (value, token) => async (dispatch, getState) => {\n  const URL = "http://www.someurl.com";\n  const postData = {\n    value,\n  };\n  const config = {\n    method: "POST",\n    headers: {\n      Accept: "application/json",\n      "Content-Type": "application/json",\n      Authorization: token, // only required if needs token for authentication\n    },\n    body: JSON.stringify(postData),\n  };\n  try {\n    const res = await fetch(URL, config);\n    const data = await res.JSON();\n    dispatch({\n      type: actionTypes.POST_DATA,\n      payload: data,\n    });\n  } catch (error) {\n    doSomething(error);\n  }\n};\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"axios post")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import axios from "axios";\nimport * as actionTypes from "../types";\n\nexport const postAction = (value, token) => (dispatch, getState) => {\n  const URL = "http://www.someurl.com";\n  const postData = {\n    value,\n  };\n  const config = {\n    method: "POST",\n    headers: {\n      "Content-Type": "application/json",\n      "Authorization": token,  // only required if need token for authentication\n    },\n  };\n  axios\n    .post(URL, postData, config))\n    .then(res => {\n      dispatch({\n        type: actionTypes.POST_DATA,\n        payload: res.data,\n      });\n    })\n    .catch(error => {\n      doSomething(error);\n    });\n};\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"fetch put")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import * as actionTypes from "../types";\n\nexport const editData = (id, somethingToEdit) => async (dispatch) => {\n  const URL = "http://www.someurl.com";\n  const queryURL = `/${id}`;\n  const data = {\n    somethingToEdit,\n  };\n  const config = {\n    method: "PUT",\n    headers: {\n      Accept: "application/json",\n      "Content-Type": "application/json",\n    },\n    body: JSON.stringify(data),\n  };\n  try {\n    await fetch(`${URL}${queryURL}`, config);\n    dispatch({\n      type: actionTypes.EDIT_DATA,\n    });\n  } catch (error) {\n    doSomething(error);\n  }\n};\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"axios put")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import axios from "axios";\nimport * as actionTypes from "../types";\n\nexport const editData = (id, somethingToEdit) => (dispatch, getState) => {\n  const URL = "http://www.someurl.com";\n  const config = {\n    method: "PUT",\n    headers: {\n      Accept: "application/json",\n      "Content-Type": "application/json",\n    },\n  };\n  const token = getState().reducer.token;\n  if (token) {\n    config.headers["Authorization"] = `Bearer ${token}`;\n  }\n  axios\n    .put(`${URL}/${id}`, {id, somethingToEdit}, config)\n    .then((res) => {\n      dispatch({\n        type: actionTypes.EDIT_DATA,\n        payload: res.data,\n      });\n    })\n    .catch((error) => {\n      doSomething(error);\n    });\n};\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"fetch delete")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import * as actionTypes from "../types";\n\nexport const deleteData = (data_id) => async (dispatch, getState) => {\n  const URL = "http://www.someurl.com";\n  const queryURL = `/${data_id}`;\n  const config = {\n    method: "DELETE",\n    headers: {\n      "Content-Type": "application/json",\n    },\n  };\n  const token = getState().reducer.token;\n  if (token) {\n    config.headers["Authorization"] = `Bearer ${token}`;\n  }\n  try {\n    await fetch(`${URL}${queryURL}`, config);\n    dispatch({\n      type: actionTypes.DELETE_DATA,\n    });\n  } catch (error) {\n    doSomething(error);\n  }\n};\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"axios delete")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import axios from "axios";\nimport * as actionTypes from "../types";\n\nexport const deleteData = (data_id) => (dispatch, getState) => {\n  const URL = "http://www.someurl.com";\n  const config = {\n    headers: {\n      "Content-Type": "application/json"\n    }\n  };\n  const token = getState().reducer.token;\n  if (token) {\n    config.headers["Authorization"] = `Bearer ${token}`;\n  }\n  axios\n    .delete(`${URL}/${data_id}`, config))\n    .then(res => {\n      dispatch({\n        type: actionTypes.DELETE_DATA,\n        payload: data_id\n      });\n    })\n    .catch(error => {\n      doSomething(error);\n    });\n};\n')),(0,o.kt)("h2",{id:"refactored-actions"},"refactored actions"),(0,o.kt)("h3",{id:"reusable-api-call"},"reusable api call"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"fetch")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// data is an object\nconst fetchCall =\n  (url, method, data, actionType) => async (dispatch, getState) => {\n    const getToken = getState().reducer.token; // modify this to get stored token\n    const config = {\n      method,\n      headers: {\n        Accept: "application/json",\n        "Content-Type": "application/json",\n        Authorization: getToken ? `Bearer ${getToken}` : "",\n      },\n      body: JSON.stringify(data),\n    };\n    try {\n      const res = await fetch(`${url}`, config);\n      const _data = await res.json();\n      dispatch({\n        type: actionType,\n        payload: _data,\n      });\n    } catch (error) {\n      doSomething(error);\n    }\n  };\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"axios")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import axios from "axios";\n\n// data is an object\nconst axiosCall = (url, method, data, actionType) => (dispatch, getState) => {\n  const getToken = getState().reducer.token; // modify this to get stored token\n  axios({\n    method,\n    url,\n    data,\n    headers: {\n      "Content-Type": "application/json",\n      Authorization: getToken ? `Bearer ${getToken}` : "",\n    },\n  })\n    .then((res) => {\n      if (res.status !== 200 && res.status !== 201 && res.status !== 204) {\n        throw new Error(`Something went wrong with ${methodName}`);\n      }\n      dispatch({\n        type: actionType,\n        payload: res.data,\n      });\n    })\n    .catch((error) => {\n      doSomething(error);\n    });\n};\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"using refactored api calls")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import * as actionTypes from "./actionTypes";\n\nconst URL = "http://www.someurl.com";\n\nexport getData = () => {\n  // method 1\n  fetchCall(`${URL}`, "GET", null, actionTypes.GET_DATA);\n  // method 2\n  axiosCall(`${URL}`, "GET", null, actionTypes.GET_DATA);\n};\n\nexport postData = (data) => {\n  // method 1\n  fetchCall(`${URL}`, "POST", {data}, actionTypes.GET_DATA);\n  // method 2\n  axiosCall(`${URL}`, "POST", {data}, actionTypes.GET_DATA);\n};\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"fetch v2")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'/**\n * setup config for api request\n *\n * @name setupConfig\n * @function\n * @param {string} method http request method\n * @param {object} bodyData data to be parsed to the server\n * @param {object} getState token value stored in a reducer state, modify if using different reducer for token\n * @param {object} restHeaders add additional headers, ignore if not in use\n * @returns {object} returns the entire config file required for http request\n */\nconst setupConfig = (method, getState, bodyData, restHeaders) => {\n  const config = {\n    method,\n    headers: {\n      Accept: "application/json",\n      "Content-Type": "application/json",\n      ...restHeaders,\n    },\n    body: bodyData,\n  };\n  // modify reducer if different\n  let token = "";\n  if (getState().authReducer) {\n    token = getState().authReducer.token;\n  }\n  if (token) {\n    config.headers.Authorization = `Bearer ${token}`;\n  }\n  return config;\n};\n\n/**\n * Enable CORS during API request\n *\n * @name enableCORS\n * @function\n * @param {string} url api URL address\n * @returns {string} returns the proxy url to prevent CORS error\n */\nconst enableCORS = (url) => {\n  return `https://cors-anywhere.herokuapp.com/${url}`;\n};\n\n/**\n * execute API request\n *\n * @name fetchCall\n * @function\n * @param {string} url api url address\n * @param {string} method http request method\n * @param {string} actionType redux types\n * @param {object} bodyData parse data to server, ignore if not in use\n * @param {object} restHeaders add addition headers, ignore if not in use\n */\nexport default function fetchCall(\n  url,\n  method,\n  actionType,\n  bodyData,\n  restHeaders\n) {\n  return async (dispatch, getState) => {\n    const URL = enableCORS(url);\n    const config = setupConfig(method, getState, bodyData, restHeaders);\n    try {\n      const res = await fetch(URL, config);\n      if (res.status >= 200 && res.status < 300) {\n        const data = await res.json();\n        dispatch({\n          type: actionType,\n          payload: data,\n        });\n      }\n    } catch (error) {\n      // handle error\n    }\n  };\n}\n')))}l.isMDXComponent=!0}}]);