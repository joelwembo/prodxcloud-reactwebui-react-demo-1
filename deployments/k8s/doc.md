kubectl expose deployment prodxcloud-deployment --type=NodePort --port=80

minikube service prodxcloud-deployment --url