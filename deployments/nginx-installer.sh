#!/bin/bash

# nginx installer for ubuntu
# Update package index
sudo apt update

# Install Nginx
sudo apt install -y nginx

# Start Nginx service
sudo systemctl start nginx

# Enable Nginx to start on boot
sudo systemctl enable nginx

# Print Nginx status
sudo systemctl status nginx


# nginx installer for amazon lunix 2
# # Update package index #
# sudo yum update -y

# # Install the Extra Packages for Enterprise Linux (EPEL) repository
sudo amazon-linux-extras install epel -y

# Install Nginx
sudo yum install -y nginx

# Start Nginx service
sudo systemctl start nginx

# Enable Nginx to start on boot
sudo systemctl enable nginx

# Print Nginx status
sudo systemctl status nginx

