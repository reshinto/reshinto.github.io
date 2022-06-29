"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[2609],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?i.createElement(k,o(o({ref:t},p),{},{components:n})):i.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=n(7462),a=(n(7294),n(3905));const r={},o="Kubernetes in Microservices",l={unversionedId:"interviewPrep/system_design/microservices/kubernetes",id:"interviewPrep/system_design/microservices/kubernetes",title:"Kubernetes in Microservices",description:"Microservices building blocks",source:"@site/docs/interviewPrep/system_design/microservices/kubernetes.md",sourceDirName:"interviewPrep/system_design/microservices",slug:"/interviewPrep/system_design/microservices/kubernetes",permalink:"/docs/interviewPrep/system_design/microservices/kubernetes",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/system_design/microservices/kubernetes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Asynchronous Communications",permalink:"/docs/interviewPrep/system_design/microservices/asynchronousCommunications"},next:{title:"Numbers to know for Estimation",permalink:"/docs/interviewPrep/system_design/numbers_to_know_for_estimation"}},s={},u=[{value:"Microservices building blocks",id:"microservices-building-blocks",level:2},{value:"Codebase",id:"codebase",level:3},{value:"Codebase Worflow",id:"codebase-worflow",level:3},{value:"Image Repository",id:"image-repository",level:3},{value:"Application Dependencies",id:"application-dependencies",level:3},{value:"Dev versus Prod in Kubernetes",id:"dev-versus-prod-in-kubernetes",level:3},{value:"common kubernetes deployment patterns",id:"common-kubernetes-deployment-patterns",level:4},{value:"Admin Processes",id:"admin-processes",level:3},{value:"Deployment patterns",id:"deployment-patterns",level:2},{value:"Application Configuration",id:"application-configuration",level:3},{value:"Application Configuration in Kubernetes",id:"application-configuration-in-kubernetes",level:3},{value:"Build, Release, Run",id:"build-release-run",level:3},{value:"Running in Kubernetes",id:"running-in-kubernetes",level:3},{value:"Processes and Port Bindings",id:"processes-and-port-bindings",level:3},{value:"processes",id:"processes",level:4},{value:"Port Binding",id:"port-binding",level:4},{value:"Runtime patterns",id:"runtime-patterns",level:2},{value:"Associating Resources in Kubernetes",id:"associating-resources-in-kubernetes",level:3},{value:"Scenario: Replace a link to a database",id:"scenario-replace-a-link-to-a-database",level:3},{value:"strengths",id:"strengths",level:3},{value:"Advantages to Users",id:"advantages-to-users",level:3},{value:"Logging",id:"logging",level:3}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kubernetes-in-microservices"},"Kubernetes in Microservices"),(0,a.kt)("h2",{id:"microservices-building-blocks"},"Microservices building blocks"),(0,a.kt)("h3",{id:"codebase"},"Codebase"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Code stored in source control",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"e.g.: Git, Perforce"))),(0,a.kt)("li",{parentName:"ul"},"Container images stored in an image repository",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"e.g.: Docker Hub, Artifactory")))),(0,a.kt)("h3",{id:"codebase-worflow"},"Codebase Worflow"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Push code to your source control"),(0,a.kt)("li",{parentName:"ol"},"Automated build is kicked off to build and run tests against code"),(0,a.kt)("li",{parentName:"ol"},"Build container image, push to image repository")),(0,a.kt)("h3",{id:"image-repository"},"Image Repository"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"stores your code in an image"),(0,a.kt)("li",{parentName:"ul"},"need to decide early on"),(0,a.kt)("li",{parentName:"ul"},"follow company guidelines")),(0,a.kt)("h3",{id:"application-dependencies"},"Application Dependencies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Applications modeled in Kubernetes as Deployments and pods"),(0,a.kt)("li",{parentName:"ul"},"Single pod can have many containers inside"),(0,a.kt)("li",{parentName:"ul"},"Commonly seen in Kubernetes: sidecar pattern")),(0,a.kt)("h3",{id:"dev-versus-prod-in-kubernetes"},"Dev versus Prod in Kubernetes"),(0,a.kt)("h4",{id:"common-kubernetes-deployment-patterns"},"common kubernetes deployment patterns"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"small footprint: different namespaces with different credentials for dev, staging, and production"),(0,a.kt)("li",{parentName:"ul"},"large footprint: unique kubernetes installation for dev, staging, and production")),(0,a.kt)("h3",{id:"admin-processes"},"Admin Processes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"admin process containers tagged in a similar way to the running application"),(0,a.kt)("li",{parentName:"ul"},"containers run as kubernetes jobs/chron job"),(0,a.kt)("li",{parentName:"ul"},"also run as a separate deployment")),(0,a.kt)("h2",{id:"deployment-patterns"},"Deployment patterns"),(0,a.kt)("h3",{id:"application-configuration"},"Application Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Applications always have associated configuration to make the application work as expected")),(0,a.kt)("h3",{id:"application-configuration-in-kubernetes"},"Application Configuration in Kubernetes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2 ways to store configs",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"configMaps",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"for generic information (e.g.: metadata, version)"))),(0,a.kt)("li",{parentName:"ol"},"secrets",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"for sensitive data (e.g.: passwords)"),(0,a.kt)("li",{parentName:"ul"},"depending on the use case, might need something like ",(0,a.kt)("inlineCode",{parentName:"li"},"HashiCorp Vault")))))),(0,a.kt)("li",{parentName:"ul"},"Loaded into the pod via",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"environment variables"),(0,a.kt)("li",{parentName:"ul"},"files")))),(0,a.kt)("h3",{id:"build-release-run"},"Build, Release, Run"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tag containers at build time with explicit version"),(0,a.kt)("li",{parentName:"ul"},"don't use latest tag for production containers")),(0,a.kt)("h3",{id:"running-in-kubernetes"},"Running in Kubernetes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"high level constructs to run containers"),(0,a.kt)("li",{parentName:"ul"},"deployments, DaemonSets, ReplicaSets"),(0,a.kt)("li",{parentName:"ul"},"package management provided by Helm"),(0,a.kt)("li",{parentName:"ul"},"adds revision control")),(0,a.kt)("h3",{id:"processes-and-port-bindings"},"Processes and Port Bindings"),(0,a.kt)("h4",{id:"processes"},"processes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"keep application stateless"),(0,a.kt)("li",{parentName:"ul"},"don't rely on sticky sessions"),(0,a.kt)("li",{parentName:"ul"},"goal: allow request to go to any container or server by default"),(0,a.kt)("li",{parentName:"ul"},"Word on StatefulSets",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Typically used to create persistent storage systems like a MySQL shard")))),(0,a.kt)("h4",{id:"port-binding"},"Port Binding"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Statelessness in Kubernetes",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"translated to deployments and pods"),(0,a.kt)("li",{parentName:"ul"},"deployments comprised of ReplicaSets, which are a collection of one or more pods"))),(0,a.kt)("li",{parentName:"ul"},"Containers are implemented in pods"),(0,a.kt)("li",{parentName:"ul"},"Communicate to each other via well-defined ports")),(0,a.kt)("h2",{id:"runtime-patterns"},"Runtime patterns"),(0,a.kt)("h3",{id:"associating-resources-in-kubernetes"},"Associating Resources in Kubernetes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"everything is treated as a service, and configurations are stored in a ConfigMap or Secret")),(0,a.kt)("h3",{id:"scenario-replace-a-link-to-a-database"},"Scenario: Replace a link to a database"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a new database",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ensure it's online and ready to accept connections"))),(0,a.kt)("li",{parentName:"ol"},"Update configuration stored in the ConfigMaps or Secrets"),(0,a.kt)("li",{parentName:"ol"},"Kill the pods that were communicating with the old database")),(0,a.kt)("h3",{id:"strengths"},"strengths"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"when kubernetes starts up the new pods, the new pods automatically pick up the new configuration, and can use the new service"),(0,a.kt)("li",{parentName:"ul"},"if a pod is taking too much load or is receiving a lot of requests",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"it's easy to scale the number of pods in kubernetes by adding more to the replica set"))),(0,a.kt)("li",{parentName:"ul"},"Scaling kubernetes to handle more traffic is one of the strengths of the platform"),(0,a.kt)("li",{parentName:"ul"},"disposability",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"the ability to maximize robustness with fast startup and graceful shutdown")),(0,a.kt)("h3",{parentName:"li",id:"containers"},"containers")),(0,a.kt)("li",{parentName:"ul"},"start up fast and run efficiently"),(0,a.kt)("li",{parentName:"ul"},"have all required tooling built inside of the container image",(0,a.kt)("h3",{parentName:"li",id:"containers-to-pods-to-replicas"},"Containers to Pods to Replicas")),(0,a.kt)("li",{parentName:"ul"},"Kubernetes manages your containers in pods, which are managed with ReplicaSets"),(0,a.kt)("li",{parentName:"ul"},"if one of the pods goes offline, the ReplicaSet will automatically start up a new pod to take its place")),(0,a.kt)("h3",{id:"advantages-to-users"},"Advantages to Users"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"from a user perspective, the application will still function, and the user won't see any downtime")),(0,a.kt)("h3",{id:"logging"},"Logging"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"treat logs as streams",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"execution environment handles the logs"))),(0,a.kt)("li",{parentName:"ul"},"common to use a log router (Beats, Fluentd) to save the logs to a service (Elasticsearch, Splunk)"),(0,a.kt)("li",{parentName:"ul"},"Kubernetes makes this process easy")))}c.isMDXComponent=!0}}]);