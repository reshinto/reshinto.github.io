(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{118:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),l=n.n(o),c=(n(94),n(16)),i=n(40),s=n(29),u=n(13),m=n(11),p=n(14),h=n(15),d=n(17),f=n(166),g=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).activate=function(){var e=document.createElement("script");e.type="text/javascript",document.body.appendChild(e),e.src="//hi.kickassapp.com/kickass.js"},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{margin:"2rem",textAlign:"center",color:"#CFCFCF"}},r.a.createElement("h3",{style:{fontSize:"2rem"}},"My Story ..."),r.a.createElement("p",{style:{margin:"2rem 4rem",fontSize:"1rem"}},"Software engineering has always had a place in my life. My first experience with code was back in Singapore polytechnic (High School equivalent), where I wrote my first line of code in C++. The feeling I got from that of being able to create something out of nothing was just mind-blowing. I would graduate from the course with a diploma in Electronics, Computer, and Communications Engineering."),r.a.createElement("p",{style:{margin:"2rem 4rem",fontSize:"1rem"}},"Wanting to acquire a broader and varied knowledge of the arts and sciences, I travelled to Japan to pursue an International Liberal Arts Degree at Waseda University instead of a STEM degree in Singapore. Over there, I gained the ability to recognize the political, social, historical, and philosophical implications of contemporary experience, which is critical to life-long learning."),r.a.createElement("p",{style:{margin:"2rem 4rem",fontSize:"1rem"}},"My most recent job post was at Relo Excel International, a Japanese company providing real estate and travel support related work. During my time there, I witnessed the usefulness of programming in automating workflow. My curiosity led me to into the world of software engineering, which, in turn, exposed me to new technologies such as mobile, data science, web, VR / AR, and much more."),r.a.createElement("p",{style:{margin:"2rem 4rem",fontSize:"1rem"}},"My experiences with coding/programming/software-engineering thus far has inspired me to create applications of my own, which you\u2019ll get a taste of by clicking the arrow on on your right."),window.innerWidth>1200?r.a.createElement(f.a,{style:{marginTop:"3rem",fontSize:"1rem"},variant:"contained",color:"secondary",onClick:this.activate},"Destroy this lengthy website!"):"")}}]),t}(r.a.Component),y=n(19),E=n(45),b=n.n(E),v=n(67),C=function(e,t){return Object(v.a)({},e,{},t)},j="https://asia-east2-portfolio-server-65b51.cloudfunctions.net/api",x=n(156),w=n(155),F=n(165),O=n(119),S=n(78),k=n(154),N=n(68),R=n.n(N),L=n(44),I=n.n(L),D=Object(S.a)({palette:{primary:{main:"#CFCFCF"},linkedin:"blue"},overrides:{MuiInput:{underline:{borderBottom:"1px solid #CFCFCF","&:hover:not($disabled):before":{borderBottom:"1px solid #CFCFCF"}}}}}),P=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",subject:"",name:"",message:"",emailError:!1,nameError:!1,subjectError:!1,messageError:!1},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.email,r=t.name,o=t.subject,l=t.message;if(""===a?n.setState({emailError:!0}):n.setState({emailError:!1}),""===r?n.setState({nameError:!0}):n.setState({nameError:!1}),""===o?n.setState({subjectError:!0}):n.setState({subjectError:!1}),""===l?n.setState({messageError:!0}):n.setState({messageError:!1}),""!==a&&""!==r&&""!==o&&""!==l){var c=l.replace(/\r?\n/g,"<br />"),i="by: ".concat(r,", sub: ").concat(o);n.props.sendEmail(a,i,c),n.setState({emailError:!1,nameError:!1,subjectError:!1,messageError:!1,email:"",name:"",subject:"",message:""}),alert("message has been sent successfully!")}},n.onChange=function(e){return function(t){return n.setState(Object(y.a)({},e,t.target.value))}},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.name,a=e.subject,o=e.message,l=e.emailError,c=e.nameError,i=e.subjectError,s=e.messageError,u=this.props.classes;return r.a.createElement("div",null,r.a.createElement(k.a,{theme:D},r.a.createElement("h1",{style:{textAlign:"center",color:"#CFCFCF"}},"Drop me an email"),r.a.createElement("form",{style:{width:"80vw"},onSubmit:this.handleSubmit},r.a.createElement(w.a,null,r.a.createElement(F.a,{InputProps:{className:u.text},InputLabelProps:{className:u.text},type:"email",name:"email",value:t,onChange:this.onChange("email"),autoFocus:!0,margin:"dense",label:"Your Email Address",error:l,helperText:l?"Email cannot be empty!":"",fullWidth:!0})),r.a.createElement(w.a,null,r.a.createElement(F.a,{InputProps:{className:u.text},InputLabelProps:{className:u.text},type:"text",name:"name",value:n,onChange:this.onChange("name"),margin:"dense",label:"Your name",error:c,helperText:c?"Name cannot be empty!":"",fullWidth:!0})),r.a.createElement(w.a,null,r.a.createElement(F.a,{InputProps:{className:u.text},InputLabelProps:{className:u.text},type:"text",name:"subject",value:a,onChange:this.onChange("subject"),margin:"dense",label:"Subject",error:i,helperText:i?"Subject cannot be empty!":"",fullWidth:!0})),r.a.createElement(w.a,null,r.a.createElement(F.a,{InputProps:{className:u.text},InputLabelProps:{className:u.text},type:"text",name:"message",value:o,onChange:this.onChange("message"),margin:"dense",label:"Message: press enter to go to the next line",multiline:!0,rows:"4",error:s,helperText:s?"Email cannot be empty!":"",fullWidth:!0})),r.a.createElement(x.a,{style:{display:"flex",justifyContent:"center"}},r.a.createElement(f.a,{variant:"contained",className:u.sendEmail,type:"submit"},"Send email"))),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",margin:"2rem auto"}},r.a.createElement(f.a,{variant:"contained",className:u.linkedin,target:"_blank",href:"https://www.linkedin.com/in/terence-kong/"},r.a.createElement(R.a,null),"\xa0LINKEDIN"),r.a.createElement(f.a,{variant:"contained",className:u.github,target:"_blank",href:"https://github.com/reshinto"},r.a.createElement(I.a,null),"\xa0GitHub"))))}}]),t}(r.a.Component),U={sendEmail:function(e,t,n){return function(e,t,n){return function(a,r){var o={email:e,subject:t,message:n};b.a.post("".concat(j,"/sendemail"),o).then((function(e){a({type:"SEND_EMAIL",payload:e.data})})).catch((function(e){console.log(e)}))}}(e,t,n)}},M=Object(c.b)(null,U)(Object(O.a)((function(e){return{text:{color:"#CFCFCF"},sendEmail:{color:"#CFCFCF",backgroundColor:"#00877A","&:hover":{backgroundColor:"#007787"}},linkedin:{color:"#CFCFCF",backgroundColor:"#036BA2","&:hover":{backgroundColor:"#035aa2"}},github:{marginLeft:"1rem",color:"#CFCFCF",backgroundColor:"#4F4F4F","&:hover":{backgroundColor:"#454545"}}}}))(P)),A=n(164),W=n(157),T=n(158),z=n(159),_=n(162),B=n(161),H=n(46),G=n(160),J=n(69),q=n.n(J),K=Object(W.a)((function(e){return{card:{maxWidth:345,margin:e.spacing(2),backgroundColor:"#2C2C2C"},media:{height:190},title:{color:"#CFCFCF"},text:{color:"#6F6F6F"}}}));function Y(e){var t=e.loading,n=void 0!==t&&t,a=e.p,o=K();return r.a.createElement(T.a,{className:o.card},r.a.createElement(z.a,{className:o.title,title:n?r.a.createElement(G.a,{height:10,width:"80%",style:{marginBottom:6}}):a.projectName,subheader:n?r.a.createElement(G.a,{height:10,width:"40%"}):r.a.createElement("span",{className:o.text},"Built with ",a.tech)}),n?r.a.createElement(G.a,{variant:"rect",className:o.media}):r.a.createElement(B.a,{className:o.media,image:a.imgURL,title:a.projectName}),r.a.createElement(_.a,null,n?r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{height:10,style:{marginBottom:6}}),r.a.createElement(G.a,{height:10,width:"80%"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{className:o.text,variant:"body2",color:"textSecondary",component:"p"},a.projectDescription),r.a.createElement(H.a,{variant:"body2",color:"textSecondary",component:"p",style:{display:"flex",justifyContent:"space-around",marginTop:"10px"}},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:a.projectURL,style:{color:"#6F6F6F"}},r.a.createElement(I.a,null)),""!==a.deployedURL?r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:a.deployedURL,style:{color:"#6F6F6F"}},r.a.createElement(q.a,null)):""))))}function $(e){var t=e.p;return r.a.createElement("div",null,r.a.createElement(Y,{p:t}))}var V=n(163),Z=Object(W.a)((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)}}}}));function Q(){var e=Z();return r.a.createElement("div",{className:e.root},r.a.createElement(V.a,null))}var X=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.getPortfolios()}},{key:"render",value:function(){var e=this.props.portfolios,t=[];return(t=Object.keys(e)).sort().reverse(),r.a.createElement("div",null,0!==t.length?t.map((function(t,n){return r.a.createElement("div",{key:n},n>0?r.a.createElement("hr",null):"",r.a.createElement("h2",{style:{textAlign:"center",color:"#CFCFCF"}},function(e){var t=e.split(/(?=[A-Z])/),n=[];return t.forEach((function(e){n.push(e.charAt(0).toUpperCase()+e.slice(1))})),n.join(" ")}(t)),r.a.createElement(A.a,{container:!0,spacing:2},r.a.createElement(A.a,{item:!0,xs:12},r.a.createElement(A.a,{container:!0,justify:"center",spacing:2},e[t].map((function(e,t){return r.a.createElement($,{key:t,p:e})}))))))})):r.a.createElement("div",{style:{display:"flex",height:"100vh",alignItems:"center"}},r.a.createElement(Q,null)))}}]),t}(r.a.Component),ee={getPortfolios:function(){return function(e,t){b.a.get("".concat(j,"/portfolios")).then((function(t){e({type:"GET_PORTFOLIOS",payload:t.data})})).catch((function(e){console.log(e)}))}}},te=Object(c.b)((function(e){return{portfolios:e.portfolioReducer.portfolios}}),ee)(X),ne=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{type:"CLOSE_MENU",payload:e}},ae={body:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh"},button:{color:"#CFCFCF",fontSize:"4rem",padding:"3rem 0"}},re=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).redirectHome=function(){n.props.setPage(0),n.props.closeMenu()},n.redirectAbout=function(){n.props.setPage(1),n.props.closeMenu()},n.redirectPortfolio=function(){n.props.setPage(2),n.props.closeMenu()},n.redirectContact=function(){n.props.setPage(3),n.props.closeMenu()},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:ae.body},r.a.createElement(f.a,{style:ae.button,onClick:this.redirectHome,fullWidth:!0},"Home"),r.a.createElement(f.a,{style:ae.button,onClick:this.redirectAbout,fullWidth:!0},"about"),r.a.createElement(f.a,{style:ae.button,onClick:this.redirectPortfolio,fullWidth:!0},"Portfolio"),r.a.createElement(f.a,{style:ae.button,onClick:this.redirectContact,fullWidth:!0},"Contact"))}}]),t}(r.a.Component),oe={closeMenu:function(){return ne()},setPage:function(e){return function(e){return{type:"SET_PAGE",payload:e}}(e)}},le=Object(c.b)((function(e){return{menu:e.menuReducer.menu}}),oe)(re),ce=0,ie=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={text:["Software Engineer","Full-Stack Developer"],count:0,show:"",isDeleting:!1},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.update()}),250)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"update",value:function(){var e=this.state,t=e.isDeleting,n=e.show,a=this.state.count,r=this.state.text[ce].charAt(a);a<=this.state.text[ce].length&&!1===t?this.setState({show:n+r,count:this.state.count+1}):(0===n.length?(this.setState({isDeleting:!1,count:0}),ce++):this.setState({isDeleting:!0,show:n.slice(0,n.length-1),count:0}),ce===this.state.text.length&&(ce=0))}},{key:"render",value:function(){return r.a.createElement("div",{style:{margin:"2rem",textAlign:"center",color:"#CFCFCF",display:"flex",flexDirection:"column",justifyContent:"space-around"}},r.a.createElement("h1",{style:{fontSize:"4rem"}},"Hey! I'm Terence Kong."),r.a.createElement("h2",{style:{fontSize:"2.5rem"}},"I'm a ",this.state.show,r.a.createElement("span",{ref:"word",className:"blink"},"|")),r.a.createElement("p",{style:{margin:"2rem 4rem",fontSize:"2rem"}},"who's passionate about devising elegant problem-solving methods and learning new technologies."))}}]),t}(r.a.Component),se=n(70),ue=n.n(se),me=n(71),pe=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.menu;return r.a.createElement("div",null,!1===e?r.a.createElement("div",{style:{height:"auto"}},r.a.createElement(ue.a,{bullets:!1,infinite:!1,fillParent:!0,cssModule:me.a,selected:this.props.page},r.a.createElement("div",null,r.a.createElement(ie,null)),r.a.createElement("div",{style:{overflow:"auto",display:"flex",flexDirection:"column",justifyContent:"center"}},r.a.createElement(g,null)),r.a.createElement("div",{style:{overflow:"auto",display:"flex",flexDirection:"column",justifyContent:"flex-start"}},r.a.createElement(te,null)),r.a.createElement("div",null,r.a.createElement(M,null)))):r.a.createElement(le,null))}}]),t}(r.a.Component),he=Object(c.b)((function(e){return{menu:e.menuReducer.menu,page:e.menuReducer.page}}),null)(pe),de=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={category:"",projectName:"",projectDescription:"",projectURL:"",tech:[],imgURL:"",deployedURL:""},n.handleSubmit=function(e){e.preventDefault();var t,a=n.state,r=a.category,o=a.projectName,l=a.projectDescription,c=a.projectURL,i=a.tech,s=a.imgURL,u=a.deployedURL,m=n.props.portfolios;t=void 0===m[r]?[]:m[r];var p={projectName:o,projectDescription:l,projectURL:c,tech:i,imgURL:s,deployedURL:u};console.log(t),t.push(p),n.props.addProject(r,t),alert("".concat(o," has been added successfully!"))},n.onChange=function(e){return function(t){return n.setState(Object(y.a)({},e,t.target.value))}},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.category,n=e.projectName,a=e.projectDescription,o=e.projectURL,l=e.tech,c=e.imgURL,i=e.deployedURL;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(w.a,null,r.a.createElement(F.a,{type:"text",name:"category",value:t,onChange:this.onChange("category"),autoFocus:!0,margin:"dense",label:"category",fullWidth:!0})),r.a.createElement(w.a,null,r.a.createElement(F.a,{type:"text",name:"projectName",value:n,onChange:this.onChange("projectName"),margin:"dense",label:"project name",fullWidth:!0})),r.a.createElement(w.a,null,r.a.createElement(F.a,{type:"text",name:"projectDescription",value:a,onChange:this.onChange("projectDescription"),margin:"dense",label:"project description",fullWidth:!0})),r.a.createElement(w.a,null,r.a.createElement(F.a,{type:"text",name:"projectURL",value:o,onChange:this.onChange("projectURL"),margin:"dense",label:"project url",fullWidth:!0})),r.a.createElement(w.a,null,r.a.createElement(F.a,{type:"text",name:"imgURL",value:c,onChange:this.onChange("imgURL"),margin:"dense",label:"image url",fullWidth:!0})),r.a.createElement(w.a,null,r.a.createElement(F.a,{type:"text",name:"deployedURL",value:i,onChange:this.onChange("deployedURL"),margin:"dense",label:"deployed url",fullWidth:!0})),r.a.createElement(w.a,null,r.a.createElement(F.a,{type:"text",name:"tech",value:l,onChange:this.onChange("tech"),margin:"dense",label:"technologies used",fullWidth:!0})),r.a.createElement(x.a,{style:{display:"flex",justifyContent:"center"}},r.a.createElement(f.a,{color:"primary",type:"submit"},"Add Project"))))}}]),t}(r.a.Component),fe={addProject:function(e,t){return function(e,t){return function(n,a){var r={};r["".concat(e)]=t,b.a.post("".concat(j,"/portfolios/update"),r).then((function(e){n({type:"ADD_PROJECT",payload:e.data})})).catch((function(e){console.log(e)}))}}(e,t)}},ge=Object(c.b)((function(e){return{portfolios:e.portfolioReducer.portfolios}}),fe)(de),ye=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{exact:!0,path:"/",component:he}),r.a.createElement(s.a,{exact:!0,path:"/new",component:ge}))},Ee=n(33),be=n(74),ve=n(75),Ce={portfolios:{}},je=function(e,t){return C(e,{portfolios:t.payload})},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PORTFOLIOS":return je(e,t);default:return e}},we={menu:!1,page:0},Fe=function(e,t){return C(e,{menu:t.payload})},Oe=function(e,t){return C(e,{page:t.payload})},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_MENU":case"CLOSE_MENU":return Fe(e,t);case"SET_PAGE":return Oe(e,t);default:return e}},ke=[ve.a],Ne=Object(Ee.combineReducers)({portfolioReducer:xe,menuReducer:Se}),Re=Object(be.composeWithDevTools)(Ee.applyMiddleware.apply(void 0,ke)),Le=Object(Ee.createStore)(Ne,{},Re),Ie=n(76),De=n.n(Ie),Pe=n(77),Ue=n.n(Pe),Me={open:{right:0,color:"#CFCFCF",fontSize:"6rem",position:"fixed",zIndex:2,margin:"5rem"},close:{right:0,color:"#CFCFCF",fontSize:"6rem",position:"fixed",zIndex:2,margin:"5rem"}};var Ae={openMenu:function(){return function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return{type:"OPEN_MENU",payload:e}}()},closeMenu:function(){return ne()}},We=Object(c.b)((function(e){return{menu:e.menuReducer.menu}}),Ae)((function(e){var t=e.menu;return r.a.createElement(r.a.Fragment,null,!1===t?r.a.createElement(f.a,{onClick:e.openMenu},r.a.createElement(De.a,{style:Me.open})):r.a.createElement(f.a,{onClick:e.closeMenu},r.a.createElement(Ue.a,{style:Me.close})))}));var Te=function(){return r.a.createElement(c.a,{store:Le},r.a.createElement(i.a,null,r.a.createElement(We,null),r.a.createElement(ye,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},89:function(e,t,n){e.exports=n(118)},94:function(e,t,n){}},[[89,1,2]]]);
//# sourceMappingURL=main.d3f8d3ec.chunk.js.map