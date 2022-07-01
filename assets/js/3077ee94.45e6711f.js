"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[1440],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>s});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),k=m(a),s=l,d=k["".concat(p,".").concat(s)]||k[s]||c[s]||o;return a?n.createElement(d,i(i({ref:t},u),{},{components:a})):n.createElement(d,i({ref:t},u))}));function s(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,i=new Array(o);i[0]=k;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:l,i[1]=r;for(var m=2;m<o;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8950:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>m});var n=a(7462),l=(a(7294),a(3905));const o={},i="Docker",r={unversionedId:"devops/docker/readme",id:"devops/docker/readme",title:"Docker",description:"Installation",source:"@site/docs/devops/docker/readme.md",sourceDirName:"devops/docker",slug:"/devops/docker/",permalink:"/docs/devops/docker/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/devops/docker/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Jenkins",permalink:"/docs/devops/CiCd/jenkins/"},next:{title:"Create local ubuntu server to be used on vscode",permalink:"/docs/devops/docker/createLocalServer"}},p={},m=[{value:"Installation",id:"installation",level:2},{value:"Windows",id:"windows",level:3},{value:"WSL Ubuntu",id:"wsl-ubuntu",level:4},{value:"Definitions",id:"definitions",level:2},{value:"Images",id:"images",level:3},{value:"Containers",id:"containers",level:3},{value:"Networking",id:"networking",level:3},{value:"Commands",id:"commands",level:2},{value:"Download and install image",id:"download-and-install-image",level:3},{value:"List all images installed",id:"list-all-images-installed",level:3},{value:"Remove images",id:"remove-images",level:3},{value:"Update image",id:"update-image",level:3},{value:"List all running containers",id:"list-all-running-containers",level:3},{value:"Start and Stop container",id:"start-and-stop-container",level:3},{value:"Remove a stopped container permanently",id:"remove-a-stopped-container-permanently",level:3},{value:"Running a container",id:"running-a-container",level:3},{value:"Run a container with a specific version with <code>tag</code>",id:"run-a-container-with-a-specific-version-with-tag",level:4},{value:"map host PORT with container PORT with -p",id:"map-host-port-with-container-port-with--p",level:4},{value:"Volume mapping to enable persistent data with the -v option",id:"volume-mapping-to-enable-persistent-data-with-the--v-option",level:4},{value:"Detach running container with the -d option",id:"detach-running-container-with-the--d-option",level:4},{value:"Set Environment variables in the container with -e option",id:"set-environment-variables-in-the-container-with--e-option",level:4},{value:"Delete container when the container has stop running with --rm option",id:"delete-container-when-the-container-has-stop-running-with---rm-option",level:4},{value:"Execute a command externally",id:"execute-a-command-externally",level:3},{value:"Use -i option to enable interactive mode",id:"use--i-option-to-enable-interactive-mode",level:4},{value:"Use -t option to enable terminal (-i and -t is usally used together as -it)",id:"use--t-option-to-enable-terminal--i-and--t-is-usally-used-together-as--it",level:4},{value:"Use bash terminal",id:"use-bash-terminal",level:4},{value:"Execute 1 bash command",id:"execute-1-bash-command",level:5},{value:"Copy files from host to container",id:"copy-files-from-host-to-container",level:3},{value:"Inspect Container",id:"inspect-container",level:3},{value:"View all Container logs",id:"view-all-container-logs",level:3},{value:"List all internal networks",id:"list-all-internal-networks",level:3},{value:"Create my own image",id:"create-my-own-image",level:2}],u={toc:m};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"docker"},"Docker"),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("h3",{id:"windows"},"Windows"),(0,l.kt)("h4",{id:"wsl-ubuntu"},"WSL Ubuntu"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"refer to the following ",(0,l.kt)("a",{parentName:"li",href:"https://nickjanetakis.com/blog/setting-up-docker-for-windows-and-wsl-to-work-flawlessly"},"website"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Docker desktop version must be ",(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/docker-for-windows/release-notes/#docker-desktop-community-2205"},"2.2.0.5")),(0,l.kt)("li",{parentName:"ul"},"there might be some issues while installing docker and docker compose within wsl",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"google it and solve the issue",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"might need to uninstall and upgrade certain softwares")))))))),(0,l.kt)("h2",{id:"definitions"},"Definitions"),(0,l.kt)("h3",{id:"images"},"Images"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"it is a package or a template similar to a Virtual Machine template used to create 1 or more containers"),(0,l.kt)("li",{parentName:"ul"},"images can be searched for, or created and pushed to docker hub repository (public)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"a ",(0,l.kt)("inlineCode",{parentName:"li"},"docker file")," is required with the developed app to create an image")))),(0,l.kt)("h3",{id:"containers"},"Containers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"it is a running instance of images that are isolated and have their own environments and set of processors")),(0,l.kt)("h3",{id:"networking"},"Networking"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"docker has 3 networks",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"bridge",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"docker run ubuntu"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"a private internal network created by docker on the host",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"all containers attach to this network by default"),(0,l.kt)("li",{parentName:"ul"},"will get an internal IP address ",(0,l.kt)("inlineCode",{parentName:"li"},"172.17.0.0/16")," series"),(0,l.kt)("li",{parentName:"ul"},"containers can access each other using the internal IP"),(0,l.kt)("li",{parentName:"ul"},"to access containers from outside",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"map container ports to host ports"))))),(0,l.kt)("li",{parentName:"ul"},"custom internal network can be created\ndocker network create --drive bridge --subnet 182.18.0.0/16 custom-isolated-network^name")))),(0,l.kt)("li",{parentName:"ol"},"none",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"docker run ubuntu --network=none"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"containers are isolated and are not attached to any network"),(0,l.kt)("li",{parentName:"ul"},"does not have any access to external network or other containers")))),(0,l.kt)("li",{parentName:"ol"},"host",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"docker run ubuntu --network=host"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"this takes out any network isolation between the host and container",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"PORT conflicts will arise if PORT is already in use on the computer"))))))))),(0,l.kt)("h2",{id:"commands"},"Commands"),(0,l.kt)("h3",{id:"download-and-install-image"},"Download and install image"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Pulls an image or a repository from the docker hub registry",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"docker pull ","[imageName]"))),(0,l.kt)("li",{parentName:"ul"},"similar to using the ",(0,l.kt)("inlineCode",{parentName:"li"},"run")," command, however, this will only download once",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"docker run ","[imageName]")))),(0,l.kt)("h3",{id:"list-all-images-installed"},"List all images installed"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"docker images")),(0,l.kt)("h3",{id:"remove-images"},"Remove images"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ensure that no containers are running before removing",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"docker rmi ","[imageNameOrImageID]"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"remove all images\ndocker rmi -f $(docker images -aq)"))))),(0,l.kt)("h3",{id:"update-image"},"Update image"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"updates the image after modifying a container",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"docker commit ","[containerName][imageNamge]")))),(0,l.kt)("h3",{id:"list-all-running-containers"},"List all running containers"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"docker ps")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"list all containers including those that are not running",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"docker ps -a")))),(0,l.kt)("h3",{id:"start-and-stop-container"},"Start and Stop container"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"start",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"docker start ","[containerName or containerId]"))),(0,l.kt)("li",{parentName:"ul"},"stop",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"docker stop ","[containerName or containerId]"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"alternative\ndocker kill ","[containerName or containerId]"),(0,l.kt)("li",{parentName:"ul"},"stop all\ndocker kill $(docker ps -q)"))))),(0,l.kt)("h3",{id:"remove-a-stopped-container-permanently"},"Remove a stopped container permanently"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"this will delete all saved data in the container",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"use volume mapping to enable persistent data",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"docker rm ","[containerName]"))))),(0,l.kt)("li",{parentName:"ul"},"remove all",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"docker rm $(docker ps -a -q)")))),(0,l.kt)("h3",{id:"running-a-container"},"Running a container"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Creates a random container name and run it, it will stop and exit after all tasks are completed",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"docker run ","[imageName]"))),(0,l.kt)("li",{parentName:"ul"},"Specify a name of the container",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"docker run --name=someName ","[imageName]")))),(0,l.kt)("h4",{id:"run-a-container-with-a-specific-version-with-tag"},"Run a container with a specific version with ",(0,l.kt)("inlineCode",{parentName:"h4"},"tag")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"e.g.: running an image with version 4.0",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"docker run imageName:4.0")))),(0,l.kt)("h4",{id:"map-host-port-with-container-port-with--p"},"map host PORT with container PORT with -p"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"By DEFAULT host PORT will use container PORT"),(0,l.kt)("li",{parentName:"ul"},"to change default, need to map desired host PORT to the container PORT",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"e.g.: mapping host PORT 80 with container PORT 5000",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"docker run -p 80:5000 ","[imageName]")))))),(0,l.kt)("h4",{id:"volume-mapping-to-enable-persistent-data-with-the--v-option"},"Volume mapping to enable persistent data with the -v option"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"all files located in the specified host directory will be accessible in the specified container directory",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"docker run -v hostFilePath:containerFilePath ","[containerName]"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"e.g.:\ndocker run -v /c/Users/reshinto/shareFolder:/someFolder mysql-docker"))))),(0,l.kt)("h4",{id:"detach-running-container-with-the--d-option"},"Detach running container with the -d option"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"container can be detached and be runned in the background",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"docker run -d ","[imageName]")))),(0,l.kt)("h4",{id:"set-environment-variables-in-the-container-with--e-option"},"Set Environment variables in the container with -e option"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"docker run -e VARIABLE_NAME=value ","[imageName]")),(0,l.kt)("h4",{id:"delete-container-when-the-container-has-stop-running-with---rm-option"},"Delete container when the container has stop running with --rm option"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"docker run --rm ","[imageName]")),(0,l.kt)("h3",{id:"execute-a-command-externally"},"Execute a command externally"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"docker exec ","[commands]")),(0,l.kt)("h4",{id:"use--i-option-to-enable-interactive-mode"},"Use -i option to enable interactive mode"),(0,l.kt)("h4",{id:"use--t-option-to-enable-terminal--i-and--t-is-usally-used-together-as--it"},"Use -t option to enable terminal (-i and -t is usally used together as -it)"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"docker exec -it ","[containerName][commands]")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"e.g.: running mysql",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"docker exec -it mysql-docker mysql -u root -p")))),(0,l.kt)("h4",{id:"use-bash-terminal"},"Use bash terminal"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"-it option must be used together",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"docker exec -it ","[containerName]"," bash")))),(0,l.kt)("h5",{id:"execute-1-bash-command"},"Execute 1 bash command"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"docker exec ","[containerName][command]")),(0,l.kt)("h3",{id:"copy-files-from-host-to-container"},"Copy files from host to container"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"docker cp filename ","[containerName]",":pathToCopyTo")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"e.g.: saving a file to the root directory in the container",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"docker cp file.sql mysql-docker:/")))),(0,l.kt)("h3",{id:"inspect-container"},"Inspect Container"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"see aditional detials about a specific container",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"docker inspect ","[containerName]")))),(0,l.kt)("h3",{id:"view-all-container-logs"},"View all Container logs"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"docker logs ","[containerName]")),(0,l.kt)("h3",{id:"list-all-internal-networks"},"List all internal networks"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"docker network ls")),(0,l.kt)("h2",{id:"create-my-own-image"},"Create my own image"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"create a ",(0,l.kt)("inlineCode",{parentName:"li"},"Dockerfile")," with the same name"),(0,l.kt)("li",{parentName:"ol"},"write a set of instructions in the Dockerfile",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"everything on the left in caps is an instruction, everything on the right is an argument",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FROM [imageName]"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"docker image can be the OS or other apps like node"),(0,l.kt)("li",{parentName:"ul"},"e.g.: latest ubuntu image",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"FROM Ubuntu"))),(0,l.kt)("li",{parentName:"ul"},"e.g.: specific ubuntu version image",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"FROM ubuntu:14.04"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RUN [command]"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"use to install and update dependencies"),(0,l.kt)("li",{parentName:"ul"},"e.g.",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"RUN apt update"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'VOLUME ["/host/path/", "/container/path"]'),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"defines shared or ephemeral mountable directories"),(0,l.kt)("li",{parentName:"ul"},"shared data (avoid defining shared folders in Dockerfiles)",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"VOLUME ",'["/shared-data"]'))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ADD file toThisFileAtThisDirectory"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"add local files",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"ADD notes.txt /notes.txt"))),(0,l.kt)("li",{parentName:"ul"},"adds the contents of tar archives by uncompressing the archives and pasting the contents into the directory",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"ADD project.tar.gz /install/"))),(0,l.kt)("li",{parentName:"ul"},"adds the file downloaded from a URL to a directory",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"ADD ",(0,l.kt)("a",{parentName:"p",href:"https://project.example.com/download/1.0/project.rpm"},"https://project.example.com/download/1.0/project.rpm")," /project/"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ENV VARIABLE_NAME value"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"set environment variables",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"ENV DB_PORT=5432"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"WORKDIR /path"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"sets the directory the container starts in",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"WORKDIR /root"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"USER someValue"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"sets which user the container will run as",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"USER arthur"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"COPY host/path to/path"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"COPY . /opt/source-code"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ENTRYPOINT VAR_NAME=/app/path/with/filename [command]"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"specifies the start of the command to run"),(0,l.kt)("li",{parentName:"ul"},"use this if container acts like a command-line program"),(0,l.kt)("li",{parentName:"ul"},"can be combined together with ",(0,l.kt)("inlineCode",{parentName:"li"},"CMD"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"ENTRYPOINT EXPRESS_APP=/opt/source-code/index.js node start"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HEALTHCHECK")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-MAINTAINER",metastring:"Firstname Lastname <email@example.com>",Firstname:!0,Lastname:!0,"<email@example.com>":!0},"- defines the author of this Dockerfile\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"EXPOSE"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"maps a port into the container",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"EXPOSE 8080"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CMD command param1")," or ",(0,l.kt)("inlineCode",{parentName:"li"},'CMD ["command", "param1"]'),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"specifies the whole command to run"),(0,l.kt)("li",{parentName:"ul"},"use this if unsure",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"e.g.:",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"CMD ",'["sleep", "5"]'))))),(0,l.kt)("li",{parentName:"ul"},"parameters are optional",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"CMD ",'["bash"]'))),(0,l.kt)("li",{parentName:"ul"},"when running docker, commands will be automatically be called",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"docker run imageName"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"to change param1 value\ndocker run imageName command newParam1Value"),(0,l.kt)("li",{parentName:"ul"},"if command is declared in the ENTRYPOINT, calling command is not required\ndocker run imageName newParam1Value")))))))),(0,l.kt)("li",{parentName:"ul"},"basic architecture",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"FROM Ubuntu\nRUN apt-get update && apt-get -y install python\nRUN pip install flask flask-mysql\nCOPY . /opt/source-code\nENTRYPOINT FLASK_APP=/opt/source-code/app.py flask run\n"))),(0,l.kt)("li",{parentName:"ul"},"basic app architecture",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'FROM node\nWORKDIR /usr/src/app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nEXPOSE 4000\nCMD ["npm", "start"]\n'))))),(0,l.kt)("li",{parentName:"ol"},"create a .dockerignore file (ignore if not required)",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"node_modules\nnpm-debug.log\n"))),(0,l.kt)("li",{parentName:"ol"},"build image",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"docker build -t imageName/appName ."))),(0,l.kt)("li",{parentName:"ol"},"push to docker hub registry to make image public",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"docker push imageName/appName")))))}c.isMDXComponent=!0}}]);