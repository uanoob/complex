# k8s
Docker and Kubernetes
# Prepare environment on local machine
    - Install Kubectl
    - Install Virtualbox
    - Install Minikube
# Start minikube on local machine
    - minikube start
# Stop minikube on local machine
    - minikube stop
# Status minikube on local machine
    - minikube status
# Cluster info on local machine
    - kubectl cluster-info
# Kubernetes persistent volume info on machine
    - kubectl get storageclass
# Kubernetes persistent volume more info on machine
    - kubectl describe storageclass
# Get list kubernetes persistent volumes on machine
    - kubectl get pv
# Get list kubernetes persistent volume claims on machine
    - kubectl get pvc
# Creating secret on machine
    - kubectl create secret generic <secret_name> --from-literal <secret_key>=<secret_value>
    - kubectl create secret generic pgpassword --from-literal PG_PASSWORD=password123 (example)
# List secrets on machine
    - kubectl get secrets
# Change the current config of cluster (Create cluster if does not exist)
    - kubectl apply -f <filename>
    - kubectl apply -f client-pod.yaml
    - kubectl apply -f client-node-port.yaml
# Change the all configs of cluster in folder (Create clusters if does not exist)
    - kubectl apply -f <folder name>
    - kubectl apply -f k8s (Example)
# List running Pods on local machine
     - kubectl get pods
# List running Pods on local machine with ip inside virtual machine
     - kubectl get pods -o wide
# List running Services on local machine
    - kubectl get services
# List running Deployments on local machine
    - kubectl get deployments
# Get detailed info about object
     - kubectl describe <object type> <object name>
     - kubectl describe pod client-pod
     - kubectl describe deployment client-deployment
     - kubectl describe service client-node-port
# Delete a running object
     - kubectl delete -f <config file>
     - kubectl delete -f client-pod.yaml
     - kubectl delete -f client-node-port.yaml
# Delete a deployment
     - kubectl delete deployment <deployment name>
     - kubectl delete deployment client-deployment (example)
# Delete a service
     - kubectl delete service <service name>
     - kubectl delete service client-node-port (example)
# Minikube Ip on local machine
    - minikube ip
## 192.168.99.100 (example)
# View running app in browser
     - <minikube ip>:<nodePort>
     - 192.168.99.100:31515
