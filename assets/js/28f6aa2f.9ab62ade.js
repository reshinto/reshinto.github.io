"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[7484],{3905:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>d});var t=r(7294);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=t.createContext({}),u=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},l=function(e){var n=u(e.components);return t.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=u(r),d=s,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return r?t.createElement(f,a(a({ref:n},l),{},{components:r})):t.createElement(f,a({ref:n},l))}));function d(e,n){var r=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:s,a[1]=p;for(var u=2;u<o;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3444:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var t=r(7462),s=(r(7294),r(3905));const o={},a="Express",p={unversionedId:"API/express/readme",id:"API/express/readme",title:"Express",description:"- index.ts",source:"@site/docs/API/express/readme.md",sourceDirName:"API/express",slug:"/API/express/",permalink:"/docs/API/express/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/API/express/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Difference between REST and SOAP APIs",permalink:"/docs/API/REST_and_SOAP_diff"},next:{title:"Add Swagger to Express",permalink:"/docs/API/express/swagger/"}},i={},u=[],l={toc:u};function c(e){let{components:n,...r}=e;return(0,s.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"express"},"Express"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"index.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'import express, {Request, Response, NextFunction, Errback} from "express";\nimport userRouter from "./user-route";\n\nconst app = express();\nconst PORT = 3000;\n\n// -------------------------\n// app properties\n// -------------------------\n\napp.set("appName", "Task 2.1");\napp.set("isAdmin", true);\n\nconsole.log("=== BEFORE: appName:", app.get("appName"));\nconsole.log("=== BEFORE: isAdmin:", app.get("isAdmin"));\n\napp.disable("appName");\napp.disable("isAdmin");\n\nconsole.log("=== AFTER: appName:", app.get("appName"));\nconsole.log("=== AFTER: isAdmin:", app.get("isAdmin"));\n\n// -------------------------\n// app settings\n// -------------------------\n\n// allow routes with different cases to be different routes\napp.set("case sensitive routing", true); // default value is false\n\n// url route must be exact to how it was defined in the route\n// eg: http://localhost:3000/test/ will give an error for this case\napp.set("strict routing", true); // default value is false\n\n// info in the header that provides information on what tech is being used for this app\napp.set("x-powered-by", false); // default value is true\n\n// bad practice to handle routes without router\napp.get("/Test", (req: Request, res: Response) => res.send("Hey 1"));\napp.get("/test", (req: Request, res: Response) => res.send("Hey 2"));\n\n// -------------------------\n// app middlewares\n// -------------------------\n\n// allow parsing of json body\napp.use(express.json());\n\napp.use((req: Request, res: Response, next: NextFunction) => {\n  console.log("Time:", Date.now());\n  next();\n});\n\napp.use("user/:id", (req: Request, res: Response, next: NextFunction) => {\n  console.log("Request URL:", req.originalUrl);\n  next();\n});\n\n// -------------------------\n// router level\n// -------------------------\n\napp.use(userRouter);\n\n// -------------------------\n// error-handling middleware\n// -------------------------\n\napp.use((req: Request, res: Response, next: NextFunction) => {\n  throw new Error("Oops, error: (");\n});\n\napp.use((err: Errback, req: Request, res: Response, next: NextFunction) => {\n  console.log(err);\n  res.status(500).send("Something broke!");\n});\n\napp.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"user-route.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'import express, {Request, Response} from "express";\nimport Joi from "joi";\nimport {validateSchema} from "./utils";\n\nconst userRouter = express.Router();\n\nexport const userSchema = Joi.object().keys({\n  id: Joi.number().integer().required(),\n  name: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),\n  age: Joi.number().integer().min(18).max(99),\n  isAdmin: Joi.boolean().required(),\n});\n\nconst users = [\n  {id: 1, name: "Diana", age: 21, isAdmin: true},\n  {id: 2, name: "Max", age: 24, isAdmin: false},\n  {id: 3, name: "Mary", age: 23, isAdmin: false},\n];\n\nuserRouter.get("/users", (req: Request, res: Response) => {\n  const {order = "asc"} = req.query;\n\n  return order === "desc" ? res.json(users.reverse()) : res.json(users);\n});\n\nuserRouter.get("/users/:id", (req: Request, res: Response) => {\n  const {id} = req.params;\n  const user = users.find((_user) => _user.id === parseInt(id, 10));\n\n  res.json(user);\n});\n\nuserRouter.post(\n  "/users",\n  validateSchema(userSchema),\n  (req: Request, res: Response) => {\n    const user = req.body;\n\n    const newUsers = [...users, user];\n\n    res.json(newUsers);\n  }\n);\n\nexport default userRouter;\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"utils.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'import {Schema, Context} from "joi";\nimport {Request, Response, NextFunction} from "express";\n\ntype schemaErrorsType = {\n  message: string;\n  path: (string | number)[];\n  type: string;\n  context?: Context;\n};\n\ntype errorResponseType = {\n  status: string;\n  errors: {path: (string | number)[]; message: string}[];\n};\n\nexport const errorResponse = (\n  schemaErrors: schemaErrorsType[]\n): errorResponseType => {\n  const errors = schemaErrors.map(\n    ({path, message}: {path: (string | number)[]; message: string}) => ({\n      path,\n      message,\n    })\n  );\n\n  return {\n    status: "failed",\n    errors,\n  };\n};\n\nexport const validateSchema = (schema: Schema) => {\n  return (\n    req: Request,\n    res: Response,\n    next: NextFunction\n  ): Response | undefined => {\n    const {error} = schema.validate(req.body, {\n      abortEarly: true,\n      allowUnknown: false,\n    });\n\n    if (error && error.isJoi) {\n      console.log(errorResponse(error.details));\n      return res.status(400).json(errorResponse(error.details));\n    }\n\n    next();\n  };\n};\n')))}c.isMDXComponent=!0}}]);