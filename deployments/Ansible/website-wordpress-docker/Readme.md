
1. ssh-keygen -t rsa -f ~/.ssh/prodxsecure

2. cat  ~/.ssh/prodxsecure

3. cp ~/.ssh/prodxsecure ~/.ssh/prodxsecure.pub

5. chmod 400 ~/.ssh/prodxsecure

6. (extract ) optional ssh-keygen -y -f ~/.ssh/prodxsecure.pem


7. provision ec2

# create ec2
ANSIBLE_LOCALHOST_WARNING=False \
ANSIBLE_INVENTORY_UNPARSED_WARNING=False \
ansible-playbook main.yml --tags create_ec2

# (optional) Add Key
ansible-playbook add-key.yml -i ansible_hosts --user ubuntu --key-file prodxsecure.pem -e "key=./prodxsecure.pem.pub"

# install jenkins / java / nginx ( optional)
ansible-playbook playbook.yml -i ansible_hosts --user ubuntu --key-file prodxsecure.pem -e "key=prodxsecure.pem.pub"

# wordpress
ansible-playbook wordress-docker.yml -i ansible_hosts --user ubuntu --key-file prodxsecure.pem -e "key=prodxsecure.pem.pub"

# react application
ansible-playbook simple-website.yml -i ansible_hosts --user ubuntu --key-file prodxsecure.pem -e "key=prodxsecure.pem.pub"


