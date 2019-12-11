(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(6),l=a.n(r),c=(a(79),a(31)),i=a(34),s=a(24),m=a(30),p=a(17),u=a(35),d=a(36),h=a(38),g=a(42),f=a.n(g),y=a(61),E="https://asia-east2-portfolio-server-65b51.cloudfunctions.net/api/portfolios",j=a(148),v=a(139),C=a(142),b=a(144),x=a(147),F=a(146),w=a(39),R=a(145),O=a(62),L=a.n(O),U=a(63),A=a.n(U),k=Object(v.a)((function(e){return{card:{maxWidth:345,margin:e.spacing(2),backgroundColor:"#2C2C2C"},media:{height:190},title:{color:"#CFCFCF"},text:{color:"#6F6F6F"}}}));function D(e){var t=e.loading,a=void 0!==t&&t,n=e.p,r=k();return o.a.createElement(C.a,{className:r.card},o.a.createElement(b.a,{className:r.title,title:a?o.a.createElement(R.a,{height:10,width:"80%",style:{marginBottom:6}}):n.projectName,subheader:a?o.a.createElement(R.a,{height:10,width:"40%"}):o.a.createElement("span",{className:r.text},"Built with ",n.tech)}),a?o.a.createElement(R.a,{variant:"rect",className:r.media}):o.a.createElement(F.a,{className:r.media,image:n.imgURL,title:n.projectName}),o.a.createElement(x.a,null,a?o.a.createElement(o.a.Fragment,null,o.a.createElement(R.a,{height:10,style:{marginBottom:6}}),o.a.createElement(R.a,{height:10,width:"80%"})):o.a.createElement(o.a.Fragment,null,o.a.createElement(w.a,{className:r.text,variant:"body2",color:"textSecondary",component:"p"},n.projectDescription),o.a.createElement(w.a,{variant:"body2",color:"textSecondary",component:"p",style:{display:"flex",justifyContent:"space-around",marginTop:"10px"}},o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:n.projectURL,style:{color:"#6F6F6F"}},o.a.createElement(L.a,null)),""!==n.deployedURL?o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:n.deployedURL,style:{color:"#6F6F6F"}},o.a.createElement(A.a,null)):""))))}function N(e){var t=e.p;return o.a.createElement("div",null,o.a.createElement(D,{p:t}))}var W=function(){return o.a.createElement("div",null,o.a.createElement("h1",{style:{textAlign:"center",color:"#CFCFCF"}},"Hi!"),o.a.createElement("p",{style:{textAlign:"justify",color:"#CFCFCF",margin:"10px 100px"}},"I'm Terence Kong, a self-taught software engineer who is passionate about devising elegant problem-solving methods on top of learning new technologies and tools."),o.a.createElement("h3",{style:{textAlign:"center",color:"#CFCFCF"}},"How it all began."),o.a.createElement("p",{style:{textAlign:"justify",color:"#CFCFCF",margin:"10px 100px"}},"Software engineering has always been an interest of mine. I wrote my first line of code in C++ during polytechnic (High School equivalent) and had graduated with a Diploma in Electronics, Computer, and Communications Engineering."),o.a.createElement("p",{style:{textAlign:"justify",color:"#CFCFCF",margin:"10px 100px"}},"After that, I wanted to acquire a broad and varied knowledge of the arts and sciences, which led me to pursue an International Liberal Arts Degree."),o.a.createElement("p",{style:{textAlign:"justify",color:"#CFCFCF",margin:"10px 100px"}},"During my job experience, I had witnessed the usefulness of programming, especially in the area of workflow automation. Wanting to know more, I delve into expanding my understanding of software engineering, which led me to discover new technologies such as mobile, data science, web, VR / AR, and many more."),o.a.createElement("p",{style:{textAlign:"justify",color:"#CFCFCF",margin:"10px 100px"}},"In all the experiences I went through have cemented my interest in craving the ability to create applications of my own."))},I=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.getPortfolios()}},{key:"render",value:function(){var e=this.props.portfolios,t=[];return t=Object.keys(e),o.a.createElement("div",null,o.a.createElement(W,null),0!==t.length?t.map((function(t,a){return o.a.createElement("div",{key:a},o.a.createElement("hr",null),o.a.createElement("h2",{style:{textAlign:"center",color:"#CFCFCF"}},function(e){var t=e.split(/(?=[A-Z])/),a=[];return t.forEach((function(e){a.push(e.charAt(0).toUpperCase()+e.slice(1))})),a.join(" ")}(t)),o.a.createElement(j.a,{container:!0,spacing:2},o.a.createElement(j.a,{item:!0,xs:12},o.a.createElement(j.a,{container:!0,justify:"center",spacing:2},e[t].map((function(e,t){return o.a.createElement(N,{key:t,p:e})}))))))})):"loading...")}}]),t}(o.a.Component),S={getPortfolios:function(){return function(e,t){f.a.get(E).then((function(t){e({type:"GET_PORTFOLIOS",payload:t.data})})).catch((function(e){console.log(e)}))}}},P=Object(c.b)((function(e){return{portfolios:e.portfolioReducer.portfolios}}),S)(I),T=a(16),B=a(152),_=a(150),H=a(149),J=a(151),q=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={category:"",projectName:"",projectDescription:"",projectURL:"",tech:[],imgURL:"",deployedURL:""},a.handleSubmit=function(e){e.preventDefault();var t,n=a.state,o=n.category,r=n.projectName,l=n.projectDescription,c=n.projectURL,i=n.tech,s=n.imgURL,m=n.deployedURL,p=a.props.portfolios;t=void 0===p[o]?[]:p[o];var u={projectName:r,projectDescription:l,projectURL:c,tech:i,imgURL:s,deployedURL:m};console.log(t),t.push(u),a.props.addProject(o,t),alert("".concat(r," has been added successfully!"))},a.onChange=function(e){return function(t){return a.setState(Object(T.a)({},e,t.target.value))}},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state,t=e.category,a=e.projectName,n=e.projectDescription,r=e.projectURL,l=e.tech,c=e.imgURL,i=e.deployedURL;return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement(H.a,null,o.a.createElement(J.a,{type:"text",name:"category",value:t,onChange:this.onChange("category"),autoFocus:!0,margin:"dense",label:"category",fullWidth:!0})),o.a.createElement(H.a,null,o.a.createElement(J.a,{type:"text",name:"projectName",value:a,onChange:this.onChange("projectName"),margin:"dense",label:"project name",fullWidth:!0})),o.a.createElement(H.a,null,o.a.createElement(J.a,{type:"text",name:"projectDescription",value:n,onChange:this.onChange("projectDescription"),margin:"dense",label:"project description",fullWidth:!0})),o.a.createElement(H.a,null,o.a.createElement(J.a,{type:"text",name:"projectURL",value:r,onChange:this.onChange("projectURL"),margin:"dense",label:"project url",fullWidth:!0})),o.a.createElement(H.a,null,o.a.createElement(J.a,{type:"text",name:"imgURL",value:c,onChange:this.onChange("imgURL"),margin:"dense",label:"image url",fullWidth:!0})),o.a.createElement(H.a,null,o.a.createElement(J.a,{type:"text",name:"deployedURL",value:i,onChange:this.onChange("deployedURL"),margin:"dense",label:"deployed url",fullWidth:!0})),o.a.createElement(H.a,null,o.a.createElement(J.a,{type:"text",name:"tech",value:l,onChange:this.onChange("tech"),margin:"dense",label:"technologies used",fullWidth:!0})),o.a.createElement(_.a,{style:{display:"flex",justifyContent:"center"}},o.a.createElement(B.a,{color:"primary",type:"submit"},"Add Project"))))}}]),t}(o.a.Component),G={addProject:function(e,t){return function(e,t){return function(a,n){var o={};o["".concat(e)]=t,f.a.post("".concat(E,"/update"),o).then((function(e){a({type:"ADD_PROJECT",payload:e.data})})).catch((function(e){console.log(e)}))}}(e,t)}},M=Object(c.b)((function(e){return{portfolios:e.portfolioReducer.portfolios}}),G)(q),K=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{exact:!0,path:"/",component:P}),o.a.createElement(s.a,{exact:!0,path:"/new",component:M}))},V=a(28),Z=a(65),$=a(66),z={portfolios:{}},Q=function(e,t){return a=e,n={portfolios:t.payload},Object(y.a)({},a,{},n);var a,n},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PORTFOLIOS":return Q(e,t);default:return e}},Y=[$.a],ee=Object(V.combineReducers)({portfolioReducer:X}),te=Object(Z.composeWithDevTools)(V.applyMiddleware.apply(void 0,Y)),ae=Object(V.createStore)(ee,{},te);var ne=function(){return o.a.createElement("h1",{style:{textAlign:"center"}})};var oe=function(){return o.a.createElement(c.a,{store:ae},o.a.createElement(i.a,null,o.a.createElement(ne,null),o.a.createElement(K,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},74:function(e,t,a){e.exports=a(103)},79:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.dabf55be.chunk.js.map