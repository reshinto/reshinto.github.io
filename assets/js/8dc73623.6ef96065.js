"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[6307],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var i=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,l=function(e,t){if(null==e)return{};var a,i,l={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=i.createContext({}),u=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(a),d=l,k=m["".concat(s,".").concat(d)]||m[d]||p[d]||n;return a?i.createElement(k,r(r({ref:t},c),{},{components:a})):i.createElement(k,r({ref:t},c))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,r=new Array(n);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var u=2;u<n;u++)r[u]=a[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},65492:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var i=a(83117),l=(a(67294),a(3905));const n={},r="AWS Cloud introduction",o={unversionedId:"Technologies/database/cloud/AWS/foundational/readme",id:"Technologies/database/cloud/AWS/foundational/readme",title:"AWS Cloud introduction",description:"What is cloud computing",source:"@site/docs/Technologies/database/cloud/AWS/foundational/readme.md",sourceDirName:"Technologies/database/cloud/AWS/foundational",slug:"/Technologies/database/cloud/AWS/foundational/",permalink:"/docs/Technologies/database/cloud/AWS/foundational/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/Technologies/database/cloud/AWS/foundational/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Queries Example",permalink:"/docs/Technologies/database/SQL/postgreSQL/example/queries"},next:{title:"How to configure newly created droplet with SSH",permalink:"/docs/Technologies/database/cloud/DigitalOcean/Droplet/"}},s={},u=[{value:"What is cloud computing",id:"what-is-cloud-computing",level:2},{value:"before cloud computing",id:"before-cloud-computing",level:3},{value:"benefits",id:"benefits",level:3},{value:"1 main reason companies move to cloud is due to agility",id:"1-main-reason-companies-move-to-cloud-is-due-to-agility",level:3},{value:"Understanding how AWS utilizes agility of cloud computing",id:"understanding-how-aws-utilizes-agility-of-cloud-computing",level:2},{value:"AWS Cloud infrastructure",id:"aws-cloud-infrastructure",level:3},{value:"Using AWS Cloud",id:"using-aws-cloud",level:3},{value:"Elasticity",id:"elasticity",level:3},{value:"Key benefits of AWS",id:"key-benefits-of-aws",level:3},{value:"Summary",id:"summary",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"aws-cloud-introduction"},"AWS Cloud introduction"),(0,l.kt)("h2",{id:"what-is-cloud-computing"},"What is cloud computing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"refers to on-demand delivery of IT resources & applications via the internet with pay-as-you-go pricing")),(0,l.kt)("h3",{id:"before-cloud-computing"},"before cloud computing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"need to provision capacity based on guessing theoretical max peaks"),(0,l.kt)("li",{parentName:"ul"},"if didn't meet projected max peaks / exceeded them",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"need to pay for expensive resources that would stay idle"),(0,l.kt)("li",{parentName:"ul"},"or have insufficient capacity to meet needs")))),(0,l.kt)("h3",{id:"benefits"},"benefits"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"server, databases, storage, higher-level app components can be initiated within seconds",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"can be treated as temporary & disposable resources"),(0,l.kt)("li",{parentName:"ul"},"free from the inflexibility & constraints of a fixed & finite IT infrastructure"))),(0,l.kt)("li",{parentName:"ul"},"approach to change management, testing, reliability, & capacity planning is more agile & efficient")),(0,l.kt)("h3",{id:"1-main-reason-companies-move-to-cloud-is-due-to-agility"},"1 main reason companies move to cloud is due to agility"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"3 factors that affects agility",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"speed",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"AWS facilities all over the world can offer global reach with a moment's notice"),(0,l.kt)("li",{parentName:"ul"},"AWS gives benefit without having to make huge investment as data are facilities are closed to customers",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"cost of building data centers are not required"))),(0,l.kt)("li",{parentName:"ul"},"new resources are a click away",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"reduces the time it takes to make those resources available to developers from weeks to minutes"))))),(0,l.kt)("li",{parentName:"ol"},"experimentation",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"enable ability to safely experiment, develop operations procedures, & practice failure"),(0,l.kt)("li",{parentName:"ul"},"enables operations as code in the cloud",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"AWS allows spinning up servers in minutes for experimenting"),(0,l.kt)("li",{parentName:"ul"},"allows return or re-purpose servers for other experiments"))),(0,l.kt)("li",{parentName:"ul"},"with virtual & automatable resources",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"can quickly carry out comparative testing using different types of instances, storage, / configurations"),(0,l.kt)("li",{parentName:"ul"},"AWS CloudFormation enables consistent, templated, sandbox development, test, & production environments",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"with increasing levels of operations control"))))))),(0,l.kt)("li",{parentName:"ol"},"culture of innovation",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"being able to experiment quickly & having low cost & low risk",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"it allows for more experimentation, which leads to discovery of new configurations & innovations")))))))),(0,l.kt)("h2",{id:"understanding-how-aws-utilizes-agility-of-cloud-computing"},"Understanding how AWS utilizes agility of cloud computing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"need to look at AWS infrastructure that supports elasticity, scalability, & reliability of computing resources")),(0,l.kt)("h3",{id:"aws-cloud-infrastructure"},"AWS Cloud infrastructure"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'built around Regions & Availability Zones ("AZs")',(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"a region is a physical location in the world",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"have multiple Availability Zones",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Availability Zones consist of 1 or more discrete data centers",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"each data center has redundant power, networking & connectivity, & is housed in separate facilities"),(0,l.kt)("li",{parentName:"ul"},"Availability Zones offer the ability to operate production apps & databases",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"these are more highly available, fault tolerant, & scalable than a single data center",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"fault tolerant: the ability for a system to remain operational even if some of the components of that system fail",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"it can be seen as the built-in redundancy of an app's components"))),(0,l.kt)("li",{parentName:"ul"},"high availability: ensures that systems are always functioning & accessible",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"also ensures downtime is minimized as much as possible WITHOUT human intervention")))))))))))))))),(0,l.kt)("h3",{id:"using-aws-cloud"},"Using AWS Cloud"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"can take advantage of scalable, reliable, & secure global computing infrastructure to meet requirements")),(0,l.kt)("h3",{id:"elasticity"},"Elasticity"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"it is also a powerful force in Cloud Computing"),(0,l.kt)("li",{parentName:"ul"},"it is the power to scale computing resources up / down easily",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"while only paying for the actual resources used"))),(0,l.kt)("li",{parentName:"ul"},"elastic nature of AWS allows customers to:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"quickly deploy new apps"),(0,l.kt)("li",{parentName:"ul"},"instantly scale up as workload grows"),(0,l.kt)("li",{parentName:"ul"},"instantly shut down resources that are no longer required"),(0,l.kt)("li",{parentName:"ul"},"scale down & don't pay for the infrastructure"))),(0,l.kt)("li",{parentName:"ul"},"AWS provides the elastic infrastructure to meet needs",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"needing 1 virtual server / thousands"),(0,l.kt)("li",{parentName:"ul"},"needing computing resources for a few hours / 24/7")))),(0,l.kt)("h3",{id:"key-benefits-of-aws"},"Key benefits of AWS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"is the ability to use services at own pace"),(0,l.kt)("li",{parentName:"ul"},"by using AWS, customers can grow, shrink, & adapt their consumption of services",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"to meet seasonal requirements"),(0,l.kt)("li",{parentName:"ul"},"launch new services or products"),(0,l.kt)("li",{parentName:"ul"},"accommodate new strategic directions"))),(0,l.kt)("li",{parentName:"ul"},"AWS delivers scalable cloud computing platform designed for high availability & dependability",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"providing tools that enable running a wide range of apps",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"AWS tools, Auto Scaling, & Elastic Load Balancing",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"allows app to scale up / down based on demand"),(0,l.kt)("li",{parentName:"ul"},"backed by Amazon's infrastructure"),(0,l.kt)("li",{parentName:"ul"},"have access to compute & storage resources when needed"))))))),(0,l.kt)("li",{parentName:"ul"},"can easily deploy system in multiple regions around the world",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"while providing a lower latency & better experience for customers at minimal cost",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"customers can consistently use innovative services & cutting-edge tech",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"without having to go through multiple procurement cycles & expensive evaluations"))))),(0,l.kt)("li",{parentName:"ul"},"AWS provides capabilities to support virtually any workload",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"giving customers continued access to latest tech"))))),(0,l.kt)("li",{parentName:"ul"},"you retain complete control & ownership over which region the data is physically located",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"makes it easy to meet regional compliance & data residency requirements"),(0,l.kt)("li",{parentName:"ul"},"AWS Cloud provides governance capabilities that enable continuous monitoring of configuration changes to IT resources"),(0,l.kt)("li",{parentName:"ul"},"before cloud computing",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"infrastructure security auditing would often be a periodic & manual process"))))),(0,l.kt)("li",{parentName:"ul"},"AWS offers industry-leading capabilities across facilities, networks, software, & business processes to meet strictest requirements",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"AWS secure data centers use electronic surveillance & multi-factor access control systems",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"data centers are staffed 24/7 by security guards, & access is authorized strictly on a least privileged basis"),(0,l.kt)("li",{parentName:"ul"},"environmental systems are designed to minimize the impact of disruptions to operations"),(0,l.kt)("li",{parentName:"ul"},"multiple geographic regions & availability zones allow resilience during failure modes",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"including natural disasters or system failure"))))))),(0,l.kt)("li",{parentName:"ul"},"AWS assets are programmable resources",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"thus, security policy can be formalized & embedded with the design of the infrastructure"),(0,l.kt)("li",{parentName:"ul"},"AWS helps customers develop high performing & reliable solutions to address most business needs",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"e.g.: offering media services to customers around the world / managing medical devices for a highly decentralized workforce"))),(0,l.kt)("li",{parentName:"ul"},"AWS gives customers the tools to implement solutions quickly & with limited friction"),(0,l.kt)("li",{parentName:"ul"},"AWS reliability defined as the ability of a system to recover from infrastructure / service failures",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"it also focuses on the ability to dynamically acquire computing resources to meet demands & mitigate disruptions"),(0,l.kt)("li",{parentName:"ul"},"to achieve reliability, architecture & system must have well-planned foundation",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"that can handle changes in demand & also detect failure & automatically heal itself"))),(0,l.kt)("li",{parentName:"ul"},"AWS help achieve greater flexibility & capacity",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"reducing the uncertainty of forecasting hardware needs"),(0,l.kt)("li",{parentName:"ul"},"the scale of AWS gives customers capacity & reliability that is difficult to match by on-premise solutions"))))))),(0,l.kt)("li",{parentName:"ul"},"with AWS, no longer need to dedicate valuable resources to building costly infrastructure",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"including purchasing servers, software licenses or leasing facilities"),(0,l.kt)("li",{parentName:"ul"},"by paying for services on an as needed basis",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"allows redirection of focus to innovation & invention",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"reducing procurement complexity & enabling the business to be fully elastic"))),(0,l.kt)("li",{parentName:"ul"},"pay-as-you-go pricing allows easy adaptation to changing business needs without over committing budgets",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"and improving responsiveness to changes"),(0,l.kt)("li",{parentName:"ul"},"the model allows business to adapt depending on need & not on forecasts",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"reducing the risk / over provisioning / missing capacity")))))))))),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"moving to the cloud is not just about saving costs on IT",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"it's about creating the environment that lets the business thrive")))))}p.isMDXComponent=!0}}]);