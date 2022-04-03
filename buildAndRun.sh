#!/bin/sh
# chmod a+x buildAndRun.sh

# digital ocean cloud environment
sudo docker stop portfolio
sudo docker rm portfolio
sudo docker rmi portfolio
sudo docker build -t portfolio .
sudo docker run -d -p 80:80 --name portfolio --restart unless-stopped portfolio
