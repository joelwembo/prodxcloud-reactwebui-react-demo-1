DOCKER_SCAN_SUGGEST=false docker build -t prodxcloud .
docker run -p 80:80 --name react prodxcloud

## run ssl
# docker-compose -f ./deployments/traefik/docker-compose-ssl.yml up -d
# DOCKER_SCAN_SUGGEST=false docker build -t prodxcloud:latest .
# docker-compose -f ./docker-compose-ssl.yml up -d