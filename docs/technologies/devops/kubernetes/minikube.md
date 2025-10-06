# Minikube

## Installation

- Install
  &gt; brew install minikube
- verify
  &gt; minikube version

## Commands

### Check status

&gt; minikube status

### Start cluster

&gt; minikube start

- on local, use virtual box instead of docker driver
  &gt; minikube start --driver=virtualbox
- verify if cluster is up and running
  &gt; kubectl get nodes

### Pause cluster

&gt; minikube pause

### Unpause cluster

&gt; minikube unpause

### Stop cluster

&gt; minikube stop

### Increase the default memory limit (requires a restart)

&gt; minikube config set memory 16384

### Browse the catalog of easily installed Kubernetes services

&gt; minikube addons list

#### Enable addon

&gt; minikube addons enable addonname

#### Disable addon

&gt; minikube addons disable addonname

#### Run addon

- dashboard addon example
  &gt; minikube dashboard

### Create a second cluster running an older Kubernetes release

&gt; minikube start -p aged --kubernetes-version=v1.16.1

### Delete all of the minikube clusters

&gt; minikube delete --all

### Deploy applications

- deploy app
  &gt; kubectl create -f filename.yaml
- expose deployment as a service
  &gt; kubectl expose deployment appname --type=NodePort
- access service
  &gt; minikube service appname

### List all services

&gt; minikube service list
