# sudo apt update
# sudo apt install nginx --yes

# Docker installation
# sudo apt install apt-transport-https ca-certificates curl software-properties-common --assume-yes
# sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
# sudo add-apt-repository 'deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable'
# apt-cache policy docker-ce
# sudo apt install docker-ce --assume-yes
# sudo chmod 777 /var/run/docker.sock


# sudo systemctl status docker
echo 'Docker successfully installer'

# install docker compose
# sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose 
# sudo chmod +x /usr/local/bin/docker-compose
# docker-compose --version
echo "Docker Compose Installed successfully installer"