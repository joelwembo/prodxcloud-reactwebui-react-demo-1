# DevOps Engineering: End-to-End CI/CD Pipeline for react applications to AWS CloudFront using Ansible, Jenkins, and Terraform
![image](https://github.com/joelwembo/prodx-reactwebui-react-demo-1/assets/19718580/79a378fc-d26a-4686-80db-cb2ce26a7eaa)


In this post, I explain how to use the Jenkins open-source automation server to deploy AWS CloudFront, ACM for SSL Certification, S3 bucket for static web hosting, and Route53 for custom domain names with Terraform, creating a functioning CI/CD pipeline. When properly implemented, the CI/CD pipeline is triggered by code changes pushed to your GitHub repo, automatically fed into a new Jenkins Job, then the output is deployed on AWS CloudFront and S3.

- [@Joel O. Wembo](https://www.joelotepawembo.com)
- [@twitter](twitter.com/joelwembo1)
- [@linkedin](https://www.linkedin.com/in/joelotepawembo)


### Prerequisites:
Before we get into the good stuff, first we need to make sure we have the required services on our local machine or dev server, which are:

- AWS Account
- GitHub Account
- AWS CLI installed and configured.
- Docker installed locally.
- NPM
- NodeJS
- Terraform
- Basic Understanding of Jenkins
- A Domain name Hosted by any domain name provider ( Ex: AWS Route 53 )
- Basic familiarity with YAML and GitHub workflows.
- A React Project hosted in a GitHub repository
- Basic knowledge of HTML or React
- Any Browser for testing

# Requirements

- [x] #1 Create AWS Access Keys
- [x] Set Up Custom Domain
- [x] Create your React / Front-End Application :tada:
- [x] #2 Provision an AWS EC2 instance with Ansible
- [x] Jenkins Installation
- [x] Setting up a CI/CD pipeline using Terraform :tada:
- [x] Terraform Cloud Configuration
- [x] Check result in your AWS Management Console :tada:

@octocat :+1: This project looks great - Let’s Get It Started! :shipit:

## local testing

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## docker && docker compose

 ```
DOCKER_SCAN_SUGGEST=false docker build -t prodxcloud:latest .
 ```
  ```
docker run -p 80:80 --name react prodxcloud:latest
 ```

## You can install aws cli using the following command


```
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"

unzip awscliv2.zip

sudo ./aws/install

```

Next, configure your aws account in your computer using the following command:

```
aws configure
```

### Create a Production Build of your application

```
npm run build
```
### `#Generate SSH keys`


```
# 1. This creates a public (.pub) and private key in the ~/.ssh/ directory
ssh-keygen -t rsa -b 4096 -f ~/.ssh/myKey
Generating public/private rsa key pair.
Enter passphrase (empty for no passphrase):  # Can be left blank

# 2. Ensure private key is not publicly viewable
chmod 400 ~/.ssh/mykey
```

> [!NOTE]
> This project contains multiple types of deployments.



## Ansible Doc

[Ansible Doc](deployments/docs/Ansible-EC2-React.png)

```

# AWS playbook
---
- hosts: localhost
  connection: local
  gather_facts: True

  vars:
    key_name: prodxsecure         # Key used for SSH
    region: us-east-1      # Region may affect response and pricing
    image: ami-04b70fa74e45c3917 # look in ec2 > ami (filter owner alias: amazon) or amis of manually launched instances
    id: "prodxcloud-aws-ec2-lab-1"
    instance_type: t2.micro       # Choose instance type, check AWS for pricing
    # vpc_id: subnet-012345
    sec_group: "prodxcloud-aws-ec2-lab-1"

  tasks:
    - name: Provisioning EC2 instances
      block:

      - name: Create security group
        amazon.aws.ec2_security_group:
          name: "{{ sec_group }}"
          description: "Sec group for app"
          region: "{{ region }}"
          # aws_access_key: "{{ec2_access_key}}"  # From vault as defined
          # aws_secret_key: "{{ec2_secret_key}}"  # From vault as defined
          rules:                                # allows ssh on port 22
            - proto: tcp
              ports:
                - 22
              cidr_ip: 0.0.0.0/0
              rule_desc: allow all on ssh port
            - proto: tcp
              ports:
                - 8181
              cidr_ip: 0.0.0.0/0
              rule_desc: allow all on port 8181

            - proto: tcp
              ports:
                - 80
              cidr_ip: 0.0.0.0/0
              rule_desc: allow all on port 80 

            - proto: tcp
              ports:
                - 8080
              cidr_ip: 0.0.0.0/0
              rule_desc: allow all on port 8080 

            - proto: tcp
              ports:
                - 9000
              cidr_ip: 0.0.0.0/0
              rule_desc: allow all on port 9000  

            - proto: tcp
              ports:
                - 8000
              cidr_ip: 0.0.0.0/0
              rule_desc: allow all on port 8000

            - proto: tcp
              ports:
                - 3306
              cidr_ip: 0.0.0.0/0
              rule_desc: allow all on port 3306         

      - name: Amazon EC2 | Create Key Pair      # Create key pair for ssh
        amazon.aws.ec2_key:
          name: "{{ key_name }}"
          region: "{{ region }}"
          # aws_access_key: "{{ec2_access_key}}"  # From vault as defined
          # aws_secret_key: "{{ec2_secret_key}}"  # From vault as defined
          key_material: "{{ item }}"
        with_file: prodxsecure1.pem

      - name: Start an instance with a public IP address
        amazon.aws.ec2_instance:
          name: "public-compute-instance"
          key_name: "{{ key_name }}"
          # vpc_subnet_id: "{{ vpc_id }}"
          instance_type: "{{ instance_type }}"
          security_group: "{{ sec_group }}"
           # aws_access_key: "{{ec2_access_key}}"  # From vault as defined
          # aws_secret_key: "{{ec2_secret_key}}"  # From vault as defined
          region: "{{ region }}"
          network:
            assign_public_ip: true
          image_id: "{{ image }}"
          tags:
            Environment: Testing

      # Always require the 'create_ec2' tag to provision EC2 instance
      tags: ['never', 'create_ec2'] 

    - name: Facts
      block: # this block prints out instance data

      - name: Get instances facts
        ec2_instance_info:
           # aws_access_key: "{{ec2_access_key}}"  # From vault as defined
          # aws_secret_key: "{{ec2_secret_key}}"  # From vault as defined
          region: "{{ region }}"
        register: result

      - name: Instances ID
        debug:
          msg: "ID: {{ item.instance_id }} - State: {{ item.state.name }} - Public DNS: {{ item.public_dns_name }}"
        loop: "{{ result.instances }}"
      tags: always


```


## Jenkins Doc

[Jenkins  Doc](deployments/docs/Ansible-EC2-React.drawio)

```

pipeline {
    agent any
     options {
        buildDiscarder(logRotator(numToKeepStr: '3'))
      }
       environment {
        DOMAIN_NAME = ""
        PUBLIC_S3_BUCKET = ""
        DOCKERHUB_CREDENTIALS = credentials('globaldockerhub')
        appName = "server"
        registry = ""
        registryCredential = ""
        projectPath = ""
        AWS_ACCOUNT=credentials('AWS_ACCOUNT')
        AWS_ACCESS_KEY_ID=credentials('AWS_ACCESS_KEY_ID')
        AWS_SECRET_ACCESS_KEY=credentials('AWS_SECRET_ACCESS_KEY')
        AWS_REGION=credentials('AWS_REGION')
        AWS_EC2_INSTANCE=credentials('AWS_EC2_INSTANCE') # 34.238.119.22 
        AWS_SSH_KEY = credentials('AWS_SSH_KEY')
      }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', credentialsId: 'github-credentials', url: 'https://github.com/joelwembo/prodx-reactwebui-react-demo-1.git'
            }
        }

         stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

         stage('Run Mocha Tests') {
            steps {
                sh 'npm run test' // Assuming your tests are run with 'npm test'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build' // Build the React application only if tests pass (conditional stage success)
            }
        }

        stage('Provision AWS Infrastructure (Terraform)') {
            steps {
                sh 'terraform init' // Initialize Terraform
                sh 'terraform plan' // Validate Terraform configuration
                input 'Confirm?' message: 'Are you sure you want to deploy to AWS?'
                sh 'terraform apply -auto-approve' // Apply Terraform configuration (requires confirmation)
            }
        }
        stage('Deploy to CloudFront') {
            steps {
                // Upload built React app to S3 bucket (replace with your upload script)
                sh 'aws s3 cp build/ s3://your-bucket-name/ --recursive --profile default'
                // Check if Cloudfront was created && Invalidate CloudFront cache to ensure latest content is served (replace with your invalidation script)
                sh 'aws cloudfront create-invalidation --distribution-id your-distribution-id --paths "/*" --profile default'
            }
        }
    }

    post {
        always {
            cleanWs() // Clean workspace after pipeline execution
        }
        success {
            // Optional: Send notification on successful builds (e.g., email)
        }
        failure {
            // Optional: Send notification on failed builds (e.g., email)
        }
    }
}

```


Thank you for Reading !! 🙌🏻, see you in the next article.🤘

# For more information about the author visit

- [@Joel O. Wembo](https://www.joelotepawembo.com)
- [@twitter](twitter.com/joelwembo1)
- [@linkedin](https://www.linkedin.com/in/joelotepawembo)



