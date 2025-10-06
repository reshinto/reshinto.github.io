# Weighted Round Robin Load Balancer Example
## how to setup
1. install dependecies
&gt; npm install
2. install nginx if it has not been installed
&gt; brew install nginx
3. modify nginx.conf file
    - backup file before making changes
    - location of nginx.conf file for mac is at
    - ```/usr/local/etc/nginx```
4. run nginx
&gt; brew services start nginx
5. run server 1
&gt; PORT=3000 node server.js
6. run server 2
&gt; PORT=3001 node server.js
7. send request ```curl localhost:8081/hello``` a few times to see how the load balancer works
