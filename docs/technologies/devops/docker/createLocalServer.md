# Create local ubuntu server to be used on vscode

## Dockerfile

```
FROM ubuntu:20.04

RUN export DEBIAN_FRONTEND=noninteractive \
        && apt update

RUN apt install -y wget \
        && wget https://deb.nodesource.com/setup_14.x -O setup14.sh \
        && bash setup14.sh \
        && apt install -y nodejs \
        && apt install -y git

RUN npm i -g yarn

WORKDIR /usr/src

ENTRYPOINT ["/bin/bash"]
```

## Build image

&gt; docker build -t server .

## Create container

&gt; docker run -d -t -p 1234:1234 --name=local server

## Copy repo into container directory

&gt; docker cp folder local:/

## Open bash

&gt; docker exec -it local bash

## Open in vscode

1. Open vscode
2. Click on the bottom-left green icon (open a remote window)
3. Click on the "Remote Containers: Attach to Running Container
4. Click on the container image to open (should appear if the container is running)
5. Click on file -&gt; open folder -&gt; root
6. Click on file -&gt; open folder -&gt; select path to folder to open
