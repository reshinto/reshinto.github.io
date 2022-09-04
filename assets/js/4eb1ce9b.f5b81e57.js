"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[85665],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(n),c=a,k=d["".concat(i,".").concat(c)]||d[c]||m[c]||o;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70781:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=n(83117),a=(n(67294),n(3905));const o={},l="Flask",p={unversionedId:"Technologies/API/flaskTutorial/readme",id:"Technologies/API/flaskTutorial/readme",title:"Flask",description:"How to run",source:"@site/docs/Technologies/API/flaskTutorial/readme.md",sourceDirName:"Technologies/API/flaskTutorial",slug:"/Technologies/API/flaskTutorial/",permalink:"/docs/Technologies/API/flaskTutorial/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/Technologies/API/flaskTutorial/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Add Swagger to Express",permalink:"/docs/Technologies/API/express/swagger/"},next:{title:"Spring",permalink:"/docs/Technologies/API/spring/"}},i={},u=[{value:"How to run",id:"how-to-run",level:2},{value:"method 1",id:"method-1",level:3},{value:"method 2",id:"method-2",level:3},{value:"method 3",id:"method-3",level:3},{value:"Get parameter data from url",id:"get-parameter-data-from-url",level:2},{value:"Post data",id:"post-data",level:2}],s={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"flask"},"Flask"),(0,a.kt)("h2",{id:"how-to-run"},"How to run"),(0,a.kt)("h3",{id:"method-1"},"method 1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"app.py file")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from flask import Flask\n\napp = Flask(__name__)\n\n@app.route("/")\ndef index():\n    return "hello"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"mac",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"export FLASK_ENV=development && export FLASK_APP=app && flask run"))),(0,a.kt)("li",{parentName:"ul"},"windows",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},'cmd /C "set FLASK_ENV=development && set FLASK_APP=app && flask run"')))),(0,a.kt)("h3",{id:"method-2"},"method 2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"app/","_","_","init","_","_",".py file")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from flask import Flask\n\napp = Flask(__name__)\n\n@app.route("/")\ndef index():\n    return "hello"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"mac",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"export FLASK_ENV=development && export FLASK_APP=app && flask run"))),(0,a.kt)("li",{parentName:"ul"},"windows",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},'cmd /C "set FLASK_ENV=development && set FLASK_APP=app && flask run"')))),(0,a.kt)("h3",{id:"method-3"},"method 3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"app.py file")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from flask import Flask\n\napp = Flask(__name__)\n\n@app.route("/")\ndef index():\n    return "hello"\n\nif __name__ == "__main__":\n    app.run(debug=True)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"mac",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"python3 app.py"))),(0,a.kt)("li",{parentName:"ul"},"windows",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"python app.py")))),(0,a.kt)("h2",{id:"get-parameter-data-from-url"},"Get parameter data from url"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from flask import Flask, jsonify\n\napp = Flask(__name__)\n\n\n# method 1\n@app.route("/get/<id>")\ndef get_data(id):\n    return jsonify({"id": id})\n\n\n# method 2\n@app.route("/gets/<id>", methods=["GET"])\ndef gets_data(id):\n    return jsonify({"id": id})\n')),(0,a.kt)("h2",{id:"post-data"},"Post data"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from flask import Flask, request\n\napp = Flask(__name__)\n\n\nclass Model():\n    def __init__(self, name):\n        self.id = 1\n        self.name = name\n\n\n@app.route("/post", methods=["POST"])\ndef post_data():\n    new_item = Model(request.json["name"])\n    return { "id": new_item.id }\n')))}m.isMDXComponent=!0}}]);