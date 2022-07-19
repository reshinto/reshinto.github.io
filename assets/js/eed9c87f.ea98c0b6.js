"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[2638],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=l,h=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return a?r.createElement(h,n(n({ref:t},c),{},{components:a})):r.createElement(h,n({ref:t},c))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,n=new Array(i);n[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,n[1]=s;for(var p=2;p<i;p++)n[p]=a[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},61613:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(87462),l=(a(67294),a(3905));const i={},n="Load Balancers",s={unversionedId:"interviewPrep/system_design/10LoadBalancers/readme",id:"interviewPrep/system_design/10LoadBalancers/readme",title:"Load Balancers",description:"- it acts as a digital traffic cop for the system, distributing network requests across multiple servers and ensuring that the system operates at peak performance day and night",source:"@site/docs/interviewPrep/system_design/10LoadBalancers/readme.md",sourceDirName:"interviewPrep/system_design/10LoadBalancers",slug:"/interviewPrep/system_design/10LoadBalancers/",permalink:"/docs/interviewPrep/system_design/10LoadBalancers/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/system_design/10LoadBalancers/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Forward Proxy example",permalink:"/docs/interviewPrep/system_design/09Proxies/forwardProxyExample/"},next:{title:"Weighted Round Robin Load Balancer Example",permalink:"/docs/interviewPrep/system_design/10LoadBalancers/example/"}},o={},p=[{value:"How does a load balancer gets updated information on the servers",id:"how-does-a-load-balancer-gets-updated-information-on-the-servers",level:2},{value:"2 layer types of load balancer",id:"2-layer-types-of-load-balancer",level:2},{value:"Layer 4",id:"layer-4",level:3},{value:"Layer 7",id:"layer-7",level:3},{value:"2 types of load balancers",id:"2-types-of-load-balancers",level:2},{value:"Software or Hardware type",id:"software-or-hardware-type",level:3},{value:"Software type",id:"software-type",level:3},{value:"Hardware type: F5, Citrix",id:"hardware-type-f5-citrix",level:3},{value:"possible ways to solve server overload",id:"possible-ways-to-solve-server-overload",level:2},{value:"Vertically scale the system",id:"vertically-scale-the-system",level:3},{value:"Horizontally scale the system",id:"horizontally-scale-the-system",level:3},{value:"Benefits of Load Balancing",id:"benefits-of-load-balancing",level:2},{value:"Load Balancing Algorithms",id:"load-balancing-algorithms",level:2},{value:"Redundant Load Balancers",id:"redundant-load-balancers",level:2},{value:"Terms used",id:"terms-used",level:2},{value:"Hot Spot",id:"hot-spot",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"load-balancers"},"Load Balancers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"it acts as a digital traffic cop for the system, distributing network requests across multiple servers and ensuring that the system operates at peak performance day and night",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ensures no single server bears too much demand"),(0,l.kt)("li",{parentName:"ul"},"By spreading the work evenly",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"load balancing improves application responsiveness"))),(0,l.kt)("li",{parentName:"ul"},"increases availability of applications and websites for users"),(0,l.kt)("li",{parentName:"ul"},"Modern applications cannot run without load balancers"),(0,l.kt)("li",{parentName:"ul"},"Over time, software load balancers have added additional capabilities including security and application"),(0,l.kt)("li",{parentName:"ul"},"It helps to spread the traffic across a cluster of servers",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"to improve responsiveness and availability of applications, websites or databases"))),(0,l.kt)("li",{parentName:"ul"},"keeps track of the status of all the resources while distributing requests"),(0,l.kt)("li",{parentName:"ul"},"LB will stop sending traffic to such a server if",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"a server is not available to take new requests"),(0,l.kt)("li",{parentName:"ul"},"is not responding or has elevated error rate"))),(0,l.kt)("li",{parentName:"ul"},"basically it helps to improve reliability and scalability of the app"))),(0,l.kt)("li",{parentName:"ul"},"load balancers can also be overloaded, therefore multiple load balancers can be used",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"different server selection strategies can also be applied to different load balancers"),(0,l.kt)("li",{parentName:"ul"},"load balancers can also communicate between each other so as to determine the best redirection strategy for the specific request"))),(0,l.kt)("li",{parentName:"ul"},"it is a type of reverse proxy that distributes traffic across servers",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"can be found in many parts of a system, from the DNS layer all the way to the database layer"))),(0,l.kt)("li",{parentName:"ul"},"Typically",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"LB sits between client and server",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"accepts incoming network and application traffic"),(0,l.kt)("li",{parentName:"ul"},"distributing the traffic across multiple backend servers"))),(0,l.kt)("li",{parentName:"ul"},"By balancing application request across multiple servers",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"LB reduces individual server load"),(0,l.kt)("li",{parentName:"ul"},"LB prevents any one application server from becoming a single point of failure"),(0,l.kt)("li",{parentName:"ul"},"thus improving overall application availability and responsiveness\n",(0,l.kt)("img",{parentName:"li",src:"https://github.com/reshinto/Basic_technologies_revision/raw/master/interviewPrep/system_design/images/loadBalancer.png",alt:"alt text",title:"Load Balancer"})))))),(0,l.kt)("li",{parentName:"ul"},"To utilize full scalability and redundancy",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"can try to balance the load at each layer of the system at 3 places",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"Between the user (client) and the web server"),(0,l.kt)("li",{parentName:"ol"},"Between web servers and an internal platform layer, like application servers or cache servers"),(0,l.kt)("li",{parentName:"ol"},"Between internal platform layer and database\n",(0,l.kt)("img",{parentName:"li",src:"https://github.com/reshinto/Basic_technologies_revision/raw/master/interviewPrep/system_design/images/LB_3places.png",alt:"alt text",title:"LB 3 places"}))))))),(0,l.kt)("h2",{id:"how-does-a-load-balancer-gets-updated-information-on-the-servers"},"How does a load balancer gets updated information on the servers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"depends on configurations"),(0,l.kt)("li",{parentName:"ul"},"can either register the new server or deregister a removed server by itself"),(0,l.kt)("li",{parentName:"ul"},"or someone has to update and configure the information")),(0,l.kt)("h2",{id:"2-layer-types-of-load-balancer"},"2 layer types of load balancer"),(0,l.kt)("h3",{id:"layer-4"},"Layer 4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"only has access to TCP and UDP data"),(0,l.kt)("li",{parentName:"ul"},"faster because it does not need to use as much processing power to look at each request"),(0,l.kt)("li",{parentName:"ul"},"lack of information can lead to uneven traffic"),(0,l.kt)("li",{parentName:"ul"},"most popular Layer 4 load balancing techniques are:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"round-robin, weighted round-robin, least connections, weighted least connections")))),(0,l.kt)("h3",{id:"layer-7"},"Layer 7"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"full access to HTTP protocol and data"),(0,l.kt)("li",{parentName:"ul"},"can terminate SSL and decrypt traffic"),(0,l.kt)("li",{parentName:"ul"},"check for authentication"),(0,l.kt)("li",{parentName:"ul"},"smarter routing options"),(0,l.kt)("li",{parentName:"ul"},"more cpu intensive",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"but is no longer a big factor due to the drop in hardware costs over the years"))),(0,l.kt)("li",{parentName:"ul"},"the staff who are responsible for the apps themselves need to ensure that their apps are perfectly tuned for optimal application performance"),(0,l.kt)("li",{parentName:"ul"},"Layer 7 switching directs its requests at the application layer, this type of switching is also known as:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Request switching, Application switching, Content based routing")))),(0,l.kt)("h2",{id:"2-types-of-load-balancers"},"2 types of load balancers"),(0,l.kt)("h3",{id:"software-or-hardware-type"},"Software or Hardware type"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"SLB (Server Load Balancing)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"provides network services and content delivery using a series of load balancing algorithms"),(0,l.kt)("li",{parentName:"ul"},"prioritizes responses to the specific requests from clients over the network"),(0,l.kt)("li",{parentName:"ul"},"distributes client traffic to servers to ensure consistent, high-performance application delivery")))),(0,l.kt)("h3",{id:"software-type"},"Software type"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"can do more compared to hardware type, as it has more power over customization and scaling"),(0,l.kt)("li",{parentName:"ul"},"examples: Nginx, HAProxy",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"SDN (software-defined networking)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"separates the control plane from the data plane for application delivery",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This allows the control of multiple load balancing"),(0,l.kt)("li",{parentName:"ul"},"helps the network to function like the virtualized versions of compute and storage"),(0,l.kt)("li",{parentName:"ul"},"With the centralized control",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"networking policies and parameters can be programmed directly",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"for more responsive and efficient application services"))))))))),(0,l.kt)("li",{parentName:"ul"},"UDP (User Datagram Protocol)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"used for live broadcasts and online games when speed is important and there is little need for error correction"),(0,l.kt)("li",{parentName:"ul"},"has low latency because it does not provide time-consuming health checks"))),(0,l.kt)("li",{parentName:"ul"},"TCP (transmission control protocol)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"provides a reliable and error-checked stream of packets to IP addresses",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"which can otherwise easily be lost or corrupted"))))),(0,l.kt)("li",{parentName:"ul"},"Virtual",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"mimic software-driven infrastructure through virtualization"),(0,l.kt)("li",{parentName:"ul"},"runs the software of a physical load balancing appliance on a virtual machine"),(0,l.kt)("li",{parentName:"ul"},"do not avoid the architectural challenges of traditional hardware appliances",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"which include limited scalability and automation, and lack of central management"))))),(0,l.kt)("li",{parentName:"ul"},"Elastic",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"scales traffic to an application as demand changes over time"),(0,l.kt)("li",{parentName:"ul"},"uses system health checks to learn the status of application pool members (application servers)"),(0,l.kt)("li",{parentName:"ul"},"routes traffic appropriately to available servers"),(0,l.kt)("li",{parentName:"ul"},"manages fail-over to high availability targets"),(0,l.kt)("li",{parentName:"ul"},"automatically spins-up additional capacity"))),(0,l.kt)("li",{parentName:"ul"},"LBaaS (Load Balancer as a Service)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"uses advances in load balancing technology",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"to meet the agility and application traffic demands of organizations implementing private cloud infrastructure"))),(0,l.kt)("li",{parentName:"ul"},"Using an as-a-service model",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"creates a simple model for application teams to spin up load balancers")))))))),(0,l.kt)("h3",{id:"hardware-type-f5-citrix"},"Hardware type: F5, Citrix"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"they are physical machines that are dedicated to load balancing"),(0,l.kt)("li",{parentName:"ul"},"limited to the hardware that is given"),(0,l.kt)("li",{parentName:"ul"},"hardware is often expensive",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"as it could lead to vendor lock-in"))),(0,l.kt)("li",{parentName:"ul"},"can handle tons of taffic because they are specifically designed only to be load balancers"),(0,l.kt)("li",{parentName:"ul"},"examples",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Geographic",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"redistributes application traffic across data centers in different locations for maximum efficiency and security"),(0,l.kt)("li",{parentName:"ul"},"uses multiple data centers in many locations",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"local load balancing on the other hand, happens within a single data center"))))),(0,l.kt)("li",{parentName:"ul"},"Multi-site",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"also known as global server load balancing (GSLB)"),(0,l.kt)("li",{parentName:"ul"},"distributes traffic across servers located in multiple sites or locations around the world"),(0,l.kt)("li",{parentName:"ul"},"servers can be on-premises or hosted in a public or private cloud"),(0,l.kt)("li",{parentName:"ul"},"important for quick disaster recovery and business continuity after a disaster in one location renders a server inoperable")))))),(0,l.kt)("h2",{id:"possible-ways-to-solve-server-overload"},"possible ways to solve server overload"),(0,l.kt)("h3",{id:"vertically-scale-the-system"},"Vertically scale the system"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"this is to increase the power of the server, however, this will be limited as there is only so much we can do to increase the performance of a single server of a single machine")),(0,l.kt)("h3",{id:"horizontally-scale-the-system"},"Horizontally scale the system"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"this is by adding more machines or add more servers to the system"),(0,l.kt)("li",{parentName:"ul"},"however this requires a strategy to be put in place to allow clients to know which server to make the request from",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"in this case, a load balance will be useful")))),(0,l.kt)("h2",{id:"benefits-of-load-balancing"},"Benefits of Load Balancing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Users experience faster, uninterrupted service",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Users won\u2019t have to wait for a single struggling server to finish its previous tasks"),(0,l.kt)("li",{parentName:"ul"},"requests are immediately passed on to a more readily available resource"))),(0,l.kt)("li",{parentName:"ul"},"Service providers experience less downtime and higher throughput",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"a full server failure won\u2019t affect the end user experience",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Because load balancer will route around it to a healthy server"))))),(0,l.kt)("li",{parentName:"ul"},"Load balancing makes it easier for system administrators to handle incoming requests",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"it also decreases wait time for users"))),(0,l.kt)("li",{parentName:"ul"},"Smart load balancers provide benefits that determine traffic bottlenecks before they happen",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"e.g.: predictive analytics"),(0,l.kt)("li",{parentName:"ul"},"thus, smart load balancer gives an organization actionable insights"),(0,l.kt)("li",{parentName:"ul"},"These are key to automation and can help drive business decisions"))),(0,l.kt)("li",{parentName:"ul"},"System administrators experience fewer failed or stressed components",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"load balancing has several devices perform a little bit of work",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Instead of a single device performing a lot of work")))))),(0,l.kt)("h2",{id:"load-balancing-algorithms"},"Load Balancing Algorithms"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"How does the load balancer choose the backend server?",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Load balancers consider 2 factors before forwarding a request to a backend server",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"ensure that the server they choose is actually responding appropriately to requests"),(0,l.kt)("li",{parentName:"ol"},"then use a pre-configured algorithm to select one from the set of healthy servers"))))),(0,l.kt)("li",{parentName:"ul"},"Health Checks",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Load balancers should only forward traffic to \u201chealthy\u201d backend servers"),(0,l.kt)("li",{parentName:"ul"},"To monitor the health of a backend server",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u201chealth checks\u201d regularly attempt to connect to backend servers to ensure that servers are listening"))),(0,l.kt)("li",{parentName:"ul"},"If a server fails a health check",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"it is automatically removed from the pool"),(0,l.kt)("li",{parentName:"ul"},"traffic will not be forwarded to it until it responds to the health checks again"))))),(0,l.kt)("li",{parentName:"ul"},"Load balancing methods / Server-Selection Strategy",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Least Connection Method",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"check how much traffic a server is handling at an given time"),(0,l.kt)("li",{parentName:"ul"},"directs traffic to the server with the fewest active connections"),(0,l.kt)("li",{parentName:"ul"},"useful when there are a large number of persistent client connections which are unevenly distributed between the servers",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"such as chat or streaming apps"))))),(0,l.kt)("li",{parentName:"ul"},"Least Response Time Method / performance-based selection",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"check how long a server is taking to respond to traffic"),(0,l.kt)("li",{parentName:"ul"},"directs traffic to the server with the fewest active connections and the lowest average response time"))),(0,l.kt)("li",{parentName:"ul"},"Least Bandwidth Method / load-based selection",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"check how much resources a server is using"),(0,l.kt)("li",{parentName:"ul"},"selects the server that is currently serving the least amount of traffic measured in megabits per second (Mbps)"))),(0,l.kt)("li",{parentName:"ul"},"Round Robin Method",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"cycles through a list of servers and sends each new request to the next server in 1 order",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"When it reaches the end of the list, it starts over at the beginning"),(0,l.kt)("li",{parentName:"ul"},"is most useful when the servers are of equal specification and there are not many persistent connections"))),(0,l.kt)("li",{parentName:"ul"},"simplest type of routing, but can result in uneven traffic"))),(0,l.kt)("li",{parentName:"ul"},"Weighted Round Robin Method",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"designed to better handle servers with different processing capacities",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Each server is assigned a weight (an integer value that indicates the processing capacity)"),(0,l.kt)("li",{parentName:"ul"},"order of servers from 1st to last will still be followed",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"however, the number of redirection of requests per server will depend on the weight it was given"),(0,l.kt)("li",{parentName:"ul"},"Servers with higher weights receive new connections before those with less weights"),(0,l.kt)("li",{parentName:"ul"},"servers with higher weights get more connections than those with less weights"))))))),(0,l.kt)("li",{parentName:"ul"},"random selection",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"could cause problems",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"1 server by chance could get overloaded"))))),(0,l.kt)("li",{parentName:"ul"},"IP Hash / IP-based routing",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"when load balancer gets requests from clients",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"it hashes the clients IP addresses",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"depending on the value of the hash it will redirect to the server accordingly"))))),(0,l.kt)("li",{parentName:"ul"},"this strategy can be useful if got caching going on in the servers",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"if we are caching the results of requests in the servers",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"it will be helpful to have requests from a specific client always be redirected to the server in which the response of that particular client's request has been cached"))))),(0,l.kt)("li",{parentName:"ul"},"this can help you maximize cache hits"),(0,l.kt)("li",{parentName:"ul"},"useful for stateful sessions"))),(0,l.kt)("li",{parentName:"ul"},"path-based server selection",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"load balancer distributes requests to servers according to the path of the requests",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"for example, it could be split based on features, payments related feature is redirected to payment handled related servers, and other features related requests are redirected to their respective related servers"))),(0,l.kt)("li",{parentName:"ul"},"this is useful as if we want to deploy a big change to a service",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"this will only affect the servers that handles this service")))))))),(0,l.kt)("h2",{id:"redundant-load-balancers"},"Redundant Load Balancers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"load balancer can be a single point of failure",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"to overcome this, a second load balancer can be connected to the first to form a cluster"),(0,l.kt)("li",{parentName:"ul"},"Each LB monitors the health of the other"),(0,l.kt)("li",{parentName:"ul"},"both of them are equally capable of serving traffic and failure detection - in the event the main load balancer fails, the second load balancer takes over\n",(0,l.kt)("img",{parentName:"li",src:"https://github.com/reshinto/Basic_technologies_revision/raw/master/interviewPrep/system_design/images/redundantLoadBalancers.png",alt:"alt text",title:"Redundant Load Balancers"}))))),(0,l.kt)("h2",{id:"terms-used"},"Terms used"),(0,l.kt)("h3",{id:"hot-spot"},"Hot Spot"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"when distributing a workload across a set of servers, that workload might be spread unevenly",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"this can happen if the ",(0,l.kt)("inlineCode",{parentName:"li"},"sharding key")," or the ",(0,l.kt)("inlineCode",{parentName:"li"},"hashing function")," are suboptimal"),(0,l.kt)("li",{parentName:"ul"},"or if workload is naturally skewed",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"some servers receiving a lot more traffic than others, thus creating a ",(0,l.kt)("inlineCode",{parentName:"li"},"hot spot"))))))))}u.isMDXComponent=!0}}]);