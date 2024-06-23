#!/bin/bash

# Update package index
sudo yum update -y
# Install prerequisites
sudo yum install -y curl
# Add NodeSource repository for Node.js 18
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
# Install Node.js 18
sudo yum install -y nodejs
# Verify installation
echo "Node.js version:"
node -v
echo "npm version:"
npm -v
