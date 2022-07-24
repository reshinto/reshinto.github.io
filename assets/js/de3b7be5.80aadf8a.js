"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[9518],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>d});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(l),d=a,b=p["".concat(u,".").concat(d)]||p[d]||k[d]||r;return l?n.createElement(b,o(o({ref:t},c),{},{components:l})):n.createElement(b,o({ref:t},c))}));function d(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,o=new Array(r);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<r;s++)o[s]=l[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}p.displayName="MDXCreateElement"},18551:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=l(83117),a=(l(67294),l(3905));const r={},o="Minikube",i={unversionedId:"Technologies/devops/kubernetes/minikube",id:"Technologies/devops/kubernetes/minikube",title:"Minikube",description:"Installation",source:"@site/docs/Technologies/devops/kubernetes/minikube.md",sourceDirName:"Technologies/devops/kubernetes",slug:"/Technologies/devops/kubernetes/minikube",permalink:"/docs/Technologies/devops/kubernetes/minikube",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/Technologies/devops/kubernetes/minikube.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kubernetes (K8s, Hubernetes)",permalink:"/docs/Technologies/devops/kubernetes/"},next:{title:"Flowchart Symbols",permalink:"/docs/Technologies/flowCharts/"}},u={},s=[{value:"Installation",id:"installation",level:2},{value:"Commands",id:"commands",level:2},{value:"Check status",id:"check-status",level:3},{value:"Start cluster",id:"start-cluster",level:3},{value:"Pause cluster",id:"pause-cluster",level:3},{value:"Unpause cluster",id:"unpause-cluster",level:3},{value:"Stop cluster",id:"stop-cluster",level:3},{value:"Increase the default memory limit (requires a restart)",id:"increase-the-default-memory-limit-requires-a-restart",level:3},{value:"Browse the catalog of easily installed Kubernetes services",id:"browse-the-catalog-of-easily-installed-kubernetes-services",level:3},{value:"Enable addon",id:"enable-addon",level:4},{value:"Disable addon",id:"disable-addon",level:4},{value:"Run addon",id:"run-addon",level:4},{value:"Create a second cluster running an older Kubernetes release",id:"create-a-second-cluster-running-an-older-kubernetes-release",level:3},{value:"Delete all of the minikube clusters",id:"delete-all-of-the-minikube-clusters",level:3},{value:"Deploy applications",id:"deploy-applications",level:3},{value:"List all services",id:"list-all-services",level:3}],c={toc:s};function k(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"minikube"},"Minikube"),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"brew install minikube"))),(0,a.kt)("li",{parentName:"ul"},"verify",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"minikube version")))),(0,a.kt)("h2",{id:"commands"},"Commands"),(0,a.kt)("h3",{id:"check-status"},"Check status"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"minikube status")),(0,a.kt)("h3",{id:"start-cluster"},"Start cluster"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"minikube start")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"on local, use virtual box instead of docker driver",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"minikube start --driver=virtualbox"))),(0,a.kt)("li",{parentName:"ul"},"verify if cluster is up and running",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"kubectl get nodes")))),(0,a.kt)("h3",{id:"pause-cluster"},"Pause cluster"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"minikube pause")),(0,a.kt)("h3",{id:"unpause-cluster"},"Unpause cluster"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"minikube unpause")),(0,a.kt)("h3",{id:"stop-cluster"},"Stop cluster"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"minikube stop")),(0,a.kt)("h3",{id:"increase-the-default-memory-limit-requires-a-restart"},"Increase the default memory limit (requires a restart)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"minikube config set memory 16384")),(0,a.kt)("h3",{id:"browse-the-catalog-of-easily-installed-kubernetes-services"},"Browse the catalog of easily installed Kubernetes services"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"minikube addons list")),(0,a.kt)("h4",{id:"enable-addon"},"Enable addon"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"minikube addons enable addonname")),(0,a.kt)("h4",{id:"disable-addon"},"Disable addon"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"minikube addons disable addonname")),(0,a.kt)("h4",{id:"run-addon"},"Run addon"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"dashboard addon example",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"minikube dashboard")))),(0,a.kt)("h3",{id:"create-a-second-cluster-running-an-older-kubernetes-release"},"Create a second cluster running an older Kubernetes release"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"minikube start -p aged --kubernetes-version=v1.16.1")),(0,a.kt)("h3",{id:"delete-all-of-the-minikube-clusters"},"Delete all of the minikube clusters"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"minikube delete --all")),(0,a.kt)("h3",{id:"deploy-applications"},"Deploy applications"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"deploy app",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"kubectl create -f filename.yaml"))),(0,a.kt)("li",{parentName:"ul"},"expose deployment as a service",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"kubectl expose deployment appname --type=NodePort"))),(0,a.kt)("li",{parentName:"ul"},"access service",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"minikube service appname")))),(0,a.kt)("h3",{id:"list-all-services"},"List all services"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"minikube service list")))}k.isMDXComponent=!0}}]);