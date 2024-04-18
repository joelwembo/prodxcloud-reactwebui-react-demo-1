# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## docker && docker compose
DOCKER_SCAN_SUGGEST=false docker build -t prodxcloud:latest .
docker run -p 80:80 --name react prodxcloud:latest

## run ssl
# docker-compose -f ./deployments/traefik/docker-compose-ssl.yml up -d
# DOCKER_SCAN_SUGGEST=false docker build -t prodxcloud:latest .
# docker-compose -f ./docker-compose-ssl.yml up -d

docker build -t joelwembo/prodxcloud:latest .
docker run -p 80:80 --name react joelwembo/prodxcloud:latest

# For SSL Certificate in your react application use following Script

# docker-compose -f ./deployments/traefik/docker-compose-ssl.yml up -d
# DOCKER_SCAN_SUGGEST=false docker build -t prodxcloud:latest .
# docker-compose -f ./docker-compose-ssl.yml up -d



### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## 

 // "start": "SET NODE_OPTIONS=--openssl-legacy-provider && react-scripts start",
// "build": "SET NODE_OPTIONS=--openssl-legacy-provider && react-scripts build",