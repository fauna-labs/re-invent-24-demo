# Getting started

This application has 3 parts:

### Fauna + Cloudflare Worker

The core application is a Fauna Cloudflare workers serverless REST api. The application is globally distributed by default. Meaning, data and compute always happens closer to the user's
location minimizing latency.

You will find the code for this in the `cf-fauna` folder. Follow [this tutorial](https://docs.fauna.com/fauna/current/build/workshops/cloudflare/) on Fauna + Cloundflare to learn more.

### A Node.js server: 

There is a simple node.js server that is provided in the `ec2-app` folder. You can deploy this node.js server in multiple geolocation and interact with the Cloudflare workers + Fauna REST api from there.

### A Front end application:

A react application is in `frontend` folder. The React application make requests to the ec2 servers in various location demostrating that the ec2 servers recieve data from the Fauna Cloudflare serverless REST api in almost same time. 

Frontend application is deployed at 

https://sweet-brigadeiros-9add5b.netlify.app/
