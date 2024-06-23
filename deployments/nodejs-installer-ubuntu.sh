

#nodejs ubuntu installation
#!/bin/bash

# Update package index
sudo apt update

# Install prerequisites
sudo apt install -y curl

# Add NodeSource repository for Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

# Install Node.js 18
sudo apt install -y nodejs

# Verify installation
echo "Node.js version:"
node -v
echo "npm version:"
npm -v


