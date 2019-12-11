(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),l=a.n(o),c=(a(79),a(33)),i=a(37),s=a(25),m=a(21),u=a(14),p=a(31),h=a(32),d=a(35),g=a(42),f=a.n(g),y=a(61),E="https://asia-east2-portfolio-server-65b51.cloudfunctions.net/api/portfolios",v=a(148),j=a(139),b=a(142),C=a(144),F=a(147),w=a(146),x=a(39),O=a(145),R=a(62),L=a.n(R),U=a(63),D=a.n(U),k=Object(j.a)((function(e){return{card:{maxWidth:345,margin:e.spacing(2),backgroundColor:"#2C2C2C"},media:{height:190},title:{color:"#CFCFCF"},text:{color:"#6F6F6F"}}}));function A(e){var t=e.loading,a=void 0!==t&&t,n=e.p,o=k();return r.a.createElement(b.a,{className:o.card},r.a.createElement(C.a,{className:o.title,title:a?r.a.createElement(O.a,{height:10,width:"80%",style:{marginBottom:6}}):n.projectName,subheader:a?r.a.createElement(O.a,{height:10,width:"40%"}):r.a.createElement("span",{className:o.text},"Built with ",n.tech)}),a?r.a.createElement(O.a,{variant:"rect",className:o.media}):r.a.createElement(w.a,{className:o.media,image:n.imgURL,title:n.projectName}),r.a.createElement(F.a,null,a?r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{height:10,style:{marginBottom:6}}),r.a.createElement(O.a,{height:10,width:"80%"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{className:o.text,variant:"body2",color:"textSecondary",component:"p"},n.projectDescription),r.a.createElement(x.a,{variant:"body2",color:"textSecondary",component:"p",style:{display:"flex",justifyContent:"space-around",marginTop:"10px"}},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:n.projectURL,style:{color:"#6F6F6F"}},r.a.createElement(L.a,null)),""!==n.deployedURL?r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:n.deployedURL,style:{color:"#6F6F6F"}},r.a.createElement(D.a,null)):""))))}function S(e){var t=e.p;return r.a.createElement("div",null,r.a.createElement(A,{p:t}))}var I=0;var N=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={text:["Software Engineer","Full-Stack Developer"],count:0,show:"",isDeleting:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.update()}),250)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"update",value:function(){var e=this.state,t=e.isDeleting,a=e.show,n=this.state.count,r=this.state.text[I].charAt(n);n<=this.state.text[I].length&&!1===t?this.setState({show:a+r,count:this.state.count+1}):(0===a.length?(this.setState({isDeleting:!1,count:0}),I++):this.setState({isDeleting:!0,show:a.slice(0,a.length-1),count:0}),I===this.state.text.length&&(I=0))}},{key:"render",value:function(){return r.a.createElement("div",{style:{margin:"50px"}},r.a.createElement("h1",{style:{textAlign:"center",color:"#CFCFCF"}},"Hey! I am Terence Kong"),r.a.createElement("h2",{style:{textAlign:"center",color:"#CFCFCF"}},"I am a ",this.state.show,r.a.createElement("span",{ref:"word",className:"blink"},"|")),r.a.createElement("p",{style:{textAlign:"justify",color:"#CFCFCF",margin:"2rem 4rem"}},"Self-taught software engineer who is passionate about devising elegant problem-solving methods on top of learning new technologies and tools."),r.a.createElement("h3",{style:{textAlign:"center",color:"#CFCFCF"}},"How it all began."),r.a.createElement("p",{style:{textAlign:"justify",color:"#CFCFCF",margin:"2rem 4rem"}},"Software engineering has always been an interest of mine. I wrote my first line of code in C++ during polytechnic (High School equivalent) and had graduated with a Diploma in Electronics, Computer, and Communications Engineering."),r.a.createElement("p",{style:{textAlign:"justify",color:"#CFCFCF",margin:"2rem 4rem"}},"After that, I wanted to acquire a broad and varied knowledge of the arts and sciences, which led me to pursue an International Liberal Arts Degree."),r.a.createElement("p",{style:{textAlign:"justify",color:"#CFCFCF",margin:"2rem 4rem"}},"During my job experience, I had witnessed the usefulness of programming, especially in the area of workflow automation. Wanting to know more, I delve into expanding my understanding of software engineering, which led me to discover new technologies such as mobile, data science, web, VR / AR, and many more."),r.a.createElement("p",{style:{textAlign:"justify",color:"#CFCFCF",margin:"2rem 4rem"}},"In all the experiences I went through have cemented my interest in craving the ability to create applications of my own."))}}]),t}(r.a.Component),W=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.getPortfolios()}},{key:"render",value:function(){var e=this.props.portfolios,t=[];return(t=Object.keys(e)).sort().reverse(),r.a.createElement("div",null,r.a.createElement(N,null),0!==t.length?t.map((function(t,a){return r.a.createElement("div",{key:a},r.a.createElement("hr",null),r.a.createElement("h2",{style:{textAlign:"center",color:"#CFCFCF"}},function(e){var t=e.split(/(?=[A-Z])/),a=[];return t.forEach((function(e){a.push(e.charAt(0).toUpperCase()+e.slice(1))})),a.join(" ")}(t)),r.a.createElement(v.a,{container:!0,spacing:2},r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(v.a,{container:!0,justify:"center",spacing:2},e[t].map((function(e,t){return r.a.createElement(S,{key:t,p:e})}))))))})):"loading...")}}]),t}(r.a.Component),P={getPortfolios:function(){return function(e,t){f.a.get(E).then((function(t){e({type:"GET_PORTFOLIOS",payload:t.data})})).catch((function(e){console.log(e)}))}}},T=Object(c.b)((function(e){return{portfolios:e.portfolioReducer.portfolios}}),P)(W),B=a(17),_=a(152),H=a(150),J=a(149),M=a(151),q=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={category:"",projectName:"",projectDescription:"",projectURL:"",tech:[],imgURL:"",deployedURL:""},a.handleSubmit=function(e){e.preventDefault();var t,n=a.state,r=n.category,o=n.projectName,l=n.projectDescription,c=n.projectURL,i=n.tech,s=n.imgURL,m=n.deployedURL,u=a.props.portfolios;t=void 0===u[r]?[]:u[r];var p={projectName:o,projectDescription:l,projectURL:c,tech:i,imgURL:s,deployedURL:m};console.log(t),t.push(p),a.props.addProject(r,t),alert("".concat(o," has been added successfully!"))},a.onChange=function(e){return function(t){return a.setState(Object(B.a)({},e,t.target.value))}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.category,a=e.projectName,n=e.projectDescription,o=e.projectURL,l=e.tech,c=e.imgURL,i=e.deployedURL;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(J.a,null,r.a.createElement(M.a,{type:"text",name:"category",value:t,onChange:this.onChange("category"),autoFocus:!0,margin:"dense",label:"category",fullWidth:!0})),r.a.createElement(J.a,null,r.a.createElement(M.a,{type:"text",name:"projectName",value:a,onChange:this.onChange("projectName"),margin:"dense",label:"project name",fullWidth:!0})),r.a.createElement(J.a,null,r.a.createElement(M.a,{type:"text",name:"projectDescription",value:n,onChange:this.onChange("projectDescription"),margin:"dense",label:"project description",fullWidth:!0})),r.a.createElement(J.a,null,r.a.createElement(M.a,{type:"text",name:"projectURL",value:o,onChange:this.onChange("projectURL"),margin:"dense",label:"project url",fullWidth:!0})),r.a.createElement(J.a,null,r.a.createElement(M.a,{type:"text",name:"imgURL",value:c,onChange:this.onChange("imgURL"),margin:"dense",label:"image url",fullWidth:!0})),r.a.createElement(J.a,null,r.a.createElement(M.a,{type:"text",name:"deployedURL",value:i,onChange:this.onChange("deployedURL"),margin:"dense",label:"deployed url",fullWidth:!0})),r.a.createElement(J.a,null,r.a.createElement(M.a,{type:"text",name:"tech",value:l,onChange:this.onChange("tech"),margin:"dense",label:"technologies used",fullWidth:!0})),r.a.createElement(H.a,{style:{display:"flex",justifyContent:"center"}},r.a.createElement(_.a,{color:"primary",type:"submit"},"Add Project"))))}}]),t}(r.a.Component),G={addProject:function(e,t){return function(e,t){return function(a,n){var r={};r["".concat(e)]=t,f.a.post("".concat(E,"/update"),r).then((function(e){a({type:"ADD_PROJECT",payload:e.data})})).catch((function(e){console.log(e)}))}}(e,t)}},K=Object(c.b)((function(e){return{portfolios:e.portfolioReducer.portfolios}}),G)(q),V=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{exact:!0,path:"/",component:T}),r.a.createElement(s.a,{exact:!0,path:"/new",component:K}))},Z=a(29),$=a(65),z=a(66),Q={portfolios:{}},X=function(e,t){return a=e,n={portfolios:t.payload},Object(y.a)({},a,{},n);var a,n},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PORTFOLIOS":return X(e,t);default:return e}},ee=[z.a],te=Object(Z.combineReducers)({portfolioReducer:Y}),ae=Object($.composeWithDevTools)(Z.applyMiddleware.apply(void 0,ee)),ne=Object(Z.createStore)(te,{},ae);var re=function(){return r.a.createElement("h1",{style:{textAlign:"center"}})};var oe=function(){return r.a.createElement(c.a,{store:ne},r.a.createElement(i.a,null,r.a.createElement(re,null),r.a.createElement(V,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},74:function(e,t,a){e.exports=a(103)},79:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.c8a47c84.chunk.js.map