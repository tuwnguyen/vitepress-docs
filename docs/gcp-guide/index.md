---
outline: deep
next:
  text: ''
  link: ''
---

# AWS Guide

## Installation GCloud CLI/SDK

[Install](https://cloud.google.com/sdk/docs/install)

```bash
gcloud auth login
gcloud init

Default Region and Zone? (y/n)? y

```
![alt text](./image/image.png)

## Installation the GCloud Context

```bash
gcloud container clusters get-credentials <cluster-name>
gcloud components install gke-gcloud-auth-plugin


```
![alt text](./image/image-1.png)

 - Check context of Docker Desktop and using context to communicate with clusters(local or remote)
 ![alt text](./image/image-2.png)

 - Check pods in cluster
 ![alt text](./image/image-3.png)

## Unable GG Cloud Build API

### Setup Cloud Build when skaffold
 - Instead of using image in docker hub
 ![alt text](./image/image-5.png)
 ```bash
 skaffold dev
 ```
 - Push image to `us.gcr.io/ticketing-dev-433712/auth` repository

## Loading Balancing
When create a new cluster, it also creates a new load balancer
![alt text](./image/image-4.png)




