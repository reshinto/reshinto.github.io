"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[7126],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,g=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return n?a.createElement(g,s(s({ref:t},m),{},{components:n})):a.createElement(g,s({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(83117),r=(n(67294),n(3905));const o={},s="SuperTest for testing the server (incomplete)",i={unversionedId:"Technologies/automatedTests/javascript/superTest",id:"Technologies/automatedTests/javascript/superTest",title:"SuperTest for testing the server (incomplete)",description:"Installation",source:"@site/docs/Technologies/automatedTests/javascript/superTest.md",sourceDirName:"Technologies/automatedTests/javascript",slug:"/Technologies/automatedTests/javascript/superTest",permalink:"/docs/Technologies/automatedTests/javascript/superTest",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/Technologies/automatedTests/javascript/superTest.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mocha & Chai",permalink:"/docs/Technologies/automatedTests/javascript/mochaAndChai"},next:{title:"Test-Driven Development (TDD)",permalink:"/docs/Technologies/automatedTests/testDrivenDevelopment"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Setup",id:"setup",level:2},{value:"run test automatically",id:"run-test-automatically",level:3},{value:"Test example",id:"test-example",level:2},{value:"database",id:"database",level:3},{value:"mongodb",id:"mongodb",level:4}],m={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"supertest-for-testing-the-server-incomplete"},"SuperTest for testing the server (incomplete)"),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install and setup ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/reshinto/Basic_technologies_revision/blob/master/automatedTests/mochaAndChai.md"},"mocha & chai, and babel")),(0,r.kt)("li",{parentName:"ul"},"Install the server framework such as ",(0,r.kt)("a",{parentName:"li",href:"https://expressjs.com/"},"Express"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"npm i express"))),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/visionmedia/supertest#readme"},"supertest"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"npm i --save-dev supertest"))),(0,r.kt)("li",{parentName:"ul"},"Enable Async/Await support, Mocha does not support this by default",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/regenerator/tree/master/packages/regenerator-runtime"},"regenerator-runtime")," library",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"npm i --save-dev regenerator-runtime")))))),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"mocha-setup.js")," file",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"need to import regenerator-runtime library before running any test with the following content")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import "regenerator-runtime/runtime";\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"add the file to the scripts in the ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," file")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'"scripts": {\n  "test": "npx mocha \'test/**/*.test.js\' --recursive --require @babel/register --file mocha-setup.js"\n}\n')))),(0,r.kt)("h3",{id:"run-test-automatically"},"run test automatically"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"add ",(0,r.kt)("inlineCode",{parentName:"li"},"-watch")," into the script in the package.json file")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"scripts": {\n  "test": "npx mocha \'test/**/*.test.js\' --recursive --require @babel/register --file mocha-setup.js -watch"\n},\n')),(0,r.kt)("h2",{id:"test-example"},"Test example"),(0,r.kt)("h3",{id:"database"},"database"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"create a ",(0,r.kt)("inlineCode",{parentName:"li"},"db.js")," and a ",(0,r.kt)("inlineCode",{parentName:"li"},"db.test.js")," file"),(0,r.kt)("li",{parentName:"ul"},"in the ",(0,r.kt)("inlineCode",{parentName:"li"},"db.test.js")," file fill in the default template")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import {expect} from "chai";\nimport {getUserByUsername} from "../src/db.js";\n\ndescribe("getUserByUsername", () => {\n  it("get the correct user from the database given a username", async () => {});\n});\n')),(0,r.kt)("h4",{id:"mongodb"},"mongodb"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"npm i mongodb")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ensure mongodb is running before testing",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"mongod --dbpath ./TEST_DB")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import {MongoClient} from "mongodb";\nimport {expect} from "chai";\nimport {getUserByUsername} from "../src/db.js";\n\ndescribe("getUserByUsername", () => {\n  it("get the correct user from the database given a username", async () => {\n    const client = await MongoClient.connect(\n      "mongodb://localhost:27017/TEST_DB",\n      {\n        useNewUrlParser: true,\n        useUnifiedTopology: true,\n      }\n    );\n\n    const db = client.db("TEST_DB");\n\n    // write tests here\n\n    client.close();\n  });\n});\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"add fake data (1 data that we want, and 1 data that we do not want)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import {MongoClient} from "mongodb";\nimport {expect} from "chai";\nimport {getUserByUsername} from "../src/db.js";\n\ndescribe("getUserByUsername", () => {\n  it("get the correct user from the database given a username", async () => {\n    const client = await MongoClient.connect(\n      "mongodb://localhost:27017/TEST_DB",\n      {\n        useNewUrlParser: true,\n        useUnifiedTopology: true,\n      }\n    );\n\n    const db = client.db("TEST_DB");\n\n    // add fake data\n    const fakeData = [\n      {\n        // data that we want\n        id: "123",\n        username: "abc",\n        email: "abc@gmail.com",\n      },\n      {\n        // data that we do not want\n        id: "124",\n        username: "wrong",\n        email: "wrong@wrong.com",\n      },\n    ];\n\n    // write tests here\n\n    client.close();\n  });\n});\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"insert fake data to the database")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import {MongoClient} from "mongodb";\nimport {expect} from "chai";\nimport {getUserByUsername} from "../src/db.js";\n\ndescribe("getUserByUsername", () => {\n  it("get the correct user from the database given a username", async () => {\n    const client = await MongoClient.connect(\n      "mongodb://localhost:27017/TEST_DB",\n      {\n        useNewUrlParser: true,\n        useUnifiedTopology: true,\n      }\n    );\n\n    const db = client.db("TEST_DB");\n\n    // add fake data\n    const fakeData = [\n      {\n        // data that we want\n        id: "123",\n        username: "abc",\n        email: "abc@gmail.com",\n      },\n      {\n        // data that we do not want\n        id: "124",\n        username: "wrong",\n        email: "wrong@wrong.com",\n      },\n    ];\n\n    // insert fake data\n    await db.collection("users").insertMany(fakeData);\n\n    // write tests here\n\n    client.close();\n  });\n});\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"write test")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import {MongoClient} from "mongodb";\nimport {expect} from "chai";\nimport {getUserByUsername} from "../src/db.js";\n\ndescribe("getUserByUsername", () => {\n  it("get the correct user from the database given a username", async () => {\n    const client = await MongoClient.connect(\n      "mongodb://localhost:27017/TEST_DB",\n      {\n        useNewUrlParser: true,\n        useUnifiedTopology: true,\n      }\n    );\n\n    const db = client.db("TEST_DB");\n\n    // add fake data\n    const fakeData = [\n      {\n        // data that we want\n        id: "123",\n        username: "abc",\n        email: "abc@gmail.com",\n      },\n      {\n        // data that we do not want\n        id: "124",\n        username: "wrong",\n        email: "wrong@wrong.com",\n      },\n    ];\n\n    // insert fake data\n    await db.collection("users").insertMany(fakeData);\n\n    // write tests here\n    const actual = await getUserByUsername("abc");\n    const finalDBState = await db.collection("users").find().toArray();\n    // need to drop database to prevent it from affecting other tests\n    await db.dropDatabase(); // need to call this here instead of after the assertion is because if any of the assertions fail, the drop database function after it would not be executed\n    client.close();\n\n    const expected = {\n      id: "123",\n      username: "abc",\n      email: "abc@gmail.com",\n    };\n\n    expect(actual).to.deep.equal(expected);\n    expect(finalDBState).to.deep.equal(fakeData); // check to make sure final db state = to the initial db state, & make sure the function that we are testing did not harm the db in anyway\n  });\n});\n')))}p.isMDXComponent=!0}}]);