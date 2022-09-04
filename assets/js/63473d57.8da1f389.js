"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[37882],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(t),u=a,g=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return t?r.createElement(g,o(o({ref:n},s),{},{components:t})):r.createElement(g,o({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},75381:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=t(83117),a=(t(67294),t(3905));const i={},o="Go Example",p={unversionedId:"interviewPrep/designPatterns/Behavioral_patterns/ChainOfResponsibility/go/readme",id:"interviewPrep/designPatterns/Behavioral_patterns/ChainOfResponsibility/go/readme",title:"Go Example",description:"",source:"@site/docs/interviewPrep/designPatterns/Behavioral_patterns/ChainOfResponsibility/go/readme.md",sourceDirName:"interviewPrep/designPatterns/Behavioral_patterns/ChainOfResponsibility/go",slug:"/interviewPrep/designPatterns/Behavioral_patterns/ChainOfResponsibility/go/",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/ChainOfResponsibility/go/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Behavioral_patterns/ChainOfResponsibility/go/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"C# Example",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/ChainOfResponsibility/cSharp/"},next:{title:"Java Example",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/ChainOfResponsibility/java/"}},c={},l=[],s={toc:l};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"go-example"},"Go Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\ntype cashier struct {\n    next department\n}\n\nfunc (c *cashier) execute(p *patient) {\n    if p.paymentDone {\n        fmt.Println("Payment Done")\n    }\n    fmt.Println("Cashier getting money from patient patient")\n}\n\nfunc (c *cashier) setNext(next department) {\n    c.next = next\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"package main\n\ntype department interface {\n    execute(*patient)\n    setNext(department)\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"package main\n\ntype departmentBase struct {\n    nextDepartment department\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\ntype doctor struct {\n    next department\n}\n\nfunc (d *doctor) execute(p *patient) {\n    if p.doctorCheckUpDone {\n        fmt.Println("Doctor checkup already done")\n        d.next.execute(p)\n        return\n    }\n    fmt.Println("Doctor checking patient")\n    p.doctorCheckUpDone = true\n    d.next.execute(p)\n}\n\nfunc (d *doctor) setNext(next department) {\n    d.next = next\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\ntype medical struct {\n    next department\n}\n\nfunc (m *medical) execute(p *patient) {\n    if p.medicineDone {\n        fmt.Println("Medicine already given to patient")\n        m.next.execute(p)\n        return\n    }\n    fmt.Println("Medical giving medicine to patient")\n    p.medicineDone = true\n    m.next.execute(p)\n}\n\nfunc (m *medical) setNext(next department) {\n    m.next = next\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"package main\n\ntype patient struct {\n    name              string\n    registrationDone  bool\n    doctorCheckUpDone bool\n    medicineDone      bool\n    paymentDone       bool\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\ntype reception struct {\n    next department\n}\n\nfunc (r *reception) execute(p *patient) {\n    if p.registrationDone {\n        fmt.Println("Patient registration already done")\n        r.next.execute(p)\n        return\n    }\n    fmt.Println("Reception registering patient")\n    p.registrationDone = true\n    r.next.execute(p)\n}\n\nfunc (r *reception) setNext(next department) {\n    r.next = next\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nfunc main() {\n\n    cashier := &cashier{}\n\n    //Set next for medical department\n    medical := &medical{}\n    medical.setNext(cashier)\n\n    //Set next for doctor department\n    doctor := &doctor{}\n    doctor.setNext(medical)\n\n    //Set next for reception department\n    reception := &reception{}\n    reception.setNext(doctor)\n\n    patient := &patient{name: "abc"}\n    //Patient visiting\n    reception.execute(patient)\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Reception registering patient\nDoctor checking patient\nMedical giving medicine to patient\nCashier getting money from patient patient\n")))}m.isMDXComponent=!0}}]);