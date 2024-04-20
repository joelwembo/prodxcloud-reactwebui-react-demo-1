#!/bin/bash

# Variables
KUBECONFIG="/root/.kube/config"
NAMESPACE="prodxcloud"
DOCKER_IMAGE="joelwembo/prodxcloud:latest"
DEPLOYMENT_NAME="prodxcloud-deployment"
SERVICE_NAME="mycluster"
EKS_CLUSTER_NAME="mycluster"
PORT=8585

# Set KUBECONFIG environment variable
export KUBECONFIG="$KUBECONFIG"

aws eks --region us-east-1 update-kubeconfig --name $EKS_CLUSTER_NAME

# Apply Kubernetes manifests
kubectl apply -f deployments/k8s/deployment.yaml

# Update the Docker image in the deployment
kubectl set image deployment/$DEPLOYMENT_NAME $DEPLOYMENT_NAME=$DOCKER_IMAGE -n $NAMESPACE

# Expose the deployment as a service
kubectl expose deployment $DEPLOYMENT_NAME --type=LoadBalancer --port=$PORT  --target-port=$PORT -n $NAMESPACE --name=$SERVICE_NAME
