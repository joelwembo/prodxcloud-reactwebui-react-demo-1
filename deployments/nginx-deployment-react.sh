# Installation  process
# curl -sL https://rpm.nodesource.com/setup_18.x | sudo bash -

node -v
systemctl stop nginx
cd ~

git clone https://github.com/joelwembo/prodx-reactwebui-react-demo-1.git

cd prodx-reactwebui-react-demo-1

npm i && npm run build

cd ~

mkdir -vp uat_files

cp -rf prodx-reactwebui-react-demo-1/dist uat_files

cd uat_files/dist && sudo cp -rf * /usr/share/nginx/html

restart the server
systemctl restart nginx
