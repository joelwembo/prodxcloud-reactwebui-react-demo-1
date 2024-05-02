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

## Jenkins Doc

[Jenkins  Doc](deployments/docs/Ansible-EC2-React.drawio)


Thank you for Reading !! 🙌🏻, see you in the next article.🤘

# For more information about the author visit

- [@Joel O. Wembo](https://www.joelotepawembo.com)
- [@twitter](twitter.com/joelwembo1)
- [@linkedin](https://www.linkedin.com/in/joelotepawembo)



