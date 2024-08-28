---
outline: deep
next:
  text: ''
  link: ''
---

# AWS Guide

## K8S Context

[Guide](https://aptakube.com/blog/complete-guide-to-kubeconfig-kubernetes-contexts)

## Dockerrizing the Services

```bash
docker build .
docker run imageID

docker build -t tuwnguyen/posts .
docker run -it tuwnguyen/posts sh
docker exec -it 9a0c73a964bc sh
docker logs 28e1f2b13a94
```

## K8s Services

```bash
kubectl version
kubectl apply -f posts.yaml
kubectl get pods
kubectl exec -it posts sh
kubectl describe pod posts
```

### Deployment

```bash
k apply -f posts-depl.yaml 
k apply -f . (apply all files)
k get deployments
k describe deployment posts-depl
k delete deployment posts-depl
```

### Update Deployment
```bash
kubectl rollout restart deployment posts-depl
```

### Services
```bash
k get services
```

### Install Ingress-Nginx

https://kubernetes.github.io/ingress-nginx/deploy/#quick-start
```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.10.1/deploy/static/provider/cloud/deploy.yaml
kubectl get ing
kubectl get services -n ingress-nginx

```

### Hosts File Tweak
```bash
code /etc/host
```

### Note about K8s
When you delete pods in Kubernetes, they often get recreated automatically due to the underlying mechanisms of Kubernetes, particularly when they are part of a deployment or replica set. Here are the main reasons why this happens:

1. Deployment and Replica Sets
Kubernetes uses deployments and replica sets to manage the desired state of applications. When you delete a pod that is managed by a deployment, Kubernetes will automatically create a new pod to maintain the specified number of replicas. This behavior is by design to ensure high availability and resilience of applications. If you want to stop the pods from being recreated, you need to scale down the deployment or delete the deployment itself, not just the pods

Conclusion
To effectively stop pods from being recreated, you should scale down or delete the associated deployment, replica set, StatefulSet, or DaemonSet. Simply deleting the pods will not suffice, as Kubernetes is designed to maintain the desired state of applications automatically.

## Scaffold

https://skaffold.dev/docs/
```bash
brew install skaffold

scaffold
scaffold fix (fix to newest version of apiVersionin YAML file)
scaffold dev (rebuild all deployments)
scaffold delete (clean up all pods, services, deployments) (Ctrl + C)

```
